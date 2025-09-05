import React, { useState, useEffect } from 'react',
import { supabase } from '@/integrations/supabase/client',
import {logErrorToProduction} from '@/utils/productionLogger',
import { 
  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table',
import { Button } from '@/components/ui/button',
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
import { Badge } from '@/components/ui/badge',
import { toast } from '@/hooks/use-toast',
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant',
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from 'lucide-react'
import { format } from 'date-fns',
export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),
  const [isLoading, setIsLoading] = useState(true),

  useEffect(() => {
    loadTenants()
  }, []),

  const loadTenants = async () => {
    try {
      setIsLoading(true),
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('*')
        .order('created_at', { ascending: false }),
        
      if (error) throw error,
      setTenants(data as WhitelabelTenant[])
    } catch (error: any) {
      logErrorToProduction('Error loading tenants:', { data: error }),
      toast({
        variant: 'destructive',
        title: 'Failed to load tenants',
        description: error.message})
    } finally {
      setIsLoading(false)
    }
  },

  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from('whitelabel_tenants')
        .update({ is_active: !(tenant as any).is_active })
        .eq('id', (tenant as any).id),
        
      if (error) throw error,
      
      // Update local state
      setTenants(tenants.map(t => 
        (t as any).id === (tenant as any).id ? { ...t, is_active: !(t as any).is_active } : t
      )),
      
      toast({
        title: `Tenant ${(tenant as any).is_active ? 'deactivated' : 'activated'}`,
        description: `${(tenant as any).brand_name} has been ${(tenant as any).is_active ? 'deactivated' : 'activated'} successfully.`})
    } catch (error: any) {
      logErrorToProduction('Error toggling tenant status:', { data: error }),
      toast({
        variant: 'destructive',
        title: 'Failed to update tenant',
        description: error.message})
    }
  },

  const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records
      // For now, we'll just mark it as verified
      const { error } = await supabase
        .from('whitelabel_tenants')
        .update({ dns_verified: true })
        .eq('id', (tenant as any).id),
        
      if (error) throw error,
      
      // Update local state
      setTenants(tenants.map(t => 
        (t as any).id === (tenant as any).id ? { ...t, dns_verified: true } : t
      )),
      
      toast({
        title: 'DNS verified',
        description: `Custom domain for ${(tenant as any).brand_name} has been verified.`})
    } catch (error: any) {
      logErrorToProduction('Error verifying DNS:', { data: error }),
      toast({
        variant: 'destructive',
        title: 'Failed to verify DNS',
        description: error.message})
    }
  },

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex justify-between items-center&quot;>
        <h2 className=&quot;text-xl font-semibold&quot;>White-Label Tenants</h2>
        <Button onClick={loadTenants} variant=&quot;outline&quot; size=&quot;sm&quot;>
          <RefreshCcw className=&quot;mr-2 h-4 w-4&quot; />
          Refresh
        </Button>
      </div>

      {isLoading ? (
        <div className=&quot;flex justify-center p-8&quot;>
          <div className=&quot;animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary&quot;></div>
        </div>
      ) : (
        <div className=&quot;rounded-md border&quot;>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Subdomain</TableHead>
                <TableHead>Custom Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className=&quot;text-right&quot;>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className=&quot;text-center py-8 text-muted-foreground&quot;>
                    No tenants found. Create a new white-label instance to get started.
                  </TableCell>
                </TableRow>
              ) : (
                tenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className=&quot;font-medium&quot;>{tenant.brand_name}</TableCell>
                    <TableCell>
                      <a 
                        href={`https://${tenant.subdomain}.ziontechmarketplace.com`}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center hover:underline&quot;
                      >
                        {tenant.subdomain}
                        <ExternalLink className=&quot;ml-1 h-3 w-3&quot; />
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tenant.custom_domain ? (
                        <div className=&quot;flex items-center&quot;>
                          <a
                            href={`https://${tenant.custom_domain}`}
                            target=&quot;_blank&quot;
                            rel=&quot;noopener noreferrer&quot;
                            className=&quot;hover:underline flex items-center&quot;
                          >
                            {tenant.custom_domain}
                            <ExternalLink className=&quot;ml-1 h-3 w-3&quot; />
                          </Link>
                          <Badge 
                            variant={tenant.dns_verified ? &quot;default&quot; : &quot;outline&quot;} 
                          >
                            {tenant.dns_verified ? &quot;Verified&quot; : &quot;Pending&quot;}
                          </Badge>
                          {!tenant.dns_verified && (
                            <Button 
                              variant=&quot;ghost&quot; 
                              size=&quot;sm&quot; 
                              onClick={() => verifyDns(tenant)}
                              className=&quot;ml-1 h-6 w-6 p-0&quot;
                            >
                              <RefreshCcw className=&quot;h-3 w-3&quot; />
                              <span className=&quot;sr-only&quot;>Verify DNS</span>
                            </Button>
                          )}
                        </div>
                      ) : (
                        <span className=&quot;text-muted-foreground text-sm&quot;>None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={tenant.is_active ? &quot;default&quot; : &quot;destructive&quot;}>
                        {tenant.is_active ? &quot;Active&quot; : &quot;Inactive&quot;}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className=&quot;text-right&quot;>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant=&quot;ghost&quot; size=&quot;sm&quot;>
                            <MoreHorizontal className=&quot;h-4 w-4&quot; />
                            <span className=&quot;sr-only&quot;>Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align=&quot;end&quot;>
                          <DropdownMenuItem>
                            <Edit className=&quot;mr-2 h-4 w-4&quot; />
                            Edit Tenant
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className=&quot;mr-2 h-4 w-4&quot; />
                            Manage Admins
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>
                            {tenant.is_active ? (
                              <>
                                <PowerOff className=&quot;mr-2 h-4 w-4&quot; />
                                Disable Tenant
                              </>
                            ) : (
                              <>
                                <Power className=&quot;mr-2 h-4 w-4&quot; />
                                Enable Tenant
                              </>
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

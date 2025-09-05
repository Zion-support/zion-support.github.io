<<<<<<< HEAD
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
=======
import React, {_useState, _useEffect} from 'react';
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from '@/components/ui/table';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from '@/components/ui/dropdown-menu';

export function TenantsList() {_const [tenants, _setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, _setIsLoading] = useState(true);

  useEffect__(() => {
    loadTenants();}, []);

  const _loadTenants = async () => {_try {
      setIsLoading(true);
      const { data, _error} = await supabase
        .from('whitelabel_tenants')
        .select('*')
        .order('created_at', {_ascending: false});
        
      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
    } catch (error: unknown) {_logErrorToProduction('Error loading tenants:', _{ data: error});
      toast({_variant: 'destructive', _title: 'Failed to load tenants', _description: error.message});
    } finally {_setIsLoading(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _toggleTenantStatus = async (_tenant: WhitelabelTenant) => {_try {
      const { error} = await supabase
        .from('whitelabel_tenants')
<<<<<<< HEAD
        .update({ is_active: !(tenant as any).is_active })
        .eq('id', (tenant as any).id),
=======
        .update({_is_active: !(tenant as any).is_active})
        .eq('id', (tenant as any).id);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
      // Update local state
      setTenants(tenants.map(t => 
<<<<<<< HEAD
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
=======
        (t as any).id === (tenant as any).id ? {_...t, _is_active: !(t as any).is_active} : t
      ));
      
      toast({_title: `Tenant ${(tenant as any).is_active ? 'deactivated' : 'activated'}`,
        description: `${_(tenant as any).brand_name} has been ${_(tenant as any).is_active ? 'deactivated' : 'activated'} successfully.`});
    } catch (error: unknown) {_logErrorToProduction('Error toggling tenant status:', _{ data: error});
      toast({_variant: 'destructive', _title: 'Failed to update tenant', _description: error.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  const _verifyDns = async (_tenant: WhitelabelTenant) => {_try {
      // In a real implementation, _this would verify DNS records
      // For now, _we'll just mark it as verified
      const { error} = await supabase
        .from('whitelabel_tenants')
<<<<<<< HEAD
        .update({ dns_verified: true })
        .eq('id', (tenant as any).id),
=======
        .update({_dns_verified: true})
        .eq('id', (tenant as any).id);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
      // Update local state
      setTenants(tenants.map(t => 
<<<<<<< HEAD
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
=======
        (t as any).id === (tenant as any).id ? {_...t, _dns_verified: true} : t
      ));
      
      toast({_title: 'DNS verified', _description: `Custom domain for ${(tenant as any).brand_name} has been verified.`});
    } catch (error: unknown) {_logErrorToProduction('Error verifying DNS:', _{ data: error});
      toast({_variant: 'destructive', _title: 'Failed to verify DNS', _description: error.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
<<<<<<< HEAD
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex justify-between items-center&quot;>
        <h2 className=&quot;text-xl font-semibold&quot;>White-Label Tenants</h2>
        <Button onClick={loadTenants} variant=&quot;outline&quot; size=&quot;sm&quot;>
          <RefreshCcw className=&quot;mr-2 h-4 w-4&quot; />
=======
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>
        <Button onClick={_loadTenants} variant="outline" size="sm">
          <RefreshCcw className="mr-2 h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Refresh
        </Button>
      </div>

<<<<<<< HEAD
      {isLoading ? (
        <div className=&quot;flex justify-center p-8&quot;>
          <div className=&quot;animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary&quot;></div>
=======
      {_isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
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
=======
              ) : (_tenants.map((tenant) => (_<TableRow key={_tenant.id}>
                    <TableCell className="font-medium">{_tenant.brand_name}</TableCell>
                    <TableCell>
                      <a 
                        href={_`https://${tenant.subdomain}.ziontechmarketplace.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        {_tenant.subdomain}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </TableCell>
                    <TableCell>
                      {_tenant.custom_domain ? (
                        <div className="flex items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          <a
                            href={`https://${tenant.custom_domain}`}
                            target=&quot;_blank&quot;
                            rel=&quot;noopener noreferrer&quot;
                            className=&quot;hover:underline flex items-center&quot;
                          >
<<<<<<< HEAD
                            {tenant.custom_domain}
                            <ExternalLink className=&quot;ml-1 h-3 w-3&quot; />
                          </Link>
                          <Badge 
                            variant={tenant.dns_verified ? &quot;default&quot; : &quot;outline&quot;} 
                          >
                            {tenant.dns_verified ? &quot;Verified&quot; : &quot;Pending&quot;}
=======
                            {_tenant.custom_domain}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                          <Badge 
                            variant={_tenant.dns_verified ? "default" : "outline"} 
                          >
                            {_tenant.dns_verified ? "Verified" : "Pending"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </Badge>
                          {_!tenant.dns_verified && (
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
<<<<<<< HEAD
                      <Badge variant={tenant.is_active ? &quot;default&quot; : &quot;destructive&quot;}>
                        {tenant.is_active ? &quot;Active&quot; : &quot;Inactive&quot;}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className=&quot;text-right&quot;>
=======
                      <Badge variant={_tenant.is_active ? "default" : "destructive"}>
                        {_tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{_format(new Date(tenant.created_at), _'MMM d, _yyyy')}</TableCell>
                    <TableCell className="text-right">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
                          <DropdownMenuItem onClick={_() => toggleTenantStatus(tenant)}>
                            {_tenant.is_active ? (
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

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

  const _toggleTenantStatus = async (_tenant: WhitelabelTenant) => {_try {
      const { error} = await supabase
        .from('whitelabel_tenants')
        .update({_is_active: !(tenant as any).is_active})
        .eq('id', (tenant as any).id);
        
      if (error) throw error;
      
      // Update local state
      setTenants(tenants.map(t => 
        (t as any).id === (tenant as any).id ? {_...t, _is_active: !(t as any).is_active} : t
      ));
      
      toast({_title: `Tenant ${(tenant as any).is_active ? 'deactivated' : 'activated'}`,
        description: `${_(tenant as any).brand_name} has been ${_(tenant as any).is_active ? 'deactivated' : 'activated'} successfully.`});
    } catch (error: unknown) {_logErrorToProduction('Error toggling tenant status:', _{ data: error});
      toast({_variant: 'destructive', _title: 'Failed to update tenant', _description: error.message});
    }
  };

  const _verifyDns = async (_tenant: WhitelabelTenant) => {_try {
      // In a real implementation, _this would verify DNS records
      // For now, _we'll just mark it as verified
      const { error} = await supabase
        .from('whitelabel_tenants')
        .update({_dns_verified: true})
        .eq('id', (tenant as any).id);
        
      if (error) throw error;
      
      // Update local state
      setTenants(tenants.map(t => 
        (t as any).id === (tenant as any).id ? {_...t, _dns_verified: true} : t
      ));
      
      toast({_title: 'DNS verified', _description: `Custom domain for ${(tenant as any).brand_name} has been verified.`});
    } catch (error: unknown) {_logErrorToProduction('Error verifying DNS:', _{ data: error});
      toast({_variant: 'destructive', _title: 'Failed to verify DNS', _description: error.message});
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>
        <Button onClick={_loadTenants} variant="outline" size="sm">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      {_isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Subdomain</TableHead>
                <TableHead>Custom Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No tenants found. Create a new white-label instance to get started.
                  </TableCell>
                </TableRow>
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
                          <a
                            href={`https://${tenant.custom_domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center"
                          >
                            {_tenant.custom_domain}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                          <Badge 
                            variant={_tenant.dns_verified ? "default" : "outline"} 
                          >
                            {_tenant.dns_verified ? "Verified" : "Pending"}
                          </Badge>
                          {_!tenant.dns_verified && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => verifyDns(tenant)}
                              className="ml-1 h-6 w-6 p-0"
                            >
                              <RefreshCcw className="h-3 w-3" />
                              <span className="sr-only">Verify DNS</span>
                            </Button>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={_tenant.is_active ? "default" : "destructive"}>
                        {_tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{_format(new Date(tenant.created_at), _'MMM d, _yyyy')}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Tenant
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            Manage Admins
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={_() => toggleTenantStatus(tenant)}>
                            {_tenant.is_active ? (
                              <>
                                <PowerOff className="mr-2 h-4 w-4" />
                                Disable Tenant
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
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
  );
}

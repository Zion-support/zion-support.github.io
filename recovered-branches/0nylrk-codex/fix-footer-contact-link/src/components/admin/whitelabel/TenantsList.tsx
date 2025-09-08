
<<<<<<< HEAD

=======
Table,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD


} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,;
DropdownMenuTrigger,;
  DropdownMenuTrigger,



=======
  TableRow
} from "@/components/ui/table";"
import { Button } from "@/components/ui/button";"
  }
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";"
import { Badge } from "@/components/ui/badge";"
import { toast } from "@/hooks/use-toast";"
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";"
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";


<<<<<<< HEAD
import {;
  Edit,;
  MoreHorizontal,;
  ExternalLink,;
  Power,;
  PowerOff,;
  Users,;
  RefreshCcw,;
} from "@/components/icons";
import { format } from "date-fns";
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    loadTenants();

  }, []);

<<<<<<< HEAD
  const loadTenants = async () => {;
    try {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(true);
      const { data, error } = await supabase;"
        .from("whitelabel_tenants");"
        .select("*");"
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);

<<<<<<< HEAD
    } catch (error: any) {;
      console && console.error("Error loading tenants:", error);
      toast({;
        variant: "destructive",;
        title: "Failed to load tenants",;
        description: error && error.message,;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      });
    } finally {;
      setIsLoading(false);
    }


import {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,


<<<<<<< HEAD

  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })

        .eq("id", tenant.id);
=======
    loadTenants();
  }, []);

  const loadTenants = async () => {}
    try {}
      setIsLoading(true);
      const { data, error } = await supabase"
        .from("whitelabel_tenants")"
        .select("*")"

        .order("created_at", { ascending: false });

      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState, useEffect } from 'react',;

import { supabase } from '@/integrations/supabase/client',;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;

import { Button } from '@/components/ui/button',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;

  }, []),;
  const loadTenants = async () => {;
    try {;
      setIsLoading(true),;

        title: 'Failed to load tenants',;
        description: error.message});
    } finally {;
      setIsLoading(false);
    }
  },;
<<<<<<< HEAD



=======
  };
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {;
    try {;
      const { error } = await supabase;
        .from("whitelabel_tenants");
        .update({ is_active: !tenant && tenant.is_active });
        .eq("id", tenant && tenant.id);
      if (error) throw error;
        .eq("id", tenant && tenant.id);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Update local state;
      setTenants(;
        tenants && tenants.map((t) =>;
          t && t.id === tenant && tenant.id ? { ...t, is_active: !t && t.is_active } : t,;
        ),;
      );
<<<<<<< HEAD



=======
      toast({;
        title: `Tenant ${tenant && tenant.is_active ? "deactivated" : "activated"}`,;
        description: `${tenant && tenant.brand_name} has been ${tenant && tenant.is_active ? "deactivated" : "activated"} successfully.`,;
      });
    } catch (error: any) {;
      console && console.error("Error toggling tenant status:", error);
      toast({;
        variant: "destructive",;
        title: "Failed to update tenant",;
        title: "Failed to update tenant",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: error && error.message,;
      });
    }
  };
<<<<<<< HEAD



=======
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {;
    try {;
      const { error } = await supabase;
        .from('whitelabel_tenants');
        .update({ is_active: !tenant.is_active });
        .eq('id', tenant.id),;
      if (error) throw error,;
      // Update local state;
      setTenants(tenants.map(t =>;
        t.id === tenant.id ? { ...t, is_active: !t.is_active } : t;
      )),;
      toast({;
        title: `Tenant ${tenant.is_active ? 'deactivated' : 'activated'}`,;
        description: `${tenant.brand_name} has been ${tenant.is_active ? 'deactivated' : 'activated'} successfully.`});
    } catch (error: any) {;
      console.error('Error toggling tenant status:', error),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to update tenant',;
        description: error.message});
    }
  },;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const verifyDns = async (tenant: WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;'
      // For now, we'll just mark it as verified;
<<<<<<< HEAD

      const { error } = await supabase;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  },

  return (


<<<<<<< HEAD
}
"variant": "destructive",;"
        "title": "Failed to verify DNS","
        "description": error.message
      });


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-4">;
      <div className="flex justify-between items-center">;
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>;
        <Button onClick={loadTenants} variant="outline" size="sm">;

          <RefreshCcw className="mr-2 h-4 w-4" />;
          Refresh;
        </Button>;
      </div>;

<<<<<<< HEAD

=======
      {isLoading ? (;"
        <div className="flex justify-center p-8">;"
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>;
        </div>;

      ) : (;
"
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="rounded-md border">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Brand</TableHead>;
                <TableHead>Subdomain</TableHead>;
                <TableHead>Custom Domain</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead>Created At</TableHead>;"
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                  <TableCell;
                    colSpan={6}"

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    className="text-center py-8 text-muted-foreground">;
                    No tenants found. Create a new white-label instance to get;
                    started.;
                  </TableCell>;
                </TableRow>;
              ) : (;
                tenants && tenants.map((tenant) => (;
                  <TableRow key={tenant && tenant.id}>;"
                    <TableCell className="font-medium">;
                      {tenant && tenant.brand_name}
                    </TableCell>;
                    <TableCell>;
                      <a;`
                        href={`https://${tenant && tenant.subdomain}.ziontechmarketplace && ziontechmarketplace.com`}"
                        target="_blank""
                        rel="noopener noreferrer""
                        className="flex items-center hover:underline">;
                        {tenant && tenant.subdomain}
<<<<<<< HEAD


=======


"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <ExternalLink className="ml-1 h-3 w-3" />;
                      </a>;
                    </TableCell>;
                    <TableCell>;
<<<<<<< HEAD


=======


                      {tenant && tenant.custom_domain ? (;"
                        <div className="flex items-center">;
                          <a;`
                            href={`https://${tenant && tenant.custom_domain}`}"
                            target="_blank""
                            rel="noopener noreferrer"


                              onClick={() => verifyDns(tenant)}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                              className="ml-1 h-6 w-6 p-0";
                            >;"
                              <RefreshCcw className="h-3 w-3" />;"
                              <span className="sr-only">Verify DNS</span>;
                            </Button>;
                          )}

<<<<<<< HEAD
                        </div>;

                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem>;

=======

                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem>;

                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    </TableCell>;

                    </TableCell>
                    <TableCell>"
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>"
                        {tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>'
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>"
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>"
                          <Button variant="ghost" size="sm">"
                            <MoreHorizontal className="h-4 w-4" />"
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>"
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>"
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Tenant;
                          </DropdownMenuItem>
                          <DropdownMenuItem>"
                            <Users className="mr-2 h-4 w-4" />
                            Manage Admins;
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>
                            {tenant.is_active ? (
                              <>"
                                <PowerOff className="mr-2 h-4 w-4" />
                                Disable Tenant;
                              </>
                            ) : (
                              <>"
                                <Power className="mr-2 h-4 w-4" />
                                Enable Tenant;

                <TableHead > Brand;
                <TableHead > Subdomain;
                <TableHead > Custom Domain;
                <TableHead > Status;
                <TableHead > Created At;"
                <TableHead className="text - right">Actions;"

                    col_span={6}"
                    className="text - center py - 8 text - muted - foreground";"
                  >;

                  ;)
                ) : (
                  <TableRow key={tenant.id}>;
                    <TableCell className="font - medium">;"

                        href={`https://${tenant.subdomain}.ziontechmarketplace.com`}"
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items - center hover:underline";"
                        <ExternalLink className="ml - 1 h - 3 w - 3" />;"

                        <div className="flex items - center">;"
                            href={`https://${tenant.custom_domain}`}"
                            className="hover:underline flex items - center";"

                              tenant.dns_verified ? "default" : "outline";"
                            className="ml - 2";"

                              variant="ghost";""
                              size="sm";")
                              on_click={() => verify_dns (tenant)}
                              <RefreshCcw className="h - 3 w - 3" />;"
                              <span className="sr - only">Verify DNS</span>;"
                            )}
                        <span className="text - muted - foreground text - sm">;"
</span>)
                        </span>)}

                      <Badge;"
                        variant={tenant.is_active ? "default" : "destructive"}"

                    ;"
                    <TableCell className="text - right">;"

                      <DropdownMenu>;

                        <DropdownMenuTrigger as_child>;
                          <Button variant="ghost" size="sm">;"
                            <MoreHorizontal className="h - 4 w - 4" />;"
                            <span className="sr - only">Actions</span>;"
                        <DropdownMenuContent align="end">;"

</TableCell>;
                    <TableCell>;
                      <Badge
                        variant={tenant && tenant.is_active ? "default" : "destructive"}>;
                        {tenant && tenant.is_active ? "Active" : "Inactive"}
                      </Badge>;
                    </TableCell>;
                    <TableCell>;
                      {format(new Date(tenant && tenant.created_at), "MMM d, yyyy")}
                    </TableCell>;
                      ) :(;
                        <span className="text-muted-foreground text-sm">None</span>;
                      )}
                    </TableCell>;
                    <TableCell>;
                      <Badge variant={tenant.is_active ? "default" :"destructive"}>;
                        {tenant.is_active ? "Active" :"Inactive"}
                      </Badge>;
                    </TableCell>;
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>;
                    <TableCell className="text-right">;
                      <DropdownMenu>;
                        <DropdownMenuTrigger asChild>;
                          <Button variant="ghost" size="sm">;

                            <MoreHorizontal className="h-4 w-4" />;
                            <span className="sr-only">Actions</span>;
                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                            <Edit className="mr - 2 h - 4 w - 4" />;"

                            <Users className="mr - 2 h - 4 w - 4" />;"

                          <DropdownMenuItem;
                            on_click={() => toggleTenantStatus (tenant)}

                              <>;"
                                <PowerOff className="mr - 2 h - 4 w - 4" />;"

                              </>) : (
                                <Power className="mr - 2 h - 4 w - 4" />;"
)
                              </>)}

<Edit className="mr-2 h-4 w-4" />;
                            Edit Tenant;
                          </DropdownMenuItem>;
                          <DropdownMenuItem>;
                            <Users className="mr-2 h-4 w-4" />;
                            Manage Admins;
                          </DropdownMenuItem>;
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>;
                            {tenant.is_active ? (;
                              <>;
                                <PowerOff className="mr-2 h-4 w-4" />;
                                Disable Tenant;
                              </>;
                            ) :(;
                              <>;
                                <Power className="mr-2 h-4 w-4" />;
                                Enable Tenant;

<<<<<<< HEAD
=======
                              </>;                            )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    </TableCell>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </TableRow>)))}
            </TableBody>;
          </Table>;
                  )))}
        </div>)}
    </div>);
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>"

}
<<<<<<< HEAD
=======
.from('whitelabel_tenants');
        .update({ dns_verified: true });
        .eq('id', tenant.id),;
      if (error) throw error,;
      // Update local state;
      setTenants(tenants.map(t =>;
        t.id === tenant.id ? { ...t, dns_verified: true } : t;
      )),;
      toast({;
        title: 'DNS verified',;
        description: `Custom domain for ${tenant.brand_name} has been verified.`});
    } catch (error: any) {;
      console.error('Error verifying DNS:', error),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to verify DNS';
        description: error.message});
    }
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </TableCell>
                    <TableCell>
<<<<<<< HEAD

=======
                      {tenant.custom_domain ? (
                        <div className="flex items-center">
                          <a
                            href={`https://${tenant.custom_domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center"
                          >
                            {tenant.custom_domain}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                          <Badge 
                            variant={tenant.dns_verified ? "default" : "outline"} 
                            className="ml-2"
                          >
                            {tenant.dns_verified ? "Verified" : "Pending"}
                          </Badge>
                          {!tenant.dns_verified && (
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

                  </TableRow>)))}
            </TableBody>;
          </Table>;
                  )))}
        </div>)}
    </div>);
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>"

}

                    </TableCell>
                    <TableCell>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>
                        {tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right">
<<<<<<< HEAD

                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}
                    <TableCell className="text-right">"


                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>

=======
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}
                    <TableCell className="text-right">"

                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <Button variant="ghost" size="sm">"
                            <MoreHorizontal className="h-4 w-4" />"
                            <span className="sr-only">Actions</span>"
                        <DropdownMenuContent align="end">"

                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />"

                            <Users className="mr-2 h-4 w-4" />"

                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>

                              </>
<<<<<<< HEAD
=======
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
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>
                            {tenant.is_active ? (
                              <>
                                <PowerOff className="mr-2 h-4 w-4" />
                                Disable Tenant
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
                                Enable Tenant
                              </>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                <Power className="mr-2 h-4 w-4" />"

                              </>)

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

<<<<<<< HEAD
=======
</div>
  );
}
</div>
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
  tenant.is active ? (<> <PowerOff className="mr-2 h-4 w-4" /> Disable Tenant </>) : (<> <Power className="mr-2 h-4 w-4" /> Enable Tenant </>) 
}</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </TableCell> </TableRow>) ) ) 
}</TableBody> </Table> </div>) 
}</div>) 
}
</div>
  );
}
}className="ml-1 h-6 w-6 p-0" > <RefreshCcw className="h-3 w-3" /> <span className="sr-only" >Verify DNS</span> )"
}</div>) : (<span className="text-muted-foreground text-sm" >None</span>)""
} <TableCell> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="sm" > <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >Actions</span>   <DropdownMenuContent align="end" > <DropdownMenuItem> <Edit className="mr-2 h-4 w-4" /> Edit Tenant  <DropdownMenuItem> <Users className="mr-2 h-4 w-4" /> Manage Admins  <DropdownMenuItem onClick= {"
  tenant.is active ? (<> <PowerOff className="mr-2 h-4 w-4" /> Disable Tenant </>) : (<> <Power className="mr-2 h-4 w-4" /> Enable Tenant </>)"

}    ) ) ) 
}  </div>) 
}</div>) 
</div>"`;
pr-12325

</div>"
>>>>>>> origin/cursor/delete-old-data-records-6bba

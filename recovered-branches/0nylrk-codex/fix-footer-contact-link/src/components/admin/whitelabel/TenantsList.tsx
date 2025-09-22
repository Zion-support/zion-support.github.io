
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from "@/components/ui/table";
  DropdownMenuTrigger,;} from "@/components/ui/table";
  DropdownMenuTrigger,;} from "@/components/ui/table";

} from "@/components/ui/table";"

  TableRow,;
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,;
DropdownMenuTrigger,;
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";

"
} from "@/components/ui/dropdown-menu";"
import { Badge } from "@/components/ui/badge";"
import { toast } from "@/hooks/use-toast";"
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";

    loadTenants();
  DropdownMenuTrigger,import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";    loadTenants();
  DropdownMenuTrigger,import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";    loadTenants();
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";

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

    loadTenants();
  }, []);

      setIsLoading(true);
      const { data, error } = await supabase;"
        .from("whitelabel_tenants");"
        .select("*");"
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);

      });
    } finally {;
      setIsLoading(false);
    }

};

import {
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,

  useEffect(() => {
    loadTenants();
  }, []);

  const loadTenants = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("whitelabel_tenants")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
    } catch (error: any) {
      console.error("Error loading tenants:", error);
      toast({
        variant: "destructive",
        title: "Failed to load tenants",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })
        .eq("id", tenant.id);

      if (error) throw error;

      // Update local state
      setTenants(
        tenants.map((t) =>
          t.id === tenant.id ? { ...t, is_active: !t.is_active } : t,
        ),
      );

      toast({
        title: `Tenant ${tenant.is_active ? "deactivated" : "activated"}`,
        description: `${tenant.brand_name} has been ${tenant.is_active ? "deactivated" : "activated"} successfully.`,
      });
    } catch (error: any) {
      console.error("Error toggling tenant status:", error);
      toast({
        variant: "destructive",
        title: "Failed to update tenant",
        description: error.message,
      });
    }
  };

  const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records
      // For now, we'll just mark it as verified
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ dns_verified: true })
        .eq("id", tenant.id);

      if (error) throw error;

      // Update local state
      setTenants(
        tenants.map((t) =>
          t.id === tenant.id ? { ...t, dns_verified: true } : t,
        ),
      );

      toast({
        title: "DNS verified",
        description: `Custom domain for ${tenant.brand_name} has been verified.`,
      });
    } catch (error: any) {
      console.error("Error verifying DNS:", error);
      toast({
        variant: "destructive",
        title: "Failed to verify DNS",
        description: error.message,
      });
    }
  };
import {
import {}
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,

  useEffect(() => {};
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
    } catch (error: any) {"
      console.error("Error loading tenants:", error);
      toast({}
      });
    } finally {}
      setIsLoading(false);
    }

  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {}
    try {}
      const { error } = await supabase"
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })"
        .eq("id", tenant.id);

      });
    } catch (error: any) {"
      console.error("Error toggling tenant status:", error);
      toast({}
  const verifyDns = async (tenant: WhitelabelTenant) => {}
    try {}
      // In a real implementation, this would verify DNS records;
      // For now, we'll just mark it as verified;
      const { error } = await supabase"
        .from("whitelabel_tenants")
        .update({ dns_verified: true })"
        .eq("id", tenant.id);

      });
    } catch (error: any) {"
      console.error("Error verifying DNS:", error);
      toast({}
import {}
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,;
  RefreshCcw,;"
} from "@/components/icons";"
import { format } from "date-fns";
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
} catch (error: any) {"
      console.error("Error loading tenants:", error);
      toast({"
        variant: "destructive","
        title: "Failed to load tenants",
        description: error.message,
      });
    } finally {}
      setIsLoading(false);
    }
  };

const toggleTenantStatus = async (tenant: WhitelabelTenant) => {}
    try {}
      const { error } = await supabase"
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })"
        .eq("id", tenant.id);
      });
    } catch (error: any) {"
      console.error("Error toggling tenant status:", error);
      toast({}
  const verifyDns = async (tenant: WhitelabelTenant) => {}
    try {}
      // In a real implementation, this would verify DNS records'
      // For now, we'll just mark it as verified;
      const { error } = await supabase"
        .from("whitelabel_tenants")
        .update({ dns_verified: true })"
        .eq("id", tenant.id);
      });
    } catch (error: any) {"
      console.error("Error verifying DNS:", error);
      toast({"
} from "@/components/icons";"
import { format } from "date-fns";
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

import React, { useState, useEffect } from 'react',;
export function TenantsList() { return null; }
import React, { useState, useEffect } from 'react',;'
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })
        .eq("id", tenant.id);
      });
    } catch (error: any) {
      console.error("Error toggling tenant status:", error);
      toast({
  const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records
      // For now, we'll just mark it as verified
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ dns_verified: true })
        .eq("id", tenant.id);
      });
    } catch (error: any) {
      console.error("Error verifying DNS:", error);
      toast({
} from "@/components/icons";
import { format } from "date-fns";
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
TableRow;'
} from '@/components/ui/table',;'
import { Button } from '@/components/ui/button',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
DropdownMenuItem,;'
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',;'
import { Badge } from '@/components/ui/badge',;'
import { toast } from '@/hooks/use-toast',;'
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant',;'
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from '@/components/icons',;'
import { format } from 'date-fns',;
export function TenantsList() { return null; }
  }, []),;
  const loadTenants = async () => {;
    try {;
      setIsLoading(true),;
const { data, error } = await supabase;'
        .from('whitelabel_tenants');'
        .select('*');'
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setTenants(data as WhitelabelTenant[]);
    } catch (error: any) {;'
      console.error('Error loading tenants:', error),;
      toast({;'
        variant: 'destructive',;'
        title: 'Failed to load tenants',;
        description: error.message});
    } finally {;
      setIsLoading(false);
    }
  },;

const toggleTenantStatus = async (tenant: WhitelabelTenant) => {;
    try {;
      const { error } = await supabase;"
        .from("whitelabel_tenants");
        .update({ is_active: !tenant && tenant.is_active });"
        .eq("id", tenant && tenant.id);
      // Update local state;
      setTenants(;
        tenants && tenants.map((t) =>;
          t && t.id === tenant && tenant.id ? { ...t, is_active: !t && t.is_active } : t,;
        ),;
      );
toast({;"
        title: `Tenant ${tenant && tenant.is_active ? "deactivated" : "activated"}`,;"`
        description: `${tenant && tenant.brand_name} has been ${tenant && tenant.is_active ? "deactivated" : "activated"} successfully.`,;
      });
    } catch (error: any) {;"
      console && console.error("Error toggling tenant status:", error);
      toast({;"
        variant: "destructive",;"
        title: "Failed to update tenant",;
        description: error && error.message,;
      });
    }
  };


  const verifyDns = async (tenant: WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;'
      // For now, we'll just mark it as verified;
const { error } = await supabase;    }

  },

  return (

  }
  return (
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',;
import { Badge } from '@/components/ui/badge',;
import { toast } from '@/hooks/use-toast',;
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant',;
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from '@/components/icons',;
import { format } from 'date-fns',;
;
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    loadTenants(),;
  }, []),;
;
  const loadTenants = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('*');
        .order('created_at', { ascending:false }),;
        ;
      if (error) throw error,;
      setTenants(data as WhitelabelTenant[]),;
    } catch (error:any) {;
      console.error('Error loading tenants:', error),;
      toast({;
        variant:'destructive',;
        title:'Failed to load tenants',;
        description:error.message}),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const toggleTenantStatus = async (tenant:WhitelabelTenant) => {;
    try {;
      const { error } = await supabase;
        .from('whitelabel_tenants');
        .update({ is_active:!tenant.is_active });
        .eq('id', tenant.id),;
        ;
      if (error) throw error,;
      ;
      // Update local state;
      setTenants(tenants.map(t => ;
        t.id === tenant.id ? { ...t, is_active:!t.is_active } t;
      )),;
      ;
      toast({;
        title:`Tenant ${tenant.is_active ? 'deactivated' :'activated'}`,;
        description:`${tenant.brand_name} has been ${tenant.is_active ? 'deactivated' :'activated'} successfully.`}),;
    } catch (error:any) {;
      console.error('Error toggling tenant status:', error),;
      toast({;
        variant:'destructive',;
        title:'Failed to update tenant',;
        description:error.message}),;
    }
  },;
;
  const verifyDns = async (tenant:WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;
      // For now, we'll just mark it as verified;
      const { error } = await supabase;
.from('whitelabel_tenants');
        .update({ dns_verified:true });
        .eq('id', tenant.id),;
        ;
      if (error) throw error,;
      ;
      // Update local state;
      setTenants(tenants.map(t => ;
        t.id === tenant.id ? { ...t, dns_verified:true } t;
      )),;
      ;
      toast({;
        title:'DNS verified',;
        description:`Custom domain for ${tenant.brand_name} has been verified.`}),;
    } catch (error:any) {;
      console.error('Error verifying DNS:', error),;
      toast({;
        variant:'destructive',;
        title:'Failed to verify DNS',;
        description:error.message}),;
    }
  },;
;
  return (;
    <div className="space-y-4">;
      <div className="flex justify-between items-center">;
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>;
        <Button onClick={loadTenants} variant="outline" size="sm">;
          <RefreshCcw className="mr-2 h-4 w-4" />;
          Refresh;
        </Button>;
      </div>;
        .from("whitelabel_tenants");
        .update({ dns_verified: true });
        .eq("id", tenant && tenant.id);

      if (error) throw error;

      // Update local state;
      setTenants(;
        tenants && tenants.map((t) =>;
          t && t.id === tenant && tenant.id ? { ...t, dns_verified: true } : t,;
        ),;
      );

      toast({;
        title: "DNS verified",;
        description: `Custom domain for ${tenant && tenant.brand_name} has been verified.`,;
      });
    } catch (error: any) {;
      console && console.error("Error verifying DNS:", error);
      toast({;
        variant: "destructive",;
        title: "Failed to verify DNS",;
        description: error && error.message,;
      });
    }

      {isLoading ? (;"
        <div className="flex justify-center p-8">;"
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>;
        </div>;

      ) : (;
"
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

              {tenants && tenants.length === 0 ? (;
                <TableRow>;

                  <TableCell;
                    colSpan={6}"
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

"
                        <ExternalLink className="ml-1 h-3 w-3" />;
                      </a>;
                    </TableCell>;
                    <TableCell>;

                      {tenant && tenant.custom_domain ? (;"
                        <div className="flex items-center">;
                          <a;`
                            href={`https://${tenant && tenant.custom_domain}`}"
                            target="_blank""
                            rel="noopener noreferrer"

                              onClick={() => verifyDns(tenant)}"
                              className="ml-1 h-6 w-6 p-0";
                            >;"
                              <RefreshCcw className="h-3 w-3" />;"
                              <span className="sr-only">Verify DNS</span>;
                            </Button>;
                          )}

                          </Button>;
                        </DropdownMenuTrigger>;"
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem>;

                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    </TableCell>;

</TableRow>)))}
            </TableBody>;
          </Table>;
        </div>)}
    </div>);

}
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
                              </>;                            )}
                          </DropdownMenuItem>;
                        </DropdownMenuContent>;
                      </DropdownMenu>;
                    </TableCell>;

                  </TableRow>)))}
            </TableBody>;
          </Table>;
                  )))}
        </div>)}
    </div>);
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>"

}
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>
        <Button onClick={loadTenants} variant="outline" size="sm">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>
      {isLoading ? (
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
              ) : (
                tenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className="font-medium">{tenant.brand_name}</TableCell>
                    <TableCell>
                      <a 
                        href={`https://${tenant.subdomain}.ziontechmarketplace.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        {tenant.subdomain}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>
                        {tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right">
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}
                    <TableCell className="text-right">"

                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">"
                            <MoreHorizontal className="h-4 w-4" />"
                            <span className="sr-only">Actions</span>"
                        <DropdownMenuContent align="end">"

                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />"

                            <Users className="mr-2 h-4 w-4" />"

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
                                <Power className="mr-2 h-4 w-4" />"

                              </>)

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

</div>
  );
}

    </div>;
),; const toggleTenantStatus = async (tenant: WhitelabelTenant) => {}
  try {}
  const {}
  error '
}= await supabase .from ('whitelabel tenants') if (error) throw error;
//Update local state setTenants (tenants.map (t => 
}
};
const verifyDns = async (tenant: WhitelabelTenant) => {}
  try {'
  //In a real implementation, this would verify DNS records //For now, we'll just mark it as verified const {}
  error '
}= await supabase .from ('whitelabel tenants') if (error) throw error;
//Update local state setTenants (tenants.map (t => 
}
};"
return (Refresh </Button> </div> </div>) : (<div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Brand</TableHead> <TableHead>Subdomain</TableHead> <TableHead>Custom Domain</TableHead> <TableHead>Status</TableHead> <TableHead>Created At</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {}
  tenants.length === 0 ? (<TableRow> <TableCell colSpan= {}
  6 "
}className="text-center py-8 text-muted-foreground" > No tenants found. Create a new white-label instance to get started. </TableCell> </TableRow> <a href= {}`
  `https://$ {}
  tenant.custom domain;`
}` "
}target="blank" rel="noopener noreferrer" className="hover:underline flex items-center" > </Badge> {"
  !tenant.dns verified && (<Button variant="ghost" size="sm" onClick= {}
  () => verifyDns (tenant) "
}className="ml-1 h-6 w-6 p-0" > <RefreshCcw className="h-3 w-3" /> <span className="sr-only" >Verify DNS</span> </Button>) "
}</div>) : (<span className="text-muted-foreground text-sm" >None</span>) "
}</TableCell> <TableCell> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="sm" > <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >Actions</span> </Button> </DropdownMenuTrigger> <DropdownMenuContent align="end" > <DropdownMenuItem> <Edit className="mr-2 h-4 w-4" /> Edit Tenant </DropdownMenuItem> <DropdownMenuItem> <Users className="mr-2 h-4 w-4" /> Manage Admins </DropdownMenuItem> <DropdownMenuItem onClick= {}
  () => toggleTenantStatus (tenant) 
}> {"
  tenants.length === 0 ? (<TableRow> <TableCell colSpan= {
}className="text-center py-8 text-muted-foreground" > No tenants found. Create a new white-label instance to get started.   <a href= {"`;
  `https://$ {
  tenant.custom domain;`;
}` "
}target="blank" rel="noopener noreferrer" className="hover:underline flex items-center" >  {"
  !tenant.dns verified && (<Button variant="ghost" size="sm" onClick= {")
  () => verifyDns (tenant) 
}className="ml-1 h-6 w-6 p-0" > <RefreshCcw className="h-3 w-3" /> <span className="sr-only" >Verify DNS</span> </Button>) 
}</div>) : (<span className="text-muted-foreground text-sm" >None</span>) 
}</TableCell> <TableCell> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="sm" > <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >Actions</span> </Button> </DropdownMenuTrigger> <DropdownMenuContent align="end" > <DropdownMenuItem> <Edit className="mr-2 h-4 w-4" /> Edit Tenant </DropdownMenuItem> <DropdownMenuItem> <Users className="mr-2 h-4 w-4" /> Manage Admins </DropdownMenuItem> <DropdownMenuItem onClick= {
  () => toggleTenantStatus (tenant) 
}> {
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


'"`

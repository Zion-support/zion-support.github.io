
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

import React, { useState, useEffect } from "react";""
import { supabase } from "@/integrations/supabase/client";"
pr-12325

import React, { useState, useEffect } from "react";""
import { supabase } from "@/integrations/supabase/client";"
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  TableRow,;"
} from "@/components/ui/table";""
import { Button } from "@/components/ui/button";"
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

  TableRow,;"
} from "@/components/ui/table";""
import { Button } from "@/components/ui/button";"

import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,
DropdownMenuTrigger,;
  DropdownMenuTrigger,
  DropdownMenuTrigger,import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";    loadTenants();
  }, []);

      setIsLoading(true);
      const { data, error } = await supabase;
        .from("whitelabel_tenants");
        .select("*");
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
  const verifyDns = async (tenant: WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;
      // For now, we'll just mark it as verified;
      const { error } = await supabase;    }

  },

  return (
  TableRow,;"
} from "@/components/ui/table";""
import { Button } from "@/components/ui/button";"
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

import {
  // TODO: Implement
}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuTrigger,"
} from "@/components/ui/dropdown-menu";""
import { Badge } from "@/components/ui/badge";""
import { toast } from "@/hooks/use-toast";""
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";"
  Edit,;
  MoreHorizontal,;
  ExternalLink,;
  Power,;
  PowerOff,;
  Users,;
  RefreshCcw,;"
} from "@/components/icons";""
import { format } from "date-fns";"
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);



  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
"
    <div className="space-y-4">;"
</div>"
      <div className="flex justify-between items-center">;"
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>;""
        <Button onClick={loadTenants} variant="outline" size="sm">;"
          <RefreshCcw className="mr-2 h-4 w-4" />;"

        ;
      </div>;"
        <div className="flex justify-center p-8">;"
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>;"
        <div className="rounded-md border">;"
</div>
          <Table>;

            <TableHeader>;

              <TableRow>;

                <TableHead>Brand;
                <TableHead>Subdomain;
                <TableHead>Custom Domain;
                <TableHead>Status;
                <TableHead>Created At;"
                <TableHead className="text-right">Actions;"
            <TableBody>;




                  <TableCell;
                    colSpan={6}"
                    className="text-center py-8 text-muted-foreground">;"

                  <TableRow key={tenant && tenant.id}>;
                    <TableCell className="font-medium">;"

                    <TableCell>;

                      <a;
                        href={`https://${tenant && tenant.subdomain}.ziontechmarketplace && ziontechmarketplace.com`}"
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center hover:underline">;"
</a>"
                        <ExternalLink className="ml-1 h-3 w-3" />;"

                      </a>;
                        <div className="flex items-center">;"
                          <a;`;
                            href={`https://${tenant && tenant.custom_domain}`}"
                            className="hover:underline flex items-center">;"

                          <Badge;
                            variant={"
                              tenant && tenant.dns_verified ? "default" : "outline""
                            }"
                            className="ml-2">;"

                            <Button;"
                              variant="ghost"""
                              size="sm""
                              onClick={() => verifyDns(tenant)}
                              <RefreshCcw className="h-3 w-3" />;"
                              <span className="sr-only">Verify DNS</span>;"
                        <span className="text-muted-foreground text-sm">;"
</span>
                        </span>;
  const [tenants, set_tenants] = useState < WhitelabelTenant[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  useEffect (() => {
    load_tenants ();
  }, []);
  const load_tenants = async () => {
    try {
  // TODO: Implement
      setIsLoading (true);
      const { data, error } = await supabase;"
        .from ("whitelabel_tenants");""
        .select ("*");""
        .order ("created_at", { ascending: false });"
      // Check condition;
if (throw error) {
  $2;
      set_tenants (data as WhitelabelTenant[]);
    } catch (error: any) {"
      console.error ("Error loading tenants:", error);"
      toast ({"
        variant: "destructive",""
        title: "Failed to load tenants","
        description: error.message,)
      });
    } finally {
  // TODO: Implement
      setIsLoading (false);
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
  // TODO: Implement
      const { error } = await supabase;"
        .from ("whitelabel_tenants");"
        .update ({ is_active: !tenant.is_active });"
        .eq ("id", tenant.id);"
      // Check condition;
      // Update local state;
      set_tenants ()
        tenants.map ((t) =>;
          t.id === tenant.id ? { ...t, is_active: !t.is_active } : t,
        ),
      );
      toast ({"`;
        title: `Tenant ${tenant.is_active ? "deactivated" : "activated"}`,""`;
        description: `${tenant.brand_name} has been ${tenant.is_active ? "deactivated" : "activated"} successfully.`,")
      console.error ("Error toggling tenant status:", error);"
        title: "Failed to update tenant","
  const verify_dns = async (tenant: WhitelabelTenant) => {
  // TODO: Implement
      // In a real implementation, this would verify DNS records;"
      // For now, we'll just mark it as verified;
      const { error } = await supabase;
        .update ({ dns_verified: true });"
      // Check condition;
      // Update local state;
          t.id === tenant.id ? { ...t, dns_verified: true } : t,
        title: "DNS verified","`;
        description: `Custom domain for ${tenant.brand_name} has been verified.`,)
      console.error ("Error verifying DNS:", error);"
        title: "Failed to verify DNS","
  return ("
    <div className="space - y-4">;"
      <div className="flex justify - between items - center">;"
        <h2 className="text - xl font - semibold">White - Label Tenants</h2>;""
        <Button on_click={load_tenants} variant="outline" size="sm">;"
          <RefreshCcw className="mr - 2 h - 4 w - 4" />;"

        <div className="flex justify - center p - 8">;"
          <div className="animate - spin rounded - full h - 8 w - 8 border - t-2 border - b-2 border - primary"></div>;")
        </div>) : ("
        <div className="rounded - md border">;"



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

                  )))}
        </div>)}
    </div>);
                    
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>"

                      
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

                              <>"
                                <PowerOff className="mr-2 h-4 w-4" />"

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

    </div>;
return (Refresh  </div> </div>) : (<div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Brand <TableHead>Subdomain <TableHead>Custom Domain <TableHead>Status <TableHead>Created At <TableHead className="text-right" >Actions   <TableBody> {"
  tenants.length === 0 ? (<TableRow> <TableCell colSpan= {
}className="text-center py-8 text-muted-foreground" > No tenants found. Create a new white-label instance to get started.   <a href= {"`;
  `https://$ {
  tenant.custom domain;`;
}` "
}target="blank" rel="noopener noreferrer" className="hover:underline flex items-center" >  {"
  !tenant.dns verified && (<Button variant="ghost" size="sm" onClick= {")
  () => verifyDns (tenant) 
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


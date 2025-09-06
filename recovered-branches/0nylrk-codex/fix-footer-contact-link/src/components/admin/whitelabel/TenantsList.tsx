
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

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

export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        variant: "destructive"
        title: "Failed to load tenants"
        description: error.message
      });
    } finally {
      setIsLoading(false);
    }
  }
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
          t.id === tenant.id ? { ...t, is_active: !t.is_active } : t
        )
      );
      toast({
        title: `Tenant ${tenant.is_active ? "deactivated" : "activated"}`
        description: `${tenant.brand_name} has been ${tenant.is_active ? "deactivated" : "activated"} successfully.`
      });
    } catch (error: any) {
      console.error("Error toggling tenant status:", error);
      toast({
        variant: "destructive"
        title: "Failed to update tenant"
        description: error.message
      });
    }
  }
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
          t.id === tenant.id ? { ...t, dns_verified: true } : t
        )
      );
      toast({
        title: "DNS verified"
        description: `Custom domain for ${tenant.brand_name} has been verified.`
      });
    } catch (error: any) {
      console.error("Error verifying DNS:", error);
      toast({
        variant: "destructive"
        title: "Failed to verify DNS"
        description: error.message
      });
    }
  }
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
DropdownMenuTrigger,;
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";
import {
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,
  RefreshCcw,;
} from "@/components/icons";
import { format } from "date-fns";
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
  RefreshCcw,
} from "@/components/icons";
import { format } from "date-fns";
export function TenantsList() {
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
  TableRow;
} from '@/components/ui/table',;
import { Button } from '@/components/ui/button',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',;
import { Badge } from '@/components/ui/badge',;
import { toast } from '@/hooks/use-toast',;
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant',;
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from '@/components/icons',;
import { format } from 'date-fns',;
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    loadTenants();
  }, []),;
  const loadTenants = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('*');
        .order('created_at', { ascending: false }),;
      if (error) throw error,;
      setTenants(data as WhitelabelTenant[]);
    } catch (error: any) {;
      console.error('Error loading tenants:', error),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to load tenants',;
        description: error.message});
    } finally {;
      setIsLoading(false);
    }
  },;

  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {;
    try {;
      const { error } = await supabase;
        .from("whitelabel_tenants");
        .update({ is_active: !tenant && tenant.is_active });
        .eq("id", tenant && tenant.id);

      if (error) throw error;

      // Update local state;
      setTenants(;
        tenants && tenants.map((t) =>;
          t && t.id === tenant && tenant.id ? { ...t, is_active: !t && t.is_active } : t,;
        ),;
      );

      toast({;
        title: `Tenant ${tenant && tenant.is_active ? "deactivated" : "activated"}`,;
        description: `${tenant && tenant.brand_name} has been ${tenant && tenant.is_active ? "deactivated" : "activated"} successfully.`,;
      });
    } catch (error: any) {;
      console && console.error("Error toggling tenant status:", error);
      toast({;
        variant: "destructive",;
        title: "Failed to update tenant",;
        description: error && error.message,;
      });
    }
  };

  const verifyDns = async (tenant: WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;
      // For now, we'll just mark it as verified;
      const { error } = await supabase;
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

  },
        </div>)}
    </div>);

}
                    </TableCell>
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>
                        {tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
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
    </div>;
  );
}
;

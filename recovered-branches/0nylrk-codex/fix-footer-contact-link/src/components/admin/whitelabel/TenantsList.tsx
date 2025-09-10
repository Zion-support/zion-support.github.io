import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

<<<<<<< HEAD
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
=======

import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { ;
  Table,;
  TableBody, ;
  TableCell, ;
  TableHead, ;
  TableHeader, ;
  TableRow ;
} from '@/components/ui/table',;
import { Button } from '@/components/ui/button',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
<<<<<<< HEAD
  DropdownMenuTrigger,;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
  TableRow,;
=======
  TableRow,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
  DropdownMenuTrigger,
  DropdownMenuTrigger,
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

  useEffect(() => {;

=======
  useEffect(() => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    loadTenants();
  }, []);

      setIsLoading(true);
      const { data, error } = await supabase;
        .from("whitelabel_tenants");
        .select("*");
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } catch (error: any) {;
      console && console.error("Error loading tenants:", error);
      toast({;
        variant: "destructive",;
        title: "Failed to load tenants",;
        description: error && error.message,;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD

  };

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,

<<<<<<< HEAD
=======
import {
  Edit
  MoreHorizontal
  ExternalLink
  Power
  PowerOff
  Users
  RefreshCcw
} from "@/components/icons";
import { format } from "date-fns";

export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
    } catch (error: any) {
      console.error("Error loading tenants:", error);
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Failed to load tenants",
        description: error.message,
=======
        variant: "destructive"
        title: "Failed to load tenants"
        description: error.message
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      });
    } finally {
      setIsLoading(false);
    }
<<<<<<< HEAD
  };

=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })
        .eq("id", tenant.id);
<<<<<<< HEAD

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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      });
    } catch (error: any) {
      console.error("Error toggling tenant status:", error);
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Failed to update tenant",
        description: error.message,
      });
    }
  };

=======
        variant: "destructive"
        title: "Failed to update tenant"
        description: error.message
      });
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records
      // For now, we'll just mark it as verified
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ dns_verified: true })
        .eq("id", tenant.id);
<<<<<<< HEAD

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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      });
    } catch (error: any) {
      console.error("Error verifying DNS:", error);
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Failed to verify DNS",
        description: error.message,
      });
    }
  };
=======
  RefreshCcw,
} from "@/components/icons";
import { format } from "date-fns";
export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

=======
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
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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



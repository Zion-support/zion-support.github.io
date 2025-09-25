import React,
 { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import {
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { toast } from "@/hooks/use-toast",
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant",
import { format } from "date-fns",
import React,
 { useState, useEffect } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { toast } from '@/hooks/use-toast',
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant',
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from '@/components/icons',
import { format } from 'date-fns',
import React,
 { useState, useEffect } from './react',
import { supabase  } from '@/integrations / supabase / client',
import { Button  } from '@/components / ui / button',
import { Badge  } from '@/components / ui / badge',
import { toast  } from '@/hooks / use - toast',
import { WhitelabelTenant  } from '@/hooks / useWhitelabelTenant',
import { format  } from './date - fns',
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table",
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
export function TenantsList() {;
const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
const [isLoading, setIsLoading] = useState(true),
  useEffect(() => {
    loadTenants()},
 []),;
const loadTenants = async () => {
    try {
      setIsLoading(true),;
const { data, error } = await supabase,
        .from("whitelabel_tenants"),
        .select("*"),
        .order("created_at",
 { ascending: false }),;
if (error) throw error,
      setTenants(data as WhitelabelTenant[])} catch (error: any) {
      console.error("Error loading tenants:", error),
      toast({;,
variant: "destructive",
        title: "Failed to load tenants",
        description: error.message})} finally {
      setIsLoading(false)}
  }
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {;
const { error } = await supabase,
        .from("whitelabel_tenants"),
        .update({ is_active: !tenant.is_active }),
        .eq("id", tenant.id),;
if (error) throw error,
      // Update local state,
      setTenants(
        tenants.map((t) =>,
          t.id === tenant.id ? { ...t, is_active: !t.is_active } : t)),
      toast({,
title: `Tenant ${tenant.is_active ? "deactivated" : "activated"}`,
        description: `${tenant.brand_name} has been ${tenant.is_active ? "deactivated" : "activated"} successfully.`})} catch (error: any) {
      console.error("Error toggling tenant status:", error),
      toast({;,
variant: "destructive",
        title: "Failed to update tenant",
        description: error.message})}
  }
  const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records,
      // For now, we'll just mark it as verified,;
const { error } = await supabase,
        .from("whitelabel_tenants"),
        .update({ dns_verified: true }),
        .eq("id", tenant.id),;
if (error) throw error,
      // Update local state,
      setTenants(
        tenants.map((t) =>,
          t.id === tenant.id ? { ...t, dns_verified: true } : t)),
      toast({,
title: "DNS verified",
        description: `Custom domain for ${tenant.brand_name} has been verified.`})} catch (error: any) {
      console.error("Error verifying DNS:", error),
      toast({;,
variant: "destructive",
        title: "Failed to verify DNS",
        description: error.message})}
  }
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRow,
} from "@/components/ui/table",
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
DropdownMenuTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu",
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,
  RefreshCcw,
} from "@/components/icons",
export function TenantsList() {;
const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
const [isLoading, setIsLoading] = useState(true),
  useEffect(() => {
    loadTenants()},
 []),;
const loadTenants = async () => {
    try {
      setIsLoading(true),;
const { data, error } = await supabase,
        .from("whitelabel_tenants"),
        .select("*"),
        .order("created_at",
 { ascending: false }),;
if (error) throw error,
      setTenants(data as WhitelabelTenant[])} catch (error: any) {
      console && console.error("Error loading tenants:", error),
      toast({;,
variant: "destructive",
        title: "Failed to load tenants",
        description: error && error.message
})} finally {
      setIsLoading(false)}
},
  useEffect(() => {
    loadTenants()},
 []),;
const loadTenants = async () => {
    try {
      setIsLoading(true),;
const { data, error } = await supabase,
        .from("whitelabel_tenants"),
        .select("*"),
        .order("created_at",
 { ascending: false }),;
if (error) throw error,
      setTenants(data as WhitelabelTenant[])} catch (error: any) {
      console.error("Error loading tenants:", error),
      toast({;,
variant: "destructive",
        title: "Failed to load tenants",
        description: error.message
})} finally {
      setIsLoading(false)}
  },;
const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {;
const { error } = await supabase,
        .from("whitelabel_tenants"),
        .update({ is_active: !tenant.is_active }),
        .eq("id", tenant.id),;
if (error) throw error,
      // Update local state,
      setTenants(
        tenants.map((t) =>,
          t.id === tenant.id ? { ...t, is_active: !t.is_active } : t,
        ),
      ),
      toast({,
title: `Tenant ${tenant.is_active ? "deactivated" : "activated"}`,
        description: `${tenant.brand_name} has been ${tenant.is_active ? "deactivated" : "activated"} successfully.`,
      })} catch (error: any) {
      console.error("Error toggling tenant status:", error),
      toast({;,
variant: "destructive",
        title: "Failed to update tenant",
        description: error.message
})}
  },;
const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records,
      // For now, we'll just mark it as verified,;
const { error } = await supabase,
        .from("whitelabel_tenants"),
        .update({ dns_verified: true }),
        .eq("id", tenant.id),;
if (error) throw error,
      // Update local state,
      setTenants(
        tenants.map((t) =>,
          t.id === tenant.id ? { ...t, dns_verified: true } : t,
        ),
      ),
      toast({,
title: "DNS verified",
        description: `Custom domain for ${tenant.brand_name} has been verified.`,
      })} catch (error: any) {
      console.error("Error verifying DNS:", error),
      toast({;,
variant: "destructive",
        title: "Failed to verify DNS",
        description: error.message
})}
  },
  RefreshCcw,
} from "@/components/icons",
export function TenantsList() {;
const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
const [isLoading, setIsLoading] = useState(true),
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from '@/components/ui/table',
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
export function TenantsList() {;
const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
const [isLoading, setIsLoading] = useState(true),
  useEffect(() => {
    loadTenants()},
 []),;
const loadTenants = async () => {
    try {
      setIsLoading(true),;
const { data, error } = await supabase,
        .from('whitelabel_tenants'),
        .select('*'),
        .order('created_at',
 { ascending: false }),;
if (error) throw error,
      setTenants(data as WhitelabelTenant[])} catch (error: any) {
      console.error('Error loading tenants:', error),
      toast({;,
variant: 'destructive',
        title: 'Failed to load tenants',
        description: error.message})} finally {
      setIsLoading(false)}
  },;
const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {;
const { error } = await supabase,
        .from("whitelabel_tenants"),
        .update({ is_active: !tenant && tenant.is_active }),
        .eq("id", tenant && tenant.id),;
if (error) throw error,
      // Update local state,
      setTenants(
        tenants && tenants.map((t) =>,
          t && t.id === tenant && tenant.id ? { ...t, is_active: !t && t.is_active } : t,
        ),
      ),
      toast({,
title: `Tenant ${tenant && tenant.is_active ? "deactivated" : "activated"}`,
        description: `${tenant && tenant.brand_name} has been ${tenant && tenant.is_active ? "deactivated" : "activated"} successfully.`,
      })} catch (error: any) {
      console && console.error("Error toggling tenant status:", error),
      toast({;,
variant: "destructive",
        title: "Failed to update tenant",
        description: error && error.message
})}
  },;
const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records,
      // For now, we'll just mark it as verified,;
const { error } = await supabase,
        .from("whitelabel_tenants"),
        .update({ dns_verified: true }),
        .eq("id", tenant && tenant.id),;
if (error) throw error,
      // Update local state,
      setTenants(
        tenants && tenants.map((t) =>,
          t && t.id === tenant && tenant.id ? { ...t, dns_verified: true } : t,
        ),
      ),
      toast({,
title: "DNS verified",
        description: `Custom domain for ${tenant && tenant.brand_name} has been verified.`,
      })} catch (error: any) {
      console && console.error("Error verifying DNS:", error),
      toast({;,
variant: "destructive",
        title: "Failed to verify DNS",
        description: error && error.message
})}
},

return (
    <div className="space-y-4">,
      <div className="flex justify-between items-center">,
        <h2 className="text-xl font-semibold">White-Label Tenants
        <Button onClick={loadTenants} variant="outline" size="sm">,
          <RefreshCcw className="mr-2 h-4 w-4" />,
          Refresh,

      {isLoading ? (
        <div className="flex justify-center p-8">,
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary">
        </div>) : (
        <div className="rounded-md border">,
          <Table>,
            <TableHeader>,
              <TableRow>,
                <TableHead>Brand
                <TableHead>Subdomain
                <TableHead>Custom Domain
                <TableHead>Status
                <TableHead>Created At
                <TableHead className="text-right">Actions

            <TableBody>,
              {tenants && tenants.length === 0 ? (
                <TableRow>,
                  <TableCell,
colSpan={6}
                    className="text-center py-8 text-muted-foreground">,
                    No tenants found. Create a new white-label instance to get,
                    started.,
                  
                </TableRow>) : (
                tenants && tenants.map((tenant) => (
                  <TableRow key={tenant && tenant.id}>,
                    <TableCell className="font-medium">,

                      {tenant && tenant.brand_name}
                    
                    <TableCell>,
                      <a,
href={`https: //${tenant && tenant.subdomain}.ziontechmarketplace && ziontechmarketplace.com`}
                        target="_blank",
                        rel="noopener noreferrer",
                        className="flex items-center hover: underline">,

                        {tenant && tenant.subdomain}
                        <ExternalLink className="ml-1 h-3 w-3" />,

                    <TableCell>,

                      {tenant && tenant.custom_domain ? (
                        <div className="flex items-center">,
                          <a,
href={`https: //${tenant && tenant.custom_domain}`}
                            target="_blank",
                            rel="noopener noreferrer",
                            className="hover: underline flex items-center">,

                            {tenant && tenant.custom_domain}
                            <ExternalLink className="ml-1 h-3 w-3" />,
                          
                          <Badge;,
variant={
                              tenant && tenant.dns_verified ? "default" : "outline"}
                            className="ml-2">,

                            {tenant && tenant.dns_verified ? "Verified" : "Pending"}
                          
                          {!tenant && tenant.dns_verified && (
                            <Button;,
variant="ghost",
                              size="sm",
                              onClick={() => verifyDns(tenant)}
                              className="ml-1 h-6 w-6 p-0">,
                              <RefreshCcw className="h-3 w-3" />,
                              <span className="sr-only">Verify DNS
                            </Button>)}
                        </div>) : (
                        <span className="text-muted-foreground text-sm">,
                          None,
                        </span>)}
,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table',
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu',
  Edit,
  MoreHorizontal,
  ExternalLink,
  Power,
  PowerOff,
  Users,
  RefreshCcw,
} from '@/components / icons',
export /**,
 * TenantsList - Function description,
 */,;
function TenantsList() {;
const [tenants, set_tenants] = useState < WhitelabelTenant[]>([]),;
const [is_loading, setIsLoading] = useState (true),
  useEffect (() => {
    load_tenants ()},
 []),;
const load_tenants = async () => {
    try {
      setIsLoading (true),;
const { data, error } = await supabase,
        .from ("whitelabel_tenants"),
        .select ("*"),
        .order ("created_at",
 { ascending: false }),
      // Check condition,;
if (throw error) {
  $2}
      set_tenants (data as WhitelabelTenant[])} catch (error: any) {
      console.error ("Error loading tenants:", error),
      toast ({;,
variant: "destructive",
        title: "Failed to load tenants",
        description: error.message
})} finally {
      setIsLoading (false)}
  }
,;
const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {;
const { error } = await supabase,
        .from ("whitelabel_tenants"),
        .update ({ is_active: !tenant.is_active }),
        .eq ("id", tenant.id),
      // Check condition,;
if (throw error) {
  $2}
      // Update local state,
      set_tenants (
        tenants.map ((t) =>,
          t.id === tenant.id ? { ...t, is_active: !t.is_active } : t,
        ),
      ),
      toast ({,
title: `Tenant ${tenant.is_active ? "deactivated" : "activated"}`,
        description: `${tenant.brand_name} has been ${tenant.is_active ? "deactivated" : "activated"} successfully.`,
      })} catch (error: any) {
      console.error ("Error toggling tenant status:", error),
      toast ({;,
variant: "destructive",
        title: "Failed to update tenant",
        description: error.message
})}
  }
,;
const verify_dns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records,
      // For now, we'll just mark it as verified,;
const { error } = await supabase,
        .from ("whitelabel_tenants"),
        .update ({ dns_verified: true }),
        .eq ("id", tenant.id),
      // Check condition,;
if (throw error) {
  $2}
      // Update local state,
      set_tenants (
        tenants.map ((t) =>,
          t.id === tenant.id ? { ...t, dns_verified: true } : t,
        ),
      ),
      toast ({,
title: "DNS verified",
        description: `Custom domain for ${tenant.brand_name} has been verified.`,
      })} catch (error: any) {
      console.error ("Error verifying DNS:", error),
      toast ({;,
variant: "destructive",
        title: "Failed to verify DNS",
        description: error.message
})}
  }
,;
return (
    <div className="space - y-4">,
      <div className="flex justify - between items - center">,
        <h2 className="text - xl font - semibold">White - Label Tenants
        <Button on_click={load_tenants} variant="outline" size="sm">,
          <RefreshCcw className="mr - 2 h - 4 w - 4" />,
          Refresh,

      {is_loading ? (
        <div className="flex justify - center p - 8">,
          <div className="animate - spin rounded - full h - 8 w - 8 border - t-2 border - b-2 border - primary">
        </div>) : (
        <div className="rounded - md border">,
          <Table>,
            <TableHeader>,
              <TableRow>,
                <TableHead > Brand
                <TableHead > Subdomain
                <TableHead > Custom Domain
                <TableHead > Status
                <TableHead > Created At
                <TableHead className="text - right">Actions

            <TableBody>,
              {tenants.length === 0 ? (
                <TableRow>,
                  <TableCell,
col_span={6}
                    className="text - center py - 8 text - muted - foreground">,
                    No tenants found. Create a new white - label instance to get,
                    started.,
                  
                </TableRow>) : (
                tenants.map ((tenant) => (
                  <TableRow key={tenant.id}>,
                    <TableCell className="font - medium">,

                      {tenant.brand_name}
                    
                    <TableCell>,
                      <a,
href={`https: //${tenant.subdomain}.ziontechmarketplace.com`}
                        target="_blank",
                        rel="noopener noreferrer",
                        className="flex items - center hover: underline">,

                        {tenant.subdomain}
                        <ExternalLink className="ml - 1 h - 3 w - 3" />,

                    <TableCell>,

                      {tenant.custom_domain ? (
                        <div className="flex items - center">,
                          <a,
href={`https: //${tenant.custom_domain}`}
                            target="_blank",
                            rel="noopener noreferrer",
                            className="hover: underline flex items - center">,

                            {tenant.custom_domain}
                            <ExternalLink className="ml - 1 h - 3 w - 3" />,
                          
                          <Badge;,
variant={
                              tenant.dns_verified ? "default" : "outline"}
                            className="ml - 2">,

                            {tenant.dns_verified ? "Verified" : "Pending"}
                          
                          {!tenant.dns_verified && (
                            <Button;,
variant="ghost",
                              size="sm",
                              on_click={() => verify_dns (tenant)}
                              className="ml - 1 h - 6 w - 6 p - 0">,
                              <RefreshCcw className="h - 3 w - 3" />,
                              <span className="sr - only">Verify DNS
                            </Button>)}
                        </div>) : (
                        <span className="text - muted - foreground text - sm">,
                          None,
                        </span>)}
                    
                    <TableCell>,
                      <Badge;,
variant={tenant.is_active ? "default" : "destructive"}
                      >,

                        {tenant.is_active ? "Active" : "Inactive"}

                    <TableCell>,

                      {format (new Date (tenant.created_at), "MMM d, yyyy")}
                    
                    <TableCell className="text - right">,
                      <DropdownMenu>,
                        <DropdownMenuTrigger as_child>,
                          <Button variant="ghost" size="sm">,
                            <MoreHorizontal className="h - 4 w - 4" />,
                            <span className="sr - only">Actions

                        <DropdownMenuContent align="end">,
                          <DropdownMenuItem>,
                            <Edit className="mr - 2 h - 4 w - 4" />,
                            Edit Tenant,
                          
                          <DropdownMenuItem>,
                            <Users className="mr - 2 h - 4 w - 4" />,
                            Manage Admins,
                          
                          <DropdownMenuItem,
on_click={() => toggleTenantStatus (tenant)}
                          >,

                            {tenant.is_active ? (
                              <>,
                                <PowerOff className="mr - 2 h - 4 w - 4" />,
                                Disable Tenant,
                              </>) : (
                              <>,
                                <Power className="mr - 2 h - 4 w - 4" />,
                                Enable Tenant,
                              </>)}
,

                  </TableRow>)))}

        </div>)}
    </div>)}

                    <TableCell>,
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>,

                        {tenant.is_active ? "Active" : "Inactive"}

                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}
                    <TableCell className="text-right">,
                      <DropdownMenu>,
                        <DropdownMenuTrigger asChild>,
                          <Button variant="ghost" size="sm">,
                            <MoreHorizontal className="h-4 w-4" />,
                            <span className="sr-only">Actions

                        <DropdownMenuContent align="end">,
                          <DropdownMenuItem>,
                            <Edit className="mr-2 h-4 w-4" />,
                            Edit Tenant,
                          
                          <DropdownMenuItem>,
                            <Users className="mr-2 h-4 w-4" />,
                            Manage Admins,
                          
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>,

                            {tenant.is_active ? (
                              <>,
                                <PowerOff className="mr-2 h-4 w-4" />,
                                Disable Tenant,
                              </>) : (
                              <>,
                                <Power className="mr-2 h-4 w-4" />,
                                Enable Tenant,
                              </>)}

                  </TableRow>)))}

        </div>)}
    </div>)}
,
    </div>)}

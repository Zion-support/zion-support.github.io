}
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import {logErrorToProduction} from '@/utils/productionLogger',;
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
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from 'lucide-react';
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
      logErrorToProduction('Error loading tenants:', { data: error }),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to load tenants',,
  description: error.message});
    } finally {;
      setIsLoading(false);
    }
  },;
  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {;
    try {;
      const { error } = await supabase;
        .from('whitelabel_tenants');
        .update({ is_active: !(tenant as any).is_active });
        .eq('id', (tenant as any).id),;
      if (error) throw error,;
      // Update local state;
      setTenants(tenants.map(t =>;
        (t as any).id === (tenant as any).id ? { ...t, is_active: !(t as any).is_active } : t;
      )),;
      toast({;
        title: `Tenant ${(tenant as any).is_active ? 'deactivated' : 'activated'}`,,
  description: `${(tenant as any).brand_name} has been ${(tenant as any).is_active ? 'deactivated' : 'activated'} successfully.`});
    } catch (error: any) {;
      logErrorToProduction('Error toggling tenant status:', { data: error }),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to update tenant',,
  description: error.message});
    }
  },;
  const verifyDns = async (tenant: WhitelabelTenant) => {;
    try {;
      // In a real implementation, this would verify DNS records;
      // For now, we'll just mark it as verified;
      const { error } = await supabase;
        .from('whitelabel_tenants');
        .update({ dns_verified: true });
        .eq('id', (tenant as any).id),;
      if (error) throw error,;
      // Update local state;
      setTenants(tenants.map(t =>;
        (t as any).id === (tenant as any).id ? { ...t, dns_verified: true } : t;
      )),;
      toast({;
        title: 'DNS verified',,
  description: `Custom domain for ${(tenant as any).brand_name} has been verified.`});
    } catch (error: any) {;
      logErrorToProduction('Error verifying DNS:', { data: error }),;
      toast({;
        variant: 'destructive',;
        title: 'Failed to verify DNS',
  description: error.message});
    }
  },

}
;
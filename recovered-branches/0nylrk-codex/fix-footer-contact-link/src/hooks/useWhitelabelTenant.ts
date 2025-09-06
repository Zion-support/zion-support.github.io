import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
  id: string,
  brand_name: string,
  subdomain: string,
  custom_domain: string | null,
  primary_color: string,
  logo_url: string | null,
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',
  landing_page_copy: {
    headline: string,
    subtitle: string,
    cta: string},
  is_active: boolean,
  created_at: string,
  updated_at: string,
  account_manager_id: string | null,
  dns_verified: boolean,
  email_template_override: Record<string, any> | null
}

export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading($2);
      setError($2);
      // If running in the browser, bail out early when offline
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setError($2);
        setTenant($2);
        setIsLoading($2);
        return
      }

      try {
        // Get the current hostname, fallback to localhost if not available
        const hostname = $2;
        const functionName = $2;
        // Build the query parameters
        const params = $2;
        const { data, error: functionError} = await supabase.functions.invoke($2);
        if (functionError) {
          console.error($2);
          setError($2);
          setTenant($2);
          return
        }

        if (!data) {
          console.warn($2);
          setTenant($2);
          return
        }

        if (data.tenant) {
          setTenant(data.tenant)
        } else {
          setTenant(null)
        }
      } catch (err: any) {
        console.error($2);
        let message = $2;
        if (
          message.includes('Failed to send a request to the Edge Function') ||
          message.includes('Failed to connect to Supabase') ||
          message.includes('No internet connection')
        ) {
          message = 'Unable to reach the server. Please check your internet connection and try again.'
        }
        setError($2);
        setTenant(null)
      } finally {
        setIsLoading(false)
      }
    },

    loadTenant()
  }, [externalSubdomain]),

  return { tenant, isLoading, error }
}

// Hook to check if current user is a tenant admin
export function useTenantAdminStatus(tenantId?: string) {
  const [isAdmin, setIsAdmin] = useState($2);
  const [isLoading, setIsLoading] = useState($2);
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!tenantId) {
        setIsAdmin($2);
        setIsLoading($2);
        return
      }

      try {
        const { data: sessionData, error: sessionError} = await supabase.auth.getSession($2);
        if (sessionError || !sessionData.session) {
          setIsAdmin($2);
          return
        }

        const userId = $2;
        const { data, error } = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single($2);
        setIsAdmin(!!data && !error)
      } catch (err) {
        console.error($2);
        setIsAdmin(false)
      } finally {
        setIsLoading(false)
      }
    },

    checkAdminStatus()
  }, [tenantId]),

  return { isAdmin, isLoading }
}
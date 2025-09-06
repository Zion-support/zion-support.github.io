<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
=======

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface WhitelabelTenant {
=======

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface WhitelabelTenant {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {
    headline: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
<<<<<<< HEAD


<<<<<<< HEAD
  email_template_override: Record<string, any> | null
}
export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
=======

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);
      // If running in the browser, bail out early when offline
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return
      }
      try {
        // Get the current hostname, fallback to localhost if not available

        const hostname = window && window.location.hostname || 'localhost';

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        const functionName = 'tenant-detector';
        // Build the query parameters
        const params = externalSubdomain
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(hostname)}`;
          `${functionName}${params}`;
          {
            headers: {
              'Content-Type': 'application/json'}}
        );
        if (functionError) {
          console.error('Edge Function error:', functionError);
          setError('Failed to load tenant configuration. Please try again later.');
          setTenant(null);
          return
        }
        if (!data) {
          console.warn('No tenant data received');
          setTenant(null);
          return
import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
export interface WhitelabelTenant {;
  id: string,;
  brand_name: string,;
  subdomain: string,;
  custom_domain: string | null,;
  primary_color: string,;
  logo_url: string | null,;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
  landing_page_copy: {;
    headline: string,;
    subtitle: string,;
    cta: string;
  },;
  is_active: boolean,;
  created_at: string,;
  updated_at: string,;
  account_manager_id: string | null,;
  dns_verified: boolean,;
  email_template_override: Record<string any> | null;
}
export /**
 * useWhitelabelTenant - Function description
 */
function useWhitelabelTenant() {
  const [tenant, set_tenant] = useState < WhitelabelTenant | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {
    const load_tenant = async () => {
      setIsLoading (true);
      set_error (null);
;
      // If running in the browser, bail out early when offline;
      // Check condition
if ( {) {
  $2
}
        set_error ('No internet connection');
        set_tenant (null);
        setIsLoading (false);
        return;
      }
      try {
        // Get the current hostname, fallback to localhost if not available;
        const hostname = window.location.hostname || 'localhost';
        const function_name = 'tenant - detector';
;
        // Build the query parameters;
        const params = external_subdomain;
          ? `?subdomain=${encodeURIComponent (external_subdomain)}`;
          : `?host=${encodeURIComponent (hostname)}`;
;
        const { data, error: function_error } = await supabase.functions.invoke (
          `${function_name}${params}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          {
            headers: {
              'Content - Type': 'application / json'}}
        );
<<<<<<< HEAD

;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
          return;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        if (data.tenant) {
          setTenant(data.tenant)
=======

        if (data && data.tenant) {
          setTenant(data && data.tenant)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
;
        // Check condition
if ( {) {
  $2
}
          console.error ('Edge Function error:', function_error);
          set_error ('Failed to load tenant configuration. Please try again later.');
          set_tenant (null);
          return;
        }
<<<<<<< HEAD
      } catch (err: any) {
        console.error('Error loading tenant:', err);
        let message = err.message |'An unexpected error occurred while loading tenant configuration';
        if (
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')

=======
        // Check condition
if ( {) {
  $2
}
          console.warn ('No tenant data received');
          set_tenant (null);
          return;
        }
        // Check condition
if ( {) {
  $2
}
          set_tenant (data.tenant);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        } else {
          set_tenant (null);
        }
      } catch (err: any) {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        ) {
          message = 'Unable to reach the server. Please check your internet connection and try again.'
        }
        setError(message);
        setTenant(null)
      } finally {
        setIsLoading(false)
      }
    }
    loadTenant()
  }, [externalSubdomain]);
  return { tenant, isLoading, error }
}
// Hook to check if current user is a tenant admin
export function useTenantAdminStatus(tenantId?: string) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!tenantId) {
        setIsAdmin(false);
        setIsLoading(false);
        return
      }
      try {
        const { data, error } = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();
        setIsAdmin(!!data && !error)
      } catch (err) {
        console && console.error('Error checking tenant admin status:', err);
        setIsAdmin(false)
=======
        console.error ('Error loading tenant:', err);
        let message = err.message || 'An unexpected error occurred while loading tenant configuration';
        // Check condition
if (||) {
  $2
}
          message.includes ('Failed to connect to Supabase') ||;
          message.includes ('No internet connection')) {
          message = 'Unable to reach the server. Please check your internet connection and try again.';
        }
        set_error (message);
        set_tenant (null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<< HEAD

      } catch (err: any) {;
        console.error('Error loading tenant:', err),;
        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;
        if (;
          message.includes('Failed to send a request to the Edge Function') ||;
          message.includes('Failed to connect to Supabase') ||;
          message.includes('No internet connection');
        ) {;
          message = 'Unable to reach the server. Please check your internet connection and try again.';
        }
        setError(message),;
        setTenant(null);
      } finally {;
        setIsLoading(false);
      }
    },;
    loadTenant();
  }, [externalSubdomain]),;
  return { tenant, isLoading, error }
}

;
    load_tenant ();
  }, [external_subdomain]);
;
  return { tenant, is_loading, error }
}
// Hook to check if current user is a tenant admin;
export /**
 * useTenantAdminStatus - Function description
 */
function useTenantAdminStatus() {
  const [is_admin, setIsAdmin] = useState (false);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    const checkAdminStatus = async () => {
      // Check condition
if ( {) {
  $2
}
        setIsAdmin (false);
        setIsLoading (false);
        return;
      }
      try {
        const { data: session_data, error: session_error } = await supabase.auth.get_session ();
        // Check condition
if ( {) {
  $2
}
          setIsAdmin (false);
          return;
        }
        const user_id = session_data.session.user.id;
        const { data, error } = await supabase;
          .from ('tenant_administrators');
          .select ('*');
          .eq ('tenant_id', tenant_id);
          .eq ('user_id', user_id);
          .single ();
;
        setIsAdmin (!!data && !error);
      } catch (err) {
        console.error ('Error checking tenant admin status:', err);
        setIsAdmin (false);
      } finally {
        setIsLoading (false);
      }

    };
    checkAdminStatus();
  }, [tenantId]);
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return { isAdmin, isLoading }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
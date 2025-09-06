<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

========
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
export interface WhitelabelTenant {
=======

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {
    headline: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

    subtitle: string,
    cta: string;
  }

========
    subtitle: string,
    cta: string;
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
=======

    subtitle: string
    cta: string
  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts


<<<<<<< HEAD
  email_template_override: Record<string, any> | null
}

=======

  dns_verified: boolean

  email_template_override: Record<string, any> | null
}
export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);
      // If running in the browser, bail out early when offline
<<<<<<< HEAD
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {
=======
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return
      }
      try {
        // Get the current hostname, fallback to localhost if not available
<<<<<<< HEAD

        const hostname = window && window.location.hostname || 'localhost';

========
        const hostname = window && window.location.hostname || 'localhost';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
=======
        const hostname = window.location.hostname |'localhost';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const functionName = 'tenant-detector';
        // Build the query parameters
        const params = externalSubdomain
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(hostname)}`;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts


        const { data, error: functionError } = await supabase && supabase.functions.invoke(

          `${functionName}${params}`;
<<<<<<< HEAD
=======
        const { data, error: functionError } = await supabase.functions.invoke(
          `${functionName}${params}`;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
=======
========
        const { data, error: functionError } = await supabase && supabase.functions.invoke(
          `${functionName}${params}`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
  dns_verified: boolean,
  email_template_override: Record < string, any> | null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
          {
            headers: {
              'Content - Type': 'application / json'}}
        );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

=======
}
;
export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  useEffect(() => {;
    const loadTenant = async () => {;
      setIsLoading(true),;
      setError(null),;
      // If running in the browser, bail out early when offline;
      if (typeof navigator !== 'undefined' && !navigator.onLine) {;
        setError('No internet connection'),;
        setTenant(null),;
        setIsLoading(false),;
        return;
      }
;
      try {;
        // Get the current hostname, fallback to localhost if not available;
        const hostname = window.location.hostname || 'localhost',;
        const functionName = 'tenant-detector',;
        // Build the query parameters;
        const params = externalSubdomain;
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`;
          : `?host=${encodeURIComponent(hostname)}`,;
        const { data, error: functionError } = await supabase.functions.invoke(;
          `${functionName}${params}`,;
          {;
            headers: {;
              'Content-Type': 'application/json'}}
        ),;
        if (functionError) {;
          console.error('Edge Function error:', functionError),;
          setError('Failed to load tenant configuration. Please try again later.'),;
          setTenant(null),;
          return;
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
          return;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        if (data.tenant) {
          setTenant(data.tenant)
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
        if (data && data.tenant) {
          setTenant(data && data.tenant)
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
        } else {
          set_tenant (null);
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

========
      } catch (err: any) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
        console && console.error('Error loading tenant:', err);
        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if (
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
        if (data.tenant) {
          setTenant(data.tenant)
        } else {
          setTenant(null)
        }
      } catch (err: any) {
        console.error('Error loading tenant:', err);
        let message = err.message |'An unexpected error occurred while loading tenant configuration';
        if (
          message.includes('Failed to send a request to the Edge Function') |
          message.includes('Failed to connect to Supabase') |
          message.includes('No internet connection')
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export function useTenantAdminStatus(tenantId?: string) {
=======
export function useTenantAdminStatus(tenantId?: string) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
        ) {
          message = 'Unable to reach the server. Please check your internet connection and try again.'
=======
import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
;
export interface WhitelabelTenant {;
  id:string,;
  brand_name:string,;
  subdomain:string,;
  custom_domain:string | null,;
  primary_color:string,;
  logo_url:string | null,;
  theme_preset:'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
  landing_page_copy:{;
    headline:string,;
    subtitle:string,;
    cta:string;
  },;
  is_active:boolean,;
  created_at:string,;
  updated_at:string,;
  account_manager_id:string | null,;
  dns_verified:boolean,;
  email_template_override:Record<string any> | null;
}
;
export function useWhitelabelTenant(externalSubdomain?:string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  useEffect(() => {;
    const loadTenant = async () => {;
      setIsLoading(true),;
      setError(null),;
;
      // If running in the browser, bail out early when offline;
      if (typeof navigator !== 'undefined' && !navigator.onLine) {;
        setError('No internet connection'),;
        setTenant(null),;
        setIsLoading(false),;
        return,;
      }
;
      try {;
        // Get the current hostname, fallback to localhost if not available;
        const hostname = window.location.hostname || 'localhost',;
        const functionName = 'tenant-detector',;
        ;
        // Build the query parameters;
        const params = externalSubdomain ;
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`;
          :`?host=${encodeURIComponent(hostname)}`,;
;
        const { data, error:functionError } = await supabase.functions.invoke(;
          `${functionName}${params}`,;
          {;
            headers:{;
              'Content-Type':'application/json'}}
        ),;
;
        if (functionError) {;
          console.error('Edge Function error:', functionError),;
          setError('Failed to load tenant configuration. Please try again later.'),;
          setTenant(null),;
          return,;
        }
;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
          return,;
        }
;
        if (data.tenant) {;
          setTenant(data.tenant),;
        } else {;
          setTenant(null),;
        }
      } catch (err:any) {;
        console.error('Error loading tenant:', err),;
        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;
        if (;
          message.includes('Failed to send a request to the Edge Function') ||;
          message.includes('Failed to connect to Supabase') ||;
          message.includes('No internet connection');
        ) {;
          message = 'Unable to reach the server. Please check your internet connection and try again.',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
        setError(message),;
        setTenant(null),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    loadTenant(),;
  }, [externalSubdomain]),;
;
  return { tenant, isLoading, error },;
}
;
// Hook to check if current user is a tenant admin;
export function useTenantAdminStatus(tenantId?:string) {;
  const [isAdmin, setIsAdmin] = useState(false),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    const checkAdminStatus = async () => {;
      if (!tenantId) {;
        setIsAdmin(false),;
        setIsLoading(false),;
        return,;
      }
<<<<<<< HEAD
      try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {
          setIsAdmin(false);
          return
        }
        const userId = sessionData && sessionData.session.user && user.id;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
=======
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError |!sessionData.session) {
          setIsAdmin(false);
          return
        }
        const userId = sessionData.session.user.id;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const { data, error } = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();
        setIsAdmin(!!data && !error)
      } catch (err) {
<<<<<<< HEAD
        console && console.error('Error checking tenant admin status:', err);
        setIsAdmin(false)
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
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

=======

=======
        console.error('Error checking tenant admin status:', err);
        setIsAdmin(false)
      } finally {
        setIsLoading(false)
      }
    }
    checkAdminStatus()
  }, [tenantId]);

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts

    };
    checkAdminStatus();
  }, [tenantId]);


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return { isAdmin, isLoading }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
========
    }
;
    checkAdminStatus ();
  }, [tenant_id]);
;
  return { is_admin, is_loading }
}
=======
;
      try {;
        const { data:sessionData, error:sessionError } = await supabase.auth.getSession(),;
        if (sessionError || !sessionData.session) {;
          setIsAdmin(false),;
          return,;
=======
;
// Hook to check if current user is a tenant admin;
export function useTenantAdminStatus(tenantId?: string) {;
  const [isAdmin, setIsAdmin] = useState(false),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const checkAdminStatus = async () => {;
      if (!tenantId) {;
        setIsAdmin(false),;
        setIsLoading(false),;
        return;
      }
;
      try {;
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession(),;
        if (sessionError || !sessionData.session) {;
          setIsAdmin(false),;
          return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
;
        const userId = sessionData.session.user.id,;
        const { data, error } = await supabase;
          .from('tenant_administrators');
          .select('*');
          .eq('tenant_id', tenantId);
          .eq('user_id', userId);
          .single(),;
<<<<<<< HEAD
;
        setIsAdmin(!!data && !error),;
      } catch (err) {;
        console.error('Error checking tenant admin status:', err),;
        setIsAdmin(false),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    checkAdminStatus(),;
  }, [tenantId]),;
;
  return { isAdmin, isLoading },;
} // If running in the browser, bail out early when offline if (typeof navigator !== 'undefined' && !navigator.onLine) {
  // Build the query parameters const params = externalSubdomain ? `?subdomain=$ {
  encodeURIComponent (externalSubdomain) 
}` const {
  data, error: functionError 
}= await supabase.functions.invoke (`$ {
  functionName 
}$ {
  params 
}`;
{
  headers: {
  'Content-Type': 'application/json' 
}
});
if (message.includes ('Failed to send a request to the Edge Function') || message.includes ('Failed to connect to Supabase') || message.includes ('No internet connection') ) {
  loadTenant () 
}, [externalSubdomain]);
useEffect ( () => {
  const checkAdminStatus = async () => {
  if (!tenantId) {
  .from ('tenant administrators') .select ('*') .eq ('tenant id', tenantId) .eq ('user id', userId) .single ();
checkAdminStatus () 
}, [tenantId]);
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useWhitelabelTenant.ts
=======
        setIsAdmin(!!data && !error);
      } catch (err) {;
        console.error('Error checking tenant admin status:', err),;
        setIsAdmin(false);
      } finally {;
        setIsLoading(false);
      }
    };
    checkAdminStatus();
  }, [tenantId]);
  return { isAdmin, isLoading }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

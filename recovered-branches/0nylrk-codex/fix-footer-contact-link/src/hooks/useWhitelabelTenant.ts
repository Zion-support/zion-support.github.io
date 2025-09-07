<<<<<<< HEAD
export interface WhitelabelTenant {export interface WhitelabelTenant {
=======
<<<<<<< HEAD
import {useState, useEffect} from 'react';

import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;

import { supabase } from '@/integrations/supabase/client';

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from 'react';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
<<<<<<< HEAD
export interface WhitelabelTenant {import { useState, useEffect  } from 'react';
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
export interface WhitelabelTenant {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
>>>>>>> origin/resolved-merge-conflicts
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    subtitle: string,
    cta: string;
  }

    subtitle: string
    cta: string
=======

    subtitle: string,
    cta: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
  id: string,
  brand_name: string,
  subdomain: string,
  custom_domain: string | null,
  primary_color: string,
  logo_url: string | null,
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',
<<<<<<< HEAD
  landing_page_copy: {
    headline: string,
    subtitle: string,
    cta: string},
  is_active: boolean,
  created_at: string,
  updated_at: string,
  account_manager_id: string | null,
  dns_verified: boolean,
=======
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id: string;

  brand_name: string;
  subdomain: string;,
  custom_domain: string | null;

  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';',
>>>>>>> origin/chore/fix-lint-and-merge
  landing_page_copy: {
<<<<<<< HEAD

    cta: string;

  is_active: boolean;

  created_at: string;
  updated_at: string;,
  account_manager_id: string | null;

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);

export function useWhitelabelTenant() { return null; }
  useEffect(() => {}
    const loadTenant = async () => {}
      setIsLoading(true);
      setError(null);
      // If running in the browser, bail out early when offline;
'
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {}
'
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return;
      }

  dns_verified: boolean,
  email_template_override: Record < string, any> | null;

}

export /**
 * useWhitelabelTenant - Function description

 */
function useWhitelabelTenant() {}
  const [tenant, set_tenant] = useState < WhitelabelTenant | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {}
    const load_tenant = async () => {}
      setIsLoading (true);
      set_error (null);
;
      // If running in the browser, bail out early when offline;

        set_error ('No internet connection');
        set_tenant (null);
        setIsLoading (false);
        return;
      }
      try {}
        // Get the current hostname, fallback to localhost if not available;'
        const hostname = window.location.hostname || 'localhost';'
        const function_name = 'tenant - detector';
;
      try {
  // TODO: Implement
        // Get the current hostname, fallback to localhost if not available;
        const hostname = window.location.hostname || 'localhost';
        const function_name = 'tenant - detector';
pr-12325
        // Build the query parameters;

          {
            headers: {

              'Content - Type': 'application / json'}}

        }
=======

    cta: string;

  is_active: boolean;

  created_at: string;
  updated_at: string;,
  account_manager_id: string | null;
=======
<<<<<<< HEAD
  dns_verified: boolean

>>>>>>> origin/resolved-merge-conflicts
  email_template_override: Record<string, any> | null
}
export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  const [error, setError] = useState<string | null>(null);
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
        const functionName = 'tenant-detector';
        // Build the query parameters
        const params = externalSubdomain
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(hostname)}`;

        const { data, error: functionError } = await supabase && supabase.functions.invoke(
          `${functionName}${params}`;}
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
          {
            headers: {
              'Content - Type': 'application / json'}
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
<<<<<<< HEAD
=======
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const { data, error: functionError } = await supabase && supabase.functions.invoke(
          `${functionName}${params}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  dns_verified: boolean,
  email_template_override: Record < string, any> | null;

}

export /**
 * useWhitelabelTenant - Function description

 */
function useWhitelabelTenant() {}
  const [tenant, set_tenant] = useState < WhitelabelTenant | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {}
    const load_tenant = async () => {}
      setIsLoading (true);
      set_error (null);
;
      // If running in the browser, bail out early when offline;

        set_error ('No internet connection');
        set_tenant (null);
        setIsLoading (false);
        return;
      }
      try {}
        // Get the current hostname, fallback to localhost if not available;'
        const hostname = window.location.hostname || 'localhost';'
        const function_name = 'tenant - detector';
;
      try {
  // TODO: Implement
        // Get the current hostname, fallback to localhost if not available;
        const hostname = window.location.hostname || 'localhost';
        const function_name = 'tenant - detector';
pr-12325
        // Build the query parameters;
<<<<<<< HEAD

=======
        const params = external_subdomain;
          ? `?subdomain=${encodeURIComponent (external_subdomain)}`;
          : `?host=${encodeURIComponent (hostname)}`;
;
        const { data, error: function_error } = await supabase.functions.invoke (
          `${function_name}${params}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {
            headers: {

              'Content - Type': 'application / json'}}

>>>>>>> merged-prs-20250907-203621
        }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        if (data.tenant) {}
          setTenant(data.tenant)

;
        // Check condition;
if ( {) {}
  $2;
}'
          console.error ('Edge Function error:', function_error);'

        );
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
        }
=======

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
<<<<<<< HEAD
        if (data.tenant) {
          setTenant(data.tenant)

        if (data && data.tenant) {
          setTenant(data && data.tenant)
        // Check condition;
=======
          return;


<<<<<<< HEAD
        }
        if (data.tenant) {
          setTenant(data.tenant)
=======

        }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        if (data.tenant) {
          setTenant(data.tenant)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        if (data && data.tenant) {
          setTenant(data && data.tenant)
;
        // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          console.error ('Edge Function error:', function_error);

          set_error ('Failed to load tenant configuration. Please try again later.');
<<<<<<< HEAD

=======
          set_tenant (null);
          return;
        }
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        } else {
          set_tenant (null);
        }
      } catch (err: any) {
        console && console.error('Error loading tenant:', err);

        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if ('
          message && message.includes('Failed to send a request to the Edge Function') ||'
          message && message.includes('Failed to connect to Supabase') ||'
          message && message.includes('No internet connection')

      } catch (err: any) {}
        ) {'

        console && console.error('Error loading tenant:', err);
        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if ()
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        }
;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
        if (data.tenant) {
          setTenant(data.tenant)

        if (data && data.tenant) {
          setTenant(data && data.tenant)
        // Check condition;
          console.error ('Edge Function error:', function_error);

          set_error ('Failed to load tenant configuration. Please try again later.');

        } else {
          set_tenant (null);
        }

        console && console.error('Error loading tenant:', err);

        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if ('
          message && message.includes('Failed to send a request to the Edge Function') ||'
          message && message.includes('Failed to connect to Supabase') ||'
          message && message.includes('No internet connection')

      } catch (err: any) {}
        ) {'

        console && console.error('Error loading tenant:', err);
        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if ()
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')

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
          message.includes('Failed to send a request to the Edge Function') |
          message.includes('Failed to connect to Supabase') |
          message.includes('No internet connection')
<<<<<<< HEAD
=======
<<<<<<< HEAD
      } catch (err: any) {
      } catch (err: any) {
        ) {
=======
=======

<<<<<<< HEAD
}
        if (data.tenant) {
          setTenant(data.tenant)
        } else {
          setTenant(null)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/resolved-merge-conflicts
        ) {
          message = 'Unable to reach the server. Please check your internet connection and try again.'
        }
<<<<<<< HEAD
        setError($2);
=======
      } catch (err: any) {
        console.error('Error loading tenant:', err);
        let message = err.message |'An unexpected error occurred while loading tenant configuration';
        if (
          message.includes('Failed to send a request to the Edge Function') |
          message.includes('Failed to connect to Supabase') |
          message.includes('No internet connection')
      } catch (err: any) {
      } catch (err: any) {
        ) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        setError(message);
>>>>>>> origin/resolved-merge-conflicts
        setTenant(null)
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
      }
        );  const [isAdmin, setIsAdmin] = useState(false);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
    },

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    loadTenant()
  }, [externalSubdomain]);
  return { tenant, isLoading, error }
}
<<<<<<< HEAD

<<<<<<< HEAD
export function useTenantAdminStatus(tenantId?: string) {
  const [isAdmin, setIsAdmin] = useState($2);
=======
// Hook to check if current user is a tenant admin
<<<<<<< HEAD
export function useTenantAdminStatus(tenantId?: string) {;
=======
export function useTenantAdminStatus(tenantId?: string) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [isAdmin, setIsAdmin] = useState(false);
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
        const { data: sessionData, error: sessionError} = await supabase.auth.getSession($2);
        if (sessionError || !sessionData.session) {
          setIsAdmin($2);
          return
        }
<<<<<<< HEAD
=======
  const [isAdmin, setIsAdmin] = useState(false);
>>>>>>> origin/chore/fix-lint-and-merge

        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

=======
<<<<<<< HEAD

        const userId = $2;
=======
=======
<<<<<<< HEAD
        ) {
          message = 'Unable to reach the server. Please check your internet connection and try again.'
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;

          message.includes('No internet connection');
<<<<<<< HEAD
=======
        ) {;
          message = 'Unable to reach the server. Please check your internet connection and try again.',;
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
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError |!sessionData.session) {
          setIsAdmin(false);
          return
        }
        const userId = sessionData.session.user.id;
=======
>>>>>>> origin/resolved-merge-conflicts

        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {
          setIsAdmin(false);
          return
        }

    },

    loadTenant()
  }, [externalSubdomain]),

  return { tenant, isLoading, error }
}

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
        const userId = sessionData && sessionData.session.user && user.id;      } finally {
        setIsLoading (false);
      }
    }
      } catch (err: any) {;
        console.error('Error loading tenant:', err),;
        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;
        if (;
          message.includes('Failed to send a request to the Edge Function') ||;
          message.includes('Failed to connect to Supabase') ||;
          message.includes('No internet connection');
<<<<<<< HEAD
        ) {;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ) {;'
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

    };
    checkAdminStatus();
  }, [tenantId]);
=======
    }
;
    checkAdminStatus ();
  }, [tenant_id]);
;
  return { is_admin, is_loading }
}
;
      try {;
        const { data:sessionData, error:sessionError } = await supabase.auth.getSession(),;
        if (sessionError || !sessionData.session) {;
          setIsAdmin(false),;
          return,;
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
>>>>>>> merged-prs-20250907-203621
      }
;
      try {;
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession(),;
        if (sessionError || !sessionData.session) {;
          setIsAdmin(false),;
          return;
        }
;
        const userId = sessionData.session.user.id,;
        const { data, error } = await supabase;
          .from('tenant_administrators');
          .select('*');
          .eq('tenant_id', tenantId);
          .eq('user_id', userId);
          .single(),;
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  return { isAdmin, isLoading }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    }
;
    checkAdminStatus ();
  }, [tenant_id]);
;
  return { is_admin, is_loading }
}
;
      try {;
        const { data:sessionData, error:sessionError } = await supabase.auth.getSession(),;
        if (sessionError || !sessionData.session) {;
          setIsAdmin(false),;
          return,;
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
        }
;
        const userId = sessionData.session.user.id,;
        const { data, error } = await supabase;
          .from('tenant_administrators');
          .select('*');
          .eq('tenant_id', tenantId);
          .eq('user_id', userId);
          .single(),;
        setIsAdmin(!!data && !error);
      } catch (err) {;
        console.error('Error checking tenant admin status:', err),;
        setIsAdmin(false);
      } finally {;
        setIsLoading(false);
      }
    };
    checkAdminStatus();
<<<<<<< HEAD
  }, [tenantId]);
=======
  }, [tenantId]);
=======
  return { isAdmin, isLoading }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

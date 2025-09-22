<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
export interface WhitelabelTenant {export interface WhitelabelTenant {

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
export interface WhitelabelTenant {import { useState, useEffect  } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface WhitelabelTenant {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface WhitelabelTenant {export interface WhitelabelTenant {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface WhitelabelTenant {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
=======
  // TODO: Implement
  // TODO: Implement
  id: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  brand_name: string;
  subdomain: string;,
  custom_domain: string | null;
primary_color: string;
logo_url: string | null;'
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {}
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';',
  landing_page_copy: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    headline: string;

    subtitle: string,
    cta: string;

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  is_active: boolean;
=======
  is_active: boolean;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  created_at: string;
  updated_at: string;,
  account_manager_id: string | null;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

  email_template_override: Record<string, any> | null
}

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
try {
        // Get the current hostname, fallback to localhost if not available
<<<<<<< HEAD

        const hostname = window && window.location.hostname || 'localhost';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      try {}
        // Get the current hostname, fallback to localhost if not available;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  const [error, setError] = useState<string | null>(null);
useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);
      // If running in the browser, bail out early when offline
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return
      }
      try {
        // Get the current hostname, fallback to localhost if not available

        const hostname = window && window.location.hostname || 'localhost';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        const functionName = 'tenant-detector';
        // Build the query parameters;
        const params = externalSubdomain;
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}``
          : `?host=${encodeURIComponent(hostname)}`;
const { data, error: functionError } = await supabase && supabase.functions.invoke(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          `${functionName}${params}`;
  dns_verified: boolean,
  email_template_override: Record < string, any> | null;

}

=======
          `${functionName}${params}`;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          `${functionName}${params}`;
  dns_verified: boolean,
  email_template_override: Record < string, any> | null;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export /**
 * useWhitelabelTenant - Function description
=======
export /**;
 * useWhitelabelTenant - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
</string>
  email_template_override: Record < string, any> | null;
export /**
 * useWhitelabelTenant - Function description;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
// Check condition;
if ( {) {}
  $2;
}'
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
const params = external_subdomain;
          ? `?subdomain=${encodeURIComponent (external_subdomain)}`;
          : `?host=${encodeURIComponent (hostname)}`;
;
        const { data, error: function_error } = await supabase.functions.invoke (
          `${function_name}${params}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          {
            headers: {
              'Content - Type': 'application / json'}}
<<<<<<< HEAD
<<<<<<< HEAD
        );

;
        if (!data) {;'
          console.warn('No tenant data received'),;
          setTenant(null),;
          return;
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        }
        if (data.tenant) {}
          setTenant(data.tenant)

;
        // Check condition;
if ( {) {}
  $2;
}'
          console.error ('Edge Function error:', function_error);'
        );

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          set_error ('Failed to load tenant configuration. Please try again later.');
set_tenant (null);
          return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
        } else {
          set_tenant (null);
        }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        console && console.error('Error loading tenant:', err);
        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if ('
          message && message.includes('Failed to send a request to the Edge Function') ||'
          message && message.includes('Failed to connect to Supabase') ||'
          message && message.includes('No internet connection')

      } catch (err: any) {}
        ) {'
=======
=======
} catch (err: any) {
  // TODO: Implement

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
        console.error('Error loading tenant:', err);
        let message = err.message |'An unexpected error occurred while loading tenant configuration';
        if (
          message.includes('Failed to send a request to the Edge Function') |
          message.includes('Failed to connect to Supabase') |
          message.includes('No internet connection')
      } catch (err: any) {
      } catch (err: any) {
        ) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          message = 'Unable to reach the server. Please check your internet connection and try again.'
        }
        setError(message);
        setTenant(null)
} finally {}
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        setIsLoading(false)
    loadTenant()
  }, [externalSubdomain]);
  return { tenant, isLoading, error }
}
// Hook to check if current user is a tenant admin
<<<<<<< HEAD
<<<<<<< HEAD
export function useTenantAdminStatus(tenantId?: string) {
  const [isAdmin, setIsAdmin] = useState(false);
=======
        );  const [isAdmin, setIsAdmin] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        );  const [isAdmin, setIsAdmin] = useState(false);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Hook to check if current user is a tenant admin
export function useTenantAdminStatus(tenantId?: string) {
export function useTenantAdminStatus(tenantId?: string) {;
export function useTenantAdminStatus(tenantId?: string) {;
// Hook to check if current user is a tenant admin;
export function useTenantAdminStatus(tenantId?: string) {
export function useTenantAdminStatus(tenantId?: string) {;
  const [isAdmin, setIsAdmin] = useState(false);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!tenantId) {
=======
// Hook to check if current user is a tenant admin;
export function useTenantAdminStatus() { return null; }
  useEffect(() => {}
    const checkAdminStatus = async () => {}
      if (!tenantId) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }
try {

        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {
          setIsAdmin(false);
          return
        }

        const userId = sessionData && sessionData.session.user && user.id;

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
        const { data, error } = await supabase
  // TODO: Implement
        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {

        const userId = sessionData && sessionData.session.user && user.id;

        const { data, error } = await supabase;
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();
        setIsAdmin(!!data && !error)
      } catch (err) {
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

console.error('Error checking tenant admin status:', err);
        setIsAdmin(false)
      } finally {
        setIsLoading(false)
      }
    }
    checkAdminStatus()
  }, [tenantId]);
  // TODO: Implement

      } catch (err: any) {;
        console.error('Error loading tenant:', err),;
        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;
if (;'
          message.includes('Failed to send a request to the Edge Function') ||;'
          message.includes('Failed to connect to Supabase') ||;'
          message.includes('No internet connection');
        ) {;'
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

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
    load_tenant ();
  }, [external_subdomain]);
;
  return { tenant, is_loading, error }
}
// Hook to check if current user is a tenant admin;
export /**;
 * useTenantAdminStatus - Function description;
 */
function useTenantAdminStatus() {}
  const [is_admin, setIsAdmin] = useState (false);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {}
    const checkAdminStatus = async () => {}
      // Check condition;
if ( {) {}
  $2;
}
        setIsAdmin (false);
        setIsLoading (false);
        return;
      }
      try {}
        const { data: session_data, error: session_error } = await supabase.auth.get_session ();
        // Check condition;
if ( {) {}
  $2;
}
          setIsAdmin (false);
          return;
        }
        const user_id = session_data.session.user.id;
const { data, error } = await supabase;'
          .from ('tenant_administrators');'
          .select ('*');'
          .eq ('tenant_id', tenant_id);'
          .eq ('user_id', user_id);
          .single ();
;
        setIsAdmin (!!data && !error);
      } catch (err) {'
        console.error ('Error checking tenant admin status:', err);
        setIsAdmin (false);
      } finally {}
        setIsLoading (false);
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        setIsAdmin (!!data && !error);
        console.error ('Error checking tenant admin status:', err);
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    };
    checkAdminStatus();
  }, [tenantId]);

  return { isAdmin, isLoading }
}
<<<<<<< HEAD
<<<<<<< HEAD
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
  }, [tenantId]);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return { isAdmin, isLoading }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return { isAdmin, isLoading }
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

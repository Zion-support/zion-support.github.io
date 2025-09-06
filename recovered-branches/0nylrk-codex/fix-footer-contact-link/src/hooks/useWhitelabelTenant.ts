<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface WhitelabelTenant {
=======
=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
export interface WhitelabelTenant {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    subtitle: string,
    cta: string;
  }

<<<<<<< HEAD
=======
    subtitle: string
    cta: string
  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;

<<<<<<< HEAD

=======
  dns_verified: boolean

  email_template_override: Record<string, any> | null
}
export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);

<<<<<<< HEAD

=======
export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return
      }
      try {
        // Get the current hostname, fallback to localhost if not available
<<<<<<< HEAD

        const hostname = window && window.location.hostname || 'localhost';

=======
        const hostname = window && window.location.hostname || 'localhost';
        const hostname = window.location.hostname |'localhost';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        const functionName = 'tenant-detector';
        // Build the query parameters
        const params = externalSubdomain
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(hostname)}`;
<<<<<<< HEAD


        const { data, error: functionError } = await supabase && supabase.functions.invoke(

=======
        const { data, error: functionError } = await supabase.functions.invoke(
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
        const { data, error: functionError } = await supabase && supabase.functions.invoke(
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          `${functionName}${params}`;
=======
  dns_verified: boolean,
  email_template_override: Record < string, any> | null;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
          return;


        }
        if (data.tenant) {
          setTenant(data.tenant)

        if (data && data.tenant) {
          setTenant(data && data.tenant)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD

=======
      } catch (err: any) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        console && console.error('Error loading tenant:', err);
        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if (
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {
          setIsAdmin(false);
          return
        }

        const userId = sessionData && sessionData.session.user && user.id;

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

    };
    checkAdminStatus();
  }, [tenantId]);


  return { isAdmin, isLoading }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
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
  return { isAdmin, isLoading }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

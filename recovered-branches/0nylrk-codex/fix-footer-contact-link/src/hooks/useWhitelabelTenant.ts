<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
export interface WhitelabelTenant {
=======

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface WhitelabelTenant {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

    subtitle: string,
    cta: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;

<<<<<<< HEAD
<<<<<<< HEAD
  dns_verified: boolean

  email_template_override: Record<string, any> | null
}
export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);

<<<<<<< HEAD
<<<<<<< HEAD
export function useWhitelabelTenant(externalSubdomain?: string) {;
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);
      // If running in the browser, bail out early when offline
<<<<<<< HEAD
<<<<<<< HEAD
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
=======
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      if (typeof navigator !== 'undefined' && !navigator && navigator.onLine) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return
      }
      try {
        // Get the current hostname, fallback to localhost if not available
<<<<<<< HEAD
<<<<<<< HEAD
        const hostname = window && window.location.hostname || 'localhost';
        const hostname = window.location.hostname |'localhost';
=======

        const hostname = window && window.location.hostname || 'localhost';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        const hostname = window && window.location.hostname || 'localhost';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const functionName = 'tenant-detector';
        // Build the query parameters
        const params = externalSubdomain
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(hostname)}`;
<<<<<<< HEAD
<<<<<<< HEAD
        const { data, error: functionError } = await supabase.functions.invoke(
=======


        const { data, error: functionError } = await supabase && supabase.functions.invoke(

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const { data, error: functionError } = await supabase && supabase.functions.invoke(
          `${functionName}${params}`;
  dns_verified: boolean,
  email_template_override: Record < string, any> | null;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {
            headers: {
              'Content - Type': 'application / json'}}
        );
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;
          return;


<<<<<<< HEAD
<<<<<<< HEAD
        }
        if (data.tenant) {
          setTenant(data.tenant)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        if (data.tenant) {
          setTenant(data.tenant)
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        if (data && data.tenant) {
          setTenant(data && data.tenant)
=======

        if (data && data.tenant) {
          setTenant(data && data.tenant)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      } catch (err: any) {
        console && console.error('Error loading tenant:', err);
        let message = err && err.message || 'An unexpected error occurred while loading tenant configuration';
        if (
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')
<<<<<<< HEAD
        }
        if (data.tenant) {
          setTenant(data.tenant)
        } else {
          setTenant(null)
        }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (err: any) {
        console.error('Error loading tenant:', err);
        let message = err.message |'An unexpected error occurred while loading tenant configuration';
        if (
<<<<<<< HEAD
          message.includes('Failed to send a request to the Edge Function') |
          message.includes('Failed to connect to Supabase') |
          message.includes('No internet connection')
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          message && message.includes('Failed to send a request to the Edge Function') ||
          message && message.includes('Failed to connect to Supabase') ||
          message && message.includes('No internet connection')

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export function useTenantAdminStatus(tenantId?: string) {;
=======
export function useTenantAdminStatus(tenantId?: string) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function useTenantAdminStatus(tenantId?: string) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {
          setIsAdmin(false);
          return
        }

        const userId = sessionData && sessionData.session.user && user.id;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const { data, error } = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();
        setIsAdmin(!!data && !error)
      } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD

        console.error('Error checking tenant admin status:', err);
        setIsAdmin(false)
      } finally {
        setIsLoading(false)
      }
    }
    checkAdminStatus()
  }, [tenantId]);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    };
    checkAdminStatus();
  }, [tenantId]);


  return { isAdmin, isLoading }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

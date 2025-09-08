
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';

export interface WhitelabelTenant {export interface WhitelabelTenant {


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
export interface WhitelabelTenant {import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export interface WhitelabelTenant {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
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
        const { data, error: functionError } = await supabase && supabase.functions.invoke(
          `${functionName}${params}`;
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
        );  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!tenantId) {
        setIsAdmin(false);
        setIsLoading(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return
      }
      try {

        const { data: sessionData, error: sessionError } = await supabase && supabase.auth.getSession();
        if (sessionError || !sessionData && sessionData.session) {
          setIsAdmin(false);
          return
        }

        const userId = sessionData && sessionData.session.user && user.id;      } finally {
        setIsLoading (false);
      }
    }
      } catch (err: any) {;
        console.error('Error loading tenant:', err),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;
        if (;
          message.includes('Failed to send a request to the Edge Function') ||;
          message.includes('Failed to connect to Supabase') ||;
          message.includes('No internet connection');
        ) {;
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
<<<<<<< HEAD

  useEffect (() => {}
    const checkAdminStatus = async () => {}
      // Check condition;
if ( {) {}
  $2;

=======
  useEffect (() => {
    const checkAdminStatus = async () => {
      // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

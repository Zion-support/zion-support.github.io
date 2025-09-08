

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';


import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
export interface WhitelabelTenant {


import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export interface WhitelabelTenant {;



  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {
    headline: string;


    subtitle: string,
    cta: string;

  }


  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;

import { useState, useEffect  } from 'react';
export interface WhitelabelTenant {
  id: string,
  brand_name: string,
  subdomain: string,
  custom_domain: string | null,
  primary_color: string,
  logo_url: string | null,
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',

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



;
        if (!data) {;
          console.warn('No tenant data received'),;
          setTenant(null),;

          return;




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

        setError(message);
        setTenant(null)

        setIsLoading(false)


    loadTenant()
  }, [externalSubdomain]);
  return { tenant, isLoading, error }
}

// Hook to check if current user is a tenant admin

  useEffect(() => {
      if (!tenantId) {
        setIsAdmin($2);
        setIsLoading($2);
        return
      }
      try {


        let message = err.message || 'An unexpected error occurred while loading tenant configuration',;

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

}

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



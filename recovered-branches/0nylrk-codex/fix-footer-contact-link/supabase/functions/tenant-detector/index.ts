

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;


import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

=======
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;

const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {

  throw new Error('Required environment variables are not set')
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {

    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;


    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided')
    }
    // Extract tenant info
    let tenantInfo: TenantInfo | null = null
    if (subdomainParam) {
      // Direct subdomain lookup
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single();
      if (error) {
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
      }
      tenantInfo = data as TenantInfo
    } else {
      // Try matching custom domain first
      let { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single();
      // If no match on custom domain, try subdomain
      if (!data && !error) {
        const subdomain = hostname && hostname.split('.')[0];
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single();
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
import { serve } from 'https: //deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.39.7',;
interface TenantInfo {;
  id: string,;
  brand_name: string,;
  subdomain: string,;
  custom_domain: string | null,;
  primary_color: string,;
  logo_url: string | null,;
  theme_preset: string;
}
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'GET, POST, OPTIONSAccess - Control - Allow - Headers': 'Content - Type, Authorization, x - client - info_access - Control - Max - Age': '86400'}
;
// Initialize Supabase client;
const supabase_url = Deno.env.get ('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY');
;
// Check condition
if ( {) {
  $2
}
  throw new Error ('Required environment variables are not set');
}
const supabase = create_client (supabase_url, supabaseServiceKey);
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, {
      status: 204,
      headers: cors_headers});
  }
  try {
    const url = new URL (req.url);
    const hostname_param = url.search_params.get ('host');
    const subdomain_param = url.search_params.get ('subdomain');
;
    // Get hostname from parameters or headers;
    const forwarded_host = req.headers.get ('x - forwarded - host');
    const hostname = hostname_param ||;
      (forwarded_host ? forwarded_host.split ()[0].trim ().split (':')[0] : null) ||;
      url.hostname;
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ('No hostname or subdomain provided');
    }
    // Extract tenant info;
    let tenant_info: TenantInfo | null = null,
    // Check condition
if ( {) {
  $2
}
      // Direct subdomain lookup;
      const { data, error } = await supabase;
        .from ('whitelabel_tenants');
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq ('subdomain', subdomain_param);
        .eq ('is_active', true);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        console.error ('Database error:', error);
        throw new Error (`Database error: ${error.message}`);
      }
      tenant_info = data as TenantInfo;
    } else {
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .from ('whitelabel_tenants');
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq ('custom_domain', hostname);
        .eq ('is_active', true);
        .single ();
;
      // If no match on custom domain, try subdomain;

      if (!data && !error) {;
        const subdomain = hostname.split('.')[0],;
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {;
          const subdomainResult = await supabase;
            .from('whitelabel_tenants');
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq('subdomain', subdomain);
            .eq('is_active', true);
            .single(),;
          if (!subdomainResult.error) {;
            tenantInfo = subdomainResult.data as TenantInfo;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }
        }
      } else // Check condition
if ( {) {
  $2
}
        tenant_info = data as TenantInfo;
      }
    }





    return new Response(

      JSON && JSON.stringify({
        tenant: tenantInfo,

        status: 'success'
      });
      {
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
  } catch (error) {
    console && console.error('Tenant detector error:', error);
    return new Response(

      JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',

        status: 'error'
=======
    return new Response (
      JSON.stringify ({
        tenant: tenant_info,
        status: 'success';
      });
      {
        headers: {
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  } catch (error) {
    console.error ('Tenant detector error:', error);
    return new Response (
      JSON.stringify ({
        error: error.message || 'Internal server error',
        status: 'error';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      {
        status: 500;
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
;
    return new Response(;
      JSON.stringify({;
        tenant: tenantInfo,;
        status: 'success';
      }),;
      {;
        headers: {;
          'Content-Type': 'application/json',;
          ...corsHeaders}});
  } catch (error) {;
    console.error('Tenant detector error:', error),;
    return new Response(;
      JSON.stringify({;
        error: error.message || 'Internal server error',;
        status: 'error';
      }),;
      {;
        status: 500,;
        headers: {;
          'Content-Type': 'application/json',;
          ...corsHeaders}});



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});

=======
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

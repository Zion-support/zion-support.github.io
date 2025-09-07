<<<<<<< HEAD
=======
<<<<<<< HEAD
import { serve } from 'https: //deno.land/std@0.208.0/http/server.ts';
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.39.7';
interface TenantInfo {
  id: string,
  brand_name: string,
  subdomain: string,
  custom_domain: string | null,
  primary_color: string,
  logo_url: string | null,
  theme_preset: string}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'},

// Initialize Supabase client
const supabaseUrl = Deno.env.get($2);
const supabaseServiceKey = Deno.env.get($2);
if (!supabaseUrl || !supabaseServiceKey) {
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;


import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

<<<<<<< HEAD

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts'
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

=======
=======
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface TenantInfo {

  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
<<<<<<< HEAD

}
const supabase = createClient(supabaseUrl, supabaseServiceKey);

      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;

=======
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl || !supabaseServiceKey) {

<<<<<<< HEAD
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);

=======
<<<<<<< HEAD
  logo_url: string | null
  theme_preset: string
}
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'}
// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl |!supabaseServiceKey) {
=======
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  throw new Error('Required environment variables are not set')
}

const supabase = createClient($2);
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders})
  }
  try {
    const url = new URL($2);
    const hostnameParam = url.searchParams.get($2);
    const subdomainParam = url.searchParams.get($2);
    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get($2);
    const hostname = $2;
    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided')
    }
    // Extract tenant info
    let tenantInfo: TenantInfo | null = $2;
    if (subdomainParam) {
      // Direct subdomain lookup
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single($2);
      if (error) {
        console.error($2);
        throw new Error(`Database error: ${error.message}`)
      }

      tenantInfo = data as TenantInfo
    } else {
      // Try matching custom domain first
      let { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single($2);
      // If no match on custom domain, try subdomain
      if (!data && !error) {
        const subdomain = $2;
=======
<<<<<<< HEAD
  if (req.method === 'OPTIONS') {
=======
  if (req && req.method === 'OPTIONS') {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
<<<<<<< HEAD
    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
=======

    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Get hostname from parameters or headers
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;
<<<<<<< HEAD
    const url = new URL(req.url);
    const hostnameParam = url.searchParams.get('host');
    const subdomainParam = url.searchParams.get('subdomain');
    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get('x-forwarded-host');
    const hostname = hostnameParam |
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] : null) |
      url.hostname;
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!hostname && !subdomainParam) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      throw new Error('No hostname or subdomain provided')
    }
    // Extract tenant info;
    let tenantInfo: TenantInfo | null = null;
    if (subdomainParam) {}
      // Direct subdomain lookup;
      const { data, error } = await supabase'
        .from('whitelabel_tenants')'
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')'
        .eq('subdomain', subdomainParam)'
        .eq('is_active', true)
        .single();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)

<<<<<<< HEAD
=======
=======
      if (error) {
<<<<<<< HEAD
        console.error('Database error:', error);
        throw new Error(`Database error: ${error.message}`)
=======
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
      tenantInfo = data as TenantInfo;
    } else {}
      // Try matching custom domain first;
      let { data, error } = await supabase'
        .from('whitelabel_tenants')'
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')'
        .eq('custom_domain', hostname)'
        .eq('is_active', true)
        .single();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            .eq('is_active', true)

          if (!subdomainResult && subdomainResult.error) {}
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo;
<<<<<<< HEAD
=======
=======
      // If no match on custom domain, try subdomain
      if (!data && !error) {
<<<<<<< HEAD
        const subdomain = hostname.split('.')[0];
=======
        const subdomain = hostname && hostname.split('.')[0];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
<<<<<<< HEAD
            .single($2);
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
=======
            .single();
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo

          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  logo_url: string | null,

  theme_preset: string;

}
const cors_headers = {'
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'GET, POST, OPTIONSAccess - Control - Allow - Headers': 'Content - Type, Authorization, x - client - info_access - Control - Max - Age': '86400'}
;
// Initialize Supabase client;'
const supabase_url = Deno.env.get ('SUPABASE_URL');'
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY');
;
// Check condition;
if ( {) {}
  $2;
}'
  throw new Error ('Required environment variables are not set');
}
const supabase = create_client (supabase_url, supabaseServiceKey);
;
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, {}
      status: 204,
      headers: cors_headers});
  }
  try {}
    const url = new URL (req.url);'
    const hostname_param = url.search_params.get ('host');'
    const subdomain_param = url.search_params.get ('subdomain');
;
    // Get hostname from parameters or headers;'
    const forwarded_host = req.headers.get ('x - forwarded - host');
    const hostname = hostname_param ||;'
      (forwarded_host ? forwarded_host.split ()[0].trim ().split (':')[0] : null) ||;
      url.hostname;
;
    // Check condition;
if ( {) {}
  $2;
}'
      throw new Error ('No hostname or subdomain provided');
    }
    // Extract tenant info;
    let tenant_info: TenantInfo | null = null,
    // Check condition;
if ( {) {}
  $2;
}
      // Direct subdomain lookup;
<<<<<<< HEAD
=======
      const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
        .from ('whitelabel_tenants');'
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');'
        .eq ('subdomain', subdomain_param);'
        .eq ('is_active', true);
        .single ();
;
      // Check condition;
if ( {) {}
  $2;
}'
        console.error ('Database error:', error);`
        throw new Error (`Database error: ${error.message}`);
      }
      tenant_info = data as TenantInfo;
    } else {}
      // Try matching custom domain first;
<<<<<<< HEAD
      }
=======
      let { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
        .from ('whitelabel_tenants');'
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');'
        .eq ('custom_domain', hostname);'
        .eq ('is_active', true);
        .single ();
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

if ( {) {
  $2
}

        const subdomain = hostname.split ('.')[0];
        if () {) {}
  $2;
<<<<<<< HEAD
}
          const subdomain_result = await supabase;'
            .from ('whitelabel_tenants');'
            .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');'
            .eq ('subdomain', subdomain);'
            .eq ('is_active', true);
            .single ();
;
          // Check condition;
if ( {) {}
  $2;
}

=======
}
          const subdomain_result = await supabase;'
            .from ('whitelabel_tenants');'
            .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');'
            .eq ('subdomain', subdomain);'
            .eq ('is_active', true);
            .single ();
;
          // Check condition;
if ( {) {}
  $2;
}

          }
        }
      } else // Check condition;
if ( {) {}
  $2;

}
        tenant_info = data as TenantInfo;
      }
    }

    return new Response (

      JSON.stringify ({
        tenant: tenant_info,

        status: 'success';
      });
      {}
        headers: {'
          'Content - Type': 'application / json',
          ...cors_headers}});
  } catch (error) {'
    console.error ('Tenant detector error:', error);
    return new Response (
      JSON.stringify ({'
        error: error.message || 'Internal server error','
        status: 'error';

    console.error('Tenant detector error:', error);
    return new Response(
      JSON.stringify({
        error: error.message |'Internal server error'
        status: 'error'

      });
      {
        status: 500;
        headers: {

  }
});

;
    return new Response(;
      JSON.stringify({;
        tenant: tenantInfo,;'
        status: 'success';
      }),;
      {;
        headers: {;'
          'Content-Type': 'application/json',;
          ...corsHeaders}});
  } catch (error) {;'
    console.error('Tenant detector error:', error),;
    return new Response(;
      JSON.stringify({;'
        error: error.message || 'Internal server error',;'
        status: 'error';
      }),;
      {;
        status: 500,;
        headers: {;'
          'Content-Type': 'application/json',;
          ...corsHeaders}});

  }
});

'
          'Content - Type': 'application / json',

          ...cors_headers}});
  }
});
;

import { serve } from 'https://deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7',;
;
interface TenantInfo {;
  id:string,;
  brand_name:string,;
  subdomain:string,;
  custom_domain:string | null,;
  primary_color:string,;
  logo_url:string | null,;
  theme_preset:string;
}
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'GET, POST, OPTIONSAccess-Control-Allow-Headers':'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age':'86400'},;
;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get('SUPABASE_URL'),;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),;
;
if (!supabaseUrl || !supabaseServiceKey) {;
  throw new Error('Required environment variables are not set'),;
}
;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, {;
      status:204,;
      headers:corsHeaders}),;
  }
;
  try {;
    const url = new URL(req.url),;
    const hostnameParam = url.searchParams.get('host'),;
    const subdomainParam = url.searchParams.get('subdomain'),;
    ;
    // Get hostname from parameters or headers;
    const forwardedHost = req.headers.get('x-forwarded-host'),;
    const hostname = hostnameParam || ;
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] :null) ||;
      url.hostname,;
;
    if (!hostname && !subdomainParam) {;
      throw new Error('No hostname or subdomain provided'),;
    }
;
    // Extract tenant info;
    let tenantInfo:TenantInfo | null = null,;
;
    if (subdomainParam) {;
      // Direct subdomain lookup;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('subdomain', subdomainParam);
        .eq('is_active', true);
        .single(),;
;
      if (error) {;
        console.error('Database error:', error),;
        throw new Error(`Database error:${error.message}`),;
      }
;
      tenantInfo = data as TenantInfo,;
    } else {;
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('custom_domain', hostname);
        .eq('is_active', true);
        .single(),;
;
      // If no match on custom domain, try subdomain;
=======
      // If no match on custom domain, try subdomain;
<<<<<<< HEAD
  theme_preset: string;
}
;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'},;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get('SUPABASE_URL'),;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),;
if (!supabaseUrl || !supabaseServiceKey) {;
  throw new Error('Required environment variables are not set');
}
;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, {;
      status: 204,;
      headers: corsHeaders});
  }
;
  try {;
    const url = new URL(req.url),;
    const hostnameParam = url.searchParams.get('host'),;
    const subdomainParam = url.searchParams.get('subdomain'),;
    // Get hostname from parameters or headers;
    const forwardedHost = req.headers.get('x-forwarded-host'),;
    const hostname = hostnameParam ||;
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] : null) ||;
      url.hostname,;
    if (!hostname && !subdomainParam) {;
      throw new Error('No hostname or subdomain provided');
    }
;
    // Extract tenant info;
    let tenantInfo: TenantInfo | null = null,;
    if (subdomainParam) {;
      // Direct subdomain lookup;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('subdomain', subdomainParam);
        .eq('is_active', true);
        .single(),;
      if (error) {;
        console.error('Database error:', error),;
        throw new Error(`Database error: ${error.message}`);
      }
;
      tenantInfo = data as TenantInfo;
    } else {;
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('custom_domain', hostname);
        .eq('is_active', true);
        .single(),;
      // If no match on custom domain, try subdomain;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (!data && !error) {;
        const subdomain = hostname.split('.')[0],;
        if (subdomain && !['wwwapp', 'locallocalhost'].includes(subdomain)) {;
          const subdomainResult = await supabase;
            .from('whitelabel_tenants');
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq('subdomain', subdomain);
            .eq('is_active', true);
            .single(),;
;
          if (!subdomainResult.error) {;
<<<<<<< HEAD
            tenantInfo = subdomainResult.data as TenantInfo,;
=======
            tenantInfo = subdomainResult.data as TenantInfo;


      // Check condition
if ( {) {
  $2
}
        const subdomain = hostname.split ('.')[0];
        if () {) {
  $2
}
          const subdomain_result = await supabase;
            .from ('whitelabel_tenants');
            .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq ('subdomain', subdomain);
            .eq ('is_active', true);
            .single ();
;
          // Check condition
if ( {) {
  $2
}
            tenant_info = subdomain_result.data as TenantInfo;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        }
      } else if (data) {;
        tenantInfo = data as TenantInfo,;
      }
    }
<<<<<<< HEAD
=======




    return new Response(

      JSON && JSON.stringify({
        tenant: tenantInfo,

<<<<<<< HEAD
      JSON && JSON.stringify({
        tenant: tenantInfo,
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          }
        }
      } else // Check condition;
if ( {) {}
  $2;

}
        tenant_info = data as TenantInfo;
      }
    }

<<<<<<< HEAD
    return new Response (

      JSON.stringify ({
        tenant: tenant_info,

        status: 'success';
      });
      {}
        headers: {'
          'Content - Type': 'application / json',
          ...cors_headers}});
  } catch (error) {'
    console.error ('Tenant detector error:', error);
    return new Response (
      JSON.stringify ({'
        error: error.message || 'Internal server error','
        status: 'error';

=======
    return new Response(
      JSON.stringify({
        tenant: tenantInfo
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        status: 'success'
      });
      {
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
  } catch (error) {
<<<<<<< HEAD
=======
    console && console.error('Tenant detector error:', error);
    return new Response(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',
        status: 'error'
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    console.error('Tenant detector error:', error);
    return new Response(
      JSON.stringify({
        error: error.message |'Internal server error'
        status: 'error'
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      });
      {
        status: 500;
        headers: {

<<<<<<< HEAD
  }
});

;
    return new Response(;
      JSON.stringify({;
        tenant: tenantInfo,;'
        status: 'success';
      }),;
      {;
        headers: {;'
          'Content-Type': 'application/json',;
          ...corsHeaders}});
  } catch (error) {;'
    console.error('Tenant detector error:', error),;
    return new Response(;
      JSON.stringify({;'
        error: error.message || 'Internal server error',;'
        status: 'error';
      }),;
      {;
        status: 500,;
        headers: {;'
          'Content-Type': 'application/json',;
          ...corsHeaders}});

  }
});

'
          'Content - Type': 'application / json',

          ...cors_headers}});
  }
});
;

=======
<<<<<<< HEAD
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    return new Response(;
      JSON.stringify({;
        tenant:tenantInfo,;
        status:'success';
      }),;
      {;
        headers:{;
          'Content-Type':'application/json',;
          ...corsHeaders}}),;
  } catch (error) {;
    console.error('Tenant detector error:', error),;
    return new Response(;
      JSON.stringify({ ;
        error:error.message || 'Internal server error',;
        status:'error';
      }),;
      {;
<<<<<<< HEAD
        status:500,;
        headers:{;
          'Content-Type':'application/json',;
          ...corsHeaders}}),;
  }}),
 serve (async (req) => {
  // Handle CORS preflight requests if (req.method === 'OPTIONS') {
  // Extract tenant info let tenantInfo: TenantInfo | null = null;
if (subdomainParam) {
  // Direct subdomain lookup const {
  data, error 
}= await supabase .from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('subdomain', subdomainParam) .eq ('is active', true) .single ();
.from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('custom domain', hostname) .eq ('is active', true) .single ();
// If no match on custom domain, try subdomain 
}
});
  }
<<<<<<< HEAD
}),
=======
});
=======
        status: 500,;
        headers: {;
          'Content-Type': 'application/json',;
          ...corsHeaders}});


<<<<<<< HEAD
  }
});

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  }
});
;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { serve } from 'https://deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7',;
;
interface TenantInfo {;
  id:string,;
  brand_name:string,;
  subdomain:string,;
  custom_domain:string | null,;
  primary_color:string,;
  logo_url:string | null,;
  theme_preset:string;
}
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'GET, POST, OPTIONSAccess-Control-Allow-Headers':'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age':'86400'},;
;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get('SUPABASE_URL'),;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),;
;
if (!supabaseUrl || !supabaseServiceKey) {;
  throw new Error('Required environment variables are not set'),;
}
;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, {;
      status:204,;
      headers:corsHeaders}),;
  }
;
  try {;
    const url = new URL(req.url),;
    const hostnameParam = url.searchParams.get('host'),;
    const subdomainParam = url.searchParams.get('subdomain'),;
    ;
    // Get hostname from parameters or headers;
    const forwardedHost = req.headers.get('x-forwarded-host'),;
    const hostname = hostnameParam || ;
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] :null) ||;
      url.hostname,;
;
    if (!hostname && !subdomainParam) {;
      throw new Error('No hostname or subdomain provided'),;
    }
;
    // Extract tenant info;
    let tenantInfo:TenantInfo | null = null,;
;
    if (subdomainParam) {;
      // Direct subdomain lookup;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('subdomain', subdomainParam);
        .eq('is_active', true);
        .single(),;
;
      if (error) {;
        console.error('Database error:', error),;
        throw new Error(`Database error:${error.message}`),;
      }
;
      tenantInfo = data as TenantInfo,;
    } else {;
      // Try matching custom domain first;
      let { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
        .eq('custom_domain', hostname);
        .eq('is_active', true);
        .single(),;
;
      // If no match on custom domain, try subdomain;
      if (!data && !error) {;
        const subdomain = hostname.split('.')[0],;
        if (subdomain && !['wwwapp', 'locallocalhost'].includes(subdomain)) {;
          const subdomainResult = await supabase;
            .from('whitelabel_tenants');
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');
            .eq('subdomain', subdomain);
            .eq('is_active', true);
            .single(),;
;
          if (!subdomainResult.error) {;
            tenantInfo = subdomainResult.data as TenantInfo,;
          }
        }
      } else if (data) {;
        tenantInfo = data as TenantInfo,;
      }
    }
;
    return new Response(;
      JSON.stringify({;
        tenant:tenantInfo,;
        status:'success';
      }),;
      {;
        headers:{;
          'Content-Type':'application/json',;
          ...corsHeaders}}),;
  } catch (error) {;
    console.error('Tenant detector error:', error),;
    return new Response(;
      JSON.stringify({ ;
        error:error.message || 'Internal server error',;
        status:'error';
      }),;
      {;
        status:500,;
        headers:{;
          'Content-Type':'application/json',;
          ...corsHeaders}}),;
  }}),
 serve (async (req) => {
  // Handle CORS preflight requests if (req.method === 'OPTIONS') {
  // Extract tenant info let tenantInfo: TenantInfo | null = null;
if (subdomainParam) {
  // Direct subdomain lookup const {
  data, error 
}= await supabase .from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('subdomain', subdomainParam) .eq ('is active', true) .single ();
.from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('custom domain', hostname) .eq ('is active', true) .single ();
// If no match on custom domain, try subdomain 
}
});
  }
<<<<<<< HEAD
});
=======
});

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

<<<<<<< HEAD
=======

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts'
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl || !supabaseServiceKey) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
=======

  logo_url: string | null
  theme_preset: string
}
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'}
// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl |!supabaseServiceKey) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  throw new Error('Required environment variables are not set')
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req && req.method === 'OPTIONS') {
=======
  if (req.method === 'OPTIONS') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    // Get hostname from parameters or headers
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
=======
    const url = new URL(req.url);
    const hostnameParam = url.searchParams.get('host');
    const subdomainParam = url.searchParams.get('subdomain');
    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get('x-forwarded-host');
    const hostname = hostnameParam |
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] : null) |
      url.hostname;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
=======
        console.error('Database error:', error);
        throw new Error(`Database error: ${error.message}`)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        const subdomain = hostname && hostname.split('.')[0];
=======
        const subdomain = hostname.split('.')[0];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
<<<<<<< HEAD
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo

=======
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from 'https: //deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.39.7',;
interface TenantInfo {;
  id: string,;
  brand_name: string,;
  subdomain: string,;
  custom_domain: string | null,;
  primary_color: string,;
  logo_url: string | null,;
<<<<<<< HEAD
=======


          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo

=======
========
          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
  logo_url: string | null,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
          }
        }
      } else // Check condition
if ( {) {
  $2
}
        tenant_info = data as TenantInfo;
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return new Response(

      JSON && JSON.stringify({
        tenant: tenantInfo,

========
      JSON && JSON.stringify({
        tenant: tenantInfo,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo
      }
    }

    return new Response(
      JSON.stringify({
        tenant: tenantInfo
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        status: 'success'
      });
      {
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
  } catch (error) {
<<<<<<< HEAD
    console && console.error('Tenant detector error:', error);
    return new Response(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts

      JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',

========
      JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
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
=======
    console.error('Tenant detector error:', error);
    return new Response(
      JSON.stringify({
        error: error.message |'Internal server error'
        status: 'error'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      });
      {
        status: 500;
        headers: {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
<<<<<<< HEAD
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
});

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/tenant-detector/index.ts
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  }
});
;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
});

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

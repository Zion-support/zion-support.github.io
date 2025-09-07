<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;'
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

'
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',';
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;'
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
import {serve} from 'https: //deno.land / std@0.208.0 / http / server.ts',
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TenantInfo {
=======

interface TenantInfo {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts'
import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

interface TenantInfo {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;

<<<<<<< HEAD

'
  throw new Error('Required environment variables are not set')
=======
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';  throw new Error('Required environment variables are not set')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.39.7';  throw new Error('Required environment variables are not set')
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {

  throw new Error('Required environment variables are not set')
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);
<<<<<<< HEAD
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
  if (req && req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
<<<<<<< HEAD
  try {    if (!hostname && !subdomainParam) {
=======
serve(async (req) => {}
  // Handle CORS preflight requests;
'
  if (req && req.method === 'OPTIONS') {}
    return new Response(null, {}
      status: 204;
      headers: corsHeaders})
  }
  try {}
    const url = new URL(req && req.url);'
    const hostnameParam = url && url.searchParams.get('host');'
    const subdomainParam = url && url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers'
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || '
=======
  try {

    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;


<<<<<<< HEAD

    if (!hostname && !subdomainParam) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    if (!hostname && !subdomainParam) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      if (error) {
=======
      if (error) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
        console && console.error('Database error:', error);
        throw new Error(`Database error: ${error && error.message}`)
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      // If no match on custom domain, try subdomain
      if (!data && !error) {
        const subdomain = hostname && hostname.split('.')[0];
        const subdomain = hostname && hostname.split('.')[0];
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
=======
      // If no match on custom domain, try subdomain;
      if (!data && !error) {}
'
        const subdomain = hostname && hostname.split('.')[0];
'
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {}
          const subdomainResult = await supabase'
            .from('whitelabel_tenants')'
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')'
            .eq('subdomain', subdomain)'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            .eq('is_active', true)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            .single();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import { serve } from 'https: //deno.land/std@0.208.0/http/server.ts',;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.39.7',;
interface TenantInfo {;
  id: string,;
  brand_name: string,;
  subdomain: string,;
  custom_domain: string | null,;
  primary_color: string,;
  logo_url: string | null,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



          if (!subdomainResult && subdomainResult.error) {}
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo;
  logo_url: string | null,


  theme_preset: string;
=======
            .single();  theme_preset: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            .single();  theme_preset: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            .single();


          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo

  logo_url: string | null,
  theme_preset: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      const { data, error } = await supabase;'
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
      let { data, error } = await supabase;'
        .from ('whitelabel_tenants');'
        .select ('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');'
        .eq ('custom_domain', hostname);'
        .eq ('is_active', true);
        .single ();
;
<<<<<<< HEAD
<<<<<<< HEAD
      // If no match on custom domain, try subdomain;      // Check condition
=======
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



      // Check condition
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
if ( {) {
  $2
}
=======
      // If no match on custom domain, try subdomain;

      if (!data && !error) {;'
        const subdomain = hostname.split('.')[0],;'
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {;
          const subdomainResult = await supabase;'
            .from('whitelabel_tenants');'
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset');'
            .eq('subdomain', subdomain);'
            .eq('is_active', true);
            .single(),;
          if (!subdomainResult.error) {;
            tenantInfo = subdomainResult.data as TenantInfo;



      // Check condition;
if ( {) {}
  $2;
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        const subdomain = hostname.split ('.')[0];
        if () {) {}
  $2;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            tenant_info = subdomain_result.data as TenantInfo;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        }
      } else // Check condition;
if ( {) {}
  $2;
=======
            tenant_info = subdomain_result.data as TenantInfo;
          }
        }
      } else // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        tenant_info = data as TenantInfo;
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31






<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return new Response(

      JSON && JSON.stringify({}
        tenant: tenantInfo,



'
        status: 'success'
      });
      {}
        headers: {'
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
  } catch (error) {}
'
        status: 'error'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response (
=======
            tenant_info = subdomain_result.data as TenantInfo;    return new Response (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            tenant_info = subdomain_result.data as TenantInfo;    return new Response (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
    return new Response (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      JSON.stringify ({
        tenant: tenant_info,
=======



    return new Response (
      JSON.stringify ({}
        tenant: tenant_info,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        status: 'success';
      });
      {}
        headers: {'
          'Content - Type': 'application / json',
          ...cors_headers}}
    );
  } catch (error) {'
    console.error ('Tenant detector error:', error);
    return new Response (
      JSON.stringify ({'
        error: error.message || 'Internal server error','
        status: 'error';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.error('Tenant detector error:', error);
    return new Response(
      JSON.stringify({
        error: error.message |'Internal server error'
        status: 'error'
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
      {
        status: 500;
        headers: {
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
});

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



      });
      {}
        status: 500;
        headers: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
      });
      {
        status: 500;
        headers: {  }
});          'Content - Type': 'application / json',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      });
      {
        status: 500;
        headers: {  }
});          'Content - Type': 'application / json',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      });
      {
        status: 500;
        headers: {

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



  }
});

  }
});

  }
});

          'Content - Type': 'application / json',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          ...cors_headers}}
    );
  }
});
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
});

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

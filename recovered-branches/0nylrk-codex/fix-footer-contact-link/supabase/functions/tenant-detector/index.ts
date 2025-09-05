<<<<<<< HEAD
import { serve } from 'https: //deno.land/std@0.208.0/http/server.ts',
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.39.7',
interface TenantInfo {
  id: string,
  brand_name: string,
  subdomain: string,
  custom_domain: string | null,
  primary_color: string,
  logo_url: string | null,
  theme_preset: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'},

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL'),
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Required environment variables are not set')
}

const supabase = createClient(supabaseUrl, supabaseServiceKey),
=======

interface TenantInfo {_id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: string;}

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Methods': 'GET, _POST, _OPTIONS', _'Access-Control-Allow-Headers': 'Content-Type, _Authorization, _x-client-info', _'Access-Control-Max-Age': '86400'};

// Initialize Supabase client
const _supabaseUrl = Deno.env.get('SUPABASE_URL');
const _supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {_throw new Error('Required environment variables are not set');}

const _supabase = createClient(supabaseUrl, supabaseServiceKey);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
<<<<<<< HEAD
    return new Response(null, {
      status: 204,
      headers: corsHeaders})
  }

  try {
    const url = new URL(req.url),
    const hostnameParam = url.searchParams.get('host'),
    const subdomainParam = url.searchParams.get('subdomain'),
    
    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get('x-forwarded-host'),
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url.hostname,

    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided')
    }
=======
    return new Response(null, _{
      status: 204, _headers: corsHeaders});
  }

  try {_const _url = new window.URL(req.url);
    const _hostnameParam = url.searchParams.get('host');
    const _subdomainParam = url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers
    const _forwardedHost = req.headers.get('x-forwarded-host');
    const _hostname = hostnameParam || 
      (forwardedHost ? forwardedHost.split(', _')[0].trim().split(':')[0] : null) ||
      url.hostname;

    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Extract tenant info
    let tenantInfo: TenantInfo | null = null,

    if (subdomainParam) {_// Direct subdomain lookup
      const { data, _error} = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single(),

<<<<<<< HEAD
      if (error) {
        console.error('Database error:', error),
        throw new Error(`Database error: ${error.message}`)
      }

      tenantInfo = data as TenantInfo
    } else {
      // Try matching custom domain first
      let { data, error } = await supabase
=======
      if (error) {_throw new Error(`Database error: ${error.message}`);
      }

      tenantInfo = data as TenantInfo;
    } else {_// Try matching custom domain first
      let { data, _error} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single(),

      // If no match on custom domain, try subdomain
<<<<<<< HEAD
      if (!data && !error) {
        const subdomain = hostname.split('.')[0],
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single(),

          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo
      }
    }

    return new Response(
      JSON.stringify({
        tenant: tenantInfo,
        status: 'success'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders}})
  } catch (error) {
    console.error('Tenant detector error:', error),
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        status: 'error'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders}})
=======
      if (!data && !error) {_const _subdomain = hostname.split('.')[0];
        if (subdomain && !['www', _'app', _'local', _'localhost'].includes(subdomain)) {
          const _subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, _brand_name, _subdomain, _custom_domain, _primary_color, _logo_url, _theme_preset')
            .eq('subdomain', _subdomain)
            .eq('is_active', _true)
            .single();

          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo;}
        }
      } else if (data) {_tenantInfo = data as TenantInfo;}
    }

    return new Response(
      JSON.stringify({_tenant: tenantInfo, _status: 'success'}),
      {_headers: {
          'Content-Type': 'application/json', _...corsHeaders}},
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error', _status: 'error'}),
      {_status: 500, _headers: {
          'Content-Type': 'application/json', _...corsHeaders}},
    );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
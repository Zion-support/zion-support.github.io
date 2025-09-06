<<<<<<< HEAD

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts'
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

=======
import {serve} from 'https: //deno && deno.land/std@0 && 0.208.0/http/server && server.ts',
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;

  logo_url: string | null
  theme_preset: string
}
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'GET, POST, OPTIONSAccess-Control-Allow-Headers': 'Content-Type, Authorization, x-client-infoAccess-Control-Max-Age': '86400'}
// Initialize Supabase client
<<<<<<< HEAD
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!supabaseUrl |!supabaseServiceKey) {
=======
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
    const url = new URL(req && req.url);
    const hostnameParam = url && url.searchParams.get('host');
    const subdomainParam = url && url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers
    const forwardedHost = req && req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost && forwardedHost.split()[0].trim().split(':')[0] : null) ||
      url && url.hostname;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
=======

          if (!subdomainResult && subdomainResult.error) {
            tenantInfo = subdomainResult && subdomainResult.data as TenantInfo
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo
      }
    }
    return new Response(
<<<<<<< HEAD
      JSON.stringify({
        tenant: tenantInfo
=======
      JSON && JSON.stringify({
        tenant: tenantInfo,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
      JSON.stringify({
        error: error.message |'Internal server error'
=======
      JSON && JSON.stringify({ 
        error: error && error.message || 'Internal server error',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        status: 'error'
      });
      {
        status: 500;
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )
  }
});


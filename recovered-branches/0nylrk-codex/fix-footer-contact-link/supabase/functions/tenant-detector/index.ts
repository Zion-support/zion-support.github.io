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
  throw new Error('Required environment variables are not set')
}

const supabase = createClient($2);
serve(async (req) => {
  // Handle CORS preflight requests
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
        if (subdomain && !['wwwapplocallocalhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single($2);
          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo
      }
    }

    return new Response($2);
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders}},
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        status: 500;
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders}},
    )
  }
}),
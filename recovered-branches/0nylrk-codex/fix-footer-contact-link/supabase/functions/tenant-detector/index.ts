
=======

import {serve} from 'https: //deno.land/std@0.208.0/http/server.ts',;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.39.7';

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          }
        }
      } else // Check condition
if ( {) {
  $2
}
        tenant_info = data as TenantInfo;
      }
    }

=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      });
      {
        status: 500;
        headers: {
          'Content-Type': 'application/json'
          ...corsHeaders}}
    )

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

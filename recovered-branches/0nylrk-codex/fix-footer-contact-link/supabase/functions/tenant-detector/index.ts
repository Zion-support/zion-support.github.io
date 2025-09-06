 serve (async (req) => {
  // Handle CORS preflight requests if (req.method === 'OPTIONS') {
  // Extract tenant info let tenantInfo: TenantInfo | null = null;
if (subdomainParam) {
  // Direct subdomain lookup const {
  data, error 
}= await supabase .from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('subdomain', subdomainParam) .eq ('is active', true) .single ();
.from ('whitelabel tenants') .select ('id, brand name, subdomain, custom domain, primary color, logo url, theme preset') .eq ('custom domain', hostname) .eq ('is active', true) .single ();
// If no match on custom domain, try subdomain 

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-client-info',
  'Access-Control-Max-Age': '86400',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Required environment variables are not set');

const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async req => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const hostnameParam = url.searchParams.get('host');
    const subdomainParam = url.searchParams.get('subdomain');

    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get('x-forwarded-host');
    const hostname =
      hostnameParam ||
      (forwardedHost
        ? forwardedHost.split(',')[0].trim().split(':')[0]
        : null) ||
      url.hostname;

    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided');
    }

    // Extract tenant info
    let tenantInfo: TenantInfo | null = null;

    if (subdomainParam) {
      // Direct subdomain lookup
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select(
          'id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset'
        )
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Database error:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      tenantInfo = data as TenantInfo;
    } else {
      // Try matching custom domain first
      let { data, error } = await supabase
        .from('whitelabel_tenants')
        .select(
          'id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset'
        )
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single();

      // If no match on custom domain, try subdomain
      if (!data && !error) {
        const subdomain = hostname.split('.')[0];
        if (
          subdomain &&
          !['www', 'app', 'local', 'localhost'].includes(subdomain)
        ) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select(
              'id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset'
            )
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single();

          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo;
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo;
      }
    }

    return new Response(
      JSON.stringify({
        tenant: tenantInfo,
        status: 'success',
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error('Tenant detector error:', error);
    return new Response(
      JSON.stringify({
        error: error.message || 'Internal server error',
        status: 'error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
});

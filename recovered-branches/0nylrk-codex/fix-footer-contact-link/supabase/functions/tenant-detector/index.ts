
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

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
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

    // Extract tenant info
    let tenantInfo: TenantInfo | null = null;

    if (subdomainParam) {_// Direct subdomain lookup
      const { data, _error} = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single();

      if (error) {_throw new Error(`Database error: ${error.message}`);
      }

      tenantInfo = data as TenantInfo;
    } else {_// Try matching custom domain first
      let { data, _error} = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single();

      // If no match on custom domain, try subdomain
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
  }
});
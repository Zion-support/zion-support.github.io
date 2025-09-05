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


export interface WhitelabelTenant {_id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {
    headline: string;
    subtitle: string;
    cta: string;};
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
  dns_verified: boolean;
  email_template_override: Record<string, any> | null;
}

export function useWhitelabelTenant(_externalSubdomain?: string) {_const [tenant, _setTenant] = useState<WhitelabelTenant | null>(null);
  const [isLoading, _setIsLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);

  useEffect__(() => {
    const _loadTenant = async () => {
      setIsLoading(true);
      setError(null);

      // If running in the browser, _bail out early when offline
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setError('No internet connection');
        setTenant(null);
        setIsLoading(false);
        return;}

      try {_// Get the current hostname, _fallback to localhost if not available
        const _hostname = window.location.hostname || 'localhost';
        const _functionName = 'tenant-detector';
        
        // Build the query parameters
        const _params = externalSubdomain 
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${_encodeURIComponent(hostname)}`;

        const {_data, _error: functionError} = await supabase.functions.invoke(
          `${_functionName}${_params}`,
          {_headers: {
              'Content-Type': 'application/json'}}
        );

        if (functionError) {_setError('Failed to load tenant configuration. Please try again later.');
          setTenant(null);
          return;}

        if (!data) {_setTenant(null);
          return;}

        if (data.tenant) {_setTenant(data.tenant);} else {_setTenant(null);}
      } catch (err: unknown) {_let _message = err.message || 'An unexpected error occurred while loading tenant configuration';
        if (
          message.includes('Failed to send a request to the Edge Function') ||
          message.includes('Failed to connect to Supabase') ||
          message.includes('No internet connection')
        ) {
          message = 'Unable to reach the server. Please check your internet connection and try again.';}
        setError(message);
        setTenant(null);
      } finally {_setIsLoading(false);}
    };

    loadTenant();
  }, [externalSubdomain]);

  return {_tenant, _isLoading, _error};
}

// Hook to check if current user is a tenant admin
export function useTenantAdminStatus(_tenantId?: string) {_const [isAdmin, _setIsAdmin] = useState(false);
  const [isLoading, _setIsLoading] = useState(true);

  useEffect__(() => {
    const _checkAdminStatus = async () => {
      if (!tenantId) {
        setIsAdmin(false);
        setIsLoading(false);
        return;}

      try {_const { data: sessionData, _error: sessionError} = await supabase.auth.getSession();
        if (sessionError || !sessionData.session) {_setIsAdmin(false);
          return;}

        const _userId = sessionData.session.user.id;
        const {_data, _error} = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();

        setIsAdmin(!!data && !error);
      } catch (err) {_setIsAdmin(false);} finally {_setIsLoading(false);}
    };

    checkAdminStatus();
  }, [tenantId]);

  return {_isAdmin, _isLoading};
}
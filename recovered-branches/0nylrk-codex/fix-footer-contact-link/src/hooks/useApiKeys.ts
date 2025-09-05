

export type ApiKeyScope = 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';

export interface ApiKey {_id: string;
  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;
  expires_at: string | null;
  is_active: boolean;}

export interface ApiLog {_id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;
  ip_address?: string;
  response_time_ms?: number;}

export function useApiKeys() {_const { user} = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);

  // Helper to get the base window.URL for API functions
  const _getApiUrl = () => {_// Using optional chaining ensures this function works both in the browser
    // (_where import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
    const _env = (import.meta as any)?.env ?? process.env;
    const _url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    return `${url}/functions/v1/api-key-manager`;
  };

  // Fetch user's API keys
  const _fetchApiKeys = async () => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getApiUrl()}/keys`, {_method: 'GET', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        }
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to fetch API keys');}

      setKeys(result.keys || []);
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error fetching API keys", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Create new API key
  const _createApiKey = async (_name: string, _scopes: ApiKeyScope[], _expiresAt?: Date | null) => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    setNewApiKey(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getApiUrl()}/create`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({_name, _scopes, _expiresAt: expiresAt ? expiresAt.toISOString() : null})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to create API key');}

      // Add the new key to the list
      setKeys(prev => [{_...result, _key: undefined}, ...prev]);
      
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key);
      
      toast({_title: "API Key Created", _description: "Your new API key has been generated. Save it now, _you won't be able to see it again."});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error creating API key", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Regenerate API key
  const _regenerateApiKey = async (_keyId: string) => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    setNewApiKey(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getApiUrl()}/regenerate`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({_keyId})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to regenerate API key');}

      // Update the key in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? {_...result, _key: undefined} : key
      ));
      
      // Store the new key value
      setNewApiKey(result.key);
      
      toast({_title: "API Key Regenerated", _description: "Your API key has been regenerated. Save it now, _you won't be able to see it again."});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error regenerating API key", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Revoke API key
  const _revokeApiKey = async (_keyId: string) => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getApiUrl()}/revoke`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({_keyId})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to revoke API key');}

      // Update the key's active status in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? {_...key, _is_active: false} : key
      ));
      
      toast({_title: "API Key Revoked", _description: "The API key has been revoked successfully."});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error revoking API key", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Fetch API usage logs
  const _fetchApiLogs = async (_limit = 50, _offset = 0) => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(
        `${_getApiUrl()}/logs?limit=${_limit}&offset=${_offset}`, 
        {_method: 'GET', _headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to fetch API logs');}

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error fetching API logs", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  return {_keys, _logs, _totalLogs, _loading, _error, _newApiKey, _fetchApiKeys, _createApiKey, _regenerateApiKey, _revokeApiKey, _fetchApiLogs, _clearNewApiKey: () => setNewApiKey(null)};
}

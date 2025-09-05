
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage',
=======
import { useState } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

export type ApiKeyScope = 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export interface ApiKey {
  id: string,
  name: string,
  key_prefix: string,
  scopes: ApiKeyScope[],
  created_at: string,
  last_used_at: string | null,
  expires_at: string | null,
  is_active: boolean
=======
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage',;
export interface ApiKey {;
  id: string,;
  name: string,;
  key_prefix: string,;
  scopes: ApiKeyScope[],;
  created_at: string,;
  last_used_at: string | null,;
  expires_at: string | null,;
  is_active: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export interface ApiLog {;
  id: string,;
  endpoint: string,;
  method: string,;
  status_code: number,;
  created_at: string,;
  ip_address?: string,;
  response_time_ms?: number;
}
<<<<<<< HEAD

export function useApiKeys() {
  const { user } = useAuth(),
  const [keys, setKeys] = useState<ApiKey[]>([]),
  const [logs, setLogs] = useState<ApiLog[]>([]),
  const [totalLogs, setTotalLogs] = useState(0),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [newApiKey, setNewApiKey] = useState<string | null>(null),

  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
    const env = (import.meta as any)?.env ?? process.env,
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,
    return `${url}/functions/v1/api-key-manager`
  },

  // Fetch user's API keys
  const fetchApiKeys = async () => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
export function useApiKeys() {;
  const { user } = useAuth(),;
  const [keys, setKeys] = useState<ApiKey[]>([]),;
  const [logs, setLogs] = useState<ApiLog[]>([]),;
  const [totalLogs, setTotalLogs] = useState(0),;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [newApiKey, setNewApiKey] = useState<string | null>(null),;
  // Helper to get the base URL for API functions;
  const getApiUrl = () => {;
    // Using optional chaining ensures this function works both in the browser;
    // (where import.meta.env is injected by Vite) and in Node environments;
    // such as tests or server side rendering.;
    const env = (import.meta as any)?.env ?? process.env,;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,;
    return `${url}/functions/v1/api-key-manager`;
  },;
  // Fetch user's API keys;
  const fetchApiKeys = async () => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      const response = await fetch(`${getApiUrl()}/keys`, {;
        method: 'GET',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        }
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to fetch API keys');
      }
<<<<<<< HEAD

      setKeys(result.keys || [])
    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error fetching API keys",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error fetching API keys&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
    
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
      setKeys(result.keys || []);
    } catch (err) {;
      console.error('Error fetching API keys:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error fetching API keys",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    setNewApiKey(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      const response = await fetch(`${getApiUrl()}/create`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({;
          name,;
          scopes,;
          expiresAt: expiresAt ? expiresAt.toISOString() : null;
        });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to create API key');
      }
<<<<<<< HEAD

      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),
      
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key),
      
      toast({
<<<<<<< HEAD
        title: "API Key Created",
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),
=======
        title: &quot;API Key Created&quot;,
        description: &quot;Your new API key has been generated. Save it now, you won't be able to see it again.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result
    } catch (err) {
      console.error('Error creating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error creating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error creating API key&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
    
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),;
      toast({;
        title: "API Key Created",;
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),;
      return result;
    } catch (err) {;
      console.error('Error creating API key:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error creating API key",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Regenerate API key;
  const regenerateApiKey = async (keyId: string) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    setNewApiKey(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      const response = await fetch(`${getApiUrl()}/regenerate`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ keyId });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to regenerate API key');
      }
<<<<<<< HEAD

      // Update the key in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? { ...result, key: undefined } : key
      )),
      
      // Store the new key value
      setNewApiKey(result.key),
      
      toast({
<<<<<<< HEAD
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),
=======
        title: &quot;API Key Regenerated&quot;,
        description: &quot;Your API key has been regenerated. Save it now, you won't be able to see it again.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result
    } catch (err) {
      console.error('Error regenerating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error regenerating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error regenerating API key&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
      // Update the key in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...result, key: undefined } : key;
      )),;
      // Store the new key value;
      setNewApiKey(result.key),;
      toast({;
        title: "API Key Regenerated",;
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),;
      return result;
    } catch (err) {;
      console.error('Error regenerating API key:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error regenerating API key",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Revoke API key;
  const revokeApiKey = async (keyId: string) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      const response = await fetch(`${getApiUrl()}/revoke`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ keyId });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to revoke API key');
      }
<<<<<<< HEAD

      // Update the key's active status in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? { ...key, is_active: false } : key
      )),
      
      toast({
<<<<<<< HEAD
        title: "API Key Revoked",
        description: "The API key has been revoked successfully."}),
=======
        title: &quot;API Key Revoked&quot;,
        description: &quot;The API key has been revoked successfully.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result
    } catch (err) {
      console.error('Error revoking API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error revoking API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error revoking API key&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
      // Update the key's active status in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...key, is_active: false } : key;
      )),;
      toast({;
        title: "API Key Revoked",;
        description: "The API key has been revoked successfully."}),;
      return result;
    } catch (err) {;
      console.error('Error revoking API key:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error revoking API key",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
;
      const response = await fetch(;
        `${getApiUrl()}/logs?limit=${limit}&offset=${offset}`,;
        {;
          method: 'GET',;
          headers: {;
            'Authorization': `Bearer ${session.access_token}`,;
            'Content-Type': 'application/json';
          }
        }
      ),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to fetch API logs');
      }
<<<<<<< HEAD

      setLogs(result.logs || []),
      setTotalLogs(result.count || 0),
      
      return result
    } catch (err) {
      console.error('Error fetching API logs:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error fetching API logs",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error fetching API logs&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
=======
;
      setLogs(result.logs || []),;
      setTotalLogs(result.count || 0),;
      return result;
    } catch (err) {;
      console.error('Error fetching API logs:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error fetching API logs",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  return {;
    keys,;
    logs,;
    totalLogs,;
    loading,;
    error,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey;
    fetchApiLogs;
    clearNewApiKey: () => setNewApiKey(null);
  }
}
;

<<<<<<< HEAD

=======
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export type ApiKeyScope = $2;
export interface ApiKey {
  id: string,
  name: string,
  key_prefix: string,
  scopes: ApiKeyScope[],
  created_at: string,
  last_used_at: string | null,
  expires_at: string | null,
  is_active: boolean}

export interface ApiLog {
  id: string,
  endpoint: string,
  method: string,
  status_code: number,
  created_at: string,
  ip_address?: string,
  response_time_ms?: number
}
export function useApiKeys() {
  const { user } = useAuth($2);
  const [keys, setKeys] = useState<ApiKey[]>([]),
  const [logs, setLogs] = useState<ApiLog[]>([]),
  const [totalLogs, setTotalLogs] = useState($2);
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [newApiKey, setNewApiKey] = useState<string | null>(null),

  // Helper to get the base URL for API functions
  const getApiUrl = $2;
    const url = $2;
    return `${url}/functions/v1/api-key-manager`
  },

  // Fetch user's API keys
  const fetchApiKeys = $2;
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }
      const response = await fetch(`${getApiUrl()}/keys`, {
        method: 'GET'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch API keys')
      }

      setKeys(result.keys || [])
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';

export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
;
<<<<<<< HEAD

export interface ApiKey {


export interface ApiKey {;



=======


export interface ApiKey {};
export interface ApiKey {;

export interface ApiKey {

export interface ApiKey {};
export interface ApiKey {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;

  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;

<<<<<<< HEAD


=======

  expires_at: string | null,
  is_active: boolean;

}


>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;


<<<<<<< HEAD


=======
  ip_address?: string
>>>>>>> origin/cursor/delete-old-data-records-6bba
  response_time_ms?: number
}
export function useApiKeys() {

<<<<<<< HEAD

export function useApiKeys() {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);


  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import && import.meta.env is injected by Vite) and in Node environments

<<<<<<< HEAD

    // such as tests or server side rendering.


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return `${url}/functions/v1/api-key-manager`
  }'
  // Fetch user's API keys;
  const fetchApiKeys = async () => {}
    if (!user) return;
    setLoading(true);
    setError(null);


    const env = (import.meta as any)?.env ?? process.env,
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,`
    return `${url}/functions/v1/api-key-manager`
  },
'
  // Fetch user's API keys;
  const fetchApiKeys = async () => {}

    if (!user) return,
    
    setLoading(true),
    setError(null),

<<<<<<< HEAD


      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");

        return


      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch API keys')
      }

      setKeys(result && result.keys || [])


    } catch (err) {
      console && console.error('Error fetching API keys:', err);

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({"
        variant: "destructive";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title: "Error fetching API keys",

        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

<<<<<<< HEAD

  ip_address?: string,


=======
  ip_address?: string,

>>>>>>> origin/cursor/delete-old-data-records-6bba
  response_time_ms?: number;
}
export /**;
 * useApiKeys - Function description;
 */
function useApiKeys() {}
  const { user } = use_auth ();
  const [keys, set_keys] = useState < ApiKey[]>([]);
  const [logs, set_logs] = useState < ApiLog[]>([]);
  const [total_logs, setTotalLogs] = useState (0);
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [newApiKey, setNewApiKey] = useState < string | null>(null);
<<<<<<< HEAD


;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Helper to get the base URL for API functions;
  const getApiUrl = () =>: any {}
    // Using optional chaining ensures this function works both in the browser;
    // (where import.meta.env is injected by Vite) and in Node environments;
    // such as tests or server side rendering.;
    const env = (import.meta as any)?.env ?? process.env;
<<<<<<< HEAD

    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;`
    return `${url}/functions / v1 / api - key - manager`;
  }
;'
  // Fetch user's API keys;
  const fetchApiKeys = async () => {}
    // Check condition;
if (return) {}
  $2;
}
    set_loading (true);
    set_error (null);
;
    try {}
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;
if ( {) {}
  $2;
}"
        set_error ("Authentication required");
        return;
      }`
      const response = await fetch (`${getApiUrl ()}/keys`, {'
        method: 'GET',
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'
          'Content - Type': 'application / json';
=======
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;

  const fetchApiKeys = async () => {
    // Check condition
}
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
    try {
      }
      const { "data": { session } } = await supabase.auth.get_session ();
      // Check condition,
if ( {) {
  $2
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        }
      });
      const result = await response.json ();

<<<<<<< HEAD
;

        throw new Error (result.error || 'Failed to fetch API keys');

      setKeys(result.keys || [])
      setKeys(result.keys || [])
=======
      toast({          name;
          }
          scopes,
          "expiresAt": expiresAt ? expiresAt && expiresAt.toISOString() : null
        })
      });
      }
      // Add the new key to the list,
setKeys(prev => [{ ...result, "key": undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once,
toast({
        }
        "title": "title","
    "description": "Your new API key has been generated. Save it now, you won't be able to see it again."});      toast({"
        }
        "title": "API Key Created""
        "description": "Your new API key has been generated. Save it now, you won't be able to see it again."});"
      toast({

      setLoading(false);
    }
  },
  // Create new API key;

      }

      setKeys(result.keys || [])

      setKeys(result.keys || [])

    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({



        throw new Error (result.error || 'Failed to fetch API keys');

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

      setKeys(result.keys || [])

      setKeys(result.keys || [])
      setKeys(result.keys || [])
>>>>>>> origin/cursor/delete-old-data-records-6bba


    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD


=======
        variant: "destructive",
        title: "Error fetching API keys",


        variant: "destructive";
        title: "Error fetching API keys"
        variant: "destructive",
        title: "Error fetching API keys",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  }
  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setNewApiKey(null);
      setLoading(false)
    }

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },

  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {}
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
<<<<<<< HEAD

    


      });


      const result = await response && response.json();
      
=======


    try {
      }
      const { "data": { session } } = await supabase && supabase.auth.getSession();
      if (!session) {

        };
        body: JSON && JSON.stringify({}
          name;

          scopes,
          expiresAt: expiresAt ? expiresAt && expiresAt.toISOString() : null;
        })
      });
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create API key')
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
        variant: "destructive",
        title: "Error fetching API keys",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
      }
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once

      }

      toast({

        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

>>>>>>> origin/cursor/delete-old-data-records-6bba

;
      setKeys(result.keys || []);
    } catch (err) {;'
      console.error('Error fetching API keys:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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
      if (!session) {;"
        setError("Authentication required"),;
        return;
      }
;`
      const response = await fetch(`${getApiUrl()}/create`, {;'
        method: 'POST',;
        headers: {;'`
          'Authorization': `Bearer ${session.access_token}`,;'
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({;
          name,;
          scopes,;
          expiresAt: expiresAt ? expiresAt.toISOString() : null;
        });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;'
        throw new Error(result.error || 'Failed to create API key');
      }


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),

      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key),

      toast({
        title: "API Key Created",

        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),

<<<<<<< HEAD
      


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return result
    } catch (err) {
      console && console.error('Error creating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<< HEAD

        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
;
  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expires_at?: Date | null) => {

=======


    try {

      }
      if (!session) {
        }
        setError("Authentication required");"
return;
      }
const response = await fetch (;
        `${getApiUrl ()}/logs?limit=${limit}&offset=${offset}`,`        {
          }
          "method": 'GET''
          "headers": {
      }
      
      if (!response && response.ok) {

      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);

      setLogs(result.logs || []);

  // Revoke API key;
  const revokeApiKey = async ("key_id": string) => {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Check condition
}
if (return) {
  $2
}
    set_loading (true);
    set_error (null),
    try {
      }
      // Check condition,
if ( {) {
  $2
}


<<<<<<< HEAD
=======
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

      });

      return result;
    } catch (err) {'
      console && console.error('Error creating API key:', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({}
      const result = await response && response.json();
      
      if (!response && response.ok) {'
        throw new Error(result && result.error || 'Failed to regenerate API key')


;
      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),;
      toast({;"
        title: "API Key Created",'"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),;
      return result;
    } catch (err) {;'
      console.error('Error creating API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;"
        variant: "destructive",;"
        title: "Error creating API key",'
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
      if (!session) {;"
        setError("Authentication required"),;
        return;
      }
;`
      const response = await fetch(`${getApiUrl()}/regenerate`, {;'
        method: 'POST',;
        headers: {;'`
          'Authorization': `Bearer ${session.access_token}`,;'
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ keyId });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;'
        throw new Error(result.error || 'Failed to regenerate API key');
      }

      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...result, key: undefined } : key"
        variant: "destructive";

;
  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expires_at?: Date | null) => {}
    // Check condition;
if (return) {}
  $2;
}
    set_loading (true);
    set_error (null);
    setNewApiKey (null);
;
    try {}
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;
if ( {) {}
  $2;
}"
        set_error ("Authentication required");
        return;
      }`
      const response = await fetch (`${getApiUrl ()}/create`, {'
        method: 'POST',
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'
          'Content - Type': 'application / json';
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
        body: JSON.stringify ({}
          name;
          scopes,
          expires_at: expires_at ? expires_at.toISOString () : null;
        });
      });

<<<<<<< HEAD
        {

    } finally {
      }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...result, key: undefined } : key;
      ));
      // Store the new key value;
      setNewApiKey(result && result.key);
<<<<<<< HEAD

      
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


      )),
      
      // Store the new key value;
      setNewApiKey(result.key),
      
      toast({"
        title: "API Key Regenerated",'"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),

<<<<<<< HEAD
      

        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})


        variant: "destructive";
        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
;
  // Regenerate API key;
  const regenerateApiKey = async (key_id: string) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
    setNewApiKey (null),
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getApiUrl ()}/regenerate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ key_id });
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to regenerate API key');
      }
      // Update the key in the list;
      set_keys (prev => prev.map (key =>;
        key.id === key_id ? { ...result, key: undefined } : key));
;
      // Store the new key value;
      setNewApiKey (result.key);
;
      toast ({
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
;
      return result;
    } catch (err) {
      console.error ('Error regenerating API key:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error regenerating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
      return result
    } catch (err) {
      console.error('Error regenerating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";

=======

      return result
    } catch (err) {
      console && console.error('Error regenerating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title: "Error regenerating API key"
        variant: "destructive",
        title: "Error regenerating API key",

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),

<<<<<<< HEAD
    
=======
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to revoke API key')

      }
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
      // Update the key in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...result, key: undefined } : key;
      )),;
      // Store the new key value;
      setNewApiKey(result.key),;
      toast({;
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),;

      return result;
<<<<<<< HEAD

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



      // Update the key's active status in the list

      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...key, is_active: false } : key


=======
    } catch (err) {'
      console && console.error('Error regenerating API key:', err);'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({}
"
        variant: "destructive";"
        title: "Error regenerating API key""
        variant: "destructive","
        title: "Error regenerating API key",

<<<<<<< HEAD


        title: "Error revoking API key",
=======
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
        variant: "destructive";

;
  // Regenerate API key;
  const regenerateApiKey = async (key_id: string) => {}
    // Check condition;
if (return) {}
  $2;

        title: "Error regenerating API key",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})


        variant: "destructive";
<<<<<<< HEAD
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
=======
        title: "Error regenerating API key"
        variant: "destructive",
        title: "Error regenerating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

  }
  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null)
  },

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),


    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to revoke API key')

      }


;
      // Update the key in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...result, key: undefined } : key;
      )),;
      // Store the new key value;
      setNewApiKey(result.key),;
      toast({;
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),;

      return result;

    } catch (err) {'
      console && console.error('Error regenerating API key:', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({}
"
        variant: "destructive";"
        title: "Error regenerating API key""
        variant: "destructive","
        title: "Error regenerating API key",

>>>>>>> origin/cursor/delete-old-data-records-6bba

;
  // Regenerate API key;
  const regenerateApiKey = async (key_id: string) => {}
    // Check condition;
if (return) {}
  $2;

}
    set_loading (true);
    set_error (null);
    setNewApiKey (null),

          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ key_id });
      });
;
      const result = await response.json ();
;

        throw new Error (result.error || 'Failed to regenerate API key');
      }
      // Update the key in the list;
      set_keys (prev => prev.map (key =>;
        key.id === key_id ? { ...result, key: undefined } : key));
;
      // Store the new key value;
      setNewApiKey (result.key);
;
<<<<<<< HEAD

      return result;
    } catch (err) {
      console.error ('Error revoking API key:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error revoking API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
      return result
    } catch (err) {
      console.error('Error revoking API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error revoking API key"
        variant: "destructive",
        title: "Error revoking API key",

=======


      set_loading (false);
    }
  }

        variant: "destructive",
        title: "Error regenerating API key",

      return result

    } catch (err) {
      console && console.error('Error revoking API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

        variant: "destructive",
        title: "Error regenerating API key",


>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: err instanceof Error ? err.message : 'An unknown error occurred'})

    } finally {

      setLoading(false)
    }

<<<<<<< HEAD


  },

=======
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {}
    if (!user) return,
    
    setLoading(true),
    setError(null),

<<<<<<< HEAD
    

=======

    try {

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");


      const result = await response && response.json();
      
      if (!response && response.ok) {}
'
        throw new Error(result && result.error || 'Failed to fetch API logs')

      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);

      setLoading(false);
    }
  },
  // Fetch API usage logs;

        return;
      }
      const response = await fetch(;


;
  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
;
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (
        `${getApiUrl ()}/logs?limit=${limit}&offset=${offset}`,
        {
          method: 'GET'
          headers: {
      const result = await response && response.json();
      if (!response && response.ok) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error(result && result.error || 'Failed to fetch API logs')
      }
      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);

<<<<<<< HEAD


      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Update the key's active status in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...key, is_active: false } : key;
      )),;

      return result;
    } catch (err) {;'
      console.error('Error revoking API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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
      if (!session) {;"
        setError("Authentication required"),;
        return;
      }
;
      const response = await fetch(;`
        `${getApiUrl()}/logs?limit=${limit}&offset=${offset}`,;
        {;'
          method: 'GET',;
          headers: {;'`
            'Authorization': `Bearer ${session.access_token}`,;'
            'Content-Type': 'application/json';
          }
        }
      ),;
      const result = await response.json(),;
      if (!response.ok) {;'
        throw new Error(result.error || 'Failed to fetch API logs');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }

      setLogs(result.logs || []),
      setTotalLogs(result.count || 0),

<<<<<<< HEAD

        {
          method: 'GET'
          headers: {




=======
      toast({    error;
    }
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return result
    } catch (err) {
      console && console.error('Error fetching API logs:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');

<<<<<<< HEAD
      toast({
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
            'Authorization': `Bearer ${session.access_token}`;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            'Content - Type': 'application / json';
          }
        });
;
      const result = await response.json ();
;

        throw new Error (result.error || 'Failed to fetch API logs');
      }
      set_logs (result.logs || []);
      setTotalLogs (result.count || 0);
;
      return result;

    } catch (err) {
      console.error ('Error fetching API logs:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error fetching API logs",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
;
  return {
    keys;
    logs;
    total_logs;
<<<<<<< HEAD
=======
      
      return result
    } catch (err) {
      console.error('Error fetching API logs:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error fetching API logs"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  }
  return {
    keys;
    logs;
    totalLogs;
    loading;
    error;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    fetchApiLogs;


<<<<<<< HEAD

    revokeApiKey;
    fetchApiLogs;
    "clearNewApiKey": () => setNewApiKey(null);
  }
}
  }
}
    }
  },
=======
}"
        variant: "destructive","
        title: "Error fetching API logs",'
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
    } finally {;
      setLoading(false);

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

    clearNewApiKey: () => setNewApiKey (null);

  }
}
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


    clearNewApiKey: () => setNewApiKey (null);

  }
}


  }
}

  }
}

import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
;
export type ApiKeyScope = 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage',;
;
export interface ApiKey {;
  id:string,;
  name:string,;
  key_prefix:string,;
  scopes:ApiKeyScope[],;
  created_at:string,;
  last_used_at:string | null,;
  expires_at:string | null,;
  is_active:boolean;}
;
export interface ApiLog {;
  id:string,;
  endpoint:string,;
  method:string,;
  status_code:number,;
  created_at:string,;
  ip_address?:string,;
  response_time_ms?:number;


}
  // Fetch user's API keys;
  const fetchApiKeys = async () => {
    // Check condition;
if (return) {
  $2;
    set_loading (true);
    set_error (null);
    try {
  // TODO: Implement
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;

if ( {) {
        set_error ("Authentication required");"
        return;
      }`;
      const response = await fetch (`${getApiUrl ()}/keys`, {"
        method: 'GET',
        headers: {`;
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
      });
      const result = await response.json ();
      // Check condition;
        throw new Error (result.error || 'Failed to fetch API keys');`;
          'Content-Type': 'application/json
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch API keys')
      setKeys(result.keys |[])

  const { user } = useAuth(),;
  const [keys, setKeys] = useState<ApiKey[]>([]),;

  const [logs, setLogs] = useState<ApiLog[]>([]),;


  const [error, setError] = useState<string | null>(null),;
  const [newApiKey, setNewApiKey] = useState<string | null>(null),;
;
  // Helper to get the base URL for API functions;
  const getApiUrl = () => {;
    // Using optional chaining ensures this function works both in the browser;
    // (where import.meta.env is injected by Vite) and in Node environments;
    // such as tests or server side rendering.;
    const env = (import.meta as any)?.env ?? process.env,;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,;
    return `${url}/functions/v1/api-key-manager`,;
  },;
;
  // Fetch user's API keys;
  const fetchApiKeys = async () => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getApiUrl()}/keys`, {;
        method:'GET',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        }
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to fetch API keys'),;
      }
;
      setKeys(result.keys || []),;
    } catch (err) {;
      console.error('Error fetching API keys:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error fetching API keys",;
        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Create new API key;
  const createApiKey = async (name:string, scopes:ApiKeyScope[], expiresAt?:Date | null) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    setNewApiKey(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getApiUrl()}/create`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({;
          name,;
          scopes,;
          expiresAt:expiresAt ? expiresAt.toISOString() :null;
        });
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to create API key'),;
      }
;
      // Add the new key to the list;
      setKeys(prev => [{ ...result, key:undefined }, ...prev]),;
      ;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),;
      ;
      toast({;
        title:"API Key Created",;
        description:"Your new API key has been generated. Save it now, you won't be able to see it again."}),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error creating API key:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error creating API key",;
        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Regenerate API key;
  const regenerateApiKey = async (keyId:string) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    setNewApiKey(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getApiUrl()}/regenerate`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ keyId });
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to regenerate API key'),;
      }
;
      // Update the key in the list;
      setKeys(prev => prev.map(key => ;
        key.id === keyId ? { ...result, key:undefined } key;
      )),;
      ;
      // Store the new key value;
      setNewApiKey(result.key),;
      ;
      toast({;
        title:"API Key Regenerated",;
        description:"Your API key has been regenerated. Save it now, you won't be able to see it again."}),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error regenerating API key:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error regenerating API key",;
        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Revoke API key;
  const revokeApiKey = async (keyId:string) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getApiUrl()}/revoke`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ keyId });
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to revoke API key'),;
      }
;
      // Update the key's active status in the list;
      setKeys(prev => prev.map(key => ;
        key.id === keyId ? { ...key, is_active:false } key;
      )),;
      ;
      toast({;
        title:"API Key Revoked",;
        description:"The API key has been revoked successfully."}),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error revoking API key:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error revoking API key",;
        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(;
        `${getApiUrl()}/logs?limit=${limit}&offset=${offset}`, ;
        {;
          method:'GET',;
          headers:{;
            'Authorization':`Bearer ${session.access_token}`,;
            'Content-Type':'application/json';
          }
        }
      ),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to fetch API logs'),;
      }
;
      setLogs(result.logs || []),;
      setTotalLogs(result.count || 0),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error fetching API logs:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error fetching API logs",;
        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
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
    revokeApiKey,;
    fetchApiLogs,;
    clearNewApiKey:() => setNewApiKey(null);
  },; export type ApiKeyScope = 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
  //Using optional chaining ensures this function works both in the browser // (where import.meta.env is injected by Vite) and in Node environments //such as tests or server side rendering. setLoading (true);
setError (null);
try {

}getApiUrl () 
}/keys`, {
  method: 'GET', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
}
});
}finally {
  setLoading (false) 
}
};
//Create new API key const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
  if (!user) return;
setError (null);
setNewApiKey (null);
try {

}getApiUrl () 
}/create`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
//Store the actual key value temporarily so it can be displayed once setNewApiKey (result.key);
return result;
}catch (err) {
  console.error ('Error creating API key:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({

}finally {
  setLoading (false) 
}
};
//Regenerate API key const regenerateApiKey = async (keyId: string) => {
  if (!user) return;
setError (null);
setNewApiKey (null);
try {

}getApiUrl () 
}/regenerate`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
//Store the new key value setNewApiKey (result.key);
return result;
}catch (err) {
  console.error ('Error regenerating API key:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({

}finally {
  setLoading (false) 
}
};
//Revoke API key const revokeApiKey = async (keyId: string) => {
  if (!user) return;
setError (null);
try {

}getApiUrl () 
}/revoke`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
return result;
}catch (err) {
  console.error ('Error revoking API key:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({

}finally {
  setLoading (false) 
}
};
//Fetch API usage logs const fetchApiLogs = async (limit = 50, offset = 0) => {
  if (!user) return;
setError (null);
try {

}getApiUrl () 
}/logs?limit=$ {
  limit 
}&offset=$ {
  offset 
}`;
{
  method: 'GET', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
}
});
setLogs (result.logs || []);
setTotalLogs (result.count || 0);
}finally {
  setLoading (false) 
}
};
return {
  keys;
logs;
totalLogs;
loading;
error;
newApiKey;
fetchApiKeys;
createApiKey;
regenerateApiKey;
revokeApiKey;
fetchApiLogs;
clearNewApiKey: () => setNewApiKey (null) 
}
}
  }
}
;
  }
}
;

>>>>>>> origin/cursor/delete-old-data-records-6bba

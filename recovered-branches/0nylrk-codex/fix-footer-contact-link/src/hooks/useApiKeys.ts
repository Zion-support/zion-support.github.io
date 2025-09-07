<<<<<<< HEAD

  ip_address?: string,
  response_time_ms?: number
}


<<<<<<< HEAD
=======
=======



import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';

export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
;
<<<<<<< HEAD

export interface ApiKey {};
export interface ApiKey {;

export interface ApiKey {

export interface ApiKey {};
export interface ApiKey {;

=======
export interface ApiKey {


export interface ApiKey {;

<<<<<<< HEAD
export interface ApiKey {

export interface ApiKey {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;

  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;

<<<<<<< HEAD
  expires_at: string | null,
  is_active: boolean;

}

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  expires_at: string | null,
  is_active: boolean;
}


export interface ApiLog {;


<<<<<<< HEAD
  expires_at: string | null
  is_active: boolean
}
export interface ApiLog {
  expires_at: string | null,
  is_active: boolean
}

export interface ApiLog {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;

<<<<<<< HEAD
  ip_address?: string
=======

<<<<<<< HEAD
  ip_address?: string
  response_time_ms?: number
}
export function useApiKeys() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ip_address?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  response_time_ms?: number
}
export function useApiKeys() {

<<<<<<< HEAD
  ip_address?: string,
  response_time_ms?: number;
}

>>>>>>> origin/chore/fix-lint-and-merge
=======
export function useApiKeys() {;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage',

export interface ApiKey {
  id: string,
  name: string,
  key_prefix: string,
  scopes: ApiKeyScope[],
  created_at: string,
  last_used_at: string | null,
  expires_at: string | null,
  is_active: boolean
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

export function useApiKeys() {
  const { user } = useAuth(),
  const [keys, setKeys] = useState<ApiKey[]>([]),
  const [logs, setLogs] = useState<ApiLog[]>([]),
  const [totalLogs, setTotalLogs] = useState(0),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [newApiKey, setNewApiKey] = useState<string | null>(null),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import && import.meta.env is injected by Vite) and in Node environments

<<<<<<< HEAD
=======
    // such as tests or server side rendering.

<<<<<<< HEAD
=======
    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;

<<<<<<< HEAD
    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;

  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL |env.SUPABASE_URL;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return `${url}/functions/v1/api-key-manager`
  }'
  // Fetch user's API keys;
  const fetchApiKeys = async () => {}
    if (!user) return;
    setLoading(true);
    setError(null);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
<<<<<<< HEAD
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      }
      const response = await fetch(`${getApiUrl()}/keys`, {
        method: 'GET'
        headers: {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");
<<<<<<< HEAD
        return;
      }`
      const response = await fetch(`${getApiUrl()}/keys`, {'
        method: 'GET'
        headers: {}
    } catch (err) {'
      console && console.error('Error fetching API keys:', err);'
=======
        return


      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch API keys')
      }

      setKeys(result && result.keys || [])

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (err) {
      console && console.error('Error fetching API keys:', err);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({"
        variant: "destructive";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: "Error fetching API keys",

        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ip_address?: string,

>>>>>>> origin/chore/fix-lint-and-merge
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
=======

;
>>>>>>> origin/chore/fix-lint-and-merge
  // Helper to get the base URL for API functions;
  const getApiUrl = () =>: any {}
    // Using optional chaining ensures this function works both in the browser;
    // (where import.meta.env is injected by Vite) and in Node environments;
    // such as tests or server side rendering.;
    const env = (import.meta as any)?.env ?? process.env;
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/chore/fix-lint-and-merge
        }
      });
      const result = await response.json ();
<<<<<<< HEAD

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

=======
;

        throw new Error (result.error || 'Failed to fetch API keys');
<<<<<<< HEAD
=======
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch API keys')
      }
      setKeys(result.keys |[])
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
      }

      setKeys(result.keys || [])
=======
      }

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setKeys(result.keys || [])
      setKeys(result.keys || [])
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======
        title: "Error fetching API keys",

        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}
      set_loading (false);
    }

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
>>>>>>> origin/chore/fix-lint-and-merge
      setLoading(false)
    }

  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {}
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
<<<<<<< HEAD
=======
    

<<<<<<< HEAD
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    try {
<<<<<<< HEAD
      }
      const { "data": { session } } = await supabase && supabase.auth.getSession();
      if (!session) {

=======

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        };
        body: JSON && JSON.stringify({}
          name;

          scopes,
          expiresAt: expiresAt ? expiresAt && expiresAt.toISOString() : null;
        })
>>>>>>> origin/chore/fix-lint-and-merge
      });
<<<<<<< HEAD
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create API key')
=======

      const result = await response && response.json();
      
<<<<<<< HEAD
      if (!response && response.ok) {

      setLoading(false);
    }
  },
  // Regenerate API key;

      }
      // Update the key in the list,
setKeys(prev => prev && prev.map(key =>
        key && key.id === keyId ? { ...result, "key": undefined } : key
      ));
      // Store the new key value,
setNewApiKey(result && result.key);
      toast({
        }
        "title": "API Key Regenerated""
        "description": "Your API key has been regenerated. Save it now, you won't be able to see it again."});      ));"
      // Store the new key value,
toast({
        }
        "title": "API Key Regenerated""
        "description": "Your API key has been regenerated. Save it now, you won't be able to see it again."});      return result"
    } catch (err) {
      }
      console && console.error('Error revoking API "key":', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');'
      toast({

      setLoading(false)
    }
=======
      if (!response && response.ok) {'
        throw new Error(result && result.error || 'Failed to create API key')

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
<<<<<<< HEAD
      setNewApiKey(result && result.key);
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      }
      const response = await fetch(`${getApiUrl()}/create`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({
          name;
          scopes
          expiresAt: expiresAt ? expiresAt.toISOString() : null
        })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create API key')
      }
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key);
=======

      }

      toast({

        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});
<<<<<<< HEAD

=======

<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),

      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key),

      toast({
        title: "API Key Created",

        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),
<<<<<<< HEAD

=======
      
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return result
    } catch (err) {
      console && console.error('Error creating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<< HEAD

    try {
<<<<<<< HEAD

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
=======
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
;
  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expires_at?: Date | null) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getApiUrl ()}/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({
          name;
          scopes,
          expires_at: expires_at ? expires_at.toISOString () : null;
        });
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to create API key');
      }
      // Add the new key to the list;
      set_keys (prev => [{ ...result, key: undefined }, ...prev]);
;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey (result.key);
;
      toast ({
        title: "API Key Created",
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});
;
      return result;
    } catch (err) {
      console.error ('Error creating API key:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error creating API key",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
      
      return result
    } catch (err) {
      console.error('Error creating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error creating API key"
        variant: "destructive",
        title: "Error creating API key",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

<<<<<<< HEAD
  }
  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setNewApiKey(null)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
    
<<<<<<< HEAD
        };
        body: JSON && JSON.stringify({ keyId })
      });
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')



    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      }
      const response = await fetch(`${getApiUrl()}/regenerate`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ keyId })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to regenerate API key')
      }

=======


    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
      }
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
        }
        body: JSON.stringify ({}
          name;
          scopes,
          expires_at: expires_at ? expires_at.toISOString () : null;
        });
      });
<<<<<<< HEAD

<<<<<<< HEAD
    } finally {
      }
      set_loading (false);
    }
  }
  const revokeApiKey = $2;
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }
      const response = await fetch(`${getApiUrl()}/revoke`, {
        method: POST'
        headers: {
          'Authorization: `Bearer ${session.access_token}`;
          Content-Type': 'application/json
        }
        body: JSON.stringify({ keyId })
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || Failed to revoke API key')
      }
      // Update the key's active status in the list
      setKeys(prev => prev.map(key => 
        key.id === keyId ? { ...key, is_active: false} : key
      )),
      
      toast($2);
      return result
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
        variant: destructive",
        title: "Error revoking API key,
        description: err instanceof Error ? err.message : An unknown error occurred})
    } finally {
      setLoading(false)
    }
        {

    } finally {
      }
=======
;
      const result = await response.json ();
;
      // Check condition;
if ( {) {}
  $2;
}'
        throw new Error (result.error || 'Failed to create API key');
      }
      // Add the new key to the list;
      set_keys (prev => [{ ...result, key: undefined }, ...prev]);
;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey (result.key);
;
      toast ({"
        title: "API Key Created",'"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});
;
      return result;
    } catch (err) {'
      console.error ('Error creating API key:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error creating API key",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}
      set_loading (false);
    }
  }
'
        description: err instanceof Error ? err.message : 'An unknown error occurred'})

>>>>>>> origin/chore/fix-lint-and-merge
      setLoading(false)
    }

  },
<<<<<<< HEAD
  // Fetch API usage logs,
    }
=======

  // Regenerate API key;
  const regenerateApiKey = async (keyId: string) => {}
>>>>>>> origin/chore/fix-lint-and-merge
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),

<<<<<<< HEAD
    try {
      }
      if (!session) {

=======
      const result = await response && response.json();
>>>>>>> origin/chore/fix-lint-and-merge
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')

      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),;

      return result;
    } catch (err) {;'
      console.error('Error creating API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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
=======
      // Update the key in the list
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...result, key: undefined } : key;
      ));
      // Store the new key value;
      setNewApiKey(result && result.key);
<<<<<<< HEAD
=======
      

<<<<<<< HEAD
      }
      // Update the key in the list
      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...result, key: undefined } : key
      ));
      // Store the new key value
      setNewApiKey(result && result.key);
      // Update the key in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...result, key: undefined } : key
      ));
      // Store the new key value
      setNewApiKey(result.key);
      toast({
        title: "API Key Regenerated"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
=======
      toast({
        title: "API Key Regenerated"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )),
      
      // Store the new key value;
      setNewApiKey(result.key),
      
      toast({"
        title: "API Key Regenerated",'"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      return result
    } catch (err) {
      console && console.error('Error regenerating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

<<<<<<< HEAD
        variant: "destructive";
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: "Error regenerating API key"
        variant: "destructive",
        title: "Error regenerating API key",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

<<<<<<< HEAD
  }
  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
        };
        body: JSON && JSON.stringify({ keyId })
      });
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to revoke API key')



    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      }
      const response = await fetch(`${getApiUrl()}/revoke`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ keyId })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to revoke API key')
      }

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    } catch (err) {'
      console && console.error('Error regenerating API key:', err);'
=======
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

<<<<<<< HEAD
      }
      // Update the key's active status in the list
      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...key, is_active: false } : key
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ));
      toast({
        title: "API Key Revoked"
        description: "The API key has been revoked successfully."});
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )),
      
      toast({
        title: "API Key Revoked",
        description: "The API key has been revoked successfully."}),
      
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return result
    } catch (err) {
      console && console.error('Error revoking API key:', err);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({}
"
        variant: "destructive";"
        title: "Error regenerating API key""
        variant: "destructive","
        title: "Error regenerating API key",

<<<<<<< HEAD
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
        variant: "destructive";

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        description: err instanceof Error ? err.message : 'An unknown error occurred'})

    } finally {

      setLoading(false)
    }

<<<<<<< HEAD
  }
  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return;
    setLoading(true);
    setError(null);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {}
    if (!user) return,
    
    setLoading(true),
    setError(null),
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    try {

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");
<<<<<<< HEAD

      const result = await response && response.json();
      
      if (!response && response.ok) {}
'
        throw new Error(result && result.error || 'Failed to fetch API logs')

      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);

<<<<<<< HEAD
=======
;

      // Update the key's active status in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...key, is_active: false } : key;
      )),;

        description: "The API key has been revoked successfully."}),;
      return result;
    } catch (err) {;'
      console.error('Error revoking API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
>>>>>>> origin/chore/fix-lint-and-merge
      setLoading(false);
    }
  },
  // Fetch API usage logs;
<<<<<<< HEAD

        return;
      }
      const response = await fetch(;

=======
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
        });
      const result = await response.json();
      if (!response.ok) {'
        throw new Error(result.error |'Failed to fetch API logs')
      }

      ));
      toast({"
        title: "API Key Revoked""
        description: "The API key has been revoked successfully."});

      )),
      
      toast({"
        title: "API Key Revoked","
        description: "The API key has been revoked successfully."}),

        variant: "destructive";

;
  // Revoke API key;
  const revokeApiKey = async (key_id: string) => {}
    // Check condition;
if (return) {}
  $2;
}
    set_loading (true);
    set_error (null),
    try {}
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;
if ( {) {}
  $2;
}"
        set_error ("Authentication required");
        return;
      }`
      const response = await fetch (`${getApiUrl ()}/revoke`, {'
        method: 'POST',
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ key_id });
      });
;
      const result = await response.json ();
;
      // Check condition;
if ( {) {}
  $2;
}'
        throw new Error (result.error || 'Failed to revoke API key');
      }'
      // Update the key's active status in the list;
      set_keys (prev => prev.map (key =>;
        key.id === key_id ? { ...key, is_active: false } : key));
;
      toast ({"
        title: "API Key Revoked","
        description: "The API key has been revoked successfully."});
;
      return result;
    } catch (err) {'
      console.error ('Error revoking API key:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error revoking API key",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}
      set_loading (false);
    }
  }

  },

  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {}
    if (!user) return,
    
    setLoading(true),
    setError(null),

      const result = await response && response.json();
      
      if (!response && response.ok) {'
=======
        return
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        throw new Error(result && result.error || 'Failed to fetch API logs')
      }
      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);

<<<<<<< HEAD
=======

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);

<<<<<<< HEAD
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      }
      const response = await fetch(
        `${getApiUrl()}/logs?limit=${limit}&offset=${offset}`
        {
          method: 'GET'
          headers: {
            'Authorization': `Bearer ${session.access_token}`;
            'Content-Type': 'application/json'
          }
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch API logs')
      }
      setLogs(result.logs |[]);
      setTotalLogs(result.count |0);

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
      }

      setLogs(result.logs || []),
      setTotalLogs(result.count || 0),

<<<<<<< HEAD
      toast({    error;
    }
=======
        {
          method: 'GET'
          headers: {

<<<<<<< HEAD
=======
<<<<<<< HEAD
      
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return result
    } catch (err) {
      console && console.error('Error fetching API logs:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
<<<<<<< HEAD

=======
      toast({
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
            'Authorization': `Bearer ${session.access_token}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    loading;
    error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    fetchApiLogs;

<<<<<<< HEAD
  }
<<<<<<< HEAD
}

    } finally {
      }
      setLoading(false)

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

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
      setLoading(false)

;
      setLogs(result.logs || []),;

      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

    } finally {;
      setLoading(false);

=======
<<<<<<< HEAD
    clearNewApiKey: () => setNewApiKey(null)
  }
}
        variant: "destructive",
        title: "Error fetching API logs",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    clearNewApiKey: () => setNewApiKey (null);

  }
}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD

  }
}
=======
<<<<<<< HEAD
    clearNewApiKey: () => setNewApiKey (null);
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

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

=======
}
;
export function useApiKeys() {;
  const { user } = useAuth(),;
  const [keys, setKeys] = useState<ApiKey[]>([]),;
  const [logs, setLogs] = useState<ApiLog[]>([]),;
  const [totalLogs, setTotalLogs] = useState(0),;
  const [loading, setLoading] = useState(false),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}finally {
  setLoading (false) 
}
};
//Regenerate API key const regenerateApiKey = async (keyId: string) => {
  if (!user) return;
setError (null);
setNewApiKey (null);
try {
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}finally {
  setLoading (false) 
}
};
//Revoke API key const revokeApiKey = async (keyId: string) => {
  if (!user) return;
setError (null);
try {
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}finally {
  setLoading (false) 
}
};
//Fetch API usage logs const fetchApiLogs = async (limit = 50, offset = 0) => {
  if (!user) return;
setError (null);
try {
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

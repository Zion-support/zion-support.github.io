
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface ApiKey {
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';

export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
;

export interface ApiKey {};
export interface ApiKey {;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export interface ApiKey {

export interface ApiKey {};
export interface ApiKey {;

export interface ApiKey {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
;

export interface ApiKey {

export interface ApiKey {;

export interface ApiKey {

export interface ApiKey {;

export interface ApiKey {
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  expires_at: string | null
  is_active: boolean
}
export interface ApiLog {
  expires_at: string | null,
  is_active: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  expires_at: string | null,
  is_active: boolean;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

export interface ApiLog {;
<<<<<<< HEAD
=======
}
export interface ApiLog {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

}
export interface ApiLog {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;
ip_address?: string
  response_time_ms?: number
}
export function useApiKeys() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ip_address?: string,
  response_time_ms?: number;
}

export function useApiKeys() {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function useApiKeys() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export function useApiKeys() {
  const { user } = useAuth(),
  const [keys, setKeys] = useState<ApiKey[]>([]),
  const [logs, setLogs] = useState<ApiLog[]>([]),
  const [totalLogs, setTotalLogs] = useState(0),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [newApiKey, setNewApiKey] = useState<string | null>(null),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import && import.meta.env is injected by Vite) and in Node environments
<<<<<<< HEAD
    // such as tests or server side rendering.

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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");
        return;
      }`
      const response = await fetch(`${getApiUrl()}/keys`, {'
        method: 'GET'
        headers: {}
    } catch (err) {'
      console && console.error('Error fetching API keys:', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({"
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
        title: "Error fetching API keys",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

  ip_address?: string,
=======
    // such as tests or server side rendering.  ip_address?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // such as tests or server side rendering.  ip_address?: string,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        title: "Error fetching API keys",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
  ip_address?: string,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  // Helper to get the base URL for API functions;
  const getApiUrl = () =>: any {}
    // Using optional chaining ensures this function works both in the browser;
    // (where import.meta.env is injected by Vite) and in Node environments;
    // such as tests or server side rendering.;
    const env = (import.meta as any)?.env ?? process.env;
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
        }
      });
;
      const result = await response.json ();
;
// Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      setKeys(result.keys || [])
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setKeys(result.keys || [])

    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

        title: "Error fetching API keys",
=======
      setKeys(result.keys || [])

      setKeys(result.keys || [])
    } catch (err) {'
      console.error('Error fetching API keys:', err),'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({}
"
        title: "Error fetching API keys",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}
      set_loading (false);
    }

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

  }

  },

  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {}
    if (!user) return,

    setLoading(true),
    setError(null),
    setNewApiKey(null),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");
return
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        };
        body: JSON && JSON.stringify({}
          name;
=======
        throw new Error (result.error || 'Failed to fetch API keys');      setKeys(result.keys || [])
    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({          name;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        throw new Error (result.error || 'Failed to fetch API keys');      setKeys(result.keys || [])
    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({          name;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      setKeys(result.keys || [])
      setKeys(result.keys || [])
    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

        variant: "destructive",
        title: "Error fetching API keys",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }

  }
  },

  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return,

    setLoading(true),
    setError(null),
    setNewApiKey(null),

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({
          name;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          scopes,
          expiresAt: expiresAt ? expiresAt && expiresAt.toISOString() : null;
        })
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      const result = await response && response.json();

      if (!response && response.ok) {'
        throw new Error(result && result.error || 'Failed to create API key')

}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      const result = await response && response.json();

      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create API key')

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create API key')
      }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

      setNewApiKey(result && result.key);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({
=======
      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});      toast({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once;
      toast({"
        title: "API Key Created"'"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

      toast({"
        title: "API Key Created"'"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
      setKeys(result.keys || []);
    } catch (err) {;'
      console.error('Error fetching API keys:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
toast({;
        variant: "destructive",;
title: "Error fetching API keys",,
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),

      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key),

      toast({
        title: "API Key Created",
=======

      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),

      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),

      toast({"
        title: "API Key Created",'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return result
    } catch (err) {
      console && console.error('Error creating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      return result;
    } catch (err) {'
      console && console.error('Error creating API key:', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({}
      const result = await response && response.json();

      if (!response && response.ok) {'
        throw new Error(result && result.error || 'Failed to regenerate API key')

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

;
      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),;
      toast({;"
        title: "API Key Created",;'"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),;
      return result;
    } catch (err) {;'
      console.error('Error creating API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;"
        variant: "destructive",;"
        title: "Error creating API key",;'
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update the key in the list
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
        }
        body: JSON.stringify ({}
          name;
          scopes,
          expires_at: expires_at ? expires_at.toISOString () : null;
        });
      });
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
} finally {
=======
          } finally {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      setLoading(false)
    }
=======
    } finally {}
      setLoading(false)
    }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },

  // Regenerate API key;
  const regenerateApiKey = async (keyId: string) => {}
    if (!user) return,

    setLoading(true),
    setError(null),
    setNewApiKey(null),

try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({ keyId })
      });

      const result = await response && response.json();

      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')

};
=======

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Add the new key to the list;
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),;
      // Store the actual key value temporarily so it can be displayed once;
      setNewApiKey(result.key),;
toast({;
title: "API Key Created",,
  description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),;
      return result;
    } catch (err) {;'
      console.error('Error creating API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
toast({;
        variant: "destructive",;
title: "Error creating API key",,
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

// Update the key in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...result, key: undefined } : key
        variant: "destructive";
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
;
  // Create new API key;
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expires_at?: Date | null) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
    setNewApiKey (null);
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

        variant: "destructive",
        title: "Error creating API key",

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
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
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({ keyId })
      });

      const result = await response && response.json();

      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')

      }
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

      // Update the key in the list
      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...result, key: undefined } : key;
      ));
      // Store the new key value;
      setNewApiKey(result && result.key);

toast({
        title: "API Key Regenerated"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
      ));
      // Store the new key value
      toast({
        title: "API Key Regenerated"
<<<<<<< HEAD
<<<<<<< HEAD
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )),

      // Store the new key value;
      setNewApiKey(result.key),

      toast({"
        title: "API Key Regenerated",'"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
      )),

      // Store the new key value
      setNewApiKey(result.key),

      toast({
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return result
    } catch (err) {
      console && console.error('Error regenerating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        variant: "destructive";
        title: "Error regenerating API key"
        variant: "destructive",
        title: "Error regenerating API key",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  },

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return,

    setLoading(true),
    setError(null),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<< HEAD
      }
      const response = await fetch(`${getApiUrl()}/revoke`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ keyId })
      });

      const result = await response && response.json();

      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to revoke API key')

      }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
    } catch (err) {'
      console && console.error('Error regenerating API key:', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({}
"
        variant: "destructive";"
        title: "Error regenerating API key""
        variant: "destructive","
        title: "Error regenerating API key",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
        variant: "destructive";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
  // Regenerate API key;
  const regenerateApiKey = async (key_id: string) => {}
    // Check condition;
if (return) {}
  $2;
=======
;
  // Regenerate API key;
  const regenerateApiKey = async (key_id: string) => {
    // Check condition
if (return) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
    set_loading (true);
    set_error (null);
    setNewApiKey (null),
try {}
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;
if ( {) {}
  $2;
}"
        set_error ("Authentication required");
        return;
      }`
      const response = await fetch (`${getApiUrl ()}/regenerate`, {'
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
        throw new Error (result.error || 'Failed to regenerate API key');
      }
      // Update the key in the list;
      set_keys (prev => prev.map (key =>;
        key.id === key_id ? { ...result, key: undefined } : key));
;
      // Store the new key value;
      setNewApiKey (result.key);
;
toast ({"
        title: "API Key Regenerated",'"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
;
      return result;
    } catch (err) {'
      console.error ('Error regenerating API key:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error regenerating API key",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}
      set_loading (false);
    }
  }

variant: "destructive",
        title: "Error regenerating API key",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return result
=======
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});      return result
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});      return result
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      return result
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (err) {
      console && console.error('Error revoking API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        variant: "destructive",
        title: "Error regenerating API key",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        title: "Error revoking API key",

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } finally {
=======
      return result;
    } catch (err) {'
      console && console.error('Error revoking API key:', err);'
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({"
        variant: "destructive",
'
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setLoading(false)
    }
<<<<<<< HEAD
  },

  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {}
    if (!user) return,

    setLoading(true),
    setError(null),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    try {
=======
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");
return

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      const result = await response && response.json();

      if (!response && response.ok) {}
'
        throw new Error(result && result.error || 'Failed to fetch API logs')
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      setLogs(result.logs || []);
<<<<<<< HEAD
      setTotalLogs(result.count || 0);
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
;
=======

;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Update the key's active status in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...key, is_active: false } : key;
      )),;
toast({;"
        title: "API Key Revoked",;"
        description: "The API key has been revoked successfully."}),;
      return result;
    } catch (err) {;'
      console.error('Error revoking API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
toast({;"
        variant: "destructive",;"
        title: "Error revoking API key",;'
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
      );
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

=======

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);      
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        variant: "destructive";
=======
      "
        variant: "destructive";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
{
          method: 'GET'
          headers: {        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  },

  // Fetch API usage logs;
  const fetchApiLogs = async (limit = 50, offset = 0) => {}
    if (!user) return,

    setLoading(true),
    setError(null),

try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
      const result = await response && response.json();

      if (!response && response.ok) {'
        throw new Error(result && result.error || 'Failed to fetch API logs')
      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);

      // Update the key's active status in the list;
      setKeys(prev => prev.map(key =>;
        key.id === keyId ? { ...key, is_active: false } : key;
      )),;
toast({;
        title: "API Key Revoked",,
  description: "The API key has been revoked successfully."}),;
      return result;
    } catch (err) {;'
      console.error('Error revoking API key:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
toast({;
        variant: "destructive",;
        title: "Error revoking API key",,
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
      }

      setLogs(result.logs || []),
      setTotalLogs(result.count || 0),

{
          method: 'GET'
          headers: {
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return result
    } catch (err) {
      console && console.error('Error fetching API logs:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
<<<<<<< HEAD
      toast({
<<<<<<< HEAD

    } finally {
      setLoading(false)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            'Authorization': `Bearer ${session.access_token}`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            'Content - Type': 'application / json';
          }
        }
      );
;
      const result = await response.json ();
;
// Check condition;
if ( {) {}
  $2;
}'
        throw new Error (result.error || 'Failed to fetch API logs');
      }
      set_logs (result.logs || []);
      setTotalLogs (result.count || 0);
;
      return result;
} catch (err) {'
      console.error ('Error fetching API logs:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error fetching API logs",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});

    } finally {}
      set_loading (false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }

  return {}
    keys;
    logs;
    total_logs;
"
        variant: "destructive";"
        title: "Error fetching API logs"'
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
    }
  }
  return {}
    keys;
    logs;

    loading;
    error;
=======
      toast({    error;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
        variant: "destructive";
        title: "Error fetching API logs"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
    }
  }
  return {
    keys;
    logs;
    totalLogs;
    total_logs;
    loading;
    error;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    fetchApiLogs;

<<<<<<< HEAD
<<<<<<< HEAD
    clearNewApiKey: () => setNewApiKey(null)
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
}"
        variant: "destructive","
        title: "Error fetching API logs",'
=======
  }
}
        variant: \"destructive\",
        title: \"Error fetching API logs\",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
      setLoading(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
      setLogs(result.logs || []),;
setTotalLogs(result.count || 0),;
      return result;
    } catch (err) {;'
      console.error('Error fetching API logs:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
toast({;
variant: "destructive",;
<<<<<<< HEAD
        title: "Error fetching API logs",,
  description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
=======
        variant: \"destructive\",;}
        title: \"Error fetching API logs\",,}
  description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;}
      setLoading(false);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    clearNewApiKey: () => setNewApiKey (null);

  }
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
  }
}
;
}
    fetchApiLogs;}
    clearNewApiKey: () => setNewApiKey(null);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

</string>`;
pr-12325
</string>
  const [keys, setKeys] = useState<ApiKey[]>([]),;
</ApiKey>
  const [logs, setLogs] = useState<ApiLog[]>([]),;
</ApiLog>
  const [error, setError] = useState<string | null>(null),;
</string>
  const [newApiKey, setNewApiKey] = useState<string | null>(null),;
</string>'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
export interface ApiKey {
=======


export interface ApiKey {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export interface ApiKey {
=======

export interface ApiKey {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
<<<<<<< HEAD

=======

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
  expires_at: string | null,
  is_active: boolean;
}


export interface ApiLog {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  expires_at: string | null
  is_active: boolean
}
export interface ApiLog {
=======
  expires_at: string | null,
  is_active: boolean
}

export interface ApiLog {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
  ip_address?: string
  response_time_ms?: number
}
export function useApiKeys() {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ip_address?: string,
  response_time_ms?: number
}

export function useApiKeys() {;
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { user } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import && import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
<<<<<<< HEAD

=======

    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;

========
    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
<<<<<<< HEAD
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL |env.SUPABASE_URL;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return `${url}/functions/v1/api-key-manager`
  }
  // Fetch user's API keys
  const fetchApiKeys = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const env = (import.meta as any)?.env ?? process.env,
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,
    return `${url}/functions/v1/api-key-manager`
  },

  // Fetch user's API keys
  const fetchApiKeys = async () => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

<<<<<<< HEAD
=======

========
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      const response = await fetch(`${getApiUrl()}/keys`, {
        method: 'GET'
        headers: {
<<<<<<< HEAD
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
        }
      });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch API keys')
      }
      setKeys(result && result.keys || [])
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
    } catch (err) {
      console && console.error('Error fetching API keys:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts





=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
        title: "Error fetching API keys",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
  ip_address?: string,
  response_time_ms?: number;
}
export /**
 * useApiKeys - Function description
 */
function useApiKeys() {
  const { user } = use_auth ();
  const [keys, set_keys] = useState < ApiKey[]>([]);
  const [logs, set_logs] = useState < ApiLog[]>([]);
  const [total_logs, setTotalLogs] = useState (0);
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [newApiKey, setNewApiKey] = useState < string | null>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
  // Helper to get the base URL for API functions;
  const getApiUrl = () =>: any {
    // Using optional chaining ensures this function works both in the browser;
    // (where import.meta.env is injected by Vite) and in Node environments;
    // such as tests or server side rendering.;
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    return `${url}/functions / v1 / api - key - manager`;
  }
;
  // Fetch user's API keys;
  const fetchApiKeys = async () => {
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
      const response = await fetch (`${getApiUrl ()}/keys`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
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
        throw new Error (result.error || 'Failed to fetch API keys');
=======
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch API keys')
      }
<<<<<<< HEAD
      setKeys(result.keys |[])
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      setKeys(result.keys || [])

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      setKeys(result.keys || [])
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD

<<<<<<< HEAD
=======
        variant: "destructive",
        title: "Error fetching API keys",
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } finally {
      set_loading (false);
    }
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
        variant: "destructive";
        title: "Error fetching API keys"
=======
        variant: "destructive",
        title: "Error fetching API keys",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD
  }
  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setNewApiKey(null);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
    
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<< HEAD

=======

========
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
        };
        body: JSON && JSON.stringify({
          name;
          scopes,
          expiresAt: expiresAt ? expiresAt && expiresAt.toISOString() : null
        })
      });
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create API key')
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
      }
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

      setNewApiKey(result && result.key);
      

========
      setNewApiKey(result && result.key);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
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
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create API key')
      }
<<<<<<< HEAD
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});
=======

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),
      
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key),
      
      toast({
        title: "API Key Created",
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return result
    } catch (err) {
      console && console.error('Error creating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

<<<<<<< HEAD
=======
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
========
        variant: "destructive";
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts


        variant: "destructive",
        title: "Error creating API key",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return result
    } catch (err) {
      console.error('Error creating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Error creating API key"
=======
        variant: "destructive",
        title: "Error creating API key",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

=======

=======
  }
  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setNewApiKey(null)
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
    
<<<<<<< HEAD


    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
        };
        body: JSON && JSON.stringify({ keyId })
      });
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

      }
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
      // Update the key in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...result, key: undefined } : key

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Update the key in the list

      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...result, key: undefined } : key

      ));
      // Store the new key value

      setNewApiKey(result && result.key);
      

========
      }
      // Update the key in the list
      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...result, key: undefined } : key
      ));
      // Store the new key value
      setNewApiKey(result && result.key);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Update the key in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...result, key: undefined } : key
<<<<<<< HEAD
      ));
      // Store the new key value
      setNewApiKey(result.key);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "API Key Regenerated"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )),
      
      // Store the new key value
      setNewApiKey(result.key),
      
      toast({
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return result
    } catch (err) {
      console && console.error('Error regenerating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

<<<<<<< HEAD
=======
        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
========
        variant: "destructive";
        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts


        variant: "destructive",
        title: "Error regenerating API key",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return result
    } catch (err) {
      console.error('Error regenerating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Error regenerating API key"
=======
        variant: "destructive",
        title: "Error regenerating API key",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

=======

=======
  }
  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null)
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
<<<<<<< HEAD


    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
        };
        body: JSON && JSON.stringify({ keyId })
      });
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to revoke API key')
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

      }
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
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
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to revoke API key')
      }
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Update the key's active status in the list

      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...key, is_active: false } : key

========
      }
      // Update the key's active status in the list
      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...key, is_active: false } : key
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      ));
      toast({
        title: "API Key Revoked"
        description: "The API key has been revoked successfully."});
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )),
      
      toast({
        title: "API Key Revoked",
        description: "The API key has been revoked successfully."}),
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return result
    } catch (err) {
      console && console.error('Error revoking API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

<<<<<<< HEAD
=======
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
========
        variant: "destructive";
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
;
  // Revoke API key;
  const revokeApiKey = async (key_id: string) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null),
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getApiUrl ()}/revoke`, {
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
        throw new Error (result.error || 'Failed to revoke API key');
      }
      // Update the key's active status in the list;
      set_keys (prev => prev.map (key =>;
        key.id === key_id ? { ...key, is_active: false } : key));
;
      toast ({
        title: "API Key Revoked",
        description: "The API key has been revoked successfully."});
;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts


        variant: "destructive",
        title: "Error revoking API key",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return result
    } catch (err) {
      console.error('Error revoking API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Error revoking API key"
=======
        variant: "destructive",
        title: "Error revoking API key",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
  }
  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return;
    setLoading(true);
    setError(null);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

        {
          method: 'GET'
          headers: {


========
        {
          method: 'GET'
          headers: {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch API logs')
      }
      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======


      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
<<<<<<< HEAD
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
<<<<<<< HEAD
      setLogs(result.logs |[]);
      setTotalLogs(result.count |0);
=======

      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      setLogs(result.logs || []),
      setTotalLogs(result.count || 0),
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
      return result
    } catch (err) {
      console && console.error('Error fetching API logs:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

<<<<<<< HEAD
=======
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
========
        variant: "destructive";
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
            'Authorization': `Bearer ${session.access_token}`;
            'Content - Type': 'application / json';
          }
        }
      );
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

;

========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
  return {
    keys;
    logs;
    total_logs;
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return result
    } catch (err) {
      console.error('Error fetching API logs:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Error fetching API logs"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
  return {
    keys;
    logs;
    totalLogs;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    loading;
    error;
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    fetchApiLogs;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts

<<<<<<< HEAD
    clearNewApiKey: () => setNewApiKey(null)

=======

    clearNewApiKey: () => setNewApiKey(null)
<<<<<<< HEAD
  }
}
=======
        variant: "destructive",
        title: "Error fetching API logs",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    clearNewApiKey: () => setNewApiKey (null);

  }
}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  }
}
;
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    clearNewApiKey: () => setNewApiKey (null);
  }
=======

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
;
export function useApiKeys() {;
  const { user } = useAuth(),;
  const [keys, setKeys] = useState<ApiKey[]>([]),;
  const [logs, setLogs] = useState<ApiLog[]>([]),;
  const [totalLogs, setTotalLogs] = useState(0),;
  const [loading, setLoading] = useState(false),;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useApiKeys.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

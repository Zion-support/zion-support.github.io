


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
<<<<<<< HEAD
export interface ApiKey {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export type ApiKeyScope = 'jobs: read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ApiKey {


export interface ApiKey {;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ApiKey {



export interface ApiKey {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export interface ApiKey {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  name: string;
  key_prefix: string;
  scopes: ApiKeyScope[];
  created_at: string;
  last_used_at: string | null;
<<<<<<< HEAD
  expires_at: string | null
  is_active: boolean
}
export interface ApiLog {
  expires_at: string | null,
  is_active: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  expires_at: string | null,
  is_active: boolean;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}


export interface ApiLog {;
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  expires_at: string | null
  is_active: boolean
}
export interface ApiLog {
  expires_at: string | null,
  is_active: boolean
}

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export interface ApiLog {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface ApiLog {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  endpoint: string;
  method: string;
  status_code: number;
  created_at: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ip_address?: string
  response_time_ms?: number
}
export function useApiKeys() {
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ip_address?: string,
  response_time_ms?: number
}

export function useApiKeys() {;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState<string | null>(null);
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import && import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
<<<<<<< HEAD

    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;

<<<<<<< HEAD
=======
    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;

  // Helper to get the base URL for API functions
  const getApiUrl = () => {
    // Using optional chaining ensures this function works both in the browser
    // (where import.meta.env is injected by Vite) and in Node environments
    // such as tests or server side rendering.
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL |env.SUPABASE_URL;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return `${url}/functions/v1/api-key-manager`
  }
  // Fetch user's API keys
  const fetchApiKeys = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
      setKeys(result.keys |[])


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<< HEAD


      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch API keys')
      }

      setKeys(result && result.keys || [])

=======
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      const response = await fetch(`${getApiUrl()}/keys`, {
        method: 'GET'
        headers: {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (err) {
      console && console.error('Error fetching API keys:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD





<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Error fetching API keys",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch API keys')
      }
      setKeys(result.keys |[])

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
=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD




=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setKeys(result.keys || [])
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setKeys(result.keys || [])

    } catch (err) {
      console.error('Error fetching API keys:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

        variant: "destructive",
=======
      set_keys (result.keys || []);
    } catch (err) {
      console.error ('Error fetching API keys:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title: "Error fetching API keys",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
<<<<<<< HEAD


=======
        variant: "destructive",
        title: "Error fetching API keys",


        variant: "destructive";
        title: "Error fetching API keys"
        variant: "destructive",
        title: "Error fetching API keys",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD

=======
  }
  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setNewApiKey(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },

  // Create new API key
  const createApiKey = async (name: string, scopes: ApiKeyScope[], expiresAt?: Date | null) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setNewApiKey(null),
    
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        };
        body: JSON && JSON.stringify({
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          name;
          scopes,
          expiresAt: expiresAt ? expiresAt && expiresAt.toISOString() : null
        })
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create API key')

<<<<<<< HEAD
      }
=======
=======
<<<<<<< HEAD
=======
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create API key')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
<<<<<<< HEAD
<<<<<<< HEAD

      setNewApiKey(result && result.key);
      

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create API key')
      }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]);
      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});

<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      toast({
        title: "API Key Created"
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Add the new key to the list
      setKeys(prev => [{ ...result, key: undefined }, ...prev]),

      // Store the actual key value temporarily so it can be displayed once
      setNewApiKey(result.key),

      toast({
        title: "API Key Created",
        description: "Your new API key has been generated. Save it now, you won't be able to see it again."}),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return result
    } catch (err) {
      console && console.error('Error creating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<< HEAD

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')

<<<<<<< HEAD
      }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
=======
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
=======
      }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update the key in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...result, key: undefined } : key
        variant: "destructive";
<<<<<<< HEAD
        title: "Error creating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


        variant: "destructive",
        title: "Error creating API key",

=======
      
      return result
    } catch (err) {
      console.error('Error creating API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error creating API key"
        variant: "destructive",
        title: "Error creating API key",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

<<<<<<< HEAD
=======
  }
  // Regenerate API key
  const regenerateApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setNewApiKey(null)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

        };
        body: JSON && JSON.stringify({ keyId })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to regenerate API key')

      }
=======



=======
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
        key && key.id === keyId ? { ...result, key: undefined } : key

      ));
      // Store the new key value

      setNewApiKey(result && result.key);
      

<<<<<<< HEAD
      toast({
        title: "API Key Regenerated"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
=======

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      ));
      // Store the new key value
      toast({
        title: "API Key Regenerated"
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )),
      
      // Store the new key value
      setNewApiKey(result.key),
      
      toast({
        title: "API Key Regenerated",
        description: "Your API key has been regenerated. Save it now, you won't be able to see it again."}),
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return result
    } catch (err) {
      console && console.error('Error regenerating API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<< HEAD

        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
=======
        title: "Error regenerating API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        variant: "destructive";
        title: "Error regenerating API key"
        variant: "destructive",
        title: "Error regenerating API key",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to revoke API key')

      }

<<<<<<< HEAD
=======


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update the key's active status in the list
      setKeys(prev => prev.map(key =>
        key.id === keyId ? { ...key, is_active: false } : key
        variant: "destructive";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


        variant: "destructive",
        title: "Error regenerating API key",

=======
=======
      }
      // Update the key's active status in the list
      ));
      toast({
        title: "API Key Revoked"
        description: "The API key has been revoked successfully."});
<<<<<<< HEAD
      )),
      
      toast({
        title: "API Key Revoked",
        description: "The API key has been revoked successfully."}),
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        variant: "destructive";
        title: "Error revoking API key"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return result
    } catch (err) {
      console && console.error('Error revoking API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        variant: "destructive",
<<<<<<< HEAD
        title: "Error regenerating API key",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        title: "Error revoking API key",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD

=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  // Revoke API key
  const revokeApiKey = async (keyId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },

  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

<<<<<<< HEAD
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        {
          method: 'GET'
          headers: {


      const result = await response && response.json();
      
      if (!response && response.ok) {
<<<<<<< HEAD
        throw new Error(result && result.error || 'Failed to revoke API key')

      }
=======



=======
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        throw new Error(result && result.error || 'Failed to fetch API logs')
      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch API logs')
      }

<<<<<<< HEAD


      // Update the key's active status in the list

      setKeys(prev => prev && prev.map(key => 
        key && key.id === keyId ? { ...key, is_active: false } : key

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ));
      toast({
        title: "API Key Revoked"
        description: "The API key has been revoked successfully."});
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      )),
      
      toast({
        title: "API Key Revoked",
        description: "The API key has been revoked successfully."}),
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return result
    } catch (err) {
      console && console.error('Error revoking API key:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
=======
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error revoking API key",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      
        variant: "destructive";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


        variant: "destructive",
        title: "Error revoking API key",

=======
      return result
    } catch (err) {
      console.error('Error revoking API key:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error revoking API key"
        variant: "destructive",
        title: "Error revoking API key",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

<<<<<<< HEAD
=======
  }
  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return;
    setLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

  // Fetch API usage logs
  const fetchApiLogs = async (limit = 50, offset = 0) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    

<<<<<<< HEAD

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

        {
          method: 'GET'
          headers: {


=======
        {
          method: 'GET'
          headers: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch API logs')
      }

      setLogs(result && result.logs || []);
      setTotalLogs(result && result.count || 0);
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      setLogs(result.logs || []);
      setTotalLogs(result.count || 0);

<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        {
          method: 'GET'
          headers: {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return result
    } catch (err) {
      console && console.error('Error fetching API logs:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<< HEAD

    } finally {
      setLoading(false)
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======
=======
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error fetching API logs",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      set_loading (false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }
<<<<<<< HEAD

;

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant: "destructive";
        title: "Error fetching API logs"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
    }
  }
  return {
    keys;
    logs;
<<<<<<< HEAD
    totalLogs;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    total_logs;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    loading;
    error;
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
<<<<<<< HEAD
=======
    clearNewApiKey: () => setNewApiKey(null)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
        variant: "destructive",
        title: "Error fetching API logs",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    clearNewApiKey: () => setNewApiKey (null);

  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


  }
}
;
    clearNewApiKey: () => setNewApiKey (null);
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
}
  }
}
;
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

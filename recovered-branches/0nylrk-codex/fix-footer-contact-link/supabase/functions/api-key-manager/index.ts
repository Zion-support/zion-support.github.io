

interface CreateKeyRequest {
  name: string,
  scopes: string[],
  expiresAt?: string | null

import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',;
interface CreateKeyRequest {;
  name: string,;
  scopes: string[],;
  expiresAt?: string | null;

}
;
interface RegenerateKeyRequest {;
  keyId: string;
}

  expiresAt?: string | null
}
interface RegenerateKeyRequest {
  keyId: string
}
// Create a Supabase client

serve(async (req) => {
  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

    }
    if (!keyIds |keyIds.length === 0) {
      return new Response(JSON.stringify({ logs: [], count: 0 }), {
        status: 200
        headers: { 'Content-Type': 'application/json' }})
    }

    // Get logs for those keys
    const ids = keyIds.map(k => k.id);
    const { data: logs, error: logsError, count } = await supabase
      .from('api_logs')
      .select('*', { count: 'exact' })
      .in('api_key_id', ids)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);
    if (logsError) {
      console.error('Error fetching API logs:', logsError);
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({ logs, count }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in getApiLogs:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500

      headers: { 'Content-Type': 'application/json' }})

  }
}
;

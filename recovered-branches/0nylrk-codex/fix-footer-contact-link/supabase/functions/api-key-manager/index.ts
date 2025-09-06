
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
interface CreateKeyRequest {
  name: string,
  scopes: string[],
  expiresAt?: string | null
}

interface RegenerateKeyRequest {
  keyId: string}

// Create a Supabase client
const supabaseUrl = $2;
const supabaseKey = $2;
const supabase = createClient($2);
serve(async (req) => {
  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
  }

  try {
    // Extract auth token from request
    const authHeader = req.headers.get($2);
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Verify the token with Supabase auth
    const token = authHeader.replace($2);
    const { data: { user }, error: authError} = await supabase.auth.getUser($2);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Parse URL to determine action
    const url = new URL($2);
    const path = url.pathname.split('/').pop($2);
    // Handle different actions
    if (req.method === 'POST') {
      if (path === 'create') {
        const { name, scopes, expiresAt } = await req.json() as CreateKeyRequest,
        return await createApiKey(user.id, name, scopes, expiresAt)
      } else if (path = $2;
        return await regenerateApiKey(user.id, keyId)
      } else if (path = $2;
        return await revokeApiKey(user.id, keyId)
      }
    } else if (req.method = $2;
        const offset = $2;
        return await getApiLogs(user.id, limit, offset)
      }
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}),

async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  try {
    // Generate prefix from name (first 4 chars of name + 4 random chars)
    const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring($2);
    const randomChars = Math.random().toString(36).substring($2);
    const prefix = `${namePrefix}${randomChars}`.substring($2);
    // Use database function to generate API key
    const { data: keyData, error: keyGenError} = await supabase.rpc($2);
    if (keyGenError || !keyData) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to generate API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Store the key in the database (hash it first)
    const { data: hashData, error: hashError} = await supabase.rpc($2);
    if (hashError || !hashData) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to process API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Insert the API key record
    const { data: insertData, error: insertError} = await supabase
      .from('api_keys')
      .insert({
        user_id: userId,
        key_prefix: prefix,
        key_hash: hashData,
        name: name,
        scopes: scopes,
        expires_at: expiresAt})
      .select($2);
    if (insertError || !insertData) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to save API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Return the created key (only shown once)
    return new Response(JSON.stringify({
      ...insertData[0],
      key: keyData, // Include the full key (only shown once)
      message: 'API key created successfully. Save this key as it won\'t be shown again.'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}

async function getUserApiKeys(userId: string) {
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active')
      .eq('user_id', userId)
      .order($2);
    if (error) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to fetch API keys' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({ keys: data}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}

async function regenerateApiKey(userId: string, keyId: string) {
  try {
    // First, verify that the key belongs to the user
    const { data: keyData, error: keyError} = await supabase
      .from('api_keys')
      .select('name, key_prefix, scopes, expires_at')
      .eq('id', keyId)
      .eq('user_id', userId)
      .single($2);
    if (keyError || !keyData) {
      return new Response(JSON.stringify({ error: 'API key not found or access denied' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Generate a new API key
    const { data: newKeyData, error: keyGenError} = await supabase.rpc($2);
    if (keyGenError || !newKeyData) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to generate new API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Hash the new key
    const { data: hashData, error: hashError} = await supabase.rpc($2);
    if (hashError || !hashData) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to process new API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Update the key record with new hash
    const { data: updateData, error: updateError} = await supabase
      .from('api_keys')
      .update({
        key_hash: hashData,
        updated_at: new Date().toISOString()})
      .eq('id', keyId)
      .eq('user_id', userId)
      .select($2);
    if (updateError || !updateData) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to update API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Return the regenerated key
    return new Response(JSON.stringify({
      ...updateData[0],
      key: newKeyData, // Include the full key (only shown once)
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}

async function revokeApiKey(userId: string, keyId: string) {
  try {
    const { data, error } = await supabase
      .from('api_keys')
      .update({ is_active: false})
      .eq('id', keyId)
      .eq('user_id', userId)
      .select($2);
    if (error || !data || data.length === 0) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to revoke API key or key not found' }), {
        status: error ? 500 : 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({
      message: 'API key revoked successfully',
      key: data[0]
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}

async function getApiLogs(userId: string, limit = 50, offset = 0) {
  try {
    // Get the user's API key IDs
    const { data: keyIds, error: keyError} = await supabase
      .from('api_keys')
      .select('id')
      .eq($2);
    if (keyError) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    if (!keyIds || keyIds.length === 0) {
      return new Response(JSON.stringify({ logs: [], count: 0}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Get logs for those keys
    const ids = keyIds.map($2);
    const { data: logs, error: logsError, count } = await supabase
      .from('api_logs')
      .select('*', { count: 'exact' })
      .in('api_key_id', ids)
      .order('created_at', { ascending: false})
      .range($2);
    if (logsError) {
      console.error($2);
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({ logs, count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}

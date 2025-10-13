import { serve } from "https://deno.land/std@0.177.0/http/server.ts";";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';'
interface CreateKeyRequest {
  // TODO: Add properties
}
  // TODO: Add properties
}
  name: string
  scopes: string[]
  expiresAt?: string | null
}
interface RegenerateKeyRequest {
  // TODO: Add properties
}
  // TODO: Add properties
}
  keyId: string
}
// Create a Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;";
const supabase = createClient(supabaseUrl, supabaseKey)
serve(async (req) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {'
    return new Response('ok', {'
      headers: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        'Access-Control-Allow-Origin': '*','
        'Access-Control-Allow-Methods': 'POST, OPTIONS','
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})'
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type','
      },
    })
  }
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Extract auth token from request;
const authHeader = req.headers.get('Authorization')'
    if (!authHeader) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {'
        status: 401,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Verify the token with Supabase auth;
const token = authHeader.replace('Bearer ', ');'';
const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    if (authError || !user) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {'
        status: 401,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Parse URL to determine action;
const url = new URL(req.url);
const path = url.pathname.split('/').pop()'
    // Handle different actions
    if (req.method === 'POST') {'
      if (path === 'create') {;';
const { name, scopes, expiresAt } = await req.json() as CreateKeyRequest
        return await createApiKey(user.id, name, scopes, expiresAt)
      } else if (path === 'regenerate') {;';
const { keyId } = await req.json() as RegenerateKeyRequest
        return await regenerateApiKey(user.id, keyId)
      } else if (path === 'revoke') {;';
const { keyId } = await req.json() as RegenerateKeyRequest
        return await revokeApiKey(user.id, keyId)
      }
    } else if (req.method === 'GET') {'
      if (path === 'keys') {'
        return await getUserApiKeys(user.id)
      } else if (path === 'logs') {;';
const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 50;';
const offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) : 0'
        return await getApiLogs(user.id, limit, offset)
      }
    }
    return new Response(JSON.stringify({ error: 'Invalid action' }), {'
      status: 400,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error processing request:', error)'
    return new Response(JSON.stringify({ error: 'Internal server error' }), {'
      status: 500,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  }
})
async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Generate prefix from name (first 4 chars of name + 4 random chars);
const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 4);';
const randomChars = Math.random().toString(36).substring(2, 6);
const prefix = `${namePrefix}${randomChars}`.substring(0, 8)
    // Use database function to generate API key;
const { data: keyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix })'
    if (keyGenError || !keyData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error generating API key:', keyGenError)'
      return new Response(JSON.stringify({ error: 'Failed to generate API key' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Store the key in the database (hash it first);
const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: keyData })'
    if (hashError || !hashData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error hashing API key:', hashError)'
      return new Response(JSON.stringify({ error: 'Failed to process API key' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Insert the API key record;
const { data: insertData, error: insertError } = await supabase
      .from('api_keys')'
      .insert({
  // TODO: Add properties
}
  // TODO: Add properties
}
        user_id: userId,
        key_prefix: prefix,
        key_hash: hashData,
        name: name,
        scopes: scopes,
        expires_at: expiresAt})
        expires_at: expiresAt,
      })
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active')'
    if (insertError || !insertData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error inserting API key:', insertError)'
      return new Response(JSON.stringify({ error: 'Failed to save API key' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Return the created key (only shown once)
    return new Response(JSON.stringify({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ...insertData[0],
      key: keyData, // Include the full key (only shown once)
      message: 'API key created successfully. Save this key as it won\'t be shown again.''
    }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      status: 201,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error in createApiKey:', error)'
    return new Response(JSON.stringify({ error: 'Internal server error' }), {'
      status: 500,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  }
}
async function getUserApiKeys(userId: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const { data, error } = await supabase
      .from('api_keys')'
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active')'
      .eq('user_id', userId)'
      .order('created_at', { ascending: false })'
    if (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error fetching API keys:', error)'
      return new Response(JSON.stringify({ error: 'Failed to fetch API keys' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    return new Response(JSON.stringify({ keys: data }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      status: 200,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error in getUserApiKeys:', error)'
    return new Response(JSON.stringify({ error: 'Internal server error' }), {'
      status: 500,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  }
}
async function regenerateApiKey(userId: string, keyId: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // First, verify that the key belongs to the user;
const { data: keyData, error: keyError } = await supabase
      .from('api_keys')'
      .select('name, key_prefix, scopes, expires_at')'
      .eq('id', keyId)'
      .eq('user_id', userId)'
      .single()
    if (keyError || !keyData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return new Response(JSON.stringify({ error: 'API key not found or access denied' }), {'
        status: 404,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Generate a new API key;
const { data: newKeyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix: keyData.key_prefix })'
    if (keyGenError || !newKeyData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error generating new API key:', keyGenError)'
      return new Response(JSON.stringify({ error: 'Failed to generate new API key' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Hash the new key;
const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: newKeyData })'
    if (hashError || !hashData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error hashing new API key:', hashError)'
      return new Response(JSON.stringify({ error: 'Failed to process new API key' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Update the key record with new hash;
const { data: updateData, error: updateError } = await supabase
      .from('api_keys')'
      .update({
  // TODO: Add properties
}
  // TODO: Add properties
}
        key_hash: hashData,
        updated_at: new Date().toISOString()})
        updated_at: new Date().toISOString(),
      })
      .eq('id', keyId)'
      .eq('user_id', userId)'
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active')'
    if (updateError || !updateData) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error updating API key:', updateError)'
      return new Response(JSON.stringify({ error: 'Failed to update API key' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Return the regenerated key
    return new Response(JSON.stringify({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ...updateData[0],
      key: newKeyData, // Include the full key (only shown once)
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.''
    }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      status: 200,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error in regenerateApiKey:', error)'
    return new Response(JSON.stringify({ error: 'Internal server error' }), {'
      status: 500,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  }
}
async function revokeApiKey(userId: string, keyId: string) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const { data, error } = await supabase
      .from('api_keys')'
      .update({ is_active: false })
      .eq('id', keyId)'
      .eq('user_id', userId)'
      .select('id, name, is_active')'
    if (error || !data || data.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error revoking API key:', error)'
      return new Response(JSON.stringify({ error: 'Failed to revoke API key or key not found' }), {'
        status: error ? 500 : 404,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    return new Response(JSON.stringify({
  // TODO: Add properties
}
  // TODO: Add properties
}
      message: 'API key revoked successfully','
      key: data[0]
    }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      status: 200,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error in revokeApiKey:', error)'
    return new Response(JSON.stringify({ error: 'Internal server error' }), {'
      status: 500,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  }
}
async function getApiLogs(userId: string, limit = 50, offset = 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Get the user's API key IDs;';
const { data: keyIds, error: keyError } = await supabase
      .from('api_keys')'
      .select('id')'
      .eq('user_id', userId)'
    if (keyError) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error fetching API keys for logs:', keyError)'
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    if (!keyIds || keyIds.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return new Response(JSON.stringify({ logs: [], count: 0 }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
        status: 200,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    // Get logs for those keys;
const ids = keyIds.map(k => k.id);
const { data: logs, error: logsError, count } = await supabase
      .from('api_logs')'
      .select('*', { count: 'exact' })'
      .in('api_key_id', ids)'
      .order('created_at', { ascending: false })'
      .range(offset, offset + limit - 1)
    if (logsError) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error('Error fetching API logs:', logsError)'
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {'
        status: 500,
        headers: { 'Content-Type': 'application/json' }})'
        headers: { 'Content-Type': 'application/json' },'
      })
    }
    return new Response(JSON.stringify({ logs, count }), {
  // TODO: Add properties
}
  // TODO: Add properties
}
      status: 200,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error in getApiLogs:', error)'
    return new Response(JSON.stringify({ error: 'Internal server error' }), {'
      status: 500,
      headers: { 'Content-Type': 'application/json' }})'
      headers: { 'Content-Type': 'application/json' },'
    })
  }
}

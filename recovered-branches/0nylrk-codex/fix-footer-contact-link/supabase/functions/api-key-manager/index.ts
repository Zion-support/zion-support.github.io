
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
=======
import { serve } from &quot;https://deno.land/std@0.177.0/http/server.ts&quot;;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CreateKeyRequest {
  name: string,
  scopes: string[],
  expiresAt?: string | null
}

interface RegenerateKeyRequest {
  keyId: string
}

// Create a Supabase client
<<<<<<< HEAD
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, supabaseKey),
=======
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) as string;
const supabaseKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) as string;
const supabase = createClient(supabaseUrl, supabaseKey);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

interface CreateKeyRequest {_name: string;
  scopes: string[];
  expiresAt?: string | null;}

interface RegenerateKeyRequest {_keyId: string;}

// Create a Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const _supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const _supabase = createClient(supabaseUrl, supabaseKey);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', _{
      headers: {
<<<<<<< HEAD
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
  }

  try {
    // Extract auth token from request
    const authHeader = req.headers.get('Authorization'),
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Verify the token with Supabase auth
    const token = authHeader.replace('Bearer ', ''),
    const { data: { user }, error: authError } = await supabase.auth.getUser(token),
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Parse URL to determine action
    const url = new URL(req.url),
    const path = url.pathname.split('/').pop(),

    // Handle different actions
    if (req.method === 'POST') {
      if (path === 'create') {
        const { name, scopes, expiresAt } = await req.json() as CreateKeyRequest,
        return await createApiKey(user.id, name, scopes, expiresAt)
      } else if (path === 'regenerate') {
        const { keyId } = await req.json() as RegenerateKeyRequest,
        return await regenerateApiKey(user.id, keyId)
      } else if (path === 'revoke') {
        const { keyId } = await req.json() as RegenerateKeyRequest,
        return await revokeApiKey(user.id, keyId)
      }
    } else if (req.method === 'GET') {
      if (path === 'keys') {
        return await getUserApiKeys(user.id)
      } else if (path === 'logs') {
        const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 50,
        const offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) : 0,
        return await getApiLogs(user.id, limit, offset)
      }
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error processing request:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
        'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Methods': 'POST, _OPTIONS', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'}});
  }

  try {_// Extract auth token from request
    const _authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization header'}), {_status: 401, _headers: { 'Content-Type': 'application/json'}});
    }

    // Verify the token with Supabase auth
    const _token = authHeader.replace('Bearer ', '');
    const {_data: { user}, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {_return new Response(JSON.stringify({ error: 'Unauthorized'}), {_status: 401, _headers: { 'Content-Type': 'application/json'}});
    }

    // Parse window.URL to determine action
    const _url = new window.URL(req.url);
    const _path = url.pathname.split('/').pop();

    // Handle different actions
    if (req.method === 'POST') {_if (path === 'create') {
        const { name, _scopes, _expiresAt} = await req.json() as CreateKeyRequest;
        return await createApiKey(user.id, name, scopes, expiresAt);
      } else if (path === 'regenerate') {_const { keyId} = await req.json() as RegenerateKeyRequest;
        return await regenerateApiKey(user.id, keyId);
      } else if (path === 'revoke') {_const { keyId} = await req.json() as RegenerateKeyRequest;
        return await revokeApiKey(user.id, keyId);
      }
    } else if (req.method === 'GET') {_if (path === 'keys') {
        return await getUserApiKeys(user.id);} else if (path === 'logs') {_const _limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 50;
        const _offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) : 0;
        return await getApiLogs(user.id, _limit, _offset);}
    }

    return new Response(JSON.stringify({_error: 'Invalid action'}), {_status: 400, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),

async function createApiKey(_userId: string, _name: string, _scopes: string[], _expiresAt: string | null = null) {_try {
    // Generate prefix from name (first 4 chars of name + 4 random chars)
<<<<<<< HEAD
    const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 4),
    const randomChars = Math.random().toString(36).substring(2, 6),
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8),
    
    // Use database function to generate API key
    const { data: keyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix }),
    
    if (keyGenError || !keyData) {
      console.error('Error generating API key:', keyGenError),
      return new Response(JSON.stringify({ error: 'Failed to generate API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Store the key in the database (hash it first)
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: keyData }),
    
    if (hashError || !hashData) {
      console.error('Error hashing API key:', hashError),
      return new Response(JSON.stringify({ error: 'Failed to process API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
=======
    const _namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, _'').substring(0, _4);
    const _randomChars = Math.random().toString(36).substring(2, _6);
    const _prefix = `${namePrefix}${_randomChars}`.substring(0, 8);
    
    // Use database function to generate API key
    const {_data: keyData, _error: keyGenError} = await supabase.rpc(_'generate_api_key', _{_prefix});
    
    if (keyGenError || !keyData) {_return new Response(JSON.stringify({ error: 'Failed to generate API key'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    // Store the key in the database (hash it first)
    const {_data: hashData, _error: hashError} = await supabase.rpc('hash_api_key', {_api_key: keyData});
    
    if (hashError || !hashData) {_return new Response(JSON.stringify({ error: 'Failed to process API key'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Insert the API key record
    const {_data: insertData, _error: insertError} = await supabase
      .from('api_keys')
<<<<<<< HEAD
      .insert({
        user_id: userId,
        key_prefix: prefix,
        key_hash: hashData,
        name: name,
        scopes: scopes,
        expires_at: expiresAt})
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),

    if (insertError || !insertData) {
      console.error('Error inserting API key:', insertError),
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
    console.error('Error in createApiKey:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
      .insert({_user_id: userId, _key_prefix: prefix, _key_hash: hashData, _name: name, _scopes: scopes, _expires_at: expiresAt})
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active');

    if (insertError || !insertData) {_return new Response(JSON.stringify({ error: 'Failed to save API key'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    // Return the created key (only shown once)
    return new Response(JSON.stringify({_...insertData[0], _key: keyData, _// Include the full key (only shown once)
      message: 'API key created successfully. Save this key as it won\'t be shown again.'}), {_status: 201, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function getUserApiKeys(_userId: string) {_try {
    const { data, _error} = await supabase
      .from('api_keys')
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active')
      .eq('user_id', userId)
<<<<<<< HEAD
      .order('created_at', { ascending: false }),

    if (error) {
      console.error('Error fetching API keys:', error),
      return new Response(JSON.stringify({ error: 'Failed to fetch API keys' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({ keys: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in getUserApiKeys:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
      .order('created_at', {_ascending: false});

    if (error) {_return new Response(JSON.stringify({ error: 'Failed to fetch API keys'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_keys: data}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function regenerateApiKey(_userId: string, _keyId: string) {_try {
    // First, _verify that the key belongs to the user
    const { data: keyData, _error: keyError} = await supabase
      .from('api_keys')
      .select('name, key_prefix, scopes, expires_at')
      .eq('id', keyId)
      .eq('user_id', userId)
      .single(),

<<<<<<< HEAD
    if (keyError || !keyData) {
      return new Response(JSON.stringify({ error: 'API key not found or access denied' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Generate a new API key
    const { data: newKeyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix: keyData.key_prefix }),
    
    if (keyGenError || !newKeyData) {
      console.error('Error generating new API key:', keyGenError),
      return new Response(JSON.stringify({ error: 'Failed to generate new API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Hash the new key
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: newKeyData }),
    
    if (hashError || !hashData) {
      console.error('Error hashing new API key:', hashError),
      return new Response(JSON.stringify({ error: 'Failed to process new API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
=======
    if (keyError || !keyData) {_return new Response(JSON.stringify({ error: 'API key not found or access denied'}), {_status: 404, _headers: { 'Content-Type': 'application/json'}});
    }

    // Generate a new API key
    const {_data: newKeyData, _error: keyGenError} = await supabase.rpc('generate_api_key', {_prefix: keyData.key_prefix});
    
    if (keyGenError || !newKeyData) {_return new Response(JSON.stringify({ error: 'Failed to generate new API key'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    // Hash the new key
    const {_data: hashData, _error: hashError} = await supabase.rpc('hash_api_key', {_api_key: newKeyData});
    
    if (hashError || !hashData) {_return new Response(JSON.stringify({ error: 'Failed to process new API key'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Update the key record with new hash
    const {_data: updateData, _error: updateError} = await supabase
      .from('api_keys')
      .update({_key_hash: hashData, _updated_at: new Date().toISOString()})
      .eq('id', keyId)
      .eq('user_id', userId)
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),

<<<<<<< HEAD
    if (updateError || !updateData) {
      console.error('Error updating API key:', updateError),
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
    console.error('Error in regenerateApiKey:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
    if (updateError || !updateData) {_return new Response(JSON.stringify({ error: 'Failed to update API key'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    // Return the regenerated key
    return new Response(JSON.stringify({_...updateData[0], _key: newKeyData, _// Include the full key (only shown once)
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.'}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function revokeApiKey(_userId: string, _keyId: string) {_try {
    const { data, _error} = await supabase
      .from('api_keys')
      .update({_is_active: false})
      .eq('id', keyId)
      .eq('user_id', userId)
      .select('id, name, is_active'),

<<<<<<< HEAD
    if (error || !data || data.length === 0) {
      console.error('Error revoking API key:', error),
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
    console.error('Error in revokeApiKey:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
    if (error || !data || data.length === 0) {_return new Response(JSON.stringify({ error: 'Failed to revoke API key or key not found'}), {_status: error ? 500 : 404, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_message: 'API key revoked successfully', _key: data[0]}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function getApiLogs(_userId: string, _limit = 50, _offset = 0) {_try {
    // Get the user's API key IDs
    const { data: keyIds, _error: keyError} = await supabase
      .from('api_keys')
      .select('id')
      .eq('user_id', userId),

<<<<<<< HEAD
    if (keyError) {
      console.error('Error fetching API keys for logs:', keyError),
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    if (!keyIds || keyIds.length === 0) {
      return new Response(JSON.stringify({ logs: [], count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Get logs for those keys
    const ids = keyIds.map(k => k.id),
    const { data: logs, error: logsError, count } = await supabase
=======
    if (keyError) {_return new Response(JSON.stringify({ error: 'Failed to fetch API logs'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    if (!keyIds || keyIds.length === 0) {_return new Response(JSON.stringify({ logs: [], _count: 0}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
    }

    // Get logs for those keys
    const _ids = keyIds.map(k => k.id);
    const {_data: logs, _error: logsError, _count} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from('api_logs')
      .select('*', {_count: 'exact'})
      .in('api_key_id', ids)
<<<<<<< HEAD
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1),

    if (logsError) {
      console.error('Error fetching API logs:', logsError),
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({ logs, count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in getApiLogs:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
      .order('created_at', {_ascending: false})
      .range(offset, offset + limit - 1);

    if (logsError) {_return new Response(JSON.stringify({ error: 'Failed to fetch API logs'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_logs, _count}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}



import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
interface CreateKeyRequest {
  name: string;
  scopes: string[]
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;

interface CreateKeyRequest {
  name: string;
  scopes: string[]
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',

interface CreateKeyRequest {
  name: string,
  scopes: string[],
  expiresAt?: string | null



}
;
interface RegenerateKeyRequest {;
  keyId: string;
}

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

  expiresAt?: string | null
}
interface RegenerateKeyRequest {
  keyId: string
}
// Create a Supabase client

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

  expiresAt?: string | null
import { serve } from 'https: //deno.land / std@0.177.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.38.0';
interface CreateKeyRequest {
  name: string;
  scopes: string[],
  expires_at?: string | null;
}
interface RegenerateKeyRequest {
  key_id: string;
}
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth

      headers: { 'Content-Type': 'application/json' }})
  }
});
async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  try {
    // Generate prefix from name (first 4 chars of name + 4 random chars)
    const { data: keyData, error: keyGenError } = await supabase && supabase.rpc('generate_api_key', { prefix });
    
    const { data: hashData, error: hashError } = await supabase && supabase.rpc('hash_api_key', { api_key: keyData });
    
      console && console.error('Error fetching API keys:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to fetch API keys' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON && JSON.stringify({ keys: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error in getUserApiKeys:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function regenerateApiKey(userId: string, keyId: string) {
  try {
    // First, verify that the key belongs to the user
    const { data: keyData, error: keyError } = await supabase
      .from('api_keys')
      .select('name, key_prefix, scopes, expires_at')
      .eq('id', keyId)
      .eq('user_id', userId)
      .single();

    if (keyError || !keyData) {
      return new Response(JSON && JSON.stringify({ error: 'API key not found or access denied' }), {
        status: 404,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Generate a new API key

    const { data: newKeyData, error: keyGenError } = await supabase && supabase.rpc('generate_api_key', { prefix: keyData && keyData.key_prefix });
    
    const { data: hashData, error: hashError } = await supabase && supabase.rpc('hash_api_key', { api_key: newKeyData });
    
    if (updateError || !updateData) {
      console && console.error('Error updating API key:', updateError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to update API key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }
    // Return the regenerated key
    return new Response(JSON && JSON.stringify({
    console && console.error('Error in regenerateApiKey:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,


    if (error || !data || data && data.length === 0) {
      console && console.error('Error revoking API key:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to revoke API key or key not found' }), {
        expires_at: expires_at});
      .select ('id, name, key_prefix, scopes, created_at, expires_at, is_active');
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error inserting API key:', insert_error);
      return new Response (JSON.stringify ({ error: 'Failed to save API key' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Return the created key (only shown once);
    return new Response (JSON.stringify ({
      ...insert_data[0];
      key: key_data, // Include the full key (only shown once);
      message: 'API key created successfully. Save this key as it won't be shown again.';
    }), {
      status: 201,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in createApiKey:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * getUserApiKeys - Function description
 */
function getUserApiKeys() {
  try {
    const { data, error } = await supabase;
      .from ('api_keys');
      .select ('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active');
      .eq ('user_id', user_id);
      .order ('created_at', { ascending: false });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error fetching API keys:', error);
      return new Response (JSON.stringify ({ error: 'Failed to fetch API keys' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    return new Response (JSON.stringify ({ keys: data }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in getUserApiKeys:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * regenerateApiKey - Function description
 */
function regenerateApiKey() {
  try {
    // First, verify that the key belongs to the user;
    const { data: key_data, error: key_error } = await supabase;
      .from ('api_keys');
      .select ('name, key_prefix, scopes, expires_at');
      .eq ('id', key_id);
      .eq ('user_id', user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'API key not found or access denied' }), {
        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Generate a new API key;
    const { data: newKeyData, error: keyGenError } = await supabase.rpc ('generate_api_key', { prefix: key_data.key_prefix });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error generating new API key:', keyGenError);
      return new Response (JSON.stringify ({ error: 'Failed to generate new API key' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Hash the new key;
    const { data: hash_data, error: hash_error } = await supabase.rpc ('hash_api_key', { api_key: newKeyData });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error hashing new API key:', hash_error);
      return new Response (JSON.stringify ({ error: 'Failed to process new API key' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Update the key record with new hash;
    const { data: update_data, error: update_error } = await supabase;
      .from ('api_keys');
      .update ({
        key_hash: hash_data,
        updated_at: new Date ().toISOString ()});
      .eq ('id', key_id);
      .eq ('user_id', user_id);
      .select ('id, name, key_prefix, scopes, created_at, expires_at, is_active');
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error updating API key:', update_error);
      return new Response (JSON.stringify ({ error: 'Failed to update API key' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Return the regenerated key;
    return new Response (JSON.stringify ({
      ...update_data[0];
      key: newKeyData, // Include the full key (only shown once);
      message: 'API key regenerated successfully. Save this key as it won't be shown again.';
    }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in regenerateApiKey:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * revokeApiKey - Function description
 */
function revokeApiKey() {
  try {
    const { data, error } = await supabase;
      .from ('api_keys');
      .update ({ is_active: false });
      .eq ('id', key_id);
      .eq ('user_id', user_id);
      .select ('id, name, is_active');
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error revoking API key:', error);
      return new Response (JSON.stringify ({ error: 'Failed to revoke API key or key not found' }), {

        status: error ? 500 : 404,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in revokeApiKey:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function getApiLogs(userId: string, limit = 50, offset = 0) {
  try {
    // Get the user's API key IDs
    const { data: keyIds, error: keyError } = await supabase
      .from('api_keys')
      .select('id')
      .eq('user_id', userId);
    if (keyError) {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
;
// Create a Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,;
const supabase = createClient(supabaseUrl, supabaseKey),;
serve(async (req) => {;
  // Handle CORS for browser requests;
  if (req.method === 'OPTIONS') {;
    return new Response('ok', {;
      headers: {;
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}});
  }
;
  try {;
    // Extract auth token from request;
    const authHeader = req.headers.get('Authorization'),;
    if (!authHeader) {;
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {;
        status: 401,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Verify the token with Supabase auth;
    const token = authHeader.replace('Bearer ', ''),;
    const { data: { user }, error: authError } = await supabase.auth.getUser(token),;
    if (authError || !user) {;
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {;
        status: 401,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Parse URL to determine action;
    const url = new URL(req.url),;
    const path = url.pathname.split('/').pop(),;
    // Handle different actions;
    if (req.method === 'POST') {;
      if (path === 'create') {;
        const { name, scopes, expiresAt } = await req.json() as CreateKeyRequest,;
        return await createApiKey(user.id, name, scopes, expiresAt);
      } else if (path === 'regenerate') {;
        const { keyId } = await req.json() as RegenerateKeyRequest,;
        return await regenerateApiKey(user.id, keyId);
      } else if (path === 'revoke') {;
        const { keyId } = await req.json() as RegenerateKeyRequest,;
        return await revokeApiKey(user.id, keyId);
      }
    } else if (req.method === 'GET') {;
      if (path === 'keys') {;
        return await getUserApiKeys(user.id);
      } else if (path === 'logs') {;
        const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 50,;
        const offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) : 0,;
        return await getApiLogs(user.id, limit, offset);
      }
    }
;
    return new Response(JSON.stringify({ error: 'Invalid action' }), {;
      status: 400,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error processing request:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}),;
async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {;
  try {;
    // Generate prefix from name (first 4 chars of name + 4 random chars);
    const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 4),;
    const randomChars = Math.random().toString(36).substring(2, 6),;
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8),;
    // Use database function to generate API key;
    const { data: keyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix }),;
    if (keyGenError || !keyData) {;
      console.error('Error generating API key:', keyGenError),;
      return new Response(JSON.stringify({ error: 'Failed to generate API key' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Store the key in the database (hash it first);
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: keyData }),;
    if (hashError || !hashData) {;
      console.error('Error hashing API key:', hashError),;
      return new Response(JSON.stringify({ error: 'Failed to process API key' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Insert the API key record;
    const { data: insertData, error: insertError } = await supabase;
      .from('api_keys');
      .insert({;
        user_id: userId,;
        key_prefix: prefix,;
        key_hash: hashData,;
        name: name,;
        scopes: scopes,;
        expires_at: expiresAt});
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),;
    if (insertError || !insertData) {;
      console.error('Error inserting API key:', insertError),;
      return new Response(JSON.stringify({ error: 'Failed to save API key' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Return the created key (only shown once);
    return new Response(JSON.stringify({;
      ...insertData[0],;
      key: keyData, // Include the full key (only shown once);
      message: 'API key created successfully. Save this key as it won\'t be shown again.';
    }), {;
      status: 201,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in createApiKey:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function getUserApiKeys(userId: string) {;
  try {;
    const { data, error } = await supabase;
      .from('api_keys');
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active');
      .eq('user_id', userId);
      .order('created_at', { ascending: false }),;
    if (error) {;
      console.error('Error fetching API keys:', error),;
      return new Response(JSON.stringify({ error: 'Failed to fetch API keys' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    return new Response(JSON.stringify({ keys: data }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in getUserApiKeys:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function regenerateApiKey(userId: string, keyId: string) {;
  try {;
    // First, verify that the key belongs to the user;
    const { data: keyData, error: keyError } = await supabase;
      .from('api_keys');
      .select('name, key_prefix, scopes, expires_at');
      .eq('id', keyId);
      .eq('user_id', userId);
      .single(),;
    if (keyError || !keyData) {;
      return new Response(JSON.stringify({ error: 'API key not found or access denied' }), {;
        status: 404,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Generate a new API key;
    const { data: newKeyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix: keyData.key_prefix }),;
    if (keyGenError || !newKeyData) {;
      console.error('Error generating new API key:', keyGenError),;
      return new Response(JSON.stringify({ error: 'Failed to generate new API key' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Hash the new key;
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: newKeyData }),;
    if (hashError || !hashData) {;
      console.error('Error hashing new API key:', hashError),;
      return new Response(JSON.stringify({ error: 'Failed to process new API key' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Update the key record with new hash;
    const { data: updateData, error: updateError } = await supabase;
      .from('api_keys');
      .update({;
        key_hash: hashData,;
        updated_at: new Date().toISOString()});
      .eq('id', keyId);
      .eq('user_id', userId);
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),;
    if (updateError || !updateData) {;
      console.error('Error updating API key:', updateError),;
      return new Response(JSON.stringify({ error: 'Failed to update API key' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Return the regenerated key;
    return new Response(JSON.stringify({;
      ...updateData[0],;
      key: newKeyData, // Include the full key (only shown once);
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.';
    }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in regenerateApiKey:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function revokeApiKey(userId: string, keyId: string) {;
  try {;
    const { data, error } = await supabase;
      .from('api_keys');
      .update({ is_active: false });
      .eq('id', keyId);
      .eq('user_id', userId);
      .select('id, name, is_active'),;
    if (error || !data || data.length === 0) {;
      console.error('Error revoking API key:', error),;
      return new Response(JSON.stringify({ error: 'Failed to revoke API key or key not found' }), {;
        status: error ? 500 : 404,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    return new Response(JSON.stringify({;
      message: 'API key revoked successfully',;
      key: data[0];
    }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in revokeApiKey:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function getApiLogs(userId: string, limit = 50, offset = 0) {;
  try {;
    // Get the user's API key IDs;
    const { data: keyIds, error: keyError } = await supabase;
      .from('api_keys');
      .select('id');
      .eq('user_id', userId),;
    if (keyError) {;
      console.error('Error fetching API keys for logs:', keyError),;
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});


    }
    if (!keyIds |keyIds.length === 0) {
      return new Response(JSON.stringify({ logs: [], count: 0 }), {
        status: 200



    // Get logs for those keys
    const ids = keyIds.map(k => k.id);

    // Get logs for those keys
    const ids = keyIds && keyIds.map(k => k && k.id);    const { data: logs, error: logsError, count } = await supabase
      .from('api_logs')
      .select('*', { count: 'exact' })
      .in('api_key_id', ids)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);
    if (logsError) {
      console && console.error('Error fetching API logs:', logsError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON && JSON.stringify({ logs, count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error in getApiLogs:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})

      headers: { 'Content-Type': 'application/json' }})
    return new Response (JSON.stringify ({
      message: 'API key revoked successfully',
      key: data[0];
    }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in revokeApiKey:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});

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
      headers: { 'Content-Type': 'application/json' }})


  }
}
async /**
 * getApiLogs - Function description
 */
function getApiLogs() {
  try {
    // Get the user's API key IDs;
    const { data: key_ids, error: key_error } = await supabase;
      .from ('api_keys');
      .select ('id');
      .eq ('user_id', user_id);
;
import { serve } from "https://deno.land/std@0.177.0/http/server.ts",;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0',;
;
interface CreateKeyRequest {;
  name:string,;
  scopes:string[],;
  expiresAt?:string | null;}
;
interface RegenerateKeyRequest {;
  keyId:string;
}
;
// Create a Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,;
const supabase = createClient(supabaseUrl, supabaseKey),;
;
serve(async (req) => {;
  // Handle CORS for browser requests;
  if (req.method === 'OPTIONS') {;
    return new Response('ok', {;
      headers:{;
        'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'POST, OPTIONSAccess-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'}}),;
  }
;
  try {;
    // Extract auth token from request;
    const authHeader = req.headers.get('Authorization'),;
    if (!authHeader) {;
      return new Response(JSON.stringify({ error:'Missing authorization header' }), {;
        status:401,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Verify the token with Supabase auth;
    const token = authHeader.replace('Bearer ', ''),;
    const { data:{ user }, error:authError } = await supabase.auth.getUser(token),;
    ;
    if (authError || !user) {;
      return new Response(JSON.stringify({ error:'Unauthorized' }), {;
        status:401,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Parse URL to determine action;
    const url = new URL(req.url),;
    const path = url.pathname.split('/').pop(),;
;
    // Handle different actions;
    if (req.method === 'POST') {;
      if (path === 'create') {;
        const { name, scopes, expiresAt } = await req.json() as CreateKeyRequest,;
        return await createApiKey(user.id, name, scopes, expiresAt),;
      } else if (path === 'regenerate') {;
        const { keyId } = await req.json() as RegenerateKeyRequest,;
        return await regenerateApiKey(user.id, keyId),;
      } else if (path === 'revoke') {;
        const { keyId } = await req.json() as RegenerateKeyRequest,;
        return await revokeApiKey(user.id, keyId),;
      }
    } else if (req.method === 'GET') {;
      if (path === 'keys') {;
        return await getUserApiKeys(user.id),;
      } else if (path === 'logs') {;
        const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) :50,;
        const offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) :0,;
        return await getApiLogs(user.id, limit, offset),;
      }
    }
;
    return new Response(JSON.stringify({ error:'Invalid action' }), {;
      status:400,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error processing request:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}),;
;
async function createApiKey(userId:string, name:string, scopes:string[], expiresAt:string | null = null) {;
  try {;
    // Generate prefix from name (first 4 chars of name + 4 random chars);
    const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 4),;
    const randomChars = Math.random().toString(36).substring(2, 6),;
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8),;
    ;
    // Use database function to generate API key;
    const { data:keyData, error:keyGenError } = await supabase.rpc('generate_api_key', { prefix }),;
    ;
    if (keyGenError || !keyData) {;
      console.error('Error generating API key:', keyGenError),;
      return new Response(JSON.stringify({ error:'Failed to generate API key' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Store the key in the database (hash it first);
    const { data:hashData, error:hashError } = await supabase.rpc('hash_api_key', { api_key:keyData }),;
    ;
    if (hashError || !hashData) {;
      console.error('Error hashing API key:', hashError),;
      return new Response(JSON.stringify({ error:'Failed to process API key' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Insert the API key record;
    const { data:insertData, error:insertError } = await supabase;
      .from('api_keys');
      .insert({;
        user_id:userId,;
        key_prefix:prefix,;
        key_hash:hashData,;
        name:name,;
        scopes:scopes,;
        expires_at:expiresAt});
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),;
;
    if (insertError || !insertData) {;
      console.error('Error inserting API key:', insertError),;
      return new Response(JSON.stringify({ error:'Failed to save API key' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Return the created key (only shown once);
    return new Response(JSON.stringify({;
      ...insertData[0],;
      key:keyData, // Include the full key (only shown once);
      message:'API key created successfully. Save this key as it won\'t be shown again.';
    }), {;
      status:201,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in createApiKey:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function getUserApiKeys(userId:string) {;
  try {;
    const { data, error } = await supabase;
      .from('api_keys');
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active');
      .eq('user_id', userId);
      .order('created_at', { ascending:false }),;
;
    if (error) {;
      console.error('Error fetching API keys:', error),;
      return new Response(JSON.stringify({ error:'Failed to fetch API keys' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({ keys:data }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in getUserApiKeys:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function regenerateApiKey(userId:string, keyId:string) {;
  try {;
    // First, verify that the key belongs to the user;
    const { data:keyData, error:keyError } = await supabase;
      .from('api_keys');
      .select('name, key_prefix, scopes, expires_at');
      .eq('id', keyId);
      .eq('user_id', userId);
      .single(),;
;
    if (keyError || !keyData) {;
      return new Response(JSON.stringify({ error:'API key not found or access denied' }), {;
        status:404,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Generate a new API key;
    const { data:newKeyData, error:keyGenError } = await supabase.rpc('generate_api_key', { prefix:keyData.key_prefix }),;
    ;
    if (keyGenError || !newKeyData) {;
      console.error('Error generating new API key:', keyGenError),;
      return new Response(JSON.stringify({ error:'Failed to generate new API key' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Hash the new key;
    const { data:hashData, error:hashError } = await supabase.rpc('hash_api_key', { api_key:newKeyData }),;
    ;
    if (hashError || !hashData) {;
      console.error('Error hashing new API key:', hashError),;
      return new Response(JSON.stringify({ error:'Failed to process new API key' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Update the key record with new hash;
    const { data:updateData, error:updateError } = await supabase;
      .from('api_keys');
      .update({;
        key_hash:hashData,;
        updated_at:new Date().toISOString()});
      .eq('id', keyId);
      .eq('user_id', userId);
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),;
;
    if (updateError || !updateData) {;
      console.error('Error updating API key:', updateError),;
      return new Response(JSON.stringify({ error:'Failed to update API key' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Return the regenerated key;
    return new Response(JSON.stringify({;
      ...updateData[0],;
      key:newKeyData, // Include the full key (only shown once);
      message:'API key regenerated successfully. Save this key as it won\'t be shown again.';
    }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in regenerateApiKey:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function revokeApiKey(userId:string, keyId:string) {;
  try {;
    const { data, error } = await supabase;
      .from('api_keys');
      .update({ is_active:false });
      .eq('id', keyId);
      .eq('user_id', userId);
      .select('id, name, is_active'),;
;
    if (error || !data || data.length === 0) {;
      console.error('Error revoking API key:', error),;
      return new Response(JSON.stringify({ error:'Failed to revoke API key or key not found' }), {;
        status:error ? 500 :404,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({;
      message:'API key revoked successfully',;
      key:data[0];
    }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in revokeApiKey:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function getApiLogs(userId:string, limit = 50, offset = 0) {;
  try {;
    // Get the user's API key IDs;
    const { data:keyIds, error:keyError } = await supabase;
      .from('api_keys');
      .select('id');
      .eq('user_id', userId),;
;
    if (keyError) {;
      console.error('Error fetching API keys for logs:', keyError),;
      return new Response(JSON.stringify({ error:'Failed to fetch API logs' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    if (!keyIds || keyIds.length === 0) {;
      return new Response(JSON.stringify({ logs:[], count:0 }), {;
        status:200,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Get logs for those keys;
    const ids = keyIds.map(k => k.id),;
    const { data:logs, error:logsError, count } = await supabase;
      .from('api_logs');
      .select('*', { count:'exact' });
      .in('api_key_id', ids);
      .order('created_at', { ascending:false });
      .range(offset, offset + limit - 1),;
;
    if (logsError) {;
      console.error('Error fetching API logs:', logsError),;
      return new Response(JSON.stringify({ error:'Failed to fetch API logs' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({ logs, count }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in getApiLogs:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  } interface CreateKeyRequest {
  name: string;
scopes: string[];
expiresAt?: string | null 
}interface RegenerateKeyRequest {
  keyId: string 
}//Create a Supabase client //Handle CORS for browser requests if (req.method === 'OPTIONS') {
  return new Response ('ok', {
  headers: {
  
}
});
async function createApiKey (userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  try {
  //Generate prefix from name (first 4 chars of name + 4 random chars) 
}//Insert the API key record const {
  data: insertData, error: insertError 
}= await supabase .from ('api keys') 
}
}async function getUserApiKeys (userId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('api keys') .select ('id, name, key prefix, scopes, created at, last used at, expires at, is active') .eq ('user id', userId) 
}
}async function regenerateApiKey (userId: string, keyId: string) {
  try {
  //First, verify that the key belongs to the user const {
  data: keyData, error: keyError 
}= await supabase .from ('api keys') .select ('name, key prefix, scopes, expires at') .eq ('id', keyId) .eq ('user id', userId) .single ();
}//Update the key record with new hash const {
  data: updateData, error: updateError 
}= await supabase .from ('api keys') .update ({
  key hash: hashData, updated at: new Date () .toISOString () 
}) .eq ('id', keyId) .eq ('user id', userId) .select ('id, name, key prefix, scopes, created at, expires at, is active');
}
}async function revokeApiKey (userId: string, keyId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('api keys') .update ({
  is active: false 
}) .eq ('id', keyId) .eq ('user id', userId) .select ('id, name, is active');
}
}async function getApiLogs (userId: string, limit = 50, offset = 0) {
  try {
  // Get the user's API key IDs const {
  data: keyIds, error: keyError 
}= await supabase .from ('api keys') .select ('id') .eq ('user id', userId);
.from ('api logs') .select ('*', {
  count: 'exact' 
}) .in ('api key id', ids) 
}
}
  }
}
;
  }
}
;

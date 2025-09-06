<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

interface CreateKeyRequest {
  name: string;
  scopes: string[]
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;



import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface CreateKeyRequest {
  name: string;
  scopes: string[]import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
<<<<<<< HEAD
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CreateKeyRequest {
  name: string,
  scopes: string[],
  expiresAt?: string | null
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',;
interface CreateKeyRequest {;
  name: string,;
  scopes: string[],;
  expiresAt?: string | null;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
interface RegenerateKeyRequest {;
  keyId: string;
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',interface CreateKeyRequest {
  name: string,
  scopes: string[],
  expiresAt?: string | null;
interface RegenerateKeyRequest {;
  keyId: string;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
}
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const supabase = createClient(supabaseUrl, supabaseKey);
=======
}const supabase = createClient(supabaseUrl, supabaseKey);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, supabaseKey),

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
serve(async (req) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // Handle CORS for browser requests
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {
// Create a Supabase client;
const supabase_url = Deno.env.get ("SUPABASE_URL") as string;
const supabase_key = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") as string;
const supabase = create_client (supabase_url, supabase_key);
;
serve (async (req) => {
  // Handle CORS for browser requests;
  // Check condition
if ( {) {
  $2
}
    return new Response ('ok', {
<<<<<<< HEAD
      headers: {
<<<<<<< HEAD
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth

<<<<<<< HEAD
    const token = authHeader && authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase && supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON && JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action

    const url = new URL(req && req.url);
    const path = url && url.pathname.split('/').pop();


=======
        'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'POST, OPTIONSAccess - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}});
  }
  try {
      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth
    const token = authHeader && authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase && supabase.auth.getUser(token);
    if (authError || !user) {
      return new Response(JSON && JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action
    const url = new URL(req && req.url);
    const path = url && url.pathname.split('/').pop();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth
        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Handle different actions
=======
      headers: {    // Handle different actions
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (req && req.method === 'POST') {
      if (path === 'create') {
        const { name, scopes, expiresAt } = await req && req.json() as CreateKeyRequest;
        return await createApiKey(user && user.id, name, scopes, expiresAt)
      } else if (path === 'regenerate') {
        const { keyId } = await req && req.json() as RegenerateKeyRequest;
        return await regenerateApiKey(user && user.id, keyId)
      } else if (path === 'revoke') {
        const { keyId } = await req && req.json() as RegenerateKeyRequest;
        return await revokeApiKey(user && user.id, keyId)
      }
    } else if (req && req.method === 'GET') {
      if (path === 'keys') {
        return await getUserApiKeys(user && user.id)
      } else if (path === 'logs') {
        const limit = url && url.searchParams.get('limit') ? parseInt(url && url.searchParams.get('limit')!) : 50;
        const offset = url && url.searchParams.get('offset') ? parseInt(url && url.searchParams.get('offset')!) : 0;
        return await getApiLogs(user && user.id, limit, offset)
      }
    }
      status: 400,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error processing request:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,      headers: { 'Content-Type': 'application/json' }})
  }
});
async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  try {
    // Generate prefix from name (first 4 chars of name + 4 random chars)
    const namePrefix = name && name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 4);
    const randomChars = Math && Math.random().toString(36).substring(2, 6);
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8);
    // Use database function to generate API key

    const { data: keyData, error: keyGenError } = await supabase && supabase.rpc('generate_api_key', { prefix });
        if (keyGenError || !keyData) {
      console && console.error('Error generating API key:', keyGenError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to generate API key' }), {
        status: 500,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Store the key in the database (hash it first)

    const { data: hashData, error: hashError } = await supabase && supabase.rpc('hash_api_key', { api_key: keyData });
        if (hashError || !hashData) {
      console && console.error('Error hashing API key:', hashError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to process API key' }), {
<<<<<<< HEAD
        status: 500,
<<<<<<< HEAD

=======
    const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 4);
    const randomChars = Math.random().toString(36).substring(2, 6);
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8);
    // Use database function to generate API key
    const { data: keyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix });
    if (keyGenError |!keyData) {
      console.error('Error generating API key:', keyGenError);
      return new Response(JSON.stringify({ error: 'Failed to generate API key' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
    // Store the key in the database (hash it first)
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: keyData });
    if (hashError |!hashData) {
      console.error('Error hashing API key:', hashError);
      return new Response(JSON.stringify({ error: 'Failed to process API key' }), {
        status: 500
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        headers: { 'Content-Type': 'application/json' }})
    }
    // Insert the API key record
    const { data: insertData, error: insertError } = await supabase
      .from('api_keys')
      .insert({
        user_id: userId;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Extract auth token from request;
    const auth_header = req.headers.get ('Authorization');
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Verify the token with Supabase auth;
    const token = auth_header.replace ('Bearer ', '');
    const { data: { user }, error: auth_error } = await supabase.auth.get_user (token);
;
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Parse URL to determine action;
    const url = new URL (req.url);
    const path = url.pathname.split ('/').pop ();
;
    // Handle different actions;
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        const { name, scopes, expires_at } = await req.json () as CreateKeyRequest;
        return await createApiKey (user.id, name, scopes, expires_at);
      } else // Check condition
if ( {) {
  $2
}
        const { key_id } = await req.json () as RegenerateKeyRequest;
        return await regenerateApiKey (user.id, key_id);
      } else // Check condition
if ( {) {
  $2
}
        const { key_id } = await req.json () as RegenerateKeyRequest;
        return await revokeApiKey (user.id, key_id);
      }
    } else // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return await getUserApiKeys (user.id);
      } else // Check condition
if ( {) {
  $2
}
        const limit = url.search_params.get ('limit') ? parse_int (url.search_params.get ('limit')!) : 50;
        const offset = url.search_params.get ('offset') ? parse_int (url.search_params.get ('offset')!) : 0;
        return await getApiLogs (user.id, limit, offset);
      }
    }
    return new Response (JSON.stringify ({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error processing request:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
});
;
async /**
 * createApiKey - Function description
 */
function createApiKey() {
  try {
    // Generate prefix from name (first 4 chars of name + 4 random chars);
    const name_prefix = name.toLowerCase ().replace (/[^a - z0 - 9]/g, '').substring (0, 4);
    const random_chars = Math.random ().to_string (36).substring (2, 6);
    const prefix = `${name_prefix}${random_chars}`.substring (0, 8);
;
    // Use database function to generate API key;
    const { data: key_data, error: keyGenError } = await supabase.rpc ('generate_api_key', { prefix });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error generating API key:', keyGenError);
      return new Response (JSON.stringify ({ error: 'Failed to generate API key' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Store the key in the database (hash it first);
    const { data: hash_data, error: hash_error } = await supabase.rpc ('hash_api_key', { api_key: key_data });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error hashing API key:', hash_error);
      return new Response (JSON.stringify ({ error: 'Failed to process API key' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Insert the API key record;
    const { data: insert_data, error: insert_error } = await supabase;
      .from ('api_keys');
      .insert ({
        user_id: user_id;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        key_prefix: prefix;
        key_hash: hash_data;
        name: name;


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (insertError || !insertData) {
      console && console.error('Error inserting API key:', insertError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to save API key' }), {
        status: 500,
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        key_prefix: prefix;
        key_hash: hash_data;
        name: name;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        headers: { 'Content-Type': 'application/json' }})
=======
        status: 500,        headers: { 'Content-Type': 'application/json' }})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
    // Return the created key (only shown once)
    return new Response(JSON && JSON.stringify({
      ...insertData[0];
      key: keyData, // Include the full key (only shown once)
      message: 'API key created successfully. Save this key as it won\'t be shown again.'
    }), {
      status: 201
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {      ...updateData[0];
      key: newKeyData, // Include the full key (only shown once)
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.'
    }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {

    console && console.error('Error in regenerateApiKey:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,      headers: { 'Content-Type': 'application/json' }})
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

=======
      console.error('Error fetching API keys for logs:', keyError);
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    if (!keyIds |keyIds.length === 0) {
      return new Response(JSON.stringify({ logs: [], count: 0 }), {
        status: 200
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      console && console.error('Error fetching API keys for logs:', keyError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Get logs for those keys
    const ids = keyIds && keyIds.map(k => k && k.id);        headers: { 'Content-Type': 'application/json' }})
    }
    // Get logs for those keys
    const ids = keyIds && keyIds.map(k => k && k.id);
        headers: { 'Content-Type': 'application/json' }})
    }

    // Get logs for those keys
    const ids = keyIds.map(k => k.id);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const { data: logs, error: logsError, count } = await supabase
      .from('api_logs')
      .select('*', { count: 'exact' })
      .in('api_key_id', ids)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);
    if (logsError) {
<<<<<<< HEAD
<<<<<<< HEAD

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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
      headers: { 'Content - Type': 'application / json' }});
<<<<<<< HEAD
=======
      headers: { 'Content-Type': 'application/json' }})


=======
=======
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
      headers: { 'Content-Type': 'application/json' }})


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
    // Get logs for those keys;
    const ids = keyIds.map(k => k.id),;
    const { data: logs, error: logsError, count } = await supabase;
      .from('api_logs');
      .select('*', { count: 'exact' });
      .in('api_key_id', ids);
      .order('created_at', { ascending: false });
      .range(offset, offset + limit - 1),;
    if (logsError) {;
      console.error('Error fetching API logs:', logsError),;
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    return new Response(JSON.stringify({ logs, count }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in getApiLogs:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500;
      headers: { 'Content-Type': 'application/json' }});
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    // Check condition
if ( {) {
  $2
}
      console.error ('Error fetching API keys for logs:', key_error);
      return new Response (JSON.stringify ({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ logs: [], count: 0 }), {
        status: 200,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Get logs for those keys;
    const ids = key_ids.map (key => k.id);
    const { data: logs, error: logs_error, count } = await supabase;
      .from ('api_logs');
      .select ('*', { count: 'exact' });
      .in ('api_key_id', ids);
      .order ('created_at', { ascending: false });
      .range (offset, offset + limit - 1);
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error fetching API logs:', logs_error);
      return new Response (JSON.stringify ({ error: 'Failed to fetch API logs' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    return new Response (JSON.stringify ({ logs, count }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in getApiLogs:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      headers: { 'Content - Type': 'application / json' }});  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

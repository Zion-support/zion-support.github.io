
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",""
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
interface CreateKeyRequest {
  // TODO: Implement
}
  name: string;,
  scopes: string[]
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",""
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;""
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
  // TODO: Implement
  name: string,
  scopes: string[],
  expiresAt?: string | null;
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;""
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',;
interface CreateKeyRequest {;
  name: string,;
  scopes: string[],;

;
interface RegenerateKeyRequest {;
  keyId: string;

import { serve } from 'https: //deno.land / std@0.177.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.38.0';
  // TODO: Implement
  expires_at?: string | null;
interface RegenerateKeyRequest {
  // TODO: Implement
  key_id: string;

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;""
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;"
const supabase = createClient(supabaseUrl, supabaseKey);"
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,""
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,"
const supabase = createClient(supabaseUrl, supabaseKey),


serve(async (req) => {
  // Handle CORS for browser requests;"
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {
// Create a Supabase client;)
const supabase_url = Deno.env.get ("SUPABASE_URL") as string;""
const supabase_key = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") as string;"
const supabase = create_client (supabase_url, supabase_key);
serve (async (req) => {
  // Handle CORS for browser requests;
  // Check condition;
if ( {) {
  $2;
}"
    return new Response ('ok', {
      headers: {
)
      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,

        headers: { 'Content-Type': 'application/json' }})
    // Verify the token with Supabase auth;
    const token = authHeader && authHeader.replace('Bearer ', );
    const { data: { user }, error: authError } = await supabase && supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON && JSON.stringify({ error: 'Unauthorized' }), {

    // Parse URL to determine action;
    const url = new URL(req && req.url);
    const path = url && url.pathname.split('/').pop();
    // Verify the token with Supabase auth;
    // Parse URL to determine action;
    // Handle different actions;
    if (req && req.method === 'POST') {
      if (path === 'create') {
        const { name, scopes, expiresAt } = await req && req.json() as CreateKeyRequest;
        return await createApiKey(user && user.id, name, scopes, expiresAt)
      } else if (path === 'regenerate') {
        const { keyId } = await req && req.json() as RegenerateKeyRequest;
        return await regenerateApiKey(user && user.id, keyId)
      } else if (path === 'revoke') {
        return await revokeApiKey(user && user.id, keyId)
    } else if (req && req.method === 'GET') {
      if (path === 'keys') {
        return await getUserApiKeys(user && user.id)
      } else if (path === 'logs') {
        const limit = url && url.searchParams.get('limit') ? parseInt(url && url.searchParams.get('limit')!) : 50;
        const offset = url && url.searchParams.get('offset') ? parseInt(url && url.searchParams.get('offset')!) : 0;
        return await getApiLogs(user && user.id, limit, offset)


    return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
  } catch (error) {
    console && console.error('Error processing request:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

});
async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  try {
  // TODO: Implement
    // Generate prefix from name (first 4 chars of name + 4 random chars)
    const namePrefix = name && name.toLowerCase().replace(/[^a-z0-9]/g, ).substring(0, 4);
    const randomChars = Math && Math.random().toString(36).substring(2, 6);
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8);
    // Use database function to generate API key;
    const { data: keyData, error: keyGenError } = await supabase && supabase.rpc('generate_api_key', { prefix });
    if (keyGenError || !keyData) {
      console && console.error('Error generating API key:', keyGenError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to generate API key' }), {

    // Store the key in the database (hash it first)

    const { data: hashData, error: hashError } = await supabase && supabase.rpc('hash_api_key', { api_key: keyData });
    if (hashError || !hashData) {
      console && console.error('Error hashing API key:', hashError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to process API key' }), {

    // Insert the API key record;
    const { data: insertData, error: insertError } = await supabase;
      .from('api_keys')
      .insert({
        user_id: userId;,
  key_prefix: prefix;
        key_hash: hash_data;,
  name: name;

    if (insertError || !insertData) {
      console && console.error('Error inserting API key:', insertError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to save API key' }), {

        key_prefix: prefix;,
  key_hash: hash_data;
        name: name;,
    // Return the created key (only shown once)
    return new Response(JSON && JSON.stringify({
      ...insertData[0];)
      key: keyData, // Include the full key (only shown once)
      message: 'API key created successfully. Save this key as it won\'t be shown again.
    }), {
      status: 201;,

    console && console.error('Error in createApiKey:', error);

async function getUserApiKeys(userId: string) {
  // TODO: Implement
    const { data, error } = await supabase;
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) {

      console && console.error('Error fetching API keys:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to fetch API keys' }), {

    return new Response(JSON && JSON.stringify({ keys: data }), {
      status: 200,
    console && console.error('Error in getUserApiKeys:', error);

async function regenerateApiKey(userId: string, keyId: string) {
  // TODO: Implement
    // First, verify that the key belongs to the user;
    const { data: keyData, error: keyError } = await supabase;
      .select('name, key_prefix, scopes, expires_at')
      .eq('id', keyId)
      .single();


    if (keyError || !keyData) {
      return new Response(JSON && JSON.stringify({ error: 'API key not found or access denied' }), {
        status: 404,

    // Generate a new API key;
    const { data: newKeyData, error: keyGenError } = await supabase && supabase.rpc('generate_api_key', { prefix: keyData && keyData.key_prefix });
    if (keyGenError || !newKeyData) {
      console && console.error('Error generating new API key:', keyGenError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to generate new API key' }), {

    // Hash the new key;
    const { data: hashData, error: hashError } = await supabase && supabase.rpc('hash_api_key', { api_key: newKeyData });
      console && console.error('Error hashing new API key:', hashError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to process new API key' }), {

    // Update the key record with new hash;
    const { data: updateData, error: updateError } = await supabase;
      .update({
        key_hash: hashData;,)
  updated_at: new Date().toISOString()})
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active');
    if (updateError || !updateData) {
      console && console.error('Error updating API key:', updateError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to update API key' }), {

    // Return the regenerated key;
      ...updateData[0];)
      key: newKeyData, // Include the full key (only shown once)
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.
      status: 200;,

    console && console.error('Error in regenerateApiKey:', error);

async function revokeApiKey(userId: string, keyId: string) {
  // TODO: Implement
      .update({ is_active: false })
      .select('id, name, is_active');
    if (error || !data || data && data.length === 0) {
      console && console.error('Error revoking API key:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to revoke API key or key not found' }), {
        scopes: scopes,
        expires_at: expires_at});
      .select ('id, name, key_prefix, scopes, created_at, expires_at, is_active');
    // Check condition;
      console.error ('Error inserting API key:', insert_error);
      return new Response (JSON.stringify ({ error: 'Failed to save API key' }), {
        headers: { 'Content - Type': 'application / json' }});
    // Return the created key (only shown once);
    return new Response (JSON.stringify ({
      ...insert_data[0];)
      key: key_data, // Include the full key (only shown once);
      message: 'API key created successfully. Save this key as it won't be shown again.';
      status: 201,
    console.error ('Error in createApiKey:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
async /**
 * getUserApiKeys - Function description;
 */
function getUserApiKeys() {
  // TODO: Implement
      .from ('api_keys');
      .select ('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active');
      .eq ('user_id', user_id);
      .order ('created_at', { ascending: false });
    // Check condition;
      console.error ('Error fetching API keys:', error);
      return new Response (JSON.stringify ({ error: 'Failed to fetch API keys' }), {
    return new Response (JSON.stringify ({ keys: data }), {
    console.error ('Error in getUserApiKeys:', error);
 * regenerateApiKey - Function description;
function regenerateApiKey() {
  // TODO: Implement
    // First, verify that the key belongs to the user;
    const { data: key_data, error: key_error } = await supabase;
      .select ('name, key_prefix, scopes, expires_at');
      .eq ('id', key_id);
      .single ();
    // Check condition;
      return new Response (JSON.stringify ({ error: 'API key not found or access denied' }), {
    // Generate a new API key;
    const { data: newKeyData, error: keyGenError } = await supabase.rpc ('generate_api_key', { prefix: key_data.key_prefix });
    // Check condition;
      console.error ('Error generating new API key:', keyGenError);
      return new Response (JSON.stringify ({ error: 'Failed to generate new API key' }), {
    // Hash the new key;
    const { data: hash_data, error: hash_error } = await supabase.rpc ('hash_api_key', { api_key: newKeyData });
    // Check condition;
      console.error ('Error hashing new API key:', hash_error);
      return new Response (JSON.stringify ({ error: 'Failed to process new API key' }), {
    // Update the key record with new hash;
    const { data: update_data, error: update_error } = await supabase;
      .update ({
        key_hash: hash_data,)
        updated_at: new Date ().toISOString ()});
    // Check condition;
      console.error ('Error updating API key:', update_error);
      return new Response (JSON.stringify ({ error: 'Failed to update API key' }), {
    // Return the regenerated key;
      ...update_data[0];)
      key: newKeyData, // Include the full key (only shown once);
      message: 'API key regenerated successfully. Save this key as it won't be shown again.';
    console.error ('Error in regenerateApiKey:', error);
 * revokeApiKey - Function description;
function revokeApiKey() {
  // TODO: Implement
      .update ({ is_active: false });
      .select ('id, name, is_active');
    // Check condition;
      console.error ('Error revoking API key:', error);
      return new Response (JSON.stringify ({ error: 'Failed to revoke API key or key not found' }), {
        status: error ? 500 : 404,

    console && console.error('Error in revokeApiKey:', error);

async function getApiLogs(userId: string, limit = 50, offset = 0) {
  // TODO: Implement
    // Get the user's API key IDs;
    const { data: keyIds, error: keyError } = await supabase;
      .select('id')
      .eq('user_id', userId);
    if (keyError) {

        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
// Create a Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,;""
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,;"
const supabase = createClient(supabaseUrl, supabaseKey),;
serve(async (req) => {;
  // Handle CORS for browser requests;"
  if (req.method === 'OPTIONS') {;
    return new Response('ok', {;
      headers: {;)
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}});
  try {;
    // Extract auth token from request;
    const authHeader = req.headers.get('Authorization'),;
    if (!authHeader) {;
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {;
        status: 401,;
        headers: { 'Content-Type': 'application/json' }});
    // Verify the token with Supabase auth;
    const token = authHeader.replace('Bearer ', ),;
    const { data: { user }, error: authError } = await supabase.auth.getUser(token),;
    if (authError || !user) {;
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {;
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
        return await revokeApiKey(user.id, keyId);
    } else if (req.method === 'GET') {;
      if (path === 'keys') {;
        return await getUserApiKeys(user.id);
      } else if (path === 'logs') {;
        const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 50,;
        const offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) : 0,;
        return await getApiLogs(user.id, limit, offset);
    return new Response(JSON.stringify({ error: 'Invalid action' }), {;
      status: 400,;
  } catch (error) {;
    console.error('Error processing request:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
}),;
async function createApiKey(userId: string, name: string, scopes: string[], expiresAt: string | null = null) {;
    // Generate prefix from name (first 4 chars of name + 4 random chars);
    const namePrefix = name.toLowerCase().replace(/[^a-z0-9]/g, ).substring(0, 4),;
    const randomChars = Math.random().toString(36).substring(2, 6),;`;
    const prefix = `${namePrefix}${randomChars}`.substring(0, 8),;
    // Use database function to generate API key;
    const { data: keyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix }),;
    if (keyGenError || !keyData) {;
      console.error('Error generating API key:', keyGenError),;
      return new Response(JSON.stringify({ error: 'Failed to generate API key' }), {;
    // Store the key in the database (hash it first);
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: keyData }),;
    if (hashError || !hashData) {;
      console.error('Error hashing API key:', hashError),;
      return new Response(JSON.stringify({ error: 'Failed to process API key' }), {;
    // Insert the API key record;
      .from('api_keys');
      .insert({;
        user_id: userId,;
        key_prefix: prefix,;
        key_hash: hashData,;
        name: name,;
        scopes: scopes,;)
        expires_at: expiresAt});
      .select('id, name, key_prefix, scopes, created_at, expires_at, is_active'),;
    if (insertError || !insertData) {;
      console.error('Error inserting API key:', insertError),;
      return new Response(JSON.stringify({ error: 'Failed to save API key' }), {;
    // Return the created key (only shown once);
    return new Response(JSON.stringify({;
      ...insertData[0],;)
      key: keyData, // Include the full key (only shown once);
      message: 'API key created successfully. Save this key as it won\'t be shown again.';
    }), {;
      status: 201,;
    console.error('Error in createApiKey:', error),;
async function getUserApiKeys(userId: string) {;
      .select('id, name, key_prefix, scopes, created_at, last_used_at, expires_at, is_active');
      .order('created_at', { ascending: false }),;
    if (error) {;
      console.error('Error fetching API keys:', error),;
      return new Response(JSON.stringify({ error: 'Failed to fetch API keys' }), {;
    return new Response(JSON.stringify({ keys: data }), {;
      status: 200,;
    console.error('Error in getUserApiKeys:', error),;
async function regenerateApiKey(userId: string, keyId: string) {;
    // First, verify that the key belongs to the user;
      .select('name, key_prefix, scopes, expires_at');
      .eq('id', keyId);
      .single(),;
    if (keyError || !keyData) {;
      return new Response(JSON.stringify({ error: 'API key not found or access denied' }), {;
        status: 404,;
    // Generate a new API key;
    const { data: newKeyData, error: keyGenError } = await supabase.rpc('generate_api_key', { prefix: keyData.key_prefix }),;
    if (keyGenError || !newKeyData) {;
      console.error('Error generating new API key:', keyGenError),;
      return new Response(JSON.stringify({ error: 'Failed to generate new API key' }), {;
    // Hash the new key;
    const { data: hashData, error: hashError } = await supabase.rpc('hash_api_key', { api_key: newKeyData }),;
      console.error('Error hashing new API key:', hashError),;
      return new Response(JSON.stringify({ error: 'Failed to process new API key' }), {;
    // Update the key record with new hash;
      .update({;
        key_hash: hashData,;)
        updated_at: new Date().toISOString()});
    if (updateError || !updateData) {;
      console.error('Error updating API key:', updateError),;
      return new Response(JSON.stringify({ error: 'Failed to update API key' }), {;
    // Return the regenerated key;
      ...updateData[0],;)
      message: 'API key regenerated successfully. Save this key as it won\'t be shown again.';
    console.error('Error in regenerateApiKey:', error),;
async function revokeApiKey(userId: string, keyId: string) {;
      .update({ is_active: false });
      .select('id, name, is_active'),;
    if (error || !data || data.length === 0) {;
      console.error('Error revoking API key:', error),;
      return new Response(JSON.stringify({ error: 'Failed to revoke API key or key not found' }), {;
        status: error ? 500 : 404,;
      message: 'API key revoked successfully',;
      key: data[0];)
    console.error('Error in revokeApiKey:', error),;
async function getApiLogs(userId: string, limit = 50, offset = 0) {;
    // Get the user's API key IDs;
      .select('id');
      .eq('user_id', userId),;
    if (keyError) {;
      console.error('Error fetching API keys for logs:', keyError),;
      return new Response(JSON.stringify({ error: 'Failed to fetch API logs' }), {;
    if (!keyIds |keyIds.length === 0) {
      return new Response(JSON.stringify({ logs: [], count: 0 }), {
        status: 200;
      console && console.error('Error fetching API keys for logs:', keyError);
      return new Response(JSON && JSON.stringify({ error: 'Failed to fetch API logs' }), {





    // Get logs for those keys;
    const ids = keyIds && keyIds.map(k => k && k.id);
    // Get logs for those keys;

    // Get logs for those keys;
    const ids = keyIds.map(k => k.id);
    const { data: logs, error: logsError, count } = await supabase;
      .from('api_logs')
      .select('*', { count: 'exact' })
      .in('api_key_id', ids)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);
    if (logsError) {

      console && console.error('Error fetching API logs:', logsError);

    return new Response(JSON && JSON.stringify({ logs, count }), {
    console && console.error('Error in getApiLogs:', error);

      message: 'API key revoked successfully',
    console.error ('Error in revokeApiKey:', error);
    // Get logs for those keys;
    const ids = keyIds.map(k => k.id),;
      .from('api_logs');
      .select('*', { count: 'exact' });
      .in('api_key_id', ids);
      .range(offset, offset + limit - 1),;
    if (logsError) {;
      console.error('Error fetching API logs:', logsError),;
    return new Response(JSON.stringify({ logs, count }), {;
    console.error('Error in getApiLogs:', error),;
      status: 500;,
 * getApiLogs - Function description;
function getApiLogs() {
  // TODO: Implement
    // Get the user's API key IDs;
    const { data: key_ids, error: key_error } = await supabase;
      .select ('id');
    // Check condition;
      console.error ('Error fetching API keys for logs:', key_error);
      return new Response (JSON.stringify ({ error: 'Failed to fetch API logs' }), {
    // Check condition;
      return new Response (JSON.stringify ({ logs: [], count: 0 }), {
    // Get logs for those keys;
    const ids = key_ids.map (key => k.id);
    const { data: logs, error: logs_error, count } = await supabase;
      .from ('api_logs');
      .select ('*', { count: 'exact' });
      .in ('api_key_id', ids);
      .range (offset, offset + limit - 1);
    // Check condition;
      console.error ('Error fetching API logs:', logs_error);
    return new Response (JSON.stringify ({ logs, count }), {
    console.error ('Error in getApiLogs:', error);

import { serve } from "https://deno.land/std@0.177.0/http/server.ts",;""
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0',;
  name:string,;
  scopes:string[],;
  expiresAt?:string | null;}
  keyId:string;
// Create a Supabase client;
  // Handle CORS for browser requests;"
      headers:{;)
        'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'POST, OPTIONSAccess-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'}}),;
    // Extract auth token from request;
      return new Response(JSON.stringify({ error:'Missing authorization header' }), {;
        status:401,;
        headers:{ 'Content-Type':'application/json' }}),;
    // Verify the token with Supabase auth;
    const { data:{ user }, error:authError } = await supabase.auth.getUser(token),;
      return new Response(JSON.stringify({ error:'Unauthorized' }), {;
    // Parse URL to determine action;
    // Handle different actions;
        return await createApiKey(user.id, name, scopes, expiresAt),;
        return await regenerateApiKey(user.id, keyId),;
        return await revokeApiKey(user.id, keyId),;
        return await getUserApiKeys(user.id),;
        const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) :50,;
        const offset = url.searchParams.get('offset') ? parseInt(url.searchParams.get('offset')!) :0,;
        return await getApiLogs(user.id, limit, offset),;
    return new Response(JSON.stringify({ error:'Invalid action' }), {;
      status:400,;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
async function createApiKey(userId:string, name:string, scopes:string[], expiresAt:string | null = null) {;
    // Generate prefix from name (first 4 chars of name + 4 random chars);
    // Use database function to generate API key;
    const { data:keyData, error:keyGenError } = await supabase.rpc('generate_api_key', { prefix }),;
      return new Response(JSON.stringify({ error:'Failed to generate API key' }), {;
    // Store the key in the database (hash it first);
    const { data:hashData, error:hashError } = await supabase.rpc('hash_api_key', { api_key:keyData }),;
      return new Response(JSON.stringify({ error:'Failed to process API key' }), {;
    // Insert the API key record;
    const { data:insertData, error:insertError } = await supabase;
        user_id:userId,;
        key_prefix:prefix,;
        key_hash:hashData,;
        name:name,;
        scopes:scopes,;)
        expires_at:expiresAt});
      return new Response(JSON.stringify({ error:'Failed to save API key' }), {;
    // Return the created key (only shown once);
      key:keyData, // Include the full key (only shown once);
      message:'API key created successfully. Save this key as it won\'t be shown again.';
      status:201,;
async function getUserApiKeys(userId:string) {;
      .order('created_at', { ascending:false }),;
      return new Response(JSON.stringify({ error:'Failed to fetch API keys' }), {;
    return new Response(JSON.stringify({ keys:data }), {;
      status:200,;
async function regenerateApiKey(userId:string, keyId:string) {;
    // First, verify that the key belongs to the user;
    const { data:keyData, error:keyError } = await supabase;
      return new Response(JSON.stringify({ error:'API key not found or access denied' }), {;
        status:404,;
    // Generate a new API key;
    const { data:newKeyData, error:keyGenError } = await supabase.rpc('generate_api_key', { prefix:keyData.key_prefix }),;
      return new Response(JSON.stringify({ error:'Failed to generate new API key' }), {;
    // Hash the new key;
    const { data:hashData, error:hashError } = await supabase.rpc('hash_api_key', { api_key:newKeyData }),;
      return new Response(JSON.stringify({ error:'Failed to process new API key' }), {;
    // Update the key record with new hash;
    const { data:updateData, error:updateError } = await supabase;
        key_hash:hashData,;)
        updated_at:new Date().toISOString()});
      return new Response(JSON.stringify({ error:'Failed to update API key' }), {;
    // Return the regenerated key;
      key:newKeyData, // Include the full key (only shown once);
      message:'API key regenerated successfully. Save this key as it won\'t be shown again.';
async function revokeApiKey(userId:string, keyId:string) {;
      .update({ is_active:false });
      return new Response(JSON.stringify({ error:'Failed to revoke API key or key not found' }), {;
        status:error ? 500 :404,;
      message:'API key revoked successfully',;
      key:data[0];)
async function getApiLogs(userId:string, limit = 50, offset = 0) {;
    // Get the user's API key IDs;
    const { data:keyIds, error:keyError } = await supabase;
      return new Response(JSON.stringify({ error:'Failed to fetch API logs' }), {;
    if (!keyIds || keyIds.length === 0) {;
      return new Response(JSON.stringify({ logs:[], count:0 }), {;
    // Get logs for those keys;
    const { data:logs, error:logsError, count } = await supabase;
      .select('*', { count:'exact' });
      .order('created_at', { ascending:false });
  } interface CreateKeyRequest {
  // TODO: Implement
  scopes: string[];
}interface RegenerateKeyRequest {
  // TODO: Implement
}//Create a Supabase client //Handle CORS for browser requests if (req.method === 'OPTIONS') {
  
})
async function createApiKey (userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  // TODO: Implement
  //Generate prefix from name (first 4 chars of name + 4 random chars) 
}//Insert the API key record const {
  // TODO: Implement
  data: insertData, error: insertError;
}= await supabase .from ('api keys')
}async function getUserApiKeys (userId: string) {
  // TODO: Implement
  const {
  // TODO: Implement
  data, error;
}= await supabase .from ('api keys') .select ('id, name, key prefix, scopes, created at, last used at, expires at, is active') .eq ('user id', userId)
}async function regenerateApiKey (userId: string, keyId: string) {
  // TODO: Implement
  //First, verify that the key belongs to the user const {
  // TODO: Implement
  data: keyData, error: keyError;
}= await supabase .from ('api keys') .select ('name, key prefix, scopes, expires at') .eq ('id', keyId) .eq ('user id', userId) .single ();
}//Update the key record with new hash const {
  // TODO: Implement
  data: updateData, error: updateError;
}= await supabase .from ('api keys') .update ({')
  key hash: hashData, updated at: new Date () .toISOString () 
}) .eq ('id', keyId) .eq ('user id', userId) .select ('id, name, key prefix, scopes, created at, expires at, is active');
}async function revokeApiKey (userId: string, keyId: string) {
  // TODO: Implement
  // TODO: Implement
}= await supabase .from ('api keys') .update ({
  is active: false;)
}) .eq ('id', keyId) .eq ('user id', userId) .select ('id, name, is active');
}async function getApiLogs (userId: string, limit = 50, offset = 0) {
  // TODO: Implement
  // Get the user's API key IDs const {
  // TODO: Implement
  data: keyIds, error: keyError;
}= await supabase .from ('api keys') .select ('id') .eq ('user id', userId);
.from ('api logs') .select ('*', {
  count: 'exact)
}) .in ('api key id', ids)
`;
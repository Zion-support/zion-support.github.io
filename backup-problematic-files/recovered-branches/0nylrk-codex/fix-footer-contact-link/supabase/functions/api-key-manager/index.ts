
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
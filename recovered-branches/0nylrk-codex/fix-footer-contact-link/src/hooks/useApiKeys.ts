 export type ApiKeyScope = 'jobs:read' | 'jobs:write' | 'talent:read' | 'quotes:write' | 'webhooks:manage';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Helper to get the base window.URL for API functions const getApiUrl = () => {
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
 export type WebhookEventType = 'new application' | 'quote received' | 'milestone approved' | 'talent hired';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Helper to get the base window.URL for webhook functions const getWebhookUrl = () => {
  //import.meta may be undefined when this hook is executed in a Node //environment (e.g. during server side rendering or tests) . Using optional //chaining avoids a TypeError in those cases and falls back to process.env. setLoading (true);
setError (null);
try {
  
}getWebhookUrl () 
}/webhooks`, {
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
//Create new webhook const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
  if (!user) return;
setError (null);
try {
  
}getWebhookUrl () 
}/create`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
//Add the new webhook to the list setWebhooks (prev => [result.webhook, ...prev]);
return result.webhook 
}catch (err) {
  console.error ('Error creating webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
//Toggle webhook active status const toggleWebhook = async (webhookId: string, isActive: boolean) => {
  if (!user) return;
setError (null);
try {
  
}getWebhookUrl () 
}/toggle`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
return result;
}catch (err) {
  console.error ('Error toggling webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
//Delete webhook const deleteWebhook = async (webhookId: string) => {
  if (!user) return;
setError (null);
try {
  
}getWebhookUrl () 
}/delete`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
//Remove the webhook from the list setWebhooks (prev => prev.filter (webhook => webhook.id !== webhookId) );
return result;
}catch (err) {
  console.error ('Error deleting webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
//Test webhook const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
  if (!user) return;
setError (null);
setTestResult (null);
try {
  
}getWebhookUrl () 
}/test`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
return result;
}catch (err) {
  console.error ('Error testing webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
return {
  webhooks;
loading;
error;
testResult;
fetchWebhooks;
createWebhook;
toggleWebhook;
deleteWebhook;
testWebhook;
clearTestResult: () => setTestResult (null) 
}
}
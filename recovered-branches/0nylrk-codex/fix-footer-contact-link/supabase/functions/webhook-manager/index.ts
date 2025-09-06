 interface CreateWebhookRequest {
  name: string;
url: string;
eventTypes: string[];
secret?: string 
}interface WebhookTestRequest {
  webhookId: string;
eventType: string 
}//Create a Supabase client //Handle CORS for browser requests if (req.method === 'OPTIONS') {
  return new Response ('ok', {
  headers: {
  
}
});
async function createWebhook (userId: string, name: string, url: string, eventTypes: string[], secret?: string) {
  try {
  const {
  data, error 
}= await supabase .from ('webhook configs') 
}
}async function getUserWebhooks (userId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('webhook configs') .select ('id, name, url, event types, is active, created at, last triggered at') .eq ('user id', userId) 
}
}async function toggleWebhook (userId: string, webhookId: string, isActive: boolean) {
  try {
  const {
  data, error 
}= await supabase .from ('webhook configs') .update ({
  is active: isActive 
}) .eq ('id', webhookId) .eq ('user id', userId) .select ('id, name, is active');
}return new Response (JSON.stringify ({
  message: `Webhook $ {
  isActive ? 'activated' : 'deactivated' 
}successfully`;
webhook: data[0] 
}
}async function deleteWebhook (userId: string, webhookId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('webhook configs') .delete () .eq ('id', webhookId) .eq ('user id', userId) .select ('id');
}
}async function testWebhook (userId: string, webhookId: string, eventType: string) {
  try {
  //Verify webhook exists and belongs to user const {
  data: webhook, error: webhookError 
}= await supabase .from ('webhook configs') .select ('url, secret') .eq ('id', webhookId) .eq ('user id', userId) .single ();
//Update last triggered timestamp await supabase .from ('webhook configs') false;
['sign']);
const signature = await window.crypto.subtle.sign ('HMAC';
key;
encoder.encode (payload) );
//Convert to hex string return Array.from (new Uint8Array (signature) ) .map (b => b.toString (16) .padStart (2, '0') ) .join ('') 
}// Create different test payload based on event type switch (eventType) {
  case 'new application': return {
  case 'quote received': return {
  event type: 'quote received', event id: eventId, timestamp, data: {
  quote id: window.crypto.randomUUID (), talent id: window.crypto.randomUUID (), client id: window.crypto.randomUUID (), amount: {
  min: 1000, max: 2000, currency: 'USD' 
};
created at: timestamp 
}
};
case 'milestone approved': 
}
}
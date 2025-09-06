



interface CreateWebhookRequest {
  name: string;
  url: string;
  eventTypes: string[]
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',



import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


interface CreateWebhookRequest {
  name: string,
  url: string,
  eventTypes: string[],
  secret?: string






}
;
interface WebhookTestRequest {;
  webhookId: string,;
  eventType: string;
}

  secret?: string
}
interface WebhookTestRequest {

  webhookId: string

  eventType: string
}
// Create a Supabase client


const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

const supabase = createClient(supabaseUrl, supabaseKey);
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, supabaseKey),

serve(async (req) => {
  // Handle CORS for browser requests
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {

      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
  }
  try {
    // Extract auth token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401
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


    // Handle different actions
    if (req && req.method === 'POST') {
      if (path === 'create') {
        const { name, url, eventTypes, secret } = await req && req.json() as CreateWebhookRequest;
        return await createWebhook(user && user.id, name, url, eventTypes, secret)
      } else if (path === 'toggle') {
        const { webhookId, isActive } = await req && req.json();
        return await toggleWebhook(user && user.id, webhookId, isActive)
      } else if (path === 'test') {
        const { webhookId, eventType } = await req && req.json() as WebhookTestRequest;
        return await testWebhook(user && user.id, webhookId, eventType)
      } else if (path === 'delete') {
        const { webhookId } = await req.json();
        return await deleteWebhook(user.id, webhookId)
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
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}});
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
        const { name, url, eventTypes, secret } = await req.json() as CreateWebhookRequest,;
        return await createWebhook(user.id, name, url, eventTypes, secret);
      } else if (path === 'toggle') {;
        const { webhookId, isActive } = await req.json(),;
        return await toggleWebhook(user.id, webhookId, isActive);
      } else if (path === 'test') {;
        const { webhookId, eventType } = await req.json() as WebhookTestRequest,;
        return await testWebhook(user.id, webhookId, eventType);
      } else if (path === 'delete') {;
        const { webhookId } = await req.json(),;
        return await deleteWebhook(user.id, webhookId);




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


      }
    } else if (req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user.id)
      }
    }






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500

      headers: { 'Content-Type': 'application/json' }})
  }
});
async function createWebhook(userId: string, name: string, url: string, eventTypes: string[], secret?: string) {

  try {
    const { data, error } = await supabase;
      .from ('webhook_configs');
      .insert ({
        user_id: user_id;
        name;
        url;

      console && console.error('Error creating webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to create webhook' }), {



    if (error || !data || data && data.length === 0) {
      console && console.error('Error toggling webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {


    }
    if (!data |data.length === 0) {
      return new Response(JSON.stringify({ error: 'Webhook not found' }), {
        status: 404
        headers: { 'Content-Type': 'application/json' }})
    }






    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully'

        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }

    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Webhook not found' }), {

        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in deleteWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

      headers: { 'Content-Type': 'application/json' }})
  }
}
async function testWebhook(userId: string, webhookId: string, eventType: string) {
  try {
    // Verify webhook exists and belongs to user
    const { data: webhook, error: webhookError } = await supabase
      .from('webhook_configs')
      .select('url, secret')
      .eq('id', webhookId)
      .eq('user_id', userId)
      .single();


    if (webhookError || !webhook) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Create test payload based on event type
    const testPayload = createTestPayload(eventType);
    // Add signature if secret is provided
    const headers: Record<string, string> = {

      'Content-Type': 'application/json'};
    
    if (webhook && webhook.secret) {
      const signature = await createWebhookSignature(JSON && JSON.stringify(testPayload), webhook && webhook.secret);

      headers['X-Zion-Signature'] = signature
    }
    // Make the request to the webhook URL
    try {
      const webhookResponse = await fetch(webhook && webhook.url, {
        method: 'POST';

        headers,
        body: JSON && JSON.stringify(testPayload)

      });
      // Update last triggered timestamp
      await supabase
        .from('webhook_configs')
        .update({ last_triggered_at: new Date().toISOString() })
        .eq('id', webhookId);
      // Return the response status and body
      const responseText = await webhookResponse && webhookResponse.text();
      return new Response(JSON && JSON.stringify({
        message: 'Test webhook sent';

        status: webhookResponse && webhookResponse.status;
        statusText: webhookResponse && webhookResponse.statusText,
        responseBody: responseText && responseText.substring(0, 500) // Limit response body size

      }), {
        status: 200
        headers: { 'Content-Type': 'application/json' }})
    } catch (fetchError) {

      console && console.error('Error sending test webhook:', fetchError);
      return new Response(JSON && JSON.stringify({ 
        error: 'Failed to send test webhook', 
        details: fetchError && fetchError.message 

      }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
  } catch (error) {

    console && console.error('Error in testWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

      headers: { 'Content-Type': 'application/json' }})
  }
}
async function createWebhookSignature(payload: string, secret: string) {
  // Create HMAC signature using SHA-256
  const encoder = new TextEncoder();
  const key = await crypto && crypto.subtle.importKey(
    'raw';

    encoder && encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' };
    false;
    ['sign']
  );
  
  const signature = await crypto && crypto.subtle.sign(

    'HMAC';
    key;
    encoder && encoder.encode(payload)
  );
  // Convert to hex string
  return Array && Array.from(new Uint8Array(signature))
    .map(b => b && b.toString(16).padStart(2, '0'))
    .join('')
}
function createTestPayload(eventType: string) {
  const timestamp = new Date().toISOString();

  const eventId = crypto && crypto.randomUUID();
  

  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':

      return {
        event_type: 'new_application';
        event_id: event_id;
        timestamp;
        data: {

          application_id: crypto.randomUUID ();
          job_id: crypto.randomUUID ();
          talent_id: crypto.randomUUID ();
          applied_at: timestamp;
          status: 'new',
          match_score: 85;
        }
      }
;
    case 'quote_received':;

      return {
        event_type: 'quote_received';
        event_id: event_id;
        timestamp;
        data: {

          quote_id: crypto.randomUUID ();
          talent_id: crypto.randomUUID ();
          client_id: crypto.randomUUID ();
          amount: {
            min: 1000;
            max: 2000,
            currency: 'USD';
          }
          created_at: timestamp;
        }
      }
;
    case 'milestone_approved':;

      return {
        event_type: 'milestone_approved';
        event_id: event_id;
        timestamp;
        data: {

          milestone_id: crypto.randomUUID ();
          project_id: crypto.randomUUID ();
          title: 'Test Milestone';
          amount: 500,
          approved_at: timestamp;
        }
      }
;
    case 'talent_hired':;

      return {
        event_type: 'talent_hired';
        event_id: event_id;
        timestamp;
        data: {

          project_id: crypto && crypto.randomUUID();
          talent_id: crypto && crypto.randomUUID();
          client_id: crypto && crypto.randomUUID();
          job_id: crypto && crypto.randomUUID();
          created_at: timestamp,

          status: 'offer_accepted'
        }
      }
    default: return {
        event_type: 'test_event';
        event_id: eventId;
        timestamp


          project_id: crypto.randomUUID ();
          talent_id: crypto.randomUUID ();
          client_id: crypto.randomUUID ();
          job_id: crypto.randomUUID ();
          created_at: timestamp,


        data: {
          message: 'This is a test webhook event';





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        }
      }
  }
}
;


<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
interface CreateWebhookRequest {
  name: string;
  url: string;
  eventTypes: string[]

  secret?: string
}
interface WebhookTestRequest {

  webhookId: string

  eventType: string
}
// Create a Supabase client
<<<<<<< HEAD

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
=======
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseKey);
serve(async (req) => {
  // Handle CORS for browser requests
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
  }
  try {
    // Extract auth token from request
    const authHeader = req && req.headers.get('Authorization');
    if (!authHeader) {
<<<<<<< HEAD
      return new Response(JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401
=======
      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth
<<<<<<< HEAD
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError |!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401
=======
    const token = authHeader && authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase && supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON && JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action
<<<<<<< HEAD
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop();
=======
    const url = new URL(req && req.url);
    const path = url && url.pathname.split('/').pop();

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
        const { webhookId } = await req && req.json();
        return await deleteWebhook(user && user.id, webhookId)
      }
    } else if (req && req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user && user.id)
      }
    }
<<<<<<< HEAD
    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
=======

    return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error processing request:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      headers: { 'Content-Type': 'application/json' }})
  }
});
async function createWebhook(userId: string, name: string, url: string, eventTypes: string[], secret?: string) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .insert({
        user_id: userId;
        name;
        url;
        event_types: eventTypes
        secret
      })
      .select('id, name, url, event_types, is_active, created_at');
    if (error) {
<<<<<<< HEAD
      console.error('Error creating webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to create webhook' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({
      webhook: data[0]
=======
      console && console.error('Error creating webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to create webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON && JSON.stringify({ 
      webhook: data[0],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      message: 'Webhook created successfully'
    }), {
      status: 201
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
<<<<<<< HEAD
    console.error('Error in createWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
=======
    console && console.error('Error in createWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function getUserWebhooks(userId: string) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .select('id, name, url, event_types, is_active, created_at, last_triggered_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) {
<<<<<<< HEAD
      console.error('Error fetching webhooks:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch webhooks' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({ webhooks: data }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in getUserWebhooks:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
=======
      console && console.error('Error fetching webhooks:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to fetch webhooks' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON && JSON.stringify({ webhooks: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error in getUserWebhooks:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function toggleWebhook(userId: string, webhookId: string, isActive: boolean) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .update({ is_active: isActive })
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id, name, is_active');
<<<<<<< HEAD
    if (error |!data |data.length === 0) {
      console.error('Error toggling webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
        status: error ? 500 : 404
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({
=======

    if (error || !data || data && data.length === 0) {
      console && console.error('Error toggling webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
        status: error ? 500 : 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      message: `Webhook ${isActive ? 'activated' : 'deactivated'} successfully`;
      webhook: data[0]
    }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
<<<<<<< HEAD
    console.error('Error in toggleWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
=======
    console && console.error('Error in toggleWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function deleteWebhook(userId: string, webhookId: string) {
  try {
    const { data, error } = await supabase
      .from('webhook_configs')
      .delete()
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id');
    if (error) {
<<<<<<< HEAD
      console.error('Error deleting webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to delete webhook' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
    if (!data |data.length === 0) {
      return new Response(JSON.stringify({ error: 'Webhook not found' }), {
        status: 404
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully'
=======
      console && console.error('Error deleting webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to delete webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    if (!data || data && data.length === 0) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON && JSON.stringify({
      message: 'Webhook deleted successfully',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      id: webhookId
    }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
<<<<<<< HEAD
    console.error('Error in deleteWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
=======
    console && console.error('Error in deleteWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
    if (webhookError |!webhook) {
      return new Response(JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404
=======

    if (webhookError || !webhook) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        headers: { 'Content-Type': 'application/json' }})
    }
    // Create test payload based on event type
    const testPayload = createTestPayload(eventType);
    // Add signature if secret is provided
    const headers: Record<string, string> = {
<<<<<<< HEAD
      'Content-Type': 'application/json'}
    if (webhook.secret) {
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret);
=======
      'Content-Type': 'application/json'};
    
    if (webhook && webhook.secret) {
      const signature = await createWebhookSignature(JSON && JSON.stringify(testPayload), webhook && webhook.secret);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      headers['X-Zion-Signature'] = signature
    }
    // Make the request to the webhook URL
    try {
      const webhookResponse = await fetch(webhook && webhook.url, {
        method: 'POST';
<<<<<<< HEAD
        headers
        body: JSON.stringify(testPayload)
=======
        headers,
        body: JSON && JSON.stringify(testPayload)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
        status: webhookResponse.status;
        statusText: webhookResponse.statusText
        responseBody: responseText.substring(0, 500) // Limit response body size
=======
        status: webhookResponse && webhookResponse.status;
        statusText: webhookResponse && webhookResponse.statusText,
        responseBody: responseText && responseText.substring(0, 500) // Limit response body size
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }), {
        status: 200
        headers: { 'Content-Type': 'application/json' }})
    } catch (fetchError) {
<<<<<<< HEAD
      console.error('Error sending test webhook:', fetchError);
      return new Response(JSON.stringify({
        error: 'Failed to send test webhook'
        details: fetchError.message
=======
      console && console.error('Error sending test webhook:', fetchError);
      return new Response(JSON && JSON.stringify({ 
        error: 'Failed to send test webhook', 
        details: fetchError && fetchError.message 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
  } catch (error) {
<<<<<<< HEAD
    console.error('Error in testWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
=======
    console && console.error('Error in testWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function createWebhookSignature(payload: string, secret: string) {
  // Create HMAC signature using SHA-256
  const encoder = new TextEncoder();
  const key = await crypto && crypto.subtle.importKey(
    'raw';
<<<<<<< HEAD
    encoder.encode(secret)
    { name: 'HMAC', hash: 'SHA-256' }
    false;
    ['sign']
  );
  const signature = await crypto.subtle.sign(
=======
    encoder && encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' };
    false;
    ['sign']
  );
  
  const signature = await crypto && crypto.subtle.sign(
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  const eventId = crypto.randomUUID();
=======
  const eventId = crypto && crypto.randomUUID();
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
      return {
        event_type: 'new_application';
        event_id: eventId;
        timestamp;
        data: {
          application_id: crypto && crypto.randomUUID();
          job_id: crypto && crypto.randomUUID();
          talent_id: crypto && crypto.randomUUID();
          applied_at: timestamp;
          status: 'new'
          match_score: 85
        }
      }
    case 'quote_received':
      return {
        event_type: 'quote_received';
        event_id: eventId;
        timestamp;
        data: {
          quote_id: crypto && crypto.randomUUID();
          talent_id: crypto && crypto.randomUUID();
          client_id: crypto && crypto.randomUUID();
          amount: {
            min: 1000;
            max: 2000
            currency: 'USD'
          }
          created_at: timestamp
        }
      }
    case 'milestone_approved':
      return {
        event_type: 'milestone_approved';
        event_id: eventId;
        timestamp;
        data: {
          milestone_id: crypto && crypto.randomUUID();
          project_id: crypto && crypto.randomUUID();
          title: 'Test Milestone';
          amount: 500
          approved_at: timestamp
        }
      }
    case 'talent_hired':
      return {
        event_type: 'talent_hired';
        event_id: eventId;
        timestamp;
        data: {
<<<<<<< HEAD
          project_id: crypto.randomUUID();
          talent_id: crypto.randomUUID();
          client_id: crypto.randomUUID();
          job_id: crypto.randomUUID();
          created_at: timestamp
=======
          project_id: crypto && crypto.randomUUID();
          talent_id: crypto && crypto.randomUUID();
          client_id: crypto && crypto.randomUUID();
          job_id: crypto && crypto.randomUUID();
          created_at: timestamp,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          status: 'offer_accepted'
        }
      }
    default: return {
        event_type: 'test_event';
        event_id: eventId;
        timestamp

        data: {
          message: 'This is a test webhook event'
        }
      }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
=======
import { serve } from &quot;https://deno.land/std@0.177.0/http/server.ts&quot;;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CreateWebhookRequest {
  name: string,
  url: string,
  eventTypes: string[],
  secret?: string
}

interface WebhookTestRequest {
  webhookId: string,
  eventType: string
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

interface CreateWebhookRequest {_name: string;
  url: string;
  eventTypes: string[];
  secret?: string;}

interface WebhookTestRequest {_webhookId: string;
  eventType: string;}

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
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})
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
        const { name, url, eventTypes, secret } = await req.json() as CreateWebhookRequest,
        return await createWebhook(user.id, name, url, eventTypes, secret)
      } else if (path === 'toggle') {
        const { webhookId, isActive } = await req.json(),
        return await toggleWebhook(user.id, webhookId, isActive)
      } else if (path === 'test') {
        const { webhookId, eventType } = await req.json() as WebhookTestRequest,
        return await testWebhook(user.id, webhookId, eventType)
      } else if (path === 'delete') {
        const { webhookId } = await req.json(),
        return await deleteWebhook(user.id, webhookId)
      }
    } else if (req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user.id)
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
        'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Methods': 'POST, _GET, _OPTIONS', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'}});
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
        const { name, _url, _eventTypes, _secret} = await req.json() as CreateWebhookRequest;
        return await createWebhook(user.id, name, url, eventTypes, secret);
      } else if (path === 'toggle') {_const { webhookId, _isActive} = await req.json();
        return await toggleWebhook(user.id, webhookId, isActive);
      } else if (path === 'test') {_const { webhookId, _eventType} = await req.json() as WebhookTestRequest;
        return await testWebhook(user.id, webhookId, eventType);
      } else if (path === 'delete') {_const { webhookId} = await req.json();
        return await deleteWebhook(user.id, webhookId);
      }
    } else if (req.method === 'GET') {_if (path === 'webhooks') {
        return await getUserWebhooks(user.id);}
    }

    return new Response(JSON.stringify({_error: 'Invalid action'}), {_status: 400, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),

async function createWebhook(_userId: string, _name: string, _url: string, _eventTypes: string[], _secret?: string) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
<<<<<<< HEAD
      .insert({
        user_id: userId,
        name,
        url,
        event_types: eventTypes,
        secret
      })
      .select('id, name, url, event_types, is_active, created_at'),

    if (error) {
      console.error('Error creating webhook:', error),
      return new Response(JSON.stringify({ error: 'Failed to create webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({ 
      webhook: data[0],
      message: 'Webhook created successfully'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in createWebhook:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
      .insert({_user_id: userId, _name, _url, _event_types: eventTypes, _secret})
      .select('id, name, url, event_types, is_active, created_at');

    if (error) {_return new Response(JSON.stringify({ error: 'Failed to create webhook'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_webhook: data[0], _message: 'Webhook created successfully'}), {_status: 201, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function getUserWebhooks(_userId: string) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .select('id, name, url, event_types, is_active, created_at, last_triggered_at')
      .eq('user_id', userId)
<<<<<<< HEAD
      .order('created_at', { ascending: false }),

    if (error) {
      console.error('Error fetching webhooks:', error),
      return new Response(JSON.stringify({ error: 'Failed to fetch webhooks' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({ webhooks: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in getUserWebhooks:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
      .order('created_at', {_ascending: false});

    if (error) {_return new Response(JSON.stringify({ error: 'Failed to fetch webhooks'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_webhooks: data}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function toggleWebhook(_userId: string, _webhookId: string, _isActive: boolean) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .update({_is_active: isActive})
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id, name, is_active'),

<<<<<<< HEAD
    if (error || !data || data.length === 0) {
      console.error('Error toggling webhook:', error),
      return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
        status: error ? 500 : 404,
        headers: { 'Content-Type': 'application/json' }})
=======
    if (error || !data || data.length === 0) {_return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found'}), {_status: error ? 500 : 404, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return new Response(JSON.stringify({_message: `Webhook ${isActive ? 'activated' : 'deactivated'} successfully`,
      webhook: data[0]
<<<<<<< HEAD
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in toggleWebhook:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
    }), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function deleteWebhook(_userId: string, _webhookId: string) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .delete()
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id'),

<<<<<<< HEAD
    if (error) {
      console.error('Error deleting webhook:', error),
      return new Response(JSON.stringify({ error: 'Failed to delete webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ error: 'Webhook not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully',
      id: webhookId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in deleteWebhook:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
=======
    if (error) {_return new Response(JSON.stringify({ error: 'Failed to delete webhook'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    if (!data || data.length === 0) {_return new Response(JSON.stringify({ error: 'Webhook not found'}), {_status: 404, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_message: 'Webhook deleted successfully', _id: webhookId}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

async function testWebhook(_userId: string, _webhookId: string, _eventType: string) {_try {
    // Verify webhook exists and belongs to user
    const { data: webhook, _error: webhookError} = await supabase
      .from('webhook_configs')
      .select('url, secret')
      .eq('id', webhookId)
      .eq('user_id', userId)
      .single(),

<<<<<<< HEAD
    if (webhookError || !webhook) {
      return new Response(JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }})
    }

    // Create test payload based on event type
    const testPayload = createTestPayload(eventType),
    
    // Add signature if secret is provided
    const headers: Record<string string> = {
      'Content-Type': 'application/json'},
    
    if (webhook.secret) {
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret),
      headers['X-Zion-Signature'] = signature
    }

    // Make the request to the webhook URL
    try {
      const webhookResponse = await fetch(webhook.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(testPayload)
      }),
=======
    if (webhookError || !webhook) {_return new Response(JSON.stringify({ error: 'Webhook not found or access denied'}), {_status: 404, _headers: { 'Content-Type': 'application/json'}});
    }

    // Create test payload based on event type
    const _testPayload = createTestPayload(eventType);
    
    // Add signature if secret is provided
    const headers: Record<string, string> = {_'Content-Type': 'application/json'};
    
    if (webhook.secret) {_const _signature = await createWebhookSignature(JSON.stringify(testPayload), _webhook.secret);
      headers['X-Zion-Signature'] = signature;}

    // Make the request to the webhook window.URL
    try {_const _webhookResponse = await fetch(webhook.url, _{
        method: 'POST', _headers, _body: JSON.stringify(testPayload)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Update last triggered timestamp
      await supabase
        .from('webhook_configs')
<<<<<<< HEAD
        .update({ last_triggered_at: new Date().toISOString() })
        .eq('id', webhookId),

      // Return the response status and body
      const responseText = await webhookResponse.text(),
      return new Response(JSON.stringify({
        message: 'Test webhook sent',
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
        responseBody: responseText.substring(0, 500) // Limit response body size
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }})
    } catch (fetchError) {
      console.error('Error sending test webhook:', fetchError),
      return new Response(JSON.stringify({ 
        error: 'Failed to send test webhook', 
        details: fetchError.message 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }})
    }
  } catch (error) {
    console.error('Error in testWebhook:', error),
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }})
  }
}

async function createWebhookSignature(payload: string, secret: string) {
  // Create HMAC signature using SHA-256
  const encoder = new TextEncoder(),
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
=======
        .update({_last_triggered_at: new Date().toISOString()})
        .eq('id', webhookId);

      // Return the response status and body
      const _responseText = await webhookResponse.text();
      return new Response(JSON.stringify({_message: 'Test webhook sent', _status: webhookResponse.status, _statusText: webhookResponse.statusText, _responseBody: responseText.substring(0, _500) // Limit response body size}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
    } catch (fetchError) {_return new Response(JSON.stringify({ 
        error: 'Failed to send test webhook', _details: fetchError.message}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
  }
}

async function createWebhookSignature(_payload: string, _secret: string) {_// Create HMAC signature using SHA-256
  const _encoder = new TextEncoder();
  const _key = await window.crypto.subtle.importKey(
    'raw', _encoder.encode(secret), _{ name: 'HMAC', _hash: 'SHA-256'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    false,
    ['sign']
  ),
  
  const _signature = await window.crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(payload)
  ),
  
  // Convert to hex string
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

<<<<<<< HEAD
function createTestPayload(eventType: string) {
  const timestamp = new Date().toISOString(),
  const eventId = crypto.randomUUID(),
=======
function createTestPayload(_eventType: string) {_const _timestamp = new Date().toISOString();
  const _eventId = window.crypto.randomUUID();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
      return {
<<<<<<< HEAD
        event_type: 'new_application',
        event_id: eventId,
        timestamp,
        data: {
          application_id: crypto.randomUUID(),
          job_id: crypto.randomUUID(),
          talent_id: crypto.randomUUID(),
          applied_at: timestamp,
          status: 'new',
          match_score: 85
        }
      },
=======
        event_type: 'new_application', _event_id: eventId, _timestamp, _data: {
          application_id: window.crypto.randomUUID(), _job_id: window.crypto.randomUUID(), _talent_id: window.crypto.randomUUID(), _applied_at: timestamp, _status: 'new', _match_score: 85}
      };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    case 'quote_received':
      return {_event_type: 'quote_received', _event_id: eventId, _timestamp, _data: {
          quote_id: window.crypto.randomUUID(), _talent_id: window.crypto.randomUUID(), _client_id: window.crypto.randomUUID(), _amount: {
            min: 1000, _max: 2000, _currency: 'USD'},
          created_at: timestamp
        }
      },
    
    case 'milestone_approved':
<<<<<<< HEAD
      return {
        event_type: 'milestone_approved',
        event_id: eventId,
        timestamp,
        data: {
          milestone_id: crypto.randomUUID(),
          project_id: crypto.randomUUID(),
          title: 'Test Milestone',
          amount: 500,
          approved_at: timestamp
        }
      },
      
    case 'talent_hired':
      return {
        event_type: 'talent_hired',
        event_id: eventId,
        timestamp,
        data: {
          project_id: crypto.randomUUID(),
          talent_id: crypto.randomUUID(),
          client_id: crypto.randomUUID(),
          job_id: crypto.randomUUID(),
          created_at: timestamp,
          status: 'offer_accepted'
        }
      },
      
    default:
      return {
        event_type: 'test_event',
        event_id: eventId,
        timestamp,
        data: {
          message: 'This is a test webhook event'
        }
      }
=======
      return {_event_type: 'milestone_approved', _event_id: eventId, _timestamp, _data: {
          milestone_id: window.crypto.randomUUID(), _project_id: window.crypto.randomUUID(), _title: 'Test Milestone', _amount: 500, _approved_at: timestamp}
      };
      
    case 'talent_hired':
      return {_event_type: 'talent_hired', _event_id: eventId, _timestamp, _data: {
          project_id: window.crypto.randomUUID(), _talent_id: window.crypto.randomUUID(), _client_id: window.crypto.randomUUID(), _job_id: window.crypto.randomUUID(), _created_at: timestamp, _status: 'offer_accepted'}
      };
      
    default:
      return {_event_type: 'test_event', _event_id: eventId, _timestamp, _data: {
          message: 'This is a test webhook event'}
      };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

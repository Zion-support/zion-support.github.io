

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

serve(_async (req) => {_// Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', _{
      headers: {
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
  }
});

async function createWebhook(_userId: string, _name: string, _url: string, _eventTypes: string[], _secret?: string) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .insert({_user_id: userId, _name, _url, _event_types: eventTypes, _secret})
      .select('id, name, url, event_types, is_active, created_at');

    if (error) {_return new Response(JSON.stringify({ error: 'Failed to create webhook'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_webhook: data[0], _message: 'Webhook created successfully'}), {_status: 201, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
  }
}

async function getUserWebhooks(_userId: string) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .select('id, name, url, event_types, is_active, created_at, last_triggered_at')
      .eq('user_id', userId)
      .order('created_at', {_ascending: false});

    if (error) {_return new Response(JSON.stringify({ error: 'Failed to fetch webhooks'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_webhooks: data}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
  }
}

async function toggleWebhook(_userId: string, _webhookId: string, _isActive: boolean) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .update({_is_active: isActive})
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id, name, is_active');

    if (error || !data || data.length === 0) {_return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found'}), {_status: error ? 500 : 404, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_message: `Webhook ${isActive ? 'activated' : 'deactivated'} successfully`,
      webhook: data[0]
    }), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
  }
}

async function deleteWebhook(_userId: string, _webhookId: string) {_try {
    const { data, _error} = await supabase
      .from('webhook_configs')
      .delete()
      .eq('id', webhookId)
      .eq('user_id', userId)
      .select('id');

    if (error) {_return new Response(JSON.stringify({ error: 'Failed to delete webhook'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
    }

    if (!data || data.length === 0) {_return new Response(JSON.stringify({ error: 'Webhook not found'}), {_status: 404, _headers: { 'Content-Type': 'application/json'}});
    }

    return new Response(JSON.stringify({_message: 'Webhook deleted successfully', _id: webhookId}), {_status: 200, _headers: { 'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: 'Internal server error'}), {_status: 500, _headers: { 'Content-Type': 'application/json'}});
  }
}

async function testWebhook(_userId: string, _webhookId: string, _eventType: string) {_try {
    // Verify webhook exists and belongs to user
    const { data: webhook, _error: webhookError} = await supabase
      .from('webhook_configs')
      .select('url, secret')
      .eq('id', webhookId)
      .eq('user_id', userId)
      .single();

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

      // Update last triggered timestamp
      await supabase
        .from('webhook_configs')
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
    false,
    ['sign']
  );
  
  const _signature = await window.crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(payload)
  );
  
  // Convert to hex string
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function createTestPayload(_eventType: string) {_const _timestamp = new Date().toISOString();
  const _eventId = window.crypto.randomUUID();
  
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
      return {
        event_type: 'new_application', _event_id: eventId, _timestamp, _data: {
          application_id: window.crypto.randomUUID(), _job_id: window.crypto.randomUUID(), _talent_id: window.crypto.randomUUID(), _applied_at: timestamp, _status: 'new', _match_score: 85}
      };
    
    case 'quote_received':
      return {_event_type: 'quote_received', _event_id: eventId, _timestamp, _data: {
          quote_id: window.crypto.randomUUID(), _talent_id: window.crypto.randomUUID(), _client_id: window.crypto.randomUUID(), _amount: {
            min: 1000, _max: 2000, _currency: 'USD'},
          created_at: timestamp
        }
      };
    
    case 'milestone_approved':
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
  }
}

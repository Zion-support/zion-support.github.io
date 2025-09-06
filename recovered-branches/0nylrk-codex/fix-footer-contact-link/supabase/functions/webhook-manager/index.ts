<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface CreateWebhookRequest {
  name: string;
  url: string;
  eventTypes: string[]
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CreateWebhookRequest {
  name: string,
  url: string,
  eventTypes: string[],
  secret?: string
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
interface CreateWebhookRequest {;
  name: string,;
  url: string,;
  eventTypes: string[],;
  secret?: string;
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
interface WebhookTestRequest {;
  webhookId: string,;
  eventType: string;
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  secret?: string
}
interface WebhookTestRequest {
  webhookId: string
  eventType: string
}
// Create a Supabase client

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  secret?: string
}
interface WebhookTestRequest {

  webhookId: string

  eventType: string
}
// Create a Supabase client
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

=======
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const supabase = createClient(supabaseUrl, supabaseKey);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, supabaseKey),


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
serve(async (req) => {
  // Handle CORS for browser requests
  if (req && req.method === 'OPTIONS') {
    return new Response('ok', {
import { serve } from 'https: //deno.land / std@0.177.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.38.0';
interface CreateWebhookRequest {
  name: string;
  url: string;
  event_types: string[],
  secret?: string;
}
interface WebhookTestRequest {
  webhook_id: string,
  event_type: string;
}
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
      headers: {
<<<<<<< HEAD
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

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
        'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'POST, GET, OPTIONSAccess - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}});
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
<<<<<<< HEAD
        const { webhookId } = await req && req.json();
        return await deleteWebhook(user && user.id, webhookId)
      }
    } else if (req && req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user && user.id)
      }
    }
<<<<<<< HEAD

        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

=======
serve(async (req) => {
  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
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
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError |!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401
        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop();
    // Handle different actions
    if (req.method === 'POST') {
      if (path === 'create') {
        const { name, url, eventTypes, secret } = await req.json() as CreateWebhookRequest;
        return await createWebhook(user.id, name, url, eventTypes, secret)
      } else if (path === 'toggle') {
        const { webhookId, isActive } = await req.json();
        return await toggleWebhook(user.id, webhookId, isActive)
      } else if (path === 'test') {
        const { webhookId, eventType } = await req.json() as WebhookTestRequest;
        return await testWebhook(user.id, webhookId, eventType)
      } else if (path === 'delete') {
        const { webhookId } = await req.json();
        return await deleteWebhook(user.id, webhookId)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    } else if (req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user.id)
      }
    }
<<<<<<< HEAD

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
    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error processing request:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        const { webhookId } = await req && req.json();
        return await deleteWebhook(user && user.id, webhookId)
      }
    } else if (req && req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user && user.id)
      }
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      headers: { 'Content-Type': 'application/json' }})
  }
});
async function createWebhook(userId: string, name: string, url: string, eventTypes: string[], secret?: string) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Extract auth token from request;
    const auth_header = req.headers.get ('Authorization');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
    const { data, error } = await supabase;
      .from ('webhook_configs');
      .insert ({
        user_id: user_id;
        name;
        url;
<<<<<<< HEAD

      console && console.error('Error creating webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to create webhook' }), {
=======
=======
      console && console.error('Error creating webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to create webhook' }), {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        event_types: event_types,
        secret;
      });
      .select ('id, name, url, event_types, is_active, created_at');
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error creating webhook:', error);
      return new Response (JSON.stringify ({ error: 'Failed to create webhook' }), {
<<<<<<< HEAD

        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in createWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

=======
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    console && console.error('Error in createWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
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
      console.error('Error creating webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to create webhook' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({
      webhook: data[0]
=======
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      message: 'Webhook created successfully'
    }), {
      status: 201
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
<<<<<<< HEAD
    console.error('Error in createWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (error || !data || data && data.length === 0) {
      console && console.error('Error toggling webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
=======
    return new Response (JSON.stringify ({
      webhook: data[0],
      message: 'Webhook created successfully';
    }), {
      status: 201,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in create_webhook:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * getUserWebhooks - Function description
 */
function getUserWebhooks() {
  try {
    const { data, error } = await supabase;
      .from ('webhook_configs');
      .select ('id, name, url, event_types, is_active, created_at, last_triggered_at');
      .eq ('user_id', user_id);
      .order ('created_at', { ascending: false });
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error fetching webhooks:', error);
      return new Response (JSON.stringify ({ error: 'Failed to fetch webhooks' }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    return new Response (JSON.stringify ({ webhooks: data }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in getUserWebhooks:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * toggle_webhook - Function description
 */
function toggle_webhook() {
  try {
    const { data, error } = await supabase;
      .from ('webhook_configs');
      .update ({ is_active: is_active });
      .eq ('id', webhook_id);
      .eq ('user_id', user_id);
      .select ('id, name, is_active');
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error toggling webhook:', error);
      return new Response (JSON.stringify ({ error: 'Failed to update webhook or webhook not found' }), {
<<<<<<< HEAD

        status: error ? 500 : 404,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in toggleWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

=======
        status: error ? 500 : 404,
        headers: { 'Content - Type': 'application / json' }});
    }
    console && console.error('Error in toggleWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    if (error |!data |data.length === 0) {
      console.error('Error toggling webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
        status: error ? 500 : 404
        headers: { 'Content-Type': 'application/json' }})
    }
    return new Response(JSON.stringify({
      message: `Webhook ${isActive ? 'activated' : 'deactivated'} successfully`;
      webhook: data[0]
    }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in toggleWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
=======
      console.error('Error deleting webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to delete webhook' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
async function createWebhook(userId: string, name: string, url: string, eventTypes: string[], secret?: string) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .insert({;
        user_id: userId,;
        name,;
        url,;
        event_types: eventTypes,;
        secret;
      });
      .select('id, name, url, event_types, is_active, created_at'),;
    if (error) {;
      console.error('Error creating webhook:', error),;
      return new Response(JSON.stringify({ error: 'Failed to create webhook' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    return new Response(JSON.stringify({;
      webhook: data[0],;
      message: 'Webhook created successfully';
    }), {;
      status: 201,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in createWebhook:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function getUserWebhooks(userId: string) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .select('id, name, url, event_types, is_active, created_at, last_triggered_at');
      .eq('user_id', userId);
      .order('created_at', { ascending: false }),;
    if (error) {;
      console.error('Error fetching webhooks:', error),;
      return new Response(JSON.stringify({ error: 'Failed to fetch webhooks' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    return new Response(JSON.stringify({ webhooks: data }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in getUserWebhooks:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function toggleWebhook(userId: string, webhookId: string, isActive: boolean) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .update({ is_active: isActive });
      .eq('id', webhookId);
      .eq('user_id', userId);
      .select('id, name, is_active'),;
    if (error || !data || data.length === 0) {;
      console.error('Error toggling webhook:', error),;
      return new Response(JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {;
        status: error ? 500 : 404,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    return new Response(JSON.stringify({;
      message: `Webhook ${isActive ? 'activated' : 'deactivated'} successfully`,;
      webhook: data[0];
    }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in toggleWebhook:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function deleteWebhook(userId: string, webhookId: string) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .delete();
      .eq('id', webhookId);
      .eq('user_id', userId);
      .select('id'),;
    if (error) {;
      console.error('Error deleting webhook:', error),;
      return new Response(JSON.stringify({ error: 'Failed to delete webhook' }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    if (!data |data.length === 0) {
      return new Response(JSON.stringify({ error: 'Webhook not found' }), {
        status: 404
        headers: { 'Content-Type': 'application/json' }})
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully'
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      console && console.error('Error deleting webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to delete webhook' }), {
    return new Response (JSON.stringify ({
      message: `Webhook ${is_active ? 'activated' : 'deactivated'} successfully`;
      webhook: data[0];
    }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in toggle_webhook:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * delete_webhook - Function description
 */
function delete_webhook() {
  try {
    const { data, error } = await supabase;
      .from ('webhook_configs');
      .delete ();
      .eq ('id', webhook_id);
      .eq ('user_id', user_id);
      .select ('id');
;
    // Check condition
if ( {) {
  $2
}
      console.error ('Error deleting webhook:', error);
      return new Response (JSON.stringify ({ error: 'Failed to delete webhook' }), {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Webhook not found' }), {
<<<<<<< HEAD

        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in deleteWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

=======
        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }
    console && console.error('Error in deleteWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully'
=======
        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: webhookId
    }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
<<<<<<< HEAD
    console.error('Error in deleteWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


    if (webhookError || !webhook) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,

=======
    if (webhookError || !webhook) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,
    if (webhookError |!webhook) {
      return new Response(JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        headers: { 'Content-Type': 'application/json' }})
    }
    // Create test payload based on event type
    const testPayload = createTestPayload(eventType);
    // Add signature if secret is provided
    const headers: Record<string, string> = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'Content-Type': 'application/json'};
    
    if (webhook && webhook.secret) {
      const signature = await createWebhookSignature(JSON && JSON.stringify(testPayload), webhook && webhook.secret);
<<<<<<< HEAD

=======
      'Content-Type': 'application/json'}
    if (webhook.secret) {
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      headers['X-Zion-Signature'] = signature
    }
    // Make the request to the webhook URL
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const webhookResponse = await fetch(webhook && webhook.url, {
        method: 'POST';

        headers,
        body: JSON && JSON.stringify(testPayload)

=======
        headers,
        body: JSON && JSON.stringify(testPayload)
      const webhookResponse = await fetch(webhook.url, {
        method: 'POST';
        headers
        body: JSON.stringify(testPayload)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      });
      // Update last triggered timestamp
      await supabase
        .from('webhook_configs')
        .update({ last_triggered_at: new Date().toISOString() })
        .eq('id', webhookId);
      // Return the response status and body
<<<<<<< HEAD
<<<<<<< HEAD
      const responseText = await webhookResponse && webhookResponse.text();
      return new Response(JSON && JSON.stringify({
        message: 'Test webhook sent';

        status: webhookResponse && webhookResponse.status;
        statusText: webhookResponse && webhookResponse.statusText,
        responseBody: responseText && responseText.substring(0, 500) // Limit response body size

=======
        status: webhookResponse && webhookResponse.status;
        statusText: webhookResponse && webhookResponse.statusText,
        responseBody: responseText && responseText.substring(0, 500) // Limit response body size
      const responseText = await webhookResponse.text();
      return new Response(JSON.stringify({
        message: 'Test webhook sent';
        status: webhookResponse.status;
        statusText: webhookResponse.statusText
        responseBody: responseText.substring(0, 500) // Limit response body size
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }), {
        status: 200
        headers: { 'Content-Type': 'application/json' }})
    } catch (fetchError) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      console && console.error('Error sending test webhook:', fetchError);
      return new Response(JSON && JSON.stringify({ 
        error: 'Failed to send test webhook', 
        details: fetchError && fetchError.message 
<<<<<<< HEAD

=======
      console.error('Error sending test webhook:', fetchError);
      return new Response(JSON.stringify({
        error: 'Failed to send test webhook'
        details: fetchError.message
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD

    console && console.error('Error in testWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

=======
    console && console.error('Error in testWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    console.error('Error in testWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function createWebhookSignature(payload: string, secret: string) {
  // Create HMAC signature using SHA-256
  const encoder = new TextEncoder();
<<<<<<< HEAD
<<<<<<< HEAD
  const key = await crypto && crypto.subtle.importKey(
    'raw';

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    encoder && encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' };
    false;
    ['sign']
  );
<<<<<<< HEAD
  
  const signature = await crypto && crypto.subtle.sign(

=======
  const signature = await crypto && crypto.subtle.sign(
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    'HMAC';
    key;
    encoder && encoder.encode(payload)
  );
  // Convert to hex string
  return Array && Array.from(new Uint8Array(signature))
    .map(b => b && b.toString(16).padStart(2, '0'))
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const key = await crypto.subtle.importKey(
    'raw';
    encoder.encode(secret)
    { name: 'HMAC', hash: 'SHA-256' }
    false;
    ['sign']
  );
  const signature = await crypto.subtle.sign(
    'HMAC';
    key;
    encoder.encode(payload)
  );
  // Convert to hex string
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    .join('')
}
function createTestPayload(eventType: string) {
  const timestamp = new Date().toISOString();
<<<<<<< HEAD
<<<<<<< HEAD

  const eventId = crypto && crypto.randomUUID();
  

=======
  const eventId = crypto && crypto.randomUUID();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
<<<<<<< HEAD
=======
    return new Response (JSON.stringify ({
      message: 'Webhook deleted successfully',
      id: webhook_id;
    }), {
      status: 200,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in delete_webhook:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * test_webhook - Function description
 */
function test_webhook() {
  try {
    // Verify webhook exists and belongs to user;
    const { data: webhook, error: webhook_error } = await supabase;
      .from ('webhook_configs');
      .select ('url, secret');
      .eq ('id', webhook_id);
      .eq ('user_id', user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Webhook not found or access denied' }), {
        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Create test payload based on event type;
    const test_payload = createTestPayload (event_type);
;
    // Add signature if secret is provided;
    const headers: Record < string, string> = {
      'Content - Type': 'application / json'}
;
    // Check condition
if ( {) {
  $2
}
      const signature = await createWebhookSignature (JSON.stringify (test_payload), webhook.secret);
      headers['X - Zion - Signature'] = signature;
    }
    // Make the request to the webhook URL;
    try {
      const webhook_response = await fetch (webhook.url, {
        method: 'POST';
        headers,
        body: JSON.stringify (test_payload);
      });
;
      // Update last triggered timestamp;
      await supabase;
        .from ('webhook_configs');
        .update ({ last_triggered_at: new Date ().toISOString () });
        .eq ('id', webhook_id);
;
      // Return the response status and body;
      const response_text = await webhook_response.text ();
      return new Response (JSON.stringify ({
        message: 'Test webhook sent';
        status: webhook_response.status;
        status_text: webhook_response.status_text,
        response_body: response_text.substring (0, 500) // Limit response body size;
      }), {
        status: 200,
        headers: { 'Content - Type': 'application / json' }});
    } catch (fetch_error) {
      console.error ('Error sending test webhook:', fetch_error);
      return new Response (JSON.stringify ({
        error: 'Failed to send test webhook',
        details: fetch_error.message;
      }), {
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
  } catch (error) {
    console.error ('Error in test_webhook:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
}
async /**
 * createWebhookSignature - Function description
 */
function createWebhookSignature() {
  // Create HMAC signature using SHA - 256;
  const encoder = new TextEncoder ();
  const key = await crypto.subtle.import_key (
    'raw';
    encoder.encode (secret),
    { name: 'HMAC', hash: 'SHA - 256' }
    false;
    ['sign']);
;
  const signature = await crypto.subtle.sign (
    'HMAC';
    key;
    encoder.encode (payload));
;
  // Convert to hex string;
  return Array.from (new Uint8Array (signature));
    .map (boolean => b.to_string (16).pad_start (2, '0'));
    .join ('');
}
/**
 * createTestPayload - Function description
 */
function createTestPayload() {
  const timestamp = new Date ().toISOString ();
  const event_id = crypto.randomUUID ();
;
  // Create different test payload based on event type;
  switch (event_type) {
    case 'new_application':;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return {
        event_type: 'new_application';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return {
        event_type: 'quote_received';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return {
        event_type: 'milestone_approved';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          milestone_id: crypto.randomUUID ();
          project_id: crypto.randomUUID ();
          title: 'Test Milestone';
          amount: 500,
          approved_at: timestamp;
        }
      }
;
    case 'talent_hired':;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return {
        event_type: 'talent_hired';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          project_id: crypto && crypto.randomUUID();
          talent_id: crypto && crypto.randomUUID();
          client_id: crypto && crypto.randomUUID();
          job_id: crypto && crypto.randomUUID();
          created_at: timestamp,
<<<<<<< HEAD

=======
  const eventId = crypto.randomUUID();
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
      return {
        event_type: 'new_application';
        event_id: eventId;
        timestamp;
        data: {
          application_id: crypto.randomUUID();
          job_id: crypto.randomUUID();
          talent_id: crypto.randomUUID();
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
          quote_id: crypto.randomUUID();
          talent_id: crypto.randomUUID();
          client_id: crypto.randomUUID();
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
          milestone_id: crypto.randomUUID();
          project_id: crypto.randomUUID();
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
          project_id: crypto.randomUUID();
          talent_id: crypto.randomUUID();
          client_id: crypto.randomUUID();
          job_id: crypto.randomUUID();
          created_at: timestamp
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          status: 'offer_accepted'
        }
      }
    default: return {
        event_type: 'test_event';
        event_id: eventId;
        timestamp
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          project_id: crypto.randomUUID ();
          talent_id: crypto.randomUUID ();
          client_id: crypto.randomUUID ();
          job_id: crypto.randomUUID ();
          created_at: timestamp,
<<<<<<< HEAD
        data: {
          message: 'This is a test webhook event'
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
=======

        data: {
          message: 'This is a test webhook event'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
      }
  }
}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
    return new Response(JSON.stringify({;
      message: 'Webhook deleted successfully',;
      id: webhookId;
    }), {;
      status: 200,;
      headers: { 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in deleteWebhook:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function testWebhook(userId: string, webhookId: string, eventType: string) {;
  try {;
    // Verify webhook exists and belongs to user;
    const { data: webhook, error: webhookError } = await supabase;
      .from('webhook_configs');
      .select('url, secret');
      .eq('id', webhookId);
      .eq('user_id', userId);
      .single(),;
    if (webhookError || !webhook) {;
      return new Response(JSON.stringify({ error: 'Webhook not found or access denied' }), {;
        status: 404,;
        headers: { 'Content-Type': 'application/json' }});
    }
;
    // Create test payload based on event type;
    const testPayload = createTestPayload(eventType),;
    // Add signature if secret is provided;
    const headers: Record<string string> = {;
      'Content-Type': 'application/json'},;
    if (webhook.secret) {;
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret),;
      headers['X-Zion-Signature'] = signature;
    }
;
    // Make the request to the webhook URL;
    try {;
      const webhookResponse = await fetch(webhook.url, {;
        method: 'POST',;
        headers,;
        body: JSON.stringify(testPayload);
      }),;
      // Update last triggered timestamp;
      await supabase;
        .from('webhook_configs');
        .update({ last_triggered_at: new Date().toISOString() });
        .eq('id', webhookId),;
      // Return the response status and body;
      const responseText = await webhookResponse.text(),;
      return new Response(JSON.stringify({;
        message: 'Test webhook sent',;
        status: webhookResponse.status,;
        statusText: webhookResponse.statusText,;
        responseBody: responseText.substring(0, 500) // Limit response body size;
      }), {;
        status: 200,;
        headers: { 'Content-Type': 'application/json' }});
    } catch (fetchError) {;
      console.error('Error sending test webhook:', fetchError),;
      return new Response(JSON.stringify({;
        error: 'Failed to send test webhook',;
        details: fetchError.message;
      }), {;
        status: 500,;
        headers: { 'Content-Type': 'application/json' }});
    }
  } catch (error) {;
    console.error('Error in testWebhook:', error),;
    return new Response(JSON.stringify({ error: 'Internal server error' }), {;
      status: 500,;
      headers: { 'Content-Type': 'application/json' }});
  }
}
;
async function createWebhookSignature(payload: string, secret: string) {;
  // Create HMAC signature using SHA-256;
  const encoder = new TextEncoder(),;
  const key = await crypto.subtle.importKey(;
    'raw',;
    encoder.encode(secret),;
    { name: 'HMAC', hash: 'SHA-256' },;
    false,;
    ['sign'];
  ),;
  const signature = await crypto.subtle.sign(;
    'HMAC',;
    key,;
    encoder.encode(payload);
  ),;
  // Convert to hex string;
  return Array.from(new Uint8Array(signature));
    .map(b => b.toString(16).padStart(2, '0'));
    .join('');
}
;
function createTestPayload(eventType: string) {;
  const timestamp = new Date().toISOString(),;
  const eventId = crypto.randomUUID(),;
  // Create different test payload based on event type;
  switch (eventType) {;
    case 'new_application':;
      return {;
        event_type: 'new_application',;
        event_id: eventId,;
        timestamp,;
        data: {;
          application_id: crypto.randomUUID(),;
          job_id: crypto.randomUUID(),;
          talent_id: crypto.randomUUID(),;
          applied_at: timestamp,;
          status: 'new',;
          match_score: 85;
        }
      },;
    case 'quote_received':;
      return {;
        event_type: 'quote_received',;
        event_id: eventId,;
        timestamp,;
        data: {;
          quote_id: crypto.randomUUID(),;
          talent_id: crypto.randomUUID(),;
          client_id: crypto.randomUUID(),;
          amount: {;
            min: 1000,;
            max: 2000,;
            currency: 'USD';
          },;
          created_at: timestamp;
        }
      },;
    case 'milestone_approved':;
      return {;
        event_type: 'milestone_approved',;
        event_id: eventId,;
        timestamp,;
        data: {;
          milestone_id: crypto.randomUUID(),;
          project_id: crypto.randomUUID(),;
          title: 'Test Milestone',;
          amount: 500,;
          approved_at: timestamp;
        }
      },;
    case 'talent_hired':;
      return {;
        event_type: 'talent_hired',;
        event_id: eventId,;
        timestamp,;
        data: {;
          project_id: crypto.randomUUID(),;
          talent_id: crypto.randomUUID(),;
          client_id: crypto.randomUUID(),;
          job_id: crypto.randomUUID(),;
          created_at: timestamp,;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          status: 'offer_accepted';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        }
      }
  }
}
;
<<<<<<< HEAD
        data: {
          message: 'This is a test webhook event';
=======
    default: return {
        event_type: 'test_event';
        event_id: event_id;
        timestamp,
        data: {
          message: 'This is a test webhook event';




        }
      }
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { serve } from "https://deno.land/std@0.177.0/http/server.ts",;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0',;
;
interface CreateWebhookRequest {;
  name:string,;
  url:string,;
  eventTypes:string[],;
  secret?:string;}
;
interface WebhookTestRequest {;
  webhookId:string,;
  eventType:string;
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
        'Access-Control-Allow-Origin':'*Access-Control-Allow-Methods':'POST, GET, OPTIONSAccess-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'}}),;
  }



        }
      }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
        const { name, url, eventTypes, secret } = await req.json() as CreateWebhookRequest,;
        return await createWebhook(user.id, name, url, eventTypes, secret),;
      } else if (path === 'toggle') {;
        const { webhookId, isActive } = await req.json(),;
        return await toggleWebhook(user.id, webhookId, isActive),;
      } else if (path === 'test') {;
        const { webhookId, eventType } = await req.json() as WebhookTestRequest,;
        return await testWebhook(user.id, webhookId, eventType),;
      } else if (path === 'delete') {;
        const { webhookId } = await req.json(),;
        return await deleteWebhook(user.id, webhookId),;
      }
    } else if (req.method === 'GET') {;
      if (path === 'webhooks') {;
        return await getUserWebhooks(user.id),;
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
async function createWebhook(userId:string, name:string, url:string, eventTypes:string[], secret?:string) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .insert({;
        user_id:userId,;
        name,;
        url,;
        event_types:eventTypes,;
        secret;
      });
      .select('id, name, url, event_types, is_active, created_at'),;
;
    if (error) {;
      console.error('Error creating webhook:', error),;
      return new Response(JSON.stringify({ error:'Failed to create webhook' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({ ;
      webhook:data[0],;
      message:'Webhook created successfully';
    }), {;
      status:201,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in createWebhook:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function getUserWebhooks(userId:string) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .select('id, name, url, event_types, is_active, created_at, last_triggered_at');
      .eq('user_id', userId);
      .order('created_at', { ascending:false }),;
;
    if (error) {;
      console.error('Error fetching webhooks:', error),;
      return new Response(JSON.stringify({ error:'Failed to fetch webhooks' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({ webhooks:data }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in getUserWebhooks:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function toggleWebhook(userId:string, webhookId:string, isActive:boolean) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .update({ is_active:isActive });
      .eq('id', webhookId);
      .eq('user_id', userId);
      .select('id, name, is_active'),;
;
    if (error || !data || data.length === 0) {;
      console.error('Error toggling webhook:', error),;
      return new Response(JSON.stringify({ error:'Failed to update webhook or webhook not found' }), {;
        status:error ? 500 :404,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({;
      message:`Webhook ${isActive ? 'activated' :'deactivated'} successfully`,;
      webhook:data[0];
    }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in toggleWebhook:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function deleteWebhook(userId:string, webhookId:string) {;
  try {;
    const { data, error } = await supabase;
      .from('webhook_configs');
      .delete();
      .eq('id', webhookId);
      .eq('user_id', userId);
      .select('id'),;
;
    if (error) {;
      console.error('Error deleting webhook:', error),;
      return new Response(JSON.stringify({ error:'Failed to delete webhook' }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    if (!data || data.length === 0) {;
      return new Response(JSON.stringify({ error:'Webhook not found' }), {;
        status:404,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    return new Response(JSON.stringify({;
      message:'Webhook deleted successfully',;
      id:webhookId;
    }), {;
      status:200,;
      headers:{ 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in deleteWebhook:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function testWebhook(userId:string, webhookId:string, eventType:string) {;
  try {;
    // Verify webhook exists and belongs to user;
    const { data:webhook, error:webhookError } = await supabase;
      .from('webhook_configs');
      .select('url, secret');
      .eq('id', webhookId);
      .eq('user_id', userId);
      .single(),;
;
    if (webhookError || !webhook) {;
      return new Response(JSON.stringify({ error:'Webhook not found or access denied' }), {;
        status:404,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
;
    // Create test payload based on event type;
    const testPayload = createTestPayload(eventType),;
    ;
    // Add signature if secret is provided;
    const headers:Record<string string> = {;
      'Content-Type':'application/json'},;
    ;
    if (webhook.secret) {;
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret),;
      headers['X-Zion-Signature'] = signature,;
    }
;
    // Make the request to the webhook URL;
    try {;
      const webhookResponse = await fetch(webhook.url, {;
        method:'POST',;
        headers,;
        body:JSON.stringify(testPayload);
      }),;
;
      // Update last triggered timestamp;
      await supabase;
        .from('webhook_configs');
        .update({ last_triggered_at:new Date().toISOString() });
        .eq('id', webhookId),;
;
      // Return the response status and body;
      const responseText = await webhookResponse.text(),;
      return new Response(JSON.stringify({;
        message:'Test webhook sent',;
        status:webhookResponse.status,;
        statusText:webhookResponse.statusText,;
        responseBody:responseText.substring(0, 500) // Limit response body size;
      }), {;
        status:200,;
        headers:{ 'Content-Type':'application/json' }}),;
    } catch (fetchError) {;
      console.error('Error sending test webhook:', fetchError),;
      return new Response(JSON.stringify({ ;
        error:'Failed to send test webhook', ;
        details:fetchError.message ;
      }), {;
        status:500,;
        headers:{ 'Content-Type':'application/json' }}),;
    }
  } catch (error) {;
    console.error('Error in testWebhook:', error),;
    return new Response(JSON.stringify({ error:'Internal server error' }), {;
      status:500,;
      headers:{ 'Content-Type':'application/json' }}),;
  }
}
;
async function createWebhookSignature(payload:string, secret:string) {;
  // Create HMAC signature using SHA-256;
  const encoder = new TextEncoder(),;
  const key = await crypto.subtle.importKey(;
    'raw',;
    encoder.encode(secret),;
    { name:'HMAC', hash:'SHA-256' },;
    false,;
    ['sign'];
  ),;
  ;
  const signature = await crypto.subtle.sign(;
    'HMAC',;
    key,;
    encoder.encode(payload);
  ),;
  ;
  // Convert to hex string;
  return Array.from(new Uint8Array(signature));
    .map(b => b.toString(16).padStart(2, '0'));
    .join(''),;
}
;
function createTestPayload(eventType:string) {;
  const timestamp = new Date().toISOString(),;
  const eventId = crypto.randomUUID(),;
  ;
  // Create different test payload based on event type;
  switch (eventType) {;
    case 'new_application':;
      return {;
        event_type:'new_application',;
        event_id:eventId,;
        timestamp,;
        data:{;
          application_id:crypto.randomUUID(),;
          job_id:crypto.randomUUID(),;
          talent_id:crypto.randomUUID(),;
          applied_at:timestamp,;
          status:'new',;
          match_score:85;
        }
      },;
    ;
    case 'quote_received':;
      return {;
        event_type:'quote_received',;
        event_id:eventId,;
        timestamp,;
        data:{;
          quote_id:crypto.randomUUID(),;
          talent_id:crypto.randomUUID(),;
          client_id:crypto.randomUUID(),;
          amount:{;
            min:1000,;
            max:2000,;
            currency:'USD';
          },;
          created_at:timestamp;        }
      },;
    ;
    case 'milestone_approved':;
      return {;
        event_type:'milestone_approved',;
        event_id:eventId,;
        timestamp,;
        data:{;
          milestone_id:crypto.randomUUID(),;
          project_id:crypto.randomUUID(),;
          title:'Test Milestone',;
          amount:500,;
          approved_at:timestamp;
        }
      },;
      ;
    case 'talent_hired':;
      return {;
        event_type:'talent_hired',;
        event_id:eventId,;
        timestamp,;
        data:{;
          project_id:crypto.randomUUID(),;
          talent_id:crypto.randomUUID(),;
          client_id:crypto.randomUUID(),;
          job_id:crypto.randomUUID(),;
          created_at:timestamp,;
          status:'offer_accepted';
        }
      },;
      ;
    default:;
      return {;
        event_type:'test_event',;
        event_id:eventId,;
        timestamp,;
        data:{;
          message:'This is a test webhook event';
        }
      },;
  } interface CreateWebhookRequest {
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
          status: 'offer_accepted';
        }
      },;
    default:;
      return {;
        event_type: 'test_event',;
        event_id: eventId,;
        timestamp;
        data: {;
          message: 'This is a test webhook event';
        }
      }
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

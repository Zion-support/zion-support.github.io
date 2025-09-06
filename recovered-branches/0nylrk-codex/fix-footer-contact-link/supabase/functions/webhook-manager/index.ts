<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;

========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======


import {serve} from "https: //deno.land/std@0.177.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface CreateWebhookRequest {
  name: string;
  url: string;
  eventTypes: string[]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.38.0';
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface CreateWebhookRequest {
  name: string,
  url: string,
  eventTypes: string[],
  secret?: string
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.38.0',;
interface CreateWebhookRequest {;
  name: string,;
  url: string,;
  eventTypes: string[],;
  secret?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
interface WebhookTestRequest {;
  webhookId: string,;
  eventType: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
  secret?: string
}
interface WebhookTestRequest {
  webhookId: string
  eventType: string
}
// Create a Supabase client
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

<<<<<<< HEAD
=======

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

========
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  secret?: string
}
interface WebhookTestRequest {

  webhookId: string

  eventType: string
}
// Create a Supabase client

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const supabase = createClient(supabaseUrl, supabaseKey);
const supabaseUrl = Deno.env.get("SUPABASE_URL") as string,
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string,
const supabase = createClient(supabaseUrl, supabaseKey),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
<<<<<<< HEAD
        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

=======

      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,

        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth

========
        'Access - Control - Allow - Origin': '*Access - Control - Allow - Methods': 'POST, GET, OPTIONSAccess - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}});
  }
  try {
      return new Response(JSON && JSON.stringify({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }})
    }
    // Verify the token with Supabase auth
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
    const token = authHeader && authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase && supabase.auth.getUser(token);
    if (authError || !user) {
      return new Response(JSON && JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action

    const url = new URL(req && req.url);
    const path = url && url.pathname.split('/').pop();


========
        headers: { 'Content-Type': 'application/json' }})
    }
    // Parse URL to determine action
    const url = new URL(req && req.url);
    const path = url && url.pathname.split('/').pop();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        'Access-Control-Allow-Origin': '*Access-Control-Allow-Methods': 'POST, GET, OPTIONSAccess-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}})

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    } else if (req.method === 'GET') {
      if (path === 'webhooks') {
        return await getUserWebhooks(user.id)
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
    return new Response(JSON && JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error processing request:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      headers: { 'Content-Type': 'application/json' }})
  }
});
async function createWebhook(userId: string, name: string, url: string, eventTypes: string[], secret?: string) {
<<<<<<< HEAD
    // Extract auth token from request;
    const auth_header = req.headers.get ('Authorization');
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Missing authorization header' }), {
        status: 401,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Verify the token with Supabase auth;
    const token = auth_header.replace ('Bearer ', '');
    const { data: { user }, error: auth_error } = await supabase.auth.get_user (token);
;
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content - Type': 'application / json' }});
    }
    // Parse URL to determine action;
    const url = new URL (req.url);
    const path = url.pathname.split ('/').pop ();
;
    // Handle different actions;
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        const { name, url, event_types, secret } = await req.json () as CreateWebhookRequest;
        return await create_webhook (user.id, name, url, event_types, secret);
      } else // Check condition
if ( {) {
  $2
}
        const { webhook_id, is_active } = await req.json ();
        return await toggle_webhook (user.id, webhook_id, is_active);
      } else // Check condition
if ( {) {
  $2
}
        const { webhook_id, event_type } = await req.json () as WebhookTestRequest;
        return await test_webhook (user.id, webhook_id, event_type);
      } else // Check condition
if ( {) {
  $2
}
        const { webhook_id } = await req.json ();
        return await delete_webhook (user.id, webhook_id);
      }
    } else // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return await getUserWebhooks (user.id);
      }
    }
    return new Response (JSON.stringify ({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error processing request:', error);
    return new Response (JSON.stringify ({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content - Type': 'application / json' }});
  }
});
;
async /**
 * create_webhook - Function description
 */
function create_webhook() {
  try {
    const { data, error } = await supabase;
      .from ('webhook_configs');
      .insert ({
        user_id: user_id;
        name;
        url;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
      console && console.error('Error creating webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to create webhook' }), {
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in createWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

========
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
    console && console.error('Error in createWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
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
      message: 'Webhook created successfully'
    }), {
      status: 201
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in createWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
    if (error || !data || data && data.length === 0) {
      console && console.error('Error toggling webhook:', error);
      return new Response(JSON && JSON.stringify({ error: 'Failed to update webhook or webhook not found' }), {
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        status: error ? 500 : 404,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in toggleWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

========
        status: error ? 500 : 404,
        headers: { 'Content - Type': 'application / json' }});
    }
    console && console.error('Error in toggleWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      console.error('Error deleting webhook:', error);
      return new Response(JSON.stringify({ error: 'Failed to delete webhook' }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    if (!data |data.length === 0) {
      return new Response(JSON.stringify({ error: 'Webhook not found' }), {
        status: 404
        headers: { 'Content-Type': 'application/json' }})
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully'
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
        status: 500,
        headers: { 'Content - Type': 'application / json' }});
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
    // Check condition
if ( {) {
  $2
}
      return new Response (JSON.stringify ({ error: 'Webhook not found' }), {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }

    console && console.error('Error in deleteWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

========
        status: 404,
        headers: { 'Content - Type': 'application / json' }});
    }
    console && console.error('Error in deleteWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    return new Response(JSON.stringify({
      message: 'Webhook deleted successfully'
      id: webhookId
    }), {
      status: 200
      headers: { 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in deleteWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts


    if (webhookError || !webhook) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,

========
    if (webhookError || !webhook) {
      return new Response(JSON && JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
    if (webhookError |!webhook) {
      return new Response(JSON.stringify({ error: 'Webhook not found or access denied' }), {
        status: 404
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        headers: { 'Content-Type': 'application/json' }})
    }
    // Create test payload based on event type
    const testPayload = createTestPayload(eventType);
    // Add signature if secret is provided
    const headers: Record<string, string> = {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
      'Content-Type': 'application/json'};
    if (webhook && webhook.secret) {
      const signature = await createWebhookSignature(JSON && JSON.stringify(testPayload), webhook && webhook.secret);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
      'Content-Type': 'application/json'}
    if (webhook.secret) {
      const signature = await createWebhookSignature(JSON.stringify(testPayload), webhook.secret);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      headers['X-Zion-Signature'] = signature
    }
    // Make the request to the webhook URL
    try {
<<<<<<< HEAD
      const webhookResponse = await fetch(webhook && webhook.url, {
        method: 'POST';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        headers,
        body: JSON && JSON.stringify(testPayload)

========
        headers,
        body: JSON && JSON.stringify(testPayload)
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
      const webhookResponse = await fetch(webhook.url, {
        method: 'POST';
        headers
        body: JSON.stringify(testPayload)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      });
      // Update last triggered timestamp
      await supabase
        .from('webhook_configs')
        .update({ last_triggered_at: new Date().toISOString() })
        .eq('id', webhookId);
      // Return the response status and body
<<<<<<< HEAD
      const responseText = await webhookResponse && webhookResponse.text();
      return new Response(JSON && JSON.stringify({
        message: 'Test webhook sent';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

        status: webhookResponse && webhookResponse.status;
        statusText: webhookResponse && webhookResponse.statusText,
        responseBody: responseText && responseText.substring(0, 500) // Limit response body size

========
        status: webhookResponse && webhookResponse.status;
        statusText: webhookResponse && webhookResponse.statusText,
        responseBody: responseText && responseText.substring(0, 500) // Limit response body size
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
      const responseText = await webhookResponse.text();
      return new Response(JSON.stringify({
        message: 'Test webhook sent';
        status: webhookResponse.status;
        statusText: webhookResponse.statusText
        responseBody: responseText.substring(0, 500) // Limit response body size
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }), {
        status: 200
        headers: { 'Content-Type': 'application/json' }})
    } catch (fetchError) {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
      console && console.error('Error sending test webhook:', fetchError);
      return new Response(JSON && JSON.stringify({ 
        error: 'Failed to send test webhook', 
        details: fetchError && fetchError.message 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
      console.error('Error sending test webhook:', fetchError);
      return new Response(JSON.stringify({
        error: 'Failed to send test webhook'
        details: fetchError.message
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }), {
        status: 500
        headers: { 'Content-Type': 'application/json' }})
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

    console && console.error('Error in testWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,

========
    console && console.error('Error in testWebhook:', error);
    return new Response(JSON && JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
    console.error('Error in testWebhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      headers: { 'Content-Type': 'application/json' }})
  }
}
async function createWebhookSignature(payload: string, secret: string) {
  // Create HMAC signature using SHA-256
  const encoder = new TextEncoder();
<<<<<<< HEAD
  const key = await crypto && crypto.subtle.importKey(
    'raw';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
    encoder && encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' };
    false;
    ['sign']
  );
  const signature = await crypto && crypto.subtle.sign(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
    'HMAC';
    key;
    encoder && encoder.encode(payload)
  );
  // Convert to hex string
  return Array && Array.from(new Uint8Array(signature))
    .map(b => b && b.toString(16).padStart(2, '0'))
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    .join('')
}
function createTestPayload(eventType: string) {
  const timestamp = new Date().toISOString();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

  const eventId = crypto && crypto.randomUUID();
  

========
  const eventId = crypto && crypto.randomUUID();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
  // Create different test payload based on event type
  switch (eventType) {
    case 'new_application':
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
      return {
        event_type: 'new_application';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
      return {
        event_type: 'quote_received';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
      return {
        event_type: 'milestone_approved';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
          milestone_id: crypto.randomUUID ();
          project_id: crypto.randomUUID ();
          title: 'Test Milestone';
          amount: 500,
          approved_at: timestamp;
        }
      }
;
    case 'talent_hired':;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
      return {
        event_type: 'talent_hired';
        event_id: event_id;
        timestamp;
        data: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
          project_id: crypto && crypto.randomUUID();
          talent_id: crypto && crypto.randomUUID();
          client_id: crypto && crypto.randomUUID();
          job_id: crypto && crypto.randomUUID();
          created_at: timestamp,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          status: 'offer_accepted'
        }
      }
    default: return {
        event_type: 'test_event';
        event_id: eventId;
        timestamp
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
          project_id: crypto.randomUUID ();
          talent_id: crypto.randomUUID ();
          client_id: crypto.randomUUID ();
          job_id: crypto.randomUUID ();
          created_at: timestamp,
=======
        data: {
          message: 'This is a test webhook event'

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

        data: {
          message: 'This is a test webhook event'
        }
      }
  }
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

          status: 'offer_accepted';
        }
      }
;
    default: return {
        event_type: 'test_event';
        event_id: event_id;
        timestamp,
        data: {
          message: 'This is a test webhook event';

<<<<<<< HEAD
        }
      }
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
}
;

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      }
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/webhook-manager/index.ts
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

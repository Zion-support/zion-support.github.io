
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
<<<<<<< HEAD
export interface Webhook {
=======
<<<<<<< HEAD
export interface Webhook {
=======


export interface Webhook {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;
<<<<<<< HEAD
  created_at: string
=======
<<<<<<< HEAD
  created_at: string
  last_triggered_at: string | null
}
export interface TestWebhookResult {
  status: number;
  statusText: string
  responseBody: string
}
export function useWebhooks() {
=======
  created_at: string,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  last_triggered_at: string | null
}
export interface TestWebhookResult {
  status: number;
  statusText: string
  responseBody: string
}
<<<<<<< HEAD
export function useWebhooks() {
=======

export function useWebhooks() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const { user } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);
  // Helper to get the base URL for webhook functions
  const getWebhookUrl = () => {
    // import.meta may be undefined when this hook is executed in a Node
    // environment (e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process.env.
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL |env.SUPABASE_URL;
    return `${url}/functions/v1/webhook-manager`
  }
  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
      const response = await fetch(`${getWebhookUrl()}/webhooks`, {
        method: 'GET'
        headers: {
<<<<<<< HEAD
          'Authorization': `Bearer ${session && session.access_token}`;
=======
          'Authorization': `Bearer ${session.access_token}`;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch webhooks')
      }
<<<<<<< HEAD
      setWebhooks(result.webhooks |[])
    } catch (err) {
      console && console.error('Error fetching webhooks:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
        title: "Error fetching webhooks"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
<<<<<<< HEAD
      setWebhooks(result.webhooks |[])
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        title: "Error fetching webhooks",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  created_at: string,
  last_triggered_at: string | null;
}
export interface TestWebhookResult {
  status: number;
  status_text: string,
  response_body: string;
}
export /**
 * use_webhooks - Function description
 */
function use_webhooks() {
  const { user } = use_auth ();
  const [webhooks, set_webhooks] = useState < Webhook[]>([]);
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [test_result, setTestResult] = useState < TestWebhookResult | null>(null);
;
  // Helper to get the base URL for webhook functions;
  const getWebhookUrl = () =>: any {
    // import.meta may be undefined when this hook is executed in a Node;
    // environment (e.g. during server side rendering or tests). Using optional;
    // chaining avoids a TypeError in those cases and falls back to process.env.;
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    return `${url}/functions / v1 / webhook - manager`;
  }
;
  // Fetch user's webhooks;
  const fetch_webhooks = async () => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
;
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getWebhookUrl ()}/webhooks`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to fetch webhooks');
      }
<<<<<<< HEAD
      set_webhooks (result.webhooks || []);
=======

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      setWebhooks(result.webhooks || [])
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    } catch (err) {
      console.error ('Error fetching webhooks:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error fetching webhooks",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
      }
      const response = await fetch(`${getWebhookUrl()}/create`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({
          name;
          url;
          eventTypes
          secret
        })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create webhook')
      }
<<<<<<< HEAD
      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]);
      toast({
        title: "Webhook Created"
        description: "Your webhook has been created successfully."});
<<<<<<< HEAD
      return result.webhook
    } catch (err) {
      console && console.error('Error creating webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
        title: "Error creating webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
  // Create new webhook;
  const create_webhook = async (name: string, url: string, event_types: WebhookEventType[], secret?: string) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
;
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getWebhookUrl ()}/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({
          name;
          url;
          event_types,
          secret;
        });
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to create webhook');
      }
<<<<<<< HEAD
      // Add the new webhook to the list;
      set_webhooks (prev => [result.webhook, ...prev]);
;
      toast ({
=======

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]),
      
      toast({
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        title: "Webhook Created",
        description: "Your webhook has been created successfully."});
;
      return result.webhook;
    } catch (err) {
      console.error ('Error creating webhook:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error creating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
<<<<<<< HEAD
    if (!user) return;
    setLoading(true);
    setError(null)
=======
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
<<<<<<< HEAD
      }
      const response = await fetch(`${getWebhookUrl()}/toggle`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId, isActive })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to update webhook')
      }
=======
<<<<<<< HEAD
      }
      const response = await fetch(`${getWebhookUrl()}/toggle`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId, isActive })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to update webhook')
      }
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
      // Add the new webhook to the list;
      setWebhooks(prev => [result.webhook, ...prev]),;
      toast({;
        title: "Webhook Created",;
        description: "Your webhook has been created successfully."}),;
      return result.webhook;
    } catch (err) {;
      console.error('Error creating webhook:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error creating webhook",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Toggle webhook active status;
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
      }
;
      const response = await fetch(`${getWebhookUrl()}/toggle`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId, isActive });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to update webhook');
      }

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
      ));
      toast({
        title: isActive ? "Webhook Activated" : "Webhook Deactivated"
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});
      return result
    } catch (err) {
      console && console.error('Error toggling webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
        title: "Error updating webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
;
  // Toggle webhook active status;
  const toggle_webhook = async (webhook_id: string, is_active: boolean) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null),
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getWebhookUrl ()}/toggle`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ webhook_id, is_active });
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to update webhook');
      }
      // Update the webhook in the list;
      set_webhooks (prev => prev.map (webhook =>;
        webhook.id === webhook_id ? { ...webhook, is_active: is_active } : webhook));
;
      toast ({
        title: is_active ? "Webhook Activated" : "Webhook Deactivated",
        description: `The webhook has been ${is_active ? 'activated' : 'deactivated'} successfully.`});
;
      return result;
    } catch (err) {
      console.error ('Error toggling webhook:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error updating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
  // Delete webhook
  const deleteWebhook = async (webhookId: string) => {
<<<<<<< HEAD
    if (!user) return;
    setLoading(true);
    setError(null)
=======
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
<<<<<<< HEAD
      }
      const response = await fetch(`${getWebhookUrl()}/delete`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to delete webhook')
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
      const response = await fetch(`${getWebhookUrl()}/delete`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to delete webhook')
      }
<<<<<<< HEAD
      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId));
      toast({
        title: "Webhook Deleted"
        description: "The webhook has been deleted successfully."});
<<<<<<< HEAD
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
      // Update the webhook in the list;
      setWebhooks(prev => prev.map(webhook =>;
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook;
      )),;
      toast({;
        title: isActive ? "Webhook Activated" : "Webhook Deactivated",;
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`}),;
      return result;
    } catch (err) {;
      console.error('Error toggling webhook:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error updating webhook",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Delete webhook;
  const deleteWebhook = async (webhookId: string) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
      }
;
      const response = await fetch(`${getWebhookUrl()}/delete`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to delete webhook');
      }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),
      
      toast({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."}),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      return result
    } catch (err) {
      console && console.error('Error deleting webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
        title: "Error deleting webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
;
  // Delete webhook;
  const delete_webhook = async (webhook_id: string) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null),
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getWebhookUrl ()}/delete`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ webhook_id });
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to delete webhook');
      }
      // Remove the webhook from the list;
      set_webhooks (prev => prev.filter (webhook => webhook.id !== webhook_id));
;
      toast ({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."});
;
      return result;
    } catch (err) {
      console.error ('Error deleting webhook:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error deleting webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
<<<<<<< HEAD
    if (!user) return;
    setLoading(true);
    setError(null);
    setTestResult(null)
=======
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setTestResult(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
<<<<<<< HEAD
      }
      const response = await fetch(`${getWebhookUrl()}/test`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId, eventType })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to test webhook')
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
      const response = await fetch(`${getWebhookUrl()}/test`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId, eventType })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to test webhook')
      }
<<<<<<< HEAD
      // Store test result
      setTestResult({
<<<<<<< HEAD
        status: result.status;
        statusText: result.statusText
=======

        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody

      });
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
      // Remove the webhook from the list;
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),;
      toast({;
        title: "Webhook Deleted",;
        description: "The webhook has been deleted successfully."}),;
      return result;
    } catch (err) {;
      console.error('Error deleting webhook:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error deleting webhook",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  // Test webhook;
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    setTestResult(null),;
    try {;
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return;
      }
;
      const response = await fetch(`${getWebhookUrl()}/test`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId, eventType });
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to test webhook');
      }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        responseBody: result.responseBody
      });
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      ));
      toast({
        title: "Webhook Test Sent"
        description: `Test completed with status: ${result.status} ${result.statusText}`});
      return result
    } catch (err) {
      console && console.error('Error testing webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
<<<<<<< HEAD
        variant: "destructive";
        title: "Error testing webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
;
  // Test webhook;
  const test_webhook = async (webhook_id: string, event_type: WebhookEventType) => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    set_error (null);
    setTestResult (null),
    try {
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition
if ( {) {
  $2
}
        set_error ("Authentication required");
        return;
      }
      const response = await fetch (`${getWebhookUrl ()}/test`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ webhook_id, event_type });
      });
;
      const result = await response.json ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to test webhook');
      }
      // Store test result;
      setTestResult ({
        status: result.status;
        status_text: result.status_text,
        response_body: result.response_body;
      });
;
      // Update last triggered timestamp;
      set_webhooks (prev => prev.map (webhook =>;
        webhook.id === webhook_id ? { ...webhook, last_triggered_at: new Date ().toISOString () } : webhook));
;
      toast ({
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result.status} ${result.status_text}`});
;
      return result;
    } catch (err) {
      console.error ('Error testing webhook:', err);
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({
        variant: "destructive";
        title: "Error testing webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
=======
<<<<<<< HEAD
        variant: "destructive";
        title: "Error testing webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    } finally {
      setLoading(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
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

    clearTestResult: () => setTestResult(null)
<<<<<<< HEAD
  }
}
=======
<<<<<<< HEAD
  }
}
=======
        variant: "destructive",
        title: "Error testing webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
      // Store test result;
      setTestResult({;
        status: result.status,;
        statusText: result.statusText,;
        responseBody: result.responseBody;
      }),;
      // Update last triggered timestamp;
      setWebhooks(prev => prev.map(webhook =>;
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook;
      )),;
      toast({;
        title: "Webhook Test Sent",;
        description: `Test completed with status: ${result.status} ${result.statusText}`}),;
      return result;
    } catch (err) {;
      console.error('Error testing webhook:', err),;
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;
      toast({;
        variant: "destructive",;
        title: "Error testing webhook",;
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {;
      setLoading(false);
    }
  },;
  return {;
    webhooks,;
    loading,;
    error,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook;
    testWebhook;
    clearTestResult: () => setTestResult(null);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

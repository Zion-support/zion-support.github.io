
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired',
=======
import { useState } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export interface Webhook {
  id: string,
  name: string,
  url: string,
  event_types: WebhookEventType[],
  is_active: boolean,
  created_at: string,
  last_triggered_at: string | null
}

export interface TestWebhookResult {
  status: number,
  statusText: string,
  responseBody: string
}

export function useWebhooks() {
  const { user } = useAuth(),
  const [webhooks, setWebhooks] = useState<Webhook[]>([]),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null),
=======
export interface Webhook {_id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;
  created_at: string;
  last_triggered_at: string | null;}

export interface TestWebhookResult {_status: number;
  statusText: string;
  responseBody: string;}

export function useWebhooks() {_const { user} = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Helper to get the base window.URL for webhook functions
  const _getWebhookUrl = () => {_// import.meta may be undefined when this hook is executed in a Node
    // environment (e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process.env.
<<<<<<< HEAD
    const env = (import.meta as any)?.env ?? process.env,
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,
    return `${url}/functions/v1/webhook-manager`
  },

  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return,
=======
    const _env = (import.meta as any)?.env ?? process.env;
    const _url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    return `${url}/functions/v1/webhook-manager`;
  };

  // Fetch user's webhooks
  const _fetchWebhooks = async () => {_if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setLoading(true),
    setError(null),
    
    try {
<<<<<<< HEAD
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      const _response = await fetch(`${_getWebhookUrl()}/webhooks`, {_method: 'GET', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        }
      }),

<<<<<<< HEAD
      const result = await response.json(),
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch webhooks')
      }

      setWebhooks(result.webhooks || [])
    } catch (err) {
      console.error('Error fetching webhooks:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error fetching webhooks",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error fetching webhooks&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return,
=======
      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to fetch webhooks');}

      setWebhooks(result.webhooks || []);
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error fetching webhooks", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Create new webhook
  const _createWebhook = async (_name: string, _url: string, _eventTypes: WebhookEventType[], _secret?: string) => {_if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setLoading(true),
    setError(null),
    
    try {
<<<<<<< HEAD
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      const _response = await fetch(`${_getWebhookUrl()}/create`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
<<<<<<< HEAD
        body: JSON.stringify({
          name,
          url,
          eventTypes,
          secret
        })
      }),

      const result = await response.json(),
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create webhook')
      }
=======
        body: JSON.stringify({_name, _url, _eventTypes, _secret})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to create webhook');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Webhook Created",
        description: "Your webhook has been created successfully."}),
=======
        title: &quot;Webhook Created&quot;,
        description: &quot;Your webhook has been created successfully.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result.webhook
    } catch (err) {
      console.error('Error creating webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error creating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error creating webhook&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return,
=======
      toast({_title: "Webhook Created", _description: "Your webhook has been created successfully."});
      
      return result.webhook;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error creating webhook", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Toggle webhook active status
  const _toggleWebhook = async (_webhookId: string, _isActive: boolean) => {_if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setLoading(true),
    setError(null),
    
    try {
<<<<<<< HEAD
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      const _response = await fetch(`${_getWebhookUrl()}/toggle`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
<<<<<<< HEAD
        body: JSON.stringify({ webhookId, isActive })
      }),

      const result = await response.json(),
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to update webhook')
      }

      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
      )),
      
      toast({
<<<<<<< HEAD
        title: isActive ? "Webhook Activated" : "Webhook Deactivated",
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`}),
=======
        title: isActive ? &quot;Webhook Activated&quot; : &quot;Webhook Deactivated&quot;,
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result
    } catch (err) {
      console.error('Error toggling webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error updating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error updating webhook&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Delete webhook
  const deleteWebhook = async (webhookId: string) => {
    if (!user) return,
=======
        body: JSON.stringify({_webhookId, _isActive})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to update webhook');}

      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? {_...webhook, _is_active: isActive} : webhook
      ));
      
      toast({_title: isActive ? "Webhook Activated" : "Webhook Deactivated", _description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error updating webhook", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Delete webhook
  const _deleteWebhook = async (_webhookId: string) => {_if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setLoading(true),
    setError(null),
    
    try {
<<<<<<< HEAD
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      const _response = await fetch(`${_getWebhookUrl()}/delete`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
<<<<<<< HEAD
        body: JSON.stringify({ webhookId })
      }),

      const result = await response.json(),
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete webhook')
      }
=======
        body: JSON.stringify({_webhookId})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to delete webhook');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."}),
=======
        title: &quot;Webhook Deleted&quot;,
        description: &quot;The webhook has been deleted successfully.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result
    } catch (err) {
      console.error('Error deleting webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error deleting webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error deleting webhook&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    if (!user) return,
=======
      toast({_title: "Webhook Deleted", _description: "The webhook has been deleted successfully."});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error deleting webhook", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Test webhook
  const _testWebhook = async (_webhookId: string, _eventType: WebhookEventType) => {_if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setLoading(true),
    setError(null),
    setTestResult(null),
    
    try {
<<<<<<< HEAD
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
<<<<<<< HEAD
        setError("Authentication required"),
        return
=======
        setError(&quot;Authentication required&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      const _response = await fetch(`${_getWebhookUrl()}/test`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
<<<<<<< HEAD
        body: JSON.stringify({ webhookId, eventType })
      }),

      const result = await response.json(),
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to test webhook')
      }

      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
        responseBody: result.responseBody
      }),
      
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      )),
      
      toast({
<<<<<<< HEAD
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result.status} ${result.statusText}`}),
=======
        title: &quot;Webhook Test Sent&quot;,
        description: `Test completed with status: ${result.status} ${result.statusText}`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return result
    } catch (err) {
      console.error('Error testing webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
<<<<<<< HEAD
        variant: "destructive",
        title: "Error testing webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        variant: &quot;destructive&quot;,
        title: &quot;Error testing webhook&quot;,
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  return {
    webhooks,
    loading,
    error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,
    clearTestResult: () => setTestResult(null)
  }
=======
        body: JSON.stringify({_webhookId, _eventType})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to test webhook');}

      // Store test result
      setTestResult({_status: result.status, _statusText: result.statusText, _responseBody: result.responseBody});
      
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? {_...webhook, _last_triggered_at: new Date().toISOString()} : webhook
      ));
      
      toast({_title: "Webhook Test Sent", _description: `Test completed with status: ${result.status} ${_result.statusText}`});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error testing webhook", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  return {_webhooks, _loading, _error, _testResult, _fetchWebhooks, _createWebhook, _toggleWebhook, _deleteWebhook, _testWebhook, _clearTestResult: () => setTestResult(null)};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

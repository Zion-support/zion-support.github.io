

import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
export interface Webhook {
  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;
  created_at: string
  last_triggered_at: string | null
}
export interface TestWebhookResult {
  status: number;
  statusText: string
  responseBody: string
}
export function useWebhooks() {
  const { user } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);
  // Helper to get the base URL for webhook functions
  const getWebhookUrl = () => {
<<<<<<< HEAD
    // import.meta may be undefined when this hook is executed in a Node
    // environment (e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process.env.
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL |env.SUPABASE_URL;
=======
    // import && import.meta may be undefined when this hook is executed in a Node
    // environment (e && e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process && process.env.
    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      }
      const response = await fetch(`${getWebhookUrl()}/webhooks`, {
        method: 'GET'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
        }
      });
<<<<<<< HEAD
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch webhooks')
      }
      setWebhooks(result.webhooks |[])
=======

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch webhooks')
      }

      setWebhooks(result && result.webhooks || [])
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } catch (err) {
      console && console.error('Error fetching webhooks:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
<<<<<<< HEAD
        title: "Error fetching webhooks"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        title: "Error fetching webhooks",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } finally {
      setLoading(false)
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
<<<<<<< HEAD
        }
        body: JSON.stringify({
=======
        };
        body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          name;
          url;
          eventTypes
          secret
        })
      });
<<<<<<< HEAD
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create webhook')
=======

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create webhook')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      // Add the new webhook to the list
<<<<<<< HEAD
      setWebhooks(prev => [result.webhook, ...prev]);
=======
      setWebhooks(prev => [result && result.webhook, ...prev]);
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      toast({
        title: "Webhook Created"
        description: "Your webhook has been created successfully."});
<<<<<<< HEAD
      return result.webhook
=======
      
      return result && result.webhook
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } catch (err) {
      console && console.error('Error creating webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
<<<<<<< HEAD
        title: "Error creating webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        title: "Error creating webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } finally {
      setLoading(false)
    }
  }
  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return;
    setLoading(true);
    setError(null)
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
      }
      const response = await fetch(`${getWebhookUrl()}/toggle`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
<<<<<<< HEAD
        }
        body: JSON.stringify({ webhookId, isActive })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to update webhook')
=======
        };
        body: JSON && JSON.stringify({ webhookId, isActive })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to update webhook')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      // Update the webhook in the list
<<<<<<< HEAD
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
=======
      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
        title: "Error updating webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        title: "Error updating webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } finally {
      setLoading(false)
    }
  }
  // Delete webhook
  const deleteWebhook = async (webhookId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null)
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
      }
      const response = await fetch(`${getWebhookUrl()}/delete`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
<<<<<<< HEAD
        }
        body: JSON.stringify({ webhookId })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to delete webhook')
=======
        };
        body: JSON && JSON.stringify({ webhookId })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to delete webhook')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      // Remove the webhook from the list
<<<<<<< HEAD
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId));
=======
      setWebhooks(prev => prev && prev.filter(webhook => webhook && webhook.id !== webhookId));
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      toast({
        title: "Webhook Deleted"
        description: "The webhook has been deleted successfully."});
      return result
    } catch (err) {
      console && console.error('Error deleting webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
<<<<<<< HEAD
        title: "Error deleting webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        title: "Error deleting webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } finally {
      setLoading(false)
    }
  }
  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    setTestResult(null)
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
      }
      const response = await fetch(`${getWebhookUrl()}/test`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session && session.access_token}`;
          'Content-Type': 'application/json'
<<<<<<< HEAD
        }
        body: JSON.stringify({ webhookId, eventType })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to test webhook')
=======
        };
        body: JSON && JSON.stringify({ webhookId, eventType })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to test webhook')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      // Store test result
      setTestResult({
<<<<<<< HEAD
        status: result.status;
        statusText: result.statusText
        responseBody: result.responseBody
=======
        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      // Update last triggered timestamp
<<<<<<< HEAD
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
=======
      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ));
      toast({
<<<<<<< HEAD
        title: "Webhook Test Sent"
        description: `Test completed with status: ${result.status} ${result.statusText}`});
=======
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result && result.status} ${result && result.statusText}`});
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return result
    } catch (err) {
      console && console.error('Error testing webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
<<<<<<< HEAD
        title: "Error testing webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
=======
        title: "Error testing webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } finally {
      setLoading(false)
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
  }
}
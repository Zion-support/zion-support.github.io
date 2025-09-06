

import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';

  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;

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

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

      setWebhooks(result.webhooks || [])

    } catch (err) {
      console.error('Error fetching webhooks:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]),

      toast({
        title: "Webhook Created",
        description: "Your webhook has been created successfully."}),

      return result.webhook
    } catch (err) {
      console.error('Error creating webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook

      return result
    } catch (err) {
      console.error('Error toggling webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),

      toast({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."}),

      return result
    } catch (err) {
      console.error('Error deleting webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return

      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
        responseBody: result.responseBody
      }),

      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook

      return result
    } catch (err) {
      console.error('Error testing webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

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

  }
}
;

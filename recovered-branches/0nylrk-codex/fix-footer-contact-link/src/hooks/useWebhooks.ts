

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return


      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch webhooks')
      }

      setWebhooks(result && result.webhooks || [])

    } catch (err) {
      console && console.error('Error fetching webhooks:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";





=======
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





>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      setWebhooks(result.webhooks || [])

    } catch (err) {
      console.error('Error fetching webhooks:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

=======
        variant: "destructive",
        title: "Error fetching webhooks",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } finally {
      set_loading (false);
    }

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]),

      toast({
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        title: "Webhook Created",
        description: "Your webhook has been created successfully."}),

      return result.webhook
    } catch (err) {

      console.error('Error creating webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({

=======
        variant: "destructive",
        title: "Error creating webhook",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        description: err instanceof Error ? err.message : 'An unknown error occurred'})

    } finally {
      set_loading (false);
    }

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Update the webhook in the list

      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook

      ));
      toast({
        title: isActive ? "Webhook Activated" : "Webhook Deactivated"
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return result
    } catch (err) {
      console && console.error('Error toggling webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

=======
        title: "Error updating webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

    } finally {
      set_loading (false);
    }
  }


        variant: "destructive",
        title: "Error updating webhook",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),

      toast({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return result
    } catch (err) {
      console && console.error('Error deleting webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

=======
        title: "Error deleting webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

    } finally {
      set_loading (false);
    }
  }


        variant: "destructive",
        title: "Error deleting webhook",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
        responseBody: result.responseBody
      }),

      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Update last triggered timestamp

      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook

      ));
      toast({

=======

      )),
      
      toast({

        title: "Webhook Test Sent",
        description: `Test completed with status: ${result && result.status} ${result && result.statusText}`});
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      return result
    } catch (err) {
      console && console.error('Error testing webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({

=======
        title: "Error testing webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

    } finally {
      set_loading (false);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
  }

;

  return {
    webhooks;
    loading;
    error;

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
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

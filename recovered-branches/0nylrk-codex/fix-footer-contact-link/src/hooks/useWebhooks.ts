

export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';

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

  // Helper to get the base window.URL for webhook functions
  const _getWebhookUrl = () => {_// import.meta may be undefined when this hook is executed in a Node
    // environment (e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process.env.
    const _env = (import.meta as any)?.env ?? process.env;
    const _url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    return `${url}/functions/v1/webhook-manager`;
  };

  // Fetch user's webhooks
  const _fetchWebhooks = async () => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getWebhookUrl()}/webhooks`, {_method: 'GET', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        }
      });

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
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getWebhookUrl()}/create`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({_name, _url, _eventTypes, _secret})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to create webhook');}

      // Add the new webhook to the list
      setWebhooks(prev => [result.webhook, ...prev]);
      
      toast({_title: "Webhook Created", _description: "Your webhook has been created successfully."});
      
      return result.webhook;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error creating webhook", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Toggle webhook active status
  const _toggleWebhook = async (_webhookId: string, _isActive: boolean) => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getWebhookUrl()}/toggle`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
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
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getWebhookUrl()}/delete`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({_webhookId})
      });

      const _result = await response.json();
      
      if (!response.ok) {_throw new Error(result.error || 'Failed to delete webhook');}

      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId));
      
      toast({_title: "Webhook Deleted", _description: "The webhook has been deleted successfully."});
      
      return result;
    } catch (err) {_setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive", _title: "Error deleting webhook", _description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {_setLoading(false);}
  };

  // Test webhook
  const _testWebhook = async (_webhookId: string, _eventType: WebhookEventType) => {_if (!user) return;
    
    setLoading(true);
    setError(null);
    setTestResult(null);
    
    try {
      const { data: { session} } = await supabase.auth.getSession();
      if (!session) {_setError("Authentication required");
        return;}

      const _response = await fetch(`${_getWebhookUrl()}/test`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
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
}

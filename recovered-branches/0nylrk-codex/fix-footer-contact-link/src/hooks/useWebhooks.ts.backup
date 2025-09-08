
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';

export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
;
<<<<<<< HEAD

export interface Webhook {


export interface Webhook {;



=======


export interface Webhook {};
export interface Webhook {;

export interface Webhook {

export interface Webhook {};
export interface Webhook {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  created_at: string,
  last_triggered_at: string | null;
}

export interface TestWebhookResult {;
  status: number;
  statusText: string,
  responseBody: string;
}

<<<<<<< HEAD

export function useWebhooks() {;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const { user } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);


<<<<<<< HEAD
=======
  // Helper to get the base URL for webhook functions
  const getWebhookUrl = () => {
    // import.meta may be undefined when this hook is executed in a Node
    // environment (e.g. during server side rendering or tests). Using optional
    // chaining avoids a TypeError in those cases and falls back to process.env.


>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Helper to get the base URL for webhook functions
  const getWebhookUrl = () => {

    // import && import.meta may be undefined when this hook is executed in a Node
    // environment (e && e.g. during server side rendering or tests). Using optional

    // chaining avoids a TypeError in those cases and falls back to process && process.env.
    const env = (import && import.meta as any)?.env ?? process ;
    const url = env && env.VITE_SUPABASE_URL || env && env.SUPABASE_URL;

<<<<<<< HEAD


=======
    return `${url}/functions/v1/webhook-manager`
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
<<<<<<< HEAD


=======

      setWebhooks(result.webhooks |[])
const env = (import.meta as any)?.env ?? process.env,;
const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,;
    return `${url}/functions/v1/webhook-manager``  },
  // Fetch user's webhooks'
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    const env = (import.meta as any)?.env ?? process.env,
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,`
    return `${url}/functions/v1/webhook-manager`
  },
'
  // Fetch user's webhooks;
  const fetchWebhooks = async () => {}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!user) return,
    
    setLoading(true),
    setError(null),


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } catch (err) {
      console && console.error('Error fetching webhooks:', err);

      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({"
        variant: "destructive";

<<<<<<< HEAD

        title: "Error fetching webhooks",

        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  created_at: string,
  last_triggered_at: string | null;
}
export interface TestWebhookResult {};
  status: number;
  status_text: string,
  response_body: string;
}
export /**;
 * use_webhooks - Function description;
 */
function use_webhooks() {}
  const { user } = use_auth ();
  const [webhooks, set_webhooks] = useState < Webhook[]>([]);
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [test_result, setTestResult] = useState < TestWebhookResult | null>(null);

;
  // Helper to get the base URL for webhook functions;
  const getWebhookUrl = () =>: any {}
    // import.meta may be undefined when this hook is executed in a Node;
    // environment (e.g. during server side rendering or tests). Using optional;
    // chaining avoids a TypeError in those cases and falls back to process.env.;
    const env = (import.meta as any)?.env ?? process.env;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;`
    return `${url}/functions / v1 / webhook - manager`;
  }
;'
  // Fetch user's webhooks;
  const fetch_webhooks = async () => {}
    // Check condition;
if (return) {}
  $2;
}
    set_loading (true);
    set_error (null);
;
    try {}
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;
if ( {) {}
  $2;
}"
        set_error ("Authentication required");
        return;
      }`
      const response = await fetch (`${getWebhookUrl ()}/webhooks`, {'
        method: 'GET',
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'

          'Content - Type': 'application / json';
      });
      const result = await response.json ();
<<<<<<< HEAD

;
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to fetch webhooks');
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch webhooks')
      }
      setWebhooks(result.webhooks |[])

;
export function useWebhooks() {;
  const { user } = useAuth(),;
  const [webhooks, setWebhooks] = useState<Webhook[]>([]),;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null),;
  // Helper to get the base URL for webhook functions;
  const getWebhookUrl = () => {;
    // import.meta may be undefined when this hook is executed in a Node;
    // environment (e.g. during server side rendering or tests). Using optional;
    // chaining avoids a TypeError in those cases and falls back to process.env.;
    const env = (import.meta as any)?.env ?? process.env,;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,;
    return `${url}/functions/v1/webhook-manager`;
  },;
  // Fetch user's webhooks;
  const fetchWebhooks = async () => {;
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
      const response = await fetch(`${getWebhookUrl()}/webhooks`, {;
        method: 'GET',;
        headers: {;
          'Authorization': `Bearer ${session.access_token}`,;
          'Content-Type': 'application/json';
        }
      }),;
      const result = await response.json(),;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to fetch webhooks');
      }


      setWebhooks(result.webhooks || [])
      setWebhooks(result.webhooks || [])

    } catch (err) {
      console.error('Error fetching webhooks:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
=======


      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to fetch webhooks')
      setWebhooks(result.webhooks |[])

  const { user } = useAuth(),;
  const [webhooks, setWebhooks] = useState<Webhook[]>([]),;

  const [error, setError] = useState<string | null>(null),;
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null),;

      setWebhooks(result.webhooks || [])
      setWebhooks(result.webhooks || [])


        title: "Error fetching webhooks",

        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}

      set_loading (false);
    }

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },

  // Create new webhook;
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {}

    if (!user) return,
    
    setLoading(true),
    setError(null),
<<<<<<< HEAD

    


=======


    try {

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");

>>>>>>> origin/cursor/delete-old-data-records-6bba
          name;

          url;
          eventTypes;
          secret;
        })
      });
<<<<<<< HEAD


      const result = await response && response.json();

        description: "Your webhook has been created successfully."});


=======
      const result = await response && response.json();
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create webhook')
      }
      // Add the new webhook to the list
      setWebhooks(prev => [result && result.webhook, ...prev]);
      toast({
        title: "Webhook Created"
        description: "Your webhook has been created successfully."});
      return result && result.webhook
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } catch (err) {
      console && console.error('Error creating webhook:', err);

      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({"
        variant: "destructive";


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  // Create new webhook;
  const create_webhook = async (name: string, url: string, event_types: WebhookEventType[], secret?: string) => {
    // Check condition
if (return) {
  $2
<<<<<<< HEAD
=======
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
    set_loading (true);
    set_error (null);
;

          name;
          url;
          event_types,
          secret;
        });
      });
;
      const result = await response.json ();
;

<<<<<<< HEAD
      // Check condition
if ( {) {
  $2
}
        throw new Error (result.error || 'Failed to create webhook');
=======
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;

      }
>>>>>>> origin/cursor/delete-old-data-records-6bba


      // Add the new webhook to the list

      setWebhooks(prev => [result.webhook, ...prev]),

      toast({

<<<<<<< HEAD

        title: "Webhook Created",

=======
        title: "Webhook Created",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: "Your webhook has been created successfully."});
      // Add the new webhook to the list;
      set_webhooks (prev => [result.webhook, ...prev]);
;
      toast ({

        title: "Webhook Created",
    } catch (err) {}
'
      console.error('Error creating webhook:', err),'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
<<<<<<< HEAD

      toast({

        variant: "destructive",
        title: "Error creating webhook",


        title: "Webhook Created",
        description: "Your webhook has been created successfully."}),
      
      return result.webhook
    } catch (err) {
      console.error('Error creating webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error creating webhook"
        variant: "destructive",
        title: "Error creating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  // Toggle webhook active status;
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {}
    } finally {}
      set_loading (false);
    }
  }

    if (!user) return,
    
    setLoading(true),
    setError(null),
<<<<<<< HEAD

    

=======


    try {

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");

        };
        body: JSON && JSON.stringify({ webhookId, isActive })

      });

      const result = await response && response.json();
      
      if (!response && response.ok) {'
        throw new Error(result && result.error || 'Failed to update webhook')

      }


>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Add the new webhook to the list;
      setWebhooks(prev => [result.webhook, ...prev]),;

      return result.webhook;
    } catch (err) {;'
      console.error('Error creating webhook:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

    } finally {;
      setLoading(false);
    }
  },;
  // Toggle webhook active status;
<<<<<<< HEAD

  const toggleWebhook = async (webhookId: string, isActive: boolean) => {;

=======
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!user) return,;
    setLoading(true),;
    setError(null),;
    try {;
<<<<<<< HEAD

      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;"
        setError("Authentication required"),;

=======
      }
      if (!session) {;
        }
        setError("Authentication required"),;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return;
      }
;`
      const response = await fetch(`${getWebhookUrl()}/toggle`, {;'
        method: 'POST',;
        headers: {;'`
          'Authorization': `Bearer ${session.access_token}`,;'
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId, isActive });
      }),;
<<<<<<< HEAD

      const result = await response.json(),;
      if (!response.ok) {;'
        throw new Error(result.error || 'Failed to update webhook');

      }


      // Update the webhook in the list


;
      // Update the webhook in the list;
      setWebhooks(prev => prev.map(webhook =>;
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook;
      )),;

      return result;
    } catch (err) {;'
      console.error('Error toggling webhook:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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
      if (!session) {;"
        setError("Authentication required"),;

        return;
      }
;`
      const response = await fetch(`${getWebhookUrl()}/delete`, {;'
        method: 'POST',;
        headers: {;'`
          'Authorization': `Bearer ${session.access_token}`,;'
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId });
      }),;

      const result = await response.json(),;
      if (!response.ok) {;'
        throw new Error(result.error || 'Failed to delete webhook');

      }




      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),

      toast({
        title: "Webhook Deleted",

        description: "The webhook has been deleted successfully."}),

      



      return result
    } catch (err) {
      console && console.error('Error deleting webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        title: "Error deleting webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})


        variant: "destructive";
        title: "Error deleting webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
;

  // Delete webhook;
  const delete_webhook = async (webhook_id: string) => {}
=======
      if (!response.ok) {;
        }
        throw new Error(result.error || 'Failed to update webhook');'
      }


      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
      }
      if (!session) {
        }
        setError("Authentication required");"
return;
      });
        "title": "Error updating webhook","
        "description": err instanceof Error ? err && err.message : 'An unknown error occurred'})'
      ));
      toast({"
        title: isActive ? "Webhook Activated" : "Webhook Deactivated"'`
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});

      )),

      toast({
        title: isActive ? "Webhook Activated" : "Webhook Deactivated"
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});


      toast({"
        title: isActive ? "Webhook Activated" : "Webhook Deactivated",'`
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`}),


      return result

    } catch (err) {
      console && console.error('Error toggling webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({


;
  // Toggle webhook active status;
  const toggle_webhook = async (webhook_id: string, is_active: boolean) => {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Check condition;
if (return) {}
  $2;
}
    set_loading (true);
    set_error (null),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {}
      const { data: { session } } = await supabase.auth.get_session ();
      // Check condition;
if ( {) {}
  $2;
}"
        set_error ("Authentication required");
<<<<<<< HEAD

        return;
      }`
      const response = await fetch (`${getWebhookUrl ()}/delete`, {'
=======
        return;
      }`
      const response = await fetch (`${getWebhookUrl ()}/toggle`, {'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        method: 'POST',
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'
          'Content - Type': 'application / json';
        }
<<<<<<< HEAD
        body: JSON.stringify ({ webhook_id });
      });
;
=======
        body: JSON.stringify ({ webhook_id, is_active });
      });
;
      const result = await response.json ();
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
      // Check condition;
if ( {) {}
  $2;
}'
<<<<<<< HEAD
        throw new Error (result.error || 'Failed to delete webhook');
      }
      // Remove the webhook from the list;
      set_webhooks (prev => prev.filter (webhook => webhook.id !== webhook_id));
;
      toast ({"
        title: "Webhook Deleted","
        description: "The webhook has been deleted successfully."});
;
      return result;
    } catch (err) {'
      console.error ('Error deleting webhook:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error deleting webhook",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});

    } finally {
      set_loading (false);
    }
  }
      
      return result
    } catch (err) {
      console.error('Error deleting webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error deleting webhook"
        variant: "destructive",
        title: "Error deleting webhook",

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}

=======
        throw new Error (result.error || 'Failed to update webhook');
      }
      // Update the webhook in the list;
      set_webhooks (prev => prev.map (webhook =>;
        webhook.id === webhook_id ? { ...webhook, is_active: is_active } : webhook));
;
      toast ({"
        title: is_active ? "Webhook Activated" : "Webhook Deactivated",'`
        description: `The webhook has been ${is_active ? 'activated' : 'deactivated'} successfully.`});
;
      return result;
    } catch (err) {'
      console.error ('Error toggling webhook:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error updating webhook",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});

    } finally {}
      set_loading (false);
    }
  }


        variant: "destructive";
        title: "Error updating webhook"
        variant: "destructive",
        title: "Error updating webhook",

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setLoading(false)
    }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!user) return,
    
    setLoading(true),
    setError(null),
<<<<<<< HEAD
    setTestResult(null),

    
=======


    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({ webhookId })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to delete webhook')

      }

      // Check condition,
if ( {) {
  $2
}
        set_error ("Authentication required");"
      toast({
        title: "Webhook Deleted"
        description: "The webhook has been deleted successfully."});
>>>>>>> origin/cursor/delete-old-data-records-6bba


    try {

<<<<<<< HEAD
      const { data: { session } } = await supabase && supabase.auth.getSession();

=======

      setLoading(false)
    }


  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return,
    
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (!session) {
        setError("Authentication required");
        return

      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to test webhook')

      }

      // Store test result
      setTestResult({

        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody

      });

    try {

      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {"
        setError("Authentication required"),
        return;
      }`
      const response = await fetch(`${getWebhookUrl()}/test`, {'
        method: 'POST'
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'

          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId, eventType })
      });
      const result = await response.json();

      });

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

      // Remove the webhook from the list;
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),;

      return result;
    } catch (err) {;'
      console.error('Error deleting webhook:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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

<<<<<<< HEAD
      const { data: { session } } = await supabase.auth.getSession(),;
      if (!session) {;"
        setError("Authentication required"),;

=======
;
      // Update the webhook in the list;
      setWebhooks(prev => prev.map(webhook =>;
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook;
      )),;

      return result;
    } catch (err) {;'
      console.error('Error toggling webhook:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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
      }
      if (!session) {;
        }
        setError("Authentication required"),;"
        return;
      }
;`
      const response = await fetch(`${getWebhookUrl()}/delete`, {;'
        method: 'POST',;
        headers: {;'`
          'Authorization': `Bearer ${session.access_token}`,;'
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId });
      }),;
      if (!response.ok) {;
        }
        throw new Error(result.error || 'Failed to delete webhook');'
      }

      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),

      toast({
        title: "Webhook Deleted",

        description: "The webhook has been deleted successfully."}),

      return result
    } catch (err) {
      console && console.error('Error deleting webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        title: "Error deleting webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {"
        setError("Authentication required");
        return;

      });

      const result = await response && response.json();

  // Delete webhook;
  const delete_webhook = async (webhook_id: string) => {}
    // Check condition;
if (return) {}
  $2;
}
    set_loading (true);
    set_error (null),
    try {
      }
      // Check condition,
if ( {) {
  $2
}
        set_error ("Authentication required");"
        return;
      }`
      const response = await fetch (`${getWebhookUrl ()}/delete`, {'
        method: 'POST',
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'
          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ webhook_id });
      });
;
;
      // Check condition;
if ( {) {}
  $2;
}'
        throw new Error (result.error || 'Failed to delete webhook');
      }
      // Remove the webhook from the list;
      set_webhooks (prev => prev.filter (webhook => webhook.id !== webhook_id));
;
      toast ({"
        title: "Webhook Deleted","
        description: "The webhook has been deleted successfully."});
;
      return result;
    } catch (err) {'
      console.error ('Error deleting webhook:', err);'
      set_error (err instanceof Error ? err.message : 'An unknown error occurred');
      toast ({"
        variant: "destructive";"
        title: "Error deleting webhook",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {}
      set_loading (false);
    }
  }

        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
      setLoading(false)
    }

  },

  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setTestResult(null),
      if (!response.ok) {
        throw new Error(result.error |'Failed to test webhook')
      }
      // Store test result
      setTestResult({
        status: result.status;
        statusText: result.statusText
        responseBody: result.responseBody
      });



    try {
      if (!session) {
        setError("Authentication required");
        return

      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to test webhook')

      }

      // Store test result
      setTestResult({

        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody

      });

    try {

      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {"
        setError("Authentication required"),
        return;
      }`
      const response = await fetch(`${getWebhookUrl()}/test`, {'
        method: 'POST'
        headers: {'`
          'Authorization': `Bearer ${session.access_token}`;'

          'Content-Type': 'application/json'
        }
        body: JSON.stringify({ webhookId, eventType })
      });
      const result = await response.json();

      });

;

      // Remove the webhook from the list;
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),;

      return result;
    } catch (err) {;'
      console.error('Error deleting webhook:', err),;'
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),;

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
      }
      if (!session) {;
        }
        setError("Authentication required"),;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return;
      }
;`
      const response = await fetch(`${getWebhookUrl()}/test`, {;'
        method: 'POST',;
        headers: {;'`
          'Authorization': `Bearer ${session.access_token}`,;'
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({ webhookId, eventType });
      }),;
<<<<<<< HEAD

      const result = await response.json(),;
      if (!response.ok) {;'
        throw new Error(result.error || 'Failed to test webhook');

      }




=======
      if (!response.ok) {;
        }
        throw new Error(result.error || 'Failed to test webhook');'
      }

>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,

<<<<<<< HEAD
        responseBody: result.responseBody
      }),
      



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Update last triggered timestamp

      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook;
      ));
<<<<<<< HEAD

      toast({



=======
      toast({}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      )),
      
      toast({}
"
        title: "Webhook Test Sent",`

        description: `Test completed with status: ${result && result.status} ${result && result.statusText}`});

<<<<<<< HEAD



      }
      // Store test result
      setTestResult({
        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody
      });
      // Update last triggered timestamp
      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      ));
      toast({
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result && result.status} ${result && result.statusText}`});
      return result
    } catch (err) {
      console && console.error('Error testing webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        title: "Error testing webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

        variant: "destructive";
        title: "Error testing webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
;
  // Test webhook;
  const test_webhook = async (webhook_id: string, event_type: WebhookEventType) => {
    // Check condition
if (return) {
  $2

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    set_loading (true);
    set_error (null);
    setTestResult (null),

          'Content - Type': 'application / json';
        }
        body: JSON.stringify ({ webhook_id, event_type });
      });
;
      const result = await response.json ();
;

        status: result.status;
        status_text: result.status_text,
        response_body: result.response_body;
      });
;
      // Update last triggered timestamp;
      set_webhooks (prev => prev.map (webhook =>;
        webhook.id === webhook_id ? { ...webhook, last_triggered_at: new Date ().toISOString () } : webhook));
;

<<<<<<< HEAD
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
    } finally {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      set_loading (false);
    }
  }
;
<<<<<<< HEAD



=======
      
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      ));
      toast({
        title: "Webhook Test Sent"
        description: `Test completed with status: ${result.status} ${result.statusText}`});
      )),
      
      toast({
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result.status} ${result.statusText}`}),
      
      return result
    } catch (err) {
      console.error('Error testing webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error testing webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  }
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      ));
      toast({
        title: "Webhook Test Sent"
        description: `Test completed with status: ${result.status} ${result.statusText}`});
      )),
      
      toast({
        title: "Webhook Test Sent",
        description: `Test completed with status: ${result.status} ${result.statusText}`}),

        variant: "destructive";
        title: "Error testing webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {

    }
  }

    webhooks;
    loading;

  }
}"
        variant: "destructive","
        title: "Error testing webhook",'
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {}
      setLoading(false)

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
        variant: "destructive",
        title: "Error testing webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
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

    test_result;
    fetch_webhooks;
    create_webhook;
    toggle_webhook;
    delete_webhook;
    test_webhook;
    clearTestResult: () => setTestResult (null);

  }
}
;
  }
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
"
import { useState } from "react",;"
import { useAuth } from "@/hooks/useAuth",;"
import { supabase } from "@/integrations/supabase/client",;"
import { toast } from "@/hooks/use-toast",;
;'

export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired',;
;
export interface Webhook {;
  id:string,;
  name:string,;
  url:string,;
  event_types:WebhookEventType[],;
  is_active:boolean,;
  created_at:string,;
  last_triggered_at:string | null;}
;
export interface TestWebhookResult {;
  status:number,;
  statusText:string,;
  responseBody:string;
}
;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba





<<<<<<< HEAD
=======
        throw new Error(result.error || 'Failed to fetch webhooks'),;
      }
;
      setWebhooks(result.webhooks || []),;

        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Create new webhook;
  const createWebhook = async (name:string, url:string, eventTypes:WebhookEventType[], secret?:string) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;

          'Content-Type':'application/json';
        },;
        body:JSON.stringify({;
          name,;
          url,;
          eventTypes,;
          secret;
        });
      }),;
;
      const result = await response.json(),;
      ;

        throw new Error(result.error || 'Failed to create webhook'),;
      }
;
      // Add the new webhook to the list;
      setWebhooks(prev => [result.webhook, ...prev]),;
      ;

        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Toggle webhook active status;
  const toggleWebhook = async (webhookId:string, isActive:boolean) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;

          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ webhookId, isActive });
      }),;
;
      const result = await response.json(),;
      ;

        throw new Error(result.error || 'Failed to update webhook'),;
      }
;
      // Update the webhook in the list;
      setWebhooks(prev => prev.map(webhook => ;
        webhook.id === webhookId ? { ...webhook, is_active:isActive } webhook;
      )),;
      ;

        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Delete webhook;
  const deleteWebhook = async (webhookId:string) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;

          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ webhookId });
      }),;
;
      const result = await response.json(),;
      ;

        throw new Error(result.error || 'Failed to delete webhook'),;
      }
;
      // Remove the webhook from the list;
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),;
      ;

        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  // Test webhook;
  const testWebhook = async (webhookId:string, eventType:WebhookEventType) => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    setTestResult(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;

          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ webhookId, eventType });
      }),;
;
      const result = await response.json(),;
      ;

        throw new Error(result.error || 'Failed to test webhook'),;
      }
;
      // Store test result;
      setTestResult({;
        status:result.status,;
        statusText:result.statusText,;
        responseBody:result.responseBody;
      }),;
      ;
      // Update last triggered timestamp;
      setWebhooks(prev => prev.map(webhook => ;
        webhook.id === webhookId ? { ...webhook, last_triggered_at:new Date().toISOString() } webhook;
      )),;
      ;

        description:err instanceof Error ? err.message :'An unknown error occurred'}),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  return {;
    webhooks,;
    loading,;
    error,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;

'Content-Type': 'application/json' 
};
//Remove the webhook from the list setWebhooks (prev => prev.filter (webhook => webhook.id !== webhookId) );
return result;

  webhooks;
loading;
error;
testResult;
fetchWebhooks;
createWebhook;
toggleWebhook;
deleteWebhook;
testWebhook;
clearTestResult: () => setTestResult (null) 
}
}

}
;
  }

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

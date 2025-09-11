




import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';

import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
;

export interface Webhook {
=======


export interface Webhook {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;


  created_at: string,
  last_triggered_at: string | null
}

export interface TestWebhookResult {;
  status: number;
  statusText: string,
  responseBody: string
}

export function useWebhooks() {;


  const { user } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired',

export interface Webhook {
  id: string,
  name: string,
  url: string,
  event_types: WebhookEventType[],
  is_active: boolean,
  created_at: string,
  last_triggered_at: string | null
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired',;
export interface Webhook {;
  id: string,;
  name: string,;
  url: string,;
  event_types: WebhookEventType[],;
  is_active: boolean,;
  created_at: string,;
  last_triggered_at: string | null;
}
;
export interface TestWebhookResult {;
  status: number,;
  statusText: string,;
  responseBody: string;
}

export function useWebhooks() {
  const { user } = useAuth(),
  const [webhooks, setWebhooks] = useState<Webhook[]>([]),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null),

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
    const env = (import.meta as any)?.env ?? process.env,
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,
    return `${url}/functions/v1/webhook-manager`
  },

  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        title: "Error fetching webhooks",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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





      setWebhooks(result.webhooks || [])
    } catch (err) {
      console.error('Error fetching webhooks:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
        variant: "destructive";
        title: "Error fetching webhooks"
        variant: "destructive",
        title: "Error fetching webhooks",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } finally {
      set_loading (false);
    }
  }
  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return;
    setLoading(true);
    setError(null);
  },

  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return
      }
      const response = await fetch(`${getWebhookUrl()}/create`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({
          name;
          url;
          eventTypes
          secret
        })
      });


      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to create webhook')

      }
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error |'Failed to create webhook')
      }
      // Add the new webhook to the list

      setWebhooks(prev => [result && result.webhook, ...prev]);
      

      toast({
        title: "Webhook Created"
        description: "Your webhook has been created successfully."});

      
      return result && result.webhook

    } catch (err) {
      console && console.error('Error creating webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";

        title: "Error creating webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
        variant: "destructive";
        title: "Error creating webhook"
        variant: "destructive",
        title: "Error creating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})

    } finally {
      set_loading (false);
    }
  }
  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return;
    setLoading(true);
    setError(null)
  },

  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    


    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({ webhookId, isActive })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to update webhook')

      }



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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook =>
        webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook
      ));
      toast({
        title: isActive ? "Webhook Activated" : "Webhook Deactivated"
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`});
      )),
      
      toast({
        title: isActive ? "Webhook Activated" : "Webhook Deactivated",
        description: `The webhook has been ${isActive ? 'activated' : 'deactivated'} successfully.`}),
      
      return result
    } catch (err) {
      console && console.error('Error toggling webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
        title: "Error updating webhook"
        variant: "destructive",
        title: "Error updating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  }
  // Delete webhook
  const deleteWebhook = async (webhookId: string) => {
    if (!user) return;
    setLoading(true);
    setError(null)
  },

  // Delete webhook
  const deleteWebhook = async (webhookId: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    


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
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      // Remove the webhook from the list

      setWebhooks(prev => prev && prev.filter(webhook => webhook && webhook.id !== webhookId));
      

      toast({
        title: "Webhook Deleted"
        description: "The webhook has been deleted successfully."});
=======



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
        variant: "destructive";
        title: "Error deleting webhook"
        variant: "destructive",
        title: "Error deleting webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
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
  },

  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setTestResult(null),
    


    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({ webhookId, eventType })
      });

      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to test webhook')

      }
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
      // Store test result
      setTestResult({

        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody

      });
=======



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



      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
        responseBody: result.responseBody
      }),
      
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
        description: `Test completed with status: ${result && result.status} ${result && result.statusText}`});
      
      return result
    } catch (err) {
      console && console.error('Error testing webhook:', err);
      setError(err instanceof Error ? err && err.message : 'An unknown error occurred');
      toast({
        variant: "destructive";
        title: "Error testing webhook"
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      set_loading (false);
    }
  }

;

  return {
    webhooks;
    loading;
    error;

    test_result;
    fetch_webhooks;
    create_webhook;
    toggle_webhook;
    delete_webhook;
    test_webhook;
    clearTestResult: () => setTestResult (null);

  }
}
=======


  }
}
;

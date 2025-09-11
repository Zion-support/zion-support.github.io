




import {useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { useState } from './react';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';
;

export interface Webhook {;

export interface Webhook {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export interface Webhook {
=======


export interface Webhook {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;


export interface TestWebhookResult {;
  status: number;
  statusText: string,
  responseBody: string
}

export function useWebhooks() {;
=======

  const { user } = useAuth();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null);
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

  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    


      const result = await response && response.json();
      
      if (!response && response.ok) {
        throw new Error(result && result.error || 'Failed to fetch webhooks')
      }

      setWebhooks(result && result.webhooks || [])

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





=======        variant: "destructive";
        title: "Error fetching webhooks"
        variant: "destructive",
        title: "Error fetching webhooks",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
        variant: "destructive",
        title: "Error fetching webhooks",

        description: err instanceof Error ? err.message : 'An unknown error occurred'})    } finally {
      set_loading (false);
    }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    
        description: err instanceof Error ? err.message : 'An unknown error occurred'});
    } finally {
      set_loading (false);
    }
  }
        };
        body: JSON && JSON.stringify({
    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
=======
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");        return
      }
      const response = await fetch(`${getWebhookUrl()}/create`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${session.access_token}`;
          'Content-Type': 'application/json'
        }
        body: JSON.stringify({
    try {
      const { data: { session } } = await supabase && supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return

        };
        body: JSON && JSON.stringify({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      setWebhooks(prev => [result && result.webhook, ...prev]);
      

      toast({
        title: "Webhook Created"
        description: "Your webhook has been created successfully."});

      
      return result && result.webhook

        description: "Your webhook has been created successfully."}),
      
      return result.webhook
    } catch (err) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    }  }
  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return;
    setLoading(true);
    setError(null)
=======  },

  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    


    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
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

=======
=======

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


      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, is_active: isActive } : webhook

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Remove the webhook from the list
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),
      
      toast({
        title: "Webhook Deleted",
        description: "The webhook has been deleted successfully."}),
      
        variant: "destructive";
        title: "Error deleting webhook",
        description: err instanceof Error ? err && err.message : 'An unknown error occurred'})
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
      
      return result
    } catch (err) {
      console.error('Error deleting webhook:', err),
      setError(err instanceof Error ? err.message : 'An unknown error occurred'),
      toast({
=======        variant: "destructive";
        title: "Error deleting webhook"
        variant: "destructive",
        title: "Error deleting webhook",
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    if (!user) return,
    
    setLoading(true),
    setError(null),
    setTestResult(null),
    


    try {
      const { data: { session } } = await supabase.auth.getSession(),
      if (!session) {
        setError("Authentication required"),
        return
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
      // Store test result
      setTestResult({
        status: result.status;
        statusText: result.statusText
        responseBody: result.responseBody
      });

=======
=======

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
        status: result && result.status;
        statusText: result && result.statusText,
        responseBody: result && result.responseBody

      });
=======



=======
      // Store test result
      setTestResult({
        status: result.status,
        statusText: result.statusText,
        responseBody: result.responseBody
      }),
      
      setWebhooks(prev => prev && prev.map(webhook => 
        webhook && webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook

      ));
      toast({


      )),
      
      toast({

        title: "Webhook Test Sent",
        description: `Test completed with status: ${result && result.status} ${result && result.statusText}`});
      



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
    } finally {
      set_loading (false);
    }
  }
;
;
  return {
    webhooks;
    loading;
    error;
    clearTestResult: () => setTestResult(null)
  }
}
        variant: "destructive",
        title: "Error testing webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
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
=======
=======
    test_result;
    fetch_webhooks;
    create_webhook;
    toggle_webhook;
    delete_webhook;
    test_webhook;
    clearTestResult: () => setTestResult (null);

import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
;
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
export function useWebhooks() {;
  const { user } = useAuth(),;
  const [webhooks, setWebhooks] = useState<Webhook[]>([]),;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null),;
;
  // Helper to get the base URL for webhook functions;
  const getWebhookUrl = () => {;
    // import.meta may be undefined when this hook is executed in a Node;
    // environment (e.g. during server side rendering or tests). Using optional;
    // chaining avoids a TypeError in those cases and falls back to process.env.;
    const env = (import.meta as any)?.env ?? process.env,;
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL,;
    return `${url}/functions/v1/webhook-manager`,;
  },;
;
  // Fetch user's webhooks;
  const fetchWebhooks = async () => {;
    if (!user) return,;
    ;
    setLoading(true),;
    setError(null),;
    ;
    try {;
      const { data:{ session } } = await supabase.auth.getSession(),;
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getWebhookUrl()}/webhooks`, {;
        method:'GET',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        }
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to fetch webhooks'),;
      }
;
      setWebhooks(result.webhooks || []),;
    } catch (err) {;
      console.error('Error fetching webhooks:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error fetching webhooks",;
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
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getWebhookUrl()}/create`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
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
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to create webhook'),;
      }
;
      // Add the new webhook to the list;
      setWebhooks(prev => [result.webhook, ...prev]),;
      ;
      toast({;
        title:"Webhook Created",;
        description:"Your webhook has been created successfully."}),;
      ;
      return result.webhook,;
    } catch (err) {;
      console.error('Error creating webhook:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error creating webhook",;
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
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getWebhookUrl()}/toggle`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ webhookId, isActive });
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to update webhook'),;
      }
;
      // Update the webhook in the list;
      setWebhooks(prev => prev.map(webhook => ;
        webhook.id === webhookId ? { ...webhook, is_active:isActive } webhook;
      )),;
      ;
      toast({;
        title:isActive ? "Webhook Activated" :"Webhook Deactivated",;
        description:`The webhook has been ${isActive ? 'activated' :'deactivated'} successfully.`}),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error toggling webhook:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error updating webhook",;
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
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getWebhookUrl()}/delete`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ webhookId });
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
        throw new Error(result.error || 'Failed to delete webhook'),;
      }
;
      // Remove the webhook from the list;
      setWebhooks(prev => prev.filter(webhook => webhook.id !== webhookId)),;
      ;
      toast({;
        title:"Webhook Deleted",;
        description:"The webhook has been deleted successfully."}),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error deleting webhook:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error deleting webhook",;
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
      if (!session) {;
        setError("Authentication required"),;
        return,;
      }
;
      const response = await fetch(`${getWebhookUrl()}/test`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${session.access_token}`,;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({ webhookId, eventType });
      }),;
;
      const result = await response.json(),;
      ;
      if (!response.ok) {;
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
      toast({;
        title:"Webhook Test Sent",;
        description:`Test completed with status:${result.status} ${result.statusText}`}),;
      ;
      return result,;
    } catch (err) {;
      console.error('Error testing webhook:', err),;
      setError(err instanceof Error ? err.message :'An unknown error occurred'),;
      toast({;
        variant:"destructive",;
        title:"Error testing webhook",;
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
    clearTestResult:() => setTestResult(null);
  },; export type WebhookEventType = 'new application' | 'quote received' | 'milestone approved' | 'talent hired';
  //import.meta may be undefined when this hook is executed in a Node //environment (e.g. during server side rendering or tests) . Using optional //chaining avoids a TypeError in those cases and falls back to process.env. setLoading (true);
setError (null);
try {
  
}getWebhookUrl () 
}/webhooks`, {
  method: 'GET', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
}
});
}finally {
  setLoading (false) 
}
};
//Create new webhook const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
  if (!user) return;
setError (null);
try {
  
}getWebhookUrl () 
}/create`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
//Add the new webhook to the list setWebhooks (prev => [result.webhook, ...prev]);
return result.webhook 
}catch (err) {
  console.error ('Error creating webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
//Toggle webhook active status const toggleWebhook = async (webhookId: string, isActive: boolean) => {
  if (!user) return;
setError (null);
try {
  
}getWebhookUrl () 
}/toggle`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
return result;
}catch (err) {
  console.error ('Error toggling webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
//Delete webhook const deleteWebhook = async (webhookId: string) => {
  if (!user) return;
setError (null);
try {
  
}getWebhookUrl () 
}/delete`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
//Remove the webhook from the list setWebhooks (prev => prev.filter (webhook => webhook.id !== webhookId) );
return result;
}catch (err) {
  console.error ('Error deleting webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
//Test webhook const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
  if (!user) return;
setError (null);
setTestResult (null);
try {
  
}getWebhookUrl () 
}/test`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  session.access token 
}`;
'Content-Type': 'application/json' 
};
return result;
}catch (err) {
  console.error ('Error testing webhook:', err);
setError (err instanceof Error ? err.message : 'An unknown error occurred');
toast ({
  
}finally {
  setLoading (false) 
}
};
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
clearTestResult: () => setTestResult (null) 
}
}
  }
}
;
  }
}
;
=======

  }
}
;>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}
=======


  }
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export type WebhookEventType = $2;
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
  responseBody: string}

export function useWebhooks() {
  const { user } = useAuth($2);
  const [webhooks, setWebhooks] = useState<Webhook[]>([]),
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [testResult, setTestResult] = useState<TestWebhookResult | null>(null),

  // Helper to get the base URL for webhook functions
  const getWebhookUrl = $2;
    const url = $2;
    return `${url}/functions/v1/webhook-manager`
  },

  // Fetch user's webhooks
  const fetchWebhooks = $2;
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }

      const response = await fetch(`${getWebhookUrl()}/webhooks`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        }
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch webhooks')
      }

      setWebhooks(result.webhooks || [])
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
        variant: "destructive",
        title: "Error fetching webhooks",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  },

  // Create new webhook
  const createWebhook = async (name: string, url: string, eventTypes: WebhookEventType[], secret?: string) => {
    if (!user) return,
    
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }

      const response = await fetch(`${getWebhookUrl()}/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          url,
          eventTypes,
          secret
        })
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create webhook')
      }

      // Add the new webhook to the list
      setWebhooks($2);
      toast($2);
      return result.webhook
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
        variant: "destructive",
        title: "Error creating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  },

  // Toggle webhook active status
  const toggleWebhook = async (webhookId: string, isActive: boolean) => {
    if (!user) return,
    
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }

      const response = await fetch(`${getWebhookUrl()}/toggle`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhookId, isActive })
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to update webhook')
      }

      // Update the webhook in the list
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? { ...webhook, is_active: isActive} : webhook
      )),
      
      toast($2);
      return result
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
        variant: "destructive",
        title: "Error updating webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  },

  // Delete webhook
  const deleteWebhook = $2;
    setLoading($2);
    setError($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }

      const response = await fetch(`${getWebhookUrl()}/delete`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhookId })
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete webhook')
      }

      // Remove the webhook from the list
      setWebhooks(prev = $2;
      toast($2);
      return result
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
        variant: "destructive",
        title: "Error deleting webhook",
        description: err instanceof Error ? err.message : 'An unknown error occurred'})
    } finally {
      setLoading(false)
    }
  },

  // Test webhook
  const testWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    if (!user) return,
    
    setLoading($2);
    setError($2);
    setTestResult($2);
    try {
      const { data: { session } } = await supabase.auth.getSession($2);
      if (!session) {
        setError($2);
        return
      }

      const response = await fetch(`${getWebhookUrl()}/test`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhookId, eventType })
      }),

      const result = await response.json($2);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to test webhook')
      }

      // Store test result
      setTestResult($2);
      // Update last triggered timestamp
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === webhookId ? { ...webhook, last_triggered_at: new Date().toISOString() } : webhook
      )),
      
      toast($2);
      return result
    } catch (err) {
      console.error($2);
      setError($2);
      toast({
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
  }
}

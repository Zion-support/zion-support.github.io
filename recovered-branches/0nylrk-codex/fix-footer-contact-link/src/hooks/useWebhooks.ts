
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type WebhookEventType = 'new_application' | 'quote_received' | 'milestone_approved' | 'talent_hired';

export interface Webhook {
  id: string;
  name: string;
  url: string;
  event_types: WebhookEventType[];
  is_active: boolean;
  created_at: string;
  last_triggered_at: string | null;
}

export interface TestWebhookResult {
  status: number;
  statusText: string;
  responseBody: string;
}

export function useWebhooks() {
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
    const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
    return `${url}/functions/v1/webhook-manager`;
  };

  // Fetch user's webhooks
  const fetchWebhooks = async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Authentication required");
        return;
      }

      const response = await fetch(`${getWebhookUrl()}/webhooks`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch webhooks');
      }

      setWebhooks(result.webhooks || []);
    } catch (err) {
      console.error('Error fetching webhooks:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error fetching webhooks",

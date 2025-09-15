>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> cursor/create-and-deploy-new-content-8735

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
  isActive: boolean;
  createdAt: string;
  lastTriggered?: string;
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
  isActive: boolean;
  createdAt: string;
  lastTriggered?: string;
>>>>>>> cursor/create-and-deploy-new-content-8735
  failureCount: number;
}

export interface WebhookEvent {
  id: string;
  webhookId: string;
  event: string;
  payload: any;
  status: 'pending' | 'success' | 'failed';
  attempts: number;
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  createdAt: string;
  lastAttempt?: string;
  error?: string;
}

interface UseWebhooksOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export const useWebhooks = (options: UseWebhooksOptions = {}) => {
  const { autoRefresh = true, refreshInterval = 30000 } = options;
  
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======

  // Fetch webhooks
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======

  // Fetch webhooks
>>>>>>> cursor/create-and-deploy-new-content-8735
  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/webhooks');
      if (!response.ok) {
        throw new Error('Failed to fetch webhooks');
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      }
      
      const data = await response.json();
      setWebhooks(data.webhooks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  }, []);

>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  // Fetch webhook events
  const fetchEvents = useCallback(async (webhookId?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const url = webhookId ? `/api/webhooks/${webhookId}/events` : '/api/webhook-events';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch webhook events');
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      }
      
      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      setError(err instanceof Error ? err.message : 'Failed to fetch webhook events');
    } finally {
      setLoading(false);
    }
  }, []);

  // Create webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'failureCount'>) => {
    try {
      setLoading(true);
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      setError(null);
      
      const response = await fetch('/api/webhooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create webhook');
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      }
      
      const newWebhook = await response.json();
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      setError(err instanceof Error ? err.message : 'Failed to create webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Update webhook
  const updateWebhook = useCallback(async (id: string, updates: Partial<Webhook>) => {
    try {
      setLoading(true);
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      
      if (!response.ok) {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
        throw new Error('Failed to update webhook');
      }
      
      const updatedWebhook = await response.json();
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === id ? updatedWebhook : webhook
      ));
      return updatedWebhook;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete webhook
  const deleteWebhook = useCallback(async (id: string) => {
    try {
      setLoading(true);
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
        throw new Error('Failed to delete webhook');
      }
      
      setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Test webhook
  const testWebhook = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}/test`, {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
        method: 'POST',
      });
      
      if (!response.ok) {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
        throw new Error('Failed to test webhook');
      }
      
      const result = await response.json();
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to test webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Retry failed event
  const retryEvent = useCallback(async (eventId: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/webhook-events/${eventId}/retry`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to retry webhook event');
      }
      
      const result = await response.json();
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to retry webhook event');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        fetchWebhooks();
        fetchEvents();
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, fetchWebhooks, fetchEvents]);

  // Initial load
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);

>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  return {
    webhooks,
    events,
    loading,
    error,
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
    fetchWebhooks,
    fetchEvents,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    testWebhook,
    retryEvent,
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
  };
};

export default useWebhooks;
export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
  failureCount: number;
<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
export interface WebhookEvent {
  id: string;
  webhookId: string;
  event: string;
  payload: any;
  status: 'pending' | 'success' | 'failed';
  attempts: number;
  createdAt: string;
  lastAttempt?: string;
  error?: string;
<<<<<<< HEAD
};
export interface UseWebhooksOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
};
=======
interface UseWebhooksOptions {
  autoRefresh?: boolean;
  refreshInterval?: number;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
export const useWebhooks = (options: UseWebhooksOptions = {}) => {
  const { autoRefresh = true, refreshInterval = 30000 } = options;
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/webhooks');
      if (!response.ok) {
        throw new Error('Failed to fetch webhooks');
<<<<<<< HEAD
      };
const data = await response.json();
=======
      }
      const data = await response.json();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
      setWebhooks(data.webhooks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    };
  }, []);
  // Fetch webhook events
  const fetchEvents = useCallback(async (webhookId?: string) => {
    try {
      setLoading(true);
      setError(null);
      const url = webhookId ? `/api/webhooks/${webhookId}/events` : '/api/webhook-events';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch webhook events');
<<<<<<< HEAD
      };
const data = await response.json();
=======
      }
      const data = await response.json();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
      setEvents(data.events || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhook events');
    } finally {
      setLoading(false);
    };
  }, []);
  // Create webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'failureCount'>) => {
    try {
      setLoading(true);
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
<<<<<<< HEAD
      };
const newWebhook = await response.json();
=======
      }
      const newWebhook = await response.json();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create webhook');
      throw err;
    } finally {
      setLoading(false);
    };
  }, []);
  // Update webhook
  const updateWebhook = useCallback(async (id: string, updates: Partial<Webhook>) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        throw new Error('Failed to update webhook');
<<<<<<< HEAD
      };
const updatedWebhook = await response.json();
=======
      }
      const updatedWebhook = await response.json();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === id ? updatedWebhook : webhook
      ));
      return updatedWebhook;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update webhook');
      throw err;
    } finally {
      setLoading(false);
    };
  }, []);
  // Delete webhook
  const deleteWebhook = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete webhook');
<<<<<<< HEAD
      };
setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
=======
      }
      setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete webhook');
      throw err;
    } finally {
      setLoading(false);
    };
  }, []);
  // Test webhook
  const testWebhook = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/webhooks/${id}/test`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to test webhook');
<<<<<<< HEAD
      };
const result = await response.json();
=======
      }
      const result = await response.json();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to test webhook');
      throw err;
    } finally {
      setLoading(false);
    };
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
<<<<<<< HEAD
      };
const result = await response.json();
=======
      }
      const result = await response.json();
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to retry webhook event');
      throw err;
    } finally {
      setLoading(false);
    };
  }, []);
  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        fetchWebhooks();
        fetchEvents();
      }, refreshInterval);
      return () => clearInterval(interval);
    };
  }, [autoRefresh, refreshInterval, fetchWebhooks, fetchEvents]);
  // Initial load
  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);
  return {
    webhooks,
    events,
    loading,
    error,
    fetchWebhooks,
    fetchEvents,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    testWebhook,
<<<<<<< HEAD
    retryEvent};
  };
=======
    retryEvent,
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-395f

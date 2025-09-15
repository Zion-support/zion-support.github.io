/**
 * Custom hook for managing webhooks
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchJSON, fetchWithRetry } from '../utils/fetchWithRetry';

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastTriggered?: string;
  failureCount: number;
}

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
}

export interface CreateWebhookData {
  name: string;
  url: string;
  events: string[];
  secret?: string;
}

export interface UpdateWebhookData {
  name?: string;
  url?: string;
  events?: string[];
  secret?: string;
  isActive?: boolean;
}

export interface UseWebhooksReturn {
  webhooks: Webhook[];
  events: WebhookEvent[];
  loading: boolean;
  error: string | null;
  createWebhook: (data: CreateWebhookData) => Promise<Webhook>;
  updateWebhook: (id: string, data: UpdateWebhookData) => Promise<Webhook>;
  deleteWebhook: (id: string) => Promise<void>;
  testWebhook: (id: string) => Promise<boolean>;
  retryEvent: (eventId: string) => Promise<boolean>;
  refreshWebhooks: () => Promise<void>;
  refreshEvents: () => Promise<void>;
}

export function useWebhooks(): UseWebhooksReturn {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchJSON<Webhook[]>('/api/webhooks');
      setWebhooks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchEvents = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchJSON<WebhookEvent[]>('/api/webhooks/events');
      setEvents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
    }
  }, []);

  const createWebhook = useCallback(async (data: CreateWebhookData): Promise<Webhook> => {
    try {
      setError(null);
      const webhook = await fetchJSON<Webhook>('/api/webhooks', {
        method: 'POST',
        body: data,
      });
      
      setWebhooks(prev => [...prev, webhook]);
      return webhook;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const updateWebhook = useCallback(async (id: string, data: UpdateWebhookData): Promise<Webhook> => {
    try {
      setError(null);
      const webhook = await fetchJSON<Webhook>(`/api/webhooks/${id}`, {
        method: 'PUT',
        body: data,
      });
      
      setWebhooks(prev => prev.map(w => w.id === id ? webhook : w));
      return webhook;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const deleteWebhook = useCallback(async (id: string): Promise<void> => {
    try {
      setError(null);
      await fetchWithRetry(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      
      setWebhooks(prev => prev.filter(w => w.id !== id));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const testWebhook = useCallback(async (id: string): Promise<boolean> => {
    try {
      setError(null);
      await fetchWithRetry(`/api/webhooks/${id}/test`, {
        method: 'POST',
      });
      
      // Refresh webhooks to get updated lastTriggered
      await fetchWebhooks();
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to test webhook';
      setError(errorMessage);
      return false;
    }
  }, [fetchWebhooks]);

  const retryEvent = useCallback(async (eventId: string): Promise<boolean> => {
    try {
      setError(null);
      await fetchWithRetry(`/api/webhooks/events/${eventId}/retry`, {
        method: 'POST',
      });
      
      // Refresh events to get updated status
      await fetchEvents();
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to retry event';
      setError(errorMessage);
      return false;
    }
  }, [fetchEvents]);

  const refreshWebhooks = useCallback(async () => {
    await fetchWebhooks();
  }, [fetchWebhooks]);

  const refreshEvents = useCallback(async () => {
    await fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);

  return {
    webhooks,
    events,
    loading,
    error,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    testWebhook,
    retryEvent,
    refreshWebhooks,
    refreshEvents,
  };
}

export default useWebhooks;
/**
 * React hook for managing webhooks
 */

import { useState, useEffect, useCallback, useRef } from 'react';

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastTriggered?: Date;
  successCount: number;
  failureCount: number;
}

export interface WebhookEvent {
  id: string;
  webhookId: string;
  event: string;
  payload: any;
  status: 'pending' | 'success' | 'failed';
  attempts: number;
  maxAttempts: number;
  nextRetry?: Date;
  createdAt: Date;
  completedAt?: Date;
  error?: string;
}

export interface WebhookOptions {
  retryAttempts?: number;
  retryDelay?: number;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface UseWebhooksReturn {
  webhooks: Webhook[];
  events: WebhookEvent[];
  loading: boolean;
  error: string | null;
  createWebhook: (webhook: Omit<Webhook, 'id' | 'createdAt' | 'updatedAt' | 'successCount' | 'failureCount'>) => Promise<Webhook>;
  updateWebhook: (id: string, updates: Partial<Webhook>) => Promise<Webhook>;
  deleteWebhook: (id: string) => Promise<void>;
  triggerWebhook: (webhookId: string, event: string, payload: any) => Promise<WebhookEvent>;
  getWebhook: (id: string) => Webhook | undefined;
  getWebhookEvents: (webhookId: string) => WebhookEvent[];
  retryEvent: (eventId: string) => Promise<WebhookEvent>;
  clearEventHistory: (webhookId?: string) => Promise<void>;
  refreshWebhooks: () => Promise<void>;
  refreshEvents: () => Promise<void>;
}

export const useWebhooks = (options: WebhookOptions = {}): UseWebhooksReturn => {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const optionsRef = useRef(options);
  const pollIntervalRef = useRef<NodeJS.Timeout>();

  // Update options ref when options change
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  // Fetch webhooks from API
  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/webhooks');
      if (!response.ok) {
        throw new Error(`Failed to fetch webhooks: ${response.statusText}`);
      }
      
      const data = await response.json();
      setWebhooks(data.webhooks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch webhook events from API
  const fetchEvents = useCallback(async () => {
    try {
      const response = await fetch('/api/webhooks/events');
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
      }
      
      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
      console.error('Failed to fetch webhook events:', err);
    }
  }, []);

  // Create a new webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'updatedAt' | 'successCount' | 'failureCount'>): Promise<Webhook> => {
    try {
      setError(null);
      
      const response = await fetch('/api/webhooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create webhook: ${response.statusText}`);
      }
      
      const newWebhook = await response.json();
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Update an existing webhook
  const updateWebhook = useCallback(async (id: string, updates: Partial<Webhook>): Promise<Webhook> => {
    try {
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update webhook: ${response.statusText}`);
      }
      
      const updatedWebhook = await response.json();
      setWebhooks(prev => prev.map(w => w.id === id ? updatedWebhook : w));
      return updatedWebhook;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Delete a webhook
  const deleteWebhook = useCallback(async (id: string): Promise<void> => {
    try {
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete webhook: ${response.statusText}`);
      }
      
      setWebhooks(prev => prev.filter(w => w.id !== id));
      setEvents(prev => prev.filter(e => e.webhookId !== id));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Trigger a webhook
  const triggerWebhook = useCallback(async (webhookId: string, event: string, payload: any): Promise<WebhookEvent> => {
    try {
      setError(null);
      
      const response = await fetch(`/api/webhooks/${webhookId}/trigger`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event, payload }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to trigger webhook: ${response.statusText}`);
      }
      
      const webhookEvent = await response.json();
      setEvents(prev => [webhookEvent, ...prev]);
      return webhookEvent;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to trigger webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Get a specific webhook by ID
  const getWebhook = useCallback((id: string): Webhook | undefined => {
    return webhooks.find(w => w.id === id);
  }, [webhooks]);

  // Get events for a specific webhook
  const getWebhookEvents = useCallback((webhookId: string): WebhookEvent[] => {
    return events.filter(e => e.webhookId === webhookId);
  }, [events]);

  // Retry a failed webhook event
  const retryEvent = useCallback(async (eventId: string): Promise<WebhookEvent> => {
    try {
      setError(null);
      
      const response = await fetch(`/api/webhooks/events/${eventId}/retry`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error(`Failed to retry event: ${response.statusText}`);
      }
      
      const updatedEvent = await response.json();
      setEvents(prev => prev.map(e => e.id === eventId ? updatedEvent : e));
      return updatedEvent;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to retry event';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Clear event history
  const clearEventHistory = useCallback(async (webhookId?: string): Promise<void> => {
    try {
      setError(null);
      
      const url = webhookId ? `/api/webhooks/${webhookId}/events` : '/api/webhooks/events';
      const response = await fetch(url, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Failed to clear event history: ${response.statusText}`);
      }
      
      if (webhookId) {
        setEvents(prev => prev.filter(e => e.webhookId !== webhookId));
      } else {
        setEvents([]);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to clear event history';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Refresh webhooks data
  const refreshWebhooks = useCallback(async () => {
    await fetchWebhooks();
  }, [fetchWebhooks]);

  // Refresh events data
  const refreshEvents = useCallback(async () => {
    await fetchEvents();
  }, [fetchEvents]);

  // Initial data fetch
  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);

  // Poll for updates
  useEffect(() => {
    const pollInterval = 30000; // 30 seconds
    
    pollIntervalRef.current = setInterval(() => {
      fetchEvents();
    }, pollInterval);
    
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [fetchEvents]);

  return {
    webhooks,
    events,
    loading,
    error,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    triggerWebhook,
    getWebhook,
    getWebhookEvents,
    retryEvent,
    clearEventHistory,
    refreshWebhooks,
    refreshEvents,
  };
};

export default useWebhooks;
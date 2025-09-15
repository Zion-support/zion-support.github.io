<<<<<<< HEAD
/**
 * React hook for managing webhooks
 */

import { useState, useEffect, useCallback, useRef } from 'react';
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> cursor/create-and-deploy-new-content-60ab

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
<<<<<<< HEAD
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastTriggered?: Date;
  successCount: number;
=======
  isActive: boolean;
  createdAt: string;
  lastTriggered?: string;
>>>>>>> cursor/create-and-deploy-new-content-60ab
  failureCount: number;
}

export interface WebhookEvent {
  id: string;
  webhookId: string;
  event: string;
  payload: any;
  status: 'pending' | 'success' | 'failed';
  attempts: number;
<<<<<<< HEAD
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
=======
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
  
>>>>>>> cursor/create-and-deploy-new-content-60ab
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  
  const optionsRef = useRef(options);
  const pollIntervalRef = useRef<NodeJS.Timeout>();

  // Update options ref when options change
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  // Fetch webhooks from API
=======

  // Fetch webhooks
>>>>>>> cursor/create-and-deploy-new-content-60ab
  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
<<<<<<< HEAD
      const response = await fetch('/api/webhooks');
      if (!response.ok) {
        throw new Error(`Failed to fetch webhooks: ${response.statusText}`);
=======
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/webhooks');
      if (!response.ok) {
        throw new Error('Failed to fetch webhooks');
>>>>>>> cursor/create-and-deploy-new-content-60ab
      }
      
      const data = await response.json();
      setWebhooks(data.webhooks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  }, []);

<<<<<<< HEAD
  // Fetch webhook events from API
  const fetchEvents = useCallback(async () => {
    try {
      const response = await fetch('/api/webhooks/events');
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
=======
  // Fetch webhook events
  const fetchEvents = useCallback(async (webhookId?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const url = webhookId ? `/api/webhooks/${webhookId}/events` : '/api/webhook-events';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch webhook events');
>>>>>>> cursor/create-and-deploy-new-content-60ab
      }
      
      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
<<<<<<< HEAD
      console.error('Failed to fetch webhook events:', err);
    }
  }, []);

  // Create a new webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'updatedAt' | 'successCount' | 'failureCount'>): Promise<Webhook> => {
    try {
=======
      setError(err instanceof Error ? err.message : 'Failed to fetch webhook events');
    } finally {
      setLoading(false);
    }
  }, []);

  // Create webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'failureCount'>) => {
    try {
      setLoading(true);
>>>>>>> cursor/create-and-deploy-new-content-60ab
      setError(null);
      
      const response = await fetch('/api/webhooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (!response.ok) {
<<<<<<< HEAD
        throw new Error(`Failed to create webhook: ${response.statusText}`);
=======
        throw new Error('Failed to create webhook');
>>>>>>> cursor/create-and-deploy-new-content-60ab
      }
      
      const newWebhook = await response.json();
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
<<<<<<< HEAD
      const errorMessage = err instanceof Error ? err.message : 'Failed to create webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  // Update an existing webhook
  const updateWebhook = useCallback(async (id: string, updates: Partial<Webhook>): Promise<Webhook> => {
    try {
=======
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
>>>>>>> cursor/create-and-deploy-new-content-60ab
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      
      if (!response.ok) {
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/create-and-deploy-new-content-60ab
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/create-and-deploy-new-content-60ab
        method: 'POST',
      });
      
      if (!response.ok) {
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/create-and-deploy-new-content-60ab
  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);

<<<<<<< HEAD
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

=======
>>>>>>> cursor/create-and-deploy-new-content-60ab
  return {
    webhooks,
    events,
    loading,
    error,
<<<<<<< HEAD
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
=======
    fetchWebhooks,
    fetchEvents,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    testWebhook,
    retryEvent,
>>>>>>> cursor/create-and-deploy-new-content-60ab
  };
};

export default useWebhooks;
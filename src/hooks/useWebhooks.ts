<<<<<<< HEAD
<<<<<<< HEAD
/**
 * React hook for managing webhooks
 */

import { useState, useEffect, useCallback, useRef } from 'react';
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> cursor/create-and-deploy-new-content-fb46

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
<<<<<<< HEAD
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
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
  isActive: boolean;
  createdAt: string;
  lastTriggered?: string;
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
  
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
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
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======

  // Fetch webhooks
>>>>>>> cursor/create-and-deploy-new-content-fb46
  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/webhooks');
      if (!response.ok) {
        throw new Error('Failed to fetch webhooks');
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
<<<<<<< HEAD
  // Fetch webhook events from API
  const fetchEvents = useCallback(async () => {
    try {
      const response = await fetch('/api/webhooks/events');
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
      }
      
      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error('Failed to fetch webhook events:', err);
    }
  }, []);

  // Create a new webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'updatedAt' | 'successCount' | 'failureCount'>): Promise<Webhook> => {
    try {
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
      setError(err instanceof Error ? err.message : 'Failed to fetch webhook events');
    } finally {
      setLoading(false);
    }
  }, []);

  // Create webhook
  const createWebhook = useCallback(async (webhookData: Omit<Webhook, 'id' | 'createdAt' | 'failureCount'>) => {
    try {
      setLoading(true);
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
      }
      
      const newWebhook = await response.json();
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
<<<<<<< HEAD
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
      setError(null);
      
      const response = await fetch(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
<<<<<<< HEAD
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
        method: 'POST',
      });
      
      if (!response.ok) {
<<<<<<< HEAD
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
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
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);

<<<<<<< HEAD
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
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
  return {
    webhooks,
    events,
    loading,
    error,
<<<<<<< HEAD
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
    fetchWebhooks,
    fetchEvents,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    testWebhook,
    retryEvent,
<<<<<<< HEAD
>>>>>>> 093b5ff1e91d61aea3b0c167e337f742d290f1c7
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
  };
};

export default useWebhooks;
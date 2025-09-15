<<<<<<< HEAD
/**
 * Custom hook for managing webhooks
 */

<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';
import { fetchJSON, fetchWithRetry } from '../utils/fetchWithRetry';
=======
import { useState, useEffect, useCallback, useRef } from 'react';
=======
import { useState, useEffect, useCallback } from 'react';
>>>>>>> cursor/create-and-deploy-new-content-60ab
>>>>>>> cursor/create-and-deploy-new-content-be96

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
<<<<<<< HEAD
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastTriggered?: string;
=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
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
  createdAt: string;
  lastAttempt?: string;
=======
<<<<<<< HEAD
  maxAttempts: number;
  nextRetry?: Date;
  createdAt: Date;
  completedAt?: Date;
>>>>>>> cursor/create-and-deploy-new-content-be96
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

<<<<<<< HEAD
export function useWebhooks(): UseWebhooksReturn {
=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD

=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
  const fetchWebhooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
<<<<<<< HEAD
      const data = await fetchJSON<Webhook[]>('/api/webhooks');
      setWebhooks(data);
=======
      
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
>>>>>>> cursor/create-and-deploy-new-content-be96
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  }, []);

<<<<<<< HEAD
  const fetchEvents = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchJSON<WebhookEvent[]>('/api/webhooks/events');
      setEvents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
    }
  }, []);

  const createWebhook = useCallback(async (data: CreateWebhookData): Promise<Webhook> => {
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
      const webhook = await fetchJSON<Webhook>('/api/webhooks', {
        method: 'POST',
        body: data,
      });
      
<<<<<<< HEAD
      setWebhooks(prev => [...prev, webhook]);
      return webhook;
=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
    } catch (err) {
<<<<<<< HEAD
      const errorMessage = err instanceof Error ? err.message : 'Failed to create webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const updateWebhook = useCallback(async (id: string, data: UpdateWebhookData): Promise<Webhook> => {
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
      const webhook = await fetchJSON<Webhook>(`/api/webhooks/${id}`, {
        method: 'PUT',
        body: data,
      });
      
<<<<<<< HEAD
      setWebhooks(prev => prev.map(w => w.id === id ? webhook : w));
      return webhook;
=======
      if (!response.ok) {
<<<<<<< HEAD
        throw new Error(`Failed to update webhook: ${response.statusText}`);
      }
      
      const updatedWebhook = await response.json();
      setWebhooks(prev => prev.map(w => w.id === id ? updatedWebhook : w));
      return updatedWebhook;
>>>>>>> cursor/create-and-deploy-new-content-be96
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

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
      await fetchWithRetry(`/api/webhooks/${id}`, {
        method: 'DELETE',
      });
      
<<<<<<< HEAD
=======
      if (!response.ok) {
<<<<<<< HEAD
        throw new Error(`Failed to delete webhook: ${response.statusText}`);
      }
      
>>>>>>> cursor/create-and-deploy-new-content-be96
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
<<<<<<< HEAD
      await fetchWithRetry(`/api/webhooks/events/${eventId}/retry`, {
        method: 'POST',
      });
      
      // Refresh events to get updated status
      await fetchEvents();
      return true;
=======
      
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
>>>>>>> cursor/create-and-deploy-new-content-be96
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

<<<<<<< HEAD
=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
  useEffect(() => {
    fetchWebhooks();
    fetchEvents();
  }, [fetchWebhooks, fetchEvents]);

<<<<<<< HEAD
=======
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
>>>>>>> cursor/create-and-deploy-new-content-be96
  return {
    webhooks,
    events,
    loading,
    error,
<<<<<<< HEAD
    createWebhook,
    updateWebhook,
    deleteWebhook,
    testWebhook,
    retryEvent,
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
}

export default useWebhooks;
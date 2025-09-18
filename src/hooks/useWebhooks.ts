/**
 * Custom hook for managing webhooks
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchJSON, fetchWithRetry } from '../utils/fetchWithRetry';
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
    }
  }, []);

  const createWebhook = useCallback(async (data: CreateWebhookData): Promise<Webhook> => {
    try {
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update webhook';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const deleteWebhook = useCallback(async (id: string): Promise<void> => {
    try {
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


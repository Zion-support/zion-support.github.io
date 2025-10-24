import { useState, useEffect } from 'react';

export interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  isActive: boolean;
  createdAt: string;
  lastTriggered?: string;
}

export const useWebhooks = () => {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWebhooks = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock data for now
      const mockWebhooks: Webhook[] = [
        {
          id: '1',
          name: 'User Registration',
          url: 'https://api.example.com/webhooks/user-registration',
          events: ['user.created', 'user.updated'],
          isActive: true,
          createdAt: '2024-01-01T00:00:00Z',
          lastTriggered: '2024-01-15T10:30:00Z',
        },
        {
          id: '2',
          name: 'Payment Processing',
          url: 'https://api.example.com/webhooks/payment',
          events: ['payment.completed', 'payment.failed'],
          isActive: true,
          createdAt: '2024-01-02T00:00:00Z',
          lastTriggered: '2024-01-14T15:45:00Z',
        }
      ];
      setWebhooks(mockWebhooks);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  };

  const createWebhook = async (webhook: Omit<Webhook, 'id' | 'createdAt'>) => {
    setLoading(true);
    setError(null);
    try {
      const newWebhook: Webhook = {
        ...webhook,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateWebhook = async (id: string, updates: Partial<Webhook>) => {
    setLoading(true);
    setError(null);
    try {
      setWebhooks(prev => 
        prev.map(webhook => 
          webhook.id === id ? { ...webhook, ...updates } : webhook
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteWebhook = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete webhook');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebhooks();
  }, []);

  return {
    webhooks,
    loading,
    error,
    fetchWebhooks,
    createWebhook,
    updateWebhook,
    deleteWebhook
  };
};
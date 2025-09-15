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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading webhooks
    const loadWebhooks = async () => {
      try {
        setLoading(true);
        // Mock data for now
        const mockWebhooks: Webhook[] = [
          {
            id: '1',
            name: 'User Registration',
            url: 'https://api.example.com/webhooks/user-registration',
            events: ['user.created', 'user.verified'],
            isActive: true,
            createdAt: new Date().toISOString(),
            lastTriggered: new Date().toISOString()
          },
          {
            id: '2',
            name: 'Payment Processing',
            url: 'https://api.example.com/webhooks/payment',
            events: ['payment.completed', 'payment.failed'],
            isActive: true,
            createdAt: new Date().toISOString()
          }
        ];
        setWebhooks(mockWebhooks);
      } catch (err) {
        setError('Failed to load webhooks');
      } finally {
        setLoading(false);
      }
    };

    loadWebhooks();
  }, []);

  const createWebhook = async (webhook: Omit<Webhook, 'id' | 'createdAt'>) => {
    try {
      const newWebhook: Webhook = {
        ...webhook,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      setWebhooks(prev => [...prev, newWebhook]);
      return newWebhook;
    } catch (err) {
      setError('Failed to create webhook');
      throw err;
    }
  };

  const updateWebhook = async (id: string, updates: Partial<Webhook>) => {
    try {
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === id ? { ...webhook, ...updates } : webhook
      ));
    } catch (err) {
      setError('Failed to update webhook');
      throw err;
    }
  };

  const deleteWebhook = async (id: string) => {
    try {
      setWebhooks(prev => prev.filter(webhook => webhook.id !== id));
    } catch (err) {
      setError('Failed to delete webhook');
      throw err;
    }
  };

  const toggleWebhook = async (id: string) => {
    try {
      setWebhooks(prev => prev.map(webhook => 
        webhook.id === id ? { ...webhook, isActive: !webhook.isActive } : webhook
      ));
    } catch (err) {
      setError('Failed to toggle webhook');
      throw err;
    }
  };

  return {
    webhooks,
    loading,
    error,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    toggleWebhook
  };
};
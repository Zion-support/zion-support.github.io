import React, { useState } from 'react';
import {
  Webhook,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface WebhookEndpoint {
  id: string;
  name: string;
  url: string;
  events: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  lastTriggered?: string;
}

const WebhooksManager: React.FC = () => {
  const [webhooks, setWebhooks] = useState<WebhookEndpoint[]>([
    {
      id: '1',
      name: 'Order Updates',
      url: 'https://example.com/webhooks/orders',
      events: ['order.created', 'order.updated'],
      status: 'active',
      createdAt: '2024-01-15',
      lastTriggered: '2024-01-20',
    },
  ]);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateWebhook = () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      const newWebhook: WebhookEndpoint = {
        id: Date.now().toString(),
        name: 'New Webhook',
        url: 'https://example.com/webhook',
        events: ['order.created'],
        status: 'active',
        createdAt: new Date().toISOString().split('T')[0],
      };
      setWebhooks([...webhooks, newWebhook]);
      setIsCreating(false);
    }, 1000);
  };

  const handleDeleteWebhook = (id: string) => {
    setWebhooks(webhooks.filter(webhook => webhook.id !== id));
  };

  const toggleWebhookStatus = (id: string) => {
    setWebhooks(
      webhooks.map(webhook =>
        webhook.id === id
          ? {
              ...webhook,
              status: webhook.status === 'active' ? 'inactive' : 'active',
            }
          : webhook
      )
    );
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>Webhooks</h2>
          <p className='text-gray-600'>
            Manage your webhook endpoints for real-time notifications
          </p>
        </div>
        <Button onClick={handleCreateWebhook} disabled={isCreating}>
          <Plus className='h-4 w-4 mr-2' />
          {isCreating ? 'Creating...' : 'Create Webhook'}
        </Button>
      </div>

      <div className='grid gap-4'>
        {webhooks.map(webhook => (
          <Card key={webhook.id}>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle className='flex items-center'>
                    <Webhook className='h-5 w-5 mr-2' />
                    {webhook.name}
                  </CardTitle>
                  <CardDescription>
                    Created on{' '}
                    {new Date(webhook.createdAt).toLocaleDateString()}
                    {webhook.lastTriggered && (
                      <span className='ml-2'>
                        • Last triggered:{' '}
                        {new Date(webhook.lastTriggered).toLocaleDateString()}
                      </span>
                    )}
                  </CardDescription>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='flex items-center'>
                    {webhook.status === 'active' ? (
                      <CheckCircle className='h-4 w-4 text-green-500 mr-1' />
                    ) : (
                      <XCircle className='h-4 w-4 text-red-500 mr-1' />
                    )}
                    <span
                      className={`text-sm ${
                        webhook.status === 'active'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {webhook.status}
                    </span>
                  </div>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => toggleWebhookStatus(webhook.id)}
                  >
                    {webhook.status === 'active' ? 'Disable' : 'Enable'}
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handleDeleteWebhook(webhook.id)}
                  >
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <Label htmlFor={`url-${webhook.id}`}>Webhook URL</Label>
                  <div className='flex items-center space-x-2'>
                    <Input
                      id={`url-${webhook.id}`}
                      value={webhook.url}
                      readOnly
                      className='font-mono'
                    />
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => navigator.clipboard.writeText(webhook.url)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Events</Label>
                  <div className='flex flex-wrap gap-2 mt-1'>
                    {webhook.events.map(event => (
                      <span
                        key={event}
                        className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {webhooks.length === 0 && (
        <Card>
          <CardContent className='text-center py-8'>
            <Webhook className='h-12 w-12 text-gray-400 mx-auto mb-4' />
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              No Webhooks
            </h3>
            <p className='text-gray-600 mb-4'>
              Create your first webhook to receive real-time notifications.
            </p>
            <Button onClick={handleCreateWebhook}>
              <Plus className='h-4 w-4 mr-2' />
              Create Webhook
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WebhooksManager;

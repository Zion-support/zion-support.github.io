import React, { useEffect, useState } from 'react',
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Label } from '@/components/ui/label',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',
import { PlusCircle, Save, Trash } from 'lucide-react',
type WebhookEventType = 'job_created' | 'job_updated' | 'job_deleted' | 'application_created' | 'application_updated' | 'user_registered',
interface Webhook {
  id: string,
  name: string,
  url: string,
  event_types: WebhookEventType[],
  is_active: boolean,
  last_triggered_at?: string;
  secret?: string, }

interface NewWebhook {
  name: string,
  url: string,
  eventTypes: WebhookEventType[],
  selectedEvent: WebhookEventType,
  secret: string}

const eventOptions = [
  { value: 'job_created', label: 'Job Created' },
  { value: 'job_updated', label: 'Job Updated' },
  { value: 'job_deleted', label: 'Job Deleted' },
  { value: 'application_created', label: 'Application Created' },
  { value: 'application_updated', label: 'Application Updated' },
  { value: 'user_registered', label: 'User Registered' }];

export function WebhookManager() {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{ status: number; statusText: string; responseBody: string } | null>(null),
  const [newWebhook, setNewWebhook] = useState<NewWebhook>({
    name: '',
    url: '',
    eventTypes: [],
    selectedEvent: 'job_created',
    secret: ''});

  useEffect(() => {
    loadWebhooks();, []);

  const loadWebhooks = async () => {
    setLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWebhooks([]); catch (err) {
      setError('Failed to load webhooks'); finally {
      setLoading(false);
  };

  const handleAddEvent = () => {
    if (newWebhook.selectedEvent && !newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      setNewWebhook({
        ...newWebhook,
        eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent]});
    }
  };

  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook,
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)});
  };

  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      setError('Please fill in all required fields');
      return, }

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const webhook: Webhook = {
        id: Date.now().toString(),
        name: newWebhook.name,
        url: newWebhook.url,
        event_types: newWebhook.eventTypes,
        is_active: true,
        secret: newWebhook.secret || undefined};

      setWebhooks([...webhooks, webhook]);
      setNewWebhook({
        name: '',
        url: '',
        eventTypes: [],
        selectedEvent: 'job_created',
        secret: ''});
      setError(null);
    } catch (err) {
      setError('Failed to create webhook');
  };

  const toggleWebhook = async (id: string, isActive: boolean) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setWebhooks(webhooks.map(w => 
        w.id === id ? { ...w, is_active: isActive } : w
      ))} catch (err) {
      setError('Failed to toggle webhook');
  };

  const deleteWebhook = async (id: string) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setWebhooks(webhooks.filter(w => w.id !== id)); catch (err) {
      setError('Failed to delete webhook');
  };

  const handleTestWebhook = async (id: string, eventType: WebhookEventType) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTestResult({
        status: 200,
        statusText: 'OK',
        responseBody: 'Webhook test successful'});
    } catch (err) {
      setTestResult({
        status: 500,
        statusText: 'Internal Server Error',
        responseBody: 'Webhook test failed'});
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input
                id="webhook-name"
                placeholder="e.g., Job Postings Webhook"
                value={newWebhook.name}
                onChange={e => setNewWebhook({ ...newWebhook, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
              <Input
                id="webhook-url"
                placeholder="https://example.com/webhook"
                value={newWebhook.url}
                onChange={e => setNewWebhook({ ...newWebhook, url: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Events</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {newWebhook.eventTypes.map(event => (
                <div
                  key={event}
                  className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                >
                  {eventOptions.find(e => e.value === event)?.label || event}
                  <button
                    onClick={() => handleRemoveEvent(event)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Select
                value={newWebhook.selectedEvent}
                onValueChange={value => setNewWebhook({ ...newWebhook, selectedEvent: value as WebhookEventType })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select event" />
                </SelectTrigger>
                <SelectContent>
                  {eventOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" onClick={handleAddEvent} >
                <PlusCircle className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret (optional)</Label>
            <Input
              id="webhook-secret"
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={e => setNewWebhook({ ...newWebhook, secret: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">
              If provided, this secret will be used to sign the webhook payload.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateWebhook}>
            <Save className="h-4 w-4 mr-2" /> Create Webhook
          </Button>
        </CardFooter>
      </Card>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>
        {loading ? (
          <p>Loading webhooks...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : webhooks.length === 0 ? (
          <p>No webhooks configured yet. Create your first webhook above.</p>
        ) : (
          <div className="space-y-4">
            {webhooks.map(webhook => (
              <Card key={webhook.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>
                      <CardDescription className="truncate max-w-md">
                        {webhook.url}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div
                          className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}
                        ></div>
                        <span className="text-sm">
                          {webhook.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <div className="flex-shrink-0">
                        <Button
                          
                          size="sm"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >
                          {webhook.is_active ? 'Disable' : 'Enable'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <Label className="text-sm">Events</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {webhook.event_types.map(event => (
                          <div key={event} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {webhook.last_triggered_at
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
                        : 'Never triggered'}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button
                    
                    size="sm"
                    onClick={() => deleteWebhook(webhook.id)}
                  >
                    <Trash className="h-4 w-4 mr-2" /> Delete
                  </Button>
                  <Select
                    onValueChange={value => handleTestWebhook(webhook.id, value as WebhookEventType)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Test webhook" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map(event => (
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {testResult && (
          <Card className="mt-4 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Status: </span>
                  <span
                    className={
                      testResult.status >= 200 && testResult.status < 300
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {testResult.status} {testResult.statusText}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Response:</span>
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">
                    {testResult.responseBody || '<empty>'}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )}



export function WebhookManager() {
  const {
    webhooks,
    loading,
    error,


import React, { useEffect, useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClickableBadge } from '@/components/ui/clickable-badge';
import { PlusCircle, Save, Trash } from 'lucide-react';
import { useWebhooks, WebhookEventType } from '@/hooks/useWebhooks';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import { toast } from 'sonner';
export function WebhookManager() {;
  const {;
    webhooks,;
    loading,;
    error,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;
  } = useWebhooks();

  const [newWebhook, setNewWebhook] = useState({;
    name: '',;
    url: '',;
    selectedEvent: '' as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;
    secret: '',;
  });

  const eventOptions: { value: WebhookEventType; label: string }[] = [;
    { value: 'new_application', label: 'New Application Received' },;
    { value: 'quote_received', label: 'Quote Request Received' },;
    { value: 'milestone_approved', label: 'Milestone Approved' },;
    { value: 'talent_hired', label: 'Talent Hired' },;
  ];

  useEffect(() => {;
    fetchWebhooks();
  }, []);
  const handleAddEvent = () => {;
    if (!newWebhook && newWebhook.selectedEvent) return;

    if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;
      toast && toast.error('This event is already added');
      return;
    }

    setNewWebhook({;
      ...newWebhook,;
      eventTypes: [...newWebhook && newWebhook.eventTypes, newWebhook && newWebhook.selectedEvent],;
      selectedEvent: '' as WebhookEventType,;
    });
  };

  const handleRemoveEvent = (event: WebhookEventType) => {    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook && newWebhook.eventTypes.filter(e => e !== event),;
    });
  };

  const handleCreateWebhook = async () => {;
    if (;
      !newWebhook && newWebhook.name ||;
      !newWebhook && newWebhook.url ||;
      newWebhook && newWebhook.eventTypes.length === 0;
    ) {;
      toast && toast.error('Please fill in all required fields');
      return;
    }

    await createWebhook(;
      newWebhook && newWebhook.name,;
      newWebhook && newWebhook.url,;
      newWebhook && newWebhook.eventTypes,;
      newWebhook && newWebhook.secret || undefined;
    );

    // Reset form;
    setNewWebhook({;
      name: '',;
      url: '',;
      selectedEvent: '' as WebhookEventType,;
      eventTypes: [],;
      secret: '',;
    });
  };

  const handleTestWebhook = async (;
    webhookId: string,;
    eventType: WebhookEventType;
  ) => {;
    await testWebhook(webhookId, eventType);
  };
  return (

    <div className='space - y-8'>;
      <Card>;
        <CardHeader>;
          <CardTitle > Create Webhook</CardTitle>;

          <CardDescription>;
            Define webhooks to notify external systems when events occur in;
            Zion.;
          </CardDescription>;
        </CardHeader>;

    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,

    name: "",
    url: "",
    selectedEvent: "" as WebhookEventType,
    eventTypes: [] as WebhookEventType[],
    secret: ""
  }),

  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ],

  useEffect(() => {
    fetchWebhooks()
  }, []),

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return,

    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error("This event is already added"),
      return

    }

    await createWebhook(
      newWebhook.name,
      newWebhook.url,
      newWebhook.eventTypes,
      newWebhook.secret || undefined

=======
export function WebhookManager() {
  const {
    webhooks
    loading
    error
    testResult
    fetchWebhooks
    createWebhook
    toggleWebhook
    deleteWebhook
    testWebhook
  } = useWebhooks()
  const [newWebhook, setNewWebhook] = useState({
    name: ''
    url: ''
    selectedEvent: '' as WebhookEventType
    eventTypes: [] as WebhookEventType[]
    secret: ''
  })
  const eventOptions: { value: WebhookEventType; label: string }[] = [
    { value: 'new_application', label: 'New Application Received' }
    { value: 'quote_received', label: 'Quote Request Received' }
    { value: 'milestone_approved', label: 'Milestone Approved' }
    { value: 'talent_hired', label: 'Talent Hired' }
  ]
  useEffect(() => {
    fetchWebhooks()
  }, [])
  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error('This event is already added')
      return
    }
    setNewWebhook({
      ...newWebhook
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent]
      selectedEvent: '' as WebhookEventType
    })
  }
  const handleRemoveEvent = (event: WebhookEventType) => {    setNewWebhook({
      ...newWebhook
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })
  }
  const handleCreateWebhook = async () => {
    if (
      !newWebhook.name |
      !newWebhook.url |
      newWebhook.eventTypes.length === 0
    ) {
      toast.error('Please fill in all required fields')
      return
    }
    await createWebhook(
      newWebhook.name
      newWebhook.url
      newWebhook.eventTypes
      newWebhook.secret |undefined
    )
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
    // Reset form
    setNewWebhook({
      name: ''
      url: ''
      selectedEvent: '' as WebhookEventType
      eventTypes: []
      secret: ''
    })
  }
  const handleTestWebhook = async (
    webhookId: string
    eventType: WebhookEventType
  ) => {
    await testWebhook(webhookId, eventType)
  }

      secret: ""
    })
  },

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
                value={newWebhook.name}
                onChange={e =>
                  setNewWebhook({ ...newWebhook, name: e.target.value })
                }
              />
            </div>

                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}

            </div>;
            <div className="flex space-x-2">;
              <Select;
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select event" />
            />;
            <p className="text-xs text-muted-foreground">;
              If provided, this secret will be used to sign the webhook payload.</p>;
          </div>;
        </CardContent>;
        <CardFooter>;
          <Button onClick={handleCreateWebhook}>;
            <Save className="h-4 w-4 mr-2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;
        {loading ? (;
          <p>Loading webhooks...</p>;
        ) : error ? (;
          <p className="text-red-500">{error}</p>;
        ) : webhooks && webhooks.length === 0 ? (;
          <p>No webhooks configured yet && yet.Create your first webhook above.</p>;
        ) : (;
          <div className="space-y-4">;
            {webhooks && webhooks.map(webhook => (;
              <Card key={webhook && webhook.id}>;
                <CardHeader className="pb-2">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <CardTitle className="text-lg">{webhook && webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;

                        {webhook.url}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>
                      </div>

                          {webhook.is_active ? 'Disable' : 'Enable'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='py-2'>
                  <div className='flex flex-col space-y-2'>
                    <div>

                        : 'Never triggered'}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button

                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;

                      ))}
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {testResult && (
          <Card className='mt-4 border-blue-200'>
            <CardHeader>
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='font-medium'>Status:</span>

        {testResult && (;
          <Card className='mt-4 border-blue-200'>;
            <CardHeader>;
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;
              <div className='space-y-2'>;
                <div className='flex justify-between'>;
                  <span className='font-medium'>Status:</span>;
                  <span
                    className={
                      testResult && testResult.status>= 200 && testResult && testResult.status < 300;
                        ? 'text-green-600';
                        : 'text-red-600';
                    }

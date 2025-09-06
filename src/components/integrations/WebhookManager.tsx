<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import React, { useEffect, useState } from 'react'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { PlusCircle, Save, Trash } from 'lucide-react'

import { useWebhooks, WebhookEventType } from '@/hooks/useWebhooks'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { toast } from 'sonner'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React, { useEffect, useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { PlusCircle, Save, Trash } from 'lucide-react'
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { toast } from "sonner",
<<<<<<< HEAD
<<<<<<< HEAD

export function WebhookManager() {
=======
xport function WebhookManager() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function WebhookManager() {
  const { 
    webhooks,
    loading, 
    error,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    testWebhook
  } = useWebhooks(),
  
  const [newWebhook, setNewWebhook] = useState({
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    testWebhook,
  } = useWebhooks()
  const [newWebhook, setNewWebhook] = useState({
    name: '',
    url: '',
    selectedEvent: '' as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;
    secret: '';
  });
  const eventOptions: { value: WebhookEventType; label: string }[] = [
    { value: 'new_application', label: 'New Application Received' },
    { value: 'quote_received', label: 'Quote Request Received' },
    { value: 'milestone_approved', label: 'Milestone Approved' },
    { value: 'talent_hired', label: 'Talent Hired' },
  ]
  useEffect(() => {
    fetchWebhooks()
  }, [])
  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return;
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error('This event is already added')
      return;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    testWebhook
  } = useWebhooks(),
  
  const [newWebhook, setNewWebhook] = useState({
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

    }
=======
>>>>>>>     }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      selectedEvent: '' as WebhookEventType,
    })
  }
  const handleRemoveEvent = (event: WebhookEventType) => {    setNewWebhook({
      ...newWebhook,
      eventTypes: newWebhook.eventTypes.filter(e => e !== event),
    })
  }
  const handleCreateWebhook = async () => {
    if (
      !newWebhook.name ||
      !newWebhook.url ||
      newWebhook.eventTypes.length === 0
    ) {
      toast.error('Please fill in all required fields')
      return;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      selectedEvent: "" as WebhookEventType
    })
  },
  
  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook,
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })
  },
  
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields"),
      return
<<<<<<< HEAD
<<<<<<< HEAD

    }
=======
>>>>>>>     }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    
    await createWebhook(
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined
<<<<<<< HEAD
<<<<<<< HEAD

    // Reset form
=======
    ),
    
    )
>>>>>>>     // Reset form
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    ),
    
=======
<<<<<<< HEAD
    )
=======
    ),
    
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // Reset form
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setNewWebhook({
      name: "",
      url: "",
      selectedEvent: "" as WebhookEventType,
      eventTypes: [],
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      secret: '',
    })
  }
  const handleTestWebhook = async (
    webhookId: string,
    eventType: WebhookEventType
  ) => {
    await testWebhook(webhookId, eventType)
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      secret: ""
    })
  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

                value={newWebhook.name}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardContent className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='webhook-name'>Webhook Name</Label>
              <Input
                id='webhook-name'
                placeholder='e.g., Job Postings Webhook'
<<<<<<< HEAD
>>>>>>>                 value={newWebhook.name}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                onChange={e =>
                  setNewWebhook({ ...newWebhook, name: e.target.value })
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input 
                id="webhook-name" 
                placeholder="e.g., Job Postings Webhook"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                value={newWebhook.name}
                onChange={e =>
                  setNewWebhook({ ...newWebhook, name: e.target.value })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                }
              />
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  {eventOptions.find(e => e.value === event)?.label |event}
                </ClickableBadge>
              ))}
            </div>;
            <div className='flex space-x-2'>;
=======
            <div className='space-y-2'>
              <Label htmlFor='webhook-url'>URL</Label>
              <Input
                id='webhook-url'
                placeholder='https://example.com/webhook'
                value={newWebhook.url}
                onChange={e =>
                  setNewWebhook({ ...newWebhook, url: e.target.value })
                }              />
            </div>
          </div>
          <div className='space-y-2'>
            <Label>Events</Label>
            <div className='flex flex-wrap gap-2 mb-2'>
              {newWebhook.eventTypes.map(event => (
                <ClickableBadge
                  key={event}                  onRemove={() => handleRemoveEvent(event)}
                <ClickableBadge
                  key = {event,}
                  onRemove = {(,) => handleRemoveEvent(event),}
                >
<<<<<<< HEAD
                  {eventOptions.find(e => e.value === event)?.label |event}
                </ClickableBadge>
              ))}
            </div>
            <div className='flex space-x-2'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Select
                value={newWebhook.selectedEvent}
                onValueChange={value =>
                  setNewWebhook({
                    ...newWebhook
                    selectedEvent: value as WebhookEventType
                  })
                }              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select event' />
<<<<<<< HEAD
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { PlusCircle, Save, Trash } from 'lucide-react';
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { toast } from "sonner",;
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
    testWebhook;
  } = useWebhooks(),;
  const [newWebhook, setNewWebhook] = useState({;
    name: "",;
    url: "",;
    selectedEvent: "" as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;
    secret: "";
  }),;
  const eventOptions: { value: WebhookEventType, label: string }[] = [;
    { value: "new_application", label: "New Application Received" },;
    { value: "quote_received", label: "Quote Request Received" },;
    { value: "milestone_approved", label: "Milestone Approved" },;
    { value: "talent_hired", label: "Talent Hired" }
  ],;
  useEffect(() => {;
    fetchWebhooks();
  }, []),;
  const handleAddEvent = () => {;
    if (!newWebhook.selectedEvent) return,;
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {;
      toast.error("This event is already added"),;
      return;
    }
;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],;
      selectedEvent: "" as WebhookEventType;
    });
  },;
  const handleRemoveEvent = (event: WebhookEventType) => {;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook.eventTypes.filter(e => e !== event);
    });
  },;
  const handleCreateWebhook = async () => {;
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {;
      toast.error("Please fill in all required fields"),;
      return;
    }
;
    await createWebhook(;
      newWebhook.name,;
      newWebhook.url,;
      newWebhook.eventTypes,;
      newWebhook.secret || undefined;
    ),;
    // Reset form;
    setNewWebhook({;
      name: "",;
      url: "",;
      selectedEvent: "" as WebhookEventType,;
      eventTypes: [],;
      secret: "";
    });
  };
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
    await testWebhook(webhookId, eventType);
  };
  return (;
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;
        <CardContent className="space-y-4">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div className="space-y-2">;
              <Label htmlFor="webhook-name">Webhook Name</Label>;
              <Input;
                id="webhook-name";
                placeholder="e.g., Job Postings Webhook";
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="webhook-url">URL</Label>;
              <Input;
                id="webhook-url";
                placeholder="https://example.com/webhook";
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />;
            </div>;
          </div>;
          <div className="space-y-2">;
            <Label>Events</Label>;
            <div className="flex flex-wrap gap-2 mb-2">;
              {newWebhook.eventTypes.map(event => (;
                <ClickableBadge;
                  key={event} ;
                  onRemove={() => handleRemoveEvent(event)}
                >;
<<<<<<< HEAD
<<<<<<< HEAD

                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}

=======
>>>>>>>                   {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
            <div className='flex space-x-2'>
              <Select
                value={newWebhook.selectedEvent}
                onValueChange={value =>
                  setNewWebhook({
                    ...newWebhook,
                    selectedEvent: value as WebhookEventType,
                  })
                }              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select event' />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
            <div className="flex space-x-2">;
              <Select;
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select event" />
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                 </SelectTrigger>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </SelectTrigger>
>>>>>>>                 <SelectContent>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </SelectTrigger>
                <SelectContent>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {eventOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
<<<<<<< HEAD
              <Button type='button' onClick={handleAddEvent} variant='outline'>
                <PlusCircle className='h-4 w-4 mr-2' /> Add
=======
              <Button type="button" onClick={handleAddEvent} variant="outline">
                <PlusCircle className="h-4 w-4 mr-2" /> Add
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
          <div className='space-y-2'>
            <Label htmlFor='webhook-secret'>Secret (optional)</Label>
            <Input
              id='webhook-secret'
              placeholder='A secret key to verify the webhook source'
              value={newWebhook.secret}
              onChange={e =>
                setNewWebhook({ ...newWebhook, secret: e.target.value })
              }            />
            <p className='text-xs text-muted-foreground'>
              If provided, this secret will be used to sign the webhook payload.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateWebhook}>
            <Save className='h-4 w-4 mr-2' /> Create Webhook
          </Button>
        </CardFooter>
      </Card>
      <div>
        <h3 className='text-lg font-medium mb-4'>Your Webhooks</h3>
        {loading ? (
          <p>Loading webhooks...</p>
        ) : error ? (
          <p className='text-red-500'>{error}</p>
        ) : webhooks.length === 0 ? (
          <p>No webhooks configured yet. Create your first webhook above.</p>
        ) : (
          <div className='space-y-4'>
            {webhooks.map(webhook => (
              <Card key={webhook.id}>
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle className='text-lg'>{webhook.name}</CardTitle>
                      <CardDescription className='truncate max-w-md'>
                </SelectContent>
              </Select>
              <Button type="button" onClick={handleAddEvent} variant="outline">
                <PlusCircle className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret(optional)</Label>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input
              id="webhook-secret"
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
          
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret (optional)</Label>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input 
              id="webhook-secret" 
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />
            <p className="text-xs text-muted-foreground">
              If provided, this secret will be used to sign the webhook payload.</p>
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
          <p>No webhooks configured yet.Create your first webhook above.</p>
        ) : (
          <div className="space-y-4">
            {webhooks.map(webhook => (
              <Card key={webhook.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>
                      <CardDescription className="truncate max-w-md">
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret (optional)</Label>
            <Input 
              id="webhook-secret" 
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
<<<<<<< HEAD

                        {webhook.url}
=======
>>>>>>>                         {webhook.url}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        ) : webhooks.length === 0 ? (;
          <p>No webhooks configured yet. Create your first webhook above.</p>;
        ) : (;
          <div className="space-y-4">;
            {webhooks.map(webhook => (;
              <Card key={webhook.id}>;
                <CardHeader className="pb-2">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        {webhook.url}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className='flex-shrink-0'>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() =>
                            toggleWebhook(webhook.id, !webhook.is_active)
                          }                        >
<<<<<<< HEAD
>>>>>>>                           {webhook.is_active ? 'Disable' : 'Enable'}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          {webhook.is_active ? 'Disable' : 'Enable'}
>>>>>>>                         </Button>
=======
=======
                      <div className="flex-shrink-0">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          {webhook.is_active ? 'Disable' : 'Enable'}
                        </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>
                    </div>
                  </div>
                </CardHeader>
<<<<<<< HEAD
                <CardContent className='py-2'>
                  <div className='flex flex-col space-y-2'>
                    <div>
<<<<<<< HEAD

                        : 'Never triggered'}
=======
=======
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Label className='text-sm'>Events</Label>
                      <div className='flex flex-wrap gap-2 mt-1'>
                        {webhook.event_types.map((event: WebhookEventType) => (
                          <ClickableBadge key={event} variant='secondary'>
                            {eventOptions.find(e => e.value === event)?.label |
                              event}                          </ClickableBadge>
                        ))}
                      </div>
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      {webhook.last_triggered_at
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
<<<<<<< HEAD
>>>>>>>                         : 'Never triggered'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                      <Label className="text-sm">Events</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {webhook.event_types.map((event: WebhookEventType) => (
                          <ClickableBadge key={event} variant="secondary">
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </ClickableBadge>;
                        ))}
                      </div>;
                    </div>;
                    <div className="text-xs text-muted-foreground">;
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        : 'Never triggered'}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button
<<<<<<< HEAD
<<<<<<< HEAD

=======
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label |event}
                        </SelectItem>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                    variant='outline'
                    size='sm'
                    onClick={() => deleteWebhook(webhook.id)}
                  >
                    <Trash className='h-4 w-4 mr-2' /> Delete
                  </Button>
                  <Select
                    onValueChange={value =>
                      handleTestWebhook(webhook.id, value as WebhookEventType)
                    }                  >
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Test webhook' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='test_event'>Test (generic)</SelectItem>
                      {webhook.event_types.map((event: WebhookEventType) => (                        <SelectItem key={event} value={event}>
                          Test{' '}
                          {eventOptions.find(e => e.value === event)?.label |
                            event}
                        </SelectItem>
                  >
                    <Trash className="h-4 w-4 mr-2" /> Delete
                  </Button>
                  <Select
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as WebhookEventType)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Test webhook" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="test_event">Test(generic)</SelectItem>
                      {webhook.event_types.map(event => (
<<<<<<< HEAD
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label |event}
                        </SelectItem>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    variant="outline"
                    size="sm"
                    onClick={() => deleteWebhook(webhook.id)}
                  >;
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as WebhookEventType)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Test webhook" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map((event: WebhookEventType) => (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                         <SelectItem key={event} value={event}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <SelectItem key={event} value={event}>
>>>>>>>                           Test {eventOptions.find(e => e.value === event)?.label || event}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        </SelectItem>;
<<<<<<< HEAD

                      ))}
=======
>>>>>>>                       ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                      ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {testResult && (
          <Card className='mt-4 border-blue-200'>
            <CardHeader>
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='font-medium'>Status:</span>
<<<<<<< HEAD
        {testResult && (;
          <Card className='mt-4 border-blue-200'>;
            <CardHeader>;
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;
              <div className='space-y-2'>;
                <div className='flex justify-between'>;
                  <span className='font-medium'>Status:</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <span
                    className={
                      testResult && testResult.status>= 200 && testResult && testResult.status < 300;
                        ? 'text-green-600';
                        : 'text-red-600';
=======
                  <span
                    className={
                      testResult.status >= 200 && testResult.status < 300
                        ? 'text-green-600'
                        : 'text-red-600'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }
                  >                    {testResult.status} {testResult.statusText}
                  </span>
                </div>
                <div>
                  <span className='font-medium'>Response:</span>
                  <pre className='mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto'>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    {testResult.responseBody |'<empty>'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                    {testResult.responseBody |'<empty>'}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
        {testResult && (;
          <Card className="mt-4 border-blue-200">;
            <CardHeader>;
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;
              <div className="space-y-2">;
                <div className="flex justify-between">;
                  <span className="font-medium">Status:</span>;
                  <span className={testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600'}>;
                    {testResult.status} {testResult.statusText}
                  </span>;
                </div>;
                <div>;
                  <span className="font-medium">Response:</span>;
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">;
<<<<<<< HEAD
<<<<<<< HEAD

                    {testResult.responseBody || '<empty>'}

=======
>>>>>>>                     {testResult.responseBody || '<empty>'}
>>>>>>>                   </pre>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </pre>
>>>>>>>                 </div>
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {testResult.responseBody || '<empty>'}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  </pre>
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
            </CardContent>
          </Card>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      </div>
    </div>
  )
}setNewWebhook ({
  ...newWebhook
eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent]
}
}newWebhook.url
newWebhook.eventTypes
newWebhook.secret |undefined);"
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {
  newWebhook.eventTypes.map (event => (<ClickableBadge key= {
  event
}onRemove= {
  () => handleRemoveEvent (event)
}> {
  eventOptions.find (e => e.value === event) ?.label |event
}</ClickableBadge>) ) "
}</div> <div className="flex space-x-2"> <Select value= {
  newWebhook.selectedEvent
}onValueChange= {
  (value) => setNewWebhook ({
  ...newWebhook, selectedEvent: value as WebhookEventType
}) "
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {
  eventOptions.map (option => (<SelectItem key= {
  option.value
}value= {
  option.value
}> {
  option.label
}</SelectItem>) ) "
}</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> <Input /> <p className="text-xs text-muted-foreground"> If provided, this secret will be used to sign the webhook payload. </p> </div> </CardContent> <CardFooter> <Button onClick={
  handleCreateWebhook "
}> <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> </Card> <div> <h3 className="text-lg font-medium mb-4">Your Webhooks</h3> {"
  loading ? (<p>Loading webhooks...</p>) : error ? (<p className="text-red-500"> {
  error "
}</p>) : webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {
  webhooks.map (webhook => (<Card key= {
  webhook.id "
}> <CardHeader className="pb-2"> <div className="flex justify-between items-start"> <div> <CardTitle className="text-lg"> {
  webhook.name "
}</CardTitle> <CardDescription className="truncate max-w-md"> {
  webhook.url "
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <div className= {
  `h-2 w-2 rounded-full mr-2 $ {
  webhook.is active ? 'bg-green-500' : 'bg-gray-400'
}` "
}></div> <span className="text-sm"> {'
  webhook.is active ? 'Active' : 'Inactive' "
}</span> </div> <div className="flex-shrink-0"> <Button > {'
  webhook.is active ? 'Disable' : 'Enable' "
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) "
}</div> </div> <div className="text-xs text-muted-foreground"> {
  webhook.last triggered at ? `Last triggered: $ {
  new Date (webhook.last triggered at) .toLocaleString () '
}` : 'Never triggered' "
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <Select onValueChange= {
  (value) => handleTestWebhook (webhook.id, value as WebhookEventType) "
}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) )
}</SelectContent> </Select> </CardFooter> </Card>) )
}</div>)
}{"
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <span className= {'
  testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600'
}> {
  testResult.status
}{
  testResult.statusText "
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {'
  testResult.responseBody |'<empty>'
}</pre> </div> </div> </CardContent> </Card>)
}</div> </div>)
}'"}
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
                      <SelectItem value="test_event">Test (generic)</SelectItem>;
                      {webhook.event_types.map (event => (
                        <SelectItem key={event} value={event}>;
                          Test {event_options.find (e => e.value === event)?.label || event}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>))}
          </div>)}
        {test_result && (
          <Card className='mt - 4 border - blue - 200'>;
            <CardHeader>;
              <CardTitle className='text - lg'>Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;
              <div className='space - y-2'>;
                <div className='flex justify - between'>;
                  <span className='font - medium'>Status:</span>;
                  <span;
                    className={
                      test_result.status >= 200 && test_result.status < 300;
                        ? 'text - green - 600';
                        : 'text - red - 600';
                    }
                  >                    {test_result.status} {test_result.status_text}
                  </span>;
                </div>;
                <div>;
                  <span className='font - medium'>Response:</span>;
                  <pre className='mt - 1 p - 2 bg - gray - 100 rounded text - sm overflow - x-auto'>;
                    {test_result.response_body || '<empty>'}
                  </pre>;
                </div>;
              </div>;
            </CardContent>;
          </Card>)}
>>>>>>>       </div>;
    </div>);
}setNewWebhook ({
  ...new_webhook;
event_types: [...new_webhook.event_types, new_webhook.selected_event];
}

;
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

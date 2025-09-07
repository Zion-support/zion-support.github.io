<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function WebhookManager() {
  const { 
    webhooks,
    loading, 
    error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook
  } = useWebhooks(),
  
  const [newWebhook, setNewWebhook] = useState({
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
    
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
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
=======
webhooks,
    loading,
=======
webhooks,
    loading,

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
    error,

=======
export function WebhookManager() {
  const { 
    webhooks,
    loading,     error,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    error,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx

import React, { useEffect, useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
import { Label } from '@/components/ui/label';'
import { ClickableBadge } from '@/components/ui/clickable-badge';'
import { PlusCircle, Save, Trash } from 'lucide-react';'
import { useWebhooks, WebhookEventType } from '@/hooks/useWebhooks';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;'
} from '@/components/ui/select';'
import { toast } from 'sonner';
export function WebhookManager() { return null; }
  } = useWebhooks();

  const [newWebhook, setNewWebhook] = useState({;'
    name: '',;'
    url: '',;'
    selectedEvent: '' as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;'
    secret: '',;
  });

  const eventOptions: { value: WebhookEventType; label: string }[] = [;'
    { value: 'new_application', label: 'New Application Received' },;'
    { value: 'quote_received', label: 'Quote Request Received' },;'
    { value: 'milestone_approved', label: 'Milestone Approved' },;'
    { value: 'talent_hired', label: 'Talent Hired' },;
  ];

  useEffect(() => {;
    fetchWebhooks();
  }, []);
  const handleAddEvent = () => {;
    if (!newWebhook && newWebhook.selectedEvent) return;

    if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;'
      toast && toast.error('This event is already added');
      return;
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
export function WebhookManager() {
  const { 
    webhooks;
    loading;
    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook
  } = useWebhooks();
  const [newWebhook, setNewWebhook] = useState({
    name: "";
    url: "";
    selectedEvent: "" as WebhookEventType;
    eventTypes: [] as WebhookEventType[];
    secret: ""
  });
  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ],
  useEffect(() => {
    fetchWebhooks()
  }, []),
  const handleAddEvent = null;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
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
origin/cursor/automate-test-improve-and-merge-code-2533
    }

    setNewWebhook({;
      ...newWebhook,;
      eventTypes: [...newWebhook && newWebhook.eventTypes, newWebhook && newWebhook.selectedEvent],;'
      selectedEvent: '' as WebhookEventType,;
    })
};

  const handleRemoveEvent = (event: WebhookEventType) => {    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook && newWebhook.eventTypes.filter(e => e !== event),;
    })
};

  const handleCreateWebhook = async () => {;
    if (;
      !newWebhook && newWebhook.name ||;
      !newWebhook && newWebhook.url ||;
      newWebhook && newWebhook.eventTypes.length === 0;
    ) {;'
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
    setNewWebhook({;'
      name: '',;'
      url: '',;'
      selectedEvent: '' as WebhookEventType,;
      eventTypes: [],;'
      secret: '',;
    })
};

  const handleTestWebhook = async (;
    webhookId: string,;
    eventType: WebhookEventType;
  ) => {;
    await testWebhook(webhookId, eventType)
};
  return (
'
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

    }
    
    setNewWebhook({}
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
    
    await createWebhook(
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
      newWebhook.secret || undefined
<<<<<<< HEAD
    ),
    
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    // Reset form
    setNewWebhook({
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
      name: "",
      url: "",
=======
      newWebhook.secret || undefined;
    // Reset form;
    setNewWebhook({}
      name: "","
      url: "","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
      selectedEvent: "" as WebhookEventType,
      eventTypes: [],
<<<<<<< HEAD
      secret: ""
    })
  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
  
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
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
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
  return (
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
=======
"
        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
            <div className="space-y-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input "
                id="webhook-name" "
                placeholder="e.g., Job Postings Webhook"
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

                value={newWebhook.name}
<<<<<<< HEAD
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
            </div>
=======
                onChange={e =>
                  setNewWebhook({ ...newWebhook, name: e.target.value })
                }

              />;
            </div>;
'
            <div className='space-y-2'>;'
              <Label htmlFor='webhook-url'>URL</Label>;
              <Input'
                id='webhook-url''
                placeholder='https://example && example.com/webhook'
                value={newWebhook && newWebhook.url}
                onChange={e =>;
                  setNewWebhook({ ...newWebhook, url: e && e.target.value });
                }              />;
            </div>;
          </div>;
'
          <div className='space-y-2'>;
            <Label>Events</Label>;'
            <div className='flex flex-wrap gap-2 mb-2'>;
              {newWebhook && newWebhook.eventTypes.map(event => (;

                <ClickableBadge;
                  key={event}                  onRemove={() => handleRemoveEvent(event)}
                <ClickableBadge;
                  key = {event,}
                  onRemove = {(,) => handleRemoveEvent(event),}

                >;
                  {eventOptions && eventOptions.find(e => e && e.value === event)?.label || event}
                </ClickableBadge>;

              ))}
            </div>;'
            <div className='flex space-x-2'>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              <Select

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                value={newWebhook.name}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
            <div className="space-y-2">
=======
              <Select;
            "
            <div className="space-y-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
              <Label htmlFor="webhook-url">URL</Label>
              <Input "
                id="webhook-url" "
                placeholder="https://example.com/webhook""
import React, { useEffect, useState } from "react",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { ClickableBadge } from "@/components/ui/clickable-badge",;'
import { PlusCircle, Save, Trash } from 'lucide-react';"
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { toast } from "sonner",;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
export function WebhookManager() { return null; }
=======
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
    selectedEvent: '' as WebhookEventType,;,
    eventTypes: [] as WebhookEventType[],;
    secret: '',;
  });
  const eventOptions: { value: WebhookEventType; label: string }[] = [;,
    { value: 'new_application', label: 'New Application Received' },;
    { value: 'quote_received', label: 'Quote Request Received' },;
    { value: 'milestone_approved', label: 'Milestone Approved' },;
    { value: 'talent_hired', label: 'Talent Hired' },;
  ];
  useEffect(() => {;
    fetchWebhooks();
  }, []);,
  const handleAddEvent = () => {;
    if (!newWebhook && newWebhook.selectedEvent) return;
    if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;
      toast && toast.error('This event is already added');
      return;
    }
    setNewWebhook({;
      ...newWebhook,;,
      eventTypes: [...newWebhook && newWebhook.eventTypes, newWebhook && newWebhook.selectedEvent],;
      selectedEvent: '' as WebhookEventType,;
    });
  };
  const handleRemoveEvent = (event:,  WebhookEventType) => {    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook && newWebhook.eventTypes.filter(e => e !==,  event),;
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
      selectedEvent: '' as WebhookEventType,;,
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
    }
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
    }
    await createWebhook(
      newWebhook.name,
      newWebhook.url,
      newWebhook.eventTypes,
      newWebhook.secret || undefined
    // Reset form
    setNewWebhook({
      name: "","
      url: "","
      selectedEvent: "" as WebhookEventType,",
      eventTypes: [],
  return (
    <div className="space-y-8">"
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
            <div className="space-y-2">"
              <Label htmlFor="webhook-name">Webhook Name</Label>"
              <Input id="webhook-name" "
                placeholder="e.g., Job Postings Webhook""
                value={newWebhook.name}
                onChange={e = />
                  setNewWebhook({ ...newWebhook, name: e.target.value })
                }
              />;
            </div>;
            <div className='space-y-2'>;
              <Label htmlFor='webhook-url'>URL</Label>;
              <Input id='webhook-url''
                placeholder='https://example && example.com/webhook'',
                value={newWebhook && newWebhook.url}
                onChange={e = />;
                  setNewWebhook({ ...newWebhook, url: e && e.target.value });
                }              />;
            </div>;
          </div>;
          <div className='space-y-2'>;
            <Label>Events</Label>;
            <div className='flex flex-wrap gap-2 mb-2'>;
              {newWebhook && newWebhook.eventTypes.map(event => (;
                <ClickableBadge
                  key={event}                  onRemove={() => handleRemoveEvent(event)}
                <ClickableBadge
                  key = {event,}
                  onRemove = {(,) => handleRemoveEvent(event),}
                >;
                  {eventOptions && eventOptions.find(e => e && e.value ===,  event)?.label || event}
                </ClickableBadge>;
              ))}
            </div>;
            <div className='flex space-x-2'>;
              <Select
            <div className="space-y-2">"
              <Label htmlFor="webhook-url">URL</Label>"
              <Input id="webhook-url" "
                placeholder="https://example.com/webhook"",
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
  } = useWebhooks(),;,
  const [newWebhook, setNewWebhook] = useState({;
    name: "",;
    url: "",;
    selectedEvent: "" as WebhookEventType,;,
    eventTypes: [] as WebhookEventType[],;
    secret: "";
  }),;
  const eventOptions: { value: WebhookEventType, label: string }[] = [;,
    { value: "new_application", label: "New Application Received" },;
    { value: "quote_received", label: "Quote Request Received" },;
    { value: "milestone_approved", label: "Milestone Approved" },;
    { value: "talent_hired", label: "Talent Hired" }"
  ],;
  useEffect(() = /> {;
    testWebhook;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
  } = useWebhooks(),;
  const [newWebhook, setNewWebhook] = useState({;"
    name: "",;"
    url: "",;"
    selectedEvent: "" as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;"
    secret: "";
  }),;
  const eventOptions: { value: WebhookEventType, label: string }[] = [;"
    { value: "new_application", label: "New Application Received" },;"
    { value: "quote_received", label: "Quote Request Received" },;"
    { value: "milestone_approved", label: "Milestone Approved" },;"
    { value: "talent_hired", label: "Talent Hired" }
  ],;
  useEffect(() => {;
    fetchWebhooks();
  }, []),;
  const handleAddEvent = () => {;
    if (!newWebhook.selectedEvent) return,;
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {;"
      toast.error("This event is already added"),;
      return;
    }
;
    setNewWebhook({;
      ...newWebhook,;,
      ...newWebhook,;
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],;"
      selectedEvent: "" as WebhookEventType;
    });
  },;
  const handleRemoveEvent = (event:,  WebhookEventType) => {;,
    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook.eventTypes.filter(e => e !==,  event);
  const handleRemoveEvent = (event: WebhookEventType) => {;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook.eventTypes.filter(e => e !== event);
    });
  },;
  const handleCreateWebhook = async () => {;
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {;"
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
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
    setNewWebhook({;"
      name: "",;"
      url: "",;"
=======
    setNewWebhook({;
      name: "",;
      url: "",;
      selectedEvent: "" as WebhookEventType,;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
      selectedEvent: "" as WebhookEventType,;
      eventTypes: [],;"
      secret: "";
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
    })
};
=======
    });
  };
  const handleTestWebhook = async (webhookId: string, eventType:,  WebhookEventType) => {;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
    await testWebhook(webhookId, eventType)
};
  return (;
=======
    await testWebhook(webhookId, eventType);
  };
  return (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;"
        <CardContent className="space-y-4">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
            <div className="space-y-2">;"
              <Label htmlFor="webhook-name">Webhook Name</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              <Input;"
                id="webhook-name";"
=======
              <Input ;
                id="webhook-name";
                placeholder="e.g., Job Postings Webhook";
                value={newWebhook.name}
                onChange={(e) = /> setNewWebhook({...newWebhook, name: e.target.value})}
              <Input;
                id="webhook-name";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                placeholder="e.g., Job Postings Webhook";
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />;
            </div>;"
            <div className="space-y-2">;"
              <Label htmlFor="webhook-url">URL</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              <Input;"
                id="webhook-url";"
=======
              <Input ;
                id="webhook-url";
                placeholder="https://example.com/webhook";",
                value={newWebhook.url}
                onChange={(e) = /> setNewWebhook({...newWebhook, url: e.target.value})}
              <Input;
                id="webhook-url";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                placeholder="https://example.com/webhook";
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />;
            </div>;
          </div>;"
          <div className="space-y-2">;
            <Label>Events</Label>;"
            <div className="flex flex-wrap gap-2 mb-2">;
              {newWebhook.eventTypes.map(event => (;
                <ClickableBadge;
                  key={event} ;
                  onRemove={() => handleRemoveEvent(event)}
                >;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======
                  {eventOptions.find(e => e.value ===,  event)?.label || event}
                </ClickableBadge>;
              ))}
                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
            </div>;
            <div className="flex space-x-2">;
              <Select;
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
              >
                <SelectTrigger className="w-full">
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
                  <SelectValue placeholder="Select event" />
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

=======
                  <SelectValue placeholder="Select event" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
                </SelectTrigger>
=======
                  <SelectValue placeholder="Select event" />                </SelectTrigger>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <SelectContent>
                  {eventOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              </Select>
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              <Button type="button" onClick={handleAddEvent} variant="outline">
                <PlusCircle className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
<<<<<<< HEAD
          
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret (optional)</Label>
            <Input 
              id="webhook-secret" 
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
=======

=======
              <Button type='button' onClick={handleAddEvent} variant='outline'>'
                <PlusCircle className='h-4 w-4 mr-2' /> Add'
              </Button>
            </div>
          </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
        <CardContent className='space - y-4'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div className='space - y-2'>;
=======
              </Select>'
              <Button type='button' onClick={handleAddEvent} variant='outline'>'
                <PlusCircle className='h-4 w-4 mr-2' /> Add;
              </Button>
            </div>
          </div>
'
        <CardContent className='space - y-4'>;'
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;'
            <div className='space - y-2'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
              <Label html_for='webhook - name'>Webhook Name</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              <Input;'
                id='webhook - name';'
=======
              <Input ;
                id='webhook - name';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                placeholder='e.g., Job Postings Webhook';
                value={new_webhook.name}
                on_change={e = />;
                  setNewWebhook ({ ...new_webhook, name: e.target.value });
                }
              />;
            </div>;'
            <div className='space - y-2'>;'
              <Label html_for='webhook - url'>URL</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              <Input;'
                id='webhook - url';'
                placeholder='https://example.com / webhook';
=======
              <Input ;
                id='webhook - url';
                placeholder='https://example.com / webhook';',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                value={new_webhook.url}
                on_change={e = />;
                  setNewWebhook ({ ...new_webhook, url: e.target.value });
                }              />;
            </div>;
          </div>;'
          <div className='space - y-2'>;
            <Label > Events</Label>;'
            <div className='flex flex - wrap gap - 2 mb - 2'>;
              {new_webhook.event_types.map (event => (
                <ClickableBadge;
                  key={event}                  on_remove={() => handleRemoveEvent (event)}
                <ClickableBadge;
                  key = {event, }
                  on_remove = {(, ) => handleRemoveEvent (event), }
                >;
                  {event_options.find (e => e.value ===,  event)?.label || event}
                </ClickableBadge>))}
            </div>;'
            <div className='flex space - x-2'>;
              <Select;
                value={new_webhook.selected_event}
                onValueChange={value =>;
                  setNewWebhook ({}
                    ...new_webhook,
                    selected_event: value as WebhookEventType,
                  });
                }              >;'
                <SelectTrigger className='w - full'>;'
                  <SelectValue placeholder='Select event' />;
                </SelectTrigger>;
                <SelectContent>;
                  {event_options.map (option => (
                    <SelectItem key={option.value} value={option.value}>;
                      {option.label}
                    </SelectItem>))}
                </SelectContent>;
              </Select>;'
              <Button type='button' on_click={handleAddEvent} variant='outline'>;'
                <PlusCircle className='h - 4 w - 4 mr - 2' /> Add;
              </Button>;
            </div>;
          </div>;'
          <div className='space - y-2'>;'
            <Label html_for='webhook - secret'>Secret (optional)</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
            <Input;'
              id='webhook - secret';'
=======
            <Input ;
              id='webhook - secret';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
              placeholder='A secret key to verify the webhook source';
              value={new_webhook.secret}
              on_change={e = />;
                setNewWebhook ({ ...new_webhook, secret: e.target.value });
              }            />;'
            <p className='text - xs text - muted - foreground'>;
              If provided, this secret will be used to sign the webhook payload.;
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
          <Button on_click={handleCreateWebhook}>;'
            <Save className='h - 4 w - 4 mr - 2' /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;'
        <h3 className='text - lg font - medium mb - 4'>Your Webhooks</h3>;
        {loading ? (
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
          <p > Loading webhooks...</p>) : error ? ('
          <p className='text - red - 500'>{error}</p>) : webhooks.length === 0 ? (
          <p > No webhooks configured yet. Create your first webhook above.</p>) : ('
=======
          <p > Loading webhooks...</p>) : error ? (
          <p className='text - red - 500'>{error}</p>) : webhooks.length === 0 ? ('
          <p > No webhooks configured yet. Create your first webhook above.</p>) : (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
          <div className='space - y-4'>;
            {webhooks.map (webhook => (
              <Card key={webhook.id}>;'
                <CardHeader className='pb - 2'>;'
                  <div className='flex justify - between items - start'>;
                    <div>;'
                      <CardTitle className='text - lg'>{webhook.name}</CardTitle>;'
                      <CardDescription className='truncate max - w-md'>;
                </SelectContent>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
              </Select>;
              <Button type="button" on_click={handleAddEvent} variant="outline">;
                <PlusCircle className="h - 4 w - 4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;
          <div className="space-y-2">;
=======
              </Select>;"
              <Button type="button" on_click={handleAddEvent} variant="outline">;"
                <PlusCircle className="h - 4 w - 4 mr - 2" /> Add;
              </Button>;
            </div>;
          </div>;"
          <div className="space - y-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
            <Label html_for="webhook - secret">Secret (optional)</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
            <Input;"
              id="webhook - secret";"
              placeholder="A secret key to verify the webhook source";
              value={new_webhook.secret}
              on_change={(e) => setNewWebhook ({...new_webhook, secret: e.target.value})}
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
=======
            <Input ;
              id="webhook - secret";
              placeholder="A secret key to verify the webhook source";
              value={new_webhook.secret}
              on_change={(e) = /> setNewWebhook ({...new_webhook, secret: e.target.value})}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
            />;
            <p className="text - xs text - muted-foreground">;
=======
            />;"
            <p className="text - xs text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
              If provided, this secret will be used to sign the webhook payload.</p>;
          </div>;
        </CardContent>;
        <CardFooter>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
          <Button on_click={handleCreateWebhook}>;
            <Save className="h - 4 w - 4 mr-2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
        <h3 className="text - lg font - medium mb-4">Your Webhooks</h3>;

        {loading ? (
          <p > Loading webhooks...</p>) : error ? (
          <p className="text - red-500">{error}</p>) : webhooks.length === 0 ? (
=======
        <h3 className="text - lg font - medium mb - 4">Your Webhooks</h3>;
        {loading ? (
          <p > Loading webhooks...</p>) : error ? (
          <p className="text - red - 500">{error}</p>) : webhooks.length === 0 ? ("
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
          <p > No webhooks configured yet.Create your first webhook above.</p>) : (
          <div className="space-y-4">;
            {webhooks.map (webhook => (
              <Card key={webhook.id}>;
                <CardHeader className="pb-2">;
                  <div className="flex justify - between items-start">;
                    <div>;
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
=======
          <Button on_click={handleCreateWebhook}>;"
            <Save className="h - 4 w - 4 mr - 2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;"
        <h3 className="text - lg font - medium mb - 4">Your Webhooks</h3>;

        {loading ? (
          <p > Loading webhooks...</p>) : error ? ("
          <p className="text - red - 500">{error}</p>) : webhooks.length === 0 ? (
          <p > No webhooks configured yet.Create your first webhook above.</p>) : ("
          <div className="space - y-4">;
            {webhooks.map (webhook => (
              <Card key={webhook.id}>;"
                <CardHeader className="pb - 2">;"
                  <div className="flex justify - between items - start">;
                    <div>;"
                      <CardTitle className="text - lg">{webhook.name}</CardTitle>;"
                      <CardDescription className="truncate max - w-md">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                        {webhook.url}
                value={newWebhook && newWebhook.selectedEvent}
                onValueChange={value =>;
                  setNewWebhook({;
                    ...newWebhook,;
                    selectedEvent: value as WebhookEventType,;
                  });
                }              >;'
                <SelectTrigger className='w-full'>;'
                  <SelectValue placeholder='Select event' />;
                </SelectTrigger>;
                <SelectContent>;
                  {eventOptions && eventOptions.map(option => (;
                    <SelectItem key={option && option.value} value={option && option.value}>;
                      {option && option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;'
              <Button type='button' onClick={handleAddEvent} variant='outline'>;'
                <PlusCircle className='h-4 w-4 mr-2' /> Add;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
'
          <div className='space-y-2'>;'
            <Label htmlFor='webhook-secret'>Secret (optional)</Label>;
            <Input'
              id='webhook-secret''
              placeholder='A secret key to verify the webhook source'
=======
          <div className='space-y-2'>;
            <Label htmlFor='webhook-secret'>Secret (optional)</Label>;
            <Input id='webhook-secret''
              placeholder='A secret key to verify the webhook source''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
              value={newWebhook && newWebhook.secret}
              onChange={e = />;
                setNewWebhook({ ...newWebhook, secret: e && e.target.value });
              }            />;'
            <p className='text-xs text-muted-foreground'>;
              If provided, this secret will be used to sign the webhook payload.;
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
          <Button onClick={handleCreateWebhook}>;'
            <Save className='h-4 w-4 mr-2' /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

      <div>;'
=======
      <div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
        <h3 className='text-lg font-medium mb-4'>Your Webhooks</h3>;
        {loading ? (;
          <p>Loading webhooks...</p>;
        ) : error ? (;'
          <p className='text-red-500'>{error}</p>;
        ) : webhooks && webhooks.length === 0 ? (;
          <p>No webhooks configured yet. Create your first webhook above.</p>;
        ) : (;'
          <div className='space-y-4'>;
            {webhooks && webhooks.map(webhook => (;
              <Card key={webhook && webhook.id}>;'
                <CardHeader className='pb-2'>;'
                  <div className='flex justify-between items-start'>;
                    <div>;'
                      <CardTitle className='text-lg'>{webhook && webhook.name}</CardTitle>;'
                      <CardDescription className='truncate max-w-md'>;
                </SelectContent>;
              </Select>;"
              <Button type="button" onClick={handleAddEvent} variant="outline">;"
                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;"
          <div className="space-y-2">;"
            <Label htmlFor="webhook-secret">Secret(optional)</Label>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
            <Input"
              id="webhook-secret" "
              placeholder="A secret key to verify the webhook source"
              value={newWebhook && newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e && e.target.value})}
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <Input id="webhook-secret" "
              placeholder="A secret key to verify the webhook source""
              value={newWebhook && newWebhook.secret}
              onChange={(e) = /> setNewWebhook({...newWebhook, secret: e && e.target.value})}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
            />;
=======
            />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
            <p className="text-xs text-muted-foreground">;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
=======
              If provided, this secret will be used to sign the webhook payload.</p>;
                    </SelectItem>;
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" onClick={handleAddEvent} variant="outline">
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
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />;
            <p className="text-xs text-muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
              If provided, this secret will be used to sign the webhook payload.;
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
          <Button onClick={handleCreateWebhook}>;"
            <Save className="h-4 w-4 mr-2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;
        {loading ? (;
          <p>Loading webhooks...</p>;
        ) : error ? (;"
          <p className="text-red-500">{error}</p>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
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
=======
        ) : webhooks && webhooks.length === 0 ? (;
          <p>No webhooks configured yet && yet.Create your first webhook above.</p>;
        ) : (;"
          <div className="space-y-4">;
            {webhooks && webhooks.map(webhook => (;
              <Card key={webhook && webhook.id}>;"
                <CardHeader className="pb-2">;"
                  <div className="flex justify-between items-start">;
                    <div>;"
                      <CardTitle className="text-lg">{webhook && webhook.name}</CardTitle>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                      <CardDescription className="truncate max-w-md">;
<<<<<<< HEAD
=======
                        {webhook && webhook.url}
                      </CardDescription>;
                    </div>;'
                    <div className='flex items-center'>;'
                      <div className='mr-2 flex items-center'>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

                        <div'
                          className={`h-2 w-2 rounded-full mr-2 ${webhook && webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;'
                        <span className='text-sm'>;'
                          {webhook && webhook.is_active ? 'Active' : 'Inactive'}
=======
                        <div
                          className={`h-2 w-2 rounded-full mr-2 ${webhook && webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;`
                        <span className='text-sm'>;
                          {webhook && webhook.is_active ? 'Active' : 'Inactive'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                        </span>;
                      </div>;'
                      <div className='flex-shrink-0'>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                        <Button'
                          variant='outline''
                          size='sm'

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div className="space-y-2">
=======

          "
          <div className="space-y-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
            <Label htmlFor="webhook-secret">Secret (optional)</Label>

            <Input "
              id="webhook-secret" "
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                        <Button

              value={newWebhook.secret}
              onChange={(e) = /> setNewWebhook({...newWebhook, secret: e.target.value})}
                        {webhook.url}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">"
                      <div className="mr-2 flex items-center">"
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>`
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>'
                      </div>
                      <div className="flex-shrink-0">"
                        <Button
                          variant="outline" "
                          size="sm""
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >;
                          {webhook.is_active ? 'Disable' : 'Enable'}'
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                        {webhook.url}
                      </CardDescription>
                    </div>"
                    <div className="flex items-center">"
                      <div className="mr-2 flex items-center">'`
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>'"
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>
                      </div>
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                      <div className="flex-shrink-0">
                        <Button "
                          variant="outline" "
                          size="sm"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                          {webhook.is_active ? 'Disable' : 'Enable'}
                        </Button>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                </CardHeader>
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
=======
                </CardHeader>'
                <CardContent className='py-2'>'
                  <div className='flex flex-col space-y-2'>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                    <div>
<<<<<<< HEAD
=======

                          onClick={() =>;
                            toggleWebhook(webhook && webhook.id, !webhook && webhook.is_active);
                          }                        >;'
                          {webhook && webhook.is_active ? 'Disable' : 'Enable'}
=======
                <CardContent className='py-2'>'
                  <div className='flex flex-col space-y-2'>'
                    <div>
                          onClick={() =>;
                            toggleWebhook(webhook && webhook.id, !webhook && webhook.is_active);
                          }                        >;
                          {webhook && webhook.is_active ? 'Disable' : 'Enable'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                      </CardDescription>;
                    </div>;'
                    <div className='flex items - center'>;'
                      <div className='mr - 2 flex items - center'>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                        <div;'`
                          className={`h - 2 w - 2 rounded - full mr - 2 ${webhook.is_active ? 'bg - green - 500' : 'bg - gray - 400'}`}
                        ></div>;'
                        <span className='text - sm'>;'
                          {webhook.is_active ? 'Active' : 'Inactive'}
=======
                        <div;
                          className={`h - 2 w - 2 rounded - full mr - 2 ${webhook.is_active ? 'bg - green - 500' : 'bg - gray - 400'}`}`
                        ></div>;
                        <span className='text - sm'>;
                          {webhook.is_active ? 'Active' : 'Inactive'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                        </span>;
                      </div>;'
                      <div className='flex - shrink - 0'>;
                        <Button;'
                          variant='outline';'
                          size='sm';
                          on_click={() =>;
                            toggle_webhook (webhook.id, !webhook.is_active);
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                          }                        >;'
                          {webhook.is_active ? 'Disable' : 'Enable'}

=======
                          }                        >;
                          {webhook.is_active ? 'Disable' : 'Enable'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
'
                <CardContent className='py - 2'>;'
=======
                <CardContent className='py - 2'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                  <div className='flex flex - col space - y-2'>;
                    <div>;'
                      <Label className='text - sm'>Events</Label>;'
                      <div className='flex flex - wrap gap - 2 mt - 1'>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                        {webhook.event_types.map ((event: WebhookEventType) => ('
=======
                        {webhook.event_types.map ((event:,  WebhookEventType) => (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                          <ClickableBadge key={event} variant='secondary'>;
                            {event_options.find (e => e.value ===,  event)?.label ||;
                              event}                          </ClickableBadge>))}
                      </div>;
                    </div>;'
                    <div className='text - xs text - muted - foreground'>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                      {webhook.last_triggered_at;`
                        ? `Last triggered: ${new Date (webhook.last_triggered_at).toLocaleString ()}`;
'
                        : 'Never triggered'}
=======
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date (webhook.last_triggered_at).toLocaleString ()}`;`
                        : 'Never triggered'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                    </div>;
                  </div>;
                </CardContent>;
                    onClick={() => deleteWebhook(webhook && webhook.id)}
                  >;'
                    <Trash className='h-4 w-4 mr-2' /> Delete;
                  </Button>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                  <Select
=======

                  <Select;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                    onValueChange={value =>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                      handleTestWebhook(webhook && webhook.id, value as WebhookEventType);'
=======
                      handleTestWebhook(webhook && webhook.id, value as,  WebhookEventType);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                <CardFooter className='flex justify - between pt - 2'>;
                  <Button;'
                    variant='outline';'
                    size='sm';
                    on_click={() => delete_webhook (webhook.id)}
                  >;'
                    <Trash className='h - 4 w - 4 mr - 2' /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={value =>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                      handleTestWebhook (webhook.id, value as WebhookEventType);
                    }                  >;'
                    <SelectTrigger className='w-[180px]'>;'
=======
                      handleTestWebhook (webhook.id, value as,  WebhookEventType);
                    }                  >;
                    <SelectTrigger className='w-[180px]'>;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                      <SelectValue placeholder='Test webhook' />;
                    </SelectTrigger>;
                    <SelectContent>;'
                      <SelectItem value='test_event'>Test (generic)</SelectItem>;
                          {eventOptions && eventOptions.find(e => e && e.value ===,  event)?.label ||;
                            event}
                        </SelectItem>;
                  >;"
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
                      {webhook.event_types.map ((event: WebhookEventType) => (                        <SelectItem key={event} value={event}>;'
                          Test{' '}
                          {event_options.find (e => e.value === event)?.label ||;
                            event}
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <Select
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as,  WebhookEventType)}
                      {webhook.event_types.map ((event:,  WebhookEventType) => (                        <SelectItem key={event} value={event}>;
                          Test{' '}'
                          {event_options.find (e => e.value ===,  event)?.label ||;
                            event}
                      <Label className="text-sm">Events</Label>"
                      <div className="flex flex-wrap gap-2 mt-1">"
                        {webhook.event_types.map((event:,  WebhookEventType) => (
                          <ClickableBadge key={event} variant="secondary">"
                            {eventOptions.find(e => e.value ===,  event)?.label || event}
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                      <Label className="text-sm">Events</Label>
=======
"
                      <Label className="text-sm">Events</Label>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                      <div className="flex flex-wrap gap-2 mt-1">
                        {webhook.event_types.map((event: WebhookEventType) => ("
                          <ClickableBadge key={event} variant="secondary">
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </ClickableBadge>;
                        ))}
                      </div>;
                    </div>;"
                    <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                      {webhook.last_triggered_at;`
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`;

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
=======
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`;`
                        : 'Never triggered'}'
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">"
                  <Button
                    variant="outline""
                    size="sm""
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                        : 'Never triggered'}
                    </div>
                  </div>
                </CardContent>"
                <CardFooter className="flex justify-between pt-2">
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                  <Button
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                    variant="outline"
=======
                  <Button;
"
                    variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                    size="sm"
                    onClick={() => deleteWebhook(webhook.id)}
                  >;"
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
                  <Select;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as WebhookEventType)}
                  >"
                    <SelectTrigger className="w-[180px]">"
                      <SelectValue placeholder="Test webhook" />
                    </SelectTrigger>
                    <SelectContent>"
                      <SelectItem value="test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map((event: WebhookEventType) => (
<<<<<<< HEAD
<<<<<<< HEAD
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;
                      ))}
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
        )}
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as,  WebhookEventType)}
                  >
                    <SelectTrigger className="w-[180px]">",
                      <SelectValue placeholder="Test webhook" />"
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="test_event">Test (generic)</SelectItem>"
                      {webhook.event_types.map((event:,  WebhookEventType) => (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value ===,  event)?.label || event}
                        </SelectItem>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                  >;
                    <Trash className="h - 4 w - 4 mr-2" /> Delete;
=======
                  >;"
                    <Trash className="h - 4 w - 4 mr - 2" /> Delete;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                  </Button>;
                  <Select;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                    onValueChange={(value) => handleTestWebhook (webhook.id, value as WebhookEventType)}
                  >;"
                    <SelectTrigger className="w-[180px]">;"
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
        {testResult && (
=======




        {testResult && ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
          <Card className='mt-4 border-blue-200'>
            <CardHeader>'
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>
            </CardHeader>
            <CardContent>'
              <div className='space-y-2'>'
                <div className='flex justify-between'>'
                  <span className='font-medium'>Status:</span>

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======
                    onValueChange={(value) => handleTestWebhook (webhook.id, value as,  WebhookEventType)}
                  >;
                    <SelectTrigger className="w-[180px]">;,
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
        {testResult && (
          <Card className='mt-4 border-blue-200'>'
            <CardHeader>
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>'
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>'
                <div className='flex justify-between'>'
                  <span className='font-medium'>Status:</span>'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
        {testResult && (;
=======
        {testResult && (;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
          <Card className='mt-4 border-blue-200'>;
            <CardHeader>;'
              <CardTitle className='text-lg'>Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;'
              <div className='space-y-2'>;'
                <div className='flex justify-between'>;'
                  <span className='font-medium'>Status:</span>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                  <span
                    className={
                      testResult && testResult.status>= 200 && testResult && testResult.status < 300;
                        ? 'text-green-600';
=======
                  <span;
                    className={}
                      testResult && testResult.status>= 200 && testResult && testResult.status < 300;'
                        ? 'text-green-600';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                        : 'text-red-600';
                    }
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as WebhookEventType)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Test webhook" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map((event: WebhookEventType) => (
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;
                      ))}
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
        )}

<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
=======
                  >                    {testResult.status} {testResult.statusText}
                  </span>
                </div>
                <div>
                  <span className='font-medium'>Response:</span>
                  <pre className='mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto'>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
;
        {testResult && (;"
          <Card className="mt-4 border-blue-200">;
            <CardHeader>;"
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;"
              <div className="space-y-2">;"
                <div className="flex justify-between">;"
                  <span className="font-medium">Status:</span>;'
                  <span className={testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600'}>;
                    {testResult.status} {testResult.statusText}
                  </span>;
                </div>;
                <div>;"
                  <span className="font-medium">Response:</span>;"
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
                    {testResult.responseBody || '<empty>'}
=======

=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
                    {testResult.responseBody || '<empty>'}
=======
                    {testResult.responseBody || '<empty>'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD

                  >                    {testResult && testResult.status} {testResult && testResult.statusText}
                  </span>;
                </div>;
                <div>;'
                  <span className='font-medium'>Response:</span>;'
                  <pre className='mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto'>;'
                    {testResult && testResult.responseBody || '<empty>'}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  >                    {testResult && testResult.status} {testResult && testResult.statusText}
                  </span>;
                </div>;
                <div>;
                  <span className='font-medium'>Response:</span>;
                  <pre className='mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto'>;
                    {testResult && testResult.responseBody || '<empty>'}'
                    {testResult.responseBody || '<empty>'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                  </pre>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
      </div>
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
}
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
}setNewWebhook ({;
  ...newWebhook;
eventTypes: [...newWebhook && newWebhook.eventTypes, newWebhook && newWebhook.selectedEvent];
};
}newWebhook && newWebhook.url;
newWebhook && newWebhook.eventTypes;
newWebhook && newWebhook.secret ||,  undefined);";
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {;",
  newWebhook && newWebhook.eventTypes.map (event => (<ClickableBadgekey= {
  event
}onRemove= {
  () => handleRemoveEvent (event) ;
}> {;
  eventOptions && eventOptions.find (e => e && e.value ===,  event) ?.label || event ;
}</ClickableBadge>) ) ";
}</div> <div className="flex space-x-2"> <Selectvalue= {"
  newWebhook && newWebhook.selectedEvent
}onValueChange= {
eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent];
};
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
}newWebhook.url;
newWebhook.eventTypes;
newWebhook.secret || undefined);";
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {;
  newWebhook.eventTypes.map (event => (<ClickableBadge key= {;
  event ;
}onRemove= {;
  () => handleRemoveEvent (event) ;
}> {;
  eventOptions.find (e => e.value === event) ?.label || event ;
}</ClickableBadge>) ) ";
}</div> <div className="flex space-x-2"> <Select value= {;
  newWebhook.selectedEvent ;
}onValueChange= {;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}newWebhook && newWebhook.url;
newWebhook && newWebhook.eventTypes;"
newWebhook && newWebhook.secret || undefined);";"
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {;
  newWebhook && newWebhook.eventTypes.map (event => (<ClickableBadgekey= {}
  event;
}onRemove= {}
  () => handleRemoveEvent (event) ;
}> {;
  eventOptions && eventOptions.find (e => e && e.value === event) ?.label || event ;"
}</ClickableBadge>) ) ";"
}</div> <div className="flex space-x-2"> <Selectvalue= {}
  newWebhook && newWebhook.selectedEvent;
}onValueChange= {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
  (value) => setNewWebhook ({;
  ...newWebhook, selectedEvent: value as WebhookEventType ;"
}) ";"
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
=======
  eventOptions && eventOptions.map (option => (<SelectItemkey= {
  option && option.value
}value= {
  option && option.value
}> {;
  option && option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> <Input /> <p className="text-xs text-muted-foreground"> If provided, this secret will be used to sign the webhook payload. </p> </div> </CardContent> <CardFooter> <ButtononClick={"
  handleCreateWebhook ""
}> <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> </Card> <div> <h3 className="text-lg font-medium mb-4">Your Webhooks</h3> {";
  loading ? (<p>Loading webhooks...</p>) : error ? (<p className="text-red-500"> {;
  error ";
}</p>) : webhooks && webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {;
  webhooks && webhooks.map (webhook => (<Cardkey= {
  webhook && webhook.id ""
}> <CardHeader className="pb-2"> <div className="flex justify-between items-start"> <div> <CardTitle className="text-lg"> {;
  webhook && webhook.name ";
}</CardTitle> <CardDescription className="truncate max-w-md"> {;
  webhook && webhook.url ";
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <divclassName= {"
  `h-2 w-2 rounded-full mr-2 $ {`
  webhook && webhook.is active ? 'bg-green-500' : 'bg-gray-400' '
}` ""
}></div> <span className="text-sm"> {';
  webhook && webhook.is active ? 'Active' : 'Inactive' ";
}</span> </div> <div className="flex-shrink-0"> <Button > {';
  webhook && webhook.is active ? 'Disable' : 'Enable' ";
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) ";
}</div> </div> <div className="text-xs text-muted-foreground"> {;
  webhook && webhook.last triggered at ? `Last triggered: $ {;`,
  new Date (webhook && webhook.last triggered,  at) .toLocaleString () ';
}` : 'Never triggered' ";
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <SelectonValueChange= {"
  (value) => handleTestWebhook (webhook && webhook.id, value as,  WebhookEventType) ";,
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <SelectonValueChange= {
  (value) => handleTestWebhook (webhook && webhook.id, value as WebhookEventType) ";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
  eventOptions.map (option => (<SelectItem key= {;
  option.value ;
}value= {;
  option.value ;
}> {;
  option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> <Input /> <p className="text-xs text-muted-foreground"> If provided, this secret will be used to sign the webhook payload. </p> </div> </CardContent> <CardFooter> <Button onClick={;
  handleCreateWebhook ";
}> <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> </Card> <div> <h3 className="text-lg font-medium mb-4">Your Webhooks</h3> {";
  loading ? (<p>Loading webhooks...</p>) : error ? (<p className="text-red-500"> {;
  error ";
}</p>) : webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {;
  webhooks.map (webhook => (<Card key= {;
  webhook.id ";
}> <CardHeader className="pb-2"> <div className="flex justify-between items-start"> <div> <CardTitle className="text-lg"> {;
  webhook.name ";
}</CardTitle> <CardDescription className="truncate max-w-md"> {;
  webhook.url ";
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <div className= {;
  `h-2 w-2 rounded-full mr-2 $ {;
  webhook.is active ? 'bg-green-500' : 'bg-gray-400' ;
}` ";
}></div> <span className="text-sm"> {';
  webhook.is active ? 'Active' : 'Inactive' ";
}</span> </div> <div className="flex-shrink-0"> <Button > {';
  webhook.is active ? 'Disable' : 'Enable' ";
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) ";
}</div> </div> <div className="text-xs text-muted-foreground"> {;
  webhook.last triggered at ? `Last triggered: $ {;
  new Date (webhook.last triggered at) .toLocaleString () ';
}` : 'Never triggered' ";
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <Select onValueChange= {;
  (value) => handleTestWebhook (webhook.id, value as WebhookEventType) ";
origin/cursor/automate-test-improve-and-merge-code-2533
}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) ) ;
}</SelectContent> </Select> </CardFooter> </Card>) ) ;
}</div>) ;
}{";
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <spanclassName= {'
=======
  eventOptions && eventOptions.map (option => (<SelectItemkey= {}
  option && option.value;
}value= {}
  option && option.value;
}> {;
  option && option.label ;"
}</SelectItem>) ) ";"
}</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> <Input /> <p className="text-xs text-muted-foreground"> If provided, this secret will be used to sign the webhook payload. </p> </div> </CardContent> <CardFooter> <ButtononClick={"
  handleCreateWebhook ""
}> <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> </Card> <div> <h3 className="text-lg font-medium mb-4">Your Webhooks</h3> {";"
  loading ? (<p>Loading webhooks...</p>) : error ? (<p className="text-red-500"> {;"
  error ";"
}</p>) : webhooks && webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {;
  webhooks && webhooks.map (webhook => (<Cardkey= {"
  webhook && webhook.id ""
}> <CardHeader className="pb-2"> <div className="flex justify-between items-start"> <div> <CardTitle className="text-lg"> {;"
  webhook && webhook.name ";"
}</CardTitle> <CardDescription className="truncate max-w-md"> {;"
  webhook && webhook.url ";"
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <divclassName= {}`
  `h-2 w-2 rounded-full mr-2 $ {'
  webhook && webhook.is active ? 'bg-green-500' : 'bg-gray-400' "`
}` "'"
}></div> <span className="text-sm"> {';'"
  webhook && webhook.is active ? 'Active' : 'Inactive' ";'"
}</span> </div> <div className="flex-shrink-0"> <Button > {';'"
  webhook && webhook.is active ? 'Disable' : 'Enable' ";"
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) ";"
}</div> </div> <div className="text-xs text-muted-foreground"> {;`
  webhook && webhook.last triggered at ? `Last triggered: $ {;'
  new Date (webhook && webhook.last triggered at) .toLocaleString () ';'"`
}` : 'Never triggered' ";"
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <SelectonValueChange= {"
  (value) => handleTestWebhook (webhook && webhook.id, value as WebhookEventType) ";"
}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) ) ;
}</SelectContent> </Select> </CardFooter> </Card>) ) ;
}</div>) ;"
}{";'"
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <spanclassName= {''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
  testResult && testResult.status>= 200 && testResult && testResult.status < 300 ? 'text-green-600' : 'text-red-600' ;
}> {;
  testResult && testResult.status ;
}{;"
  testResult && testResult.statusText ";'"
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {';'
  testResult && testResult.responseBody || '<empty>' ;
}</pre> </div> </div> </CardContent> </Card>) ;
}</div> </div>) ;'"
}'"}
=======
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <spanclassName= {'',
  testResult && testResult.status>= 200 && testResult && testResult.status < 300 ? 'text-green-600' : 'text-red-600' ;
}> {;
  testResult && testResult.status ;
}{;
  testResult && testResult.statusText ";
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {';',
  testResult && testResult.responseBody || '<empty>' ;
}</pre> </div> </div> </CardContent> </Card>) ;
}</div> </div>) ;
}'"}"
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx

}
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
}newWebhook.url
newWebhook.eventTypes
newWebhook.secret |undefined);""
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {",
  newWebhook.eventTypes.map (event => (<ClickableBadge key= {
  event
}onRemove= {
=======
}newWebhook.url;
newWebhook.eventTypes"
newWebhook.secret |undefined);""
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {}
  newWebhook.eventTypes.map (event => (<ClickableBadge key= {}
  event;
}onRemove= {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx
  () => handleRemoveEvent (event)
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
}> {}
  eventOptions.find (e => e.value === event) ?.label |event"
}</ClickableBadge>) ) ""
}</div> <div className="flex space-x-2"> <Select value= {}
  newWebhook.selectedEvent;
}onValueChange= {}
  (value) => setNewWebhook ({}
  ...newWebhook, selectedEvent: value as WebhookEventType"
}) ""
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {}
  eventOptions.map (option => (<SelectItem key= {}
  option.value;
}value= {}
  option.value;
}> {}
  option.label"
=======
}> {
  eventOptions.find (e => e.value ===,  event) ?.label |event
}</ClickableBadge>) ) ""
}</div> <div className="flex space-x-2"> <Select value= {"
  newWebhook.selectedEvent
}onValueChange= {
  (value) => setNewWebhook ({
  ...newWebhook, selectedEvent: value as WebhookEventType
}) ""
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {"
  eventOptions.map (option => (<SelectItem key= {
  option.value
}value= {
  option.value
}> {
  option.label
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
}</SelectItem>) ) ""
}</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> <Input /> <p className="text-xs text-muted-foreground"> If provided, this secret will be used to sign the webhook payload. </p> </div> </CardContent> <CardFooter> <Button onClick={"
  handleCreateWebhook ""
}> <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> </Card> <div> <h3 className="text-lg font-medium mb-4">Your Webhooks</h3> {""
  loading ? (<p>Loading webhooks...</p>) : error ? (<p className="text-red-500"> {"
  error ""
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
}</p>) : webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {}
  webhooks.map (webhook => (<Card key= {"
=======
}</p>) : webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {"
  webhooks.map (webhook => (<Card key= {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
  webhook.id ""
}> <CardHeader className="pb-2"> <div className="flex justify-between items-start"> <div> <CardTitle className="text-lg"> {"
  webhook.name ""
}</CardTitle> <CardDescription className="truncate max-w-md"> {"
  webhook.url ""
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <div className= {}`
  `h-2 w-2 rounded-full mr-2 $ {'
  webhook.is active ? 'bg-green-500' : 'bg-gray-400'"`
}` "'"
}></div> <span className="text-sm"> {''"
  webhook.is active ? 'Active' : 'Inactive' "'"
}</span> </div> <div className="flex-shrink-0"> <Button > {''"
  webhook.is active ? 'Disable' : 'Enable' ""
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) ""
}</div> </div> <div className="text-xs text-muted-foreground"> {}`
  webhook.last triggered at ? `Last triggered: $ {'
  new Date (webhook.last triggered at) .toLocaleString () ''"`
}` : 'Never triggered' ""
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <Select onValueChange= {"
  (value) => handleTestWebhook (webhook.id, value as WebhookEventType) ""
}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) )
}</SelectContent> </Select> </CardFooter> </Card>) )
}</div>)"
}{"'"
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <span className= {''
  testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600'
}> {}
  testResult.status;
}{"
  testResult.statusText "'"
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {''
  testResult.responseBody |'<empty>'
}</pre> </div> </div> </CardContent> </Card>)
}</div> </div>)'"
}'"}
=======
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <div className= {"
  `h-2 w-2 rounded-full mr-2 $ {`
  webhook.is active ? 'bg-green-500' : 'bg-gray-400''
}` ""
}></div> <span className="text-sm"> {''
  webhook.is active ? 'Active' : 'Inactive' ""
}</span> </div> <div className="flex-shrink-0"> <Button > {''
  webhook.is active ? 'Disable' : 'Enable' ""
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) ""
}</div> </div> <div className="text-xs text-muted-foreground"> {"
  webhook.last triggered at ? `Last triggered: $ {`,
  new Date (webhook.last triggered,  at) .toLocaleString () ''
}` : 'Never triggered' ""
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <Select onValueChange= {"
  (value) => handleTestWebhook (webhook.id, value as,  WebhookEventType) "",
}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) )"
}</SelectContent> </Select> </CardFooter> </Card>) )
}</div>)
}{""
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <span className= {'',
  testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600''
}> {
  testResult.status
}{
  testResult.statusText ""
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {'',
  testResult.responseBody |'<empty>''
}</pre> </div> </div> </CardContent> </Card>)
}</div> </div>)
}'"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
}
;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
"
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                      <SelectItem value="test_event">Test (generic)</SelectItem>;
                      {webhook.event_types.map (event => (
                        <SelectItem key={event} value={event}>;
                          Test {event_options.find (e => e.value ===,  event)?.label || event}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>))}
          </div>)}
        {test_result && ('
          <Card className='mt - 4 border - blue - 200'>;
            <CardHeader>;'
              <CardTitle className='text - lg'>Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;'
              <div className='space - y-2'>;'
                <div className='flex justify - between'>;'
                  <span className='font - medium'>Status:</span>;
                  <span;
                    className={}
                      test_result.status >= 200 && test_result.status < 300;'
                        ? 'text - green - 600';'
                        : 'text - red - 600';
                    }
                  >                    {test_result.status} {test_result.status_text}
                  </span>;
                </div>;
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
                <div>;'
                  <span className='font - medium'>Response:</span>;'
                  <pre className='mt - 1 p - 2 bg - gray - 100 rounded text - sm overflow - x-auto'>;'
                    {test_result.response_body || '<empty>'}
=======
                <div>;
                  <span className='font - medium'>Response:</span>;
                  <pre className='mt - 1 p - 2 bg - gray - 100 rounded text - sm overflow - x-auto'>;
                    {test_result.response_body || '<empty>'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
                  </pre>;
                </div>;
              </div>;
            </CardContent>;
          </Card>)}
      </div>;
    </div>);
}setNewWebhook ({}
  ...new_webhook;
event_types: [...new_webhook.event_types, new_webhook.selected_event];
}
<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;))))))))))
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
;
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
<<<<<<< HEAD
=======
                  >                    {testResult.status} {testResult.statusText}
                  </span>
                </div>
                <div>
                  <span className='font-medium'>Response:</span>
                  <pre className='mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

<<<<<<< HEAD:src_backup/components/integrations/WebhookManager.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/integrations/WebhookManager.tsx
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <span className= {';
  testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600' ;
}> {;
  testResult.status ;
}{;
  testResult.statusText ";
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {';
  testResult.responseBody || '<empty>' ;
}</pre> </div> </div> </CardContent> </Card>) ;
}</div> </div>) ;
}'"
<<<<<<< HEAD:src/components/integrations/WebhookManager.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/integrations/WebhookManager.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/integrations/WebhookManager.tsx

import React, { useEffect, useState } from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {PlusCircle, Save, Trash, Play} from "lucide-react";
import {useWebhooks, WebhookEventType} from "@/hooks/useWebhooks";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {toast} from "sonner";
export function WebhookManager() {;
  const { ;
    webhooks;
import React, { useEffect, useState } from "react",
    loading, ;import React, { useEffect, useState } from "react",
    loading, ;
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { PlusCircle, Save, Trash, Play } from "lucide-react",
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",

    loading,

import React, { useEffect, useState } from "react";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Label} from "@/components/ui/label";"
import {ClickableBadge} from "@/components/ui/clickable-badge";"
import {PlusCircle, Save, Trash, Play} from "lucide-react";"
import {useWebhooks, WebhookEventType} from "@/hooks/useWebhooks";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
import {toast} from "sonner";
"
import React, { useEffect, useState } from "react","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label","
import { ClickableBadge } from "@/components/ui/clickable-badge","
import { PlusCircle, Save, Trash, Play } from "lucide-react","
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";"
import { toast } from "sonner";
export function WebhookManager() {}
  const {};
    webhooks;

loading;

    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook
  } = useWebhooks(),
  const [newWebhook, setNewWebhook] = useState({
    loading  const [newWebhook, setNewWebhook] = useState({
    loading  const [newWebhook, setNewWebhook] = useState({
    testWebhook;
  } = useWebhooks();

const [newWebhook, setNewWebhook] = useState({

    name: ""
    url: ""
    selectedEvent: "" as WebhookEventType
    eventTypes: [] as WebhookEventType[]

    secret: ""
    secret: ""

  }),

  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" }
    { value: "quote_received", label: "Quote Request Received" }
    { value: "milestone_approved", label: "Milestone Approved" }

    { value: "talent_hired", label: "Talent Hired" }

  useEffect(() => {}
    fetchWebhooks()
  }, []);

  ],
    secret: ""  ],
    secret: ""  ],
    { value: "talent_hired", label: "Talent Hired" }

  useEffect(() => {
    fetchWebhooks()
  }, []);

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return;
  ],

  useEffect(() => {
    fetchWebhooks()
  }, []),

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return,


    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error("This event is already added");
      return
    }
    setNewWebhook({
      ...newWebhook;
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent];
      selectedEvent: "" as WebhookEventType
    })


  },

    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {

    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {"
      toast.error("This event is already added"),
      return;
    }
    setNewWebhook({}
      ...newWebhook,
eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
      selectedEvent: "" as WebhookEventType
    })
  }
  },

  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })

      return
    }
    await createWebhook(

  },

  const handleCreateWebhook = async () => {}
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {"
      toast.error("Please fill in all required fields"),

      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined;
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined
    ),

    // Reset form
    })    // Reset form
    })    // Reset form
    // Reset form
    setNewWebhook({
      name: ""
      url: ""
      selectedEvent: "" as WebhookEventType
      eventTypes: []
      secret: ""
    })
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }

    // Reset form;
    setNewWebhook({"
      name: """
      url: """
      selectedEvent: "" as WebhookEventType;
      eventTypes: []"
      secret: ""
    })

  },

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {}
    await testWebhook(webhookId, eventType)
  },


  },

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }

const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {}
    await testWebhook(webhookId, eventType)
  }

  return (

  return ("
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
        </CardHeader>"
        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
            <div className="space-y-2">"
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input"
                id="webhook-name""
                placeholder="e.g., Job Postings Webhook"
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
</div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
import React, { useEffect, useState } from "react",;
              <Label htmlFor="webhook-url">URL</Label>import React, { useEffect, useState } from "react",;
              <Label htmlFor="webhook-url">URL</Label>

<Input
                id="webhook-url"
                placeholder="https://example.com/webhook"
              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { PlusCircle, Save, Trash, Play } from "lucide-react",;
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
            </div>"
            <div className="space-y-2">"
              <Label htmlFor="webhook-url">URL</Label>
"
import React, { useEffect, useState } from "react",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { ClickableBadge } from "@/components/ui/clickable-badge",;"
import { PlusCircle, Save, Trash, Play } from "lucide-react",;"
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { toast } from "sonner",;
export function WebhookManager() { return null; }
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
      ...newWebhook,;
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],;"
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
    setNewWebhook({;"
      name: "",;"
      url: "",;"
      selectedEvent: "" as WebhookEventType,;
      eventTypes: [],;"
      secret: "";
    })
};
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
    await testWebhook(webhookId, eventType)
};
  return (;
    await testWebhook(webhookId, eventType);
  };
  return (;"
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

              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"

                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />
            </div>
</div>"
          <div className="space-y-2">
            <Label>Events</Label>"
            <div className="flex flex-wrap gap-2 mb-2">
              {newWebhook.eventTypes.map(event => (
                <ClickableBadge;
                  key={event}
                  onRemove={() => handleRemoveEvent(event)}
                >
                  {eventOptions.find(e => e.value === event)?.label |event}
                </ClickableBadge>
            </div>
            <div className="flex space-x-2">
              <Select
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
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
              <Button type="button" onClick={handleAddEvent} variant="outline">
                <PlusCircle className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret (optional)</Label>

  const [newWebhook, setNewWebhook] = useState({;"
    name: "",;"
    url: "",;"
    selectedEvent: "" as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;"
    secret: "";
  });

  const eventOptions: { value: WebhookEventType, label: string }[] = [;"
    { value: "new_application", label: "New Application Received" },;"
    { value: "quote_received", label: "Quote Request Received" },;"
    { value: "milestone_approved", label: "Milestone Approved" },;"

  const [newWebhook, setNewWebhook] = useState({;
    name: "",;
    url: "",;
    selectedEvent: "" as WebhookEventType,;
    eventTypes: [] as WebhookEventType[],;
    secret: "";
  });

  const eventOptions: { value: WebhookEventType, label: string }[] = [;
    { value: "new_application", label: "New Application Received" },;
    { value: "quote_received", label: "Quote Request Received" },;
    { value: "milestone_approved", label: "Milestone Approved" },;
    { value: "talent_hired", label: "Talent Hired" }
  ];

  useEffect(() => {;
    fetchWebhooks();
  }, []);

  const handleAddEvent = () => {;
    if (!newWebhook && newWebhook.selectedEvent) return;

if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;"
      toast && toast.error("This event is already added");
      return;
    }

    setNewWebhook({;
      ...newWebhook;
eventTypes: [...newWebhook && newWebhook.eventTypes, newWebhook && newWebhook.selectedEvent];"
      selectedEvent: "" as WebhookEventType;
    });
  };

  const handleRemoveEvent = (event: WebhookEventType) => {;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes: newWebhook && newWebhook.eventTypes.filter(e => e !== event);
    });
  };

  const handleCreateWebhook = async () => {;
if (!newWebhook && newWebhook.name || !newWebhook && newWebhook.url || newWebhook && newWebhook.eventTypes.length === 0) {;"
      toast && toast.error("Please fill in all required fields");
      return;
    }

    await createWebhook(;
      newWebhook && newWebhook.name, ;
      newWebhook && newWebhook.url, ;
      newWebhook && newWebhook.eventTypes, ;
      newWebhook && newWebhook.secret || undefined;
    );

    // Reset form;
setNewWebhook({;"
      name: "",;"
      url: "",;"
      selectedEvent: "" as WebhookEventType,;
      eventTypes: [],;"
      secret: "";
    });
  };

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
    await testWebhook(webhookId, eventType);
  };
"
return (

import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { PlusCircle, Save, Trash, Play } from "lucide-react",;
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { toast } from "sonner",;
;
export function WebhookManager() {;
  const { ;
    webhooks,;
    loading, ;
    error,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook;
  } = useWebhooks(),;
  ;
  const [newWebhook, setNewWebhook] = useState({;
    name:"",;
    url:"",;
    selectedEvent:"" as WebhookEventType,;
    eventTypes:[] as WebhookEventType[],;
    secret:"";
  }),;
  ;
  const eventOptions:{ value:WebhookEventType, label:string }[] = [;
    { value:"new_application", label:"New Application Received" },;
    { value:"quote_received", label:"Quote Request Received" },;
    { value:"milestone_approved", label:"Milestone Approved" },;
    { value:"talent_hired", label:"Talent Hired" }
  ],;
  ;
  useEffect(() => {;
    fetchWebhooks(),;
  }, []),;
  ;
  const handleAddEvent = () => {;
    if (!newWebhook.selectedEvent) return,;
    ;
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {;
      toast.error("This event is already added"),;
      return,;
    }
    ;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes:[...newWebhook.eventTypes, newWebhook.selectedEvent],;
      selectedEvent:"" as WebhookEventType;
    }),;
  },;
  ;
  const handleRemoveEvent = (event:WebhookEventType) => {;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes:newWebhook.eventTypes.filter(e => e !== event);
    }),;
  },;
  ;
  const handleCreateWebhook = async () => {;
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {;
      toast.error("Please fill in all required fields"),;
      return,;
    }
    ;
    await createWebhook(;
      newWebhook.name, ;
      newWebhook.url, ;
      newWebhook.eventTypes, ;
      newWebhook.secret || undefined;
    ),;
    ;
    // Reset form;
    setNewWebhook({;
      name:"",;
      url:"",;
      selectedEvent:"" as WebhookEventType,;
      eventTypes:[],;
      secret:"";
    }),;
  },;
  ;
  const handleTestWebhook = async (webhookId:string, eventType:WebhookEventType) => {;
    await testWebhook(webhookId, eventType),;
  },;
  ;
  return (;
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
import React, { useEffect, useState } from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { PlusCircle, Save, Trash, Play } from './lucide-react';
import { use_webhooks, WebhookEventType } from '@/hooks / use_webhooks';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { toast } from './sonner';
export /**
 * WebhookManager - Function description
 */
function WebhookManager() {
  const {
    webhooks;
    loading,
    error;
    test_result;
    fetch_webhooks;
    create_webhook;
    toggle_webhook;
    delete_webhook;
    test_webhook;
  } = use_webhooks ();
;
  const [new_webhook, setNewWebhook] = useState ({
    name: "",
    url: "",
    selected_event: "" as WebhookEventType,
    event_types: [] as WebhookEventType[],
    secret: "";
  });
;
  const event_options: { value: WebhookEventType, label: string }[] = [;
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ];
;
  useEffect (() => {
    fetch_webhooks ();
  }, []);
;
  const handleAddEvent = () =>: any {
    // Check condition
if (return) {
  $2
}
    if () {) {
  $2
}
      toast.error ("This event is already added");
      return;
    }
    setNewWebhook ({
      ...new_webhook;
      event_types: [...new_webhook.event_types, new_webhook.selected_event];
      selected_event: "" as WebhookEventType;
    });
  }
;
  const handleRemoveEvent = (event: WebhookEventType) =>: any {
    setNewWebhook ({
      ...new_webhook,
      event_types: new_webhook.event_types.filter (e => e !== event);
    });
  }
;
  const handleCreateWebhook = async () => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please fill in all required fields");
      return;
    }
    await create_webhook (
      new_webhook.name,
      new_webhook.url,
      new_webhook.event_types,
      new_webhook.secret || undefined);
;
    // Reset form;
    setNewWebhook ({
      name: "",
      url: "",
      selected_event: "" as WebhookEventType,
      event_types: [],
      secret: "";
    });
  }
;
  const handleTestWebhook = async (webhook_id: string, event_type: WebhookEventType) => {
    await test_webhook (webhook_id, event_type);
  }
;
  return (
    <div className="space - y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle > Create Webhook</CardTitle>;
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;

            <Input 
              id="webhook-secret" 

            <Input 
              id="webhook-secret"
"
              placeholder="A secret key to verify the webhook source"
        </CardHeader>;              placeholder="A secret key to verify the webhook source"
        </CardHeader>;              placeholder="A secret key to verify the webhook source"
              placeholder="A secret key to verify the webhook source"
            <Input 
              id="webhook-secret" 

<Input
              id="webhook-secret"
            <Input 
              id="webhook-secret"
              placeholder="A secret key to verify the webhook source"
        </CardHeader>;              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />"
            <p className="text-xs text-muted-foreground">
              If provided, this secret will be used to sign the webhook payload.

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }

  return ("
    <div className="space-y-8">"
</div>
      <Card>
</Card>
        <CardHeader>
</CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
</CardDescription>
          </CardDescription>
        </CardHeader>"
        <CardContent className="space-y-4">"
</CardContent>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>"
            <div className="space-y-2">"
</div>"
              <Label htmlFor="webhook-name">Webhook Name</Label>"
              <Input;"
                id="webhook-name"""
                placeholder="e.g., Job Postings Webhook""
                value={newWebhook.name})
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
</Input>
            </div>"
            <div className="space-y-2">"
</div>"
              <Label htmlFor="webhook-url">URL</Label>""
    <div className="space-y-8">;"
</div>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;"
        <CardContent className="space-y-4">;"
</CardContent>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>"
            <div className="space-y-2">;"
</div>"
              <Label htmlFor="webhook-name">Webhook Name</Label>;"
              <Input;"
                id="webhook-name";""
                placeholder="e.g., Job Postings Webhook";"
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
</Input>
            </div>;"
            <div className="space-y-2">;"
</div>"
              <Label htmlFor="webhook-url">URL</Label>;"
              <Input;"
                id="webhook-url";""
                placeholder="https://example.com/webhook";"
              <Input;"
                id="webhook-url"""
                placeholder="https://example.com/webhook""
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
</Input>
            </div>
          </div>"
          <div className="space-y-2">"
</div>
            <Label>Events</Label>"
            <div className="flex flex-wrap gap-2 mb-2">"
</div>
                <ClickableBadge;
                  key={event}
                  onRemove={() => handleRemoveEvent(event)}
</ClickableBadge>
                </ClickableBadge>"
    <div className="space-y-8">;"
</div>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;
            <Input;"
              id="webhook-secret"""
              placeholder="A secret key to verify the webhook source""
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
</Input>"
            <p className="text-xs text-muted-foreground">"
</p>
            </p>
          </div>
        </CardContent>
        <CardFooter>
<Button onClick={handleCreateWebhook}>"
            <Save className="h-4 w-4 mr-2" /> Create Webhook;
          </Button>
        </CardFooter>
      </Card>
      <div>"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <div className="space - y-2">;
              <Label html_for="webhook - name">Webhook Name</Label>;
              <Input;
                id="webhook - name";
                placeholder="e.g., Job Postings Webhook";
                value={new_webhook.name}
                on_change={(e) => setNewWebhook ({...new_webhook, name: e.target.value})}
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="webhook - url">URL</Label>;
              <Input;
                id="webhook - url";
                placeholder="https://example.com / webhook";
                value={new_webhook.url}
                on_change={(e) => setNewWebhook ({...new_webhook, url: e.target.value})}
              />;
            </div>;
          </div>;
          <div className="space - y-2">;
            <Label > Events</Label>;
            <div className="flex flex - wrap gap - 2 mb - 2">;
              {new_webhook.event_types.map (event => (
                <ClickableBadge;
                  key={event}
                  on_remove={() => handleRemoveEvent (event)}
                >;
                  {event_options.find (e => e.value === event)?.label || event}
                </ClickableBadge>))}
            </div>;
            <div className="flex space - x-2">;
              <Select;
                value={new_webhook.selected_event}
                onValueChange={(value) => setNewWebhook ({...new_webhook, selected_event: value as WebhookEventType})}
              >;
                <SelectTrigger className="w - full">;
                  <SelectValue placeholder="Select event" />;
                </SelectTrigger>;
                <SelectContent>;
                  {event_options.map (option => (
                    <SelectItem key={option.value} value={option.value}>;
                      {option.label}
                    </SelectItem>))}
                </SelectContent>;
              </Select>;
              <Button type="button" on_click={handleAddEvent} variant="outline">;
                <PlusCircle className="h - 4 w - 4 mr - 2" /> Add;
              </Button>;
            </div>;
          </div>;
          <div className="space - y-2">;
            <Label html_for="webhook - secret">Secret (optional)</Label>;
            <Input;
              id="webhook - secret";
              placeholder="A secret key to verify the webhook source";
              value={new_webhook.secret}
              on_change={(e) => setNewWebhook ({...new_webhook, secret: e.target.value})}
            />;
            <p className="text - xs text - muted - foreground">;

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
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>
                      </div>
                      <div className="flex-shrink-0">
        <CardContent className="space-y-4">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div className="space-y-2">;
              <Label htmlFor="webhook-name">Webhook Name</Label>;
              <Input ;
                id="webhook-name" ;
                placeholder="e.g., Job Postings Webhook";
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name:e.target.value})}
              />;
            </div>;
            ;
            <div className="space-y-2">;
              <Label htmlFor="webhook-url">URL</Label>;
              <Input ;
                id="webhook-url" ;
                placeholder="https://example.com/webhook";
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url:e.target.value})}
              />;
            </div>;
          </div>;
          ;
          <div className="space-y-2">;
            <Label>Events</Label>;
            <div className="flex flex-wrap gap-2 mb-2">;
              {newWebhook.eventTypes.map(event => (;
                <ClickableBadge ;
                  key={event} ;
                  onRemove={() => handleRemoveEvent(event)}
                >;                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
            </div>;
            <div className="flex space-x-2">;
              <Select;
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent:value as WebhookEventType})}
              >;
                <SelectTrigger className="w-full">;
                  <SelectValue placeholder="Select event" />;
                </SelectTrigger>;
                <SelectContent>;
                  {eventOptions.map(option => (;
                    <SelectItem key={option.value} value={option.value}>;                      {option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;
              <Button type="button" onClick={handleAddEvent} variant="outline">;
                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;
          ;
          <div className="space-y-2">;
            <Label htmlFor="webhook-secret">Secret (optional)</Label>;
            <Input ;
              id="webhook-secret" ;
              placeholder="A secret key to verify the webhook source";
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret:e.target.value})}
            />;
            <p className="text-xs text-muted-foreground">;
              If provided, this secret will be used to sign the webhook payload.;
              If provided, this secret will be used to sign the webhook payload.;
              If provided, this secret will be used to sign the webhook payload.;
</div>"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>"
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
<Button on_click={handleCreateWebhook}>;
            <Save className="h - 4 w - 4 mr-2" /> Create Webhook;
</CardFooter>
          <Button on_click={handleCreateWebhook}>;
</Button>"
            <Save className="h - 4 w - 4 mr - 2" /> Create Webhook;"
</Save>
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;
        <h3 className="text - lg font - medium mb - 4">Your Webhooks</h3>;
        {loading ? (
        <h3 className="text - lg font - medium mb-4">Your Webhooks</h3>;
          <p > Loading webhooks...</p>) : error ? (
          <p className="text - red-500">{error}</p>) : webhooks.length === 0 ? (
          <p > No webhooks configured yet. Create your first webhook above.</p>) : (
          <div className="space-y-4">;
            {webhooks.map (webhook => (
              <Card key={webhook.id}>;
                <CardHeader className="pb-2">;
                  <div className="flex justify - between items-start">;
                    <div>;
                      <CardTitle className="text - lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max - w-md">;
                        {webhook.url}

                        <Button 
                          variant="outline"
"
                          size="sm"
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
                        {webhook.url}                          size="sm"
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
                        {webhook.url}                          size="sm"
                          size="sm"
                        <Button 
                          variant="outline" 

<Button
                          variant="outline"
                        <Button 
                          variant="outline"
                          size="sm"
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
                        {webhook.url}                          size="sm"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >
                          {webhook.is_active ? 'Disable' : 'Enable'}
</div>"
        <h3 className="text - lg font - medium mb - 4">Your Webhooks</h3>;"
          <p > Loading webhooks...</p>) : error ? ()"
          <p className="text - red - 500">{error}</p>) : webhooks.length === 0 ? (")
          <p > No webhooks configured yet. Create your first webhook above.</p>) : ("
          <div className="space - y-4">;"
</div>
              <Card key={webhook.id}>;
</Card>"
                <CardHeader className="pb - 2">;"
</CardHeader>"
                  <div className="flex justify - between items - start">;"
</div>
                    <div>;
</div>"
                      <CardTitle className="text - lg">{webhook.name}</CardTitle>;""
                      <CardDescription className="truncate max - w-md">;"
</CardDescription>
                        <Button;"
                          variant="outline"""
                          size="sm"")

                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
</Button>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>"
                <CardContent className="py-2">"
                  <div className="flex flex-col space-y-2">
                    <div>"
                      <Label className="text-sm">Events</Label>"
                      <div className="flex flex-wrap gap-2 mt-1">
                        {webhook.event_types.map(event => ("
                          <ClickableBadge key={event} variant="secondary">

{eventOptions.find(e => e.value === event)?.label |event}
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </ClickableBadge>
                        ))}
                      </div>
                    </div>"
                    <div className="text-xs text-muted-foreground">
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
                </SelectContent>;
              </Select>;"
              <Button type="button" onClick={handleAddEvent} variant="outline">;"

{eventOptions.find(e => e.value === event)?.label || event}

                            {eventOptions.find(e => e.value === event)?.label |event}
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </ClickableBadge>
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
                    variant="outline"
                    size="sm"
                    onClick={() => deleteWebhook(webhook.id)}
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
                      <SelectItem value="test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map(event => (
                        <SelectItem key={event} value={event}>
                </SelectContent>;
              </Select>;
              <Button type="button" onClick={handleAddEvent} variant="outline">;
                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;
"
          <div className="space-y-2">;"
            <Label htmlFor="webhook-secret">Secret (optional)</Label>;
            <Input"
              id="webhook-secret" "
              placeholder="A secret key to verify the webhook source"
              value={newWebhook && newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e && e.target.value})}
            />;"
            <p className="text-xs text-muted-foreground">;
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
        ) : webhooks && webhooks.length === 0 ? (;
          <p>No webhooks configured yet. Create your first webhook above.</p>;
        ) : (;"
          <div className="space-y-4">;
            {webhooks && webhooks.map(webhook => (;
              <Card key={webhook && webhook.id}>;"
                <CardHeader className="pb-2">;"
                  <div className="flex justify-between items-start">;
                    <div>;"
                      <CardTitle className="text-lg">{webhook && webhook.name}</CardTitle>;"
                      <CardDescription className="truncate max-w-md">;
                        {webhook && webhook.url}
          <Button onClick={handleCreateWebhook}>;
            <Save className="h-4 w-4 mr-2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
;
      <div>;
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;
        ;
        {loading ? (;
          <p>Loading webhooks...</p>;
        ) :error ? (;
          <p className="text-red-500">{error}</p>;
        ) :webhooks.length === 0 ? (;
          <p>No webhooks configured yet. Create your first webhook above.</p>;
        ) :(;
          <div className="space-y-4">;
            {webhooks.map(webhook => (;
              <Card key={webhook.id}>;
                <CardHeader className="pb-2">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <CardTitle className="text-lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
                        {webhook.url}


      <div>;
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;

        {loading ? (;
          <p>Loading webhooks...</p>;
        ) : error ? (;
          <p className="text-red-500">{error}</p>;
        ) : webhooks && webhooks.length === 0 ? (;
          <p>No webhooks configured yet. Create your first webhook above.</p>;
        ) : (;
          <div className="space-y-4">;
            {webhooks && webhooks.map(webhook => (;
              <Card key={webhook && webhook.id}>;
                <CardHeader className="pb-2">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <CardTitle className="text-lg">{webhook && webhook.name}</CardTitle>;
                      <CardDescription className="truncate max-w-md">;
                        {webhook && webhook.url}
                      </CardDescription>;
                    </div>;"
                    <div className="flex items-center">;"
                      <div className="mr-2 flex items-center">;
<div className={`h-2 w-2 rounded-full mr-2 ${webhook && webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook && webhook.is_active ? 'Active' : 'Inactive'}</span>;
                      </div>;
                      <div className="flex-shrink-0">;
                        <Button
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleWebhook(webhook && webhook.id, !webhook && webhook.is_active)}
                        >;
{webhook && webhook.is_active ? 'Disable' : 'Enable'}                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' :'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook.is_active ? 'Active' :'Inactive'}</span>;
                      </div>;"
                      <div className="flex-shrink-0">;
                        <Button ;"
                          variant="outline" ;"
                          size="sm";
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >;'
                          {webhook.is_active ? 'Disable' :'Enable'}


                </CardHeader>"
                <CardContent className="py-2">"
</CardContent>"
                  <div className="flex flex-col space-y-2">"
</div>
                    <div>
</div>"
                      <Label className="text-sm">Events</Label>""
                      <div className="flex flex-wrap gap-2 mt-1">"
</div>"
                          <ClickableBadge key={event} variant="secondary">"
</ClickableBadge>
                          </ClickableBadge>
                      </div>
                    </div>"
                    <div className="text-xs text-muted-foreground">"
</div>
                </SelectContent>;
              </Select>;"
              <Button type="button" onClick={handleAddEvent} variant="outline">;"
</Button>"
                <PlusCircle className="h-4 w-4 mr-2" /> Add;"
</PlusCircle>
              </Button>;
            </div>;
          </div>;"
          <div className="space-y-2">;"
</div>"
            <Label htmlFor="webhook-secret">Secret (optional)</Label>;"
            <Input;"
              id="webhook-secret"""
              placeholder="A secret key to verify the webhook source""
              value={newWebhook && newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e && e.target.value})}
</Input>"
            <p className="text-xs text-muted-foreground">;"
</p>
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
</CardFooter>
          <Button onClick={handleCreateWebhook}>;
</Button>"
            <Save className="h-4 w-4 mr-2" /> Create Webhook;"
</Save>
          </Button>;
        </CardFooter>;
      </Card>;
      <div>;
</div>"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;"
          <p>Loading webhooks...</p>;"
          <p className="text-red-500">{error}</p>;"
          <p>No webhooks configured yet. Create your first webhook above.</p>;"
          <div className="space-y-4">;"
</div>
              <Card key={webhook && webhook.id}>;
</Card>"
                <CardHeader className="pb-2">;"
</CardHeader>"
                  <div className="flex justify-between items-start">;"
</div>
                    <div>;
</div>"
                      <CardTitle className="text-lg">{webhook && webhook.name}</CardTitle>;""
                      <CardDescription className="truncate max-w-md">;"
</CardDescription>
                      </CardDescription>;
                    </div>;"
                    <div className="flex items-center">;"
</div>"
                      <div className="mr-2 flex items-center">;"
</div>"
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook && webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;''
                        <span className="text-sm">{webhook && webhook.is_active ? 'Active' : 'Inactive'}</span>;'
                      </div>;'
                      <div className="flex-shrink-0">;"
</div>
                        <Button;"
                          variant="outline"""
                          size="sm""
                          onClick={() => toggleWebhook(webhook && webhook.id, !webhook && webhook.is_active)}
</Button>"
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' :'bg-gray-400'}`}></div>;''
                        <span className="text-sm">{webhook.is_active ? 'Active' :'Inactive'}</span>;'
                      </div>;'
                      <div className="flex-shrink-0">;"
</div>
                        <Button ;"
                          variant="outline" ;""
                          size="sm";"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
</Button>

                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;

                <CardContent className="py-2">;
                  <div className="flex flex - col space-y-2">;
                    <div>;
                      <Label className="text-sm">Events</Label>;
                      <div className="flex flex - wrap gap - 2 mt-1">;
                        {webhook.event_types.map (event => (
                          <ClickableBadge key={event} variant="secondary">;
                            {event_options.find (e => e.value === event)?.label || event}
                          </ClickableBadge>))}
                      </div>;
                    </div>;
                    <div className="text - xs text - muted-foreground">;
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date (webhook.last_triggered_at).toLocaleString ()}`;


'

                        : 'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;

                    onClick={() => deleteWebhook(webhook && webhook.id)}
                  >;"
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;

                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
"
                <CardFooter className="flex justify - between pt - 2">;
                  <Button;"
                    variant="outline";"
                    size="sm";
                    on_click={() => delete_webhook (webhook.id)}
                  >;"
                    <Trash className="h - 4 w - 4 mr - 2" /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={(value) => handleTestWebhook (webhook.id, value as WebhookEventType)}

>;"
                    <SelectTrigger className="w-[180px]">;"
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;"
                      <SelectItem value="test_event">Test (generic)</SelectItem>;

<CardContent className="py-2">;
                  <div className="flex flex-col space-y-2">;
                    <div>;
                      <Label className="text-sm">Events</Label>;
                      <div className="flex flex-wrap gap-2 mt-1">;
                        {webhook.event_types.map(event => (;
                          <ClickableBadge key={event} variant="secondary">;
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </ClickableBadge>;
                        ))}
                      </div>;
                    </div>;
                    <div className="text-xs text-muted-foreground">;
                      {webhook.last_triggered_at ;
                        ? `Last triggered:${new Date(webhook.last_triggered_at).toLocaleString()}`;
                        :'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;
                <CardFooter className="flex justify-between pt-2">;
                  <Button;
                    variant="outline";
                    size="sm";
                    onClick={() => deleteWebhook(webhook.id)}
                  >;
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
                  ;
                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as WebhookEventType)}
                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic)</SelectItem>;

                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;

                      ))}
{webhook.event_types.map(event => (;
                        <SelectItem key={event} value={event}>;
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;                      ))}
                      ))}
</Select>"
                    <SelectTrigger className="w-[180px]">;"
</SelectTrigger>"
                      <SelectValue placeholder="Test webhook" />;"
</SelectValue>
                    </SelectTrigger>;
                    <SelectContent>;
</SelectContent>"
                      <SelectItem value="test_event">Test (generic)</SelectItem>;"
                        </SelectItem>;

))}
                      ))}
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
        )}

'
                    {testResult.responseBody || '<empty>'}


        )}
Test {eventOptions.find(e => e.value === event)?.label |event}
                        </SelectItem>
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
          <Card className="mt-4 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className={testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600'}>
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
  )
{testResult && (;"
          <Card className="mt-4 border-blue-200">;
            <CardHeader>;"
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;"
              <div className="space-y-2">;"
                <div className="flex justify-between">;"
                  <span className="font-medium">Status:</span>;

                  </span>;
                </div>;
                <div>;"
                  <span className="font-medium">Response:</span>;"
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">;

'
                    {testResult.responseBody || '<empty>'}

                  </pre>;
        )}                  </pre>;
}
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
                  <span className={testResult && testResult.status >= 200 && testResult && testResult.status < 300 ? 'text-green-600' : 'text-red-600'}>;
                    {testResult && testResult.status} {testResult && testResult.statusText}
<span className={testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' :'text-red-600'}>;
                    {testResult.status} {testResult.statusText}
                  </span>;
                </div>;
                <div>;
                  <span className="font-medium">Response:</span>;
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">;
                    {testResult && testResult.responseBody || '<empty>'}
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
          <Card className="mt - 4 border - blue - 200">;
            <CardHeader>;
              <CardTitle className="text - lg">Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;
              <div className="space - y-2">;
                <div className="flex justify - between">;
                  <span className="font - medium">Status:</span>;
                  <span className={test_result.status >= 200 && test_result.status < 300 ? 'text - green - 600' : 'text - red - 600'}>;
                    {test_result.status} {test_result.status_text}
                  </span>;
                </div>;
                <div>;
                  <span className="font - medium">Response:</span>;
                  <pre className="mt - 1 p - 2 bg - gray - 100 rounded text - sm overflow - x-auto">;
                    {test_result.response_body || '<empty>'}
                    {testResult.responseBody || '<empty>'}
                  </pre>;
                </div>;
              </div>;
            </CardContent>;

</Card>)}
      </div>;
    </div>);
}

          </Card>;
        )}
      </div>;
    </div>;
  ),;}
 export function WebhookManager () {
import React, { useEffect, useState } from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Label} from "@/components/ui/label";""
import {ClickableBadge} from "@/components/ui/clickable-badge";""
import {PlusCircle, Save, Trash, Play} from "lucide-react";""
import {useWebhooks, WebhookEventType} from "@/hooks/useWebhooks";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {toast} from "sonner";"
export function WebhookManager() {;
  const { ;
    webhooks;
    loading, ;"
import React, { useEffect, useState } from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Label } from "@/components/ui/label",""
import { ClickableBadge } from "@/components/ui/clickable-badge",""
import { PlusCircle, Save, Trash, Play } from "lucide-react",""
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";""
import { toast } from "sonner";"
export function WebhookManager() {
  const {
  // TODO: Implement
}
}

    loading;
    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
  } = useWebhooks();

  const [newWebhook, setNewWebhook] = useState({
"
    name: ""","
  url: """"
    selectedEvent: "" as WebhookEventType;",
  eventTypes: [] as WebhookEventType[]
    secret: """)
  }),

  const eventOptions: { value: WebhookEventType, label: string }[] = ["
    { value: "new_application", label: "New Application Received" }""
    { value: "quote_received", label: "Quote Request Received" }""
    { value: "milestone_approved", label: "Milestone Approved" }""
    { value: "talent_hired", label: "Talent Hired" }"
  useEffect(() => {
    fetchWebhooks()]
  }, []);

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return;
  ],
    fetchWebhooks()
  }, []),
    if (!newWebhook.selectedEvent) return,

    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {"
      toast.error("This event is already added");"
      return;
    setNewWebhook({
      ...newWebhook;
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent];"
      selectedEvent: "" as WebhookEventType;")
    })

  },

      toast.error("This event is already added"),"
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],"
  const handleRemoveEvent = (event: WebhookEventType) => {
      ...newWebhook;)
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)

  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {"
      toast.error("Please fill in all required fields"),"
    await createWebhook(

      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined;)
    ),

    // Reset form;
    setNewWebhook({"
  eventTypes: []"

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)

  return ("
    <div className="space-y-8">"
</div>
      <Card>

        <CardHeader>

          <CardTitle>Create Webhook
          <CardDescription>

        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>"
            <div className="space-y-2">"
              <Label htmlFor="webhook-name">Webhook Name"
              <Input;"
                id="webhook-name"""
                placeholder="e.g., Job Postings Webhook""
                value={newWebhook.name})
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}

              <Label htmlFor="webhook-url">URL""
    <div className="space-y-8">;"
      <Card>;

        <CardHeader>;

          <CardTitle>Create Webhook;
          <CardDescription>;

          ;
        ;"
        <CardContent className="space-y-4">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
            <div className="space-y-2">;"
              <Label htmlFor="webhook-name">Webhook Name;"
                id="webhook-name";""
                placeholder="e.g., Job Postings Webhook";"
                value={newWebhook.name}

            </div>;"
              <Label htmlFor="webhook-url">URL;"
                id="webhook-url";""
                placeholder="https://example.com/webhook";"
                id="webhook-url"""
                placeholder="https://example.com/webhook""
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}

            <Label>Events"
            <div className="flex flex-wrap gap-2 mb-2">"
                <ClickableBadge;
                  key={event}
                  onRemove={() => handleRemoveEvent(event)}

              id="webhook-secret"""
              placeholder="A secret key to verify the webhook source""
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            <p className="text-xs text-muted-foreground">"
</p>
        <CardFooter>

          <Button onClick={handleCreateWebhook}>
            <Save className="h-4 w-4 mr-2" /> Create Webhook;"

      <div>
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>"
            </p>;
          </div>;
        <CardFooter>;

          <Button on_click={handleCreateWebhook}>;
            <Save className="h - 4 w - 4 mr - 2" /> Create Webhook;"

      <div>;
        <h3 className="text - lg font - medium mb - 4">Your Webhooks</h3>;"
          <p > Loading webhooks...</p>) : error ? ()"
          <p className="text - red - 500">{error}</p>) : webhooks.length === 0 ? (")
          <p > No webhooks configured yet. Create your first webhook above.</p>) : ("
          <div className="space - y-4">;"
              <Card key={webhook.id}>;
                <CardHeader className="pb - 2">;"
                  <div className="flex justify - between items - start">;"
                      <CardTitle className="text - lg">{webhook.name};""
                      <CardDescription className="truncate max - w-md">;"

                        <Button;"
                          variant="outline"""
                          size="sm"")
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}

                <CardContent className="py-2">"
                  <div className="flex flex-col space-y-2">"
                      <Label className="text-sm">Events""
                      <div className="flex flex-wrap gap-2 mt-1">"
                          <ClickableBadge key={event} variant="secondary">"

                    <div className="text-xs text-muted-foreground">"
              <Button type="button" onClick={handleAddEvent} variant="outline">;"
                <PlusCircle className="h-4 w-4 mr-2" /> Add;"

            <Label htmlFor="webhook-secret">Secret (optional);"
              value={newWebhook && newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e && e.target.value})}
            <p className="text-xs text-muted-foreground">;"

          <Button onClick={handleCreateWebhook}>;

        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;"
          <p>Loading webhooks...</p>;"
          <p className="text-red-500">{error}</p>;"
          <p>No webhooks configured yet. Create your first webhook above.</p>;"
          <div className="space-y-4">;"
              <Card key={webhook && webhook.id}>;
                <CardHeader className="pb-2">;"
                  <div className="flex justify-between items-start">;"
                      <CardTitle className="text-lg">{webhook && webhook.name};""
                      <CardDescription className="truncate max-w-md">;"

                    <div className="flex items-center">;"
                      <div className="mr-2 flex items-center">;"
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook && webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook && webhook.is_active ? 'Active' : 'Inactive'}</span>;
                      <div className="flex-shrink-0">;"
                          size="sm""
                          onClick={() => toggleWebhook(webhook && webhook.id, !webhook && webhook.is_active)}
"`;
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' :'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook.is_active ? 'Active' :'Inactive'}</span>;
                        <Button ;"
                          variant="outline" ;""
                          size="sm";"

                <CardContent className="py - 2">;"
                  <div className="flex flex - col space - y-2">;"
                      <Label className="text - sm">Events;""
                      <div className="flex flex - wrap gap - 2 mt - 1">;"
                          <ClickableBadge key={event} variant="secondary">;"

                          ))}
                    <div className="text - xs text - muted - foreground">;"
                    <Trash className="h-4 w-4 mr-2" /> Delete;"

                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
                <CardFooter className="flex justify - between pt - 2">;"

                    variant="outline";""
                    on_click={() => delete_webhook (webhook.id)}
                    <Trash className="h - 4 w - 4 mr - 2" /> Delete;"

                    onValueChange={(value) => handleTestWebhook (webhook.id, value as WebhookEventType)}
                    <SelectTrigger className="w-[180px]">;"
                      <SelectValue placeholder="Test webhook" />;"

                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic);"
                    {testResult.responseBody || '<empty>'}

          </div>;"
                    {testResult.responseBody || '<empty>'}'
</empty>
                  </pre>
          <Card className="mt-4 border-blue-200">;"

              <CardTitle className="text-lg">Webhook Test Result;"
            <CardContent>;
                <div className="flex justify-between">;"
                  <span className="font-medium">Status:</span>;""
                  <span className={testResult && testResult.status >= 200 && testResult && testResult.status < 300 ? 'text-green-600' : 'text-red-600'}>;
</span>
                  </span>;
                  <span className="font-medium">Response:</span>;""
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">;"
</pre>"
                    {testResult && testResult.responseBody || '<empty>'}
                  </pre>;
          )}
    </div>);`;
pr-12325

                </div>;
              </div>;
            </CardContent>;
          </Card>)}
      </div>;

    </div>);'


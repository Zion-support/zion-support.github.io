<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { PlusCircle, Save, Trash, Play } from "lucide-react",
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
export function WebhookManager() {
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
export function WebhookManager() {;
  const { ;
    webhooks;
=======
<<<<<<< HEAD
export function WebhookManager() {
  const { ;
    webhooks;
import React, { useEffect, useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { PlusCircle, Save, Trash, Play } from "lucide-react",
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
export function WebhookManager() {
  const {
    webhooks;

    loading
=======
export function WebhookManager() {;
  const { ;
    webhooks;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useEffect, useState } from "react",

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { PlusCircle, Save, Trash, Play } from "lucide-react",
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",
<<<<<<< HEAD
=======
=======
    loading, ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    testWebhook
  } = useWebhooks();
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { toast } from "sonner",
export function WebhookManager() {
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  } = useWebhooks($2);
  const [newWebhook, setNewWebhook] = useState($2);
  const eventOptions: { value: WebhookEventType, label: string}[] = [
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ],
  
=======
  } = useWebhooks(),
  
=======
    testWebhook;
  } = useWebhooks();


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook
  } = useWebhooks(),

<<<<<<< HEAD
  const [newWebhook, setNewWebhook] = useState({

  }),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [newWebhook, setNewWebhook] = useState({

<<<<<<< HEAD
=======
    name: ""
    url: ""
    selectedEvent: "" as WebhookEventType
    eventTypes: [] as WebhookEventType[]

    secret: ""

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }),

<<<<<<< HEAD
  });
  }),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" }
    { value: "quote_received", label: "Quote Request Received" }
    { value: "milestone_approved", label: "Milestone Approved" }

    { value: "talent_hired", label: "Talent Hired" }

<<<<<<< HEAD
  useEffect(() => {}
    fetchWebhooks()
  }, []);

  ],

=======
<<<<<<< HEAD
  useEffect(() => {}
=======
<<<<<<< HEAD
  ];
  useEffect(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    fetchWebhooks()
  }, []);

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ],

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {
    fetchWebhooks()
  }, []),
  
<<<<<<< HEAD
  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return,

    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
=======
<<<<<<< HEAD
  const handleAddEvent = $2;
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error($2);
      return
    }
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
      selectedEvent: "" as WebhookEventType
    })
  },
  
  const handleRemoveEvent = $2;
      eventTypes: newWebhook.eventTypes.filter(e = $2;
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error($2);
      return
    }
    
    await createWebhook($2);
    // Reset form
    setNewWebhook({
      name: ""
      url: ""
      selectedEvent: "" as WebhookEventType
      eventTypes: []
      secret: ""
    })
=======
  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return,
<<<<<<< HEAD
=======
    

<<<<<<< HEAD
  },
  


    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error("This event is already added"),
      return
    }
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
      selectedEvent: "" as WebhookEventType
    })
  }
  },
  
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      toast.error("This event is already added"),
      return;
    }
    setNewWebhook({}
      ...newWebhook,

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook

      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })

<<<<<<< HEAD
      return
    }
    await createWebhook(

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  const handleCreateWebhook = async () => {
    if (!newWebhook.name |!newWebhook.url |newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields");
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields"),
<<<<<<< HEAD
      return
    }
    await createWebhook(
      newWebhook.name
      newWebhook.url
      newWebhook.eventTypes
      newWebhook.secret |undefined
    );
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return
    }
    await createWebhook(

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },
  
  const handleCreateWebhook = async () => {}
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {"
      toast.error("Please fill in all required fields"),

      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined;
<<<<<<< HEAD

    ),

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined
    ),
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    ),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Reset form

    setNewWebhook({
      name: ""
      url: ""
      selectedEvent: "" as WebhookEventType
      eventTypes: []
      secret: ""
    })

<<<<<<< HEAD
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }

  },
<<<<<<< HEAD
    }
=======
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {}
>>>>>>> origin/chore/fix-lint-and-merge
    await testWebhook(webhookId, eventType)
  },

  return (

=======
<<<<<<< HEAD
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }
=======
<<<<<<< HEAD
  }
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> merged-prs-20250907-203621
  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
  
<<<<<<< HEAD
  return (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  },
<<<<<<< HEAD
    }
=======
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {}
>>>>>>> origin/chore/fix-lint-and-merge
    await testWebhook(webhookId, eventType)
  },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input
                id="webhook-name"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </CardHeader>"
        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
            <div className="space-y-2">"
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input"
                id="webhook-name""
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                placeholder="e.g., Job Postings Webhook"
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
<<<<<<< HEAD
=======
<<<<<<< HEAD
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
              <Input
                id="webhook-url"
                placeholder="https://example.com/webhook"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useEffect, useState } from "react",;

import { toast } from "sonner",;
export function WebhookManager() { return null; }
<<<<<<< HEAD
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
=======
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

  return (;

    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;

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
=======
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
<<<<<<< HEAD
              <Input
                id="webhook-url"
                placeholder="https://example.com/webhook"
              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    { value: "talent_hired", label: "Talent Hired" }
  ],;
  useEffect(() => {;
    fetchWebhooks();
  }, []),;
  const handleAddEvent = () => {;
    if (!newWebhook.selectedEvent) return,;
<<<<<<< HEAD
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {;"
=======
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast.error("This event is already added"),;
      return;
    }
;
    setNewWebhook({;
      ...newWebhook,;
<<<<<<< HEAD
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],;"
=======
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {;"
=======
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    setNewWebhook({;"
      name: "",;"
      url: "",;"
      selectedEvent: "" as WebhookEventType,;
      eventTypes: [],;"
      secret: "";
    })
};
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;

  return (;

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
<<<<<<< HEAD

=======
        </CardHeader>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
          </div>
          <div className="space-y-2">
            <Label>Events</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {newWebhook.eventTypes.map(event => (
                <ClickableBadge
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  key={event}
                  onRemove={() => handleRemoveEvent(event)}
                >
                  {eventOptions.find(e => e.value === event)?.label |event}
                </ClickableBadge>
<<<<<<< HEAD

=======
<<<<<<< HEAD
              ))}
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
              ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

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

      toast && toast.error("This event is already added");
      return;
    }

    setNewWebhook({;
      ...newWebhook;

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

      secret: "";
    });
  };

  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
    await testWebhook(webhookId, eventType);
  };

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

              placeholder="A secret key to verify the webhook source"

              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />"
=======
<<<<<<< HEAD
            <Input
              id="webhook-secret"
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />
=======
<<<<<<< HEAD

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
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

=======
    if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast && toast.error("This event is already added");
      return;
    }
    setNewWebhook({;
      ...newWebhook;

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

      secret: "";
    });
  };
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {;
    await testWebhook(webhookId, eventType);
  };
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD

=======
            <Input
              id="webhook-secret"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Input 
              id="webhook-secret" 
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              placeholder="A secret key to verify the webhook source"

              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

          </Button>
        </CardFooter>
      </Card>
      <div>"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>

=======
<<<<<<< HEAD
          <Button onClick={handleCreateWebhook}>
            <Save className="h-4 w-4 mr-2" /> Create Webhook
          </Button>
        </CardFooter>
      </Card>
      <div>
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>
=======

          </Button>
        </CardFooter>
      </Card>
      <div>"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                        <Button
                          variant="outline"
=======
        <CardContent className="space-y-4">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div className="space-y-2">;
              <Label htmlFor="webhook-name">Webhook Name</Label>;
              <Input ;
                id="webhook-name" ;
=======
=======
        <CardContent className="space - y-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <div className="space - y-2">;
              <Label html_for="webhook - name">Webhook Name</Label>;
              <Input;
                id="webhook - name";
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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

=======
=======
            <p className="text-xs text-muted-foreground">;
              If provided, this secret will be used to sign the webhook payload.;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
<<<<<<< HEAD

                      <CardDescription className="truncate max - w-md">;
                        {webhook.url}

                        <Button 
                          variant="outline" 

                          size="sm"

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
=======
                        <Button
                          variant="outline"
                        <Button 
                          variant="outline" 
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                          size="sm"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >
                          {webhook.is_active ? 'Disable' : 'Enable'}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        </Button>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
=======
                </CardHeader>
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <Label className="text-sm">Events</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {webhook.event_types.map(event => (
                          <ClickableBadge key={event} variant="secondary">
<<<<<<< HEAD
                            {eventOptions.find(e => e.value === event)?.label |event}
=======

<<<<<<< HEAD
                            {eventOptions.find(e => e.value === event)?.label || event}


                            {eventOptions.find(e => e.value === event)?.label |event}
                            {eventOptions.find(e => e.value === event)?.label || event}
=======

                            {eventOptions.find(e => e.value === event)?.label || event}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                          </ClickableBadge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {webhook.last_triggered_at
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </SelectContent>;
              </Select>;
              <Button type="button" onClick={handleAddEvent} variant="outline">;
                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
          ;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;

                      <CardDescription className="truncate max - w-md">;
                        {webhook.url}

                        <Button 
                          variant="outline" 

                          size="sm"

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </CardHeader>"
                <CardContent className="py-2">"
                  <div className="flex flex-col space-y-2">
                    <div>"
                      <Label className="text-sm">Events</Label>"
                      <div className="flex flex-wrap gap-2 mt-1">
                        {webhook.event_types.map(event => ("
                          <ClickableBadge key={event} variant="secondary">

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

                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;

            <p className="text-xs text-muted-foreground">;
              If provided, this secret will be used to sign the webhook payload.;
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;

          <Button onClick={handleCreateWebhook}>;
            <Save className="h-4 w-4 mr-2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
      <div>;
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;
=======

<<<<<<< HEAD
=======
      <div>;
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </CardDescription>;
                    </div>;
                    <div className="flex items-center">;
                      <div className="mr-2 flex items-center">;
<<<<<<< HEAD
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' :'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook.is_active ? 'Active' :'Inactive'}</span>;
                      </div>;
                      <div className="flex-shrink-0">;
                        <Button ;
                          variant="outline" ;
                          size="sm";
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >;
                          {webhook.is_active ? 'Disable' :'Enable'}
=======
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook && webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook && webhook.is_active ? 'Active' : 'Inactive'}</span>;
                      </div>;
                      <div className="flex-shrink-0">;
                        <Button
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleWebhook(webhook && webhook.id, !webhook && webhook.is_active)}
                        >;
                          {webhook && webhook.is_active ? 'Disable' : 'Enable'}
=======
                      </CardDescription>;
                    </div>;
                    <div className="flex items - center">;
                      <div className="mr - 2 flex items - center">;
                        <div className={`h - 2 w - 2 rounded - full mr - 2 ${webhook.is_active ? 'bg - green - 500' : 'bg - gray - 400'}`}></div>;
                        <span className="text - sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>;
                      </div>;
                      <div className="flex - shrink - 0">;
                        <Button;
                          variant="outline";
                          size="sm";
                          on_click={() => toggle_webhook (webhook.id, !webhook.is_active)}
                        >;
                          {webhook.is_active ? 'Disable' : 'Enable'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        : 'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    onClick={() => deleteWebhook(webhook && webhook.id)}
                  >;"
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
<<<<<<< HEAD

                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
"
=======
<<<<<<< HEAD
                  <Select
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
=======

                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
<<<<<<< HEAD
"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <CardFooter className="flex justify - between pt - 2">;
                  <Button;"
                    variant="outline";"
                    size="sm";
                    on_click={() => delete_webhook (webhook.id)}
<<<<<<< HEAD
                  >;"

=======
<<<<<<< HEAD
                  >;"
=======
                  >;
                    <Trash className="h - 4 w - 4 mr - 2" /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={(value) => handleTestWebhook (webhook.id, value as WebhookEventType)}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic)</SelectItem>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      {webhook.event_types.map(event => (;
                        <SelectItem key={event} value={event}>;
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;                      ))}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;

                      ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
<<<<<<< HEAD

'
                    {testResult.responseBody || '<empty>'}
=======
<<<<<<< HEAD

'
                    {testResult.responseBody || '<empty>'}
=======
        )}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                    {testResult.responseBody || '<empty>'}


<<<<<<< HEAD
                    {testResult.responseBody |'<empty>'}
                    {testResult.responseBody || '<empty>'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
<<<<<<< HEAD
=======
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
                  <span className={testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' :'text-red-600'}>;
                    {testResult.status} {testResult.statusText}
                  </span>;
                </div>;
                <div>;
                  <span className="font-medium">Response:</span>;
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">;
                    {testResult.responseBody || '<empty>'}
                  </pre>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
  ),;}
 export function WebhookManager () {
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
}= useWebhooks ();
const [newWebhook, setNewWebhook] = useState ({
  name: "";
url: "";
selectedEvent: ""as WebhookEventType;
eventTypes: [] as WebhookEventType[];
];
}setNewWebhook ({
  ...newWebhook;
eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent];
};
}newWebhook.url;
newWebhook.eventTypes;
newWebhook.secret || undefined);
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {
  newWebhook.eventTypes.map (event => (<ClickableBadge key= {
  event 
}onRemove= {
  () => handleRemoveEvent (event) 
}> {
  eventOptions.find (e => e.value === event) ?.label || event 
}</ClickableBadge>) ) 
}</div> <div className="flex space-x-2"> <Select value= {
  newWebhook.selectedEvent 
}onValueChange= {
  (value) => setNewWebhook ({
  ...newWebhook, selectedEvent: value as WebhookEventType 
}) 
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {
  eventOptions.map (option => (<SelectItem key= {
  option.value 
}value= {
  option.value 
}> {
  option.label 
}</SelectItem>) ) 
}</SelectContent> </Select> <PlusCircle className="h-4 w-4 mr-2"/> Add </Button> </div> </div> <div className="space-y-2"> <Label htmlFor=" webhook-secret">Secret (optional) </Label> <Input /> <p className="text-xs text-muted-foreground"> If provided, this secret will be used to sign the webhook payload. </p> </div> </CardContent> <CardFooter> <Button onClick= {
  handleCreateWebhook 
}> <Save className="h-4 w-4 mr-2"/> Create Webhook </Button> </CardFooter> </Card> <div> <h3 className="text-lg font-medium mb-4">Your Webhooks</h3> {
  loading ? (<p>Loading webhooks...</p>) : error ? (<p className="text-red-500"> {
  error 
}</p>) : webhooks.length === 0 ? (<p>No webhooks configured yet. Create your first webhook above.</p>) : (<div className="space-y-4"> {
  webhooks.map (webhook => (<Card key= {
  webhook.id 
}> <CardHeader className="pb-2"> <div className="flex justify-between items-start"> <div> <CardTitle className="text-lg"> {
  webhook.name 
}</CardTitle> <CardDescription className="truncate max-w-md"> {
  webhook.url 
}</CardDescription> </div> <div className="flex items-center"> <div className="mr-2 flex items-center"> <div className= {
  `h-2 w-2 rounded-full mr-2 $ {
  webhook.is active ? 'bg-green-500' : 'bg-gray-400' 
}` 
}></div> <span className="text-sm"> {
  webhook.is active ? 'Active' : 'Inactive' 
}</span> </div> <div className="flex-shrink-0"> <Button > {
  webhook.is active ? 'Disable' : 'Enable' 
}</Button> </div> </div> </div> </CardHeader> <CardContent className="py-2"> <div className="flex flex-col space-y-2"> <div> <Label className="text-sm">Events</Label> </ClickableBadge>) ) 
}</div> </div> <div className="text-xs text-muted-foreground"> {
  webhook.last triggered at ? `Last triggered: $ {
  new Date (webhook.last triggered at) .toLocaleString () 
}` : 'Never triggered' 
}</div> </div> </CardContent> <CardFooter className="flex justify-between pt-2"> <Button > <Trash className="h-4 w-4 mr-2"/> Delete </Button> <Select onValueChange= {
  (value) => handleTestWebhook (webhook.id, value as WebhookEventType) 
}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) ) 
}</SelectContent> </Select> </CardFooter> </Card>) ) 
}</div>) 
}{
  testResult && (<Card className="mt-4 border-blue-200"> <CardHeader> <CardTitle className="text-lg">Webhook Test Result</CardTitle> </CardHeader> <CardContent> <div className="space-y-2"> <div className="flex justify-between"> <span className="font-medium">Status:</span> <span className= {
  testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600' 
}> {
  testResult.status 
}{
  testResult.statusText 
}</span> </div> <div> <span className="font-medium">Response:</span> <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto"> {
  testResult.responseBody || '<empty>' 
}</pre> </div> </div> </CardContent> </Card>) 
}</div> </div>) 
}
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

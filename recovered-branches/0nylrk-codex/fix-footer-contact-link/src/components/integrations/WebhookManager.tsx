<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
export function WebhookManager() {;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;


<<<<<<< HEAD
  const [newWebhook, setNewWebhook] = useState({


    name: ""
    url: ""
    selectedEvent: "" as WebhookEventType
    eventTypes: [] as WebhookEventType[]

    secret: ""


  }),



=======
    error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook
  } = useWebhooks(),

  const [newWebhook, setNewWebhook] = useState({

  }),

  const [newWebhook, setNewWebhook] = useState({


  }),

  });
  }),
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" }
    { value: "quote_received", label: "Quote Request Received" }
    { value: "milestone_approved", label: "Milestone Approved" }

    { value: "talent_hired", label: "Talent Hired" }

<<<<<<< HEAD


  ],


=======

  useEffect(() => {}
    fetchWebhooks()
  }, []);

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return;

  ],

>>>>>>> origin/cursor/delete-old-data-records-6bba
  useEffect(() => {
    fetchWebhooks()
  }, []),
  
<<<<<<< HEAD

  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return,

=======
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

      toast.error("This event is already added"),
      return;
    }
    setNewWebhook({}
      ...newWebhook,

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook

      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })


<<<<<<< HEAD
=======
      return
    }
    await createWebhook(



    ),
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Reset form

    setNewWebhook({
      name: ""
      url: ""
      selectedEvent: "" as WebhookEventType
      eventTypes: []
      secret: ""
    })


<<<<<<< HEAD
=======
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
  
<<<<<<< HEAD


  return (


=======
  return (
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }

  },
    }
    await testWebhook(webhookId, eventType)
  },

  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create Webhook</CardTitle>
          <CardDescription>
            Define webhooks to notify external systems when events occur in Zion.
          </CardDescription>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </CardHeader>"
        <CardContent className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
            <div className="space-y-2">"
              <Label htmlFor="webhook-name">Webhook Name</Label>
              <Input"
                id="webhook-name""
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                placeholder="e.g., Job Postings Webhook"
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />
            </div>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
            <Input
              id="webhook-secret"
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;


          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;

<<<<<<< HEAD
            <Input
              id="webhook-secret"

            <Input 
              id="webhook-secret" 



=======
            <Input 
              id="webhook-secret" 
>>>>>>> origin/cursor/delete-old-data-records-6bba
              placeholder="A secret key to verify the webhook source"

              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
            />"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </Button>
        </CardFooter>
      </Card>
      <div>"
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>

<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
            <p className="text-xs text-muted-foreground">;
              If provided, this secret will be used to sign the webhook payload.;
            </p>;
          </div>;
        </CardContent>;
        <CardFooter>;
                        <Button
                          variant="outline"
                        <Button 
                          variant="outline" 

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
                          <ClickableBadge key={event} variant="secondary">



                          </ClickableBadge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {webhook.last_triggered_at
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </SelectContent>;
              </Select>;
              <Button type="button" onClick={handleAddEvent} variant="outline">;
                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD


=======
          ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                      </CardDescription>;
                    </div>;
                    <div className="flex items-center">;
                      <div className="mr-2 flex items-center">;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        : 'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    onClick={() => deleteWebhook(webhook && webhook.id)}
                  >;"
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
<<<<<<< HEAD


                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}

=======

                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
"
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <CardFooter className="flex justify - between pt - 2">;
                  <Button;"
                    variant="outline";"
                    size="sm";
                    on_click={() => delete_webhook (webhook.id)}
<<<<<<< HEAD

                  >;
                    <Trash className="h - 4 w - 4 mr - 2" /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={(value) => handleTestWebhook (webhook.id, value as WebhookEventType)}

=======

                  >;"

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic)</SelectItem>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;

                      ))}
<<<<<<< HEAD

=======

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
<<<<<<< HEAD

        )}


=======


'
                    {testResult.responseBody || '<empty>'}
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
    loading
=======
=======export function WebhookManager() {;
  const { ;
    webhooks;
    loading, ;
    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;

=======  const [newWebhook, setNewWebhook] = useState({

    name: ""
    url: ""
    selectedEvent: "" as WebhookEventType
    eventTypes: [] as WebhookEventType[]

    secret: ""
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }),
  


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

=======    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error("This event is already added");
      return
    }
    setNewWebhook({
      ...newWebhook;
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent];
      selectedEvent: "" as WebhookEventType
    })
  },
  

=======
  }
  },
    const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  },
  
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields"),
      return
    }
    await createWebhook(
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined
    ),
    
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Reset form
    setNewWebhook({
      name: ""
      url: ""
      selectedEvent: "" as WebhookEventType
      eventTypes: []
      secret: ""
    })
  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
  
=======  return (
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
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"
=======

                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Events</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {newWebhook.eventTypes.map(event => (
                <ClickableBadge
                  key={event}
                  onRemove={() => handleRemoveEvent(event)}
                >
                  {eventOptions.find(e => e.value === event)?.label |event}
                </ClickableBadge>
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
    if (newWebhook && newWebhook.eventTypes.includes(newWebhook && newWebhook.selectedEvent)) {;
      toast && toast.error("This event is already added");
      return;
    }
    setNewWebhook({;
      ...newWebhook;
      eventTypes: [...newWebhook && newWebhook.eventTypes, newWebhook && newWebhook.selectedEvent];
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
    if (!newWebhook && newWebhook.name || !newWebhook && newWebhook.url || newWebhook && newWebhook.eventTypes.length === 0) {;
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
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;
=======            <Input
              id="webhook-secret"
            <Input 
              id="webhook-secret" 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              placeholder="A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

                            {eventOptions.find(e => e.value === event)?.label |event}
                            {eventOptions.find(e => e.value === event)?.label || event}
=======

                            {eventOptions.find(e => e.value === event)?.label || event}

=======
                            {eventOptions.find(e => e.value === event)?.label |event}
                            {eventOptions.find(e => e.value === event)?.label || event}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          </ClickableBadge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {webhook.last_triggered_at
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="space-y-2">;
            <Label htmlFor="webhook-secret">Secret (optional)</Label>;
            <Input
              id="webhook-secret" 
              placeholder="A secret key to verify the webhook source"
              value={newWebhook && newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e && e.target.value})}
            />;
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
                <CardContent className="py - 2">;
                  <div className="flex flex - col space - y-2">;
                    <div>;
                      <Label className="text - sm">Events</Label>;
                      <div className="flex flex - wrap gap - 2 mt - 1">;
                        {webhook.event_types.map (event => (
                          <ClickableBadge key={event} variant="secondary">;
                            {event_options.find (e => e.value === event)?.label || event}
                          </ClickableBadge>))}
                      </div>;
                    </div>;
                    <div className="text - xs text - muted - foreground">;
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date (webhook.last_triggered_at).toLocaleString ()}`;
                        : 'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;                    onClick={() => deleteWebhook(webhook && webhook.id)}
                  >;
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
                  <Select
                    onValueChange={(value) => handleTestWebhook(webhook && webhook.id, value as WebhookEventType)}
=======                <CardFooter className="flex justify - between pt - 2">;
                  <Button;
                    variant="outline";
                    size="sm";
                    on_click={() => delete_webhook (webhook.id)}
                  >;
                    <Trash className="h - 4 w - 4 mr - 2" /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={(value) => handleTestWebhook (webhook.id, value as WebhookEventType)}                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic)</SelectItem>;

                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;


                      ))}=======
                          Test {eventOptions.find(e => e.value === event)?.label |event}
                        </SelectItem>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
                        </SelectItem>;
                      ))}                    </SelectContent>;
                  </Select>;
                </CardFooter>;
              </Card>;
            ))}
          </div>;
        )}

                    {testResult.responseBody || '<empty>'}


<<<<<<< HEAD
                    {testResult.responseBody |'<empty>'}
                    {testResult.responseBody || '<empty>'}
==============
                    {testResult.responseBody |'<empty>'}
                    {testResult.responseBody || '<empty>'}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
        ;
=======
}
=======
        {testResult && (;
          <Card className="mt-4 border-blue-200">;
            <CardHeader>;
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>;
            </CardHeader>;
            <CardContent>;
              <div className="space-y-2">;
                <div className="flex justify-between">;
                  <span className="font-medium">Status:</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          </Card>)}
      </div>;
    </div>);
}


<<<<<<< HEAD




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



    error;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
  } = useWebhooks();
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { toast } from "sonner",
export function WebhookManager() {
  const { 
    webhooks,

=======
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { PlusCircle, Save, Trash, Play } from "lucide-react";
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function WebhookManager() {
  const { 
    webhooks, 
>>>>>>> origin/auto/autonomy-17186719616
    loading, 
    error,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook
<<<<<<< HEAD
  } = useWebhooks(),

  

  const [newWebhook, setNewWebhook] = useState({

    name: ""
    url: ""
    selectedEvent: "" as WebhookEventType
    eventTypes: [] as WebhookEventType[]

    secret: ""

  });
  }),
  

  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" }
    { value: "quote_received", label: "Quote Request Received" }
    { value: "milestone_approved", label: "Milestone Approved" }
    { value: "talent_hired", label: "Talent Hired" }

  ];
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

  }
  },
  

  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })

  }
  const handleCreateWebhook = async () => {
    if (!newWebhook.name |!newWebhook.url |newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields");
  },
  
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields"),
      return
    }
    await createWebhook(
      newWebhook.name
      newWebhook.url
      newWebhook.eventTypes
      newWebhook.secret |undefined
    );
=======
  } = useWebhooks();
  
  const [newWebhook, setNewWebhook] = useState({
    name: "",
    url: "",
    selectedEvent: "" as WebhookEventType,
    eventTypes: [] as WebhookEventType[],
    secret: ""
  });
  
  const eventOptions: { value: WebhookEventType; label: string }[] = [
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ];
  
  useEffect(() => {
    fetchWebhooks();
  }, []);
  
  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return;
    
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error("This event is already added");
      return;
    }
    
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
      selectedEvent: "" as WebhookEventType
    });
  };
  
  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook,
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    });
  };
  
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    await createWebhook(
>>>>>>> origin/auto/autonomy-17186719616
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined
<<<<<<< HEAD
    ),
    

    // Reset form
    setNewWebhook({
      name: ""
      url: ""
      selectedEvent: "" as WebhookEventType
      eventTypes: []
      secret: ""
    })

  }
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  }

  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
  

=======
    );
    
    // Reset form
    setNewWebhook({
      name: "",
      url: "",
      selectedEvent: "" as WebhookEventType,
      eventTypes: [],
      secret: ""
    });
  };
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType);
  };
  
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
              <Input
                id="webhook-name"
=======
              <Input 
                id="webhook-name" 
>>>>>>> origin/auto/autonomy-17186719616
                placeholder="e.g., Job Postings Webhook"
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
            </div>
<<<<<<< HEAD
            <div className="space-y-2">
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




=======
            
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL</Label>
              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"
>>>>>>> origin/auto/autonomy-17186719616
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
              />
            </div>
          </div>
<<<<<<< HEAD
=======
          
>>>>>>> origin/auto/autonomy-17186719616
          <div className="space-y-2">
            <Label>Events</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {newWebhook.eventTypes.map(event => (
<<<<<<< HEAD
                <ClickableBadge
                  key={event}
                  onRemove={() => handleRemoveEvent(event)}
                >
                  {eventOptions.find(e => e.value === event)?.label |event}
                </ClickableBadge>
              ))}
            </div>;
            <div className="flex space-x-2">;
              <Select
                value={newWebhook && newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
              >;
                <SelectTrigger className="w-full">;
                  <SelectValue placeholder="Select event" />;
                </SelectTrigger>;
                <SelectContent>;
                  {eventOptions && eventOptions.map(option => (;
                    <SelectItem key={option && option.value} value={option && option.value}>;
                      {option && option.label}
                    </SelectItem>;
=======
                <ClickableBadge 
                  key={event} 
                  onRemove={() => handleRemoveEvent(event)}
                >
                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>
              ))}
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
>>>>>>> origin/auto/autonomy-17186719616
                  ))}
                </SelectContent>
              </Select>
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
            <Input 
              id="webhook-secret" 

=======
          
          <div className="space-y-2">
            <Label htmlFor="webhook-secret">Secret (optional)</Label>
            <Input 
              id="webhook-secret" 
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
      <div>
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>
        {loading ? (
          <p > Loading webhooks...</p>) : error ? (
          <p className="text - red - 500">{error}</p>) : webhooks.length === 0 ? (
          <p > No webhooks configured yet. Create your first webhook above.</p>) : (
          <div className="space - y-4">;
            {webhooks.map (webhook => (
              <Card key={webhook.id}>;
                <CardHeader className="pb - 2">;
                  <div className="flex justify - between items - start">;
                    <div>;
                      <CardTitle className="text - lg">{webhook.name}</CardTitle>;
                      <CardDescription className="truncate max - w-md">;
=======
      
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
>>>>>>> origin/auto/autonomy-17186719616
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
                        <Button 
                          variant="outline" 

=======
                        <Button 
                          variant="outline" 
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD

                            {eventOptions.find(e => e.value === event)?.label |event}
                            {eventOptions.find(e => e.value === event)?.label || event}

=======
                            {eventOptions.find(e => e.value === event)?.label || event}
>>>>>>> origin/auto/autonomy-17186719616
                          </ClickableBadge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
<<<<<<< HEAD
                      {webhook.last_triggered_at
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
                        : 'Never triggered'}
                    </div>;
                  </div>;
                </CardContent>;
                <CardFooter className="flex justify-between pt-2">;
=======
                      {webhook.last_triggered_at 
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
                        : 'Never triggered'}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
>>>>>>> origin/auto/autonomy-17186719616
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteWebhook(webhook.id)}
                  >
                    <Trash className="h-4 w-4 mr-2" /> Delete
                  </Button>
<<<<<<< HEAD
=======
                  
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD

                          Test {eventOptions.find(e => e.value === event)?.label |event}
                        </SelectItem>
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
        
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD

                    {testResult.responseBody |'<empty>'}
                    {testResult.responseBody || '<empty>'}

=======
                    {testResult.responseBody || '<empty>'}
>>>>>>> origin/auto/autonomy-17186719616
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
<<<<<<< HEAD
  )
}


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

                  </pre>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
  );
}
          </Card>)}
      </div>;
    </div>);
}

=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616

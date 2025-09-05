
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
import React, { useEffect, useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { ClickableBadge } from &quot;@/components/ui/clickable-badge&quot;;
import { PlusCircle, Save, Trash } from 'lucide-react'
import { useWebhooks, WebhookEventType } from &quot;@/hooks/useWebhooks&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    name: "&quot;,
    url: "&quot;,
    selectedEvent: "&quot; as WebhookEventType,
    eventTypes: [] as WebhookEventType[],
<<<<<<< HEAD
    secret: ""
  }),
  
  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ],
=======
    secret: "&quot;
  });
  
  const eventOptions: { value: WebhookEventType; label: string }[] = [
    { value: &quot;new_application&quot;, label: &quot;New Application Received&quot; },
    { value: &quot;quote_received&quot;, label: &quot;Quote Request Received&quot; },
    { value: &quot;milestone_approved&quot;, label: &quot;Milestone Approved&quot; },
    { value: &quot;talent_hired&quot;, label: &quot;Talent Hired&quot; }
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  useEffect(() => {
    fetchWebhooks()
  }, []),
  
  const handleAddEvent = () => {
    if (!newWebhook.selectedEvent) return,
    
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
<<<<<<< HEAD
      toast.error("This event is already added"),
      return
=======
      toast.error(&quot;This event is already added&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    setNewWebhook({
      ...newWebhook,
      eventTypes: [...newWebhook.eventTypes, newWebhook.selectedEvent],
<<<<<<< HEAD
      selectedEvent: "" as WebhookEventType
    })
  },
=======
      selectedEvent: "&quot; as WebhookEventType
    });
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const handleRemoveEvent = (event: WebhookEventType) => {
    setNewWebhook({
      ...newWebhook,
      eventTypes: newWebhook.eventTypes.filter(e => e !== event)
    })
  },
  
  const handleCreateWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
<<<<<<< HEAD
      toast.error("Please fill in all required fields"),
      return
=======
      toast.error(&quot;Please fill in all required fields&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    await createWebhook(
      newWebhook.name, 
      newWebhook.url, 
      newWebhook.eventTypes, 
      newWebhook.secret || undefined
    ),
    
    // Reset form
    setNewWebhook({
      name: "&quot;,
      url: "&quot;,
      selectedEvent: "&quot; as WebhookEventType,
      eventTypes: [],
      secret: ""
    })
  },
  
  const handleTestWebhook = async (webhookId: string, eventType: WebhookEventType) => {
    await testWebhook(webhookId, eventType)
  },
  
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
            <div className="space-y-2&quot;>
              <Label htmlFor=&quot;webhook-name&quot;>Webhook Name</Label>
              <Input 
                id=&quot;webhook-name&quot; 
                placeholder=&quot;e.g., Job Postings Webhook"
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2&quot;>
              <Label htmlFor=&quot;webhook-url&quot;>URL</Label>
              <Input 
                id=&quot;webhook-url&quot; 
                placeholder=&quot;https://example.com/webhook"
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
            </div>;
            <div className="flex space-x-2">;
              <Select;
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent: value as WebhookEventType})}
<<<<<<< HEAD
              >
                <SelectTrigger className="w-full&quot;>
                  <SelectValue placeholder=&quot;Select event&quot; />
                </SelectTrigger>
                <SelectContent>
                  {eventOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
=======
              >;
                <SelectTrigger className="w-full">;
                  <SelectValue placeholder="Select event" />;
                </SelectTrigger>;
                <SelectContent>;
                  {eventOptions.map(option => (;
                    <SelectItem key={option.value} value={option.value}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      {option.label}
                    </SelectItem>;
                  ))}
<<<<<<< HEAD
                </SelectContent>
              </Select>
              <Button type=&quot;button&quot; onClick={handleAddEvent} variant=&quot;outline">
                <PlusCircle className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2&quot;>
            <Label htmlFor=&quot;webhook-secret&quot;>Secret (optional)</Label>
            <Input 
              id=&quot;webhook-secret&quot; 
              placeholder=&quot;A secret key to verify the webhook source"
=======
                </SelectContent>;
              </Select>;
              <Button type="button" onClick={handleAddEvent} variant="outline">;
                <PlusCircle className="h-4 w-4 mr-2" /> Add;
              </Button>;
            </div>;
          </div>;
          <div className="space-y-2">;
            <Label htmlFor="webhook-secret">Secret (optional)</Label>;
            <Input;
              id="webhook-secret";
              placeholder="A secret key to verify the webhook source";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
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
                        {webhook.url}
<<<<<<< HEAD
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>
                      </div>
                      <div className="flex-shrink-0&quot;>
                        <Button 
                          variant=&quot;outline&quot; 
                          size=&quot;sm"
=======
                      </CardDescription>;
                    </div>;
                    <div className="flex items-center">;
                      <div className="mr-2 flex items-center">;
                        <div className={`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>;
                        <span className="text-sm">{webhook.is_active ? 'Active' : 'Inactive'}</span>;
                      </div>;
                      <div className="flex-shrink-0">;
                        <Button;
                          variant="outline";
                          size="sm";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
                        >;
                          {webhook.is_active ? 'Disable' : 'Enable'}
<<<<<<< HEAD
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <Label className="text-sm">Events</Label>
                      <div className="flex flex-wrap gap-2 mt-1&quot;>
                        {webhook.event_types.map((event: WebhookEventType) => (
                          <ClickableBadge key={event} variant=&quot;secondary">
=======
                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;
                <CardContent className="py-2">;
                  <div className="flex flex-col space-y-2">;
                    <div>;
                      <Label className="text-sm">Events</Label>;
                      <div className="flex flex-wrap gap-2 mt-1">;
                        {webhook.event_types.map((event: WebhookEventType) => (;
                          <ClickableBadge key={event} variant="secondary">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                            {eventOptions.find(e => e.value === event)?.label || event}
                          </ClickableBadge>;
                        ))}
                      </div>;
                    </div>;
                    <div className="text-xs text-muted-foreground">;
                      {webhook.last_triggered_at;
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`;
                        : 'Never triggered'}
<<<<<<< HEAD
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2&quot;>
                  <Button
                    variant=&quot;outline&quot;
                    size=&quot;sm"
=======
                    </div>;
                  </div>;
                </CardContent>;
                <CardFooter className="flex justify-between pt-2">;
                  <Button;
                    variant="outline";
                    size="sm";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    onClick={() => deleteWebhook(webhook.id)}
                  >;
                    <Trash className="h-4 w-4 mr-2" /> Delete;
                  </Button>;
                  <Select;
                    onValueChange={(value) => handleTestWebhook(webhook.id, value as WebhookEventType)}
<<<<<<< HEAD
                  >
                    <SelectTrigger className="w-[180px]&quot;>
                      <SelectValue placeholder=&quot;Test webhook&quot; />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=&quot;test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map((event: WebhookEventType) => (
                        <SelectItem key={event} value={event}>
=======
                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value="test_event">Test (generic)</SelectItem>;
                      {webhook.event_types.map((event: WebhookEventType) => (;
                        <SelectItem key={event} value={event}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
                    {testResult.responseBody || '<empty>'}
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
;
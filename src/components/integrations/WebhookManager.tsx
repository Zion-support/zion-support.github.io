
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
=======
import React, {_useEffect, _useState} from "react";

export function WebhookManager() {_const { 
    webhooks, _loading, _error, _testResult, _fetchWebhooks, _createWebhook, _toggleWebhook, _deleteWebhook, _testWebhook} = useWebhooks();
  
  const [newWebhook, setNewWebhook] = useState({_name: "", _url: "", _selectedEvent: "" as WebhookEventType, _eventTypes: [] as WebhookEventType[], _secret: ""});
  
  const eventOptions: {_value: WebhookEventType; label: string}[] = [
    {_value: "new_application", _label: "New Application Received"},
    {_value: "quote_received", _label: "Quote Request Received"},
    {_value: "milestone_approved", _label: "Milestone Approved"},
    {_value: "talent_hired", _label: "Talent Hired"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
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
=======
  useEffect__(() => {_fetchWebhooks();}, []);
  
  const _handleAddEvent = () => {_if (!newWebhook.selectedEvent) return;
    
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {
      toast.error("This event is already added");
      return;}
    
    setNewWebhook({_...newWebhook, _eventTypes: [...newWebhook.eventTypes, _newWebhook.selectedEvent], _selectedEvent: "" as WebhookEventType});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
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
=======
  const _handleRemoveEvent = (_event: WebhookEventType) => {_setNewWebhook({
      ...newWebhook, _eventTypes: newWebhook.eventTypes.filter(e => e !== event)});
  };
  
  const _handleCreateWebhook = async () => {_if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {
      toast.error("Please fill in all required fields");
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    await createWebhook(
      newWebhook.name,
      newWebhook.url,
      newWebhook.eventTypes,
      newWebhook.secret || undefined
    ),
    
    // Reset form
<<<<<<< HEAD
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
=======
    setNewWebhook({_name: "", _url: "", _selectedEvent: "" as WebhookEventType, _eventTypes: [], _secret: ""});
  };
  
  const _handleTestWebhook = async (_webhookId: string, _eventType: WebhookEventType) => {_await testWebhook(webhookId, _eventType);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (_<div className="space-y-8">
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
<<<<<<< HEAD
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
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url: e.target.value})}
=======
                id="webhook-name" 
                placeholder="e.g., _Job Postings Webhook"
                value={_newWebhook.name}
                onChange={_(e) => setNewWebhook({...newWebhook, _name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="webhook-url">window.URL</Label>
              <Input 
                id="webhook-url" 
                placeholder="https://example.com/webhook"
                value={_newWebhook.url}
                onChange={_(_e) => setNewWebhook({...newWebhook, _url: e.target.value})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Events</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {_newWebhook.eventTypes.map(_event => (
                <ClickableBadge 
                  key={event} 
                  onRemove={_() => handleRemoveEvent(event)}
                >
                  {_eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>
              ))}
            </div>
            <div className="flex space-x-2">
              <Select
                value={_newWebhook.selectedEvent}
                onValueChange={_(_value) => setNewWebhook({...newWebhook, _selectedEvent: value as WebhookEventType})}
              >
                <SelectTrigger className="w-full&quot;>
                  <SelectValue placeholder=&quot;Select event&quot; />
                </SelectTrigger>
                <SelectContent>
                  {_eventOptions.map(option => (
                    <SelectItem key={option.value} value={_option.value}>
                      {_option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
<<<<<<< HEAD
              <Button type=&quot;button&quot; onClick={handleAddEvent} variant=&quot;outline">
=======
              <Button type="button" onClick={_handleAddEvent} variant="outline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <PlusCircle className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2&quot;>
            <Label htmlFor=&quot;webhook-secret&quot;>Secret (optional)</Label>
            <Input 
<<<<<<< HEAD
              id=&quot;webhook-secret&quot; 
              placeholder=&quot;A secret key to verify the webhook source"
              value={newWebhook.secret}
              onChange={(e) => setNewWebhook({...newWebhook, secret: e.target.value})}
=======
              id="webhook-secret" 
              placeholder="A secret key to verify the webhook source"
              value={_newWebhook.secret}
              onChange={_(_e) => setNewWebhook({...newWebhook, _secret: e.target.value})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
            <p className="text-xs text-muted-foreground">
              If provided, this secret will be used to sign the webhook payload.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={_handleCreateWebhook}>
            <Save className="h-4 w-4 mr-2" /> Create Webhook
          </Button>
        </CardFooter>
      </Card>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Your Webhooks</h3>
        
        {_loading ? (
          <p>Loading webhooks...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : webhooks.length === 0 ? (
          <p>No webhooks configured yet. Create your first webhook above.</p>
        ) : (_<div className="space-y-4">
            {_webhooks.map(webhook => (
              <Card key={webhook.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{_webhook.name}</CardTitle>
                      <CardDescription className="truncate max-w-md">
                        {_webhook.url}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className={_`h-2 w-2 rounded-full mr-2 ${webhook.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm">{_webhook.is_active ? 'Active' : 'Inactive'}</span>
                      </div>
                      <div className="flex-shrink-0&quot;>
                        <Button 
<<<<<<< HEAD
                          variant=&quot;outline&quot; 
                          size=&quot;sm"
                          onClick={() => toggleWebhook(webhook.id, !webhook.is_active)}
=======
                          variant="outline" 
                          size="sm"
                          onClick={_() => toggleWebhook(webhook.id, _!webhook.is_active)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          {_webhook.is_active ? 'Disable' : 'Enable'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <Label className="text-sm">Events</Label>
<<<<<<< HEAD
                      <div className="flex flex-wrap gap-2 mt-1&quot;>
                        {webhook.event_types.map((event: WebhookEventType) => (
                          <ClickableBadge key={event} variant=&quot;secondary">
                            {eventOptions.find(e => e.value === event)?.label || event}
=======
                      <div className="flex flex-wrap gap-2 mt-1">
                        {_webhook.event_types.map(_(event: WebhookEventType) => (
                          <ClickableBadge key={event} variant="secondary">
                            {_eventOptions.find(e => e.value === event)?.label || event}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </ClickableBadge>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {_webhook.last_triggered_at 
                        ? `Last triggered: ${new Date(webhook.last_triggered_at).toLocaleString()}`
                        : 'Never triggered'}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2&quot;>
                  <Button
<<<<<<< HEAD
                    variant=&quot;outline&quot;
                    size=&quot;sm"
                    onClick={() => deleteWebhook(webhook.id)}
=======
                    variant="outline"
                    size="sm"
                    onClick={_() => deleteWebhook(webhook.id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Trash className="h-4 w-4 mr-2" /> Delete
                  </Button>
                  
                  <Select
                    onValueChange={_(_value) => handleTestWebhook(webhook.id, _value as WebhookEventType)}
                  >
                    <SelectTrigger className="w-[180px]&quot;>
                      <SelectValue placeholder=&quot;Test webhook&quot; />
                    </SelectTrigger>
                    <SelectContent>
<<<<<<< HEAD
                      <SelectItem value=&quot;test_event">Test (generic)</SelectItem>
                      {webhook.event_types.map((event: WebhookEventType) => (
                        <SelectItem key={event} value={event}>
                          Test {eventOptions.find(e => e.value === event)?.label || event}
=======
                      <SelectItem value="test_event">Test (generic)</SelectItem>
                      {_webhook.event_types.map(_(event: WebhookEventType) => (
                        <SelectItem key={event} value={_event}>
                          Test {_eventOptions.find(e => e.value === event)?.label || event}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {_testResult && (
          <Card className="mt-4 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">Webhook Test Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className={testResult.status >= 200 && testResult.status < 300 ? 'text-green-600' : 'text-red-600'}>
                    {_testResult.status} {_testResult.statusText}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Response:</span>
                  <pre className="mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto">
                    {_testResult.responseBody || '<empty>'}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

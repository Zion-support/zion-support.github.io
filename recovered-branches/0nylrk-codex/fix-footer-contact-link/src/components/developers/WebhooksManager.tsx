
import { useState, useEffect } from &quot;react&quot;;
import { format } from &quot;date-fns&quot;;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from &quot;lucide-react&quot;;
import { useWebhooks, type WebhookEventType } from &quot;@/hooks/useWebhooks&quot;;

import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from &quot;@/components/ui/dialog&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from &quot;@/components/ui/dropdown-menu&quot;;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from &quot;@/components/ui/alert-dialog&quot;;
import { ScrollArea } from &quot;@/components/ui/scroll-area&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;

export function WebhooksManager() {
  const {
    webhooks,
    loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,
    clearTestResult
  } = useWebhooks();
  
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [showTestResult, setShowTestResult] = useState(false);

  // Create webhook form state
  const [webhookName, setWebhookName] = useState("&quot;);
  const [webhookUrl, setWebhookUrl] = useState("&quot;);
  const [webhookSecret, setWebhookSecret] = useState("&quot;);
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');

  // Load webhooks on mount
  useEffect(() => {
    fetchWebhooks();
  }, []);

  const handleCreateWebhook = async () => {
    if (webhookName.trim() === "&quot; || webhookUrl.trim() === "&quot; || selectedEvents.length === 0) return;
    
    await createWebhook(
      webhookName, 
      webhookUrl, 
      selectedEvents, 
      webhookSecret.trim() === "&quot; ? undefined : webhookSecret
    );
    
    setShowCreateDialog(false);
    resetWebhookForm();
  };

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus);
  };

  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);
  };

  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);
  };

  const resetWebhookForm = () => {
    setWebhookName("&quot;);
    setWebhookUrl("&quot;);
    setWebhookSecret("");
    setSelectedEvents([]);
  };

  // Event type options
  const eventOptions: { value: WebhookEventType; label: string; description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }];

  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
    setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event) 
        : [...prev, event]
    );
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Webhook className="mr-2" size={20} /> Webhooks
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400&quot;>
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>
          
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant=&quot;default">
                <Plus size={16} className="mr-1" /> Add Webhook
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;webhook-name&quot;>Webhook Name</Label>
                  <Input
                    id=&quot;webhook-name&quot;
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder=&quot;e.g. Application Notifications"
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                
                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;webhook-url&quot;>Endpoint URL</Label>
                  <Input
                    id=&quot;webhook-url&quot;
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder=&quot;https://example.com/webhook"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.
                  </p>
                </div>

                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;webhook-secret&quot;>Secret Key (Optional)</Label>
                  <Input
                    id=&quot;webhook-secret&quot;
                    type=&quot;password&quot;
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder=&quot;••••••••••••••••"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">
                    {eventOptions.map((event) => (
                      <div key={event.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={event.value} 
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
                        <Label
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1&quot;>{event.description}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant=&quot;outline&quot; onClick={() => {
                  setShowCreateDialog(false);
                  resetWebhookForm();
                }}>
                  Cancel
                </Button>
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "&quot; || 
                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0
                }>
                  Create Webhook
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Webhooks List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>
          ) : webhooks.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />
              <p>No webhooks found.</p>
              <p className="text-sm mt-1">Create one to receive event notifications.</p>
            </div>
          ) : (
            webhooks.map((webhook) => (
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <Globe size={14} className="mr-1" />
                      <span className="max-w-md truncate">{webhook.url}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center mr-2">
                      <Switch
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />
                      <span className="ml-2 text-sm&quot;>
                        {webhook.is_active ? &quot;Active&quot; : &quot;Inactive&quot;}
                      </span>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant=&quot;ghost&quot; size=&quot;icon&quot;>
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align=&quot;end" className="bg-zinc-900 border-zinc-800 text-white">
                        <DropdownMenuItem
                          onClick={() => setShowTestDialog(webhook.id)}
                          className="cursor-pointer"
                        >
                          <PlayCircle size={14} className="mr-2" /> Test
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500"
                        >
                          <X size={14} className="mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2&quot;>
                  {webhook.event_types.map((event) => (
                    <Badge 
                      key={event} 
                      variant=&quot;secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
                      {event}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                  {webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500&quot;>
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant=&quot;outline&quot; size=&quot;sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh
        </Button>
      </CardFooter>

      {/* Test Webhook Dialog */}
      <Dialog 
        open={showTestDialog !== null} 
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {
              setShowTestResult(false);
              clearTestResult();
            }
          }
        }}
      >
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          
          {!showTestResult ? (
            <>
              <div className="space-y-4 py-4">
                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;test-event-type">Event Type</Label>
                  <Select
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700&quot;>
                      <SelectValue placeholder=&quot;Select an event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-zinc-500&quot;>
                    The event type will determine the structure of the test payload.
                  </p>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant=&quot;outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge
                      className={
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700&quot;
                          : &quot;bg-red-700"
                      }
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all&quot;>
                        {testResult?.responseBody || &quot;No response body&quot;}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant=&quot;default&quot; onClick={() => {
                  setShowTestDialog(null);
                  setShowTestResult(false);
                  clearTestResult();
                }}>
                  Close
                </Button>
                <Button variant=&quot;outline" onClick={() => {
                  setShowTestResult(false);
                  clearTestResult();
                }}>
                  Test Another Event
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action will permanently remove this webhook.
              You will no longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

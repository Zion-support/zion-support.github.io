
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { format } from "date-fns",
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react'
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Input } from "@/components/ui/input",
import { Checkbox } from "@/components/ui/checkbox",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch",
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
=======
import { useState, useEffect } from &quot;react&quot;;
import { format } from &quot;date-fns&quot;;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react'
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
  } = useWebhooks(),
=======


export function WebhooksManager() {_const {
    webhooks, _loading, _testResult, _fetchWebhooks, _createWebhook, _toggleWebhook, _deleteWebhook, _testWebhook, _clearTestResult} = useWebhooks();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),

  // Create webhook form state
<<<<<<< HEAD
  const [webhookName, setWebhookName] = useState(""),
  const [webhookUrl, setWebhookUrl] = useState(""),
  const [webhookSecret, setWebhookSecret] = useState(""),
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),
=======
  const [webhookName, setWebhookName] = useState("&quot;);
  const [webhookUrl, setWebhookUrl] = useState("&quot;);
  const [webhookSecret, setWebhookSecret] = useState("&quot;);
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Load webhooks on mount
<<<<<<< HEAD
  useEffect(() => {
    fetchWebhooks()
  }, []),

  const handleCreateWebhook = async () => {
<<<<<<< HEAD
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,
=======
    if (webhookName.trim() === "&quot; || webhookUrl.trim() === "&quot; || selectedEvents.length === 0) return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    await createWebhook(
      webhookName, 
      webhookUrl, 
      selectedEvents, 
<<<<<<< HEAD
      webhookSecret.trim() === "" ? undefined : webhookSecret
    ),
=======
      webhookSecret.trim() === "&quot; ? undefined : webhookSecret
=======
  useEffect__(() => {_fetchWebhooks();}, []);

  const _handleCreateWebhook = async () => {_if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return;
    
    await createWebhook(
      webhookName, _webhookUrl, _selectedEvents, _webhookSecret.trim() === "" ? undefined : webhookSecret
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
<<<<<<< HEAD
    setShowCreateDialog(false),
    resetWebhookForm()
  },

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  },

  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId),
    setShowDeleteConfirm(null)
  },

  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType),
    setShowTestResult(true)
  },

  const resetWebhookForm = () => {
<<<<<<< HEAD
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setSelectedEvents([])
  },
=======
    setWebhookName("&quot;);
    setWebhookUrl("&quot;);
    setWebhookSecret("");
    setSelectedEvents([]);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],
=======
    setShowCreateDialog(false);
    resetWebhookForm();};

  const _handleToggleStatus = async (_webhookId: string, _currentStatus: boolean) => {_await toggleWebhook(webhookId, _!currentStatus);};

  const _handleDeleteWebhook = async (_webhookId: string) => {_await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);};

  const _handleTestWebhook = async (_webhookId: string) => {_await testWebhook(webhookId, _testEventType);
    setShowTestResult(true);};

  const _resetWebhookForm = () => {_setWebhookName("");
    setWebhookUrl("");
    setWebhookSecret("");
    setSelectedEvents([]);};

  // Event type options
  const eventOptions: {_value: WebhookEventType; label: string; description: string}[] = [
    {_value: 'new_application', _label: 'New Application', _description: 'When a talent applies to a job'},
    {_value: 'quote_received', _label: 'Quote Received', _description: 'When a quote is received from talent'},
    {_value: 'milestone_approved', _label: 'Milestone Approved', _description: 'When a project milestone is approved'},
    {_value: 'talent_hired', _label: 'Talent Hired', _description: 'When talent is hired for a project'}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Toggle an event selection
  const _toggleEvent = (_event: WebhookEventType) => {_setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event) 
<<<<<<< HEAD
        : [...prev, event]
    )
  },
=======
        : [...prev, _event]
    );};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Webhook className="mr-2" size={_20} /> Webhooks
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">
<<<<<<< HEAD
          <p className="text-sm text-zinc-400&quot;>
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
=======
          <p className="text-sm text-zinc-400">
            You have {_webhooks.length} {_webhooks.length === 1 ? 'webhook' : 'webhooks'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
          
          <Dialog open={_showCreateDialog} onOpenChange={_setShowCreateDialog}>
            <DialogTrigger asChild>
<<<<<<< HEAD
              <Button variant=&quot;default">
                <Plus size={16} className="mr-1" /> Add Webhook
=======
              <Button variant="default">
                <Plus size={_16} className="mr-1" /> Add Webhook
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                    id=&quot;webhook-name&quot;
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder=&quot;e.g. Application Notifications"
=======
                    id="webhook-name"
                    value={_webhookName}
                    onChange={_(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                
<<<<<<< HEAD
                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;webhook-url&quot;>Endpoint URL</Label>
                  <Input
                    id=&quot;webhook-url&quot;
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder=&quot;https://example.com/webhook"
=======
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Endpoint window.URL</Label>
                  <Input
                    id="webhook-url"
                    value={_webhookUrl}
                    onChange={_(_e) => setWebhookUrl(e.target.value)}
                    placeholder="https://example.com/webhook"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    The window.URL where webhook payloads will be sent when events occur.
                  </p>
                </div>

                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;webhook-secret&quot;>Secret Key (Optional)</Label>
                  <Input
<<<<<<< HEAD
                    id=&quot;webhook-secret&quot;
                    type=&quot;password&quot;
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder=&quot;Enter secret key&quot;
                    aria-label=&quot;Secret key"
=======
                    id="webhook-secret"
                    type="password"
                    value={_webhookSecret}
                    onChange={_(_e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key"
                    aria-label="Secret key"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">
                    {_eventOptions.map(_(event) => (
                      <div key={event.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={_event.value} 
                          checked={_selectedEvents.includes(event.value)}
                          onCheckedChange={_() => toggleEvent(event.value)}
                        />
                        <Label
                          htmlFor={_event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
<<<<<<< HEAD
                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1&quot;>{event.description}</span>
=======
                          {_event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{_event.description}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
<<<<<<< HEAD
<<<<<<< HEAD
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),
                  resetWebhookForm()
=======
                <Button variant=&quot;outline&quot; onClick={() => {
                  setShowCreateDialog(false);
                  resetWebhookForm();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                }}>
                  Cancel
                </Button>
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "&quot; || 
=======
                <Button variant="outline" onClick={_() => {
                  setShowCreateDialog(false);
                  resetWebhookForm();}}>
                  Cancel
                </Button>
                <Button onClick={_handleCreateWebhook} disabled={_webhookName.trim() === "" || 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0}>
                  Create Webhook
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {_/* Webhooks List */}
        <div className="space-y-4">
          {_loading ? (
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>
          ) : webhooks.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />
              <p>No webhooks found.</p>
              <p className="text-sm mt-1">Create one to receive event notifications.</p>
            </div>
          ) : (_webhooks.map((webhook) => (_<div key={_webhook.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{_webhook.name}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <Globe size={_14} className="mr-1" />
                      <span className="max-w-md truncate">{_webhook.url}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center mr-2&quot;>
                      <Switch
<<<<<<< HEAD
                        aria-label=&quot;Toggle webhook"
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />
                      <span className="ml-2 text-sm&quot;>
                        {webhook.is_active ? &quot;Active&quot; : &quot;Inactive&quot;}
=======
                        aria-label="Toggle webhook"
                        checked={_webhook.is_active}
                        onCheckedChange={_() => handleToggleStatus(webhook.id, _webhook.is_active)}
                      />
                      <span className="ml-2 text-sm">
                        {_webhook.is_active ? "Active" : "Inactive"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                    
                      <DropdownMenu>
                      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
                        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; aria-label=&quot;More options&quot;>
                          <MoreVertical size={16} />
=======
                        <Button variant="ghost" size="icon" aria-label="More options">
                          <MoreVertical size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align=&quot;end" className="bg-zinc-900 border-zinc-800 text-white">
                        <DropdownMenuItem
                          onClick={_() => setShowTestDialog(webhook.id)}
                          className="cursor-pointer"
                        >
                          <PlayCircle size={_14} className="mr-2" /> Test
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={_() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500"
                        >
                          <X size={_14} className="mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
<<<<<<< HEAD
                <div className="mt-3 flex flex-wrap gap-2&quot;>
                  {webhook.event_types.map((event: WebhookEventType) => (
=======
                <div className="mt-3 flex flex-wrap gap-2">
                  {_webhook.event_types.map(_(event: WebhookEventType) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <Badge 
                      key={event} 
                      variant=&quot;secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
                      {_event}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {_format(new Date(webhook.created_at), _'MMM d, _yyyy')}</span>
                  {_webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), _'MMM d, _yyyy HH:mm')}</span>
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
<<<<<<< HEAD
        <Button variant=&quot;outline&quot; size=&quot;sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh
=======
        <Button variant="outline" size="sm" onClick={_fetchWebhooks}>
          <RefreshCw size={_14} className="mr-1" /> Refresh
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Button>
      </CardFooter>

      {_/* Test Webhook Dialog */}
      <Dialog 
        open={_showTestDialog !== null} 
        onOpenChange={_(_open) => {
          if (!open) {
            setShowTestDialog(null),
            setTestEventType('new_application'),
            if (showTestResult) {
<<<<<<< HEAD
              setShowTestResult(false),
              clearTestResult()
            }
=======
              setShowTestResult(false);
              clearTestResult();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          
          {_!showTestResult ? (_<>
              <div className="space-y-4 py-4">
                <div className="space-y-2&quot;>
                  <Label htmlFor=&quot;test-event-type">Event Type</Label>
                  <Select
                    value={testEventType}
                    onValueChange={_(value) => setTestEventType(value as WebhookEventType)}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700&quot;>
                      <SelectValue placeholder=&quot;Select an event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {_eventOptions.map(_(option) => (
                        <SelectItem key={option.value} value={_option.value}>
                          {_option.label}
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
<<<<<<< HEAD
                <Button variant=&quot;outline" onClick={() => setShowTestDialog(null)}>
=======
                <Button variant="outline" onClick={_() => setShowTestDialog(null)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Cancel
                </Button>
                <Button onClick={_() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
                </Button>
              </DialogFooter>
            </>
          ) : (_<>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge
<<<<<<< HEAD
                      className={
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700&quot;
                          : &quot;bg-red-700"
                      }
=======
                      className={_testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      {_testResult?.status} {_testResult?.statusText}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
<<<<<<< HEAD
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all&quot;>
                        {testResult?.responseBody || &quot;No response body&quot;}
=======
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {_testResult?.responseBody || "No response body"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
<<<<<<< HEAD
<<<<<<< HEAD
                <Button variant="default" onClick={() => {
                  setShowTestDialog(null),
                  setShowTestResult(false),
                  clearTestResult()
                }}>
                  Close
                </Button>
                <Button variant="outline" onClick={() => {
                  setShowTestResult(false),
                  clearTestResult()
=======
                <Button variant=&quot;default&quot; onClick={() => {
=======
                <Button variant="default" onClick={_() => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  setShowTestDialog(null);
                  setShowTestResult(false);
                  clearTestResult();}}>
                  Close
                </Button>
<<<<<<< HEAD
                <Button variant=&quot;outline" onClick={() => {
                  setShowTestResult(false);
                  clearTestResult();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                }}>
=======
                <Button variant="outline" onClick={_() => {
                  setShowTestResult(false);
                  clearTestResult();}}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Test Another Event
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {_/* Delete Webhook Confirmation Dialog */}
      <AlertDialog 
        open={_showDeleteConfirm !== null} 
        onOpenChange={_(_open) => !open && setShowDeleteConfirm(null)}
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
<<<<<<< HEAD
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700"
=======
              onClick={_() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}

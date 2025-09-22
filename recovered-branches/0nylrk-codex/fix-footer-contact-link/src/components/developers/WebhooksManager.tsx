
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from "react";
import {format} from "date-fns";
import {Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X} from "lucide-react";
import {useWebhooks, type, WebhookEventType} from "@/hooks/useWebhooks";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function WebhooksManager() {
=======
export function WebhooksManager() {

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import {useState, useEffect} from "react";"
import {format} from "date-fns";"
import {Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X} from "lucide-react";"
import {useWebhooks, type, WebhookEventType} from "@/hooks/useWebhooks";"
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";"
import {Input} from "@/components/ui/input";"
import {Checkbox} from "@/components/ui/checkbox";"
import {Label} from "@/components/ui/label";"
import {Badge} from "@/components/ui/badge";"
import {Switch} from "@/components/ui/switch";"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";"
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";"
import {ScrollArea} from "@/components/ui/scroll-area";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export function WebhooksManager() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const {;
    webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;

  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
  // Create webhook form state;

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
"
  const [webhookName, setWebhookName] = useState("");"
  const [webhookUrl, setWebhookUrl] = useState("");"
  const [webhookSecret, setWebhookSecret] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",
=======

export function WebhooksManager() {import { useState, useEffect } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

export function WebhooksManager() {import { useState, useEffect } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { format } from "date-fns",
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",
=======
"
import { useState, useEffect } from "react","
import { format } from "date-fns","
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",
"
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog","
import { Input } from "@/components/ui/input","
import { Checkbox } from "@/components/ui/checkbox","
import { Label } from "@/components/ui/label","
import { Badge } from "@/components/ui/badge","
import { Switch } from "@/components/ui/switch","
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu","
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog","
import { ScrollArea } from "@/components/ui/scroll-area","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

export function WebhooksManager() {}
  const {}
    webhooks,
    loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
<<<<<<< HEAD
    testWebhook,

  } = useWebhooks(),

  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),

// Create webhook form state"
  const [webhookName, setWebhookName] = useState(""),"
  const [webhookUrl, setWebhookUrl] = useState(""),"
  const [webhookSecret, setWebhookSecret] = useState(""),
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),'
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

;
;
  // Load webhooks on mount;
  useEffect(() => {}
    fetchWebhooks()
  }, []),

<<<<<<< HEAD
  const handleCreateWebhook = async () => {
<<<<<<< HEAD
<<<<<<< HEAD

    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

    if (webhookName.trim() === "" |webhookUrl.trim() === "" |selectedEvents.length === 0) return;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    await createWebhook(
      webhookName
      webhookUrl
      selectedEvents
      webhookSecret.trim() === "" ? undefined : webhookSecret
=======
  const handleCreateWebhook = async () => {}
    await createWebhook(
      webhookName;
      webhookUrl;
      selectedEvents"
      webhookSecret.trim() === "" ? undefined : webhookSecret;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    resetWebhookForm()
  }
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {}
    await toggleWebhook(webhookId, !currentStatus)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ),
=======
    await createWebhook(
      webhookName
      webhookUrl
      selectedEvents
      webhookSecret.trim() === "" ? undefined : webhookSecret

    resetWebhookForm()
  }
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  }
    ),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    setShowCreateDialog(false),
    resetWebhookForm()
  },

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null)

  },

  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)

  },

  const resetWebhookForm = () => {
    setWebhookName("");
    setWebhookUrl("");
=======

  },

  const resetWebhookForm = () => {"
    setWebhookName("");"
    setWebhookUrl("");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setWebhookSecret("");
<<<<<<< HEAD
    setSelectedEvents([])

<<<<<<< HEAD
<<<<<<< HEAD
=======
    setSelectedEvents([])

  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' }
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' }
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' }

    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }]
  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {}
=======
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }]
  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setSelectedEvents(prev =>
      prev.includes(event)
        ? prev.filter(e => e !== event)
        : [...prev, event]
    )
<<<<<<< HEAD

  },

<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
=======
    setSelectedEvents([])  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    setSelectedEvents([])  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>"
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>"
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
      <CardContent>"
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">'
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>"
              <Button variant="default">"
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>"
                <DialogDescription className="text-zinc-400">
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-name">Webhook Name</Label>
                  <Input"
                    id="webhook-name"
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}"
                    placeholder="e.g. Application Notifications""
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-url">Endpoint URL</Label>
                  <Input"
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}"
                    placeholder="https://example.com/webhook""
                    className="bg-zinc-800 border-zinc-700"
                  />"
                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.
                  </p>
                </div>"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input
                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="••••••••••••••••"
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",;
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Input } from "@/components/ui/input",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",;
import { ScrollArea } from "@/components/ui/scroll-area",;
=======
"
import { useState, useEffect } from "react",;"
import { format } from "date-fns",;"
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",;"
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;"
import { Input } from "@/components/ui/input",;"
import { Checkbox } from "@/components/ui/checkbox",;"
import { Label } from "@/components/ui/label",;"
import { Badge } from "@/components/ui/badge",;"
import { Switch } from "@/components/ui/switch",;"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",;"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",;"
import { ScrollArea } from "@/components/ui/scroll-area",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
export function WebhooksManager() { return null; }
  } = useWebhooks(),;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),;
  const [showTestResult, setShowTestResult] = useState(false),;
  // Create webhook form state;"
  const [webhookName, setWebhookName] = useState(""),;"
  const [webhookUrl, setWebhookUrl] = useState(""),;"
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;'
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),;
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
<<<<<<< HEAD
  }, []),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleCreateWebhook = async () => {;
=======

  const handleCreateWebhook = async () => {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (webhookName && webhookName.trim() === "" || webhookUrl && webhookUrl.trim() === "" || selectedEvents && selectedEvents.length === 0) return;

=======
  }, []),;

  const handleCreateWebhook = async () => {;
    if (webhookName && webhookName.trim() === "" || webhookUrl && webhookUrl.trim() === "" || selectedEvents && selectedEvents.length === 0) return;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    await createWebhook(;
      webhookName, ;
      webhookUrl, ;
      selectedEvents, ;
"
      webhookSecret && webhookSecret.trim() === "" ? undefined : webhookSecret;
    );

    setShowCreateDialog(false);
    resetWebhookForm();
  };

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {;
    await toggleWebhook(webhookId, !currentStatus);
  };

  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  };

  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);
  };

const resetWebhookForm = () => {;"
    setWebhookName("");"
    setWebhookUrl("");"
    setWebhookSecret("");
    setSelectedEvents([]);
  };

// Event type options;
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [;'
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },;'
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },;'
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },;'
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],;

  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;

    setSelectedEvents(prev => ;
      prev && prev.includes(event) ;
        ? prev && prev.filter(e => e !== event) ;
        : [...prev, event];
    );
  };

  return (
"
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;"
        <CardTitle className="text-xl flex items-center">;"
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;"
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;

<CardContent>;"
        <div className="flex justify-between items-center mb-6">;"
          <p className="text-sm text-zinc-400">;'
            You have {webhooks && webhooks.length} {webhooks && webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;"
              <Button variant="default">;"
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;"
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;

"
              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <Label htmlFor="webhook-name">Webhook Name</Label>;
                  <Input"
                    id="webhook-name"
                    value={webhookName}
                    onChange={(e) => setWebhookName(e && e.target.value)}"
                    placeholder="e && e.g. Application Notifications";"
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;
"
                <div className="space-y-2">;"
                  <Label htmlFor="webhook-url">Endpoint URL</Label>;
                  <Input"
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e && e.target.value)}"
                    placeholder="https://example && example.com/webhook";

"
                    className="bg-zinc-800 border-zinc-700";
                  />;"
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;

"
                <div className="space-y-2">;"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Input
=======
  }, []),;                  <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }, []),;                  <Input
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;

                  <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}

                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="••••••••••••••••"
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

                    onChange={(e) => setWebhookSecret(e && e.target.value)}
                    placeholder="••••••••••••••••";
=======

                  <Input"
                    id="webhook-secret""
                    type="password"
                    value={webhookSecret}

                    onChange={(e) => setWebhookSecret(e.target.value)}"
                    placeholder="••••••••••••••••""
                    className="bg-zinc-800 border-zinc-700"
                  />"
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>"
                <div className="space-y-2">
                  <Label>Event Types</Label>"
                  <div className="grid gap-2 pt-2">
                    {eventOptions.map((event) => ("
                      <div key={event.value} className="flex items-center space-x-2">

                    onChange={(e) => setWebhookSecret(e && e.target.value)}

"
                    placeholder="••••••••••••••••";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="bg-zinc-800 border-zinc-700";
                  />;"
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;
{eventOptions && eventOptions.map((event) => (;
                      <div key={event && event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event && event.value} 
                          checked={selectedEvents && selectedEvents.includes(event && event.value)}
                          onCheckedChange={() => toggleEvent(event && event.value)}
                        />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                        <Checkbox;
                          id={event.value} 

                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <Label
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        <Label
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >

                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
<Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),
                  resetWebhookForm()
                }}>
                  Cancel
                </Button>
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "" |
                  webhookUrl.trim() === "" |
                  selectedEvents.length === 0
                }>
                  Create Webhook
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <Label
                          htmlFor={event && event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {event && event.label}"
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                        </Label>;
                      </div>;
                    ))}

<Label;
                        </Label>;
                      </div>;
                    ))}
'
import { useState, useEffect } from './react';'
import { format } from './date - fns';'
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from './lucide-react';'
import { use_webhooks, type, WebhookEventType } from '@/hooks / use_webhooks';
;'
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';'
import { Input } from '@/components / ui / input';'
import { Checkbox } from '@/components / ui / checkbox';'
import { Label } from '@/components / ui / label';'
import { Badge } from '@/components / ui / badge';'
import { Switch } from '@/components / ui / switch';'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components / ui / alert - dialog';'
import { ScrollArea } from '@/components / ui / scroll - area';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
export /**;
 * WebhooksManager - Function description;
 */
function WebhooksManager() {}
  const {}
    webhooks;
    loading;
    test_result;
    fetch_webhooks;
    create_webhook;
    toggle_webhook;
    delete_webhook;
    test_webhook;
    clearTestResult;
  } = use_webhooks ();
;
  const [showCreateDialog, setShowCreateDialog] = useState (false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);
  const [showTestResult, setShowTestResult] = useState (false);
;
// Create webhook form state;"
  const [webhook_name, setWebhookName] = useState ("");"
  const [webhook_url, setWebhookUrl] = useState ("");"
  const [webhook_secret, setWebhookSecret] = useState ("");
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);'
  const [testEventType, setTestEventType] = useState < WebhookEventType>('new_application');
;
  // Load webhooks on mount;
  useEffect (() => {}
    fetch_webhooks ();
  }, []);
;
  const handleCreateWebhook = async () => {"
    if (=== "" || webhook_url.trim () === "" || selected_events.length === 0) return) {}
  $2;
}
    await create_webhook (
      webhook_name,
      webhook_url,
selected_events,"
      webhook_secret.trim () === "" ? undefined : webhook_secret);
;
    setShowCreateDialog (false);
    resetWebhookForm ();
  }
;
const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {}
    await toggle_webhook (webhook_id, !current_status);
  }
;
  const handleDeleteWebhook = async (webhook_id: string) => {}
    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  }
;
const handleTestWebhook = async (webhook_id: string) => {}
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  }
;
const resetWebhookForm = () =>: any {"
    setWebhookName ("");"
    setWebhookUrl ("");"
    setWebhookSecret ("");
    setSelectedEvents ([]);
  }
;
  // Event type options;
const event_options: { value: WebhookEventType, label: string, description: string }[] = [;'
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },'
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },'
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },'
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],
  // Toggle an event selection;
  const toggle_event = (event: WebhookEventType) =>: any {}
    setSelectedEvents (prev =>;
      prev.includes (event);
        ? prev.filter (e => e !== event);
        : [...prev, event]);
  }
;
return ("
    <Card className="bg - zinc - 900 border - zinc - 800 text - white">;
      <CardHeader>;"
        <CardTitle className="text - xl flex items - center">;"
          <Webhook className="mr - 2" size={20} /> Webhooks;
        </CardTitle>;"
        <CardDescription className="text - zinc - 400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
<CardContent>;"
        <div className="flex justify - between items - center mb - 6">;"
          <p className="text - sm text - zinc - 400">;'
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;"
              <Button variant="default">;"
                <Plus size={16} className="mr - 1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;"
            <DialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
              <DialogHeader>;
                <DialogTitle > Create Webhook</DialogTitle>;"
                <DialogDescription className="text - zinc - 400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;"
              <div className="space - y-4 py - 4">;"
                <div className="space - y-2">;"
                  <Label html_for="webhook - name">Webhook Name</Label>;
                  <Input;"
                    id="webhook - name";
                    value={webhook_name}
                    on_change={(e) => setWebhookName (e.target.value)}"
                    placeholder="e.g. Application Notifications";"
                    className="bg - zinc - 800 border - zinc - 700";
                  />;
                </div>;"
                <div className="space - y-2">;"
                  <Label html_for="webhook - url">Endpoint URL</Label>;
                  <Input;"
                    id="webhook - url";
                    value={webhook_url}
                    on_change={(e) => setWebhookUrl (e.target.value)}"
                    placeholder="https://example.com / webhook";"
                    className="bg - zinc - 800 border - zinc - 700";
                  />;"
                  <p className="text - xs text - zinc - 500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;"
                <div className="space - y-2">;"
                  <Label html_for="webhook - secret">Secret Key (Optional)</Label>;
                  <Input;"
                    id="webhook - secret";"
                    type="password";
                    value={webhook_secret}
                    on_change={(e) => setWebhookSecret (e.target.value)}"
                    placeholder="••••••••••••••••";"
                    className="bg - zinc - 800 border - zinc - 700";
                  />;"
                  <p className="text - xs text - zinc - 500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;"
                <div className="space - y-2">;
                  <Label > Event Types</Label>;"
                  <div className="grid gap - 2 pt - 2">;
                    {event_options.map ((event) => ("
                      <div key={event.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={event.value}
                          checked={selected_events.includes (event.value)}
                          onCheckedChange={() => toggle_event (event.value)}
                        />;
                        <Label;
html_for={event.value}"
                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                          {event.label}
<<<<<<< HEAD
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),
                  resetWebhookForm()
                }}>
                  Cancel
                </Button>
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "" |
                  webhookUrl.trim() === "" |
                  selectedEvents.length === 0
                }>
                  Create Webhook
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;

        "
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;

                        </Label>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
<DialogFooter>;"
                <Button variant="outline" on_click={() => {}
                  setShowCreateDialog (false);
                  resetWebhookForm ();
                }}>;
                  Cancel;
                </Button>;
<Button on_click={handleCreateWebhook} disabled={"
                  webhook_name.trim () === "" ||;"
                  webhook_url.trim () === "" ||;
                  selected_events.length === 0;
                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Webhooks List */}
        <div className="space - y-4">;
          {loading ? (

                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus (webhook.id, webhook.is_active)}
                      />;"
                      <span className="ml - 2 text - sm">;"
                        {webhook.is_active ? "Active" : "Inactive"}
                  )}
                </div>
              </div>
            ))
          )}
<<<<<<< HEAD
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh
        </Button>
      </CardFooter>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {}
              setShowTestResult(false);
              clearTestResult()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {
              setShowTestResult(false);
              clearTestResult()

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant="outline" onClick={() => {;
                  setShowCreateDialog(false);
                  resetWebhookForm();
                }}>;
                  Cancel;
                </Button>;
                <ButtononClick={handleCreateWebhook} disabled={
                  webhookName && webhookName.trim() === "" || 
                  webhookUrl && webhookUrl.trim() === "" || 
                  selectedEvents && selectedEvents.length === 0
                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        {/* Webhooks List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) : webhooks && webhooks.length === 0 ? (;
            <div className="text-center py-8 text-zinc-500">;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) : (;
            webhooks && webhooks.map((webhook) => (;
              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div>;
                    <h3 className="font-medium">{webhook && webhook.name}</h3>;
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;
                      <Globe size={14} className="mr-1" />;
                      <span className="max-w-md truncate">{webhook && webhook.url}</span>;
                    </div>;
                  </div>;

                  <div className="flex items-center space-x-2">;
                    <div className="flex items-center mr-2">;
                      <Switch
                        checked={webhook && webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook && webhook.id, webhook && webhook.is_active)}
                      />;
                      <span className="ml-2 text-sm">;
                        {webhook && webhook.is_active ? "Active" : "Inactive"}
                      </span>;
                    </div>;

                    <DropdownMenu>;
<DropdownMenuTrigger asChild>;                        <Button variant="ghost" size="icon">;
=======
                      <DropdownMenuTrigger asChild>;
                      </span>;
                    </div>;
                    <DropdownMenu>;
                      <DropdownMenuTrigger as_child>;

                        <Button variant="ghost" size="icon">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;

onClick={() => setShowDeleteConfirm(webhook && webhook.id)}
                          className="cursor-pointer text-red-500";
                        >;
<X size={14} className="mr-2" /> Delete;                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;

                </div>;
<div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook && webhook.last_triggered_at && (;
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;

                  )}
                </div>;
              </div>;
            ));
          )}

      <Dialog 
        open={showTestDialog !== null} 

        onOpenChange={(open) => {
if (!open) {      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>;"
          <RefreshCw size={14} className="mr-1" /> Refresh;
        </Button>;
      </CardFooter>;

      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null} 
        onOpenChange={(open) => {;
          if (!open) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {;
              setShowTestResult(false);
              clearTestResult();
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }
        }}

>;
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className="text-zinc-400">;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;

          {!showTestResult ? (;
            <>;"
              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <Label htmlFor="test-event-type">Event Type</Label>;

<Select            }
          }
        }}
                  <Select
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >;"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;"
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;"
                    <SelectContent className="bg-zinc-900 border-zinc-800">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      {eventOptions && eventOptions.map((option) => (;
                        <SelectItem key={option && option.value} value={option && option.value}>;
                          {option && option.label}
                        </SelectItem>;
                      ))}

</SelectContent>;
                  </Select>;
                  <p className="text-xs text-zinc-500">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    The event type will determine the structure of the test payload.;
                  </p>;
                </div>;
              </div>;                  clearTestResult()
=======

                    The event type will determine the structure of the test payload.;
                  </p>;
                </div>;
=======
                    <SelectContent className="bg-zinc-900 border-zinc-800">;
                      {eventOptions && eventOptions.map((option) => (;
                        <SelectItem key={option && option.value} value={option && option.value}>;
                          {option && option.label}
                        </SelectItem>;
                      ))}

                    </SelectContent>;
                  </Select>;
                  <p className="text-xs text-zinc-500">;
                    The event type will determine the structure of the test payload.;
                  </p>;
                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>;

=======
                <Button variant="default" onClick={() => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  setShowTestDialog(null),
                  setShowTestResult(false),
                  clearTestResult()

                }}>
                  Close;
                </Button>"
                <Button variant="outline" onClick={() => {}
                  clearTestResult()
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                }}>
                  Test Another Event;
                </Button>
              </DialogFooter>
            </>

<<<<<<< HEAD
                      className={
                        test_result && test_result.status >= 200 && test_result.status < 300;
                          ? "bg - green - 700";
                          : "bg - red - 700";
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}              ;
                    </Badge>;
                  </div>;

                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}
<DialogFooter>;
                <Button variant="outline" on_click={() => setShowTestDialog (null)}>;
                  Cancel;
                </Button>;
                <Button on_click={() => showTestDialog && handleTestWebhook (showTestDialog)}>;
                  Send Test;
                </Button>;
              </DialogFooter>;
            </>) : (
            <>;
              <div className="space - y-4 py - 4">;
                <div className="space - y-2">;
                  <div className="flex items - center justify - between">;
                    <Label > Response Status</Label>;
                    <Badge;

                      className={
                        test_result && test_result.status >= 200 && test_result.status < 300;
                          ? "bg - green - 700";
                          : "bg - red - 700";
                      }
                    >;
                      {test_result?.status} {test_result?.status_text}
                    </Badge>;
                  </div>;
                  <div className="space - y-2 mt - 4">;
                    <Label > Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;
                        {test_result?.response_body || "No response body"}
              ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <DialogFooter>;
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;
                  Cancel;
                </Button>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
                  Send Test;

                    </Badge>;
                  </div>;"
                  <div className="space-y-2 mt-4">;"
</div>
                    <Label>Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
</ScrollArea>"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"
</pre>
              <DialogFooter>;
</DialogFooter>"
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;"
</Button>
                </Button>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
</Button>

                </Button>;
              </DialogFooter>;
            </>;
          ) :(;
            <>;"
              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <div className="flex items-center justify-between">;
                    <Label>Response Status</Label>;
                    <Badge;
                      className={;
<<<<<<< HEAD
                        testResult && testResult.status >= 200 && testResult.status < 300;

                      className={}
                        testResult && testResult.status>= 200 && testResult.status < 300;
"
                          ? "bg-green-700";"
                          : "bg-red-700";
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}
<<<<<<< HEAD
<<<<<<< HEAD
                    </Badge>;
                  </div>;
                  ;
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;

;
              <DialogFooter>;
                <Button variant="default" onClick={() => {;
                  setShowTestDialog(null),;
                  setShowTestResult(false),;
                  clearTestResult(),;
                }}>;
                  Test Another Event;
                </Button>;
              <DialogFooter>;
                <Button variant="default" onClick={() => {;
                  setShowTestDialog(null),;
                  setShowTestResult(false);
                  clearTestResult();
                }}>;
                  Close;
                </Button>;
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);
                  clearTestResult();
                }}>;
Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          )}
=======
                        testResult && testResult.status >= 200 && testResult.status < 300;                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        testResult && testResult.status >= 200 && testResult.status < 300;                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;          )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;

          )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </DialogContent>
      </Dialog>
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">
              This action will permanently remove this webhook.
              You will no longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel;
            </AlertDialogCancel>
<AlertDialogAction
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                }}>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;
      </Dialog>;

onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;

                  Close;
                </Button>;"
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);

              This action will permanently remove this webhook.;
=======
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}              This action will permanently remove this webhook.;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null} 
;
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog ;
        open={showDeleteConfirm !== null} ;
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
<DialogFooter>;
                <Button variant="default" on_click={() => {
                  setShowTestDialog (null);
                  setShowTestResult (false);
                  clearTestResult ();
                }}>;
                  Close;
                </Button>;
                <Button variant="outline" on_click={() => {
                  setShowTestResult (false);
                  clearTestResult ();
                }}>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>)}
        </DialogContent>;
      </Dialog>;
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm (null)}
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;
                  Close;
                </Button>;
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);
              This action will permanently remove this webhook.;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

<<<<<<< HEAD
              className="bg-red-600 hover: bg-red-700";            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              className="bg-red-600 hover: bg-red-700";
<AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction ;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}"
              className="bg-red-600 hover:bg-red-700";"
              className="bg-red-600 hover: bg-red-700"
            >
Delete;
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}"
              className="bg-red-600 hover: bg-red-700";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            >;
              Delete;

import {useState, useEffect} from "react";""
import {format} from "date-fns";""
import {Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X} from "lucide-react";""
import {useWebhooks, type, WebhookEventType} from "@/hooks/useWebhooks";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";""
import {Input} from "@/components/ui/input";""
import {Checkbox} from "@/components/ui/checkbox";""
import {Label} from "@/components/ui/label";""
import {Badge} from "@/components/ui/badge";""
import {Switch} from "@/components/ui/switch";""
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";""
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";""
import {ScrollArea} from "@/components/ui/scroll-area";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
export function WebhooksManager() {

  const {;
    webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

<<<<<<< HEAD
    </Card>;
  ); export function WebhooksManager () {}
  const {};
=======
    </Card>);
}

;
    </Card>);
    </Card>;
); export function WebhooksManager () {
  const {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  webhooks;
loading;
testResult;
fetchWebhooks;
createWebhook;
toggleWebhook;
deleteWebhook;
testWebhook;
clearTestResult;
}= useWebhooks ();
const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showTestDialog, setShowTestDialog] = useState<string | null> (null);
const [showTestResult, setShowTestResult] = useState (false);
//Create webhook form state //Load webhooks on mount await createWebhook (webhookName;
webhookUrl;
selectedEvents;
);
value: WebhookEventType, label: string, description: string;
}[] = [ {'
  value: 'new application', label: 'New Application', description: 'When a talent applies to a job' 
};
{'
  value: 'quote received', label: 'Quote Received', description: 'When a quote is received from talent' 
};
{'
  value: 'milestone approved', label: 'Milestone Approved', description: 'When a project milestone is approved' 
};
{'
  value: 'talent hired', label: 'Talent Hired', description: 'When talent is hired for a project' 
}];"
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {}
  20 "
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {}
  showCreateDialog;
}onOpenChange= {}
  setShowCreateDialog "
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {}
  eventOptions.map ( (event) => (<div key= {}
  event.value "
}className="flex items-center space-x-2"> <Checkbox id= {}
  event.value;
}checked= {}
  selectedEvents.includes (event.value) 
}onCheckedChange= {}
  () => toggleEvent (event.value) 
}/> <Label htmlFor= {}
  event.value "
}onOpenChange= {
  setShowCreateDialog;)"
}> <DialogTrigger asChild>   <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications.   <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional)  <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types <div className="grid gap-2 pt-2"> {"
  eventOptions.map ( (event) => (<div key= {
  event.value;"
}className="flex items-center space-x-2"> <Checkbox id= {"
}/> <Label htmlFor= {
event.value 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) )
}</div> </div> </div> <DialogFooter> 

<<<<<<< HEAD
}> Cancel </Button> <Button onClick= {}
  handleCreateWebhook;
}disabled= {"
  webhookName.trim () === ""|| 
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {}
  /* Webhooks List */ "
}<div className="space-y-4"> {"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {}
  24 "
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {}
  webhook.id "
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {}
  webhook.name "
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {}
  14 "
}className="mr-1"/> <span className="max-w-md truncate"> {}
  webhook.url "
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch checked= {}
  webhook.is active;
}onCheckedChange= {}
  () => handleToggleStatus (webhook.id, webhook.is active) "
}/> </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick= {}
  () => setShowTestDialog (webhook.id) "
}className="cursor-pointer"> <PlayCircle size= {}
  14 "
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick= {}
  () => setShowDeleteConfirm (webhook.id) "
}className="cursor-pointer text-red-500"> <X size= {}
  14 "
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {}
  event "
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {}
  event;
}</Badge>) ) "
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {'
  format (new Date (webhook.created at), 'MMM d, yyyy') 
}</span> {}
  webhook.last triggered at && (<span>Last triggered: {'
  format (new Date (webhook.last triggered at), 'MMM d, yyyy HH:mm') 
}</span>) 
}</div> </div>) ) ) "
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {}
  /* Test Webhook Dialog */ 
}<Dialog open= {}
  showTestDialog !== null;
}onOpenChange= {}
  (open) => {}
  if (!open) {}
  setShowTestDialog (null);'
setTestEventType ('new application');
if (showTestResult) {}
}
}"
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {}
  testEventType;
}onValueChange= {}
  (value) => setTestEventType (value as WebhookEventType) "
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {}
  eventOptions.map ( (option) => (<SelectItem key= {}
  option.value;
}value= {}
  option.value;
}> {}
  option.label;
}</SelectItem>) ) "
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick= {}
  () => showTestDialog && handleTestWebhook (showTestDialog) "
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {}
  testResult?.status;
}{}
  testResult?.statusText "
}</span> {
  webhook.last triggered at && (<span>Last triggered: {
</span>)
}</span>) 
}</div> </div>) ) ) "
}</div>  <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div>   {"
}<Dialog open= {
  showTestDialog !== null;
  (open) => {
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint.   {"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type <Select value= {"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/>  <SelectContent className="bg-zinc-900 border-zinc-800"> {")
  eventOptions.map ( (option) => (<SelectItem key= {
  option.value;
}value= {
}> {
option.label 
}</SelectItem>) ) 
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick= {
  () => showTestDialog && handleTestWebhook (showTestDialog) 
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {
  testResult?.status 
}{
  testResult?.statusText 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();
}
}> Close </Button> Test Another Event </Button> </DialogFooter> </>) 
<<<<<<< HEAD
}</DialogContent> </Dialog> {}
  /* Delete Webhook Confirmation Dialog */ 
}<AlertDialog open= {}
  showDeleteConfirm !== null;
}onOpenChange= {}
  (open) => !open && setShowDeleteConfirm (null) "
}<AlertDialog open= {
  showDeleteConfirm !== null;
  (open) => !open && setShowDeleteConfirm (null) 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook? <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction > Delete     )"
pr-12325
</AlertDialog>"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)"
    </Card>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

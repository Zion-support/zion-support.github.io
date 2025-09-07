<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { format } from "date-fns",
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react";
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function WebhooksManager() {
  const {
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

export function WebhooksManager() {

=======
<<<<<<< HEAD

export function WebhooksManager() {

export function WebhooksManager() {
=======

export function WebhooksManager() {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const {;
    webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
<<<<<<< HEAD

  const [showCreateDialog, setShowCreateDialog] = useState(false);

=======
<<<<<<< HEAD
const [showCreateDialog, setShowCreateDialog] = useState(false);
=======

  const [showCreateDialog, setShowCreateDialog] = useState(false);
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
  // Create webhook form state;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
"
  const [webhookName, setWebhookName] = useState("");"
  const [webhookUrl, setWebhookUrl] = useState("");"
<<<<<<< HEAD
=======
=======
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [webhookSecret, setWebhookSecret] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react",

import { format } from "date-fns",
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",

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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    webhooks,
    loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
<<<<<<< HEAD

  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),
=======
<<<<<<< HEAD
=======
    testWebhook,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    clearTestResult
<<<<<<< HEAD
  } = useWebhooks();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
  // Create webhook form state
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");

  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),

<<<<<<< HEAD
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,
=======
  // Create webhook form state
  const [webhookName, setWebhookName] = useState(""),
  const [webhookUrl, setWebhookUrl] = useState(""),
  const [webhookSecret, setWebhookSecret] = useState(""),
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

    if (webhookName.trim() === "" |webhookUrl.trim() === "" |selectedEvents.length === 0) return;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

<<<<<<< HEAD
=======
  const handleCreateWebhook = async () => {
<<<<<<< HEAD
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,
    

    if (webhookName.trim() === "" |webhookUrl.trim() === "" |selectedEvents.length === 0) return;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,
    
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

<<<<<<< HEAD
    if (webhookName.trim() === "" |webhookUrl.trim() === "" |selectedEvents.length === 0) return;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    await createWebhook(
      webhookName
      webhookUrl
      selectedEvents
      webhookSecret.trim() === "" ? undefined : webhookSecret
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    resetWebhookForm()
  }
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {}
    await toggleWebhook(webhookId, !currentStatus)

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    );
    setShowCreateDialog(false);
    resetWebhookForm()
  }
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    ),
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setShowCreateDialog(false),
    resetWebhookForm()
  },

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  },
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null)
>>>>>>> merged-prs-20250907-203621

  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook($2);
    setShowDeleteConfirm(null)
  },

  const handleTestWebhook = async (webhookId: string) => {
<<<<<<< HEAD
    await testWebhook($2);
    setShowTestResult(true)
  },

  const resetWebhookForm = () => {
    setWebhookName($2);
    setWebhookUrl($2);
    setWebhookSecret($2);
    setSelectedEvents([])
  },

  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string}[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],

  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
=======
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },

<<<<<<< HEAD
  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)

  },

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const resetWebhookForm = () => {
    setWebhookName("");
    setWebhookUrl("");

    setWebhookSecret("");

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null)
  }
  },

  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType),
    setShowTestResult(true)
  }
  },

  const resetWebhookForm = () => {
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setSelectedEvents([])
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' }
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' }
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' }

    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }]
  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setSelectedEvents(prev =>
      prev.includes(event)
        ? prev.filter(e => e !== event)
        : [...prev, event]
    )
<<<<<<< HEAD

  },

=======
<<<<<<< HEAD
  },

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Webhook className="mr-2" size={20} /> Webhooks
        </CardTitle>
=======

  },

<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>"
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant="default">
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
                <div className="space-y-2">
                  <Label htmlFor="webhook-name">Webhook Name</Label>
                  <Input
                    id="webhook-name"
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications"
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Endpoint URL</Label>
                  <Input
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://example.com/webhook"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>
=======
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
                        <Checkbox
                          id={event.value}
<<<<<<< HEAD
=======
                        <Checkbox 
                          id={event.value} 
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
export function WebhooksManager() { return null; }
=======
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
export function WebhooksManager() {;
  const {;
    webhooks,;
    loading,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;
    clearTestResult;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } = useWebhooks(),;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),;
  const [showTestResult, setShowTestResult] = useState(false),;
<<<<<<< HEAD
  // Create webhook form state;"
  const [webhookName, setWebhookName] = useState(""),;"
  const [webhookUrl, setWebhookUrl] = useState(""),;"
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;'
=======
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState(""),;
  const [webhookUrl, setWebhookUrl] = useState(""),;
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),;
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
<<<<<<< HEAD

  const handleCreateWebhook = async () => {;

    if (webhookName && webhookName.trim() === "" || webhookUrl && webhookUrl.trim() === "" || selectedEvents && selectedEvents.length === 0) return;

    await createWebhook(;
      webhookName, ;
      webhookUrl, ;
      selectedEvents, ;

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

    setWebhookSecret("");
    setSelectedEvents([]);
  };

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

=======
  }, []),;
<<<<<<< HEAD
  const handleCreateWebhook = async () => {;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,;
    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;
      webhookSecret.trim() === "" ? undefined : webhookSecret;
    ),;
    setShowCreateDialog(false),;
    resetWebhookForm();
  },;
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {;
    await toggleWebhook(webhookId, !currentStatus);
  },;
  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;
  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType),;
    setShowTestResult(true);
  },;
  const resetWebhookForm = () => {;
    setWebhookName(""),;
    setWebhookUrl(""),;
    setWebhookSecret(""),;
    setSelectedEvents([]);
  },;
  // Event type options;
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [;
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },;
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },;
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },;
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],;
  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;
    setSelectedEvents(prev =>;
      prev.includes(event);
        ? prev.filter(e => e !== event);
        : [...prev, event];
    );
  },;
  return (;
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD

=======
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">;
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
<<<<<<< HEAD

=======
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-name">Webhook Name</Label>;
                  <Input;
                    id="webhook-name";
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-url">Endpoint URL</Label>;
                  <Input;
                    id="webhook-url";
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://example.com/webhook";
                    className="bg-zinc-800 border-zinc-700";
                  />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;
<<<<<<< HEAD

                  <Input

                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}
=======
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;
                  <Input;
                    id="webhook-secret";
                    type="password";
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="••••••••••••••••";
                    className="bg-zinc-800 border-zinc-700";
                  />;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

  const handleCreateWebhook = async () => {;

    if (webhookName && webhookName.trim() === "" || webhookUrl && webhookUrl.trim() === "" || selectedEvents && selectedEvents.length === 0) return;

<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",;
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",;
;
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
;
export function WebhooksManager() {;
  const {;
    webhooks,;
    loading,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;
    clearTestResult;
  } = useWebhooks(),;
  ;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),;
  const [showTestResult, setShowTestResult] = useState(false),;
;
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState(""),;
  const [webhookUrl, setWebhookUrl] = useState(""),;
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),;
;
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks(),;
  }, []),;
;
  const handleCreateWebhook = async () => {;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,;
    ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    await createWebhook(;
      webhookName, ;
      webhookUrl, ;
      selectedEvents, ;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  const handleCreateWebhook = async () => {;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,;
    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;
      webhookSecret.trim() === "" ? undefined : webhookSecret;
    ),;
    setShowCreateDialog(false),;
    resetWebhookForm();
  },;
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {;
    await toggleWebhook(webhookId, !currentStatus);
  },;
  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;
  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType),;
    setShowTestResult(true);
  },;
  const resetWebhookForm = () => {;
    setWebhookName(""),;
    setWebhookUrl(""),;
    setWebhookSecret(""),;
    setSelectedEvents([]);
  },;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

    setWebhookSecret("");
    setSelectedEvents([]);
  };

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Event type options;
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [;
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },;
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },;
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],;
<<<<<<< HEAD
  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;
      webhookSecret.trim() === "" ? undefined :webhookSecret;
    ),;
    ;
    setShowCreateDialog(false),;
    resetWebhookForm(),;
  },;
;
  const handleToggleStatus = async (webhookId:string, currentStatus:boolean) => {;
    await toggleWebhook(webhookId, !currentStatus),;
  },;
;
  const handleDeleteWebhook = async (webhookId:string) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;
;
  const handleTestWebhook = async (webhookId:string) => {;
    await testWebhook(webhookId, testEventType),;
    setShowTestResult(true),;
  },;
;
  const resetWebhookForm = () => {;
    setWebhookName(""),;
    setWebhookUrl(""),;
    setWebhookSecret(""),;
    setSelectedEvents([]),;
  },;
;
  // Event type options;
  const eventOptions:{ value:WebhookEventType, label:string, description:string }[] = [;
    { value:'new_application', label:'New Application', description:'When a talent applies to a job' },;
    { value:'quote_received', label:'Quote Received', description:'When a quote is received from talent' },;
    { value:'milestone_approved', label:'Milestone Approved', description:'When a project milestone is approved' },;
    { value:'talent_hired', label:'Talent Hired', description:'When talent is hired for a project' }],;
;
  // Toggle an event selection;
  const toggleEvent = (event:WebhookEventType) => {;
    setSelectedEvents(prev => ;
      prev.includes(event) ;
        ? prev.filter(e => e !== event) ;
        :[...prev, event];
    ),;
  },;
;
  return (;
    setSelectedEvents(prev =>;
      prev.includes(event);
        ? prev.filter(e => e !== event);
        : [...prev, event];
    );
  },;
  return (;
=======

  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;

    setSelectedEvents(prev => ;
      prev && prev.includes(event) ;
        ? prev && prev.filter(e => e !== event) ;
        : [...prev, event];
    );
  };

  return (
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
      ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' :'webhooks'}
          </p>;
          ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
=======

<<<<<<< HEAD
=======
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks && webhooks.length} {webhooks && webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">;
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
<<<<<<< HEAD
              ;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-name">Webhook Name</Label>;
                  <Input;
                    id="webhook-name";
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-url">Endpoint URL</Label>;
                  <Input;
                    id="webhook-url";
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://example.com/webhook";
=======

<<<<<<< HEAD
=======
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-name">Webhook Name</Label>;
                  <Input
                    id="webhook-name"
                    value={webhookName}
                    onChange={(e) => setWebhookName(e && e.target.value)}
                    placeholder="e && e.g. Application Notifications";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;

                <div className="space-y-2">;
                  <Label htmlFor="webhook-url">Endpoint URL</Label>;
                  <Input
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e && e.target.value)}
                    placeholder="https://example && example.com/webhook";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="bg-zinc-800 border-zinc-700";
                  />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <Input

                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}
<<<<<<< HEAD
                    onChange={(e) => setWebhookSecret(e && e.target.value)}
;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;
                  <Input;
                    id="webhook-secret";
                    type="password";
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    placeholder="••••••••••••••••";

                    className="bg-zinc-800 border-zinc-700";
                  />;"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (;
                      <div key={event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event.value} ;
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
                  <div className="grid gap-2 pt-2">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {eventOptions && eventOptions.map((event) => (;

                      <div key={event && event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event && event.value} 
                          checked={selectedEvents && selectedEvents.includes(event && event.value)}
                          onCheckedChange={() => toggleEvent(event && event.value)}
                        />;

<<<<<<< HEAD
                        <Checkbox;

                          id={event.value} 

=======
<<<<<<< HEAD
                        <Checkbox;

=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <Checkbox 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          id={event.value} 

                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        <Label
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />

                        <Label
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />

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
<<<<<<< HEAD
=======
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),
                  resetWebhookForm()
                }>
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        <Label
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {event && event.label}"

                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                        </Label>;
                      </div>;
                    ))}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import { useState, useEffect } from './react';
import { format } from './date - fns';
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from './lucide-react';
import { use_webhooks, type, WebhookEventType } from '@/hooks / use_webhooks';
;
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Input } from '@/components / ui / input';
import { Checkbox } from '@/components / ui / checkbox';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components / ui / alert - dialog';
import { ScrollArea } from '@/components / ui / scroll - area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
export /**
 * WebhooksManager - Function description
 */
function WebhooksManager() {
  const {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}
    await create_webhook (
      webhook_name,
      webhook_url,

      webhook_secret.trim () === "" ? undefined : webhook_secret);
;
    setShowCreateDialog (false);
    resetWebhookForm ();
  }
;

    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  }
;

    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  }
;

    setWebhookSecret ("");
    setSelectedEvents ([]);
  }
;
  // Event type options;

    setSelectedEvents (prev =>;
      prev.includes (event);
        ? prev.filter (e => e !== event);
        : [...prev, event]);
  }
;

        <CardDescription className="text - zinc - 400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;

                      <div key={event.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={event.value}
                          checked={selected_events.includes (event.value)}
                          onCheckedChange={() => toggle_event (event.value)}
                        />;
                        <Label;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                          html_for={event.value}
                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {event.label}
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;

        "

                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;

                        </Label>;
                      </div>))}
                  </div>;
                </div>;
              </div>;

                  setShowCreateDialog (false);
                  resetWebhookForm ();
                }}>;
                  Cancel;
                </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                <Button on_click={handleCreateWebhook} disabled={
                  webhook_name.trim () === "" ||;
                  webhook_url.trim () === "" ||;
                  selected_events.length === 0;
<<<<<<< HEAD
                ;
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (;
                      <div key={event.value} className="flex items-center space-x-2">;
                        <Checkbox ;
                          id={event.value} ;
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />;
                        <Label;
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
        
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
                        </Label>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant="outline" onClick={() => {;
                  setShowCreateDialog(false),;
                  resetWebhookForm();
                }}>;
                  Cancel;
                </Button>;
                <Button onClick={handleCreateWebhook} disabled={;
                  webhookName.trim() === "" ||;
                  webhookUrl.trim() === "" ||;
                  selectedEvents.length === 0;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
<<<<<<< HEAD

        <div className="space - y-4">;
=======
<<<<<<< HEAD
=======

        <div className="space - y-4">;
          {loading ? (

<<<<<<< HEAD
=======
            <div className="text - center py - 8 text - zinc - 500">Loading webhooks...</div>) : webhooks.length === 0 ? (
            <div className="text - center py - 8 text - zinc - 500">;
              <Webhook className="mx - auto mb - 2 opacity - 30" size={24} />;
              <p > No webhooks found.</p>;
              <p className="text - sm mt - 1">Create one to receive event notifications.</p>;
            </div>) : (
            webhooks.map ((webhook) => (
              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;
                <div className="flex items - center justify - between">;
                  <div>;
                    <h3 className="font - medium">{webhook.name}</h3>;
                    <div className="flex items - center text - sm text - zinc - 400 mt - 1">;
                      <Globe size={14} className="mr - 1" />;
                      <span className="max - w-md truncate">{webhook.url}</span>;
                    </div>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <div className="flex items - center mr - 2">;
                      <Switch;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus (webhook.id, webhook.is_active)}
                      />;"
                      <span className="ml - 2 text - sm">;"
                        {webhook.is_active ? "Active" : "Inactive"}
<<<<<<< HEAD
        {/* Webhooks List */}
        <div className="space-y-4">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
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
<<<<<<< HEAD
      {/* Test Webhook Dialog */}
      <Dialog
        open={showTestDialog !== null}
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog($2);
            setTestEventType($2);
            if (showTestResult) {
              setShowTestResult($2);
              clearTestResult()
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
                <div className="space-y-2">
                  <Label htmlFor="test-event-type">Event Type</Label>
                  <Select
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
=======
      {/* Test Webhook Dialog */}
      <Dialog
        open={showTestDialog !== null}
      <Dialog 
        open={showTestDialog !== null} 
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {
              setShowTestResult(false);
              clearTestResult()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  )}
                </div>
              </div>
            ))
          )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null);

            setTestEventType('new_application');
            if (showTestResult) {}
              setShowTestResult(false);
              clearTestResult()

                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <DialogFooter>;
                <Button variant="outline" onClick={() => {;
                  setShowCreateDialog(false);
                  resetWebhookForm();
                }>;
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                    <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;
=======

                    <DropdownMenu>;
<<<<<<< HEAD

                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;

=======
<<<<<<< HEAD

=======
                      <DropdownMenuTrigger asChild>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </span>;
                    </div>;
                    <DropdownMenu>;
                      <DropdownMenuTrigger as_child>;
<<<<<<< HEAD
        ;
        {/* Webhooks List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) :webhooks.length === 0 ? (;
            <div className="text-center py-8 text-zinc-500">;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) :(;
            webhooks.map((webhook) => (;
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div>;
                    <h3 className="font-medium">{webhook.name}</h3>;
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;
                      <Globe size={14} className="mr-1" />;
                      <span className="max-w-md truncate">{webhook.url}</span>;
                    </div>;
                  </div>;
                  ;
                  <div className="flex items-center space-x-2">;
                    <div className="flex items-center mr-2">;
                      <Switch;
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />;
                      <span className="ml-2 text-sm">;
                        {webhook.is_active ? "Active" :"Inactive"}
                      </span>;
                    </div>;
                    ;
                    <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <Button variant="ghost" size="icon">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
<<<<<<< HEAD
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook.id)}
                          className="cursor-pointer";
                        >;
                          <PlayCircle size={14} className="mr-2" /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500";
                        >;
                          <X size={14} className="mr-2" /> Delete;
=======

<<<<<<< HEAD
=======
                          onClick={() => setShowDeleteConfirm(webhook && webhook.id)}
                          className="cursor-pointer text-red-500";
                        >;
                          <X size={14} className="mr-2" /> Delete;
=======
                      <DropdownMenuContent align="end" className="bg - zinc - 900 border - zinc - 800 text - white">;
                        <DropdownMenuItem;
                          on_click={() => setShowTestDialog (webhook.id)}
                          className="cursor - pointer";
                        >;
                          <PlayCircle size={14} className="mr - 2" /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
                          on_click={() => setShowDeleteConfirm (webhook.id)}
                          className="cursor - pointer text - red - 500";
                        >;
                          <X size={14} className="mr - 2" /> Delete;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </DropdownMenuItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;
<<<<<<< HEAD
                  )}
                ;
                <div className="mt-3 flex flex-wrap gap-2">;
                  {webhook.event_types.map((event) => (;
                    <Badge ;
                      key={event} ;
                      variant="secondary";
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800";
                    >;                      {event}
                    </Badge>;
                  ))}
                </div>;
                ;
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created:{format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook.last_triggered_at && (;
                    <span>Last triggered:{format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;                  )}
=======

                </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook && webhook.last_triggered_at && (;
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;

                  )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>;
              </div>;
            ));
          )}
<<<<<<< HEAD
        </div>;
      </CardContent>;
      ;
=======


      <Dialog 
        open={showTestDialog !== null} 


        onOpenChange={(open) => {
          if (!open) {
=======
        </div>;
      </CardContent>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="text-xs text-zinc-500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>;"
          <RefreshCw size={14} className="mr-1" /> Refresh;
        </Button>;
      </CardFooter>;

<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null} 
        onOpenChange={(open) => {;
          if (!open) {;

            setTestEventType('new_application');
            if (showTestResult) {;
              setShowTestResult(false);
              clearTestResult();

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            }

          }
        }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
      {/* Test Webhook Dialog */}
      <Dialog ;
      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
          if (!open) {;
            setShowTestDialog(null),;
            setTestEventType('new_application'),;
            if (showTestResult) {;
              setShowTestResult(false),;
          ;
=======
      >;
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className="text-zinc-400">;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {!showTestResult ? (;
            <>;"
              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <Label htmlFor="test-event-type">Event Type</Label>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <Select;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          }
        }}
                  <Select
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >;"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;"
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;"
                    <SelectContent className="bg-zinc-900 border-zinc-800">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
                      {eventOptions.map((option) => (;
                        <SelectItem key={option.value} value={option.value}>;                          {option.label}
                        </SelectItem>;
                      ))}
                    </SelectContent>;
                  </Select>;
                  <p className="text-xs text-zinc-500">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      {eventOptions && eventOptions.map((option) => (;
                        <SelectItem key={option && option.value} value={option && option.value}>;
                          {option && option.label}
                        </SelectItem>;
                      ))}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                    </SelectContent>;
                  </Select>;
                  <p className="text-xs text-zinc-500">;
=======
                <div className="mt - 3 flex flex - wrap gap - 2">;
                  {webhook.event_types.map ((event) => (
                    <Badge;
                      key={event}
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                    >;
                      {event}
                    </Badge>))}
                </div>;
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;
                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook.last_triggered_at && (
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>)}
                </div>;
              </div>)))}
        </div>;
      </CardContent>;
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;
          <RefreshCw size={14} className="mr - 1" /> Refresh;
        </Button>;
      </CardFooter>;
      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}
        onOpenChange={(open) => {
          // Check condition
if ( {) {
  $2
}
            setShowTestDialog (null);
            setTestEventType ('new_application');
            // Check condition
if ( {) {
  $2
}
              setShowTestResult (false);
              clearTestResult ();
            }
          }
        }}
      >;
        <DialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <DialogHeader>;
            <DialogTitle > Test Webhook</DialogTitle>;
            <DialogDescription className="text - zinc - 400">;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;
          {!showTestResult ? (
            <>;
              <div className="space - y-4 py - 4">;
                <div className="space - y-2">;
                  <Label html_for="test - event - type">Event Type</Label>;
                  <Select;
                    value={testEventType}
                    onValueChange={(value) => setTestEventType (value as WebhookEventType)}
                  >;
                    <SelectTrigger className="bg - zinc - 800 border - zinc - 700">;
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;
                    <SelectContent className="bg - zinc - 900 border - zinc - 800">;
                      {event_options.map ((option) => (
                        <SelectItem key={option.value} value={option.value}>;
                          {option.label}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                  <p className="text - xs text - zinc - 500">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    The event type will determine the structure of the test payload.;
                  </p>;
                </div>;
              </div>;                  clearTestResult()

              </div>;
<<<<<<< HEAD

                  setShowTestDialog(null),
                  setShowTestResult(false),
=======
<<<<<<< HEAD
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
                <div className="space-y-2">
                  <Label htmlFor="test-event-type">Event Type</Label>
                  <Select
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
>>>>>>> merged-prs-20250907-203621
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-zinc-500">
                    The event type will determine the structure of the test payload.
                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
<<<<<<< HEAD
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
                          ? "bg-green-700"
                          : "bg-red-700"
                      }
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {testResult?.responseBody |"No response body"}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="default" onClick={() => {
                  setShowTestDialog($2);
                  setShowTestResult($2);
                  clearTestResult()
                }}>
                  Close
                </Button>
                <Button variant="outline" onClick={() => {
                  setShowTestResult($2);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  clearTestResult()
<<<<<<< HEAD
                }>
                  Test Another Event
=======

                }}>
                  Close;
                </Button>"
                <Button variant="outline" onClick={() => {}
                  clearTestResult()

                }}>
                  Test Another Event;
>>>>>>> origin/resolved-merge-conflicts
                </Button>
              </DialogFooter>
            </>
<<<<<<< HEAD

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

              <DialogFooter>;

=======
=======
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
                          ? "bg-green-700"
                          : "bg-red-700"
                      }
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {testResult?.responseBody |"No response body"}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="default" onClick={() => {
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  setShowTestDialog(null),
                  setShowTestResult(false),
                  clearTestResult()

                }}>
<<<<<<< HEAD
                  Close;
                </Button>"
                <Button variant="outline" onClick={() => {}
=======
                  Close
                </Button>
                <Button variant="outline" onClick={() => {
<<<<<<< HEAD
                  setShowTestResult(false),

                  setShowTestResult(false);

                  setShowTestResult(false),
=======

                  setShowTestResult(false),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  clearTestResult()

                }}>
                  Test Another Event;
                </Button>
              </DialogFooter>
            </>
<<<<<<< HEAD

                    </Badge>;
                  </div>;
=======

                    </Badge>;
                  </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}
<<<<<<< HEAD
              ;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <DialogFooter>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
            <>;"
              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
=======
            <>;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div className="flex items-center justify-between">;
                    <Label>Response Status</Label>;
                    <Badge;
                      className={;
<<<<<<< HEAD

                          : "bg-red-700";
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}

                    </Badge>;
                  </div>;
=======
                        testResult && testResult.status >= 200 && testResult.status < 300;
                          ? "bg-green-700";
                          :"bg-red-700";
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}
                    </Badge>;
                  </div>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  ;
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <div className="space - y-2 mt - 4">;
                    <Label > Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;
                        {test_result?.response_body || "No response body"}
<<<<<<< HEAD
              ;

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

                          : "bg-red-700";
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}

                    </Badge>;
                  </div>;
                  ;
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
              ;
              <DialogFooter>;
                <Button variant="default" onClick={() => {;
                  setShowTestDialog(null),;
                  setShowTestResult(false),;
                  clearTestResult(),;
                }}>;
                  Test Another Event;
                </Button>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                  clearTestResult();
                }}>;

          )}

              className="bg-red-600 hover: bg-red-700";
<AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;

              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction ;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}"
              className="bg-red-600 hover:bg-red-700";"
=======
=======

<<<<<<< HEAD
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  clearTestResult();
                }}>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
=======
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
<<<<<<< HEAD
                  clearTestResult();
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false),;
                  clearTestResult(),;
=======

                  clearTestResult();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                }}>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;
      </Dialog>;
<<<<<<< HEAD
;
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog ;
        open={showDeleteConfirm !== null} ;
=======

      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction ;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700";
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className="bg-red-600 hover: bg-red-700"
            >

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}"
              className="bg-red-600 hover: bg-red-700";

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

    </Card>;
  ); export function WebhooksManager () {}
  const {};

}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}
<<<<<<< HEAD
    </Card>;
  );
}
;
=======
<<<<<<< HEAD
=======
              className="bg-red-600 hover: bg-red-700";
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          )}

              className="bg-red-600 hover: bg-red-700";
<AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
<<<<<<< HEAD
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;

              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction ;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}"
              className="bg-red-600 hover:bg-red-700";"
              className="bg-red-600 hover: bg-red-700"
            >

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}"
              className="bg-red-600 hover: bg-red-700";

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  ); export function WebhooksManager () {
  const {
  webhooks;
loading;
testResult;
fetchWebhooks;
createWebhook;
toggleWebhook;
deleteWebhook;
testWebhook;
clearTestResult 
}= useWebhooks ();
const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showTestDialog, setShowTestDialog] = useState<string | null> (null);
const [showTestResult, setShowTestResult] = useState (false);
//Create webhook form state //Load webhooks on mount await createWebhook (webhookName;
webhookUrl;
selectedEvents;
);
  value: WebhookEventType, label: string, description: string 
}[] = [ {
  value: 'new application', label: 'New Application', description: 'When a talent applies to a job' 
};
{
  value: 'quote received', label: 'Quote Received', description: 'When a quote is received from talent' 
};
{
  value: 'milestone approved', label: 'Milestone Approved', description: 'When a project milestone is approved' 
};
{
  value: 'talent hired', label: 'Talent Hired', description: 'When talent is hired for a project' 
}];
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {
  20 
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {
  showCreateDialog 
}onOpenChange= {
  setShowCreateDialog 
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {
  eventOptions.map ( (event) => (<div key= {
  event.value 
}className="flex items-center space-x-2"> <Checkbox id= {
  event.value 
}checked= {
  selectedEvents.includes (event.value) 
}onCheckedChange= {
  () => toggleEvent (event.value) 
}/> <Label htmlFor= {
  event.value 
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) 
}</div> </div> </div> <DialogFooter> 
}
;

}> Cancel </Button> <Button onClick= {
  handleCreateWebhook 
}disabled= {
  webhookName.trim () === ""|| 
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {
  /* Webhooks List */ 
}<div className="space-y-4"> {
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {
  24 
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {
  webhook.id 
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {
  webhook.name 
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {
  14 
}className="mr-1"/> <span className="max-w-md truncate"> {
  webhook.url 
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch checked= {
  webhook.is active 
}onCheckedChange= {
  () => handleToggleStatus (webhook.id, webhook.is active) 
}/> </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick= {
  () => setShowTestDialog (webhook.id) 
}className="cursor-pointer"> <PlayCircle size= {
  14 
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick= {
  () => setShowDeleteConfirm (webhook.id) 
}className="cursor-pointer text-red-500"> <X size= {
  14 
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {
  event 
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {
  event 
}</Badge>) ) 
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {
  format (new Date (webhook.created at), 'MMM d, yyyy') 
}</span> {
  webhook.last triggered at && (<span>Last triggered: {
  format (new Date (webhook.last triggered at), 'MMM d, yyyy HH:mm') 
}</span>) 
}</div> </div>) ) ) 
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {
  /* Test Webhook Dialog */ 
}<Dialog open= {
  showTestDialog !== null 
}onOpenChange= {
  (open) => {
  if (!open) {
  setShowTestDialog (null);
setTestEventType ('new application');
if (showTestResult) {
  
}
}
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {
  testEventType 
}onValueChange= {
  (value) => setTestEventType (value as WebhookEventType) 
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {
  eventOptions.map ( (option) => (<SelectItem key= {
  option.value 
}value= {
  option.value 
}> {
  option.label 
}</SelectItem>) ) 
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick= {
  () => showTestDialog && handleTestWebhook (showTestDialog) 
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {
  testResult?.status 
}{
  testResult?.statusText 
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();
}
}> Close </Button> Test Another Event </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog> {
  /* Delete Webhook Confirmation Dialog */ 
}<AlertDialog open= {
  showDeleteConfirm !== null 
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) 
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}
    </Card>;
  );
}
;
=======

    </Card>;
  ); export function WebhooksManager () {}
  const {};

}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}
<<<<<<< HEAD
    </Card>;
  );
}
;
=======

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

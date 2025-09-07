loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,

  // Create webhook form state
  const [webhookName, setWebhookName] = useState(""),
  const [webhookUrl, setWebhookUrl] = useState(""),
  const [webhookSecret, setWebhookSecret] = useState(""),
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

  // Load webhooks on mount
  useEffect(() => {
    fetchWebhooks()
  }, []),

import { useState, useEffect } from 'react';
import { format } from 'date - fns';
import {
  Globe,
  MoreVertical,
  PlayCircle,
  Plus,
  RefreshCw,
  Webhook,
  X,
} from 'lucide-react';
import { use_webhooks, type WebhookEventType } from '@/hooks / use_webhooks';
import { Button } from '@/components / ui / button';
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components / ui / dialog';
import { Input } from '@/components / ui / input';
import { Checkbox } from '@/components / ui / checkbox';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import { ScrollArea } from '@/components / ui / scroll - area';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger  } from '@/components / ui / dialog';
import { Input  } from '@/components / ui / input';
import { Checkbox  } from '@/components / ui / checkbox';
import { Label  } from '@/components / ui / label';
import { Badge  } from '@/components / ui / badge';
import { Switch  } from '@/components / ui / switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from '@/components / ui / dropdown - menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components / ui / alert - dialog';
import { ScrollArea  } from '@/components / ui / scroll - area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components / ui / select';
export /**
 * WebhooksManager - Function description
 */
function WebhooksManager() {
  const {    webhooks,    webhooks,
    test_result,
    fetch_webhooks,
    create_webhook,
    toggle_webhook,
    delete_webhook,
    test_webhook,
    clearTestResult,
  const [showCreateDialog, setShowCreateDialog] = useState (false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(
    null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);
  const [showTestResult, setShowTestResult] = useState (false);
  // Create webhook form state;
  const [webhook_name, setWebhookName] = useState ('');
  const [webhook_url, setWebhookUrl] = useState ('');
  const [webhook_secret, setWebhookSecret] = useState ('');
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;
    useState < WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect (() => {
    fetch_webhooks ();
  }, []);
  const handleCreateWebhook = async () => {
    if (
      webhookName.trim() === '' |
      webhookUrl.trim() === '' |
      selectedEvents.length === 0
    )
      return;
    await create_webhook (
      webhook_name,
      webhook_url,
      selected_events,
      webhook_secret.trim () === '' ? undefined : webhook_secret);
    setShowCreateDialog (false);
    resetWebhookForm ();
  }
  const handleToggleStatus = async (

    webhook_id: string,
    current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status) }
  const handleDeleteWebhook = async (webhook_id: string) => {
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null) }
  const handleTestWebhook = async (webhook_id: string) => {
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);  const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status);

    setShowDeleteConfirm (null);    setShowDeleteConfirm (null);

    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {
  },
  const handleDeleteWebhook = async (webhook_id: string, ) => {
    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  const handleTestWebhook = async (webhook_id: string, ) => {
    await test_webhook (webhook_id, testEventType),
  const resetWebhookForm = () =>: any {
    setWebhookName ('');
    setWebhookUrl ('');
    setWebhookSecret ('');
    setSelectedEvents ([]);

  const handleDeleteWebhook = async (webhookId: string,) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null)
  const handleTestWebhook = async (webhookId: string,) => {
    await testWebhook(webhookId, testEventType)
    setShowTestResult(true)
  const resetWebhookForm = () => {
    setWebhookName('')
    setWebhookUrl('')
    setWebhookSecret('')
    setSelectedEvents([])
  // Event type options
  const eventOptions: {
    value: WebhookEventType
    label: string
    description: string
  }[] = [
    {
      value: 'new_application'
      label: 'New Application'
      description: 'When a talent applies to a job'
      value: 'quote_received'
      label: 'Quote Received'
      description: 'When a quote is received from talent'
      value: 'milestone_approved'
      label: 'Milestone Approved'
      description: 'When a project milestone is approved'

    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,

    await createWebhook(
      webhookName, 
      webhookUrl, 
      selectedEvents, 
      webhookSecret.trim() === "" ? undefined : webhookSecret
    ),

    setShowCreateDialog(false),
    resetWebhookForm()

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)

  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId),

  const handleTestWebhook = async (webhookId: string) => {

    await testWebhook(webhookId, testEventType),

  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>
          <Webhook className='mr-2' size={20} /> Webhooks
        </CardTitle>
        <CardDescription className='text-zinc-400'>
          Set up webhooks to get notified when events happen in your Zion
          account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className='flex justify-between items-center mb-6'>
          <p className='text-sm text-zinc-400'>
            You have {webhooks.length}{' '}
            {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant='default'>
                <Plus size={16} className='mr-1' /> Add Webhook
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>
                <DialogDescription className='text-zinc-400'>
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>

import { format } from 'date-fns';
import {;
  Globe,;
  MoreVertical,;
  PlayCircle,;
  Plus,;
  RefreshCw,;
  Webhook,;
  X,;
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks';

import { Button } from '@/components/ui/button';
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
} from '@/components/ui/alert-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
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
export function WebhooksManager() {;
  const {    webhooks,    webhooks,;
    loading,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;
    clearTestResult,;

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [showTestResult, setShowTestResult] = useState(false);

  const [webhookName, setWebhookName] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSecret, setWebhookSecret] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
    useState<WebhookEventType>('new_application');

  useEffect(() => {;
    fetchWebhooks();
  const handleCreateWebhook = async () => {;
    if (;
      webhookName && webhookName.trim() === '' ||;
      webhookUrl && webhookUrl.trim() === '' ||;
      selectedEvents && selectedEvents.length === 0;

    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;
      webhookSecret && webhookSecret.trim() === '' ? undefined : webhookSecret;

    setShowCreateDialog(false);
    resetWebhookForm();
  };

  const handleToggleStatus = async (;
    webhookId: string,;
    currentStatus: boolean;
  ) => {;
    await toggleWebhook(webhookId, !currentStatus);  };

  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);  };

  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {;
    await toggleWebhook(webhookId, !currentStatus);

    setShowDeleteConfirm(null);    setShowDeleteConfirm(null);

    setShowTestResult(true);
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean,) => {;
  },;

  const handleDeleteWebhook = async (webhookId: string,) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);

  const handleTestWebhook = async (webhookId: string,) => {;
    await testWebhook(webhookId, testEventType),;

  const resetWebhookForm = () => {;
    setWebhookName('');
    setWebhookUrl('');
    setWebhookSecret('');
    setSelectedEvents([]);

  // Event type options;
  const eventOptions: {;
    value: WebhookEventType;
    label: string;
    description: string;
  }[] = [;
    {;
      value: 'new_application',;
      label: 'New Application',;
      description: 'When a talent applies to a job',;
      value: 'quote_received',;
      label: 'Quote Received',;
      description: 'When a quote is received from talent',;
      value: 'milestone_approved',;
      label: 'Milestone Approved',;
      description: 'When a project milestone is approved',;
      value: 'talent_hired',;
      label: 'Talent Hired',;
      description: 'When talent is hired for a project',;
  ];

  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;
    setSelectedEvents(prev =>;
      prev && prev.includes(event) ? prev && prev.filter(e => e !== event) : [...prev, event];
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <Webhook className='mr-2' size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Set up webhooks to get notified when events happen in your Zion;
          account.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
            You have {webhooks && webhooks.length}{' '}
            {webhooks && webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default'>;
                <Plus size={16} className='mr-1' /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;
                <DialogDescription className='text-zinc-400'>;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;

              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='webhook-name'>Webhook Name</Label>;
                  <Input
                    id='webhook-name'
                    value={webhookName}
                    onChange={e => setWebhookName(e && e.target.value)}
                    placeholder='e && e.g. Application Notifications';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;

                  <Label htmlFor='webhook-url'>Endpoint URL</Label>;
                    id='webhook-url'
                    value={webhookUrl}
                    onChange={e => setWebhookUrl(e && e.target.value)}
                    placeholder='https://example && example.com/webhook';
                  <p className='text-xs text-zinc-500'>;
      value: 'talent_hired',
      label: 'Talent Hired',
      description: 'When talent is hired for a project',
  const toggle_event = (event: WebhookEventType) =>: any {
    setSelectedEvents (prev =>;
      prev.includes (event) ? prev.filter (e => e !== event) : [...prev, event]);
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
        <CardTitle className='text - xl flex items - center'>;
          <Webhook className='mr - 2' size={20} /> Webhooks;
        <CardDescription className='text - zinc - 400'>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            <DialogTrigger as_child>;
                <Plus size={16} className='mr - 1' /> Add Webhook;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
                <DialogTitle > Create Webhook</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - name'>Webhook Name</Label>;
                  <Input;
                    id='webhook - name';
                    value={webhook_name}
                    on_change={e => setWebhookName (e.target.value)}
                    placeholder='e.g. Application Notifications';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                  <Label html_for='webhook - url'>Endpoint URL</Label>;
                    id='webhook - url';
                    value={webhook_url}
                    on_change={e => setWebhookUrl (e.target.value)}
                    placeholder='https://example.com / webhook';
                  <p className='text - xs text - zinc - 500'>;
                    The URL where webhook payloads will be sent when events;
                    occur.;

                    onChange={e => setWebhookSecret(e && e.target.value)}
                    placeholder='Enter secret key';
                    aria-label='Secret key';
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;
                    id='webhook - secret';
                    type='password';
                    value={webhook_secret}
                    on_change={e => setWebhookSecret (e.target.value)}
                    aria - label='Secret key';

                    Used to verify webhook payload signatures. Keep it secret;
                    and secure.;

                          id={event && event.value}                          checked={selectedEvents && selectedEvents.includes(event && event.value)}                  <div className="grid gap-2 pt-2">;
                    {eventOptions && eventOptions.map((event,) => (;
                      <div key={event && event.value} className="flex items-center space-x-2">;
                        <Checkbox
                          id={event && event.value} 
                          onCheckedChange={() => toggleEvent(event && event.value)}
                        />;

                        <Label
                          htmlFor={event && event.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {event && event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {event && event.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;

    setWebhookName("");
    setWebhookUrl("");
    setWebhookSecret("");

    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),

  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],
  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
    setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event) 
        : [...prev, event]

    <Card className="bg-zinc-900 border-zinc-800 text-white">
        <CardTitle className="text-xl flex items-center">
          <Webhook className="mr-2" size={20} /> Webhooks
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.

        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}

              <Button variant="default">
                <Plus size={16} className="mr-1" /> Add Webhook
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
                <DialogDescription className="text-zinc-400">

              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="webhook-name">Webhook Name</Label>
                    id="webhook-name"
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications"
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>

                  <Label htmlFor="webhook-url">Endpoint URL</Label>
                    id="webhook-url"
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https: //example.com/webhook"
                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.

                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>
                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key"
                    aria-label="Secret key"
                    Used to verify webhook payload signatures. Keep it secret and secure.

                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">
                    {eventOptions.map((event) => (
                      <div key={event.value} className="flex items-center space-x-2">
                          id={event.value}

                          onCheckedChange={() => toggleEvent(event.value)}
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {event.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>

                    ))}
                <Button
                  variant='outline'

                  Cancel
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "" || 
                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0;
                }>

              </DialogFooter>
            </DialogContent>
          </Dialog>

                    webhookName && webhookName.trim() === '' ||
                    webhookUrl && webhookUrl.trim() === '' ||
                    selectedEvents && selectedEvents.length === 0
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={
                  webhookName && webhookName.trim() === "" || 
                  webhookUrl && webhookUrl.trim() === "" || 
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={
                    webhook_name.trim () === '' ||;
                    webhook_url.trim () === '' ||;
                    selected_events.length === 0;
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={
                  webhook_name.trim () === "" ||;
                  webhook_url.trim () === "" ||;

                }>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;

        {/* Webhooks List */}
        <div className='space - y-4'>;
          {loading ? (
            <div className='text - center py - 8 text - zinc - 500'>;
              Loading webhooks...;
            </div>) : webhooks.length === 0 ? (
              <Webhook className='mx - auto mb - 2 opacity - 30' size={24} />;
              <p > No webhooks found.</p>;
              <p className='text - sm mt - 1'>;
                Create one to receive event notifications.;
            </div>) : (
            webhooks.map (webhook => (
              <div;
                key={webhook.id}
                className='p - 4 border border - zinc - 800 rounded - lg';
                <div className='flex items - center justify - between'>              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;
                <div className="flex items - center justify - between">;
                  <div>;
                    <h3 className='font - medium'>{webhook.name}</h3>;
                    <div className='flex items - center text - sm text - zinc - 400 mt - 1'>;
                      <Globe size={14} className='mr - 1' />;
                      <span className='max - w-md truncate'>{webhook.url}</span>;
                  <div className='flex items - center space - x-2'>;
                    <div className='flex items - center mr - 2'>;
                      <Switch;
                        aria - label='Toggle webhook';

                        checked={webhook.is_active}
                        onCheckedChange={() =>;
                          handleToggleStatus (webhook.id, webhook.is_active);
                        }                      />;
                      <span className='ml - 2 text - sm'>;
                        {webhook.is_active ? 'Active' : 'Inactive'}

                key={webhook && webhook.id}
                className='p-4 border border-zinc-800 rounded-lg'>;
                <div className='flex items-center justify-between'>              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                    <h3 className='font-medium'>{webhook && webhook.name}</h3>;
                    <div className='flex items-center text-sm text-zinc-400 mt-1'>;
                      <Globe size={14} className='mr-1' />;
                      <span className='max-w-md truncate'>{webhook && webhook.url}</span>;

                  <div className='flex items-center space-x-2'>;
                    <div className='flex items-center mr-2'>;
                      <Switch
                        aria-label='Toggle webhook'
                        checked={webhook && webhook.is_active}
                          handleToggleStatus(webhook && webhook.id, webhook && webhook.is_active);
                      <span className='ml-2 text-sm'>;
                        {webhook && webhook.is_active ? 'Active' : 'Inactive'}
                      </span>;

                    <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;

                          variant='ghost'
                          size='icon'
                          aria-label='More options'>;
                          <MoreVertical size={16} />;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent
                        align='end'
                        className='bg-zinc-900 border-zinc-800 text-white'>;
                        <DropdownMenuItem
                          onClick={() => setShowTestDialog(webhook && webhook.id)}
                          className='cursor-pointer'                        >;
                          <PlayCircle size={14} className='mr-2' /> Test;
                        </DropdownMenuItem>;

        <div className="space-y-4">
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>
          ) : webhooks.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />
              <p>No webhooks found.</p>
              <p className="text-sm mt-1">Create one to receive event notifications.</p>
          ) : (
            webhooks.map(webhook => (
              <div
                className='p-4 border border-zinc-800 rounded-lg'
                <div className='flex items-center justify-between'>              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">
            webhooks.map((webhook) => (
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <Globe size={14} className="mr-1" />
                      <span className="max-w-md truncate">{webhook.url}</span>
                  <div className='flex items-center space-x-2'>
                    <div className='flex items-center mr-2'>
                        onCheckedChange={() =>
                          handleToggleStatus(webhook.id, webhook.is_active)
                        }                      />
                      <span className='ml-2 text-sm'>
                      </span>
                    <DropdownMenu>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center mr-2">
                        aria-label="Toggle webhook"
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      <span className="ml-2 text-sm">
                        {webhook.is_active ? "Active" : "Inactive"}

                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">
                          <MoreVertical size={16} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                          onClick={() => setShowTestDialog(webhook.id)}
                          className='cursor-pointer'                        >
                          <PlayCircle size={14} className='mr-2' /> Test
                        </DropdownMenuItem>
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className='cursor-pointer text-red-500'                        >
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
                        </Label>;
              <DialogFooter>;
                <Button variant="outline" onClick={() => {;
                  setShowCreateDialog(false),;
                }}>;
                  Cancel;
                <Button onClick={handleCreateWebhook} disabled={;
                  webhookName.trim() === "" ||;
                  webhookUrl.trim() === "" ||;
                  Create Webhook;
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) : webhooks.length === 0 ? (;
            <div className="text-center py-8 text-zinc-500">;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
          ) : (;
            webhooks.map((webhook) => (;
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                    <h3 className="font-medium">{webhook.name}</h3>;
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;
                      <Globe size={14} className="mr-1" />;
                      <span className="max-w-md truncate">{webhook.url}</span>;
                  <div className="flex items-center space-x-2">;
                    <div className="flex items-center mr-2">;
                        aria-label="Toggle webhook";
                      <span className="ml-2 text-sm">;
                        <Button variant="ghost" size="icon" aria-label="More options">;
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                        <DropdownMenuItem;
                          className="cursor-pointer";
                          <PlayCircle size={14} className="mr-2" /> Test;

                          className="cursor-pointer text-red-500"
                          <X size={14} className="mr-2" /> Delete

                      </DropdownMenuContent>
                    </DropdownMenu>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge
                      key={event}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge

                      key = {event,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"

                <div className="mt-3 flex flex-wrap gap-2">

                      {event}
                    </Badge>;

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    Created:{' '}
                    {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}
                  {webhook && webhook.last_triggered_at && (;
                      Last triggered:{' '}

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                  {webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>

                  )}

            ))
      </CardContent>

                      <DropdownMenuTrigger as_child>;
                          variant='ghost';
                          size='icon';
                          aria - label='More options';
                      <DropdownMenuContent;
                        align='end';
                        className='bg - zinc - 900 border - zinc - 800 text - white';
                          on_click={() => setShowTestDialog (webhook.id)}
                          className='cursor - pointer'                        >;
                          <PlayCircle size={14} className='mr - 2' /> Test;
                          on_click={() => setShowDeleteConfirm (webhook.id)}
                          className='cursor - pointer text - red - 500'                        >;
                          <X size={14} className='mr - 2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr - 2" /> Delete;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {webhook.event_types.map ((event: WebhookEventType) => (
                    <Badge;
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;
                      key = {event, }
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                    </Badge>))}
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                    {format (new Date (webhook.created_at), 'MMM d, yyyy')}
                      {format (
                        new Date (webhook.last_triggered_at),
                        'MMM d, yyyy HH:mm')}
                    </span>                  )}
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;
                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
              </div>)))}
      </CardContent>;
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;
        <div className='text - xs text - zinc - 500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        <Button variant='outline' size='sm' on_click={fetch_webhooks}>;
          <RefreshCw size={14} className='mr - 1' /> Refresh        </Button>;
      </CardFooter>;

      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook.last_triggered_at && (;
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;
            ));

      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh

      </CardFooter>
                      {format(;
                        new Date(webhook && webhook.last_triggered_at),;
                        'MMM d, yyyy HH:mm';
                    </span>                  )}                ;
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;

      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;
          <RefreshCw size={14} className='mr-1' /> Refresh        </Button>;

        onOpenChange={open => {          // Check condition
if ( {) {
  $2
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;
          <RefreshCw size={14} className="mr - 1" /> Refresh;

        onOpenChange={open => {        open = {showTestDialog !== null, }
        onOpenChange = {(open, ) => {

      <Dialog 

        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null)
            setTestEventType('new_application')
            if (showTestResult) {
              setShowTestResult(false)
              clearTestResult() }
        onOpenChange = {(open,) => {;

        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
          if (!open) {;
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {;
              setShowTestResult(false);

        }}

          // Check condition
            setShowTestDialog (null);
            setTestEventType ('new_application');
              setShowTestResult (false);
              clearTestResult () }
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ();

            , }

            <DialogTitle>Test Webhook</DialogTitle>
              Send a test webhook to your endpoint.
          {!showTestResult ? (
            <>

            <DialogTitle>Test Webhook</DialogTitle>;
              Send a test webhook to your endpoint.;

          {!showTestResult ? (;
            <>;
                  <Label htmlFor='test-event-type'>Event Type</Label>;

                  <Label htmlFor="test-event-type">Event Type</Label>

                  <Select
                    value={testEventType}
                    onValueChange={value =>;
                      setTestEventType(value as WebhookEventType);
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType),}

              clearTestResult()

                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                    <SelectTrigger className='bg-zinc-800 border-zinc-700'>
                      <SelectValue placeholder='Select an event type' />
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />

                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>

                    </SelectContent>;
                  </Select>;
            <DialogTitle > Test Webhook</DialogTitle>;
                  <Label html_for='test - event - type'>Event Type</Label>;
                  <Select;
                      setTestEventType (value as WebhookEventType);
                    value = {testEventType, }
                    onValueChange = {(value, ) => setTestEventType (value as WebhookEventType), }
                    <SelectTrigger className='bg - zinc - 800 border - zinc - 700'>;
                      <SelectValue placeholder='Select an event type' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zinc - 900 border - zinc - 800'>;
                      {event_options.map (option => (                        <SelectItem key={option.value} value={option.value}>                      {event_options.map ((option, ) => (
                    <SelectContent className="bg - zinc - 900 border - zinc - 800">;
                      {event_options.map ((option) => (
                        <SelectItem key={option.value} value={option.value}>;
                        </SelectItem>))}

                    The event type will determine the structure of the test;
                    payload.;

              <DialogFooter>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>

                  onClick={() => setShowTestDialog(null)}
                  onClick={() =>;
                    showTestDialog && handleTestWebhook(showTestDialog);

                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
            </>

                >                  Send Test                  </p>;

                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
                  Send Test;
            </>;
                  <div className='flex items-center justify-between'>;
                    <Label>Response Status</Label>;

                      className={
                        testResult &&
                        testResult.status>= 200 &&;
                        testResult.status < 300;
                          ? 'bg-green-700';
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                      className = {
                        testResult && testResult.status>= 200 && testResult.status < 300;
                          ? "bg-green-700";
                          : "bg-red-700";
                      ,}

                    <Label>Response Status</Label>
                        testResult.status >= 200 &&
                        testResult.status < 300
                          ? 'bg-green-700'
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"
                      {testResult?.status} {testResult?.statusText}

                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {testResult?.responseBody |"No response body"}
                        {testResult?.responseBody || "No response body"}

                    </ScrollArea>

                  <div className='space-y-2 mt-4'>;
                    <Label>Response Body</Label>;
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;
                  <div className="space-y-2 mt-4">;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;

                  variant='outline';
                  on_click={() => setShowTestDialog (null)}
                  on_click={() =>;
                    showTestDialog && handleTestWebhook (showTestDialog);
                <Button variant="outline" on_click={() => setShowTestDialog (null)}>;
                <Button on_click={() => showTestDialog && handleTestWebhook (showTestDialog)}>;
            </>) : (
                  <div className='flex items - center justify - between'>;
                    <Label > Response Status</Label>;
                        test_result &&;
                        test_result.status >= 200 &&;
                        test_result.status < 300;
                          ? 'bg - green - 700';
                          : 'bg - red - 700'                      }              <div className="space - y-4 py - 4">;
                <div className="space - y-2">;
                      class_name = {
                        test_result && test_result.status >= 200 && test_result.status < 300;
                          ? "bg - green - 700";
                          : "bg - red - 700";
                      {test_result?.status} {test_result?.status_text}
                  <div className='space - y-2 mt - 4'>;
                    <Label > Response Body</Label>;
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;
                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;
                        {test_result?.response_body || 'No response body'}                      </pre>;
                  <div className="space - y-2 mt - 4">;
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;
                        {test_result?.response_body || "No response body"}

                    </ScrollArea>;

                >                  Close;

                }}>

                <Button variant="default" onClick={() => {
                  setShowTestDialog(null),
                  setShowTestResult(false),
                  Close
                <Button variant="outline" onClick={() => {
                  Test Another Event

                      </pre>;
                <Button variant="default" onClick={() => {;
                  setShowTestDialog(null),;
                  clearTestResult();
                  Close;
                  Test Another Event;

                  onClick={() => {;
                >                  Test Another Event                <Button variant="outline" onClick={() => {;

      {/* Delete Webhook Confirmation Dialog */}

              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700"
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
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
            </AlertDialogCancel>

              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>

{'
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent'
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved'
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project'

}]
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {
  20 "
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {

}onOpenChange= {
  setShowCreateDialog "
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {
  eventOptions.map ( (event) => (<div key= {
  event.value "
}className="flex items-center space-x-2"> <Checkbox id= {

  event.value 
}checked= {
  selectedEvents.includes (event.value) 
}onCheckedChange= {
  () => toggleEvent (event.value) 
}/> <Label htmlFor= {
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) 
}</div> </div> </div> <DialogFooter>
}> Cancel </Button> <Button onClick={
  handleCreateWebhook 
}disabled= {"
  webhookName.trim () === ""|| 

}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {
  /* Webhooks List */ "
}<div className="space-y-4"> {"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {
  24 "
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {
  webhook.id "
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {
  webhook.name "
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {
  14 "
}className="mr-1"/> <span className="max-w-md truncate"> {
  webhook.url "
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={
  () => setShowTestDialog (webhook.id) "
}className="cursor-pointer"> <PlayCircle size= {
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={
  () => setShowDeleteConfirm (webhook.id) "
}className="cursor-pointer text-red-500"> <X size= {
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {
  event "
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {

  event 
}</Badge>) ) "
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {'
  format (new Date (webhook.created at),  'MMM d, yyyy') 
}</span> {
  webhook.last triggered at && (<span>Last triggered: {'
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm') 
}</span>) 
}</div> </div>) ) ) "
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {
  /* Test Webhook Dialog */ 
}<Dialog open= {
  showTestDialog !== null 

  (open) => {
  setShowTestDialog (null);'
setTestEventType ('new application')
}"
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {

}onValueChange= {
  (value) => setTestEventType (value as WebhookEventType) "
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {
  eventOptions.map ( (option) => (<SelectItem key= {

  option.value 
}value= {
}> {
  option.label 

}</SelectItem>) ) "
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={
  () => showTestDialog && handleTestWebhook (showTestDialog) "
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {

}{
  testResult?.statusText "
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)
setShowTestResult (false)
clearTestResult ()

}> Close </Button> Test Another Event </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog> {
  /* Delete Webhook Confirmation Dialog */ 
}<AlertDialog open= {
  showDeleteConfirm !== null 
  (open) => !open && setShowDeleteConfirm (null) "
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}'"  )
;

            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
            </AlertDialogCancel>;
            <AlertDialogAction;
                showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm);
              className='bg - red - 600 hover:bg - red - 700'            >;
              on_click = {() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm), }
              className="bg - red - 600 hover: bg - red - 700";
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>);
  value: WebhookEventType,  label: string, description: string;
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';

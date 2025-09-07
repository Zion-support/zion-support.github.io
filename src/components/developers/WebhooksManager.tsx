loading,

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

export function WebhooksManager() {
  const {
    webhooks,
    loading,
loading,
pr-12325
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),'
  // Load webhooks on mount
  useEffect(() => {
    fetchWebhooks()
import { useState, useEffect } from 'react';
import { format } from 'date - fns';

import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react'
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function WebhooksManager() {
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
  } = useWebhooks();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  Globe,
  MoreVertical,
  PlayCircle,
  Plus,
  RefreshCw,
  Webhook,
} from 'lucide-react'
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks'
import { Button } from '@/components/ui/button'
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export function WebhooksManager() {
  X,;
} from 'lucide-react';
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks';

import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react'
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

export function WebhooksManager() {
  const {
    webhooks,
    loading,
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
    loading,
    test_result,
    fetch_webhooks,
    create_webhook,
    toggle_webhook,
    delete_webhook,
    test_webhook,
    clearTestResult,
  const [showCreateDialog, setShowCreateDialog] = useState (false);,
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(

  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>()
pr-12325
    null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);,
  const [showTestResult, setShowTestResult] = useState (false);
  // Create webhook form state;
  const [webhook_name, setWebhookName] = useState ('');,
  const [webhook_url, setWebhookUrl] = useState ('');,
  const [webhook_secret, setWebhookSecret] = useState ('');,
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);,
  const [webhook_name, setWebhookName] = useState ('');
  const [webhook_url, setWebhookUrl] = useState ('');
  const [webhook_secret, setWebhookSecret] = useState ('');
  const [webhook_name, setWebhookName] = useState ();
  const [webhook_url, setWebhookUrl] = useState ();
  const [webhook_secret, setWebhookSecret] = useState ();
pr-12325
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;
    useState < WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect (() => {
    fetch_webhooks ();
  }, []);,
  const handleCreateWebhook = async () => {
    // Check condition
if (=== '' ||) {'
  $2
}
      webhook_url.trim () === '' ||;
    // Check condition;
if (===  ||) {
  $2;
}
      webhook_url.trim () ===  ||;
pr-12325
      selected_events.length === 0);
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
    current_status:,  boolean) => {,
      selected_events,)
      webhook_secret.trim () ===  ? undefined : webhook_secret);
    setShowCreateDialog (false);
    resetWebhookForm ();
  const handleToggleStatus = async (
    webhook_id: string,)
pr-12325
    current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status) }
  const handleDeleteWebhook = async (webhook_id:,  string) => {,
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null) }
  const handleTestWebhook = async (webhook_id:,  string) => {,
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);  const handleToggleStatus = async (webhook_id: string, current_status:,  boolean) => {,
    await toggle_webhook (webhook_id, !current_status);
  }
  const handleDeleteWebhook = async (webhook_id:,  string) => {,
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null);    setShowDeleteConfirm (null);
  }
  const handleTestWebhook = async (webhook_id:,  string) => {,
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {
    await toggle_webhook (webhook_id, !current_status);
    setShowDeleteConfirm (null);    setShowDeleteConfirm (null);

    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {
pr-12325
  },
  const handleDeleteWebhook = async (webhook_id: string, ) => {
    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  },
  const handleTestWebhook = async (webhook_id: string, ) => {
    await test_webhook (webhook_id, testEventType),
    setShowTestResult (true);
  },
  const resetWebhookForm = () =>: any {
    setWebhookName ('');
    setWebhookUrl ('');
    setWebhookSecret ('');
    setSelectedEvents ([]);,
  }
  const handleDeleteWebhook = async (webhookId: string,) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null)
  }
  const handleTestWebhook = async (webhookId: string,) => {
    await testWebhook(webhookId, testEventType)
    setShowTestResult(true)
  }
  const {    webhooks,    webhooks
    loading
    testResult
    fetchWebhooks
    createWebhook
    toggleWebhook
    deleteWebhook
    testWebhook
    clearTestResult
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(
    null
  )
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null)
  const [showTestResult, setShowTestResult] = useState(false)
  // Create webhook form state
  }, []),

  const handleCreateWebhook = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  const resetWebhookForm = () => {
    setWebhookName('')
    setWebhookUrl('')
    setWebhookSecret('')
    setSelectedEvents([])
  }
  // Event type options
  const eventOptions: {
    value: WebhookEventType
    label: string
    description: string
  }[] = [
  // Event type options;
  const event_options: {,
    value: WebhookEventType;,
    label: string;,
    description: string;,
  }[] = [;,
    {
      value: 'new_application'',
      label: 'New Application'',
      description: 'When a talent applies to a job''
    }
    {
      value: 'quote_received'',
      label: 'Quote Received'',
      description: 'When a quote is received from talent''
    }
    {
      value: 'milestone_approved'',
      label: 'Milestone Approved'',
      description: 'When a project milestone is approved''
    }
    {


  const handleTestWebhook = async (webhook_id: string, ) => {
    await test_webhook (webhook_id, testEventType),
  const resetWebhookForm = () =>: any {
  // TODO: Implement
    setWebhookName ();
    setWebhookUrl ();
    setWebhookSecret ();
    setSelectedEvents ([]);

  // Event type options;
  const event_options: {,
  value: WebhookEventType;
    label: string;,
  description: string;
  }[] = [;
    {
      value: 'new_application,
  label: 'New Application
      description: 'When a talent applies to a job
      value: 'quote_received,
  label: 'Quote Received
      description: 'When a quote is received from talent
      value: 'milestone_approved,
  label: 'Milestone Approved
      description: 'When a project milestone is approved

]
pr-12325
  }, []),
  }, []),
  const handleCreateWebhook = async () => {
    clearTestResult
  } = useWebhooks(),
  ,
    clearTestResult

    clearTestResult;
pr-12325
  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),
  // Create webhook form state,
  const [webhookName, setWebhookName] = useState(""),",
  const [webhookUrl, setWebhookUrl] = useState(""),",
  const [webhookSecret, setWebhookSecret] = useState(""),",
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),'

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
  const handleCreateWebhook = async () => {
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,"
    await createWebhook(
      webhookName,
      webhookUrl,
      selectedEvents,
      webhookSecret.trim() === "" ? undefined : webhookSecret"
    ),
    setShowCreateDialog(false),
    resetWebhookForm()
  },
  const handleToggleStatus = async (webhookId: string, currentStatus:,  boolean) => {,
    await toggleWebhook(webhookId, !currentStatus)
  },
  const handleDeleteWebhook = async (webhookId:,  string) => {,
    await deleteWebhook(webhookId),
    setShowDeleteConfirm(null)
  },
  const handleTestWebhook = async (webhookId:,  string) => {,
    await testWebhook(webhookId, testEventType),
    setShowTestResult(true)
  },
  const resetWebhookForm = () => {
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>'
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>'
          <Webhook className='mr-2' size={20} /> Webhooks'
        </CardTitle>
        <CardDescription className='text-zinc-400'>'
          Set up webhooks to get notified when events happen in your Zion
          account.
        </CardDescription>
      </CardHeader>
</string>
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),


    <Card className='bg-zinc-900 border-zinc-800 text-white'>

      <CardHeader>

        <CardTitle className='text-xl flex items-center'>

          <Webhook className='mr-2' size={20} /> Webhooks;

        
        <CardDescription className='text-zinc-400'>

        
      
pr-12325


      


      <CardContent>
        <div className='flex justify-between items-center mb-6'>'
          <p className='text-sm text-zinc-400'>'
            You have {webhooks.length}{' '}'
            {webhooks.length === 1 ? 'webhook' : 'webhooks'}'
          </p>
      <CardContent>

        <div className='flex justify-between items-center mb-6'>
</div>
          <p className='text-sm text-zinc-400'>
</p>
pr-12325


          


          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant='default'>'
                <Plus size={16} className='mr-1' /> Add Webhook'
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>'
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>
                <DialogDescription className='text-zinc-400'>'
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {;
  Globe,;
  MoreVertical,;
  PlayCircle,;
  Plus,;
  RefreshCw,;
  Webhook,;
  X,;
} from 'lucide-react';
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import {;
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
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import {;
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
import {;
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

  const handleCreateWebhook = async () => {
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,
    
    await createWebhook(
      webhookName, 
      webhookUrl, 
      selectedEvents, 
      webhookSecret.trim() === "" ? undefined : webhookSecret
    ),
    
    setShowCreateDialog(false),
    resetWebhookForm()
  },
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [showTestResult, setShowTestResult] = useState(false);

  // Create webhook form state;
  const [webhookName, setWebhookName] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSecret, setWebhookSecret] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;
    useState<WebhookEventType>('new_application');

  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []);
  const handleCreateWebhook = async () => {;
    if (;
      webhookName && webhookName.trim() === '' ||;
      webhookUrl && webhookUrl.trim() === '' ||;
      selectedEvents && selectedEvents.length === 0;
    );
      return;

    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;
      webhookSecret && webhookSecret.trim() === '' ? undefined : webhookSecret;
    );

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
  };

  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);    setShowDeleteConfirm(null);
  };

  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean,) => {;
    await toggleWebhook(webhookId, !currentStatus);
  },;

  const handleDeleteWebhook = async (webhookId: string,) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;

  const handleTestWebhook = async (webhookId: string,) => {;
    await testWebhook(webhookId, testEventType),;
    setShowTestResult(true);
  },;

  const resetWebhookForm = () => {;
    setWebhookName('');
    setWebhookUrl('');
    setWebhookSecret('');
    setSelectedEvents([]);
  };

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
    },;
    {;
      value: 'quote_received',;
      label: 'Quote Received',;
      description: 'When a quote is received from talent',;
    },;
    {;
      value: 'milestone_approved',;
      label: 'Milestone Approved',;
      description: 'When a project milestone is approved',;
    },;
    {;
      value: 'talent_hired',;
      label: 'Talent Hired',;
      description: 'When talent is hired for a project',;
    },;
  ];

  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;
    setSelectedEvents(prev =>;
      prev && prev.includes(event) ? prev && prev.filter(e => e !== event) : [...prev, event];
    );
  };
  return (
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

                <div className='space-y-2'>;
                  <Label htmlFor='webhook-url'>Endpoint URL</Label>;
                  <Input
                    id='webhook-url'
                    value={webhookUrl}
                    onChange={e => setWebhookUrl(e && e.target.value)}
                    placeholder='https://example && example.com/webhook';
                    className='bg-zinc-800 border-zinc-700'                  />;
                  <p className='text-xs text-zinc-500'>;
      value: 'talent_hired',
      label: 'Talent Hired',
      description: 'When talent is hired for a project',
    },
  ];
  // Toggle an event selection;
  const toggle_event = (event: WebhookEventType) =>: any {
    setSelectedEvents (prev =>;
      prev.includes (event) ? prev.filter (e => e !== event) : [...prev, event]);
  }
  return (
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <Webhook className='mr - 2' size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Set up webhooks to get notified when events happen in your Zion;
          account.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            You have {webhooks.length}{' '}
            {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant='default'>;
                <Plus size={16} className='mr - 1' /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create Webhook</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - name'>Webhook Name</Label>;
                  <Input;
                    id='webhook - name';
                    value={webhook_name}
                    on_change={e => setWebhookName (e.target.value)}
                    placeholder='e.g. Application Notifications';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - url'>Endpoint URL</Label>;
                  <Input;
                    id='webhook - url';
                    value={webhook_url}
                    on_change={e => setWebhookUrl (e.target.value)}
                    placeholder='https://example.com / webhook';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                  <p className='text - xs text - zinc - 500'>;
                    The URL where webhook payloads will be sent when events;
                    occur.;
                  </p>;
                </div>;
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setSelectedEvents([])
  },

                    onChange={e => setWebhookSecret(e && e.target.value)}
                    placeholder='Enter secret key';
                    aria-label='Secret key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                  <p className='text-xs text-zinc-500'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;
                  <Input;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>

            <DialogTrigger asChild>

              <Button variant='default'>

                <Plus size={16} className='mr-1' /> Add Webhook;

              
            
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>

              <DialogHeader>

                <DialogTitle>Create Webhook
                <DialogDescription className='text-zinc-400'>

                
              
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
</string>)
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);

    useState<WebhookEventType>('new_application');

    <Card className='bg-zinc-900 border-zinc-800 text-white'>;

      <CardHeader>;

        <CardTitle className='text-xl flex items-center'>;


        ;
        <CardDescription className='text-zinc-400'>;

      <CardContent>;

        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;

            <DialogTrigger asChild>;

              <Button variant='default'>;


            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;

              <DialogHeader>;

                <DialogTitle>Create Webhook;
                <DialogDescription className='text-zinc-400'>;

              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='webhook-name'>Webhook Name;
                  <Input;
                    id='webhook-name
                    value={webhookName}
                    onChange={e => setWebhookName(e && e.target.value)}

                </div>;
                  <Label htmlFor='webhook-url'>Endpoint URL;
                    id='webhook-url
                    value={webhookUrl}
                    onChange={e => setWebhookUrl(e && e.target.value)}

                  <p className='text-xs text-zinc-500'>;
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;


        <CardTitle className='text - xl flex items - center'>;

          <Webhook className='mr - 2' size={20} /> Webhooks;

        <CardDescription className='text - zinc - 400'>;


        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;

            <DialogTrigger as_child>;


                <Plus size={16} className='mr - 1' /> Add Webhook;

            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;


                <DialogTitle > Create Webhook;
                <DialogDescription className='text - zinc - 400'>;

              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - name'>Webhook Name;
                    id='webhook - name';
                    value={webhook_name}
                    on_change={e => setWebhookName (e.target.value)}

                  <Label html_for='webhook - url'>Endpoint URL;
                    id='webhook - url';
                    value={webhook_url}
                    on_change={e => setWebhookUrl (e.target.value)}

                  <p className='text - xs text - zinc - 500'>;
                  <Label html_for='webhook - secret'>Secret Key (Optional);
pr-12325
                    id='webhook - secret';
                    type='password';
                    value={webhook_secret}
                    on_change={e => setWebhookSecret (e.target.value)}
                    placeholder='Enter secret key';
                    aria - label='Secret key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                  <p className='text - xs text - zinc - 500'>;

                    Used to verify webhook payload signatures. Keep it secret;
                    and secure.;
                  </p>;
                </div>;

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
                          {event && event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                      </div>;
  };

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
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setSelectedEvents([])
  },

  // Event type options
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
    )
  },

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
                  <Input
                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key"
                    aria-label="Secret key"
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
import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react';
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
    clearTestResult,;,
  const [showCreateDialog, setShowCreateDialog] = useState(false);,
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );,
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);,
  const [showTestResult, setShowTestResult] = useState(false);
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState('');,
  const [webhookUrl, setWebhookUrl] = useState('');,
  const [webhookSecret, setWebhookSecret] = useState('');,
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);,
  const [testEventType, setTestEventType] =;
    useState<WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []);,
  const handleCreateWebhook = async () => {;
    if (;
      webhookName && webhookName.trim() === '' ||;
      webhookUrl && webhookUrl.trim() === '' ||;
      selectedEvents && selectedEvents.length === 0;
    );
      return;
    clearTestResult;
  } = useWebhooks(),;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),;
  const [showTestResult, setShowTestResult] = useState(false),;
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState(""),;
  const [webhookUrl, setWebhookUrl] = useState(""),;
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),;
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []),;
  const handleCreateWebhook = async () => {;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,;
    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;
      webhookSecret && webhookSecret.trim() === '' ? undefined : webhookSecret;
    );
    setShowCreateDialog(false);
    resetWebhookForm();
  };
  const handleToggleStatus = async (;
    webhookId: string,;
    currentStatus: boolean;
  ) => {;
    await toggleWebhook(webhookId, !currentStatus);  };
  const handleDeleteWebhook = async (webhookId:,  string) => {;,
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);  };
  const handleTestWebhook = async (webhookId:,  string) => {;,
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);  const handleToggleStatus = async (webhookId: string, currentStatus:,  boolean) => {;,
    await toggleWebhook(webhookId, !currentStatus);
  };
  const handleDeleteWebhook = async (webhookId:,  string) => {;,
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);    setShowDeleteConfirm(null);
  };
  const handleTestWebhook = async (webhookId:,  string) => {;,
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean,) => {;
    await toggleWebhook(webhookId, !currentStatus);
  },;
  const handleDeleteWebhook = async (webhookId: string,) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;
  const handleTestWebhook = async (webhookId: string,) => {;
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
    setWebhookName('');
    setWebhookUrl('');
    setWebhookSecret('');,
    setSelectedEvents([]);
  };
  // Event type options;
  const eventOptions: {;,
    value: WebhookEventType;,
    label: string;,
    description: string;,
  }[] = [;,
    {;
      value: 'new_application',;
      label: 'New Application',;
      description: 'When a talent applies to a job',;
    },;
    {;
      value: 'quote_received',;
      label: 'Quote Received',;
      description: 'When a quote is received from talent',;
    },;
    {;
      value: 'milestone_approved',;
      label: 'Milestone Approved',;
      description: 'When a project milestone is approved',;
    },;
    {;
      value: 'talent_hired',;
      label: 'Talent Hired',;
      description: 'When talent is hired for a project',;
    },;
  ];
  // Toggle an event selection;
  const toggleEvent = (event:,  WebhookEventType) => {;,
    setSelectedEvents(prev =>;
      prev && prev.includes(event) ? prev && prev.filter(e => e !==,  event) : [...prev, event];
    );
  };
  return (
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
            You have {webhooks && webhooks.length}{' '}'
            {webhooks && webhooks.length === 1 ? 'webhook' : 'webhooks'}'
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
                  <Input id='webhook-name''
                    value={webhookName}
                    onChange={e = /> setWebhookName(e && e.target.value)}
                    placeholder='e && e.g. Application Notifications';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;
                <div className='space-y-2'>;
                  <Label htmlFor='webhook-url'>Endpoint URL</Label>;
                  <Input id='webhook-url''
                    value={webhookUrl}
                    onChange={e = /> setWebhookUrl(e && e.target.value)}
                    placeholder='https://example && example.com/webhook';',
                    className='bg-zinc-800 border-zinc-700'                  />;
                  <p className='text-xs text-zinc-500'>;
      value: 'talent_hired','
      label: 'Talent Hired','
      description: 'When talent is hired for a project','
    },
  ];
  // Toggle an event selection;
  const toggle_event = (event:,  WebhookEventType) =>: any {,
    setSelectedEvents (prev =>;
      prev.includes (event) ? prev.filter (e => e !==,  event) : [...prev, event]);
  }
  return (
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <Webhook className='mr - 2' size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Set up webhooks to get notified when events happen in your Zion;
          account.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            You have {webhooks.length}{' '}'
            {webhooks.length === 1 ? 'webhook' : 'webhooks'}'
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant='default'>;
                <Plus size={16} className='mr - 1' /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create Webhook</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - name'>Webhook Name</Label>;
                  <Input ;
                    id='webhook - name';
                    value={webhook_name}
                    on_change={e = /> setWebhookName (e.target.value)}
                    placeholder='e.g. Application Notifications';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - url'>Endpoint URL</Label>;
                  <Input ;
                    id='webhook - url';
                    value={webhook_url}
                    on_change={e = /> setWebhookUrl (e.target.value)}
                    placeholder='https://example.com / webhook';',
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                  <p className='text - xs text - zinc - 500'>;
                    The URL where webhook payloads will be sent when events;
                    occur.;
                  </p>;
                </div>;
                    onChange={e => setWebhookSecret(e && e.target.value)}
                    placeholder='Enter secret key';
                    aria-label='Secret key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                  <p className='text-xs text-zinc-500'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;
                  <Input ;
                    id='webhook - secret';
                    type='password';
                    value={webhook_secret}
                    on_change={e = /> setWebhookSecret (e.target.value)}
                    placeholder='Enter secret key';
                    aria - label='Secret key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                  <p className='text - xs text - zinc - 500'>;
                    Used to verify webhook payload signatures. Keep it secret;
                    and secure.;
                  </p>;
                </div>;
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
                          {event && event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                      </div>;
  };
  const handleToggleStatus = async (webhookId: string, currentStatus:,  boolean) => {,
    await toggleWebhook(webhookId, !currentStatus)
  };
  const handleDeleteWebhook = async (webhookId:,  string) => {,
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null)
  };
  const handleTestWebhook = async (webhookId:,  string) => {,
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)
  };
  const resetWebhookForm = () => {
    setWebhookName("");
    setWebhookUrl("");
    setWebhookSecret("");,
    setSelectedEvents([])
  };
  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [,
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },'
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },'
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },'
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],'
  // Toggle an event selection
  const toggleEvent = (event:,  WebhookEventType) => {,
    setSelectedEvents(prev =>
      prev.includes(event)
        ? prev.filter(e => e !==,  event) ,
        : [...prev, event]
    )
  };
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">"
      <CardHeader>
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20} /> Webhooks"
        </CardTitle>
        <CardDescription className="text-zinc-400">"
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">"
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}'
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant="default">"
                <Plus size={16} className="mr-1" /> Add Webhook"
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>
                <DialogDescription className="text-zinc-400">"
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-name">Webhook Name</Label>"
                  <Input id="webhook-name""
                    value={webhookName}
                    onChange={(e) = /> setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications""
                    className="bg-zinc-800 border-zinc-700""
                  />
                </div>
                <div className="space-y-2">"
                  <Label htmlFor="webhook-url">Endpoint URL</Label>"
                  <Input id="webhook-url""
                    value={webhookUrl}
                    onChange={(e) = /> setWebhookUrl(e.target.value)}
                    placeholder="https: //example.com/webhook"",
                    className="bg-zinc-800 border-zinc-700""
                  />
                  <p className="text-xs text-zinc-500">"
                    The URL where webhook payloads will be sent when events occur.
                  </p>
                </div>
                <div className="space-y-2">"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>"
                  <Input id="webhook-secret""
                    type="password""
                    value={webhookSecret}
                    onChange={(e) = /> setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key""
                    aria-label="Secret key""
                    className="bg-zinc-800 border-zinc-700""
                  />
                  <p className="text-xs text-zinc-500">"
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>
                <div className="space-y-2">"
                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">"
                    {eventOptions.map((event) => (
                      <div key={event.value} className="flex items-center space-x-2">"
                        <Checkbox
                          id={event.value}
import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react';
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
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),;
  const [showTestResult, setShowTestResult] = useState(false),;
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState(""),;
  const [webhookUrl, setWebhookUrl] = useState(""),;
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),;
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []),;
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
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
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
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
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
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;
                  <Input;
                    id="webhook-secret";
                    type="password";
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key";
                    aria-label="Secret key";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (;
                      <div key={event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event.value} ;
                          checked={selectedEvents.includes(event.value)}


                        <Checkbox 
                          id={event.value} 


                  <div className='grid gap-2 pt-2'>
                    {eventOptions.map(event => (
                      <div
                        key={event.value}
                        className='flex items-center space-x-2'
                      >
                        <Checkbox
                          id={event.value}
                          checked={selectedEvents.includes(event.value)}
origin/cursor/automate-test-improve-and-merge-code-2533
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
                        <Label
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70""
                        >
                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>"
                        </Label>
                      </div>
                    ))}
                  </div>;
                </div>;
              </div>;


className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {event.description}
                          </span>
                        </Label>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),

                  </div>;
                </div>;
              </div>;

<DialogFooter>
origin/cursor/automate-test-improve-and-merge-code-2533
                <Button
                  variant='outline''
                  onClick={() => {;
                    setShowCreateDialog(false);
                    resetWebhookForm();
                <div className='space - y-2'>;
                  <Label > Event Types</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {event_options.map (event => (

                          id={event && event.value}                          checked={selectedEvents && selectedEvents.includes(event && event.value)}                  <div className="grid gap-2 pt-2">;"
</div>"
                      <div key={event && event.value} className="flex items-center space-x-2">;"
                        <Checkbox;
                          id={event && event.value} 
                          onCheckedChange={() => toggleEvent(event && event.value)}

                        <Label;
                          htmlFor={event && event.value}"
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;

                          <span className='block text-xs text-zinc-400 mt-1'>;
</span>
                          </span>                                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";""
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;"
                      </div>;"
    <Card className="bg-zinc-900 border-zinc-800 text-white">"

"
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20} /> Webhooks;"

        <CardDescription className="text-zinc-400">"

        
      
      
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">"
          

              <Button variant="default">"
                <Plus size={16} className="mr-1" /> Add Webhook;"

              
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"


                <DialogTitle>Create Webhook"
                <DialogDescription className="text-zinc-400">"

                
              


              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-name">Webhook Name"
                  <Input;"
                    id="webhook-name""
                    onChange={(e) => setWebhookName(e.target.value)}

                  <Label htmlFor="webhook-url">Endpoint URL"
                    id="webhook-url""
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  <p className="text-xs text-zinc-500">"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)"
                    id="webhook-secret"""
                    type="password""
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                  <Label>Event Types"
                  <div className="grid gap-2 pt-2">"
                      <div key={event.value} className="flex items-center space-x-2">"
                          id={event.value} 


                          onCheckedChange={() => toggleEvent(event.value)}

                          htmlFor={event.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70""
                        >
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>"
                        


                <Button;"
                  variant='outline
                  onClick={() => {;

                  <Label > Event Types;
                  <div className='grid gap - 2 pt - 2'>;
pr-12325
                      <div;
                        key={event.value}
                        className='flex items - center space - x-2';
                      >;
                        <Checkbox;
                          id={event.value}                          checked={selected_events.includes (event.value)}                  <div className="grid gap - 2 pt - 2">;
                    {event_options.map ((event, ) => (
                      <div key={event.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={event.value}
                          onCheckedChange={() => toggle_event (event.value)}
                        />;
                        <Label;
                          html_for={event.value}
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {event.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                            {event.description}
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {event.label}
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
                <Button;
                  variant='outline';
                  on_click={() => {
                    setShowCreateDialog (false);
                    resetWebhookForm ();
                  }}
                >;
                  Cancel;
                </Button>;
              <DialogFooter>
                <Button variant="outline" onClick={() => {"
                  setShowCreateDialog(false);
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
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
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
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
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
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;
                  <Input;
                    id="webhook-secret";
                    type="password";
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key";
                    aria-label="Secret key";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (;
                      <div key={event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event.value} ;
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />;
                        <Label;
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
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
                  webhookName.trim() === "" || "
                  webhookUrl.trim() === "" || "
                  selectedEvents.length === 0;
                }>
                  webhookName.trim() === "" || 
                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0
                }>
                  Create Webhook
                  webhookName.trim() === "" || 
                  webhookUrl.trim() === "" || 
                          id={event.value}                          checked={selected_events.includes (event.value)}                  <div className="grid gap - 2 pt - 2">;"
                      <div key={event.value} className="flex items - center space - x-2">;"
                          onCheckedChange={() => toggle_event (event.value)}

                          html_for={event.value}"
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';

                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                          </span>                                                  className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";""
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;"
                      </div>))}
                  variant='outline';
                  on_click={() => {

              <DialogFooter>

                <Button variant="outline" onClick={() => {"

                
                <Button onClick={handleCreateWebhook} disabled={"
                  webhookName.trim() === "" ||""
                  webhookUrl.trim() === "" ||"
pr-12325
                  selectedEvents.length === 0;
                }>




                <Button
                  onClick={handleCreateWebhook}
                  disabled={
                    webhookName.trim() === '' |
                    webhookUrl.trim() === '' |
                    selectedEvents.length === 0
                  }
                >
                  Create Webhook
origin/cursor/automate-test-improve-and-merge-code-2533
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
                    webhookName && webhookName.trim() === '' ||'
                    webhookUrl && webhookUrl.trim() === '' ||'
                    selectedEvents && selectedEvents.length === 0
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={
                  webhookName && webhookName.trim() === "" || "
                  webhookUrl && webhookUrl.trim() === "" || "
                  selectedEvents && selectedEvents.length === 0
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={
                    webhook_name.trim () === '' ||;
                    webhook_url.trim () === '' ||;
                    selected_events.length === 0;
                  }
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={
                  webhook_name.trim () === "" ||;
                  webhook_url.trim () === "" ||;
                  selected_events.length === 0;
                }>;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
        {/* Webhooks List */}
        <div className='space - y-4'>;
{/* Webhooks List */}
        <div className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {loading ? (
            <div className='text - center py - 8 text - zinc - 500'>;
              Loading webhooks...;
            </div>) : webhooks.length === 0 ? (
            <div className='text - center py - 8 text - zinc - 500'>;
              <Webhook className='mx - auto mb - 2 opacity - 30' size={24} />;
              <p > No webhooks found.</p>;
              <p className='text - sm mt - 1'>;
                Create one to receive event notifications.;
              </p>;
            </div>) : (
            webhooks.map (webhook => (
              <div;
                key={webhook.id}
                className='p - 4 border border - zinc - 800 rounded - lg';
              >;
                <div className='flex items - center justify - between'>              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;
                <div className="flex items - center justify - between">;

                
              
            
          
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={"
                  webhookName && webhookName.trim() === "" ||""
                  webhookUrl && webhookUrl.trim() === "" ||"
                  selectedEvents && selectedEvents.length === 0;
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={"
                    webhook_name.trim () ===  ||;
                    selected_events.length === 0;
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={

        <div className='space - y-4'>;
            <div className='text - center py - 8 text - zinc - 500'>;
            </div>) : webhooks.length === 0 ? (
              <Webhook className='mx - auto mb - 2 opacity - 30' size={24} />;

              <p > No webhooks found.</p>;
              <p className='text - sm mt - 1'>;
              </p>;)
            </div>) : (
                key={webhook.id}
                className='p - 4 border border - zinc - 800 rounded - lg';
                <div className='flex items - center justify - between'>              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
                <div className="flex items - center justify - between">;"
pr-12325
                  <div>;
                    <h3 className='font - medium'>{webhook.name}</h3>;
                    <div className='flex items - center text - sm text - zinc - 400 mt - 1'>;
                      <Globe size={14} className='mr - 1' />;
                      <span className='max - w-md truncate'>{webhook.url}</span>;
                    </div>;
                  </div>;

                      <span className='max - w-md truncate'>{webhook.url}</span>;
pr-12325
                  <div className='flex items - center space - x-2'>;
                    <div className='flex items - center mr - 2'>;
                      <Switch;
                        aria - label='Toggle webhook';
                        checked={webhook.is_active}
                        onCheckedChange={() =>;
                          handleToggleStatus (webhook.id, webhook.is_active);
                        }                      />;
                      <span className='ml - 2 text - sm'>;
                        {webhook.is_active ? 'Active' : 'Inactive'}'
                key={webhook && webhook.id}
                className='p-4 border border-zinc-800 rounded-lg'>;
                <div className='flex items-center justify-between'>              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div>;
                    <h3 className='font-medium'>{webhook && webhook.name}</h3>;
                    <div className='flex items-center text-sm text-zinc-400 mt-1'>;
                      <Globe size={14} className='mr-1' />;
                      <span className='max-w-md truncate'>{webhook && webhook.url}</span>;
                    </div>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <div className='flex items-center mr-2'>;
                      <Switch
                        aria-label='Toggle webhook''
                        checked={webhook && webhook.is_active}
                        onCheckedChange={() =>;
                          handleToggleStatus(webhook && webhook.id, webhook && webhook.is_active);
                        }                      />;
                      <span className='ml-2 text-sm'>;
                        {webhook && webhook.is_active ? 'Active' : 'Inactive'}'
                      </span>;
                    </div>;
                    <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;
                        <Button
                          variant='ghost''
                          size='icon''
                          aria-label='More options'>;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent
                        align='end''
                        className='bg-zinc-900 border-zinc-800 text-white'>;
                        <DropdownMenuItem
                          onClick={() => setShowTestDialog(webhook && webhook.id)}
                          className='cursor-pointer'                        >;
                          <PlayCircle size={14} className='mr-2' /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem
        {/* Webhooks List */}
        <div className="space-y-4">"
          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>"
          ) : webhooks.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />"
              <p>No webhooks found.</p>
              <p className="text-sm mt-1">Create one to receive event notifications.</p>"
            </div>
          ) : (
            webhooks.map((webhook) => (
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">"
                <div className="flex items-center justify-between">"
                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>"
                    <div className="flex items-center text-sm text-zinc-400 mt-1">"
                      <Globe size={14} className="mr-1" />"
                      <span className="max-w-md truncate">{webhook.url}</span>"
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">"
                    <div className="flex items-center mr-2">"
                      <Switch
                        aria-label="Toggle webhook""
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />
                      <span className="ml-2 text-sm">"
                        {webhook.is_active ? "Active" : "Inactive"}"
                      </span>
                    </div>
                      <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">"
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">"
        
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
                        aria-label="Toggle webhook"
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />
                      <span className="ml-2 text-sm">
                        {webhook.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                        checked={webhook.is_active})
                        onCheckedChange={() =>;

                      <span className='ml - 2 text - sm'>;
                <div className='flex items-center justify-between'>              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;"
                    <h3 className='font-medium'>{webhook && webhook.name}</h3>;
                    <div className='flex items-center text-sm text-zinc-400 mt-1'>;
                      <Globe size={14} className='mr-1' />;

                      <span className='max-w-md truncate'>{webhook && webhook.url}</span>;
                  <div className='flex items-center space-x-2'>;
                    <div className='flex items-center mr-2'>;
                        aria-label='Toggle webhook
                        checked={webhook && webhook.is_active}

                      <span className='ml-2 text-sm'>;
                      </span>;
                    <DropdownMenu>;

                      <DropdownMenuTrigger asChild>;



                          variant='ghost
                          size='icon
                          aria-label='More options'>;

                          <MoreVertical size={16} />;

                      <DropdownMenuContent;
                        align='end
                        className='bg-zinc-900 border-zinc-800 text-white'>;

                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook && webhook.id)}

                          <PlayCircle size={14} className='mr-2' /> Test;

        {/* Webhooks List */}
        <div className="space-y-4">"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>""
            <div className="text-center py-8 text-zinc-500">"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />"

              <p>No webhooks found.</p>"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">"
                <div className="flex items-center justify-between">"
                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>""
                    <div className="flex items-center text-sm text-zinc-400 mt-1">"
                      <Globe size={14} className="mr-1" />"
                      <span className="max-w-md truncate">{webhook.url}</span>"



                  <div className="flex items-center space-x-2">"
                    <div className="flex items-center mr-2">"
                      <Switch;"
                        aria-label="Toggle webhook""
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      <span className="ml-2 text-sm">"
pr-12325
                    
                      <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                        <DropdownMenuItem
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
                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className='cursor-pointer text-red-500'                        >
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete
        {/* Webhooks List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) : webhooks.length === 0 ? (;
            <div className="text-center py-8 text-zinc-500">;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) : (;
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
                  <div className="flex items-center space-x-2">;
                    <div className="flex items-center mr-2">;
                      <Switch;
                        aria-label="Toggle webhook";
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />;
                      <span className="ml-2 text-sm">;
                        {webhook.is_active ? "Active" : "Inactive"}"
                        {webhook.is_active ? "Active" : "Inactive"}
                      </span>;
                    </div>;
                      <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;
                        <Button variant="ghost" size="icon" aria-label="More options">;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook.id)}
                          className="cursor-pointer";
                        >;
                          <PlayCircle size={14} className="mr-2" /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500""
                        >
                          <X size={14} className="mr-2" /> Delete"
                          className="cursor-pointer text-red-500"
                        >
                          <X size={14} className="mr-2" /> Delete
                          className='cursor-pointer text-red-500'
                        >
                          <X size={14} className='mr-2' /> Delete
origin/cursor/automate-test-improve-and-merge-code-2533
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                          onClick={() => setShowDeleteConfirm(webhook && webhook.id)}
                          className='cursor-pointer text-red-500'                        >;
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete;
                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;
                <div className='mt-3 flex flex-wrap gap-2'>;
                  {webhook && webhook.event_types.map((event:,  WebhookEventType) => (;
                    <Badge
                      key={event}
                      variant='secondary''
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge',
                      key = {event,}
                      variant="secondary""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""
                <div className="mt-3 flex flex-wrap gap-2">"
                  {webhook.event_types.map((event:,  WebhookEventType) => (
                    <Badge
                      key={event}
                      variant="secondary""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge 
                      key={event} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >



<div className='mt-3 flex flex-wrap gap-2'>
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge
                      key={event}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    >
origin/cursor/automate-test-improve-and-merge-code-2533
                      {event}
                    </Badge>
                  ))}
                    </Badge>;
                  ))}
                </div>;
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    Created:{' '}'
                    {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}'
                </div>
<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
origin/cursor/automate-test-improve-and-merge-code-2533
                    Created:{' '}
                    {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}
                  </span>;
                  {webhook && webhook.last_triggered_at && (;
                    <span>;
                      Last triggered:{' '}'
                </div>
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>'
                  {webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>'
                  )}

                      {format(
                        new Date(webhook.last_triggered_at)
                        'MMM d, yyyy HH:mm'
                      )}
                    </span>
                  )}
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
                      </span>;
                    </div>;
                    <DropdownMenu>;
                      <DropdownMenuTrigger as_child>;
                        <Button;
                          variant='ghost';
                          size='icon';
                          aria - label='More options';
                        >;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent;
                        align='end';
                        className='bg - zinc - 900 border - zinc - 800 text - white';
                      >;
                        <DropdownMenuItem;
                          on_click={() => setShowTestDialog (webhook.id)}
                          className='cursor - pointer'                        >;
                          <PlayCircle size={14} className='mr - 2' /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
                          on_click={() => setShowDeleteConfirm (webhook.id)}
                          className='cursor - pointer text - red - 500'                        >;
                          <X size={14} className='mr - 2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr - 2" /> Delete;
                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {webhook.event_types.map ((event:,  WebhookEventType) => (
                    <Badge;
                      key={event}
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;',
                      key = {event, }
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                      {event}
                    </Badge>))}
                </div>;
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                  <span>;
                    Created:{' '}'
                    {format (new Date (webhook.created_at), 'MMM d, yyyy')}'
                  </span>;
                  {webhook.last_triggered_at && (
                    <span>;
                      Last triggered:{' '}'
                      {format (
                        new Date (webhook.last_triggered_at),
                        'MMM d, yyyy HH:mm')}'
                    </span>                  )}
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;
                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook.last_triggered_at && (
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
                </div>;
              </div>)))}
        </div>;
      </CardContent>;
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;
        <div className='text - xs text - zinc - 500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant='outline' size='sm' on_click={fetch_webhooks}>;
          <RefreshCw size={14} className='mr - 1' /> Refresh        </Button>;
      </CardFooter>;
      {/* Test Webhook Dialog */}

                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">"

                          <MoreVertical size={16} />

                        
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">"

                        <DropdownMenuItem;"
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;"

              <DialogFooter>;
                <Button variant="outline" onClick={() => {;"

                <Button onClick={handleCreateWebhook} disabled={;"
                  webhookName.trim() === "" ||;""
                  webhookUrl.trim() === "" ||;"
                }>;

        <div className="space-y-4">;"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;"

              <p>No webhooks found.</p>;"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
                    <h3 className="font-medium">{webhook.name}</h3>;""
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;"
                      <Globe size={14} className="mr-1" />;"
                      <span className="max-w-md truncate">{webhook.url}</span>;"
                  <div className="flex items-center space-x-2">;"
                    <div className="flex items-center mr-2">;"
                        aria-label="Toggle webhook";"
                      <span className="ml-2 text-sm">;"

                        <Button variant="ghost" size="icon" aria-label="More options">;"


                      ;"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;"

                          onClick={() => setShowTestDialog(webhook.id)}
                          <PlayCircle size={14} className="mr-2" /> Test;"


                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          <X size={14} className="mr-2" /> Delete;"

                        



                      
                    
                          <X size={14} className='mr-2' /> Delete                                                  <X size={14} className="mr-2" /> Delete;"

                <div className='mt-3 flex flex-wrap gap-2'>;
                    <Badge;
                      key={event}
                      variant='secondary
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge;

                <div className="mt-3 flex flex-wrap gap-2">"
                      key={event} "
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>
      


                      <DropdownMenuTrigger as_child>;

                          variant='ghost';
                          size='icon';
                          aria - label='More options';


                        align='end';
                        className='bg - zinc - 900 border - zinc - 800 text - white';

                          on_click={() => setShowTestDialog (webhook.id)}

                          <PlayCircle size={14} className='mr - 2' /> Test;

                          on_click={() => setShowDeleteConfirm (webhook.id)}

                          <X size={14} className='mr - 2' /> Delete                                                  <X size={14} className="mr - 2" /> Delete;"

                <div className='mt - 3 flex flex - wrap gap - 2'>;
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;

                    ))}
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                    </span>                  )}
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;"
                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
              </div>)))}
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;

        <div className='text - xs text - zinc - 500'>;
        <Button variant='outline' size='sm' on_click={fetch_webhooks}>;

          <RefreshCw size={14} className='mr - 1' /> Refresh        ;

pr-12325
      <Dialog;
        open={showTestDialog !== null}
                </div>;
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook.last_triggered_at && (;
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;
                  )}
                </div>;
              </div>;
            ));
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">"
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>"
          <RefreshCw size={14} className="mr-1" /> Refresh"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh



        </Button>
      </CardFooter>
                      {format(;
                        new Date(webhook && webhook.last_triggered_at),;
                        'MMM d, yyyy HH:mm';
                      )}
                    </span>                  )}                ;
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook && webhook.last_triggered_at && (;
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
                </div>;
              </div>;
            ));
          )}
        </div>;
      </CardContent>;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;
          <RefreshCw size={14} className='mr-1' /> Refresh        </Button>;
      </CardFooter>;
      {/* Test Webhook Dialog */}
        onOpenChange={open => {          // Check condition
if ( {) {
  $2
}
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;
          <RefreshCw size={14} className="mr - 1" /> Refresh;
      </CardFooter>;
      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}
        onOpenChange={open => {        open = {showTestDialog !== null, }
        onOpenChange = {(open, ) => {
      <Dialog;
        open={showTestDialog !== null}
      <Dialog
        open={showTestDialog !== null}
        onOpenChange={(open) => {
<CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>
          <RefreshCw size={14} className='mr-1' /> Refresh
        </Button>
      </CardFooter>
      {/* Test Webhook Dialog */}
<Dialog
        open={showTestDialog !== null}
        onOpenChange={open => {
origin/cursor/automate-test-improve-and-merge-code-2533
          if (!open) {
            setShowTestDialog(null)
            setTestEventType('new_application')'
            if (showTestResult) {
              setShowTestResult(false)
              clearTestResult() }
        onOpenChange = {(open,) => {;
      <Dialog
        open={showTestDialog !== null}
        </Button>
      </CardFooter>
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh
        </Button>
      </CardFooter>

      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
          if (!open) {;
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {;
              setShowTestResult(false);
          }
        }}
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
              clearTestResult () }
          }
        }}
      >;
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ();
            }
            , }
              setShowTestResult(false);
clearTestResult();
            }
origin/cursor/automate-test-improve-and-merge-code-2533
          }
        }}
      >
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">


<DialogContent className='bg-zinc-900 border-zinc-800 text-white'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>
            <DialogDescription className='text-zinc-400'>'
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          {!showTestResult ? (
            <>

                  <Select
                    value={testEventType}
                    onValueChange={value =>
                      setTestEventType(value as WebhookEventType)
                    }
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType),}
                  >
                    </SelectTrigger>
                    <SelectContent className='bg-zinc-900 border-zinc-800'>
                      {eventOptions.map(option => (                        <SelectItem key={option.value} value={option.value}>                      {eventOptions.map((option,) => (
      >;
        <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className='text-zinc-400'>;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;
          {!showTestResult ? (;
            <>;
              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='test-event-type'>Event Type</Label>;
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="test-event-type">Event Type</Label>"
                  <Select
                    value={testEventType}
                    onValueChange={value =>;
                      setTestEventType(value as,  WebhookEventType);
                    }
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as,  WebhookEventType),}
              clearTestResult()
            setShowTestDialog(null),;
            setTestEventType('new_application'),;
            if (showTestResult) {;
              setShowTestResult(false),;
              clearTestResult();
            }
          }
        }}
      >
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>
            <DialogDescription className="text-zinc-400">"
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          {!showTestResult ? (
            <>
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="test-event-type">Event Type</Label>"
                  <Select
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as,  WebhookEventType)}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
                      <SelectValue placeholder="Select an event type" />"
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
                      <SelectValue placeholder="Select an event type" />"
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">"
                      {eventOptions.map((option) => (
                      {eventOptions.map(option => (
origin/cursor/automate-test-improve-and-merge-code-2533
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>;
                  </Select>;
                  <p className='text-xs text-zinc-500'>;
      >;
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <DialogHeader>;
            <DialogTitle > Test Webhook</DialogTitle>;
            <DialogDescription className='text - zinc - 400'>;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;
          {!showTestResult ? (
            <>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='test - event - type'>Event Type</Label>;
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;
                      setTestEventType (value as,  WebhookEventType);
                    }
                    value = {testEventType, }
                    onValueChange = {(value, ) => setTestEventType (value as,  WebhookEventType), }
                  >;
                    <SelectTrigger className='bg - zinc - 800 border - zinc - 700'>;
                      <SelectValue placeholder='Select an event type' />;
                    </SelectTrigger>;
                    <SelectContent className='bg - zinc - 900 border - zinc - 800'>;
                      {event_options.map (option => (                        <SelectItem key={option.value} value={option.value}>                      {event_options.map ((option, ) => (
                    <SelectContent className="bg - zinc - 900 border - zinc - 800">;
                      {event_options.map ((option) => (
                        <SelectItem key={option.value} value={option.value}>;
                          {option.label}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;
                  <p className='text - xs text - zinc - 500'>;
                    The event type will determine the structure of the test;
                    payload.;
                  </p>;
                </div>;
              </div>;


                    </SelectContent>
                  </Select>
<p className='text-xs text-zinc-500'>
                    The event type will determine the structure of the test
                    payload.
                  </p>
                </div>
              </div>
              <DialogFooter>
origin/cursor/automate-test-improve-and-merge-code-2533
                <Button
                  variant='outline''
                  onClick={() => setShowTestDialog(null)}
                >;
                  Cancel;
                </Button>;
                <Button
                  onClick={() =>;
                    showTestDialog && handleTestWebhook(showTestDialog);
                  }
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>"
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
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>;
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

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;
      
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>"
          <RefreshCw size={14} className="mr-1" /> Refresh;"

        

      
                    </span>                  )}                ;"
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;

        <div className='text-xs text-zinc-500'>;
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;

          <RefreshCw size={14} className='mr-1' /> Refresh        ;

      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;"
        <div className="text - xs text - zinc - 500">;"
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;"
          <RefreshCw size={14} className="mr - 1" /> Refresh;"

        onOpenChange={open => {        open = {showTestDialog !== null, }



        onOpenChange={(open) => {

        

      
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ();



            <DialogTitle>Test Webhook"

            
          
            <>



            <DialogTitle>Test Webhook;

            <>;
                  <Label htmlFor='test-event-type'>Event Type;
                  <Label htmlFor="test-event-type">Event Type"
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;



            
          
            <>"
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
                      <SelectValue placeholder="Select an event type" />"

                    <SelectContent className="bg-zinc-900 border-zinc-800">"

                        <SelectItem key={option.value} value={option.value}>

                        


            <DialogTitle > Test Webhook;

                  <Label html_for='test - event - type'>Event Type;

                    <SelectTrigger className='bg - zinc - 800 border - zinc - 700'>;

                      <SelectValue placeholder='Select an event type' />;

                    <SelectContent className='bg - zinc - 900 border - zinc - 800'>;

                      {event_options.map (option => (                        <SelectItem key={option.value} value={option.value}>                      {event_options.map ((option, ) => (

                    <SelectContent className="bg - zinc - 900 border - zinc - 800">;"

                        <SelectItem key={option.value} value={option.value}>;
)
                  onClick={() => setShowTestDialog(null)}

                  onClick={() =>;


                <Button variant="outline" onClick={() => setShowTestDialog(null)}>"

                
pr-12325




                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                >
origin/cursor/automate-test-improve-and-merge-code-2533
                  Send Test
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
                    <Badge
                      className={
                        testResult &&
                    </Badge>
                  </div>


                >                  Send Test                  </p>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;
                  Cancel;
                </Button>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
                  Send Test;
                </Button>;
              </DialogFooter>;
            </>;
          ) : (;
            <>;
              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <div className='flex items-center justify-between'>;
                    <Label>Response Status</Label>;
                    <Badge
                      className={
                        testResult &&
                        testResult.status>= 200 &&;
                        testResult.status < 300;
                          ? 'bg-green-700';
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <div className="flex items-center justify-between">;
                    <Label>Response Status</Label>;
                    <Badge
                      className = {
                        testResult && testResult.status>= 200 && testResult.status < 300;
                          ? "bg-green-700";
                          : "bg-red-700";
                      ,}
                    >;
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <div className="flex items-center justify-between">"
                    <Label>Response Status</Label>
                    <Badge
                      className={
                      {testResult?.status} {testResult?.statusText}
                  <div className="space-y-2 mt-4">"
                    <Label>Response Body</Label>,
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">"
                        {testResult?.responseBody || "No response body"}"
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
                    >;
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>


                
              
            </>
          ) : (


                >                  Send Test                  </p>;
)"
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;"

                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;

            </>;
          ) : (;
            <>;"
                  <div className='flex items-center justify-between'>;
                    <Label>Response Status;
                      className={
                        testResult &&
                        testResult.status>= 200 &&;

                        testResult.status < 300;
                          ? 'bg-green-700';
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                      className = {
                        testResult && testResult.status>= 200 && testResult.status < 300;
                    <Label>Response Status

                      {testResult?.status} {testResult?.statusText}

pr-12325
                  
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {testResult?.responseBody || "No response body"}
                      </pre>



<div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <Label>Response Status</Label>
                    <Badge
                      className={
                        testResult &&
                        testResult.status >= 200 &&
                        testResult.status < 300
                          ? 'bg-green-700'
                          : 'bg-red-700'
                      }
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
<div className='space-y-2 mt-4'>
                    <Label>Response Body</Label>
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>
                        {testResult?.responseBody || 'No response body'}
                      </pre>
origin/cursor/automate-test-improve-and-merge-code-2533
                    </ScrollArea>
                  </div>
                </div>
              </div>
                    </Badge>;
                  </div>;
                  <div className='space-y-2 mt-4'>;
                    <Label>Response Body</Label>;,
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;,
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}"
              <DialogFooter>;
                <Button;
                  variant='outline';
                  on_click={() => setShowTestDialog (null)}
                >;
                  Cancel;
                </Button>;
                <Button;
                  on_click={() =>;
                    showTestDialog && handleTestWebhook (showTestDialog);
                  }
                >                  Send Test                  </p>;
                </div>;
              </div>;
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
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <div className='flex items - center justify - between'>;
                    <Label > Response Status</Label>;
                    <Badge;
                      className={
                        test_result &&;
                        test_result.status >= 200 &&;
                        test_result.status < 300;
                          ? 'bg - green - 700';
                          : 'bg - red - 700'                      }              <div className="space - y-4 py - 4">;
                <div className="space - y-2">;
                  <div className="flex items - center justify - between">;
                    <Label > Response Status</Label>;
                    <Badge;
                      class_name = {
                        test_result && test_result.status >= 200 && test_result.status < 300;
                          ? "bg - green - 700";
                          : "bg - red - 700";
                      , }
                    >;
                      {test_result?.status} {test_result?.status_text}
                    </Badge>;
                  </div>;
                  <div className='space - y-2 mt - 4'>;
                    <Label > Response Body</Label>;,
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;
                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;
                        {test_result?.response_body || 'No response body'}                      </pre>;
                  <div className="space - y-2 mt - 4">;
                    <Label > Response Body</Label>;,
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;
                        {test_result?.response_body || "No response body"}"
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;


<DialogFooter>
                <Button
                  variant='default'
                  onClick={() => {
                    setShowTestDialog(null)
                    setShowTestResult(false)
                    clearTestResult()
origin/cursor/automate-test-improve-and-merge-code-2533
                  }}
                >                  Close;
                </Button>;
                <Button
                  variant='outline''
              
              <DialogFooter>
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
                }}>
                  Test Another Event
                  variant='outline'


                  onClick={() => {
                    setShowTestResult(false)
                    clearTestResult()
                  }}
                >
                  Test Another Event
                  clearTestResult()
                }}>
origin/cursor/automate-test-improve-and-merge-code-2533
                </Button>
              </DialogFooter>
            </>
                    </Badge>;
                  </div>;
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;,
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}"
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
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
          )}
        </DialogContent>
      </Dialog>
      {/* Delete Webhook Confirmation Dialog */}
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700"
                  onClick={() => {;
                    setShowTestResult(false);
                    clearTestResult();
                  }}
                >                  Test Another Event                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);
                  clearTestResult();
                }}>;
                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;
      </Dialog>;
      {/* Delete Webhook Confirmation Dialog */}
              This action will permanently remove this webhook. You will no;
              longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700""
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">"
              This action will permanently remove this webhook.
              You will no longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">",
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700""
              className="bg-red-600 hover: bg-red-700"
<AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will permanently remove this webhook. You will no
              longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
              className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700";
        </DialogContent>;
      </Dialog>;
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null} ;
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;",
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  );
  value: WebhookEventType,  label: string, description: string ;,
}[] = [ {;,
);
origin/cursor/automate-test-improve-and-merge-code-2533
  value: WebhookEventType,  label: string, description: string ;
}[] = [ {;
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' ;
};
{';
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' ;
};
{';
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' ;
};
{';
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' ;
}];
setSelectedEvents (prev => prev && prev.includes (event) ? prev && prev.filter (e => e !==,  event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <WebhookclassName="mr-2" size= {"
  20 ""
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialogopen= {"
  showCreateDialog
}onOpenChange= {
  setShowCreateDialog ""
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window && window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {;
  eventOptions && eventOptions.map ( (event) => (<divkey= {
  event && event.value ""
}className="flex items-center space-x-2"> <Checkboxid= {"
  event && event.value
}checked= {
  selectedEvents && selectedEvents.includes (event && event.value)
}onCheckedChange= {
  () => toggleEvent (event && event.value) ;
}/> <LabelhtmlFor= {
  event && event.value ""
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> ;
}> Cancel </Button> <ButtononClick={
  handleCreateWebhook
}disabled= {""
  webhookName && webhookName.trim () === ""|| "
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;
  /* Webhooks List */ ";
}<div className="space-y-4"> {";
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks && webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <WebhookclassName="mx-auto mb-2 opacity-30"size= {"
  24 ""
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks && webhooks.map ( (webhook) => (<divkey= {"
  webhook && webhook.id ""
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;
  webhook && webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globesize= {"
  14 ""
}className="mr-1"/> <span className="max-w-md truncate"> {;
  webhook && webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItemonClick={"
  () => setShowTestDialog (webhook && webhook.id) ";
}className="cursor-pointer"> <PlayCirclesize= {"
  14 ""
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItemonClick={"
  () => setShowDeleteConfirm (webhook && webhook.id) ";
}className="cursor-pointer text-red-500"> <Xsize= {"
  14 ""
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badgekey= {"
  event ""
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;",
}className="cursor-pointer text-red-500"> <Xsize= {
  14 "
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badgekey= {
  event "
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {;
  20 ";
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {;
  showCreateDialog ;
}onOpenChange= {;
  setShowCreateDialog ";
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {;
  eventOptions.map ( (event) => (<div key= {;
  event.value ";
}className="flex items-center space-x-2"> <Checkbox id= {;
  event.value ;
}checked= {;
  selectedEvents.includes (event.value) ;
}onCheckedChange= {;
  () => toggleEvent (event.value) ;
}/> <Label htmlFor= {;
  event.value ";
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> ;

}> Cancel </Button> <Button onClick={;
  handleCreateWebhook ;
}disabled= {";
  webhookName.trim () === ""|| ;
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;
  /* Webhooks List */ ";
}<div className="space-y-4"> {";
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {;
  24 ";
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {;
  webhook.id ";
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;
  webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {;
  14 ";
}className="mr-1"/> <span className="max-w-md truncate"> {;
  webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={;
  () => setShowTestDialog (webhook.id) ";
}className="cursor-pointer"> <PlayCircle size= {;
  14 ";
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={;
  () => setShowDeleteConfirm (webhook.id) ";
}className="cursor-pointer text-red-500"> <X size= {;
  14 ";
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {;
  event ";
origin/cursor/automate-test-improve-and-merge-code-2533
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;
  event ;
}</Badge>) ) ";
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';',
  format (new Date (webhook && webhook.created,  at),  'MMM d, yyyy') ;
}</span> {;
  webhook && webhook.last triggered at && (<span>Last triggered: {';',
  format (new Date (webhook && webhook.last triggered,  at),  'MMM d, yyyy HH:mm') ;
  webhook && webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook && webhook.last triggered at),  'MMM d, yyyy HH:mm') ;
  format (new Date (webhook.created at),  'MMM d, yyyy') ;
}</span> {;
  webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm') ;
origin/cursor/automate-test-improve-and-merge-code-2533
}</span>) ;
}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {;
  /* Test Webhook Dialog */ ;
}<Dialogopen= {
  showTestDialog !== null
}onOpenChange= {
}<Dialog open= {;
  showTestDialog !== null ;
}onOpenChange= {;
origin/cursor/automate-test-improve-and-merge-code-2533
  (open) => {;
  if (!open) {;
  setShowTestDialog (null);';
setTestEventType ('new application');
if (showTestResult) {;
}";
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Selectvalue= {"
  testEventType
}onValueChange= {
  (value) => setTestEventType (value as,  WebhookEventType) ";
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {;
  eventOptions && eventOptions.map ( (option) => (<SelectItemkey= {
  option && option.value
}value= {
  option && option.value
}> {;
  option && option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <ButtononClick={"
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <ButtononClick={
  ;

}";
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {;
  testEventType ;
}onValueChange= {;
  (value) => setTestEventType (value as WebhookEventType) ";
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {;
  eventOptions.map ( (option) => (<SelectItem key= {;
  option.value ;
}value= {;
  option.value ;
}> {;
  option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={;
origin/cursor/automate-test-improve-and-merge-code-2533
  () => showTestDialog && handleTestWebhook (showTestDialog) ";
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {;
  testResult?.status ;
}{;
  testResult?.statusText ";,
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();
}> Close </Button> Test Another Event </Button> </DialogFooter> </>) ;
}</DialogContent> </Dialog> {;
  /* Delete Webhook Confirmation Dialog */ ;
}<AlertDialogopen= {
  showDeleteConfirm !== null
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}'"  );
}
{''
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent''
}
{''
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved''
}
{''
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project'',
  value: WebhookEventType,  label: string, description: string ,
}[] = [ {,
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' '
}
{''
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' '
}
{''
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' '
}
{''
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' '
}]
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !==,  event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {"
  20 ""
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {"
  showCreateDialog
}onOpenChange= {
  setShowCreateDialog ""
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {"
  eventOptions.map ( (event) => (<div key= {
  event.value ""
}className="flex items-center space-x-2"> <Checkbox id= {"
  event.value
}checked= {
  selectedEvents.includes (event.value)
}onCheckedChange= {
  () => toggleEvent (event.value)
}/> <Label htmlFor= {
  event.value ""
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) "
}</div> </div> </div> <DialogFooter>
}> Cancel </Button> <Button onClick={
  handleCreateWebhook
}disabled= {""
  webhookName.trim () === ""|| "
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {
  /* Webhooks List */ ""
}<div className="space-y-4"> {""
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {"
  24 ""
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {"
  webhook.id ""
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {"
  webhook.name ""
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {"
  14 ""
}className="mr-1"/> <span className="max-w-md truncate"> {"
  webhook.url ""
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={"
  () => setShowTestDialog (webhook.id) ""
}className="cursor-pointer"> <PlayCircle size= {"
  14 ""
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={"
  () => setShowDeleteConfirm (webhook.id) ""
}className="cursor-pointer text-red-500"> <X size= {"
  14 ""
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {"
  event ""
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {",
  event
}</Badge>) ) ""
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {'',
  format (new Date (webhook.created,  at),  'MMM d, yyyy') '
}</span> {
  webhook.last triggered at && (<span>Last triggered: {'',
  format (new Date (webhook.last triggered,  at),  'MMM d, yyyy HH:mm') '
}</span>)
}</div> </div>) ) ) ""
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {"
  /* Test Webhook Dialog */
}<Dialog open= {
  showTestDialog !== null
}onOpenChange= {
  (open) => {
  if (!open) {
  setShowTestDialog (null);''
setTestEventType ('new application')'
if (showTestResult) {
}""
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {""
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {"
  testEventType
}onValueChange= {
  (value) => setTestEventType (value as,  WebhookEventType) ""
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {"
  eventOptions.map ( (option) => (<SelectItem key= {
  option.value
}value= {
  option.value
}> {
  option.label
}</SelectItem>) ) ""
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={"
  () => showTestDialog && handleTestWebhook (showTestDialog) ""
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {"
  testResult?.status
}{
  testResult?.statusText "",
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)"
setShowTestResult (false);
clearTestResult ()
;
}
}> Close </Button> Test Another Event </Button> </DialogFooter> </>)
}</DialogContent> </Dialog> {
  /* Delete Webhook Confirmation Dialog */
}<AlertDialog open= {
  showDeleteConfirm !== null
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) ""
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) "
}'"  )"
}
;
}
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;',
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
                showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm);
              }
              className='bg - red - 600 hover:bg - red - 700'            >;
            <AlertDialogAction;
              on_click = {() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm), }
              className="bg - red - 600 hover: bg - red - 700";
      <AlertDialog;
        open={showDeleteConfirm !== null} ;
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;",
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>);
  value: WebhookEventType,  label: string, description: string;,
}[] = [ {,
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';
}
;
}}}}))))]
}
;

;
}<AlertDialog open= {;
  showDeleteConfirm !== null ;
}onOpenChange= {;
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
                  <div className="space-y-2 mt-4">"

                    <Label>Response Body"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">"
</pre>
                    


                  <div className='space-y-2 mt-4'>;
                    <Label>Response Body;
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;

                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;
                  <div className="space-y-2 mt-4">;"
                    <Label>Response Body;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"

                  variant='outline';')
                  on_click={() => setShowTestDialog (null)}

                  on_click={() =>;


                <Button variant="outline" on_click={() => setShowTestDialog (null)}>;"

                <Button on_click={() => showTestDialog && handleTestWebhook (showTestDialog)}>;

            </>) : (
                  <div className='flex items - center justify - between'>;
                    <Label > Response Status;
                        test_result &&;
                        test_result.status >= 200 &&;

                        test_result.status < 300;
                          ? 'bg - green - 700';
                          : 'bg - red - 700'                      }              <div className="space - y-4 py - 4">;"
                <div className="space - y-2">;"
                      class_name = {
                        test_result && test_result.status >= 200 && test_result.status < 300;

                  <div className='space - y-2 mt - 4'>;
                    <Label > Response Body;
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;

                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;
                        {test_result?.response_body || 'No response body'}                      </pre>;
                  <div className="space - y-2 mt - 4">;"
                    <Label > Response Body;"
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;"
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;"
                
              

                      </pre>;
                <Button variant="default" onClick={() => {;"




          )}
        
                >                  Test Another Event                <Button variant="outline" onClick={() => {;"

          <AlertDialogFooter>;



            <AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}

      <AlertDialog;
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"

          <AlertDialogHeader>

            <AlertDialogTitle>Delete Webhook?"
            <AlertDialogDescription className="text-zinc-400">"

            
          
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"

            


              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}

            
          
        
      
    
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"

          <AlertDialogHeader>;

            <AlertDialogTitle>Delete Webhook?;"
            <AlertDialogDescription className="text-zinc-400">;"

            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;"


setSelectedEvents (prev => prev && prev.includes (event) ? prev && prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <WebhookclassName="mr-2" size= {"
}/> Webhooks  <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account.   <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialogopen= {"
  showCreateDialog;
}onOpenChange= {"
  setShowCreateDialog "")"
}> <DialogTrigger asChild>   <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications.   <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window && window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional)  <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types <div className="grid gap-2 pt-2"> {;"
  eventOptions && eventOptions.map ( (event) => (<divkey= {"
  event && event.value """
}className="flex items-center space-x-2"> <Checkboxid= {"
</divkey>
}/> <LabelhtmlFor= {"
  event && event.value "")"
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">  </div>) ) ;"

}</div> </div> </div> <DialogFooter> ;


}> Cancel  <ButtononClick={
  handleCreateWebhook;"
}disabled= {"""
  webhookName && webhookName.trim () === ""||"
}> Create Webhook     </div> {;
}<div className="space-y-4"> {";"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks && webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <WebhookclassName="mx-auto mb-2 opacity-30"size= {""
  24 "")"
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks && webhooks.map ( (webhook) => (<divkey= {""
  webhook && webhook.id """
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;"
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globesize= {"
}className="mr-1"/> <span className="max-w-md truncate"> {;"
</span>"
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild>   <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItemonClick={")"
  () => setShowTestDialog (webhook && webhook.id) ";""
}className="cursor-pointer"> <PlayCirclesize= {""
  14 """
}className="mr-2"/> Test  <DropdownMenuItemonClick={"
}className="cursor-pointer text-red-500"> <Xsize= {""
}className="mr-2"/> Delete    </div> </div> <Badgekey= {"
}) ) ";""
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';
}</span> {;
  webhook && webhook.last triggered at && (<span>Last triggered: {';
</span>)
}</span>) ;
}</div> </div>) ) ) ";""
}</div>  <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div>   {;"
}<Dialogopen= {
  showTestDialog !== null;
}onOpenChange= {
  (open) => {;
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint.   {";"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type <Selectvalue= {"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/>  <SelectContent className="bg-zinc-900 border-zinc-800"> {;")
  eventOptions && eventOptions.map ( (option) => (<SelectItemkey= {
  option && option.value;
}value= {
}> {;
}  <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel  <ButtononClick={""
  () => showTestDialog && handleTestWebhook (showTestDialog) ";""
}> Send Test   </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status <Badge > {;"
</div>)"
} </div> <div className="space-y-2 mt-4"> <Label>Response Body <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre>  </div> </div> </div> <DialogFooter> setShowTestDialog (null);"
setShowTestResult (false);
clearTestResult ();

}> Close  Test Another Event   </>) ;
}  {;
}<AlertDialogopen= {
  showDeleteConfirm !== null;
  (open) => !open && setShowDeleteConfirm (null) ";"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook? <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction > Delete     ) ;""
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {"
}/> Webhooks  <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account.   <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {"
}> <DialogTrigger asChild>   <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications.   <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional)  <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types <div className="grid gap-2 pt-2"> {"
  eventOptions.map ( (event) => (<div key= {"
  event.value """
}className="flex items-center space-x-2"> <Checkbox id= {"
}/> <Label htmlFor= {"
  event.value "")"
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >  </div>) )"
}</div> </div> </div> <DialogFooter>

}> Cancel  <Button onClick={
  webhookName.trim () === ""||"
}> Create Webhook     </div> {"
}<div className="space-y-4"> {""
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {""
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {""
  webhook.id """
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {"
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {"
}className="mr-1"/> <span className="max-w-md truncate"> {"
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild>   <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={")"
  () => setShowTestDialog (webhook.id) """
}className="cursor-pointer"> <PlayCircle size= {""
}className="mr-2"/> Test  <DropdownMenuItem onClick={"
}className="cursor-pointer text-red-500"> <X size= {""
}className="mr-2"/> Delete    </div> </div> <Badge key= {"
}) ) """
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {
}</span> {
  webhook.last triggered at && (<span>Last triggered: {
}</span>) 
}</div> </div>) ) ) """
}</div>  <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div>   {"
}<Dialog open= {
  (open) => {
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint.   {""
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type <Select value= {"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/>  <SelectContent className="bg-zinc-900 border-zinc-800"> {")
  eventOptions.map ( (option) => (<SelectItem key= {


  option.value;
}> {
}  <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel  <Button onClick={""
  () => showTestDialog && handleTestWebhook (showTestDialog) """
}> Send Test   </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status <Badge > {"
} </div> <div className="space-y-2 mt-4"> <Label>Response Body <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre>  </div> </div> </div> <DialogFooter> setShowTestDialog (null)"
setShowTestResult (false)
clearTestResult ()



}> Close  Test Another Event   </>) 
}  {
}<AlertDialog open= {
  (open) => !open && setShowDeleteConfirm (null) ""
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook? <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction > Delete     )""
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;


              on_click = {() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm), }

        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;"


            <AlertDialogTitle > Delete Webhook?;"
            <AlertDialogDescription className="text - zinc - 400">;"

            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;"

              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}

    );"
pr-12325

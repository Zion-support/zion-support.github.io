<<<<<<< HEAD

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react'
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks";

=======
<<<<<<< HEAD

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import {
  Globe
  MoreVertical
  PlayCircle
  Plus
  RefreshCw
  Webhook
  X
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
  Globe,
  MoreVertical,
  PlayCircle,
  Plus,
  RefreshCw,
  Webhook,
  X,
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
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
  Globe,
  MoreVertical,
  PlayCircle,
  Plus,
  RefreshCw,
  Webhook,
  const {    webhooks,    webhooks,
  X,;
} from 'lucide-react';
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks';

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,
<<<<<<< HEAD
    clearTestResult
   } = useWebhooks(),
  const [ showCreateDialog, setShowCreateDialog ] = useState(false),
  const [ showDeleteConfirm, setShowDeleteConfirm ] = useState<string | null>(null),
  const [ showTestDialog, setShowTestDialog ] = useState<string | null>(null),
  const [ showTestResult, setShowTestResult ] = useState(false),
  // Create webhook form state
  const [ webhookName, setWebhookName ] = useState(""),
  const [ webhookUrl, setWebhookUrl ] = useState(""),
  const [ webhookSecret, setWebhookSecret ] = useState(""),
  const [ selectedEvents, setSelectedEvents ] = useState<WebhookEventType[]>([]),
  const [ testEventType, setTestEventType ] = useState<WebhookEventType>('new_application'),
  // Load webhooks on mount
  useEffect(() => {
    fetchWebhooks()
  }, [])
  const handleCreateWebhook = async () => {
    clearTestResult
  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),
    clearTestResult,

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

  }, [])
  const handleCreateWebhook = async () => {
    if (
      webhookName.trim() === '' |
      webhookUrl.trim() === '' |
      selectedEvents.length === 0
    )
      return;
    await createWebhook(
      webhookName
      webhookUrl
      selectedEvents
      webhookSecret.trim() === '' ? undefined : webhookSecret
    )
    setShowCreateDialog(false)
    resetWebhookForm()
  }
  const handleToggleStatus = async (
    webhookId: string
    currentStatus: boolean
  ) => {
    await toggleWebhook(webhookId, !currentStatus) }
  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null) };
  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  }
  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null);    setShowDeleteConfirm(null)
  }
  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType)
    setShowTestResult(true)
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean,) => {
    await toggleWebhook(webhookId, !currentStatus)
  }
  const handleDeleteWebhook = async (webhookId: string,) => {
    await deleteWebhook(webhookId)
    setShowDeleteConfirm(null)
  }
  const handleTestWebhook = async (webhookId: string,) => {
    await testWebhook(webhookId, testEventType)
    setShowTestResult(true)
  }
  const resetWebhookForm = () => {
    setWebhookName('')
    setWebhookUrl('')
    setWebhookSecret('')
    setSelectedEvents([])
=======



  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),


  // Load webhooks on mount
  useEffect(() => {
    fetchWebhooks()

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
    loading,
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Check condition
if (=== '' ||) {
  $2
}
      webhook_url.trim () === '' ||;
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
    current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status) }
  const handleDeleteWebhook = async (webhook_id: string) => {
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null) }
  const handleTestWebhook = async (webhook_id: string) => {
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);  const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status);
  }
  const handleDeleteWebhook = async (webhook_id: string) => {
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null);    setShowDeleteConfirm (null);
  }
  const handleTestWebhook = async (webhook_id: string) => {
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {
    await toggle_webhook (webhook_id, !current_status);
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
    setSelectedEvents ([]);
  }
<<<<<<< HEAD
  // Event type options
  const eventOptions: {
    value: WebhookEventType
    label: string
    description: string
  }[] = [
=======
  // Event type options;
  const event_options: {
    value: WebhookEventType;
    label: string;
    description: string;
  }[] = [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      value: 'new_application'
      label: 'New Application'
      description: 'When a talent applies to a job'
    }
    {
      value: 'quote_received'
      label: 'Quote Received'
      description: 'When a quote is received from talent'
    }
    {
      value: 'milestone_approved'
      label: 'Milestone Approved'
      description: 'When a project milestone is approved'
    }
    {
<<<<<<< HEAD
      value: 'talent_hired'
      label: 'Talent Hired'
      description: 'When talent is hired for a project'
    }
  ]
  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
    setSelectedEvents(prev =>
      prev.includes(event) ? prev.filter(e => e !== event) : [...prev, event]
    )
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  }, []),


  }, [])
  const handleCreateWebhook = async () => {

    clearTestResult
  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  },

  const handleDeleteWebhook = async (webhookId: string) => {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    await deleteWebhook(webhookId),
    setShowDeleteConfirm(null)
  },

<<<<<<< HEAD
    setShowDeleteConfirm(null)
  },

  const handleTestWebhook = async (webhookId: string,) => {
  const handleTestWebhook = async (webhookId: string,) => {
  const handleTestWebhook = async (webhookId: string) => {
=======

  const handleTestWebhook = async (webhookId: string) => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    await testWebhook(webhookId, testEventType),
    setShowTestResult(true)
  },

  const resetWebhookForm = () => {
<<<<<<< HEAD
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
    {
      value: 'new_application',
      label: 'New Application',
      description: 'When a talent applies to a job',
    },
    {
      value: 'quote_received',
      label: 'Quote Received',
      description: 'When a quote is received from talent',
    },
    {
      value: 'milestone_approved',
      label: 'Milestone Approved',
      description: 'When a project milestone is approved',
    },
    {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD

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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [showTestResult, setShowTestResult] = useState(false);

  // Create webhook form state
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');

  // Load webhooks on mount
  useEffect(() => {
    fetchWebhooks()
  }, []);

  const handleCreateWebhook = async () => {
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return;
    
    await createWebhook(
      webhookName, 
      webhookUrl, 
      selectedEvents, 
      webhookSecret.trim() === "" ? undefined : webhookSecret
    );
    
    setShowCreateDialog(false);
    resetWebhookForm()
  };

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  };

=======
export function WebhooksManager() {;
  const {    webhooks,    webhooks,;

import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react';
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
<<<<<<< HEAD
=======
    clearTestResult,;

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                    onChange={e => setWebhookSecret(e && e.target.value)}
                    placeholder='Enter secret key';
                    aria-label='Secret key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                  <p className='text-xs text-zinc-500'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;
                  <Input;
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
  };
>>>>>>> merged-prs-20250907-203621
  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null)
  };
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  const handleTestWebhook = async (webhookId: string) => {
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)
  };
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  const resetWebhookForm = () => {
    setWebhookName("");
    setWebhookUrl("");
    setWebhookSecret("");
    setSelectedEvents([])
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
      value: 'talent_hired',
      label: 'Talent Hired',
      description: 'When talent is hired for a project',
    },
  ]
  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
    setSelectedEvents(prev =>
      prev.includes(event) ? prev.filter(e => e !== event) : [...prev, event]
    )
  }
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setSelectedEvents([])
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  // Toggle an event selection
  const toggleEvent = (event: WebhookEventType) => {
    setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event) 
        : [...prev, event]
    )
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  return (
  },
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <CardContent>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
          
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
                    placeholder="https: //example.com/webhook"
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

              <div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <Label htmlFor='webhook-name'>Webhook Name</Label>
                  <Input
                    id='webhook-name'
                    value={webhookName}
                    onChange={e => setWebhookName(e.target.value)}
                    placeholder='e.g. Application Notifications'
                    className='bg-zinc-800 border-zinc-700'                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='webhook-url'>Endpoint URL</Label>
                  <Input
                    id='webhook-url'
                    value={webhookUrl}
                    onChange={e => setWebhookUrl(e.target.value)}
                    placeholder='https://example.com/webhook'
                    className='bg-zinc-800 border-zinc-700'                  />
                  <p className='text-xs text-zinc-500'>
                    The URL where webhook payloads will be sent when events
                    occur.
                  </p>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='webhook-secret'>Secret Key (Optional)</Label>
                  <Input
                    id='webhook-secret'
                    type='password'
                    value={webhookSecret}
                    onChange={e => setWebhookSecret(e.target.value)}
                    placeholder='Enter secret key'
                    aria-label='Secret key'
                    className='bg-zinc-800 border-zinc-700'                  />
                  <p className='text-xs text-zinc-500'>
                    Used to verify webhook payload signatures. Keep it secret
                    and secure.
                  </p>
                </div>
                <div className='space-y-2'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> merged-prs-20250907-203621
              
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
<<<<<<< HEAD
                    placeholder="https://example.com/webhook"
=======
<<<<<<< HEAD
                    placeholder="https://example.com/webhook"
=======
                    placeholder="https: //example.com/webhook"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> merged-prs-20250907-203621
                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">
                    {eventOptions.map((event) => (
                      <div key={event.value} className="flex items-center space-x-2">
<<<<<<< HEAD
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
=======


                        <Checkbox 
                          id={event.value} 
<<<<<<< HEAD
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
    await createWebhook(;
      webhookName, ;
      webhookUrl, ;
      selectedEvents, ;
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
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
      ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' :'webhooks'}
          </p>;
          ;
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
                ;
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
;
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
                        <Label
                          htmlFor={event.value}
<<<<<<< HEAD
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {event.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
>>>>>>> merged-prs-20250907-203621
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD
=======
                <Button
                  variant='outline'
                  onClick={() => {
                    setShowCreateDialog(false)
                    resetWebhookForm()
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateWebhook}
                  disabled={
                    webhookName.trim() === '' |
                    webhookUrl.trim() === '' |
                    selectedEvents.length === 0
                  }
                >                  Create Webhook                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "" |
                  webhookUrl.trim() === "" |
                  selectedEvents.length === 0
                }>
=======
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {event.label}


                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      </div>
                    ))}

                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
                      </div>
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
                        </Label>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;
                <div className='space - y-2'>;
                  <Label > Event Types</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {event_options.map (event => (
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
>>>>>>> merged-prs-20250907-203621
              
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false);
                  resetWebhookForm()
                }}>
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662



<<<<<<< HEAD
                  Cancel
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "" || 
                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0;
                }>
                  Create Webhook
                </Button>
                  Create Webhook
              
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),
                  resetWebhookForm()
                }}>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  Cancel
                </Button>
                <Button onClick={handleCreateWebhook} disabled={
                  webhookName.trim() === "" || 
                  webhookUrl.trim() === "" || 
<<<<<<< HEAD
                  selectedEvents.length === 0
                }>
                  Create Webhook
=======
<<<<<<< HEAD
                  selectedEvents.length === 0
                }>
                  Create Webhook
                  Create Webhook
=======
                  selectedEvents.length === 0;
                }>




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
<<<<<<< HEAD
        
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    webhookName && webhookName.trim() === '' ||
                    webhookUrl && webhookUrl.trim() === '' ||
                    selectedEvents && selectedEvents.length === 0
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={
                  webhookName && webhookName.trim() === "" || 
                  webhookUrl && webhookUrl.trim() === "" || 
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
              ;
              <DialogFooter>;
                <Button variant="outline" onClick={() => {;
                  setShowCreateDialog(false),;
                  resetWebhookForm(),;
                }}>;
                  Cancel;
                </Button>;
                <Button onClick={handleCreateWebhook} disabled={;
                  webhookName.trim() === "" || ;
                  webhookUrl.trim() === "" || ;
                  selectedEvents.length === 0;
                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;


                        <Button
                          variant='ghost'
                          size='icon'
                          aria-label='More options'>;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent
                        align='end'
                        className='bg-zinc-900 border-zinc-800 text-white'>;
                        <DropdownMenuItem
                          onClick={() => setShowTestDialog(webhook && webhook.id)}
                          className='cursor-pointer'                        >;
                          <PlayCircle size={14} className='mr-2' /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem
<<<<<<< HEAD
        {/* Webhooks List */}
        
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
            webhooks.map((webhook) => (
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">
=======
<<<<<<< HEAD
            webhooks.map(webhook => (
              <div
                key={webhook.id}
                className='p-4 border border-zinc-800 rounded-lg'
              >
                <div className='flex items-center justify-between'>              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            webhooks.map((webhook) => (
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">


>>>>>>> merged-prs-20250907-203621
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <Globe size={14} className="mr-1" />
                      <span className="max-w-md truncate">{webhook.url}</span>
                    </div>
                  </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <div className='flex items-center space-x-2'>
                    <div className='flex items-center mr-2'>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center mr-2">
                      <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                    <DropdownMenu>
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  
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
                    
                      <DropdownMenu>
<<<<<<< HEAD
=======



>>>>>>> merged-prs-20250907-203621
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                        <DropdownMenuItem
<<<<<<< HEAD
                          onClick={() => setShowTestDialog(webhook.id)}
                          className="cursor-pointer"
                        >
                          <PlayCircle size={14} className="mr-2" /> Test
=======
<<<<<<< HEAD
                          onClick={() => setShowTestDialog(webhook.id)}
                          className='cursor-pointer'                        >
                          <PlayCircle size={14} className='mr-2' /> Test
>>>>>>> merged-prs-20250907-203621
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500"
                        >
                          <X size={14} className="mr-2" /> Delete
                        </DropdownMenuItem>
<<<<<<< HEAD
=======
                    </DropdownMenu>
                  </div>
                </div>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {webhook.event_types.map((event: WebhookEventType) => (
ursor/fix-website-loading-errors-and-merge-6662
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                          onClick={() => setShowDeleteConfirm(webhook && webhook.id)}
                          className='cursor-pointer text-red-500'                        >;
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete;
        ;
                          className='cursor-pointer text-red-500'                        >
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete
                        </DropdownMenuItem>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500"
                        >
                          <X size={14} className="mr-2" /> Delete
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

                
                      key = {event,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                          className="cursor-pointer text-red-500"
                        >
                          <X size={14} className="mr-2" /> Delete
                        </DropdownMenuItem>
>>>>>>> merged-prs-20250907-203621
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
<<<<<<< HEAD
=======
                <div className='mt-3 flex flex-wrap gap-2'>
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge
                      key={event}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'                    >                    <Badge
                      key = {event,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge 
                      key={event} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      {event}
                    </Badge>;
                  ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                      {event}
                    </Badge>;
                  ))}
<<<<<<< HEAD
                </div>;
=======


                </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    Created:{' '}
                    {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}
                  </span>;
                  {webhook && webhook.last_triggered_at && (;
                    <span>;
                      Last triggered:{' '}
<<<<<<< HEAD
                </div>
>>>>>>> merged-prs-20250907-203621
                      {event}
                    </Badge>
                  ))}
                </div>
<<<<<<< HEAD
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                  {webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>
                  )}
=======
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
                    Created:{' '}
                    {format(new Date(webhook.created_at), 'MMM d, yyyy')}
                  </span>
                  {webhook.last_triggered_at && (
                    <span>
                      Last triggered:{' '}
                      {format(
                        new Date(webhook.last_triggered_at)
                        'MMM d, yyyy HH:mm'
                      )}
                    </span>                  )}
=======

                </div>
                

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                  {webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>
<<<<<<< HEAD
                  )}
=======

                  )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                  {webhook.event_types.map ((event: WebhookEventType) => (
                    <Badge;
                      key={event}
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;
                      key = {event, }
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                      {event}
                    </Badge>))}
                </div>;
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                  <span>;
                    Created:{' '}
                    {format (new Date (webhook.created_at), 'MMM d, yyyy')}
                  </span>;
                  {webhook.last_triggered_at && (
                    <span>;
                      Last triggered:{' '}
                      {format (
                        new Date (webhook.last_triggered_at),
                        'MMM d, yyyy HH:mm')}
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
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>
          <RefreshCw size={14} className='mr-1' /> Refresh        </Button>
      </CardFooter>
      {/* Test Webhook Dialog */}
      <Dialog
        open={showTestDialog !== null}
        onOpenChange={open => {          if (!open) {
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh
<<<<<<< HEAD
      </CardFooter>
      {/* Test Webhook Dialog */}
      <Dialog
        open={showTestDialog !== null}
        onOpenChange={open => {        open = {showTestDialog !== null,}
        onOpenChange = {(open,) => {
      <Dialog
        open={showTestDialog !== null}
        </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
          if (!open) {
            setShowTestDialog(null)
            setTestEventType('new_application')
            if (showTestResult) {
              setShowTestResult(false)
              clearTestResult() }
          }
        }}
      >
        <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>              clearTestResult()
            }
            ,}
          }
        }}
      >
        <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>
        onOpenChange = {(open,) => {;
      <Dialog
        open={showTestDialog !== null} 
        onOpenChange = {(open,) => {;
      <Dialog
        open={showTestDialog !== null} 
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
          }
        }}
<<<<<<< HEAD
=======

      >
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <DialogHeader>
            <DialogDescription className='text-zinc-400'>
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          {!showTestResult ? (
            <>
<<<<<<< HEAD
              <div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <Label htmlFor='test-event-type'>Event Type</Label>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="test-event-type">Event Type</Label>

                  <Select
                    onValueChange={value =>;
                      setTestEventType(value as WebhookEventType);
                    }
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType),}
                  >;
                    <SelectTrigger className='bg-zinc-800 border-zinc-700'>;
                      <SelectValue placeholder='Select an event type' />;
                    </SelectTrigger>;
                    <SelectContent className='bg-zinc-900 border-zinc-800'>;
                      {eventOptions && eventOptions.map(option => (                        <SelectItem key={option && option.value} value={option && option.value}>                      {eventOptions && eventOptions.map((option,) => (;
                    <SelectContent className="bg-zinc-900 border-zinc-800">;
                      {eventOptions && eventOptions.map((option) => (;
                        <SelectItem key={option && option.value} value={option && option.value}>;
                          {option && option.label}
                        </SelectItem>;

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
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                  >

                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />


                    </SelectTrigger>
<<<<<<< HEAD
                    <SelectTrigger className='bg-zinc-800 border-zinc-700'>
                      <SelectValue placeholder='Select an event type' />
                    <SelectContent className='bg-zinc-900 border-zinc-800'>
                      {eventOptions.map(option => (                        <SelectItem key={option.value} value={option.value}>                      {eventOptions.map((option,) => (
ursor/fix-website-loading-errors-and-merge-6662
                    </SelectTrigger>
=======
                    <SelectContent className="bg-zinc-900 border-zinc-800">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {eventOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
<<<<<<< HEAD
                  <p className='text-xs text-zinc-500'>
                    The event type will determine the structure of the test
                    payload.
                  </p>
                </div>
              </div>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                      setTestEventType (value as WebhookEventType);
                    }
                    value = {testEventType, }
                    onValueChange = {(value, ) => setTestEventType (value as WebhookEventType), }
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
<<<<<<< HEAD
                  <p className="text-xs text-zinc-500">
                    The event type will determine the structure of the test payload.
                  </p>
                </div>
              </div>
=======


                <Button
                  variant='outline'
                  onClick={() => setShowTestDialog(null)}
                >;
                  Cancel;
                </Button>;
                <Button
                  onClick={() =>;
                    showTestDialog && handleTestWebhook(showTestDialog);
                  }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>




                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >                  Send Test                  </p>;
                </div>;
              </div>;
                ;
                <div className="mt-3 flex flex-wrap gap-2">;
                  {webhook.event_types.map((event:WebhookEventType) => (;
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
>>>>>>> merged-prs-20250907-203621
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>
          <RefreshCw size={14} className="mr-1" /> Refresh
        </Button>
      </CardFooter>

      {/* Test Webhook Dialog */}
<<<<<<< HEAD
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
      <Dialog;
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
          if (!open) {;
            setShowTestDialog(null),;
            setTestEventType('new_application'),;
            if (showTestResult) {;
              setShowTestResult(false),;
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
<<<<<<< HEAD
              clearTestResult();
>>>>>>> merged-prs-20250907-203621
            }
          }
        }}
      >
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>
<<<<<<< HEAD
            <DialogDescription className="text-zinc-400">
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          
          {!showTestResult ? (
            <>
=======
            <DialogDescription className='text-zinc-400'>
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          {!showTestResult ? (
            <>
              <div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <Label htmlFor='test-event-type'>Event Type</Label>
>>>>>>> merged-prs-20250907-203621
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="test-event-type">Event Type</Label>
                  <Select
                    value={testEventType}
<<<<<<< HEAD
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
=======
                    onValueChange={value =>
                      setTestEventType(value as WebhookEventType)
                    }
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType),}
                  >
                    <SelectTrigger className='bg-zinc-800 border-zinc-700'>
                      <SelectValue placeholder='Select an event type' />
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                    <SelectContent className='bg-zinc-900 border-zinc-800'>
                      {eventOptions.map(option => (                        <SelectItem key={option.value} value={option.value}>                      {eventOptions.map((option,) => (
>>>>>>> merged-prs-20250907-203621
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
<<<<<<< HEAD
=======
                  <p className='text-xs text-zinc-500'>
                    The event type will determine the structure of the test
                    payload.
                  </p>
                </div>
              </div>
>>>>>>> merged-prs-20250907-203621
                  <p className="text-xs text-zinc-500">
                    The event type will determine the structure of the test payload.
                  </p>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>
<<<<<<< HEAD
=======
                <Button
                  onClick={() =>
                    showTestDialog && handleTestWebhook(showTestDialog)
                  }
                >                  Send Test                  </p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>
>>>>>>> merged-prs-20250907-203621
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge
                      className={
<<<<<<< HEAD
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"
                      }
=======
<<<<<<< HEAD
                        {testResult?.responseBody |'No response body'}                      </pre>
                        testResult &&
                        testResult.status >= 200 &&
                        testResult.status < 300
                          ? 'bg-green-700'
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge
                      className = {
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"
                      ,}
>>>>>>> merged-prs-20250907-203621
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
<<<<<<< HEAD
                  
=======
                  <div className='space-y-2 mt-4'>
                    <Label>Response Body</Label>
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>
                        {testResult?.responseBody |'No response body'}                      </pre>
                        {testResult?.responseBody || 'No response body'}                      </pre>
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
                    >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {testResult?.status} {testResult?.statusText}
                  
<<<<<<< HEAD
=======

                  


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
<<<<<<< HEAD
                        {testResult?.responseBody || "No response body"}
                      </pre>
=======
<<<<<<< HEAD
                        {testResult?.responseBody || "No response body"}
                      </pre>
                        {testResult?.responseBody |"No response body"}
                        {testResult?.responseBody || "No response body"}
                      </pre>
                      </pre>
=======

                        {testResult?.responseBody || "No response body"}



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                    </ScrollArea>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              
              <DialogFooter>
                <Button variant="default" onClick={() => {
                  setShowTestDialog(null);
                  setShowTestResult(false);
=======
<<<<<<< HEAD
                  
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {testResult?.responseBody |"No response body"}
                      </pre>
                  </div>
                </div>
              </div>
                <Button
                  variant='default'
                  onClick={() => {
                    setShowTestDialog(null)
                    setShowTestResult(false)
                    clearTestResult()
                  


                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">

                        {testResult?.responseBody || "No response body"}



                    </ScrollArea>
                  </div>
                </div>
              </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                    </Badge>;
                  </div>;
                  <div className='space-y-2 mt-4'>;
                    <Label>Response Body</Label>;
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;
          ) :(;
            <>;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <div className="flex items-center justify-between">;
                    <Label>Response Status</Label>;
                    <Badge;
                      className={;
                        testResult && testResult.status >= 200 && testResult.status < 300;
                          ? "bg-green-700";
                          :"bg-red-700";
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
                    <Label > Response Body</Label>;
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;
                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;
                        {test_result?.response_body || 'No response body'}                      </pre>;
                  <div className="space - y-2 mt - 4">;
                    <Label > Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;
                        {test_result?.response_body || "No response body"}
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;


                >                  Close;
                </Button>;
                <Button
                  variant='outline'

                  clearTestResult()
                }}>
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
                  }}
                >                  Close
                </Button>
                <Button
                  variant='outline'
                  onClick={() => {
                    setShowTestResult(false)
                    clearTestResult()
                  }}
                >                  Test Another Event                <Button variant="outline" onClick={() => {
                  setShowTestResult(false)

                  clearTestResult()
                }}>
                </Button>
              </DialogFooter>
            </>
              
              <DialogFooter>
                <Button variant="default" onClick={() => {
                  setShowTestDialog(null),
                  setShowTestResult(false),
>>>>>>> merged-prs-20250907-203621
                  clearTestResult()
                }}>
                  Close
                </Button>
                <Button variant="outline" onClick={() => {
<<<<<<< HEAD
                  setShowTestResult(false);
=======
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
                <Button;
                  variant='default';
                  on_click={() => {
                    setShowTestDialog (null);
                    setShowTestResult (false);
                    clearTestResult ();
                  }}
                >                  Close;
                </Button>;
                <Button;
                  variant='outline';
                  on_click={() => {
                    setShowTestResult (false);
                    clearTestResult ();
                  }}
                >                  Test Another Event                <Button variant="outline" on_click={() => {
                  setShowTestResult (false);
                  clearTestResult ();
                }}>;
                </Button>;
              </DialogFooter>;
            </>)}
        </DialogContent>;
      </Dialog>;
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm (null)}
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;
              This action will permanently remove this webhook. You will no;
              longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
                  setShowTestResult(false),
>>>>>>> merged-prs-20250907-203621
                  clearTestResult()
                }}>
                  Test Another Event
                </Button>
              </DialogFooter>
            </>
<<<<<<< HEAD
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Webhook Confirmation Dialog */}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </Badge>;
                  </div>;
                  <div className="space-y-2 mt-4">;
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
              className='bg-red-600 hover:bg-red-700'            >
            <AlertDialogAction
            <AlertDialogAction 
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700"
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
            <AlertDialogAction 
=======
<<<<<<< HEAD
            <AlertDialogAction
            <AlertDialogAction
            <AlertDialogAction 
=======


            <AlertDialogAction 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
  value: WebhookEventType,  label: string, description: string
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job'
}
{'
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent'
}
{'
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved'
}
{'
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project'
  value: WebhookEventType,  label: string, description: string 
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' 
}
{'
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' 
}
{'
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' 
}
{'
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' 
}]
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {
  20 "
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {
  value: WebhookEventType,  label: string, description: string
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700";
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
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
              ;
              <DialogFooter>;
                <Button variant="default" onClick={() => {;
                  setShowTestDialog(null),;
                  setShowTestResult(false),;
                  clearTestResult(),;
                }}>;
                  Close;
                </Button>;
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false),;
                  clearTestResult(),;
                }}>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;
      </Dialog>;
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
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction ;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700";
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  ); export function WebhooksManager () {;
  const {;
  webhooks;
loading;
testResult;
fetchWebhooks;
createWebhook;
toggleWebhook;
deleteWebhook;
testWebhook;
clearTestResult ;
}= useWebhooks ();
const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showTestDialog, setShowTestDialog] = useState<string | null> (null);
const [showTestResult, setShowTestResult] = useState (false);
//Create webhook form state //Load webhooks on mount await createWebhook (webhookName;
webhookUrl;
selectedEvents;
);
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
}
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
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;
  event ;
}</Badge>) ) ";
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';
  format (new Date (webhook.created at),  'MMM d, yyyy') ;
}</span> {;
  webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm') ;
}</span>) ;
}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {;
  /* Test Webhook Dialog */ ;
}<Dialog open= {;
  showTestDialog !== null ;
}onOpenChange= {;
  (open) => {;
  if (!open) {;
  setShowTestDialog (null);';
setTestEventType ('new application');
if (showTestResult) {;
  ;
}
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
  () => showTestDialog && handleTestWebhook (showTestDialog) ";
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {;
  testResult?.status ;
}{;
  testResult?.statusText ";
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();
<<<<<<< HEAD
}
=======

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
{'
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent'
}
{'
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved'
}
{'
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  value: WebhookEventType,  label: string, description: string 
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' 
}
{'
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' 
}
{'
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' 
}
{'
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' 

}]
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {
  20 "
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {
<<<<<<< HEAD
  showCreateDialog
  showCreateDialog
  showCreateDialog 
=======


  showCreateDialog 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}onOpenChange= {
  setShowCreateDialog "
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {
  eventOptions.map ( (event) => (<div key= {
  event.value "
}className="flex items-center space-x-2"> <Checkbox id= {
<<<<<<< HEAD
  event.value
}checked= {
  selectedEvents.includes (event.value)
}onCheckedChange= {
  () => toggleEvent (event.value)
}/> <Label htmlFor= {
  event.value "
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) )
}</div> </div> </div> <DialogFooter>
}> Cancel </Button> <Button onClick={
  handleCreateWebhook
}disabled= {"
  webhookName.trim () === ""|
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  event.value 
}checked= {
  selectedEvents.includes (event.value) 
}onCheckedChange= {
  () => toggleEvent (event.value) 
}/> <Label htmlFor= {
  event.value "
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) 
}</div> </div> </div> <DialogFooter>
}> Cancel </Button> <Button onClick={
  handleCreateWebhook 
}disabled= {"
  webhookName.trim () === ""|| 
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  14 "
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={
  () => setShowDeleteConfirm (webhook.id) "
}className="cursor-pointer text-red-500"> <X size= {
  14 "
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {
  event "
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}onOpenChange= {
  (open) => {
  if (!open) {
  setShowTestDialog (null);'
setTestEventType ('new application')
if (showTestResult) {
}"
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {
<<<<<<< HEAD
  testEventType
  testEventType
  testEventType 
=======


  testEventType 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}onValueChange= {
  (value) => setTestEventType (value as WebhookEventType) "
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {
  eventOptions.map ( (option) => (<SelectItem key= {
<<<<<<< HEAD
  option.value
}value= {
  option.value
}> {
  option.label
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  option.value 
}value= {
  option.value 
}> {
  option.label 
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}</SelectItem>) ) "
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={
  () => showTestDialog && handleTestWebhook (showTestDialog) "
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {
<<<<<<< HEAD
  testResult?.status
  testResult?.status
  testResult?.status 
=======


  testResult?.status 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}{
  testResult?.statusText "
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)
setShowTestResult (false)
clearTestResult ()
<<<<<<< HEAD
}> Close </Button> Test Another Event </Button> </DialogFooter> </>)
}</DialogContent> </Dialog> {
  /* Delete Webhook Confirmation Dialog */
}<AlertDialog open= {
  showDeleteConfirm !== null
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) "
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)
}'"  )
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
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
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}> Close </Button> Test Another Event </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog> {
  /* Delete Webhook Confirmation Dialog */ 
}<AlertDialog open= {
  showDeleteConfirm !== null 
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) "
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}'"  )
}
;
}

            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
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
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
<<<<<<< HEAD
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
=======
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
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
=======
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
{';
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent';
}
{';
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved';
}
{';
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project';
}];
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg - zinc - 900 border - zinc - 800 text - white"> <CardHeader> <CardTitle className="text - xl flex items - center"> <Webhook className="mr - 2" size= {
  20 ";
}/> Webhooks </CardTitle> <CardDescription className="text - zinc - 400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify - between items - center mb - 6"> </p> <Dialog open= {
  showCreateDialog;
}onOpenChange= {
  setShowCreateDialog ";
}> <DialogTrigger as_child> </Button> </DialogTrigger> <DialogContent className="bg - zinc - 900 border - zinc - 800 text - white"> <DialogHeader> <DialogTitle > Create Webhook</DialogTitle> <DialogDescription className="text - zinc - 400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space - y-4 py - 4"> <div className="space - y-2" > <Label html_for="webhook - name" >Webhook Name</Label> <Input className="bg - zinc - 800 border - zinc - 700" /> </div> className="bg - zinc - 800 border - zinc - 700" /> <p className="text - xs text - zinc - 500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space - y-2" > <Label html_for="webhook - secret" >Secret Key (Optional) </Label> <Input className="bg - zinc - 800 border - zinc - 700" /> <p className="text - xs text - zinc - 500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space - y-2"> <Label > Event Types</Label> <div className="grid gap - 2 pt - 2"> {
  event_options.map ( (event) => (<div key= {
  event.value ";
}className="flex items - center space - x-2"> <Checkbox id= {
  event.value;
}checked= {
  selected_events.includes (event.value);
}onCheckedChange= {
  () => toggle_event (event.value);
}/> <Label html_for= {
  event.value ";
}className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70" > </Label> </div>) );
}</div> </div> </div> <DialogFooter>;
}> Cancel </Button> <Button on_click={
  handleCreateWebhook;
}disabled= {";
  webhook_name.trim () === ""||;
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {
  /* Webhooks List */ ";
}<div className="space - y-4"> {";
  loading ? (<div className="text - center py - 8 text - zinc - 500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text - center py - 8 text - zinc - 500"> <Webhook className="mx - auto mb - 2 opacity - 30"size= {
  24 ";
}/> <p > No webhooks found.</p> <p className="text - sm mt - 1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {
  webhook.id ";
}className="p - 4 border border - zinc - 800 rounded - lg"> <div className="flex items - center justify - between"> <div> <h3 className="font - medium"> {
  webhook.name ";
}</h3> <div className="flex items - center text - sm text - zinc - 400 mt - 1"> <Globe size= {
  14 ";
}className="mr - 1"/> <span className="max - w-md truncate"> {
  webhook.url ";
}</span> </div> </div> <div className="flex items - center space - x-2"> <div className="flex items - center mr - 2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger as_child> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg - zinc - 900 border - zinc - 800 text - white"> <DropdownMenuItem on_click={
  () => setShowTestDialog (webhook.id) ";
}className="cursor - pointer"> <PlayCircle size= {
  14 ";
}className="mr - 2"/> Test </DropdownMenuItem> <DropdownMenuItem on_click={
  () => setShowDeleteConfirm (webhook.id) ";
}className="cursor - pointer text - red - 500"> <X size= {
  14 ";
}className="mr - 2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {
  event ";
}variant=" secondary"className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800"> {
  event;
}</Badge>) ) ";
}</div> <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4"> <span > Created: {';
  format (new Date (webhook.created at),  'MMM d, yyyy');
}</span> {
  webhook.last triggered at && (<span > Last triggered: {';
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm');
}</span>);
}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify - between border - t border - zinc - 800 py - 4"> <div className="text - xs text - zinc - 500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {
  /* Test Webhook Dialog */;
}<Dialog open= {
  showTestDialog !== null;
}onOpenChange= {
  (open) => {
  // Check condition
if ( {) {
  $2
}
  setShowTestDialog (null);';
setTestEventType ('new application');
// Check condition
if ( {) {
  $2
}
}";
}> <DialogContent className="bg - zinc - 900 border - zinc - 800 text - white"> <DialogHeader> <DialogTitle > Test Webhook</DialogTitle> <DialogDescription className="text - zinc - 400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space - y-4 py - 4"> <div className="space - y-2"> <Label html_for=" test - event - type">Event Type</Label> <Select value= {
  testEventType;
}onValueChange= {
  (value) => setTestEventType (value as WebhookEventType) ";
}> <SelectTrigger className="bg - zinc - 800 border - zinc - 700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg - zinc - 900 border - zinc - 800"> {
  event_options.map ( (option) => (<SelectItem key= {
  option.value;
}value= {
  option.value;
}> {
  option.label;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text - xs text - zinc - 500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button on_click={
  () => showTestDialog && handleTestWebhook (showTestDialog) ";
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space - y-4 py - 4"> <div className="space - y-2"> <div className="flex items - center justify - between"> <Label > Response Status</Label> <Badge > {
  test_result?.status;
}{
  test_result?.status_text ";
}</Badge> </div> <div className="space - y-2 mt - 4"> <Label > Response Body</Label> <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();
}> Close </Button> Test Another Event </Button> </DialogFooter> </>);
}</DialogContent> </Dialog> {
  /* Delete Webhook Confirmation Dialog */;
}<AlertDialog open= {
  showDeleteConfirm !== null;
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white"> <AlertDialogHeader> <AlertDialogTitle > Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text - zinc - 400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>);
}'"  );
}
}> Close </Button> Test Another Event </Button> </DialogFooter> </>) ;
}</DialogContent> </Dialog> {;
  /* Delete Webhook Confirmation Dialog */ ;
}<AlertDialog open= {;
  showDeleteConfirm !== null ;
}onOpenChange= {;
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}'"
    </Card>;
  );
}
;
;
=======
    </Card>);
  value: WebhookEventType,  label: string, description: string;
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';
}

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

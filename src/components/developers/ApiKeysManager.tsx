<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react'
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'

import { useState } from 'react'

import { useState } from "react",
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'

import { format } from 'date-fns'
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys'
import { Button } from '@/components/ui/button'
import {
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
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
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
import CodeBlock from './CodeBlock'
export function ApiKeysManager() {
  const {
    keys
    loading
    newApiKey
    fetchApiKeys
    createApiKey
    regenerateApiKey
    revokeApiKey
    clearNewApiKey
  } = useApiKeys()
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(
    null
  )
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<
    string | null
  >(null)

import { useState } from "react",
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'
import { format } from "date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",

  // Create key form state
  const [keyName, setKeyName] = useState("");
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Input } from "@/components/ui/input",
import { Checkbox } from "@/components/ui/checkbox",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",

import CodeBlock from "./CodeBlock",
xport function ApiKeysManager() {
  const { 
import { useState } from "react";
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'
import { format } from "date-fns";
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import CodeBlock from "./CodeBlock";
export function ApiKeysManager() { const { 
    keys,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
keys,

    loading, 
    newApiKey;
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
<<<<<<< HEAD
<<<<<<< HEAD
export function ApiKeysManager() {
  const { 
    keys,
    loading, 
    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,
    clearNewApiKey
  } = useApiKeys(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
    clearNewApiKey,
  } = useApiKeys()
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(
    null
  )
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<
    string | null
  >(null)
  // Create key form state
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    revokeApiKey,


  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Load keys on mount
  useState(() => {
    fetchApiKeys()

<<<<<<< HEAD
<<<<<<< HEAD
  })
  const handleCreateKey = async () => {
    if (keyName.trim() === '' |selectedScopes.length === 0) return
    if (keyName.trim() === '' || selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('');
    setSelectedScopes([]) };
  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (keyName.trim() === '' || selectedScopes.length === 0) return;


    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('')
    setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (keyName.trim() === "" |selectedScopes.length === 0) return
    if (keyName.trim() === "" |selectedScopes.length === 0) return
    if (keyName.trim() === "" || selectedScopes.length === 0) return;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    if (keyName.trim() === "" || selectedScopes.length === 0) return;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName("")
    setSelectedScopes([])
<<<<<<< HEAD
<<<<<<< HEAD
    revokeApiKey;
    clearNewApiKey
   } = useApiKeys(),
  const [ showCreateDialog, setShowCreateDialog ] = useState(false),
  const [ showDeleteConfirm, setShowDeleteConfirm ] = useState<string | null>(null),
  const [ showRegenerateConfirm, setShowRegenerateConfirm ] = useState<string | null>(null),
  // Create key form state
  const [ keyName, setKeyName ] = useState(""),
  const [ selectedScopes, setSelectedScopes ] = useState<ApiKeyScope[]>([]),
  // Load keys on mount
  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date - fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks / useApiKeys';
import { Button } from '@/components / ui / button';
import {
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
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
import CodeBlock from './CodeBlock';
export /**
 * ApiKeysManager - Function description
 */
function ApiKeysManager() {
  const {
    keys,
    loading,
    newApiKey,
    fetchApiKeys,
    createApiKey,
    regenerateApiKey,
    revokeApiKey,
    clearNewApiKey,
  } = useApiKeys ();
  const [showCreateDialog, setShowCreateDialog] = useState (false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(
    null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null);
  // Create key form state;
  const [key_name, setKeyName] = useState ('');
  const [selected_scopes, setSelectedScopes] = useState < ApiKeyScope[]>([]);
  // Load keys on mount;
  useState (() => {
    fetchApiKeys ();
  });
  const handleCreateKey = async () => {
    if (=== '' || selected_scopes.length === 0) return) {
  $2
<<<<<<< HEAD
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ('');
    setSelectedScopes ([]) }
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id);
    setShowRegenerateConfirm (null);  useState (() => {
    fetchApiKeys ();
  });
  const handleCreateKey = async () => {
    if (=== "" || selected_scopes.length === 0) return) {
  $2
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ("");
    setSelectedScopes ([]);
  }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)
  }
  const handleRegenerateKey = async (keyId: string,) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  }
  const handleRevokeKey = async (keyId: string,) => {
    await revokeApiKey(keyId)
    clearNewApiKey
  } = useApiKeys(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
  // Create key form state
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()
  }),
  
  const handleCreateKey = async () => {
    if (keyName.trim() === "" || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName(""),
    setSelectedScopes([])
  },

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
  const handleRevokeKey = async (keyId: string,) => {
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options
  const scopeOptions: {
    value: ApiKeyScope
    label: string
    description: string
  }[] = [
  const handleRegenerateKey = async (key_id: string, ) => {
    await regenerateApiKey (key_id),
    setShowRegenerateConfirm (null);
  },
  const handleRevokeKey = async (key_id: string, ) => {
    await revokeApiKey (key_id),
    setShowDeleteConfirm (null);
  },
  // Scope options;
  const scope_options: {
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      value: 'jobs:read'
      label: 'Read Jobs'
      description: 'Access to view job listings'
    }
    {
      value: 'jobs:write'
      label: 'Write Jobs'
      description: 'Create and manage job listings'
    }
    {
      value: 'talent:read'
      label: 'Read Talent'
      description: 'Access to view talent profiles'
    }
    {
      value: 'quotes:write'
      label: 'Write Quotes'
      description: 'Create and manage quotes'
    }
    {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (keyName.trim() === "" || selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName("");
    setSelectedScopes([])
  };
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null)
  };
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null)
  };
  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],
  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev => 
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
        : [...prev, scope]
<<<<<<< HEAD
      value: 'webhooks:manage'
      label: 'Manage Webhooks'
      description: 'Set up and manage webhook endpoints'
    }
  ]
  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev =>
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    )
  }
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      value: 'webhooks:manage',
      label: 'Manage Webhooks',
      description: 'Set up and manage webhook endpoints',
    },
  ];
  // Toggle a scope selection;
  const toggle_scope = (scope: ApiKeyScope) =>: any {
    setSelectedScopes (prev =>;
      prev.includes (scope) ? prev.filter (string => s !== scope) : [...prev, scope]);
  }
  const getExampleCode = (key: string) =>: any {    return `curl -X GET "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer ${key}" \\;
  -H "Content - Type: application / json"` }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ('');  -H "Content - Type: application / json"`;
  }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ('');
    setShowCreateDialog (false);
  }
  return (
import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date-fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys';
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
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
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
import CodeBlock from './CodeBlock';
export function ApiKeysManager() {;
  const {;
    keys,;
    loading,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey,;
    clearNewApiKey,;
  } = useApiKeys();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null);
  // Create key form state;
  const [keyName, setKeyName] = useState('');
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  });
  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName('');
    setSelectedScopes([]);  };
  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);  useState(() => {;
    fetchApiKeys();
  });
  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
  -H "Content-Type: application/json"`
  };
  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName("");
    setSelectedScopes([]);
  };
  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);
  const handleRevokeKey = async (keyId: string) => {;
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null);
  };
  const handleRegenerateKey = async (keyId: string,) => {;
    await regenerateApiKey(keyId),;
    setShowRegenerateConfirm(null);
  },;
  const handleRevokeKey = async (keyId: string,) => {;
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null);
  },;
  // Scope options;
  const scopeOptions: {;
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;
    {;
      value: 'jobs:read',;
      label: 'Read Jobs',;
      description: 'Access to view job listings',;
    },;
    {;
      value: 'jobs:write',;
      label: 'Write Jobs',;
      description: 'Create and manage job listings',;
    },;
    {;
      value: 'talent:read',;
      label: 'Read Talent',;
      description: 'Access to view talent profiles',;
    },;
    {;
      value: 'quotes:write',;
      label: 'Write Quotes',;
      description: 'Create and manage quotes',;
    },;
    {;
      value: 'webhooks:manage',;
      label: 'Manage Webhooks',;
      description: 'Set up and manage webhook endpoints',;
    },;
  ];
  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {;
    setSelectedScopes(prev =>;
      prev && prev.includes(scope) ? prev && prev.filter(s => s !== scope) : [...prev, scope];
    );
  };
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization: Bearer ${key}" \\;
  -H "Content-Type: application/json"`;  };
  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName('');  -H "Content-Type: application/json"`;
  };
  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName('');
    setShowCreateDialog(false);
  };
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <Key className='mr-2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
            You have {keys && keys.length} API {keys && keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className='text-zinc-400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='key-name'>Key Name</Label>;
                  <Input
                    id='key-name'
                    value={keyName}
  -H "Content-Type: application/json"` }
  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName('');  -H "Content-Type: application/json"`
                    onChange={e => setKeyName(e && e.target.value)}
                    placeholder='e && e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;

                <div className='space-y-2'>;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions && scopeOptions.map(scope => (;
                      <div
                        key={scope && scope.value}
                        className='flex items-center space-x-2'>;
                        <Checkbox

                          id={scope && scope.value}                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}                  <div className="grid gap-2 pt-2">;
                    {scopeOptions && scopeOptions.map((scope,) => (;
                      <div key={scope && scope.value} className="flex items-center space-x-2">;
                        <Checkbox
                          id={scope && scope.value} 
                          onCheckedChange={() => toggleScope(scope && scope.value)}
                        />;

                        <Label
                          htmlFor={scope && scope.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {scope && scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {scope && scope.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {scope && scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;
                      </div>;
                        <Checkbox 
                          id={scope.value} 
                          checked={selectedScopes.includes(scope.value)}
  }
  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName('')
    setShowCreateDialog(false)
  }

  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>
          <Key className='mr-2' size={20} /> API Keys
        </CardTitle>
        <CardDescription className='text-zinc-400'>
          Create and manage API keys for accessing the Zion APIs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between items-center mb-6'>
          <p className='text-sm text-zinc-400'>
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant='default'>Create New API Key</Button>
            </DialogTrigger>
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>
              <DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>
                <DialogDescription className='text-zinc-400'>
                  Generate a new API key for accessing the Zion APIs.
                </DialogDescription>
              </DialogHeader>
              <div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <Label htmlFor='key-name'>Key Name</Label>
                  <Input
                    id='key-name'
                    value={keyName}
                    onChange={e => setKeyName(e.target.value)}
                    placeholder='e.g. Production API Key'
                    className='bg-zinc-800 border-zinc-700'                  />
                </div>
                <div className='space-y-2'>
    clearNewApiKey
  } = useApiKeys(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
  // Create key form state
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()
  }),
  
  const handleCreateKey = async () => {
    if (keyName.trim() === "" || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName(""),
    setSelectedScopes([])
  },

  const handleRegenerateKey = async (keyId: string) => {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
<<<<<<< HEAD
    setShowDeleteConfirm(null)
  }
  // Scope options
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  },
  
  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],

  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev => 
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
        : [...prev, scope]
    )
  },
  
  const getExampleCode = (key: string) => {
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`
  },

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName(""),
    setSelectedScopes([]),
    setShowCreateDialog(false)
  },

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Key className="mr-2" size={20} /> API Keys
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Create and manage API keys for accessing the Zion APIs.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>
          
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant="default">Create New API Key</Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Generate a new API key for accessing the Zion APIs.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="key-name">Key Name</Label>
                  <Input
                    id="key-name"
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
                    placeholder="e.g. Production API Key"
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                
                <div className="space-y-2">
=======

  const handleRevokeKey = async (keyId: string) => {

    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
<<<<<<< HEAD
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={scope.value}
                    onChange={e => setKeyName(e && e.target.value)}
                    placeholder='e && e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;
                <div className='space-y-2'>;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions && scopeOptions.map(scope => (;
                      <div
                        key={scope && scope.value}
                        className='flex items-center space-x-2'>;
                        <Checkbox
                          id={scope && scope.value}                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}                  <div className="grid gap-2 pt-2">;
                    {scopeOptions && scopeOptions.map((scope,) => (;
                      <div key={scope && scope.value} className="flex items-center space-x-2">;
                        <Checkbox
                          id={scope && scope.value} 
                          onCheckedChange={() => toggleScope(scope && scope.value)}
                        />;
                        <Label
                          htmlFor={scope && scope.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {scope && scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {scope && scope.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {scope && scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;
                      </div>;
                        <Checkbox 
                          id={scope.value} 

                        <Checkbox
                          id={scope.value}
                        <Checkbox 
                          id={scope.value} 
import { useState } from "react",;
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from "date-fns",;
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",;
;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Input } from "@/components/ui/input",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",;
import CodeBlock from "./CodeBlock",;
export function ApiKeysManager() {;
  const {;
    keys,;
    loading,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey,;
    clearNewApiKey;
  } = useApiKeys(),;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),;
  // Create key form state;
  const [keyName, setKeyName] = useState(""),;
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),;
  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  }),;
  const handleCreateKey = async () => {;
    if (keyName.trim() === "" || selectedScopes.length === 0) return,;
    await createApiKey(keyName, selectedScopes),;
    setShowCreateDialog(false),;
    setKeyName(""),;
    setSelectedScopes([]);
  },;
  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId),;
    setShowRegenerateConfirm(null);
  },;
  const handleRevokeKey = async (keyId: string) => {;
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null);
  },;
  // Scope options;
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [;
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },;
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },;
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },;
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },;
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],;
  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {;
    setSelectedScopes(prev =>;
      prev.includes(scope);
        ? prev.filter(s => s !== scope);
        : [...prev, scope];
    );
  },;
  const getExampleCode = (key: string) => {;
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization: Bearer ${key}" \\;
  -H "Content-Type: application/json"`;
  },;
  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName(""),;
    setSelectedScopes([]);
    setShowCreateDialog(false);
  };
;
import CodeBlock from "./CodeBlock",;
;
export function ApiKeysManager() {;
  const { ;
    keys,;
    loading, ;
    newApiKey,;
    fetchApiKeys, ;
    createApiKey, ;
    regenerateApiKey, ;
    revokeApiKey,;
    clearNewApiKey;
  } = useApiKeys(),;
  ;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),;
  ;
  // Create key form state;
  const [keyName, setKeyName] = useState(""),;
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),;
;
  // Load keys on mount;
  useState(() => {;
    fetchApiKeys(),;
  }),;
  ;
  const handleCreateKey = async () => {;
    if (keyName.trim() === "" || selectedScopes.length === 0) return,;
    ;
    await createApiKey(keyName, selectedScopes),;
    setShowCreateDialog(false),;
    setKeyName(""),;
    setSelectedScopes([]),;
  },;
;
  const handleRegenerateKey = async (keyId:string) => {;
    await regenerateApiKey(keyId),;
    setShowRegenerateConfirm(null);
  },;
  ;
  const handleRevokeKey = async (keyId:string) => {;
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null);
  },;
  ;
  // Scope options;
  const scopeOptions:{ value:ApiKeyScope, label:string, description:string }[] = [;
    { value:'jobs:read', label:'Read Jobs', description:'Access to view job listings' },;
    { value:'jobs:write', label:'Write Jobs', description:'Create and manage job listings' },;
    { value:'talent:read', label:'Read Talent', description:'Access to view talent profiles' },;
    { value:'quotes:write', label:'Write Quotes', description:'Create and manage quotes' },;
    { value:'webhooks:manage', label:'Manage Webhooks', description:'Set up and manage webhook endpoints' }],;
;
  // Toggle a scope selection;
  const toggleScope = (scope:ApiKeyScope) => {;
    setSelectedScopes(prev => ;
      prev.includes(scope) ;
        ? prev.filter(s => s !== scope) ;
        :[...prev, scope];
    ),;
  },;
  ;
  const getExampleCode = (key:string) => {;
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization:Bearer ${key}" \\;
  -H "Content-Type:application/json"`;
  },;
;
  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName(""),;
    setSelectedScopes([]),;
    setShowCreateDialog(false),;
  },;
;
  return (;
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Key className="mr-2" size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
      ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {keys.length} API {keys.length === 1 ? 'key' :'keys'}
          </p>;
          ;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className="text-zinc-400">;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              ;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="key-name">Key Name</Label>;
                  <Input;
                    id="key-name";
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
                    placeholder="e.g. Production API Key";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;
                ;
                <div className="space-y-2">;
                  <Label>Scopes</Label>;
                  <div className="grid gap-2 pt-2">;
                    {scopeOptions.map((scope) => (;
                      <div key={scope.value} className="flex items-center space-x-2">;
                        <Checkbox ;
                          id={scope.value} ;
                          checked={selectedScopes.includes(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
                        <Checkbox;
                          id={scope.value} ;
                          checked={selectedScopes.includes(scope.value)}
=======

                        <Checkbox 
                          id={scope.value} 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
<<<<<<< HEAD
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {scope.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>
<<<<<<< HEAD
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant='outline' onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName.trim() === '' |selectedScopes.length === 0
                  }
                >                  Create Key
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" |selectedScopes.length === 0}>
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}



                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                      </div>
                    ))}



<<<<<<< HEAD
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
                  Create Key
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </Button>
            </DialogContent>
          </Dialog>
        </div>
<<<<<<< HEAD
        {newApiKey && (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0
                  }>                  Create Key              ;
              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <Key className='mr - 2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create API Key</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='key - name'>Key Name</Label>;
                  <Input;
                    id='key - name';
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}
                    placeholder='e.g. Production API Key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2'>;
                  <Label > Scopes</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {scope_options.map (scope => (
                      <div;
                        key={scope.value}
                        className='flex items - center space - x-2';
                      >;
                        <Checkbox;
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className="grid gap - 2 pt - 2">;
                    {scope_options.map ((scope, ) => (
                      <div key={scope.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={scope.value}
                          onCheckedChange={() => toggle_scope (scope.value)}
                        />;
                        <Label;
                          html_for={scope.value}
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                            {scope.description}
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {scope.label}
                          <span className="block text - xs text - zinc - 400 mt - 1">{scope.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant='outline' on_click={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  on_click={handleCreateKey}
                  disabled={
                    key_name.trim () === '' || selected_scopes.length === 0;
                  }
                >                  Create Key;
              <DialogFooter>;
                <Button variant="outline" on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === "" || selected_scopes.length === 0}>;
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>;
                        </Label>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;
              ;
              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>;
                  Create Key;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        
        {/* New API Key Alert */}

        {newApiKey && (
        ;
        {/* New API Key Alert */}
        {newApiKey && (;
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
                  Create Key
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        

        

        {/* New API Key Alert */}
        {newApiKey && (
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium flex items-center">
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated
              </span>
              <Button
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-6 w-6'                onClick={clearNewApiKey}        {/* New API Key Alert */}
        {newApiKey && (
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium flex items-center">
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated
              </span>
              <Button
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={clearNewApiKey}

<<<<<<< HEAD
                onClick = {clearNewApiKey,}
=======

        {/* API Keys List */}
        <div className="space - y-4">;
          {loading ? (
            <div className="text - center py - 8 text - zinc - 500">Loading API keys...</div>) : keys.length === 0 ? (
            <div className="text - center py - 8 text - zinc - 500">;
              <Key className="mx - auto mb - 2 opacity - 30" size={24} />;
              <p > No API keys found.</p>;
              <p className="text - sm mt - 1">Create one to access the Zion APIs.</p>;
            </div>) : (
            keys.map ((key) => (
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded - lg">;
                <div className="flex items - center justify - between">;
                  <div className="flex items - center">;
                    <div>;
                      <h3 className="font - medium">{key.name}</h3>;
                      <div className="flex items - center space - x-2 mt - 1">;
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
                <X size={14} />
              </Button>
            </div>
<<<<<<< HEAD
            <p className='text-sm text-zinc-300 mb-2'>
            <p className="text-sm text-zinc-300 mb-2">
=======

            <p className="text-sm text-zinc-300 mb-2">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={newApiKey} className="mb-3" />
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />
          </div>
        )}
<<<<<<< HEAD
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={clearNewApiKey}
              >;
                <X size={14} />;
              </Button>;
            </div>;
            <p className="text-sm text-zinc-300 mb-2">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* API Keys List */}
        <div className='space-y-4'>
;
        {/* API Keys List */}
        <div className="space-y-4">
          {loading ? (

<<<<<<< HEAD
        {/* API Keys List */}
        <div className='space-y-4'>
;
        {/* API Keys List */}
        <div className="space-y-4">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Key className="mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>
            </div>
          ) : (
<<<<<<< HEAD
            keys.map(key => (
              <div
                key={key.id}
                className='p-4 border border-zinc-800 rounded-lg'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>                    <div>
                      <h3 className='font-medium'>{key.name}</h3>
                      <div className='flex items-center space-x-2 mt-1'>
                        <span className='text-sm text-zinc-400 font-mono'>
                          {key.key_prefix}••••••••••••
                        </span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            keys.map((key) => (
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-medium">{key.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>
<<<<<<< HEAD
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (
                          <Badge
                            variant='secondary'
                            className='bg-red-900 text-white border-red-800'
                          >
                            Revoked
                          </Badge>                        )}
                      </div>
                    </div>
                  </div>
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={newApiKey} className="mb-3" />
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />
          </div>
        )}



        {/* API Keys List */}
        <div className='space-y-4'>
;
        {/* API Keys List */}
        <div className="space-y-4">


          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Key className="mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>
            </div>
          ) : (
            keys.map((key) => (
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-medium">{key.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (


                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
                        )}
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      </div>;
                    </div>;
                  </div>;
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
            <p className="text-sm text-zinc-300 mb-2">;
=======

                      </div>;
                    </div>;
                  </div>;

                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className="mb-3" />;
            <div className="text-sm text-zinc-400">;
              <span className="font-medium">Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />;
          </div>;
        )}
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* API Keys List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;
<<<<<<< HEAD
          ) :keys.length === 0 ? (;
=======
          ) : keys && keys.length === 0 ? (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="text-center py-8 text-zinc-500">;
              <Key className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No API keys found.</p>;
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;
            </div>;
<<<<<<< HEAD
          ) :(;
            keys.map((key) => (;
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center">;
                    <div>;
                      <h3 className="font-medium">{key.name}</h3>;
                      <div className="flex items-center space-x-2 mt-1">;
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (;
                          <Badge className="bg-green-700 text-white">Active</Badge>;
                        ) :(;
=======
          ) : (;
            keys && keys.map((key) => (;
              <div key={key && key.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center">;
                    <div>;
                      <h3 className="font-medium">{key && key.name}</h3>;
                      <div className="flex items-center space-x-2 mt-1">;
                        <span className="text-sm text-zinc-400 font-mono">{key && key.key_prefix}••••••••••••</span>;
                        {key && key.is_active ? (;
                          <Badge className="bg-green-700 text-white">Active</Badge>;
                        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;
<<<<<<< HEAD
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='ghost'
                        size='icon'
                        aria-label='More options'
                      >
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align='end'
                      className='bg-zinc-900 border-zinc-800 text-white'
                    >
=======

                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
                        className='cursor-pointer';
                        disabled={!key && key.is_active}
                        onClick = {() => setShowRegenerateConfirm(key && key.id),}
                        className="cursor-pointer";
                        disabled = {!key && key.is_active,}
                      >;
                        <RefreshCw size={14} className='mr-2' /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem
<<<<<<< HEAD
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="More options">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">


                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                

                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
                        onClick={() => setShowDeleteConfirm(key && key.id)}
                        className='cursor-pointer text-red-500';
                        disabled={!key && key.is_active}                      >;
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className="mr-2" /> Revoke;
                  ;
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
                      <Button variant="ghost" size="icon" aria-label="More options">;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                      <DropdownMenuItem;
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className="cursor-pointer";
                        disabled={!key.is_active}
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer'
                        disabled={!key.is_active}
                        onClick = {() => setShowRegenerateConfirm(key.id),}
                        className="cursor-pointer"
                        disabled = {!key.is_active,}
                      >
                        <RefreshCw size={14} className='mr-2' /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className='cursor-pointer text-red-500'
                        disabled={!key.is_active}                      >
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>                        <X size={14} className="mr-2" /> Revoke
                      >;
                        <RefreshCw size={14} className="mr-2" /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className="cursor-pointer text-red-500";
                        disabled={!key.is_active}
                      >
                        <X size={14} className="mr-2" /> Revoke
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
<<<<<<< HEAD
                <div className='mt-3 flex flex-wrap gap-2'>
                  {key.scopes.map(scope => (
                    <Badge
                      key={scope}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'                    >
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
=======

                

                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
                        onClick={() => setShowDeleteConfirm(key && key.id)}
                        className='cursor-pointer text-red-500';
                        disabled={!key && key.is_active}                      >;
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className="mr-2" /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;

                <div className='mt-3 flex flex-wrap gap-2'>;
                  {key && key.scopes.map(scope => (;
                    <Badge
                      key={scope}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                ;
                <div className="mt-3 flex flex-wrap gap-2">;
                  {key && key.scopes.map((scope,) => (;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Badge
                      key = {scope,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"


<<<<<<< HEAD
                      {scope}
                    </Badge>;
                  ))}

                    >

                      {scope}
                    </Badge>;
                  ))}


                </div>;
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    Created: {format(new Date(key && key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;
                      <Clock size={12} className='mr-1' />;
                      Last used:{' '}
                      {key && key.last_used_at;
                        ? format(new Date(key && key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}
                </div>
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">
                      <Clock size={12} className="mr-1" />
                      Last used: {key.last_used_at 
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy') 
                        : 'Never'}
                    </PopoverTrigger>
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope) => (
                    <Badge 
                      key={scope} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
<<<<<<< HEAD
                      {scope}
                    </Badge>
                  ))}
                </div>
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
                    Created: {format(new Date(key.created_at), 'MMM d, yyyy')}
                  </span>
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>
                      <Clock size={12} className='mr-1' />
                      Last used:{' '}
                      {key.last_used_at
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy')
                        : 'Never'}
                    </PopoverTrigger>
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>
                      <p className='text-sm mb-1'>Last Used</p>
                      <p className='text-xs text-zinc-400'>
                        {key.last_used_at
                          ? format(
                              new Date(key.last_used_at)
                              'MMM d, yyyy HH:mm:ss'
                            )                          : 'This API key has never been used'}                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">
=======


                      {scope}
                    </Badge>;
                  ))}

                    >

                      {scope}
                    </Badge>;
                  ))}


                </div>;

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    Created: {format(new Date(key && key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;
                      <Clock size={12} className='mr-1' />;
                      Last used:{' '}
                      {key && key.last_used_at;
                        ? format(new Date(key && key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}

                </div>
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">
                      <Clock size={12} className="mr-1" />
                      Last used: {key.last_used_at 
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy') 
                        : 'Never'}
                    </PopoverTrigger>
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <p className="text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400">
                        {key.last_used_at
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss')
<<<<<<< HEAD
                          : 'This API key has never been used'}
=======

                          : 'This API key has never been used'}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (
<<<<<<< HEAD
                    <span>
                      Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
                  )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    </PopoverTrigger>;
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;
                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                        {key && key.last_used_at;
                          ? format(;
                              new Date(key && key.last_used_at),;
                              'MMM d, yyyy HH:mm:ss';
                            )                          : 'This API key has never been used'}                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;
                      <p className="text-sm mb-1">Last Used</p>;
                      <p className="text-xs text-zinc-400">;
                        {key && key.last_used_at ;
                          ? format(new Date(key && key.last_used_at), 'MMM d, yyyy HH:mm:ss');
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                  {key && key.expires_at && (;
                    <span>;
                      Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}</span>;
                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
                  )}
                ;
                <div className="mt-3 flex flex-wrap gap-2">;
                  {key.scopes.map((scope) => (;
                    <Badge ;
                      key={scope} ;
                      variant="secondary";
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800";
                    >;                      {scope}
                    </Badge>;
                  ))}
                </div>;
                ;
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created:{format(new Date(key.created_at), 'MMM d, yyyy')}</span>;
                  <Popover>;
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">;
                      <Clock size={12} className="mr-1" />;
                      Last used:{key.last_used_at ;
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy') ;
                        :'Never'}
                    </PopoverTrigger>;
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;
                      <p className="text-sm mb-1">Last Used</p>;
                      <p className="text-xs text-zinc-400">;
                        {key.last_used_at ;
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss');
                          :'This API key has never been used'}
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                  {key.expires_at && (;
                    <span>Expires:{format(new Date(key.expires_at), 'MMM d, yyyy')}</span>;                  )}
                </div>;
              </div>;
            ));
          )}
<<<<<<< HEAD
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Keep your API keys secure. They have the same permissions as your
          account.
        </div>
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          Refresh
        </Button>
      </CardFooter>
        </div>;
      </CardContent>;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      ;
        </div>;
      </CardContent>;
      ;
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;

      {/* Regenerate Key Confirmation Dialog */}
                          <Badge className="bg - green - 700 text - white">Active</Badge>) : (
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked</Badge>)}
                      </div>;
                    </div>;
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
                        on_click={() => setShowRegenerateConfirm (key.id)}
                        className='cursor - pointer';
                        disabled={!key.is_active}
                        on_click = {() => setShowRegenerateConfirm (key.id), }
                        className="cursor - pointer";
                        disabled = {!key.is_active, }
                      >;
                        <RefreshCw size={14} className='mr - 2' /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                        on_click={() => setShowDeleteConfirm (key.id)}
                        className='cursor - pointer text - red - 500';
                        disabled={!key.is_active}                      >;
                        <X size={14} className='mr - 2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className="mr - 2" /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {key.scopes.map (scope => (
                    <Badge;
                      key={scope}
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >;
                <div className="mt - 3 flex flex - wrap gap - 2">;
                  {key.scopes.map ((scope, ) => (
                    <Badge;
                      key = {scope, }
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                      {scope}
                    </Badge>))}
                </div>;
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                  <span>;
                    Created: {format (new Date (key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items - center hover:text - zinc - 300'>;
                      <Clock size={12} className='mr - 1' />;
                      Last used:{' '}
                      {key.last_used_at;
                        ? format (new Date (key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}
                    </PopoverTrigger>;
                    <PopoverContent className='bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3'>;
                      <p className='text - sm mb - 1'>Last Used</p>;
                      <p className='text - xs text - zinc - 400'>;
                        {key.last_used_at;
                          ? format (
                              new Date (key.last_used_at),
                              'MMM d, yyyy HH:mm:ss')                          : 'This API key has never been used'}                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;
                      <p className="text - sm mb - 1">Last Used</p>;
                      <p className="text - xs text - zinc - 400">;
                        {key.last_used_at;
                          ? format (new Date (key.last_used_at), 'MMM d, yyyy HH:mm:ss');
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                  {key.expires_at && (
                    <span>;
                      Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span > Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}</span>)}
                </div>;
              </div>)))}
        </div>;
      </CardContent>;
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;
        <div className='text - xs text - zinc - 500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' on_click={fetchApiKeys}>          Refresh;
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" on_click={fetchApiKeys}>;
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm (null)}
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;
              This action will invalidate the existing key and generate a new;
              one. Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
      <AlertDialog 
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
<<<<<<< HEAD
        </Button>
      </CardFooter>
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will invalidate the existing key and generate a new
              one. Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showRegenerateConfirm &&
                handleRegenerateKey(showRegenerateConfirm)
              }
              className='bg-blue-600 hover:bg-blue-700'            >
            <AlertDialogAction
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
              className="bg-blue-600 hover:bg-blue-700"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This will invalidate the current key and create a new one. Any applications using the old key will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <DialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => {
            if (showRegenerateConfirm) {
                regenerateApiKey(showRegenerateConfirm);
                setShowRegenerateConfirm(null);
            }
        }} className="bg-blue-600 hover:bg-blue-700">
              Regenerate Key
            </AlertDialogAction>
          </DialogFooter>
        </AlertDialogContent>
      </AlertDialog>
<<<<<<< HEAD
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will revoke the API key and it can no longer be used
              to access the API. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'            >
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='bg-blue-600 hover:bg-blue-700'            >;
            <AlertDialogAction
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
              className="bg-blue-600 hover:bg-blue-700";
<<<<<<< HEAD
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
                showRegenerateConfirm &&;
                handleRegenerateKey (showRegenerateConfirm);
              }
              className='bg - blue - 600 hover:bg - blue - 700'            >;
            <AlertDialogAction;
              on_click = {() => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm), }
              className="bg - blue - 600 hover:bg - blue - 700";
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;
              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm)}
              className="bg - blue - 600 hover:bg - blue - 700";
          Refresh;
        </Button>;
      </CardFooter>;
;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog ;
        open={showRegenerateConfirm !== null} ;
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction ;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete API Key</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action cannot be undone. The API key will be permanently deleted and any applications using it will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <DialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => {
            if (showDeleteConfirm) {
                deleteApiKey(showDeleteConfirm);
                setShowDeleteConfirm(null);
            }
        }} className="bg-red-600 hover:bg-red-700">
              Delete Key
            </AlertDialogAction>
          </DialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>);
}
;
}
=======
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ('');
    setSelectedScopes ([]) }
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id);
    setShowRegenerateConfirm (null);  useState (() => {
    fetchApiKeys ();
  });
  const handleCreateKey = async () => {
    if (=== "" || selected_scopes.length === 0) return) {
  $2
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ("");
    setSelectedScopes ([]);

  }
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id);
    setShowRegenerateConfirm (null);
  const handleRevokeKey = async (key_id: string) => {
    await revokeApiKey (key_id);
    setShowDeleteConfirm (null);
  }

  const handleRegenerateKey = async (key_id: string, ) => {
    await regenerateApiKey (key_id),
    setShowRegenerateConfirm (null);
  },
  const handleRevokeKey = async (key_id: string, ) => {
    await revokeApiKey (key_id),
    setShowDeleteConfirm (null);
  },
  // Scope options;
  const scope_options: {
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;

    {
      value: 'jobs:read'
      label: 'Read Jobs'
      description: 'Access to view job listings'
    }
    {
      value: 'jobs:write'
      label: 'Write Jobs'
      description: 'Create and manage job listings'
    }
    {
      value: 'talent:read'
      label: 'Read Talent'
      description: 'Access to view talent profiles'
    }
    {
      value: 'quotes:write'
      label: 'Write Quotes'
      description: 'Create and manage quotes'
    }
    {

    if (keyName.trim() === "" || selectedScopes.length === 0) return;
    
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName("");
    setSelectedScopes([])
  };

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null)
  };
  
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null)
  };
  
  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],
  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev => 
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
        : [...prev, scope]

    )
  }
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\

      value: 'webhooks:manage',
      label: 'Manage Webhooks',
      description: 'Set up and manage webhook endpoints',
    },
  ];
  // Toggle a scope selection;
  const toggle_scope = (scope: ApiKeyScope) =>: any {
    setSelectedScopes (prev =>;
      prev.includes (scope) ? prev.filter (string => s !== scope) : [...prev, scope]);
  }
  const getExampleCode = (key: string) =>: any {    return `curl -X GET "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer ${key}" \\;
  -H "Content - Type: application / json"` }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ('');  -H "Content - Type: application / json"`;

  }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ('');
    setShowCreateDialog (false);
  }

  return (


import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date-fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys';
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
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
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

import CodeBlock from './CodeBlock';
export function ApiKeysManager() {;
  const {;
    keys,;
    loading,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey,;
    clearNewApiKey,;
  } = useApiKeys();

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null);

  // Create key form state;
  const [keyName, setKeyName] = useState('');
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  });
  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName('');
    setSelectedScopes([]);  };

  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);  useState(() => {;
    fetchApiKeys();
  });

  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
  -H "Content-Type: application/json"`
  };

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName("");
    setSelectedScopes([]);
  };

  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);

  const handleRevokeKey = async (keyId: string) => {;
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null);
  };

  const handleRegenerateKey = async (keyId: string,) => {;
    await regenerateApiKey(keyId),;
    setShowRegenerateConfirm(null);
  },;

  const handleRevokeKey = async (keyId: string,) => {;
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null);
  },;

  // Scope options;
  const scopeOptions: {;
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;
    {;
      value: 'jobs:read',;
      label: 'Read Jobs',;
      description: 'Access to view job listings',;
    },;
    {;
      value: 'jobs:write',;
      label: 'Write Jobs',;
      description: 'Create and manage job listings',;
    },;
    {;
      value: 'talent:read',;
      label: 'Read Talent',;
      description: 'Access to view talent profiles',;
    },;
    {;
      value: 'quotes:write',;
      label: 'Write Quotes',;
      description: 'Create and manage quotes',;
    },;
    {;
      value: 'webhooks:manage',;
      label: 'Manage Webhooks',;
      description: 'Set up and manage webhook endpoints',;
    },;
  ];

  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {;
    setSelectedScopes(prev =>;
      prev && prev.includes(scope) ? prev && prev.filter(s => s !== scope) : [...prev, scope];
    );
  };

  const getExampleCode = (key: string) => {    return `curl -X GET "https://api && api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization: Bearer ${key}" \\;
  -H "Content-Type: application/json"`;  };

  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName('');  -H "Content-Type: application/json"`;
  };

  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName('');
    setShowCreateDialog(false);
  };

  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <Key className='mr-2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
            You have {keys && keys.length} API {keys && keys.length === 1 ? 'key' : 'keys'}
          </p>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className='text-zinc-400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;

              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='key-name'>Key Name</Label>;
                  <Input
                    id='key-name'
                    value={keyName}
                    onChange={e => setKeyName(e && e.target.value)}
                    placeholder='e && e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;

                <div className='space-y-2'>;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions && scopeOptions.map(scope => (;
                      <div
                        key={scope && scope.value}
                        className='flex items-center space-x-2'>;
                        <Checkbox

                          id={scope && scope.value}                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}                  <div className="grid gap-2 pt-2">;
                    {scopeOptions && scopeOptions.map((scope,) => (;
                      <div key={scope && scope.value} className="flex items-center space-x-2">;
                        <Checkbox
                          id={scope && scope.value} 
                          onCheckedChange={() => toggleScope(scope && scope.value)}
                        />;

                        <Label
                          htmlFor={scope && scope.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {scope && scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {scope && scope.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {scope && scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;
                      </div>;
                        <Checkbox 
                          id={scope.value} 
                          checked={selectedScopes.includes(scope.value)}
  }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)
  }
  const handleRegenerateKey = async (keyId: string,) => {

    clearNewApiKey
  } = useApiKeys(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
  // Create key form state
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()
  }),
  
  const handleCreateKey = async () => {
    if (keyName.trim() === "" || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName(""),
    setSelectedScopes([])
  },

  const handleRegenerateKey = async (keyId: string) => {

    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  

  const handleRevokeKey = async (keyId: string) => {

    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options


                  <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={scope.value}
                        <Checkbox 
                          id={scope.value} 

                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {scope.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>



                      </div>
                    ))}



                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0
                  }>                  Create Key              ;
              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <Key className='mr - 2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create API Key</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='key - name'>Key Name</Label>;
                  <Input;
                    id='key - name';
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}
                    placeholder='e.g. Production API Key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2'>;
                  <Label > Scopes</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {scope_options.map (scope => (
                      <div;
                        key={scope.value}
                        className='flex items - center space - x-2';
                      >;
                        <Checkbox;
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className="grid gap - 2 pt - 2">;
                    {scope_options.map ((scope, ) => (
                      <div key={scope.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={scope.value}
                          onCheckedChange={() => toggle_scope (scope.value)}
                        />;
                        <Label;
                          html_for={scope.value}
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                            {scope.description}
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {scope.label}
                          <span className="block text - xs text - zinc - 400 mt - 1">{scope.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant='outline' on_click={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  on_click={handleCreateKey}
                  disabled={
                    key_name.trim () === '' || selected_scopes.length === 0;
                  }
                >                  Create Key;
              <DialogFooter>;
                <Button variant="outline" on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === "" || selected_scopes.length === 0}>;

                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        
        {/* New API Key Alert */}

        {newApiKey && (
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;
              <Button

        

        {/* New API Key Alert */}
        {newApiKey && (
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium flex items-center">
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated
              </span>
              <Button


                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={clearNewApiKey}


        {/* API Keys List */}
        <div className="space - y-4">;
          {loading ? (
            <div className="text - center py - 8 text - zinc - 500">Loading API keys...</div>) : keys.length === 0 ? (
            <div className="text - center py - 8 text - zinc - 500">;
              <Key className="mx - auto mb - 2 opacity - 30" size={24} />;
              <p > No API keys found.</p>;
              <p className="text - sm mt - 1">Create one to access the Zion APIs.</p>;
            </div>) : (
            keys.map ((key) => (
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded - lg">;
                <div className="flex items - center justify - between">;
                  <div className="flex items - center">;
                    <div>;
                      <h3 className="font - medium">{key.name}</h3>;
                      <div className="flex items - center space - x-2 mt - 1">;
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (




              >
                <X size={14} />
              </Button>
            </div>
            <p className='text-sm text-zinc-300 mb-2'>
            <p className="text-sm text-zinc-300 mb-2">

              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={newApiKey} className="mb-3" />
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />
          </div>
        )}



        {/* API Keys List */}
        <div className='space-y-4'>
;
        {/* API Keys List */}
        <div className="space-y-4">


          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Key className="mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>
            </div>
          ) : (
            keys.map(key => (
              <div
                key={key.id}
                className='p-4 border border-zinc-800 rounded-lg'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>                    <div>
                      <h3 className='font-medium'>{key.name}</h3>
                      <div className='flex items-center space-x-2 mt-1'>
                        <span className='text-sm text-zinc-400 font-mono'>
                          {key.key_prefix}••••••••••••
                        </span>
            keys.map((key) => (
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-medium">{key.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>

                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (
                      className='bg-zinc-900 border-zinc-800 text-white'>;
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer'
                        disabled={!key.is_active}
                        onClick = {() => setShowRegenerateConfirm(key.id),}
                        className="cursor-pointer"
                        disabled = {!key.is_active,}
                      >
                        <RefreshCw size={14} className='mr-2' /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className='cursor-pointer text-red-500'
                        disabled={!key.is_active}                      >
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>                        <X size={14} className="mr-2" /> Revoke
                      >;
                        <RefreshCw size={14} className='mr-2' /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem


                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                

                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
                        onClick={() => setShowDeleteConfirm(key && key.id)}
                        className='cursor-pointer text-red-500';
                        disabled={!key && key.is_active}                      >;
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className="mr-2" /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;

                <div className='mt-3 flex flex-wrap gap-2'>;
                  {key && key.scopes.map(scope => (;
                    <Badge
                      key={scope}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                ;
                <div className="mt-3 flex flex-wrap gap-2">;
                  {key && key.scopes.map((scope,) => (;


                    <Badge
                      key = {scope,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope) => (
                    <Badge 
                      key={scope} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >


                      {scope}
                    </Badge>;
                  ))}

                    >

                      {scope}
                    </Badge>;
                  ))}


                </div>;

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    Created: {format(new Date(key && key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;
                      <Clock size={12} className='mr-1' />;
                      Last used:{' '}
                      {key && key.last_used_at;
                        ? format(new Date(key && key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}

                </div>
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">
                      <Clock size={12} className="mr-1" />
                      Last used: {key.last_used_at 
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy') 
                        : 'Never'}
                    </PopoverTrigger>
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">

                      <p className="text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400">
                        {key.last_used_at
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss')

                          : 'This API key has never been used'}

                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (

                    </PopoverTrigger>;
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;
                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                        {key && key.last_used_at;
                          ? format(;
                              new Date(key && key.last_used_at),;
                              'MMM d, yyyy HH:mm:ss';
                            )                          : 'This API key has never been used'}                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;
                      <p className="text-sm mb-1">Last Used</p>;
                      <p className="text-xs text-zinc-400">;
                        {key && key.last_used_at ;
                          ? format(new Date(key && key.last_used_at), 'MMM d, yyyy HH:mm:ss');
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                  {key && key.expires_at && (;
                    <span>;
                      Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}</span>;

                  )}
                </div>
              </div>
            ))
          )}


      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>

          Refresh

        </Button>
      </CardFooter>
        </div>;
      </CardContent>;

      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      ;
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;
        </Button>;
      </CardFooter>;

      {/* Regenerate Key Confirmation Dialog */}

                          <Badge className="bg - green - 700 text - white">Active</Badge>) : (
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked</Badge>)}
                      </div>;
                    </div>;
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
                        on_click={() => setShowRegenerateConfirm (key.id)}
                        className='cursor - pointer';
                        disabled={!key.is_active}
                        on_click = {() => setShowRegenerateConfirm (key.id), }
                        className="cursor - pointer";
                        disabled = {!key.is_active, }
                      >;
                        <RefreshCw size={14} className='mr - 2' /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                        on_click={() => setShowDeleteConfirm (key.id)}
                        className='cursor - pointer text - red - 500';
                        disabled={!key.is_active}                      >;
                        <X size={14} className='mr - 2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className="mr - 2" /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {key.scopes.map (scope => (
                    <Badge;
                      key={scope}
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >;
                <div className="mt - 3 flex flex - wrap gap - 2">;
                  {key.scopes.map ((scope, ) => (
                    <Badge;
                      key = {scope, }
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                      {scope}
                    </Badge>))}
                </div>;
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                  <span>;
                    Created: {format (new Date (key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items - center hover:text - zinc - 300'>;
                      <Clock size={12} className='mr - 1' />;
                      Last used:{' '}
                      {key.last_used_at;
                        ? format (new Date (key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}
                    </PopoverTrigger>;
                    <PopoverContent className='bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3'>;
                      <p className='text - sm mb - 1'>Last Used</p>;
                      <p className='text - xs text - zinc - 400'>;
                        {key.last_used_at;
                          ? format (
                              new Date (key.last_used_at),
                              'MMM d, yyyy HH:mm:ss')                          : 'This API key has never been used'}                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;
                      <p className="text - sm mb - 1">Last Used</p>;
                      <p className="text - xs text - zinc - 400">;
                        {key.last_used_at;
                          ? format (new Date (key.last_used_at), 'MMM d, yyyy HH:mm:ss');
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                  {key.expires_at && (
                    <span>;
                      Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span > Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}</span>)}
                </div>;
              </div>)))}
        </div>;
      </CardContent>;
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;
        <div className='text - xs text - zinc - 500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' on_click={fetchApiKeys}>          Refresh;
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" on_click={fetchApiKeys}>;
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm (null)}
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;

              This action will invalidate the existing key and generate a new;
              one. Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

              className="bg-blue-600 hover:bg-blue-700"
      <AlertDialog 
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}

      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action will invalidate the existing key and generate a new one.
              Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
              className='bg-blue-600 hover:bg-blue-700'            >;
            <AlertDialogAction
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
              className="bg-blue-600 hover:bg-blue-700";
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will revoke the API key and it can no longer be used
              to access the API. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'            >
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700"
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action will revoke the API key and it can no longer be used to access the API.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700"
            >
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}
;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </div>;
            ));
          )}
        </div>
      </CardContent>
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>
          Refresh
        </Button>
      </CardFooter>

      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null} ;
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
                showRegenerateConfirm &&;
                handleRegenerateKey (showRegenerateConfirm);
              }
              className='bg - blue - 600 hover:bg - blue - 700'            >;
            <AlertDialogAction;
              on_click = {() => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm), }
              className="bg - blue - 600 hover:bg - blue - 700";
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;

              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
                showDeleteConfirm && handleRevokeKey (showDeleteConfirm);
              }
              className='bg - red - 600 hover:bg - red - 700'            >;
            <AlertDialogAction;
              on_click = {() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm), }
              className="bg - red - 600 hover: bg - red - 700";
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
;
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog ;
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null} ;
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
              This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
  );
}
;
    </Card>;
  );}
 import {;
  {;
  {;
  Button ;
}from "@/components/ui/button";
import {;
  {;
  {;
  Card, CardContent, CardDescription, CardFooter,  CardHeader, CardTitle ";
}from "@/components/ui/card";
import {;
  {;
  {;
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader,  DialogTitle, DialogTrigger ";
}from "@/components/ui/dialog";
import {;
  {;
  {;
  Input ";
}from "@/components/ui/input";
import {;
  {;
  {;
  Checkbox ";
}from "@/components/ui/checkbox";
import {;
  {;
  {;
  Label ";
}from "@/components/ui/label";
import {;
  {;
  {;
  Badge ";
}from "@/components/ui/badge";
import {;
  {;
  {;
  Popover,  PopoverContent, PopoverTrigger ";
}from "@/components/ui/popover";
import {;
  {;
  {;
  DropdownMenu, DropdownMenuContent,  DropdownMenuItem, DropdownMenuTrigger ";
}from "@/components/ui/dropdown-menu";
import {;
  {;
  {;
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,  AlertDialogHeader, AlertDialogTitle ";
}from "@/components/ui/alert-dialog";
const [showCreateDialog, setShowCreateDialog] = useState (false);
const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null> (null);
//Create key form state //Load keys on mount await createApiKey (keyName, selectedScopes);
setShowCreateDialog (false);
//Toggle a scope selection const toggleScope = (scope: ApiKeyScope) => {";
  setSelectedScopes (prev => prev.includes (scope) ? prev.filter (s => s !== scope) -H "Authorization: Bearer $ {;
  key ";
}" \\ -H "Content-Type: application/json"` ;
};
//Reset form when dialog closes const handleDialogClose = () => {";
  setKeyName ("");
setSelectedScopes ([]);
setShowCreateDialog (false) ;
};";
 return `curl -X GET " https://api.ziontechgroup.com/v1/jobs"\\ -H " Authorization: Bearer $ {;
  key ";
}"\\ -H " Content-Type: application/json"`;
};";
//Reset form when dialog closes </CardTitle> <CardDescription className=" text-zinc-400"> Create and manage API keys for accessing the Zion APIs. </CardDescription> </CardHeader> <CardContent> </p> <Dialog open= {;
  showCreateDialog ;
}onOpenChange= {;
  setShowCreateDialog ";
}> <DialogTrigger asChild> <Button variant=" default">Create New API Key</Button> </DialogTrigger> <DialogContent className=" bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create API Key</DialogTitle> <DialogDescription className=" text-zinc-400"> Generate a new API key for accessing the Zion APIs. </DialogDescription> </DialogHeader> <div className=" space-y-4 py-4"> <div className=" space-y-2"> <Label htmlFor=" key-name">Key Name</Label> <Input /> </div> <div className=" space-y-2"> <Label>Scopes</Label> <Checkbox id= {;
  scope.value ;
}checked= {;
  selectedScopes.includes (scope.value) ;
}onCheckedChange= {;
  () => toggleScope (scope.value) ;
}/> <Label </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> Create Key </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;
  /* New API Key Alert */ ;
}{";
  newApiKey && (<div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md"> <div className="flex justify-between items-start mb-2"> <span className="font-medium flex items-center"> <Check size= {;
  16 ";
}className="mr-2 text-green-500"/> New API Key Generated </span> <Button variant=" ghost"size=" icon"className="h-6 w-6"onClick={;
  clearNewApiKey ;
}> <X size= {;
  14 ";
}/> </Button> </div> <p className="text-sm text-zinc-300 mb-2"> This key will only be displayed once. Please save it securely. </p> <CodeBlock code= {;
  newApiKey ";
}className="mb-3"/> <div className="text-sm text-zinc-400"> <span className="font-medium">Example usage:</span> </div> </div>) ;
}{;
  /* API Keys List */ ";
}<div className="space-y-4"> {";
  loading ? (<div className="text-center py-8 text-zinc-500">Loading API keys...</div>) : keys.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Key className="mx-auto mb-2 opacity-30"size= {;
  24 ";
}/> <p>No API keys found.</p> <p className="text-sm mt-1">Create one to access the Zion APIs.</p> </div>) : (keys.map ( (key) => (<div key= {;
  key.id ";
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div className="flex items-center"> <div> <h3 className="font-medium"> {;
  key.name ";
}</h3> <div className="flex items-center space-x-2 mt-1">) : (<Badge variant=" secondary"className="bg-red-900 text-white border-red-800">Revoked</Badge>) ";
}</div> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={;
  () => setShowRegenerateConfirm (key.id) ";
}className="cursor-pointer"disabled= {;
  !key.is active ;
}> <RefreshCw size= {;
  14 ";
}className="mr-2"/> Regenerate </DropdownMenuItem> <DropdownMenuItem onClick={;
  () => setShowDeleteConfirm (key.id) ";
}className="cursor-pointer text-red-500"disabled= {;
  !key.is active ;
}> <X size= {;
  14 ";
}className="mr-2"/> Revoke </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> <Badge key= {;
  scope ";
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;
  scope ;
}</Badge>) ) ";
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {;
  format (new Date (key.created at),  'MMM d, yyyy') ";
}</span> <Popover> <PopoverTrigger className="flex items-center hover:text-zinc-300"> <Clock size= {;
  12 ";
}className="mr-1"/> Last used: {';
  key.last used at ? format (new Date (key.last used at),  'MMM d, yyyy') : 'Never' ";
}</PopoverTrigger> <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3"> <p className="text-sm mb-1">Last Used</p> <p className="text-xs text-zinc-400"> {';
  key.last used at ? format (new Date (key.last used at),  'MMM d, yyyy HH:mm:ss') : 'This API key has never been used' ;
}</p> </PopoverContent> </Popover> {;
  key.expires at && (<span>Expires: {';
  format (new Date (key.expires at),  'MMM d, yyyy') ;
}</span>) ;
}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Keep your API keys secure. They have the same permissions as your account. </div> Refresh </Button> </CardFooter> {;
  /* Regenerate Key Confirmation Dialog */ ;
}<AlertDialog open= {;
  showRegenerateConfirm !== null ;
}onOpenChange= {;
  (open) => !open && setShowRegenerateConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will invalidate the existing key and generate a new one. Any applications using this key will need to be updated. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction onClick={;
  () => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm) ";
}className="bg-blue-600 hover:bg-blue-700"> Regenerate </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> {;
  /* Delete Key Confirmation Dialog */ ;
}<AlertDialog open= {;
  showDeleteConfirm !== null ;
}onOpenChange= {;
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Revoke API Key?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will revoke the API key and it can no longer be used to access the API. This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Revoke </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}'"
;
=======


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

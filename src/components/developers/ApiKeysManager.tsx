<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date-fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,;
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,;
} from '@/components/ui/alert-dialog';

import CodeBlock from './CodeBlock';

export function ApiKeysManager() {
  const {
    keys,
    loading,
    newApiKey,
    fetchApiKeys,
    createApiKey,
    regenerateApiKey,
    revokeApiKey,
    clearNewApiKey,
  } = useApiKeys();

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(
    null
  );
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<
    string | null
  >(null);

  // Create key form state
  const [keyName, setKeyName] = useState('');
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

  // Load keys on mount
  useState(() => {
    fetchApiKeys();
  });

  const handleCreateKey = async () => {
    if (keyName.trim() === '' || selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
<<<<<<< HEAD
    setKeyName('');
    setSelectedScopes([]);  };

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);
=======
<<<<<<< HEAD
    setKeyName('');
    setSelectedScopes([]);
=======

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

    loading, 
    newApiKey;
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
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
  });
  
  const handleCreateKey = async () => {
    if (keyName.trim() === "" || selectedScopes.length === 0) return;
    
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName("");
    setSelectedScopes([])
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setKeyName("");
    setSelectedScopes([])
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);
<<<<<<< HEAD
<<<<<<< HEAD
    setShowRegenerateConfirm(null);
=======
    setShowRegenerateConfirm(null)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null);
  };

  // Scope options
  const scopeOptions: {
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [
    {
      value: 'jobs:read',
      label: 'Read Jobs',
      description: 'Access to view job listings',
    },
    {
      value: 'jobs:write',
      label: 'Write Jobs',
      description: 'Create and manage job listings',
    },
    {
      value: 'talent:read',
      label: 'Read Talent',
      description: 'Access to view talent profiles',
    },
    {
      value: 'quotes:write',
      label: 'Write Quotes',
      description: 'Create and manage quotes',
    },
    {
      value: 'webhooks:manage',
      label: 'Manage Webhooks',
      description: 'Set up and manage webhook endpoints',
    },
  ];

  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev =>
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
    );
  };

  const getExampleCode = (key: string) => {
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
<<<<<<< HEAD
  -H "Content-Type: application/json"`;  };

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName('');
=======
<<<<<<< HEAD
  -H "Content-Type: application/json"`;
=======
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
  };
  
  const getExampleCode = (key: string) => {
    return `curl -X GET "https: //api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  -H "Content-Type: application/json"`
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  // Reset form when dialog closes
  const handleDialogClose = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    setKeyName('');
=======
    setKeyName("");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    setSelectedScopes([]);
    setShowCreateDialog(false);
  };

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
                    className='bg-zinc-800 border-zinc-700'
                  />
                </div>

                <div className='space-y-2'>
                  <Label>Scopes</Label>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='grid gap-2 pt-2'>
                    {scopeOptions.map(scope => (
                      <div
                        key={scope.value}
                        className='flex items-center space-x-2'
                      >
                        <Checkbox
<<<<<<< HEAD
                          id={scope.value}                          checked={selectedScopes.includes(scope.value)}
=======
                          id={scope.value}
=======
    setKeyName("");
    setSelectedScopes([]);
    setShowCreateDialog(false)
  };


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
                  <Label>Scopes</Label>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={scope.value} 
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          checked={selectedScopes.includes(scope.value)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {scope.description}
<<<<<<< HEAD
                          </span>                        </Label>
=======
                          </span>
=======
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </Label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

              <DialogFooter>
                <Button variant='outline' onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName.trim() === '' || selectedScopes.length === 0
                  }
<<<<<<< HEAD
                >                  Create Key
=======
                >
=======
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Create Key
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {/* New API Key Alert */}
        {newApiKey && (
          <div className='mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md'>
            <div className='flex justify-between items-start mb-2'>
              <span className='font-medium flex items-center'>
                <Check size={16} className='mr-2 text-green-500' /> New API Key
                Generated
              </span>
              <Button
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-6 w-6'                onClick={clearNewApiKey}
=======
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-6 w-6'
=======
        
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                variant="ghost"
                size="icon"
                className="h-6 w-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                onClick={clearNewApiKey}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <X size={14} />
              </Button>
            </div>
<<<<<<< HEAD
            <p className='text-sm text-zinc-300 mb-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <p className='text-sm text-zinc-300 mb-2'>
=======
            <p className="text-sm text-zinc-300 mb-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={newApiKey} className='mb-3' />
            <div className='text-sm text-zinc-400'>
              <span className='font-medium'>Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language='bash' />
          </div>
        )}

        {/* API Keys List */}
        <div className='space-y-4'>
          {loading ? (
            <div className='text-center py-8 text-zinc-500'>
              Loading API keys...
            </div>
          ) : keys.length === 0 ? (
            <div className='text-center py-8 text-zinc-500'>
              <Key className='mx-auto mb-2 opacity-30' size={24} />
              <p>No API keys found.</p>
              <p className='text-sm mt-1'>
                Create one to access the Zion APIs.
              </p>
            </div>
          ) : (
            keys.map(key => (
              <div
                key={key.id}
                className='p-4 border border-zinc-800 rounded-lg'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div>
                      <h3 className='font-medium'>{key.name}</h3>
                      <div className='flex items-center space-x-2 mt-1'>
                        <span className='text-sm text-zinc-400 font-mono'>
                          {key.key_prefix}••••••••••••
                        </span>
                        {key.is_active ? (
                          <Badge className='bg-green-700 text-white'>
                            Active
                          </Badge>
                        ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          <Badge
                            variant='secondary'
                            className='bg-red-900 text-white border-red-800'
                          >
                            Revoked
<<<<<<< HEAD
                          </Badge>                        )}
                      </div>
                    </div>
                  </div>

=======
                          </Badge>
=======
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
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        )}
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer'
                        disabled={!key.is_active}
                      >
                        <RefreshCw size={14} className='mr-2' /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className='cursor-pointer text-red-500'
                        disabled={!key.is_active}
                      >
<<<<<<< HEAD
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
=======
<<<<<<< HEAD
                        <X size={14} className='mr-2' /> Revoke
=======
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="More options">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className="cursor-pointer"
                        disabled={!key.is_active}
                      >
                        <RefreshCw size={14} className="mr-2" /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className="cursor-pointer text-red-500"
                        disabled={!key.is_active}
                      >
                        <X size={14} className="mr-2" /> Revoke
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <X size={14} className="mr-2" /> Revoke
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

                <div className='mt-3 flex flex-wrap gap-2'>
                  {key.scopes.map(scope => (
                    <Badge
                      key={scope}
                      variant='secondary'
<<<<<<< HEAD
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'                    >
=======
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope) => (
                    <Badge 
                      key={scope} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {scope}
                    </Badge>
                  ))}
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
                    Created: {format(new Date(key.created_at), 'MMM d, yyyy')}
                  </span>
<<<<<<< HEAD
=======
=======
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <Popover>
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>
                      <Clock size={12} className='mr-1' />
                      Last used:{' '}
                      {key.last_used_at
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy')
                        : 'Never'}
                    </PopoverTrigger>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>
                      <p className='text-sm mb-1'>Last Used</p>
                      <p className='text-xs text-zinc-400'>
                        {key.last_used_at
                          ? format(
                              new Date(key.last_used_at),
                              'MMM d, yyyy HH:mm:ss'
<<<<<<< HEAD
                            )                          : 'This API key has never been used'}
=======
                            )
=======
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">
                      <Clock size={12} className="mr-1" />
                      Last used: {key.last_used_at 
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy') 
                        : 'Never'}
                    </PopoverTrigger>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">
                      <p className="text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400">
                        {key.last_used_at 
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss')
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          : 'This API key has never been used'}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (
<<<<<<< HEAD
                    <span>
                      Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    <span>
                      Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}
                    </span>
=======
                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Keep your API keys secure. They have the same permissions as your
          account.
        </div>
<<<<<<< HEAD
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh
=======
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>
=======
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Refresh
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </Button>
      </CardFooter>

      {/* Regenerate Key Confirmation Dialog */}
<<<<<<< HEAD
      <AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
=======
      <AlertDialog 
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      >
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <AlertDialogAction
              onClick={() =>
                showRegenerateConfirm &&
                handleRegenerateKey(showRegenerateConfirm)
              }
<<<<<<< HEAD
              className='bg-blue-600 hover:bg-blue-700'            >
=======
              className='bg-blue-600 hover:bg-blue-700'
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <AlertDialogAction 
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Key Confirmation Dialog */}
<<<<<<< HEAD
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
=======
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      >
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <AlertDialogAction
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
<<<<<<< HEAD
              className='bg-red-600 hover:bg-red-700'            >
=======
              className='bg-red-600 hover:bg-red-700'
=======
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <AlertDialogAction 
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

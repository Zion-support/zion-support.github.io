keys,

    loading, 
    newApiKey;
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


  // Load keys on mount
  useState(() => {
    fetchApiKeys()


  })
  const handleCreateKey = async () => {
    if (keyName.trim() === '' |selectedScopes.length === 0) return
    if (keyName.trim() === '' || selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('')
    setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {

    if (keyName.trim() === "" |selectedScopes.length === 0) return
    if (keyName.trim() === "" || selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName("")
    setSelectedScopes([])

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

  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],


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

                  <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={scope.value}
                        <Checkbox 
                          id={scope.value} 



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


            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


              This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;


      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;

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

              This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;


            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD


;
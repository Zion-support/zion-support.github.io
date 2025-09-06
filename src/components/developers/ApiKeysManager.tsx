<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'

  // Create key form state
  const [keyName, setKeyName] = useState("");

=======
import { useState } from 'react'
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'

=======
import { useState } from 'react'
=======

import { useState } from "react",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

  // Create key form state
  const [keyName, setKeyName] = useState("");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======

import { useState } from "react",
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react'
import { format } from "date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  // Create key form state
  const [keyName, setKeyName] = useState("");
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

export function ApiKeysManager() {
=======
xport function ApiKeysManager() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const { 
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
    keys,
    loading, 
    newApiKey;
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

    revokeApiKey,
<<<<<<< HEAD

  // Create key form state
  const [keyName, setKeyName] = useState(""),

  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()

=======
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ApiKeysManager() {
  const { 
    keys,
    loading, 
    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    clearNewApiKey
  } = useApiKeys(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
<<<<<<< HEAD
    if (keyName.trim() === '' |selectedScopes.length === 0) return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('')
    setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
=======
=======
<<<<<<< HEAD
    clearNewApiKey,
  } = useApiKeys()
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(
    null
  )
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<
    string | null
  >(null)
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Create key form state
  const [keyName, setKeyName] = useState(""),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()
<<<<<<< HEAD

  })
  const handleCreateKey = async () => {
<<<<<<< HEAD
    if (keyName.trim() === '' |selectedScopes.length === 0) return
=======
    if (keyName.trim() === '' || selectedScopes.length === 0) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('');
    setSelectedScopes([]) };
  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
    if (keyName.trim() === "" |selectedScopes.length === 0) return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    if (keyName.trim() === "" |selectedScopes.length === 0) return
=======
    if (keyName.trim() === "" || selectedScopes.length === 0) return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName("")
    setSelectedScopes([])
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)
  }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
  const handleRegenerateKey = async (keyId: string,) => {
<<<<<<< HEAD

    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },

    await revokeApiKey(keyId),

    setShowDeleteConfirm(null)
  }
  // Scope options

=======
=======
  const handleRegenerateKey = async (keyId: string,) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  }
  const handleRevokeKey = async (keyId: string,) => {
    await revokeApiKey(keyId)
<<<<<<< HEAD
=======
=======
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
<<<<<<< HEAD
  const handleRevokeKey = async (keyId: string,) => {
    await revokeApiKey(keyId),
>>>>>>>     setShowDeleteConfirm(null)
  }
  // Scope options
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  const handleRevokeKey = async (keyId: string,) => {
=======
  const handleRevokeKey = async (keyId: string) => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    await revokeApiKey(keyId),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setShowDeleteConfirm(null)
  }
  // Scope options
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const scopeOptions: {
    value: ApiKeyScope
    label: string
    description: string
  }[] = [
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
      value: 'webhooks:manage'
      label: 'Manage Webhooks'
      description: 'Set up and manage webhook endpoints'
    }
  ]
  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev =>
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )
  }
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
  }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ('');
    setShowCreateDialog (false);
  }
  return (
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
=======
  -H "Content-Type: application/json"` }
  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName('');  -H "Content-Type: application/json"`
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onChange={e => setKeyName(e.target.value)}
                    placeholder='e.g. Production API Key'
                    className='bg-zinc-800 border-zinc-700'                  />
                </div>
                <div className='space-y-2'>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
<<<<<<< HEAD

  const handleRevokeKey = async (keyId: string) => {

    await revokeApiKey(keyId),
>>>>>>>     setShowDeleteConfirm(null)
  }
  // Scope options
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  },
  
  // Scope options
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
<<<<<<< HEAD

=======
>>>>>>>                   <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={scope.value}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
<<<<<<< HEAD
                        <Checkbox
                          id={scope.value}
=======
                        <Checkbox 
                          id={scope.value} 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from "date-fns",;
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
<<<<<<< HEAD
========
      ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {keys.length} API {keys.length === 1 ? 'key' :'keys'}
          </p>;
          ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
========
              ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
========
                ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="space-y-2">;
                  <Label>Scopes</Label>;
                  <div className="grid gap-2 pt-2">;
                    {scopeOptions.map((scope) => (;
                      <div key={scope.value} className="flex items-center space-x-2">;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
                        <Checkbox;
                          id={scope.value} ;
========
                        <Checkbox ;
                          id={scope.value} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
                          checked={selectedScopes.includes(scope.value)}
<<<<<<< HEAD

                          onCheckedChange={() => toggleScope(scope.value)}
                        />;
                        <Label;
                          htmlFor={scope.value}
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

                      </div>
=======
>>>>>>>                           onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
=======
                        <Checkbox;
                          id={scope.value} ;
                          checked={selectedScopes.includes(scope.value)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {scope.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
<<<<<<< HEAD
>>>>>>>                       </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
                  Create Key

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                  Create Key
>>>>>>>                 </Button>
ursor/fix-website-loading-errors-and-merge-6662
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}



                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    ))}



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>
                      </div>
                    ))}
=======
=======
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
<<<<<<< HEAD
                  Create Key
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
              
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
                  Create Key
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
                </Button>
>>>>>>>               </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
<<<<<<< HEAD

        {/* New API Key Alert */}
=======
>>>>>>>         {/* New API Key Alert */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {newApiKey && (
========
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
<<<<<<< HEAD
        {/* New API Key Alert */}
        {newApiKey && (
=======
        ;
        {/* New API Key Alert */}
        {newApiKey && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;
<<<<<<< HEAD
              <Button
        

>>>>>>>         {/* New API Key Alert */}
>>>>>>>         {newApiKey && (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* New API Key Alert */}
        {newApiKey && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium flex items-center">
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated
              </span>
              <Button
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                 variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={clearNewApiKey}
                onClick = {clearNewApiKey,}
>>>>>>>               >
                <X size={14} />
              </Button>
            </div>
            <p className='text-sm text-zinc-300 mb-2'>
>>>>>>>               This key will only be displayed once. Please save it securely.
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={clearNewApiKey}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

<<<<<<< HEAD
=======

========
=======
<<<<<<< HEAD
                onClick = {clearNewApiKey,}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                <X size={14} />
              </Button>
            </div>
<<<<<<< HEAD
            <p className="text-sm text-zinc-300 mb-2">
=======
<<<<<<< HEAD
            <p className='text-sm text-zinc-300 mb-2'>
=======
            <p className="text-sm text-zinc-300 mb-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
        {/* New API Key Alert */}
        {newApiKey && (
          <div className='mb - 6 p - 4 border border - green - 800 bg - green - 900 / 30 rounded - md'>;
            <div className='flex justify - between items - start mb - 2'>;
              <span className='font - medium flex items - center'>;
                <Check size={16} className='mr - 2 text - green - 500' /> New API Key;
                Generated;
              </span>;
              <Button;
                variant='ghost';
                size='icon';
                className='h - 6 w - 6'                on_click={clearNewApiKey}        {/* New API Key Alert */}
        {newApiKey && (
          <div className="mb - 6 p - 4 border border - green - 800 bg - green - 900 / 30 rounded - md">;
            <div className="flex justify - between items - start mb - 2">;
              <span className="font - medium flex items - center">;
                <Check size={16} className="mr - 2 text - green - 500" /> New API Key Generated;
              </span>;
              <Button;
                variant="ghost";
                size="icon";
                className="h - 6 w - 6";
                on_click={clearNewApiKey}
                on_click = {clearNewApiKey, }
=======
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={clearNewApiKey}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >;
                <X size={14} />;
              </Button>;
            </div>;
<<<<<<< HEAD
            <p className='text - sm text - zinc - 300 mb - 2'>;
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className='mb - 3' />;
            <div className='text - sm text - zinc - 400'>;
              <span className='font - medium'>Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode (newApiKey)} language='bash' />;
          </div>)}
        {/* API Keys List */}
        <div className='space - y-4'>;
          {loading ? (
            <div className='text - center py - 8 text - zinc - 500'>;
              Loading API keys...;
            </div>) : keys.length === 0 ? (
            <div className='text - center py - 8 text - zinc - 500'>;
              <Key className='mx - auto mb - 2 opacity - 30' size={24} />;
              <p > No API keys found.</p>;
              <p className='text - sm mt - 1'>;
                Create one to access the Zion APIs.;
              </p>;
            </div>) : (
            keys.map (key => (
              <div;
                key={key.id}
                className='p - 4 border border - zinc - 800 rounded - lg';
              >;
                <div className='flex items - center justify - between'>;
                  <div className='flex items - center'>                    <div>;
                      <h3 className='font - medium'>{key.name}</h3>;
                      <div className='flex items - center space - x-2 mt - 1'>;
                        <span className='text - sm text - zinc - 400 font - mono'>;
                          {key.key_prefix}••••••••••••;
                        </span>;
                        {key.is_active ? (
                          <Badge className='bg - green - 700 text - white'>;
                            Active;
                          </Badge>) : (
                          <Badge;
                            variant='secondary';
                            className='bg - red - 900 text - white border - red - 800';
                          >;
                            Revoked;
                          </Badge>                        )}
                      </div>;
                    </div>;
                  </div>;
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked</Badge>;
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className="mb - 3" />;
            <div className="text - sm text - zinc - 400">;
              <span className="font - medium">Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode (newApiKey)} language="bash" />;
          </div>)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                <X size={14} />
              </Button>
            </div>

<<<<<<< HEAD
              This key will only be displayed once. Please save it securely.
            </p>
=======
            <p className="text-sm text-zinc-300 mb-2">

>>>>>>>               This key will only be displayed once. Please save it securely.
>>>>>>>             </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CodeBlock code={newApiKey} className="mb-3" />
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />
          </div>
        )}
<<<<<<< HEAD

        {/* API Keys List */}
        <div className='space-y-4'>

;
        {/* API Keys List */}
        <div className="space-y-4">

=======
        {/* API Keys List */}
        <div className='space-y-4'>
;
        {/* API Keys List */}
        <div className="space-y-4">
>>>>>>>           {loading ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {loading ? (
>>>>>>>             <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* API Keys List */}
        <div className='space-y-4'>
=======
;
        {/* API Keys List */}
        <div className="space-y-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Key className="mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>
            </div>
          ) : (
<<<<<<< HEAD
<<<<<<< HEAD

                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                         {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (
=======
=======
            keys.map((key) => (
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-medium">{key.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                           <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
>>>>>>>                         )}
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
                        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer'
                        disabled={!key.is_active}

=======
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
========
                      </div>;
                    </div>;
                  </div>;
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
=======
            <p className="text-sm text-zinc-300 mb-2">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* API Keys List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;
<<<<<<< HEAD
          ) : keys && keys.length === 0 ? (;
=======
          ) :keys.length === 0 ? (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="text-center py-8 text-zinc-500">;
              <Key className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No API keys found.</p>;
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;
            </div>;
<<<<<<< HEAD
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;
<<<<<<< HEAD
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
                      <Button
                        variant='ghost'
                        size='icon'
                        aria-label='More options'>;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <DropdownMenuContent
                      align='end'
                      className='bg-zinc-900 border-zinc-800 text-white'
                    >
<<<<<<< HEAD
>>>>>>>                       <DropdownMenuItem
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className='cursor-pointer text-red-500'
                        disabled={!key.is_active}                      >
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>                        <X size={14} className="mr-2" /> Revoke
>>>>>>>                       </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {key.scopes.map(scope => (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======
=======
                  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="More options">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
<<<<<<< HEAD
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

<<<<<<< HEAD
                      {scope}
=======
                

                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
>>>>>>>                         onClick={() => setShowDeleteConfirm(key && key.id)}
========
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope,) => (
                        onClick={() => setShowDeleteConfirm(key && key.id)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
                        className='cursor-pointer text-red-500';
                        disabled={!key && key.is_active}                      >;
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className="mr-2" /> Revoke;
=======
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer'
                        disabled={!key.is_active}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      >;
                        <RefreshCw size={14} className="mr-2" /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className="cursor-pointer text-red-500";
                        disabled={!key.is_active}
<<<<<<< HEAD
                      >;
                        <X size={14} className="mr-2" /> Revoke;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
<<<<<<< HEAD
                <div className='mt-3 flex flex-wrap gap-2'>;
                  {key && key.scopes.map(scope => (;
>>>>>>>                     <Badge
                      key={scope}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                ;
                <div className="mt-3 flex flex-wrap gap-2">;
                  {key && key.scopes.map((scope,) => (;
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx


>>>>>>>                     <Badge
                      key = {scope,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
>>>>>>>                       {scope}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </Badge>
ursor/fix-website-loading-errors-and-merge-6662
                      {scope}
                    </Badge>;
>>>>>>>                   ))}
                    >

                      {scope}
                    </Badge>;
                  ))}


========
=======
                      >
                        <X size={14} className="mr-2" /> Revoke
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Badge
                      key = {scope,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
<<<<<<< HEAD
                    >
                      {scope}
                    </Badge>;
                  ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
=======
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope) => (
                    <Badge 
                      key={scope} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <p className="text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400">
                        {key.last_used_at
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss')
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

                          : 'This API key has never been used'}

========
                          : 'This API key has never been used'}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <span>
                      Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
                  )}
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

>>>>>>>                   )}
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
                  )}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </div>;
              </div>;
            ));
          )}
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
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
<<<<<<< HEAD
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh
=======
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

          Refresh

        </Button>
      </CardFooter>
>>>>>>>         </div>;
========
          Refresh
        </Button>
      </CardFooter>
        </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
      </CardContent>;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      ;
=======
        </div>;
      </CardContent>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;
<<<<<<< HEAD
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
              This action will invalidate the existing key and generate a new;
              one. Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

              className="bg-blue-600 hover:bg-blue-700"
      <AlertDialog 
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}

========
      <AlertDialog 
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
              className='bg-blue-600 hover:bg-blue-700'            >;
            <AlertDialogAction
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
              className="bg-blue-600 hover:bg-blue-700";
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm (null)}
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;
              This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
  )
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  )
}
<<<<<<< HEAD
=======
;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
              className="bg-blue-600 hover:bg-blue-700";
>>>>>>>       >;
=======
      >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
<<<<<<< HEAD

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

>>>>>>>               This action will invalidate the existing key and generate a new one.;
=======
              This action will invalidate the existing key and generate a new one.;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD


=======
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD


              This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;


========
              className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
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
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx

>>>>>>>               This action will revoke the API key and it can no longer be used to access the API.;
========
              This action will revoke the API key and it can no longer be used to access the API.;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx


========
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
=======
;
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog ;
=======
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
            <AlertDialogAction ;
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
  );
}
    </Card>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/ApiKeysManager.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

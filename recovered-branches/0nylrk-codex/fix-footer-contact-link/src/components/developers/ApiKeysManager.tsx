
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from "lucide-react",
import { format } from "date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",

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
=======
import { useState } from &quot;react&quot;;
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from &quot;lucide-react&quot;;
import { format } from &quot;date-fns&quot;;
import { useApiKeys, type ApiKeyScope } from &quot;@/hooks/useApiKeys&quot;;
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from &quot;@/components/ui/dialog&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from &quot;@/components/ui/dropdown-menu&quot;;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from &quot;@/components/ui/alert-dialog&quot;;

<<<<<<< HEAD
import CodeBlock from &quot;./CodeBlock&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

import CodeBlock from "./CodeBlock",
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
=======
export function ApiKeysManager() {_const { 
    keys, _loading, _newApiKey, _fetchApiKeys, _createApiKey, _regenerateApiKey, _revokeApiKey, _clearNewApiKey} = useApiKeys();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
  // Create key form state
<<<<<<< HEAD
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),
=======
  const [keyName, setKeyName] = useState("&quot;);
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Load keys on mount
<<<<<<< HEAD
  useState(() => {
    fetchApiKeys()
  }),
  
  const handleCreateKey = async () => {
<<<<<<< HEAD
    if (keyName.trim() === "" || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName(""),
    setSelectedScopes([])
  },
=======
    if (keyName.trim() === "&quot; || selectedScopes.length === 0) return;
=======
  useState__(() => {_fetchApiKeys();});
  
  const _handleCreateKey = async () => {_if (keyName.trim() === "" || selectedScopes.length === 0) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    await createApiKey(keyName, _selectedScopes);
    setShowCreateDialog(false);
<<<<<<< HEAD
    setKeyName("&quot;);
    setSelectedScopes([]);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
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
=======
    setKeyName("");
    setSelectedScopes([]);};

  const _handleRegenerateKey = async (_keyId: string) => {_await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);};
  
  const _handleRevokeKey = async (_keyId: string) => {_await revokeApiKey(keyId);
    setShowDeleteConfirm(null);};
  
  // Scope options
  const scopeOptions: {_value: ApiKeyScope; label: string; description: string}[] = [
    {_value: 'jobs:read', _label: 'Read Jobs', _description: 'Access to view job listings'},
    {_value: 'jobs:write', _label: 'Write Jobs', _description: 'Create and manage job listings'},
    {_value: 'talent:read', _label: 'Read Talent', _description: 'Access to view talent profiles'},
    {_value: 'quotes:write', _label: 'Write Quotes', _description: 'Create and manage quotes'},
    {_value: 'webhooks:manage', _label: 'Manage Webhooks', _description: 'Set up and manage webhook endpoints'}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Toggle a scope selection
  const _toggleScope = (_scope: ApiKeyScope) => {_setSelectedScopes(prev => 
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
<<<<<<< HEAD
        : [...prev, scope]
    )
  },
  
  const getExampleCode = (key: string) => {
<<<<<<< HEAD
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
=======
        : [...prev, _scope]
    );};
  
  const _getExampleCode = (_key: string) => {_return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`
  },

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName(""),
    setSelectedScopes([]),
    setShowCreateDialog(false)
  },
=======
    return `curl -X GET &quot;https://api.ziontechgroup.com/v1/jobs&quot; \\
  -H &quot;Authorization: Bearer ${key}&quot; \\
  -H &quot;Content-Type: application/json&quot;`;
  };

  // Reset form when dialog closes
<<<<<<< HEAD
  const handleDialogClose = () => {
    setKeyName("&quot;);
    setSelectedScopes([]);
    setShowCreateDialog(false);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Card className=&quot;bg-zinc-900 border-zinc-800 text-white&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-xl flex items-center&quot;>
          <Key className=&quot;mr-2&quot; size={20} /> API Keys
=======
  const _handleDialogClose = () => {_setKeyName("");
    setSelectedScopes([]);
    setShowCreateDialog(false);};

  return (_<Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Key className="mr-2" size={_20} /> API Keys
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </CardTitle>
        <CardDescription className=&quot;text-zinc-400&quot;>
          Create and manage API keys for accessing the Zion APIs.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
<<<<<<< HEAD
        <div className=&quot;flex justify-between items-center mb-6&quot;>
          <p className=&quot;text-sm text-zinc-400&quot;>
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
=======
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">
            You have {_keys.length} API {_keys.length === 1 ? 'key' : 'keys'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
          
          <Dialog open={_showCreateDialog} onOpenChange={_setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant=&quot;default&quot;>Create New API Key</Button>
            </DialogTrigger>
            <DialogContent className=&quot;bg-zinc-900 border-zinc-800 text-white&quot;>
              <DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>
                <DialogDescription className=&quot;text-zinc-400&quot;>
                  Generate a new API key for accessing the Zion APIs.
                </DialogDescription>
              </DialogHeader>
              
              <div className=&quot;space-y-4 py-4&quot;>
                <div className=&quot;space-y-2&quot;>
                  <Label htmlFor=&quot;key-name&quot;>Key Name</Label>
                  <Input
<<<<<<< HEAD
                    id=&quot;key-name&quot;
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
                    placeholder=&quot;e.g. Production API Key&quot;
                    className=&quot;bg-zinc-800 border-zinc-700&quot;
=======
                    id="key-name"
                    value={_keyName}
                    onChange={_(e) => setKeyName(e.target.value)}
                    placeholder="e.g. Production API Key"
                    className="bg-zinc-800 border-zinc-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
                
                <div className=&quot;space-y-2&quot;>
                  <Label>Scopes</Label>
<<<<<<< HEAD
                  <div className=&quot;grid gap-2 pt-2&quot;>
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className=&quot;flex items-center space-x-2&quot;>
=======
                  <div className="grid gap-2 pt-2">
                    {_scopeOptions.map(_(scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <Checkbox 
                          id={_scope.value} 
                          checked={_selectedScopes.includes(scope.value)}
                          onCheckedChange={_() => toggleScope(scope.value)}
                        />
                        <Label
<<<<<<< HEAD
                          htmlFor={scope.value}
                          className=&quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70&quot;
                        >
                          {scope.label}
                          <span className=&quot;block text-xs text-zinc-400 mt-1&quot;>{scope.description}</span>
=======
                          htmlFor={_scope.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {_scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{_scope.description}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
<<<<<<< HEAD
                <Button variant=&quot;outline&quot; onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
=======
                <Button variant="outline" onClick={_handleDialogClose}>Cancel</Button>
                <Button onClick={_handleCreateKey} disabled={_keyName.trim() === "" || selectedScopes.length === 0}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Create Key
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {_/* New API Key Alert */}
        {_newApiKey && (
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium flex items-center">
                <Check size={16} className="mr-2 text-green-500&quot; /> New API Key Generated
              </span>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;icon"
                className="h-6 w-6"
                onClick={_clearNewApiKey}
              >
                <X size={_14} />
              </Button>
            </div>
            <p className="text-sm text-zinc-300 mb-2">
              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={_newApiKey} className="mb-3" />
            <div className="text-sm text-zinc-400">
              <span className="font-medium&quot;>Example usage:</span>
            </div>
<<<<<<< HEAD
            <CodeBlock code={getExampleCode(newApiKey)} language=&quot;bash" />
=======
            <CodeBlock code={_getExampleCode(newApiKey)} language="bash" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
        
        {_/* API Keys List */}
        <div className="space-y-4">
          {_loading ? (
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Key className="mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>
            </div>
          ) : (_keys.map((key) => (
              <div key={_key.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-medium">{_key.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
<<<<<<< HEAD
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white&quot;>Active</Badge>
=======
                        <span className="text-sm text-zinc-400 font-mono">{_key.key_prefix}••••••••••••</span>
                        {_key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        ) : (
                          <Badge variant=&quot;secondary" className="bg-red-900 text-white border-red-800&quot;>Revoked</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
<<<<<<< HEAD
                      <Button variant=&quot;ghost&quot; size=&quot;icon&quot;>
                        <MoreVertical size={16} />
=======
                      <Button variant="ghost" size="icon">
                        <MoreVertical size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align=&quot;end" className="bg-zinc-900 border-zinc-800 text-white">
                      <DropdownMenuItem
                        onClick={_() => setShowRegenerateConfirm(key.id)}
                        className="cursor-pointer"
                        disabled={_!key.is_active}
                      >
                        <RefreshCw size={_14} className="mr-2" /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={_() => setShowDeleteConfirm(key.id)}
                        className="cursor-pointer text-red-500"
                        disabled={_!key.is_active}
                      >
                        <X size={_14} className="mr-2" /> Revoke
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
<<<<<<< HEAD
                <div className="mt-3 flex flex-wrap gap-2&quot;>
                  {key.scopes.map((scope) => (
=======
                <div className="mt-3 flex flex-wrap gap-2">
                  {_key.scopes.map(_(scope) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <Badge 
                      key={scope} 
                      variant=&quot;secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
                      {_scope}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {_format(new Date(key.created_at), _'MMM d, _yyyy')}</span>
                  <Popover>
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">
                      <Clock size={_12} className="mr-1" />
                      Last used: {_key.last_used_at 
                        ? format(new Date(key.last_used_at), _'MMM d, _yyyy') 
                        : 'Never'}
                    </PopoverTrigger>
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">
                      <p className="text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400">
                        {_key.last_used_at 
                          ? format(new Date(key.last_used_at), _'MMM d, _yyyy HH:mm:ss')
                          : 'This API key has never been used'}
                      </p>
                    </PopoverContent>
                  </Popover>
                  {_key.expires_at && (
                    <span>Expires: {format(new Date(key.expires_at), _'MMM d, _yyyy')}</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500&quot;>
          Keep your API keys secure. They have the same permissions as your account.
        </div>
<<<<<<< HEAD
        <Button variant=&quot;outline&quot; size=&quot;sm" onClick={fetchApiKeys}>
=======
        <Button variant="outline" size="sm" onClick={_fetchApiKeys}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Refresh
        </Button>
      </CardFooter>

      {_/* Regenerate Key Confirmation Dialog */}
      <AlertDialog 
        open={_showRegenerateConfirm !== null} 
        onOpenChange={_(_open) => !open && setShowRegenerateConfirm(null)}
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
              onClick={_() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {_/* Delete Key Confirmation Dialog */}
      <AlertDialog 
        open={_showDeleteConfirm !== null} 
        onOpenChange={_(_open) => !open && setShowDeleteConfirm(null)}
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
<<<<<<< HEAD
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700"
=======
              onClick={_() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}

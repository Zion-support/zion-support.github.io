
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

    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName("")
    setSelectedScopes([])
  },

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

    )
  },
  
  const getExampleCode = (key: string) => {
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\,
  -H "Authorization: Bearer ${key}" \\

export function ApiKeysManager() {;
  const {;
    keys,;
    loading,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey,;

  }),
  
  const handleCreateKey = async () => {
    if (keyName.trim() === "" || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName(""),

                  <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">

                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}

                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >,
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

              >
                <X size={14} />
              </Button>
            </div>

              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={newApiKey} className="mb-3" />
            <div className="text-sm text-zinc-400">
              <span className="font-medium">Example usage:</span>
            </div>,
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
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (

                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                      <DropdownMenuItem

                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                    <Badge
                      key = {scope,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"

                      <p className="text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400">
                        {key.last_used_at
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss')

                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (

      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>

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

            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

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

            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


export function ApiKeysManager() {
  const { 
    keys,
    loading, 
    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,
  // Create key form state
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('')
    setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {

    if (keyName.trim() === "" || selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName("")
    setSelectedScopes([])

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
  }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)
  }
  const handleRegenerateKey = async (keyId: string,) => {
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options
  const scopeOptions: {
    value: ApiKeyScope
    label: string
    description: string
  }[] = [    {
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
    {                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                        <Label
                          htmlFor={scope.value}
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>
                        </Label>

                      </div>
                    ))}

                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>
                  Create Key                </Button>;
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
        <div className="space-y-4">;
          {loading ? (
            <div className="text - center py - 8 text - zinc-500">Loading API keys...</div>) : keys.length === 0 ? (
            <div className="text - center py - 8 text - zinc-500">;
              <Key className="mx - auto mb - 2 opacity-30" size={24} />;
              <p > No API keys found.</p>;
              <p className="text - sm mt-1">Create one to access the Zion APIs.</p>;
            </div>) : (
            keys.map ((key) => (
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded-lg">;
                <div className="flex items - center justify-between">;
                  <div className="flex items-center">;
                    <div>;
                      <h3 className="font-medium">{key.name}</h3>;
                      <div className="flex items - center space - x-2 mt-1">;
                        <span className="text - sm text - zinc - 400 font-mono">{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (

              >
                <X size={14} />
              </Button>
            </div>

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
          {loading ? (
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Key className="mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>
            </div>
          ) : (            keys.map((key) => (
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
                        {key.is_active ? (
                          <Badge className="bg-green-700 text-white">Active</Badge>
                        ) : (                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer'
                        disabled={!key.is_active}                      <DropdownMenuItem

                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (
        <div className="text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>
        </Button>
      </CardFooter>      >
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
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}      >;
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
              className="bg - blue - 600 hover:bg - blue-700";
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc-400">;

              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date-fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys';

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

  const handleCreateKey = async () => {
    if (keyName.trim() === '' || selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName('');
    setSelectedScopes([]);  };

  };

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);

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

    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`;  };

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName('');

  };

  // Reset form when dialog closes
  const handleDialogClose = () => {

                  />
                </div>

                <div className='space-y-2'>
                  <Label>Scopes</Label>
                  <div className='grid gap-2 pt-2'>
                    {scopeOptions.map(scope => (
                      <div
                        key={scope.value}
                        className='flex items-center space-x-2'
                      >
                        <Checkbox
                          id={scope.value}                          checked={selectedScopes.includes(scope.value)}
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope,) => (
                      <div key={scope.value} className="flex items-center space-x-2">
                        <Checkbox 

                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>

                        </Label>

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
                    keyName.trim() === '' || selectedScopes.length === 0
                  }
                >                  Create Key

                  Create Key

                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* New API Key Alert */}
        {newApiKey && (
          <div className='mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md'>
            <div className='flex justify-between items-start mb-2'>
              <span className='font-medium flex items-center'>
                <Check size={16} className='mr-2 text-green-500' /> New API Key
                Generated
              </span>
              <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6'                onClick={clearNewApiKey}

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
                          <Badge
                            variant='secondary'
                            className='bg-red-900 text-white border-red-800'
                          >
                            Revoked
                          </Badge>                        )}
                      </div>
                    </div>
                  </div>

                        )}
                      </div>
                    </div>
                  </div>

                      >
                        <RefreshCw size={14} className='mr-2' /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem

                      >
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                  )}

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

          Refresh

        </Button>
      </CardFooter>

      {/* Regenerate Key Confirmation Dialog */}

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
            <AlertDialogAction
              onClick={() =>
                showRegenerateConfirm &&
                handleRegenerateKey(showRegenerateConfirm)
              }
              className='bg-blue-600 hover:bg-blue-700'            >

            >

              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Key Confirmation Dialog */}

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
            <AlertDialogAction
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'            >

            >

              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
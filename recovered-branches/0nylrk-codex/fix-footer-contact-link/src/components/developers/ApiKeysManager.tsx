import { useState } from './react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from './lucide-react';
import { format } from './date - fns';
import { useApiKeys, type, ApiKeyScope } from '@/hooks / useApiKeys';
;
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Input } from '@/components / ui / input';
import { Checkbox } from '@/components / ui / checkbox';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components / ui / alert - dialog';
;
import CodeBlock from "./CodeBlock";
    revokeApiKey;
    clearNewApiKey;
  } = useApiKeys();
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);
  const [keyName, setKeyName] = useState("");
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  });

                        <Label
                          htmlFor={scope && scope.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {scope && scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;
                        </Label>;
                      </div>;
                    ))}
                  Create Key;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
        {/* New API Key Alert */}
        {newApiKey && (;
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={clearNewApiKey}>;
                <X size={14} />;
              </Button>;
            </div>;
            <p className="text-sm text-zinc-300 mb-2">;
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className="mb-3" />;
            <div className="text-sm text-zinc-400">;
              <span className="font-medium">Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />;
          </div>;
        )}
        {/* API Keys List */}
        <div className="space-y-4">;
          {loading ? (;
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;
          ) : keys && keys.length === 0 ? (;
            <div className="text-center py-8 text-zinc-500">;
              <Key className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No API keys found.</p>;
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;
            </div>;
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
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}
                      <Button variant="ghost" size="icon">;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;
                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
                        className="cursor-pointer";
                        disabled={!key && key.is_active}
                      >;
                        <RefreshCw size={14} className="mr-2" /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">;
                      {scope}
                    </Badge>;
                  ))}
=======
                <div className="mt - 3 flex flex - wrap gap - 2">;
                  {key.scopes.map ((scope) => (
                    <Badge;
                      key={scope}
                      variant="secondary";
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                    >;
                      {scope}
                    </Badge>))}
                </div>;
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;
                  <span > Created: {format (new Date (key.created_at), 'MMM d, yyyy')}</span>;
                  <Popover>;
                    <PopoverTrigger className="flex items - center hover:text - zinc - 300">;
                      <Clock size={12} className="mr - 1" />;
                      Last used: {key.last_used_at;
                        ? format (new Date (key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}
                    </PopoverTrigger>;
                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;
                      <p className="text - sm mb - 1">Last Used</p>;
                      <p className="text - xs text - zinc - 400">;
                        {key.last_used_at;
                          ? format (new Date (key.last_used_at), 'MMM d, yyyy HH:mm:ss');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                          : 'This API key has never been used'}
                      </p>;
                    </PopoverContent>;
                  </Popover>;
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
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

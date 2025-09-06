
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
                        />;
                        <Label;
                          htmlFor={scope.value}
<<<<<<< HEAD

                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;

              >;
                <X size={14} />;
              </Button>;
            </div>;

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

            <div className="text-center py-8 text-zinc-500">;
              <Key className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No API keys found.</p>;
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;
            </div>;

                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;

                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;

                </div>;
              </div>;
            ));
          )}

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;

            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


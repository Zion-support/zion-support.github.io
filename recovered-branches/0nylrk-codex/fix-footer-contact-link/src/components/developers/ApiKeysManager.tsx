
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);

  // Create key form state;
  const [keyName, setKeyName] = useState("");
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  });

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
"
import CodeBlock from "./CodeBlock",
export function ApiKeysManager() {  const { 
    keys,
    loading, 
    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,
  }),
  
  const handleCreateKey = async () => {"
    if (keyName.trim() === "" |selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);"
    setKeyName("");
    setSelectedScopes([])  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)
  }
  },
  

  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' }
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' }
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' }
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' }

    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }]
  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {}

                        <Checkbox 

                          id={scope.value} 

                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                          htmlFor={scope && scope.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {scope && scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;
                        </Label>;
                      </div>;
                    ))}

                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;                        </Label>;
                      </div>;
                    ))}
                  Create Key;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        {/* API Keys List */}

        <div className="space-y-4">;
          {loading ? (;"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;
          ) : keys && keys.length === 0 ? (;"
            <div className="text-center py-8 text-zinc-500">;"
              <Key className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No API keys found.</p>;"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;
            </div>;
          ) : (;
            keys && keys.map((key) => (;"
              <div key={key && key.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;"
                  <div className="flex items-center">;
                    <div>;"
                      <h3 className="font-medium">{key && key.name}</h3>;"
                      <div className="flex items-center space-x-2 mt-1">;
                        {key && key.is_active ? (;"
                          <Badge className="bg-green-700 text-white">Active</Badge>;
                        ) : (;"
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}

                    <DropdownMenuTrigger asChild>;                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
        {/* New API Key Alert */}
        {newApiKey && (
          <div className="mb - 6 p - 4 border border - green - 800 bg - green - 900 / 30 rounded-md">;
            <div className="flex justify - between items - start mb-2">;
              <span className="font - medium flex items-center">;
                <Check size={16} className="mr - 2 text - green-500" /> New API Key Generated;
              <Button;
                variant="ghost";
                size="icon";
                className="h - 6 w-6";
                on_click={clearNewApiKey}              >;
                <X size={14} />;
              </Button>;
            </div>;
            <p className="text - sm text - zinc - 300 mb-2">;
                      <DropdownMenuItem
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">;
                      {scope}
                    </Badge>;
                  ))}            </AlertDialogDescription>;
            <AlertDialogDescription className="text-zinc-400">;

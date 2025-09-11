export function ApiKeysManager() {;
  const { ;
    keys;
    loading, ;
    newApiKey;
    fetchApiKeys, ;
    createApiKey, ;
    regenerateApiKey, ;
    revokeApiKey;
    clearNewApiKey;
  } = useApiKeys();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);
  // Create key form state;
  const [keyName, setKeyName] = useState("");
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from "react";
import {Check, Clock, Key, MoreVertical, RefreshCw, X} from "lucide-react";
import {format} from "date-fns";
import {useApiKeys, type, ApiKeyScope} from "@/hooks/useApiKeys";

=======import { useState } from "react",
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from "lucide-react",
import { format } from "date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
export function ApiKeysManager() {

  const { ;
    keys;

  const {
    keys;

    loading
    newApiKey;
    fetchApiKeys
    createApiKey
    regenerateApiKey

    revokeApiKey;
    clearNewApiKey
  } = useApiKeys();
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);
  const { ;
    keys;
=======
==============
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
  // Create key form state
  const [keyName, setKeyName] = useState(""),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {
    fetchApiKeys()
  const handleCreateKey = async () => {
    if (keyName.trim() === "" |selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName("");
    setSelectedScopes([])
  }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  },
  

  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)

  },
  

=======
=======
                        <Checkbox 
                          id={scope.value} 

                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;
=======
export /**
 * ApiKeysManager - Function description
 */
function ApiKeysManager() {
  const {
    keys;
    loading,
    newApiKey;
    fetchApiKeys,
    createApiKey,
    regenerateApiKey,
    revokeApiKey;
    clearNewApiKey;
  } = useApiKeys ();
;
  const [showCreateDialog, setShowCreateDialog] = useState (false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState < string | null>(null);
;
  // Create key form state;
  const [key_name, setKeyName] = useState ("");
  const [selected_scopes, setSelectedScopes] = useState < ApiKeyScope[]>([]);
;
  // Load keys on mount;
  useState (() => {
    fetchApiKeys ();
  });
;
  const handleCreateKey = async () => {
    if (=== "" || selected_scopes.length === 0) return) {
  $2
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ("");
    setSelectedScopes ([]);
  }
;
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id),
    setShowRegenerateConfirm (null);
  }
;
  const handleRevokeKey = async (key_id: string) => {
    await revokeApiKey (key_id),
    setShowDeleteConfirm (null);
  }
;
  // Scope options;
  const scope_options: { value: ApiKeyScope, label: string, description: string }[] = [;
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],
  // Toggle a scope selection;
  const toggle_scope = (scope: ApiKeyScope) =>: any {
    setSelectedScopes (prev =>;
      prev.includes (scope);
        ? prev.filter (string => s !== scope);
        : [...prev, scope]);
  }
;
  const getExampleCode = (key: string) =>: any {
    return `curl -X GET "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer ${key}" \\;
  -H "Content - Type: application / json"`;
  }
;
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ("");
    setSelectedScopes ([]);
    setShowCreateDialog (false);
  }
;
  return (
    <Card className="bg - zinc - 900 border - zinc - 800 text - white">;
      <CardHeader>;
        <CardTitle className="text - xl flex items - center">;
          <Key className="mr - 2" size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className="text - zinc - 400">;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex justify - between items - center mb - 6">;
          <p className="text - sm text - zinc - 400">;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant="default">Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
              <DialogHeader>;
                <DialogTitle > Create API Key</DialogTitle>;
                <DialogDescription className="text - zinc - 400">;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className="space - y-4 py - 4">;
                <div className="space - y-2">;
                  <Label html_for="key - name">Key Name</Label>;
                  <Input;
                    id="key - name";
                    value={key_name}
                    on_change={(e) => setKeyName (e.target.value)}
                    placeholder="e.g. Production API Key";
                    className="bg - zinc - 800 border - zinc - 700";
                  />;
                </div>;
                <div className="space - y-2">;
                  <Label > Scopes</Label>;
                  <div className="grid gap - 2 pt - 2">;
                    {scope_options.map ((scope) => (
                      <div key={scope.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={scope.value}
                          checked={selected_scopes.includes (scope.value)}
                          onCheckedChange={() => toggle_scope (scope.value)}
                        />;
                        <Label;
                          html_for={scope.value}
                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {scope.label}
                          <span className="block text - xs text - zinc - 400 mt - 1">{scope.description}</span>;
                        </Label>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant="outline" on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === "" || selected_scopes.length === 0}>;

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;
          Refresh;
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog
        open={showRegenerateConfirm !== null}         onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
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
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null}         onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
            >;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;=======

    </Card>);
}

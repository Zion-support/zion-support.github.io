
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
    revokeApiKey;
    clearNewApiKey;
  } = useApiKeys();

  // Create key form state;

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

  const { ;
    keys;


  }),
  
  const handleCreateKey = async () => {"
    if (keyName.trim() === "" |selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);"
    setKeyName("");


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
    setSelectedScopes(prev =>
      prev.includes(scope)
        ? prev.filter(s => s !== scope)
        : [...prev, scope]


  },

  }
  },
  
  const getExampleCode = (key: string) => {

    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName("");
    setSelectedScopes([]);
    setShowCreateDialog(false)

    )
  },

  // Load keys on mount;
  useState(() => {;
    }
    fetchApiKeys();
  }),;
  const handleCreateKey = async () => {;
    }
    if (keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0) return;"
    setShowCreateDialog(false);
    setKeyName("");"
    setSelectedScopes([])
};  const handleRevokeKey = async ("keyId": string) => {;
    }
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null)
};
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"
      <CardHeader>;
  return ("
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>"
        <CardTitle className="text-xl flex items-center">"
          <Key className="mr-2" size={20} /> API Keys;
        </CardTitle>"
        <CardDescription className="text-zinc-400">
          Create and manage API keys for accessing the Zion APIs.
        </CardDescription>
      </CardHeader>
      <CardContent>"
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">'
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>"
              <Button variant="default">Create New API Key</Button>
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>"
                <DialogDescription className="text-zinc-400">
                  Generate a new API key for accessing the Zion APIs.
                </DialogDescription>
              </DialogHeader>"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="key-name">Key Name</Label>
                  <Input"
                    id="key-name"
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}"
                    placeholder="e.g. Production API Key""
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>"
                <div className="space-y-2">
                  <Label>Scopes</Label>"
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => ("
                      <div key={scope.value} className="flex items-center space-x-2">

                        <Checkbox
                          id={scope.value}
                        <Checkbox 
                          id={scope.value} 


import { useState } from "react",;

    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;"
        <CardTitle className="text-xl flex items-center">;"
          <Key className="mr-2" size={20} /> API Keys;
        </CardTitle>;"
        <CardDescription className="text-zinc-400">;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;"
              <Button variant="default">Create New API Key</Button>;
            </DialogTrigger>;"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;"

                <DialogDescription className="text-zinc-400">;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;

                    {scopeOptions && scopeOptions.map((scope) => (;

                      <div key={scope && scope.value} className="flex items-center space-x-2">;
                        <Checkbox;

                <div className="space-y-2">;
                  <Label>Scopes</Label>;
                  <div className="grid gap-2 pt-2">;
                    {scopeOptions && scopeOptions.map((scope) => (;
                      <div key={scope && scope.value} className="flex items-center space-x-2">;
                        <Checkbox

                          id={scope && scope.value} 
                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}
                          onCheckedChange={() => toggleScope(scope && scope.value)}
                        />;


                        <Checkbox 

                          id={scope.value} 

                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
                        />


                          htmlFor={scope && scope.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {scope && scope.label}
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;
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
                <div className="space-y-2">;
                  <Label>Scopes</Label>;
                  <div className="grid gap-2 pt-2">;
                    {scopeOptions.map((scope) => (;
                      <div key={scope.value} className="flex items-center space-x-2">;
                  </div>;
                </div>;
              </div>;
              ;
              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>;
                        </Label>;
                      </div>;
                    ))}

                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;

                        <Label;
                          htmlFor={scope && scope.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {scope && scope.label}"
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;

                        </Label>;


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

                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;


                        className="cursor-pointer";
                        disabled={!key && key.is_active}
                      >;


                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
                      {scope}
                    </Badge>
                  ))}

                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;

                      <Button variant="ghost" size="icon">;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;


                      </DropdownMenuItem>;
                      <DropdownMenuItem;

                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                      </DropdownMenuItem />;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;


                    </PopoverTrigger>;"
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;"
                      <p className="text-sm mb-1">Last Used</p>;"
                      <p className="text-xs text-zinc-400">;
"

                <div className="mt - 3 flex flex - wrap gap - 2">;
                  {key.scopes.map ((scope) => (
                    <Badge;
                      key={scope}"
                      variant="secondary";"
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";
                    >;
                      {scope}


                          : 'This API key has never been used'}
                      </p>;
                    </PopoverContent>;
                  </Popover>;

      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
      >"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>"


      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>

            <AlertDialogDescription className="text-zinc-400">
              This action will invalidate the existing key and generate a new one.
              Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Delete Key Confirmation Dialog */}

            <AlertDialogDescription className="text-zinc-400">
              This action will revoke the API key and it can no longer be used to access the API.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )


      <CardFooter className="justify-between border-t border-zinc-800 py-4">;

        <div className="text-xs text-zinc-500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;"

        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;
          Refresh;
        </Button>;
      </CardFooter>;

            >;
              Revoke;
            <AlertDialogTitle>Revoke API Key?"

              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;"
        <div className="text-xs text-zinc-500">;"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;"

        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"

          <AlertDialogHeader>;

            <AlertDialogTitle>Regenerate API Key?;"
            <AlertDialogDescription className="text-zinc-400">;"

          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;"

            <AlertDialogTitle>Revoke API Key?;"

            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;"

              on_click={() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm)});"
pr-12325
</AlertDialogAction>
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


    </Card>);
}

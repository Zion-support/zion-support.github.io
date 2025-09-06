
=======
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




import { useState } from "react",
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from "lucide-react",
import { format } from "date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

    loading,
    loading, 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)

  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' }
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' }
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' }
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' }
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }]
  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev =>
      prev.includes(scope)
        ? prev.filter(s => s !== scope)
        : [...prev, scope]
    )

  const getExampleCode = (key: string) => {
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName("");
    setSelectedScopes([]);
    setShowCreateDialog(false)

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
                  <Label>Scopes</Label>
                  <div className="grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2">

import { useState } from "react",;
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from "lucide-react",;
import { format } from "date-fns",;
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",;
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

                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
                        />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <Label
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
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
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
=======
        </div>;
      </CardContent>;

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
        open={showRegenerateConfirm !== null} 
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
            <AlertDialogAction
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

      {/* Delete Key Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
=======
                  {key.expires_at && (
                    <span > Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}</span>)}
                </div>;
              </div>)))}
        </div>;
      </CardContent>;
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant="outline" size="sm" on_click={fetchApiKeys}>;
          Refresh;
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={(open) => !open && setShowRegenerateConfirm (null)}
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
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
      {/* Delete Key Confirmation Dialog */}
      <AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm (null)}
      >;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

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
      </AlertDialog>;

    </Card>);
}


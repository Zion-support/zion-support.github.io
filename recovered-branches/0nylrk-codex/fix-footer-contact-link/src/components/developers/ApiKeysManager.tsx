

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

import CodeBlock from "./CodeBlock",
export function ApiKeysManager() {  const { 
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

  }),
  
  const handleCreateKey = async () => {
    if (keyName.trim() === "" |selectedScopes.length === 0) return;
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
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
  // Toggle a scope selection
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev =>
      prev.includes(scope)
        ? prev.filter(s => s !== scope)
        : [...prev, scope]
    )  const getExampleCode = (key: string) => {
    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json"`
  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName("");
    setSelectedScopes([]);
    setShowCreateDialog(false)

  },

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

  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0) return;
    setShowCreateDialog(false);
    setKeyName("");
    setSelectedScopes([])
};  const handleRevokeKey = async (keyId: string) => {;
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null)
};
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Key className="mr-2" size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {keys && keys.length} API {keys && keys.length === 1 ? 'key' : 'keys'}
          </p>;
                        <Checkbox 
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
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

    <Card className="bg-zinc-900 border-zinc-800 text-white">"

      <CardHeader>
"
        <CardTitle className="text-xl flex items-center">"
          <Key className="mr-2" size={20} /> API Keys;"

        <CardDescription className="text-zinc-400">"

        
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">"
</div>"
          <p className="text-sm text-zinc-400">"
</p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>

            <DialogTrigger asChild>
              <Button variant="default">Create New API Key"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"

              <DialogHeader>

                <DialogTitle>Create API Key"
                <DialogDescription className="text-zinc-400">"

                
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="key-name">Key Name"
                  <Input;"
                    id="key-name""
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}

</div>
                  <Label>Scopes"
                  <div className="grid gap-2 pt-2">"
                      <div key={scope.value} className="flex items-center space-x-2">"
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),;
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),;
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"

      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;"

        ;"
        <CardDescription className="text-zinc-400">;"

        ;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;"
          <p className="text-sm text-zinc-400">;"
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;

            <DialogTrigger asChild>;
              <Button variant="default">Create New API Key;"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;"

              <DialogHeader>;

                <DialogTitle>Create API Key;"
                <DialogDescription className="text-zinc-400">;"

              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <Label htmlFor="key-name">Key Name;"
                    onChange={(e) => setKeyName(e && e.target.value)}

                </div>;"
                  <Label>Scopes;"
                  <div className="grid gap-2 pt-2">;"
                      <div key={scope && scope.value} className="flex items-center space-x-2">;"
                        <Checkbox;
                          id={scope && scope.value} 
                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}
                          onCheckedChange={() => toggleScope(scope && scope.value)}

pr-12325
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
                        {key && key.is_active ? (;
                          <Badge className="bg-green-700 text-white">Active</Badge>;
                        ) : (;
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;
                        )}

                      </div>;
                    </div>;
                  </div>;

                  <DropdownMenu>;
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
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className="mb-3" />;
            <div className="text - sm text - zinc-400">;
              <span className="font-medium">Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode (newApiKey)} language="bash" />;
          </div>)}
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
                        {key.is_active ? (                      <DropdownMenuItem
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
                        className="cursor-pointer";
                        disabled={!key && key.is_active}
                      >;
                        disabled={!key.is_active}
                      >
                        <RefreshCw size={14} className="mr-2" /> Regenerate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className="cursor-pointer text-red-500"
                        disabled={!key.is_active}
                      >
                        <X size={14} className="mr-2" /> Revoke
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {key.scopes.map((scope) => (
                    <Badge
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
                  ))}            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className="bg-blue-600 hover:bg-blue-700";
            >;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

      {/* Delete Key Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null}         onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;


                        <Label;
                          htmlFor={scope && scope.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;"
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;"
                      </div>;
              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel;""
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;"

        <div className="space-y-4">;"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
              <Key className="mx-auto mb-2 opacity-30" size={24} />;"

              <p>No API keys found.</p>;"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;"
              <div key={key && key.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;"
                  <div className="flex items-center">;"
                    <div>;
                      <h3 className="font-medium">{key && key.name}</h3>;""
                      <div className="flex items-center space-x-2 mt-1">;"
                          <Badge className="bg-green-700 text-white">Active;""
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked;"
                  <DropdownMenu>;

                    <DropdownMenuTrigger asChild>;


          <div className="mb - 6 p - 4 border border - green - 800 bg - green - 900 / 30 rounded - md">;"
            <div className="flex justify - between items - start mb - 2">;"
              <span className="font - medium flex items - center">;"
</span>"
                <Check size={16} className="mr - 2 text - green - 500" /> New API Key Generated;"

              </span>;
              <Button;"
                variant="ghost";""
                size="icon";""
                className="h - 6 w - 6";"
                on_click={clearNewApiKey}
              >;

                <X size={14} />;

            <p className="text - sm text - zinc - 300 mb - 2">;"
            </p>;"
            <CodeBlock code={newApiKey} className="mb - 3" />;"
            <div className="text - sm text - zinc - 400">;"
              <span className="font - medium">Example usage:</span>;"
            <CodeBlock code={getExampleCode (newApiKey)} language="bash" />;"

          </div>)}"
        <div className="space - y-4">;"
            <div className="text - center py - 8 text - zinc - 500">Loading API keys...</div>) : keys.length === 0 ? (""
            <div className="text - center py - 8 text - zinc - 500">;"
              <Key className="mx - auto mb - 2 opacity - 30" size={24} />;"

              <p > No API keys found.</p>;"
              <p className="text - sm mt - 1">Create one to access the Zion APIs.</p>;")
            </div>) : ("
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
                <div className="flex items - center justify - between">;"
                  <div className="flex items - center">;"
                      <h3 className="font - medium">{key.name}</h3>;""
                      <div className="flex items - center space - x-2 mt - 1">;"
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;"
                      <DropdownMenuItem;)
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
                        <RefreshCw size={14} className="mr-2" /> Regenerate;"

                      
                      <DropdownMenuItem;
                        onClick={() => setShowDeleteConfirm(key.id)}
                        <X size={14} className="mr-2" /> Revoke;"

                      
                    
                  
                <div className="mt-3 flex flex-wrap gap-2">"
                    <Badge;"

                <div className="mt - 3 flex flex - wrap gap - 2">;"
                    <Badge;
                      key={scope}"
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""
                    >

                    
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>

                    <PopoverTrigger className="flex items-center hover:text-zinc-300">"
                      <Clock size={12} className="mr-1" />"

                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">"
                      <p className="text-sm mb-1">Last Used</p>""
                      <p className="text-xs text-zinc-400">"
                    
                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>"

        
                          <Badge className="bg - green - 700 text - white">Active) : (")"
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked)}"

                    <DropdownMenuTrigger as_child>;

                      <Button variant="ghost" size="icon">;"

                        <MoreVertical size={16} />;


                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
                  <span>Created: {format(new Date(key && key.created_at), 'MMM d, yyyy')}</span>;
                  <Popover>;

                    <PopoverTrigger className="flex items-center hover:text-zinc-300">;"
                      <Clock size={12} className="mr-1" />;"

                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;"
                      <p className="text-sm mb-1">Last Used</p>;""
                      <p className="text-xs text-zinc-400">;"
</p>"
                      variant="secondary";""
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";"

                    ))}
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;"
                  <span > Created: {format (new Date (key.created_at), 'MMM d, yyyy')}</span>;

                    <PopoverTrigger className="flex items - center hover:text - zinc - 300">;"
                      <Clock size={12} className="mr - 1" />;"

                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;"
                      <p className="text - sm mb - 1">Last Used</p>;""
                      <p className="text - xs text - zinc - 400">;"
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"

          <AlertDialogHeader>

            <AlertDialogTitle>Regenerate API Key?"
            <AlertDialogDescription className="text-zinc-400">"

            
          
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"

            
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}

            
          
        
      
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}


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

              on_click={() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm)}

    );"
pr-12325

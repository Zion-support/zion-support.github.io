
import { useState } from "react";""
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from "lucide-react";""
import { format } from "date-fns";""
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys";"
;"
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";""
import { Input } from "@/components/ui/input";""
import { Checkbox } from "@/components/ui/checkbox";""
import { Label } from "@/components/ui/label";""
import { Badge } from "@/components/ui/badge";""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";""
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";""
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";"
import CodeBlock from "./CodeBlock";"
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
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),;
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),;
"
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;"
          <Key className="mr-2" size={20} /> API Keys;"
        <CardDescription className="text-zinc-400">;"
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;"
</div>"
          <p className="text-sm text-zinc-400">;"
</p>
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
                  <Input;"
                    id="key-name";"
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}

                </div>;"
</div>
                  <Label>Scopes;"
                  <div className="grid gap-2 pt-2">;"
                      <div key={scope.value} className="flex items-center space-x-2">;"
                        <Checkbox ;
                          id={scope.value} ;
                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}

                        <Label;
                          htmlFor={scope.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";"
                        >;
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>;"
                      </div>;
              <DialogFooter>;
                <Button variant="outline" onClick={handleDialogClose}>Cancel;""
                <Button onClick={handleCreateKey} disabled={keyName.trim() === "" || selectedScopes.length === 0}>;"
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;"
            <div className="flex justify-between items-start mb-2">;"
              <span className="font-medium flex items-center">;"
</span>"
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;"
              </span>;
              <Button;"
                variant="ghost";""
                size="icon";""
                className="h-6 w-6";"
                onClick={clearNewApiKey}

                <X size={14} />;

            <p className="text-sm text-zinc-300 mb-2">;"
            </p>;"
            <CodeBlock code={newApiKey} className="mb-3" />;"
            <div className="text-sm text-zinc-400">;"
              <span className="font-medium">Example usage:</span>;"
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />;"
        <div className="space-y-4">;"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
              <Key className="mx-auto mb-2 opacity-30" size={24} />;"
              <p>No API keys found.</p>;"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;"
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;"
                  <div className="flex items-center">;"
                    <div>;
                      <h3 className="font-medium">{key.name}</h3>;""
                      <div className="flex items-center space-x-2 mt-1">;"
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}</span>;""
                          <Badge className="bg-green-700 text-white">Active;""
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked;"
                  <DropdownMenu>;

                    <DropdownMenuTrigger asChild>;
                      <Button variant="ghost" size="icon">;"
                        <MoreVertical size={16} />;

                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;"
                      <DropdownMenuItem;
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        <RefreshCw size={14} className="mr-2" /> Regenerate;"
                        onClick={() => setShowDeleteConfirm(key.id)}
                        <X size={14} className="mr-2" /> Revoke;"
                <div className="mt-3 flex flex-wrap gap-2">;"
                    <Badge ;
                      key={scope} ;"
                      variant="secondary";""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800";"
                    >;                      {scope}

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
                  <span>Created: {format(new Date(key.created_at);, 'MMM d, yyyy')}</span>;
                  <Popover>;

                    <PopoverTrigger className="flex items-center hover:text-zinc-300">;"
                      <Clock size={12} className="mr-1" />;"
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;"
                      <p className="text-sm mb-1">Last Used</p>;""
                      <p className="text-xs text-zinc-400">;"
                    <span>Expires: {format(new Date(key.expires_at);, 'MMM d, yyyy')}</span>;                  )}
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;"
        <div className="text-xs text-zinc-500">;"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;"
      <AlertDialog ;
        open={showRegenerateConfirm !== null} ;
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
          <AlertDialogHeader>;

            <AlertDialogTitle>Regenerate API Key?;"
            <AlertDialogDescription className="text-zinc-400">;"
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;"
            <AlertDialogAction ;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}

        open={showDeleteConfirm !== null} ;
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}


            <AlertDialogTitle>Revoke API Key?;"


              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}



const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null> (null);
//Create key form state //Load keys on mount await createApiKey (keyName, selectedScopes);
setShowCreateDialog (false);
//Toggle a scope selection const toggleScope = (scope: ApiKeyScope) => {
  setSelectedScopes (prev => prev.includes (scope) ? prev.filter (s => s !== scope) -H "Authorization: Bearer $ {
  key 
}" \\ -H "Content-Type: application/json"` ;
};
//Reset form when dialog closes const handleDialogClose = () => {
  setKeyName ("");
setSelectedScopes ([]);
setShowCreateDialog (false) 
};
 return `curl -X GET " https://api.ziontechgroup.com/v1/jobs"\\ -H " Authorization: Bearer $ {
  key 
}"\\ -H " Content-Type: application/json"`;
};
//Reset form when dialog closes </CardTitle> <CardDescription className=" text-zinc-400"> Create and manage API keys for accessing the Zion APIs. </CardDescription> </CardHeader> <CardContent> </p> <Dialog open= {
  showCreateDialog 
</string>"
//Reset form when dialog closes  <CardDescription className=" text-zinc-400"> Create and manage API keys for accessing the Zion APIs.   <CardContent> </p> <Dialog open= {"
  showCreateDialog;
pr-12325
}onOpenChange= {
  setShowCreateDialog;"
}> <DialogTrigger asChild> <Button variant=" default">Create New API Key  <DialogContent className=" bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create API Key <DialogDescription className=" text-zinc-400"> Generate a new API key for accessing the Zion APIs.   <div className=" space-y-4 py-4"> <div className=" space-y-2"> <Label htmlFor=" key-name">Key Name <Input /> </div> <div className=" space-y-2"> <Label>Scopes <Checkbox id= {"
  scope.value;
}checked= {
  selectedScopes.includes (scope.value) 
}onCheckedChange= {
  () => toggleScope (scope.value) 
}/> <Label  </div>) ) 
}</div> </div> </div> <DialogFooter> Create Key     </div> {"
  newApiKey && (<div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md"> <div className="flex justify-between items-start mb-2"> <span className="font-medium flex items-center"> <Check size= {"
}className="mr-2 text-green-500"/> New API Key Generated </span> <Button variant=" ghost"size=" icon"className="h-6 w-6"onClick= {"
}> <X size= {
}/>  </div> <p className="text-sm text-zinc-300 mb-2"> This key will only be displayed once. Please save it securely. </p> <CodeBlock code= {"
  newApiKey;)"
}className="mb-3"/> <div className="text-sm text-zinc-400"> <span className="font-medium">Example usage: </span> </div> </div>)"";
}<div className="space-y-4"> {"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading API keys...</div>) : keys.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Key className="mx-auto mb-2 opacity-30"size= {"
  24;)"
}/> <p>No API keys found.</p> <p className="text-sm mt-1">Create one to access the Zion APIs.</p> </div>) : (keys.map ( (key) => (<div key= {"
  key.id;"
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div className="flex items-center"> <div> <h3 className="font-medium"> {"
</div>)"
}</h3> <div className="flex items-center space-x-2 mt-1">) : (<Badge variant=" secondary"className="bg-red-900 text-white border-red-800">Revoked)"
}</div> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild>   <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick= {"
}> <RefreshCw size= {
  14;"
}className="mr-2"/> Regenerate  <DropdownMenuItem onClick= {"
}className="mr-2"/> Revoke    </div> <Badge key= {"
}) ) "
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {";
}</span> <Popover> <PopoverTrigger className="flex items-center hover: text-zinc-300"> <Clock size= {";
} <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3"> <p className="text-sm mb-1">Last Used</p> <p className="text-xs text-zinc-400"> {"
}</p>   {
  key.expires at && (<span>Expires: {
</span>)
}</span>) 
}</div> </div>) ) ) "
}</div>  <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Keep your API keys secure. They have the same permissions as your account. </div> Refresh   {"
}<AlertDialog open= {
  showRegenerateConfirm !== null;
  (open) => !open && setShowRegenerateConfirm (null) 
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Regenerate API Key? <AlertDialogDescription className="text-zinc-400"> This action will invalidate the existing key and generate a new one. Any applications using this key will need to be updated.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover: bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction onClick= {";
}className="bg-blue-600 hover:bg-blue-700"> Regenerate     {"
  showDeleteConfirm !== null;
  (open) => !open && setShowDeleteConfirm (null) 
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Revoke API Key? <AlertDialogDescription className="text-zinc-400"> This action will revoke the API key and it can no longer be used to access the API. This action cannot be undone.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction > Revoke     )""
keys,

    loading, 
    newApiKey;
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 

    revokeApiKey,


  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>()
    null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null);
  // Create key form state;
  const [key_name, setKeyName] = useState ();
  const [selected_scopes, setSelectedScopes] = useState < ApiKeyScope[]>([]);
  // Load keys on mount;
  useState (() => {
    fetchApiKeys ();
  });
  const handleCreateKey = async () => {
    if (===  || selected_scopes.length === 0) return) {
  $2;
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ();
    setSelectedScopes ([]) }
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id);
    setShowRegenerateConfirm (null);  useState (() => {
    if (=== "" || selected_scopes.length === 0) return) {"
    setShowCreateDialog (false);"
    setKeyName ("");"
    setSelectedScopes ([]);

    setShowRegenerateConfirm (null);
  const handleRevokeKey = async (key_id: string) => {
    await revokeApiKey (key_id);
    setShowDeleteConfirm (null);

  const handleRegenerateKey = async (key_id: string, ) => {
    await regenerateApiKey (key_id),
  },
  const handleRevokeKey = async (key_id: string, ) => {
    await revokeApiKey (key_id),
  // Scope options;
  const scope_options: {,
  value: ApiKeyScope;
    label: string;,
  description: string;
  }[] = [;

    {"
      value: 'jobs:read,
  label: 'Read Jobs
      description: 'Access to view job listings
    {
      value: 'jobs:write,
  label: 'Write Jobs
      description: 'Create and manage job listings
      value: 'talent:read,
  label: 'Read Talent
      description: 'Access to view talent profiles
      value: 'quotes:write,
  label: 'Write Quotes
      description: 'Create and manage quotes

    if (keyName.trim() === "" || selectedScopes.length === 0) return;"
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);"
    setKeyName("");"]
    setSelectedScopes([])
  };

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null)
  
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null)
  
  // Scope options;
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = ["
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },']
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],
  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev => )
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
        : [...prev, scope]

    )
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\""
  -H "Authorization: Bearer ${key}" \\""
      value: 'webhooks:manage',
      label: 'Manage Webhooks',
      description: 'Set up and manage webhook endpoints',
  ];
  // Toggle a scope selection;
  const toggle_scope = (scope: ApiKeyScope) =>: any {
  // TODO: Implement
    setSelectedScopes (prev =>;)
      prev.includes (scope) ? prev.filter (string => s !== scope) : [...prev, scope]);
  }`;
  const getExampleCode = (key: string) =>: any {    return `curl -X GET "https://api.ziontechgroup.com / v1 / jobs" \\;""
  -H "Authorization: Bearer ${key}" \\;""`;
  -H "Content - Type: application / json"` }"
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
  // TODO: Implement
}"`;
    setKeyName ();  -H "Content - Type: application / json"`;"
  // Reset form when dialog closes;
  // TODO: Implement
}"

  return (


import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date-fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
} from '@/components/ui/alert-dialog';
import CodeBlock from './CodeBlock';')
export function ApiKeysManager() {;
  const {;
    keys,;
    loading,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey,;
    clearNewApiKey,;
  } = useApiKeys();

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
</string>
    string | null;)

  // Create key form state;
  const [keyName, setKeyName] = useState();
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

    <Card className='bg-zinc-900 border-zinc-800 text-white'>;

      <CardHeader>;

        <CardTitle className='text-xl flex items-center'>;

          <Key className='mr-2' size={20} /> API Keys;

        ;
        <CardDescription className='text-zinc-400'>;

      <CardContent>;

        <div className='flex justify-between items-center mb-6'>;
</div>
          <p className='text-sm text-zinc-400'>;
</p>
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;

            <DialogTrigger asChild>;

              <Button variant='default'>Create New API Key;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;

              <DialogHeader>;

                <DialogTitle>Create API Key;
                <DialogDescription className='text-zinc-400'>;

              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='key-name'>Key Name;
                  <Input;
                    id='key-name
                    value={keyName}
                    onChange={e => setKeyName(e && e.target.value)}

                </div>;
                  <Label>Scopes;
                  <div className='grid gap-2 pt-2'>;
                      <div;
                        key={scope && scope.value}
                        className='flex items-center space-x-2'>;
                        <Checkbox;
                          id={scope && scope.value}                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}                  <div className="grid gap-2 pt-2">;"
"
                      <div key={scope && scope.value} className="flex items-center space-x-2">;"
                          id={scope && scope.value} 
                          onCheckedChange={() => toggleScope(scope && scope.value)}

                        <Label;
                          htmlFor={scope && scope.value}"
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;

                          <span className='block text-xs text-zinc-400 mt-1'>;
</span>
                          </span>                                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";""
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;"
                          id={scope.value} 
                          checked={selectedScopes.includes(scope.value)}

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),

                  <Label>Scopes"
                  <div className="grid gap-2 pt-2">"
</div>"
                      <div key={scope.value} className="flex items-center space-x-2">"

                          onCheckedChange={() => toggleScope(scope.value)}

                          htmlFor={scope.value}


                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70""
                        >
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>"
                        



                
              
            
          

              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>;

                <Button;
                  onClick={handleCreateKey}
                  disabled={
                    keyName && keyName.trim() ===  || selectedScopes && selectedScopes.length === 0;
                  }>                  Create Key              ;


                <Button variant="outline" onClick={handleDialogClose}>Cancel;""
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;"
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;


        <CardTitle className='text - xl flex items - center'>;

          <Key className='mr - 2' size={20} /> API Keys;

        <CardDescription className='text - zinc - 400'>;


        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;

            <DialogTrigger as_child>;

            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;


                <DialogTitle > Create API Key;
                <DialogDescription className='text - zinc - 400'>;

              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='key - name'>Key Name;
                    id='key - name';
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}

                  <Label > Scopes;
                  <div className='grid gap - 2 pt - 2'>;
                        key={scope.value}
                        className='flex items - center space - x-2';
                      >;
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className="grid gap - 2 pt - 2">;"
                      <div key={scope.value} className="flex items - center space - x-2">;"
                          onCheckedChange={() => toggle_scope (scope.value)}

                          html_for={scope.value}"
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';

                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                          </span>                                                  className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";""
                          <span className="block text - xs text - zinc - 400 mt - 1">{scope.description}</span>;"
                      </div>))}
                <Button variant='outline' on_click={handleDialogClose}>;

                  on_click={handleCreateKey}
                    key_name.trim () ===  || selected_scopes.length === 0;
                >                  Create Key;


                <Button variant="outline" on_click={handleDialogClose}>Cancel;""
                <Button on_click={handleCreateKey} disabled={key_name.trim () === "" || selected_scopes.length === 0}>;"

        </div>;"
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;"
            <div className="flex justify-between items-start mb-2">;"
              <span className="font-medium flex items-center">;"
</span>"
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;"

              </span>;
        {/* New API Key Alert */}
        {newApiKey && ("
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">"
            <div className="flex justify-between items-start mb-2">"
              <span className="font-medium flex items-center">"

              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-6 w-6""
                onClick={clearNewApiKey}


        {/* API Keys List */}"
        <div className="space - y-4">;"
)"
            <div className="text - center py - 8 text - zinc - 500">Loading API keys...</div>) : keys.length === 0 ? (""
            <div className="text - center py - 8 text - zinc - 500">;"
              <Key className="mx - auto mb - 2 opacity - 30" size={24} />;"

              <p > No API keys found.</p>;"
              <p className="text - sm mt - 1">Create one to access the Zion APIs.</p>;")
            </div>) : ("
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
                <div className="flex items - center justify - between">;"
                  <div className="flex items - center">;"
                    <div>;
                      <h3 className="font - medium">{key.name}</h3>;""
                      <div className="flex items - center space - x-2 mt - 1">;"
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;"
                <X size={14} />

              
            <p className="text-sm text-zinc-300 mb-2">"
            </p>"
            <CodeBlock code={newApiKey} className="mb-3" />"
            <div className="text-sm text-zinc-400">"
              <span className="font-medium">Example usage:</span>"
            </div>)"
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />"

        <div className='space-y-4'>
        <div className="space-y-4">"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>""
            <div className="text-center py-8 text-zinc-500">"
              <Key className="mx-auto mb-2 opacity-30" size={24} />"

              <p>No API keys found.</p>"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>"
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center">"
                    <div>
                      <h3 className="font-medium">{key.name}</h3>""
                      <div className="flex items-center space-x-2 mt-1">"
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>""
                          <Badge className="bg-green-700 text-white">Active""
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked"

                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked;"
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
              <div key={key && key.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;"
                  <div className="flex items-center">;"
                      <h3 className="font-medium">{key && key.name}</h3>;""
                      <div className="flex items-center space-x-2 mt-1">;"
                        <span className="text-sm text-zinc-400 font-mono">{key && key.key_prefix}••••••••••••</span>;""
                          <Badge className="bg-green-700 text-white">Active;""
                  <DropdownMenu>;

                    <DropdownMenuTrigger asChild>;


                        variant='ghost
                        size='icon
                        aria-label='More options'>;

                        <MoreVertical size={16} />;

                    <DropdownMenuContent;
                      align='end
                      className='bg-zinc-900 border-zinc-800 text-white'>;

                      <DropdownMenuItem;
                        onClick={() => setShowRegenerateConfirm(key && key.id)}

                        <RefreshCw size={14} className='mr-2' /> Regenerate;

                      
                    
                  

                

                <div className="mt-3 flex flex-wrap gap-2">"
                        <X size={14} className='mr-2' /> Revoke                      ;

                </div>                        <X size={14} className="mr-2" /> Revoke;"

                <div className='mt-3 flex flex-wrap gap-2'>;
                    <Badge;
                      key={scope}
                      variant='secondary
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                ;

                <div className="mt-3 flex flex-wrap gap-2">;"
                      key = {scope,}"
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"""

                      key={scope} "
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;

                      <Clock size={12} className='mr-1' />;

                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>

                    <PopoverTrigger className="flex items-center hover:text-zinc-300">"
                      <Clock size={12} className="mr-1" />"

                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">"
                      <p className="text-sm mb-1">Last Used</p>""
                      <p className="text-xs text-zinc-400">"
                    
                  
                    ;"
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;

                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                            )                          : 'This API key has never been used'}                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;"
                      <p className="text-sm mb-1">Last Used</p>;""
                      <p className="text-xs text-zinc-400">;"
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}</span>;
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>"

        
      
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;

        <div className='text-xs text-zinc-500'>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      ;

      <CardFooter className="justify-between border-t border-zinc-800 py-4">;"
        <div className="text-xs text-zinc-500">;"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;"

                          <Badge className="bg - green - 700 text - white">Active) : (")"
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked)}"

                    <DropdownMenuTrigger as_child>;

                        variant='ghost';
                        size='icon';
                        aria - label='More options';


                      align='end';
                      className='bg - zinc - 900 border - zinc - 800 text - white';

                        on_click={() => setShowRegenerateConfirm (key.id)}

                        <RefreshCw size={14} className='mr - 2' /> Regenerate;

                        on_click={() => setShowDeleteConfirm (key.id)}

                        <X size={14} className='mr - 2' /> Revoke                      ;

                </div>                        <X size={14} className="mr - 2" /> Revoke;"

                <div className='mt - 3 flex flex - wrap gap - 2'>;
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >;

                <div className="mt - 3 flex flex - wrap gap - 2">;"
                      key = {scope, }"
                      variant="secondary";""
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";"
                      {scope}
                    ))}
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                    <PopoverTrigger className='flex items - center hover:text - zinc - 300'>;

                      <Clock size={12} className='mr - 1' />;

                    <PopoverContent className='bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3'>;

                      <p className='text - sm mb - 1'>Last Used</p>;
                      <p className='text - xs text - zinc - 400'>;
                              'MMM d, yyyy HH:mm:ss')                          : 'This API key has never been used'}                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;"
                      <p className="text - sm mb - 1">Last Used</p>;""
                      <p className="text - xs text - zinc - 400">;"
                    </span>                  )}                    <span > Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}</span>)}
              </div>)))}
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;

        <div className='text - xs text - zinc - 500'>;
        <Button variant='outline' size='sm' on_click={fetchApiKeys}>          Refresh;

      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;"
        <div className="text - xs text - zinc - 500">;"
        <Button variant="outline" size="sm" on_click={fetchApiKeys}>;"

      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm (null)}
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;

          <AlertDialogHeader>;

            <AlertDialogTitle > Regenerate API Key?;
            <AlertDialogDescription className='text - zinc - 400'>;

          <AlertDialogFooter>;

        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}

        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"

          <AlertDialogHeader>

            <AlertDialogTitle>Regenerate API Key?"
            <AlertDialogDescription className="text-zinc-400">"

            
          
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"

            
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}

            
          
        
      
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"


            <AlertDialogTitle>Regenerate API Key?;"
            <AlertDialogDescription className="text-zinc-400">;"
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;

              on_click={() =>;

              on_click = {() => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm), }

        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;"


            <AlertDialogTitle > Regenerate API Key?;"
            <AlertDialogDescription className="text - zinc - 400">;"




            <AlertDialogTitle>Revoke API Key?;"


              on_click = {() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm), }



            <AlertDialogTitle > Revoke API Key?;"


      ;"`;
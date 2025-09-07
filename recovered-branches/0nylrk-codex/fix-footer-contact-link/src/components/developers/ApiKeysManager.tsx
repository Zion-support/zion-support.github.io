
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
</string>
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
</ApiKeyScope>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);
</string>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
</string>
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),
</ApiKeyScope>
    <Card className="bg-zinc-900 border-zinc-800 text-white">"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="text-xl flex items-center">"
</CardTitle>"
          <Key className="mr-2" size={20} /> API Keys;"
</Key>
        </CardTitle>"
        <CardDescription className="text-zinc-400">"
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="flex justify-between items-center mb-6">"
</div>"
          <p className="text-sm text-zinc-400">"
</p>
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
</Dialog>
            <DialogTrigger asChild>
</DialogTrigger>"
              <Button variant="default">Create New API Key</Button>"
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</DialogContent>
              <DialogHeader>
</DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>"
                <DialogDescription className="text-zinc-400">"
</DialogDescription>
                </DialogDescription>
              </DialogHeader>"
              <div className="space-y-4 py-4">"
</div>"
                <div className="space-y-2">"
</div>"
                  <Label htmlFor="key-name">Key Name</Label>"
                  <Input;"
                    id="key-name""
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
</Input>
                </div>"
                <div className="space-y-2">"
</div>
                  <Label>Scopes</Label>"
                  <div className="grid gap-2 pt-2">"
</div>"
                      <div key={scope.value} className="flex items-center space-x-2">"
</div>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),;
</string>
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),;
</ApiKeyScope>"
    <Card className="bg-zinc-900 border-zinc-800 text-white">;"
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="text-xl flex items-center">;"
</CardTitle>"
          <Key className="mr-2" size={20} /> API Keys;"
</Key>
        </CardTitle>;"
        <CardDescription className="text-zinc-400">;"
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="flex justify-between items-center mb-6">;"
</div>"
          <p className="text-sm text-zinc-400">;"
</p>
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
</Dialog>
            <DialogTrigger asChild>;
</DialogTrigger>"
              <Button variant="default">Create New API Key</Button>;"
            </DialogTrigger>;"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
</DialogContent>
              <DialogHeader>;
</DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>;"
                <DialogDescription className="text-zinc-400">;"
</DialogDescription>
                </DialogDescription>;
              </DialogHeader>;"
              <div className="space-y-4 py-4">;"
</div>"
                <div className="space-y-2">;"
</div>"
                  <Label htmlFor="key-name">Key Name</Label>;"
                  <Input;"
                    id="key-name""
                    value={keyName}
                    onChange={(e) => setKeyName(e && e.target.value)}
</Input>
                </div>;"
                <div className="space-y-2">;"
</div>
                  <Label>Scopes</Label>;"
                  <div className="grid gap-2 pt-2">;"
</div>"
                      <div key={scope && scope.value} className="flex items-center space-x-2">;"
</div>
                        <Checkbox;
                          id={scope && scope.value} 
                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}
                          onCheckedChange={() => toggleScope(scope && scope.value)}
</Checkbox>
                        <Checkbox;
                          id={scope.value} 

                          checked={selectedScopes.includes(scope.value)}
                          onCheckedChange={() => toggleScope(scope.value)}
</Checkbox>
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
</ApiKeyScope>
                        <Label;
                          htmlFor={scope && scope.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;"
</Label>"
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;"
                        </Label>;
                      </div>;
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
</DialogFooter>"
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;""
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;"
</Button>
                        </Label>;
                      </div>;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;"
        <div className="space-y-4">;"
</div>"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
</div>"
              <Key className="mx-auto mb-2 opacity-30" size={24} />;"
</Key>
              <p>No API keys found.</p>;"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;"
            </div>;"
              <div key={key && key.id} className="p-4 border border-zinc-800 rounded-lg">;"
</div>"
                <div className="flex items-center justify-between">;"
</div>"
                  <div className="flex items-center">;"
</div>
                    <div>;
</div>"
                      <h3 className="font-medium">{key && key.name}</h3>;""
                      <div className="flex items-center space-x-2 mt-1">;"
</div>"
                          <Badge className="bg-green-700 text-white">Active</Badge>;""
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;"
                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
</DropdownMenu>
                    <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>
                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
</DropdownMenu>
                    <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>"
          <div className="mb - 6 p - 4 border border - green - 800 bg - green - 900 / 30 rounded - md">;"
</div>"
            <div className="flex justify - between items - start mb - 2">;"
</div>"
              <span className="font - medium flex items - center">;"
</span>"
                <Check size={16} className="mr - 2 text - green - 500" /> New API Key Generated;"
</Check>
              </span>;
              <Button;"
                variant="ghost";""
                size="icon";""
                className="h - 6 w - 6";"
                on_click={clearNewApiKey}
              >;
</Button>
                <X size={14} />;
</X>
              </Button>;
            </div>;"
            <p className="text - sm text - zinc - 300 mb - 2">;"
</p>
            </p>;"
            <CodeBlock code={newApiKey} className="mb - 3" />;"
</CodeBlock>"
            <div className="text - sm text - zinc - 400">;"
</div>"
              <span className="font - medium">Example usage:</span>;"
            </div>;"
            <CodeBlock code={getExampleCode (newApiKey)} language="bash" />;"
</CodeBlock>
          </div>)}"
        <div className="space - y-4">;"
</div>"
            <div className="text - center py - 8 text - zinc - 500">Loading API keys...</div>) : keys.length === 0 ? (""
            <div className="text - center py - 8 text - zinc - 500">;"
</div>"
              <Key className="mx - auto mb - 2 opacity - 30" size={24} />;"
</Key>
              <p > No API keys found.</p>;"
              <p className="text - sm mt - 1">Create one to access the Zion APIs.</p>;")
            </div>) : ("
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
</div>"
                <div className="flex items - center justify - between">;"
</div>"
                  <div className="flex items - center">;"
</div>
                    <div>;
</div>"
                      <h3 className="font - medium">{key.name}</h3>;""
                      <div className="flex items - center space - x-2 mt - 1">;"
</div>"
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;"
                      <DropdownMenuItem;)
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
</DropdownMenuItem>"
                        <RefreshCw size={14} className="mr-2" /> Regenerate;"
</RefreshCw>
                      </DropdownMenuItem>
                      <DropdownMenuItem;
                        onClick={() => setShowDeleteConfirm(key.id)}
</DropdownMenuItem>"
                        <X size={14} className="mr-2" /> Revoke;"
</X>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>"
                <div className="mt-3 flex flex-wrap gap-2">"
</div>
                    <Badge;"
                        <RefreshCw size={14} className="mr-2" /> Regenerate;"
</Badge>
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                    </Badge>;"
                <div className="mt - 3 flex flex - wrap gap - 2">;"
</div>
                    <Badge;
                      key={scope}"
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""
                    >
</Badge>
                    </Badge>
                </div>"
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
</div>"
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>'
                  <Popover>
</Popover>'
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">"
</PopoverTrigger>"
                      <Clock size={12} className="mr-1" />"
</Clock>
                    </PopoverTrigger>"
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">"
</PopoverContent>"
                      <p className="text-sm mb-1">Last Used</p>""
                      <p className="text-xs text-zinc-400">"
</p>
                      </p>
                    </PopoverContent>
                  </Popover>"
                    <span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}</span>'
                </div>
              </div>
        </div>
      </CardContent>'
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
</CardFooter>"
        <div className="text-xs text-zinc-500">"
</div>
        </div>"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>"
</Button>
        </Button>
      </CardFooter>"
                          <Badge className="bg - green - 700 text - white">Active</Badge>) : (")"
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked</Badge>)}"
                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
</DropdownMenu>
                    <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>
"
                      <Button variant="ghost" size="icon">;"
</Button>
                        <MoreVertical size={16} />;
</MoreVertical>
                      </Button>;
                    </DropdownMenuTrigger>;"
                        <X size={14} className="mr-2" /> Revoke;"
</X>
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                </div>;"
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
</div>"
                  <span>Created: {format(new Date(key && key.created_at), 'MMM d, yyyy')}</span>;'
                  <Popover>;
</Popover>'
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">;"
</PopoverTrigger>"
                      <Clock size={12} className="mr-1" />;"
</Clock>
                    </PopoverTrigger>;"
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;"
</PopoverContent>"
                      <p className="text-sm mb-1">Last Used</p>;""
                      <p className="text-xs text-zinc-400">;"
</p>"
                <div className="mt - 3 flex flex - wrap gap - 2">;"
</div>
                    <Badge;
                      key={scope}"
                      variant="secondary";""
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";"
                    >;
</Badge>
                    </Badge>))}
                </div>;"
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;"
</div>"
                  <span > Created: {format (new Date (key.created_at), 'MMM d, yyyy')}</span>;'
                  <Popover>;
</Popover>'
                    <PopoverTrigger className="flex items - center hover:text - zinc - 300">;"
</PopoverTrigger>"
                      <Clock size={12} className="mr - 1" />;"
</Clock>
                    </PopoverTrigger>;"
                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;"
</PopoverContent>"
                      <p className="text - sm mb - 1">Last Used</p>;""
                      <p className="text - xs text - zinc - 400">;"
</p>
                      </p>;
                    </PopoverContent>;
                  </Popover>;
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
</AlertDialog>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</AlertDialogContent>
          <AlertDialogHeader>
</AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">"
</AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
</AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"
</AlertDialogCancel>
            </AlertDialogCancel>
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
</AlertDialogAction>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
</AlertDialog>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</AlertDialogContent>
          <AlertDialogHeader>
</AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">"
</AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
</AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"
</AlertDialogCancel>
            </AlertDialogCancel>
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
</AlertDialogAction>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>"
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;"
</CardFooter>"
        <div className="text-xs text-zinc-500">;"
</div>
        </div>;"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;"
</Button>
        </Button>;
      </CardFooter>;
      <AlertDialog;
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
</AlertDialog>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;"
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;"
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
</AlertDialogAction>
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
      <AlertDialog;
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
</AlertDialog>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;"
</AlertDialogDescription>
                      </p>;
                    </PopoverContent>;
                  </Popover>;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>
"
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;"
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm)}
</AlertDialogAction>
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>);"



export function WebhooksManager() {_const {
    webhooks, _loading, _testResult, _fetchWebhooks, _createWebhook, _toggleWebhook, _deleteWebhook, _testWebhook, _clearTestResult} = useWebhooks();
  
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [showTestResult, setShowTestResult] = useState(false);

  // Create webhook form state
  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');

  // Load webhooks on mount
  useEffect__(() => {_fetchWebhooks();}, []);

  const _handleCreateWebhook = async () => {_if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return;
    
    await createWebhook(
      webhookName, _webhookUrl, _selectedEvents, _webhookSecret.trim() === "" ? undefined : webhookSecret
    );
    
    setShowCreateDialog(false);
    resetWebhookForm();};

  const _handleToggleStatus = async (_webhookId: string, _currentStatus: boolean) => {_await toggleWebhook(webhookId, _!currentStatus);};

  const _handleDeleteWebhook = async (_webhookId: string) => {_await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);};

  const _handleTestWebhook = async (_webhookId: string) => {_await testWebhook(webhookId, _testEventType);
    setShowTestResult(true);};

  const _resetWebhookForm = () => {_setWebhookName("");
    setWebhookUrl("");
    setWebhookSecret("");
    setSelectedEvents([]);};

  // Event type options
  const eventOptions: {_value: WebhookEventType; label: string; description: string}[] = [
    {_value: 'new_application', _label: 'New Application', _description: 'When a talent applies to a job'},
    {_value: 'quote_received', _label: 'Quote Received', _description: 'When a quote is received from talent'},
    {_value: 'milestone_approved', _label: 'Milestone Approved', _description: 'When a project milestone is approved'},
    {_value: 'talent_hired', _label: 'Talent Hired', _description: 'When talent is hired for a project'}];

  // Toggle an event selection
  const _toggleEvent = (_event: WebhookEventType) => {_setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event) 
        : [...prev, _event]
    );};

  return (_<Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Webhook className="mr-2" size={_20} /> Webhooks
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">
            You have {_webhooks.length} {_webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>
          
          <Dialog open={_showCreateDialog} onOpenChange={_setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant="default">
                <Plus size={_16} className="mr-1" /> Add Webhook
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="webhook-name">Webhook Name</Label>
                  <Input
                    id="webhook-name"
                    value={_webhookName}
                    onChange={_(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications"
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Endpoint window.URL</Label>
                  <Input
                    id="webhook-url"
                    value={_webhookUrl}
                    onChange={_(_e) => setWebhookUrl(e.target.value)}
                    placeholder="https://example.com/webhook"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    The window.URL where webhook payloads will be sent when events occur.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>
                  <Input
                    id="webhook-secret"
                    type="password"
                    value={_webhookSecret}
                    onChange={_(_e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key"
                    aria-label="Secret key"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">
                    {_eventOptions.map(_(event) => (
                      <div key={event.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={_event.value} 
                          checked={_selectedEvents.includes(event.value)}
                          onCheckedChange={_() => toggleEvent(event.value)}
                        />
                        <Label
                          htmlFor={_event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {_event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{_event.description}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={_() => {
                  setShowCreateDialog(false);
                  resetWebhookForm();}}>
                  Cancel
                </Button>
                <Button onClick={_handleCreateWebhook} disabled={_webhookName.trim() === "" || 
                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0}>
                  Create Webhook
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {_/* Webhooks List */}
        <div className="space-y-4">
          {_loading ? (
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>
          ) : webhooks.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />
              <p>No webhooks found.</p>
              <p className="text-sm mt-1">Create one to receive event notifications.</p>
            </div>
          ) : (_webhooks.map((webhook) => (_<div key={_webhook.id} className="p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{_webhook.name}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <Globe size={_14} className="mr-1" />
                      <span className="max-w-md truncate">{_webhook.url}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center mr-2">
                      <Switch
                        aria-label="Toggle webhook"
                        checked={_webhook.is_active}
                        onCheckedChange={_() => handleToggleStatus(webhook.id, _webhook.is_active)}
                      />
                      <span className="ml-2 text-sm">
                        {_webhook.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    
                      <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">
                          <MoreVertical size={_16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                        <DropdownMenuItem
                          onClick={_() => setShowTestDialog(webhook.id)}
                          className="cursor-pointer"
                        >
                          <PlayCircle size={_14} className="mr-2" /> Test
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={_() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500"
                        >
                          <X size={_14} className="mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {_webhook.event_types.map(_(event: WebhookEventType) => (
                    <Badge 
                      key={event} 
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >
                      {_event}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {_format(new Date(webhook.created_at), _'MMM d, _yyyy')}</span>
                  {_webhook.last_triggered_at && (
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), _'MMM d, _yyyy HH:mm')}</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant="outline" size="sm" onClick={_fetchWebhooks}>
          <RefreshCw size={_14} className="mr-1" /> Refresh
        </Button>
      </CardFooter>

      {_/* Test Webhook Dialog */}
      <Dialog 
        open={_showTestDialog !== null} 
        onOpenChange={_(_open) => {
          if (!open) {
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {
              setShowTestResult(false);
              clearTestResult();}
          }
        }}
      >
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          
          {_!showTestResult ? (_<>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="test-event-type">Event Type</Label>
                  <Select
                    value={testEventType}
                    onValueChange={_(value) => setTestEventType(value as WebhookEventType)}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {_eventOptions.map(_(option) => (
                        <SelectItem key={option.value} value={_option.value}>
                          {_option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-zinc-500">
                    The event type will determine the structure of the test payload.
                  </p>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={_() => setShowTestDialog(null)}>
                  Cancel
                </Button>
                <Button onClick={_() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
                </Button>
              </DialogFooter>
            </>
          ) : (_<>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge
                      className={_testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"}
                    >
                      {_testResult?.status} {_testResult?.statusText}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {_testResult?.responseBody || "No response body"}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="default" onClick={_() => {
                  setShowTestDialog(null);
                  setShowTestResult(false);
                  clearTestResult();}}>
                  Close
                </Button>
                <Button variant="outline" onClick={_() => {
                  setShowTestResult(false);
                  clearTestResult();}}>
                  Test Another Event
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {_/* Delete Webhook Confirmation Dialog */}
      <AlertDialog 
        open={_showDeleteConfirm !== null} 
        onOpenChange={_(_open) => !open && setShowDeleteConfirm(null)}
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action will permanently remove this webhook.
              You will no longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={_() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

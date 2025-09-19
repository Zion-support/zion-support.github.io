
}/>"
                      <span className="ml-2 text-sm">"
                        {webhook.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>"
                        <Button variant="ghost" size="icon">
                          <MoreVertical size={16}/>
                        </Button>
                      </DropdownMenuTrigger>"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">"
                        <DropdownMenuItem onClick={() => setShowTestDialog(webhook.id)} className="cursor-pointer">"
                          <PlayCircle size={14} className="mr-2"/> Test
                        </DropdownMenuItem>"
                        <DropdownMenuItem onClick={() => setShowDeleteConfirm(webhook.id)} className="cursor-pointer text-red-500">"
                          <X size={14} className="mr-2"/> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
"
                <div className="mt-3 flex flex-wrap gap-2">"
                  {webhook.event_types.map((event) => (<Badge key={event} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
                      {event}
                    </Badge>))}
                </div>
"
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">
                  <span>Created: {format(new Date(webhook.created_at),MMM d, yyyy')}</span>
                  {webhook.last_triggered_at && (<span>Last triggered: {format(new Date(webhook.last_triggered_at),MMM d, yyyy HH:mm')}</span>)}
                </div>
              </div>)))}
        </div>
      </CardContent>
"
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.</div>"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>"
          <RefreshCw size={14} className="mr-1"/> Refresh
        </Button>
      </CardFooter>

      {/* Test Webhook Dialog */}
      <Dialog open={showTestDialog !== null} onOpenChange={(open) => {

            if(!open) {

                setShowTestDialog(null);
                setTestEventType('new_application');
                if(showTestResult) {

                    setShowTestResult(false);
                    clearTestResult()}
            }
        }}>"
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>"
            <DialogDescription className="text-zinc-400">
              Send a test webhook to your endpoint.</DialogDescription>
          </DialogHeader>

          {!showTestResult ? (<>"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="test-event-type">Event Type</Label>
                  <Select value={testEventType} onValueChange={(value) => setTestEventType(value)}>"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
                      <SelectValue placeholder="Select an event type"/>
                    </SelectTrigger>"
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (<SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>))}
                    </SelectContent>
                  </Select>"
                  <p className="text-xs text-zinc-500">
                    The event type will determine the structure of the test payload.</p>
                </div>
              </div>

              <DialogFooter>"
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel
                </Button>
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
                  Send Test
                </Button>
              </DialogFooter>
            </>) : (<>"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge className={testResult && testResult.status >= 200 && testResult.status < 300"
                ? "bg-green-700"
                : "bg-red-700"}>
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
"
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">"
                        {testResult?.responseBody || "No response body"}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>

              <DialogFooter>"
                <Button variant="default" onClick={() => {
                setShowTestDialog(null);
                setShowTestResult(false);
                clearTestResult()}}>
                  Close
                </Button>"
                <Button variant="outline" onClick={() => {
                setShowTestResult(false);
                clearTestResult()}}>
                  Test Another Event
                </Button>
              </DialogFooter>
            </>)}
        </DialogContent>
      </Dialog>

      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog open={showDeleteConfirm !== null} onOpenChange={(open) => !open && setShowDeleteConfirm(null)}>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">
              This action will permanently remove this webhook.You will no longer receive events at this endpoint.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>"
            <AlertDialogAction onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>)}
'"
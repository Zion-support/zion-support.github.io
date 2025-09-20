// Create webhook form state,
const [webhookName, setWebhookName] = useState("");
const [webhookUrl, setWebhookUrl] = useState("");
const [webhookSecret, setWebhookSecret] = useState("");
const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

// Load webhooks on mount,
useEffect(() => {
fetchWebhooks()
clearTestResult()
                }}>
                </Button>
              </DialogFooter>
</>
          )}
        </DialogContent>
      </Dialog>
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog
open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will permanently remove this webhook. You will no,
longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
onClick={() =>
                showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'            >
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {eventOptions.map ( (option) => (<SelectItem key= {
  option.value}value= {option.value}> {option.label}</SelectItem>) ) "
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={
  () => showTestDialog && handleTestWebhook (showTestDialog) "

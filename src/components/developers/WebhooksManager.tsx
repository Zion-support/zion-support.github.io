useEffect(() => {
fetchWebhooks()
clearTestResult()
}}>;
</Button>;
</DialogFooter>;
</>;
)}
</DialogContent>;
</Dialog>;
{/* Delete Webhook Confirmation Dialog */}
<AlertDialog;
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
            <AlertDialogAction,
onClick={() =>
                showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'            >

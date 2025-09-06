


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ScoreDialogProps {

  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null

  onScoreUpdated: (updatedApplication: JobApplication) => void
}



  onScoreUpdated
}: ScoreDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Application Match Score</DialogTitle>
        </DialogHeader>
        {application && (

          <ApplicationScoreCard 

            application={application}
            onScoreUpdated={onScoreUpdated}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
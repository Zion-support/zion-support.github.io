
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from &quot;@/components/ui/dialog&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { ApplicationScoreCard } from &quot;../ApplicationScoreCard&quot;;

interface ScoreDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  application: JobApplication | null;
  onScoreUpdated: (updatedApplication: JobApplication) => void;
}

export function ScoreDialog({
  open,
  onOpenChange,
  application,
  onScoreUpdated
}: ScoreDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=&quot;sm:max-w-md&quot;>
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
  );
}

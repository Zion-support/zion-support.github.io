
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle
} from "@/components/ui/dialog",
import { JobApplication } from "@/types/jobs";
import { ApplicationScoreCard } from "../ApplicationScoreCard";
interface ScoreDialogProps {
<<<<<<< HEAD
  open: boolean;
  onOpenChange: (open: boolean) => void;
  application: JobApplication | null;
<<<<<<< HEAD
=======
  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  onScoreUpdated: (updatedApplication: JobApplication) => void
}
=======
  onScoreUpdated: (updatedApplication: JobApplication) => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function ScoreDialog({
  open;
  onOpenChange;
  application;
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
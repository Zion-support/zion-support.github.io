
<<<<<<< HEAD
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle
} from "@/components/ui/dialog",
import { JobApplication } from "@/types/jobs";
import { ApplicationScoreCard } from "../ApplicationScoreCard";
interface ScoreDialogProps {

  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null

  onScoreUpdated: (updatedApplication: JobApplication) => void
}
export function ScoreDialog({
=======
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {JobApplication} from "@/types/jobs";
import {ApplicationScoreCard} from "../ApplicationScoreCard";
interface ScoreDialogProps {;
  open: boolean,;
  onOpenChange: (open: boolean) => void,;
  application: JobApplication | null,;
  onScoreUpdated: (updatedApplication: JobApplication) => void;
}

export function ScoreDialog(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  open;
  onOpenChange;
  application;
  onScoreUpdated;
}: ScoreDialogProps) {;
  return (
<<<<<<< HEAD
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Application Match Score</DialogTitle>
        </DialogHeader>
        {application && (
=======
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader>;
          <DialogTitle>Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <ApplicationScoreCard
            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}
<<<<<<< HEAD
      </DialogContent>
    </Dialog>
  )
}
=======
      </DialogContent>;
    </Dialog>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

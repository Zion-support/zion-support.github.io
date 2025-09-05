
<<<<<<< HEAD
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
<<<<<<< HEAD
} from "@/components/ui/dialog",
import { JobApplication } from "@/types/jobs",
import { ApplicationScoreCard } from "../ApplicationScoreCard",
=======
} from &quot;@/components/ui/dialog&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { ApplicationScoreCard } from &quot;../ApplicationScoreCard&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ScoreDialogProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  application: JobApplication | null,
  onScoreUpdated: (updatedApplication: JobApplication) => void
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
=======
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle;
} from "@/components/ui/dialog",;
import { JobApplication } from "@/types/jobs",;
import { ApplicationScoreCard } from "../ApplicationScoreCard",;
interface ScoreDialogProps {;
  open: boolean,;
  onOpenChange: (open: boolean) => void,;
  application: JobApplication | null,;
  onScoreUpdated: (updatedApplication: JobApplication) => void;
}
;
export function ScoreDialog({;
  open,;
  onOpenChange;
  application;
  onScoreUpdated;
}: ScoreDialogProps) {;
  return (;
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader>;
          <DialogTitle>Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (;
          <ApplicationScoreCard;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}
      </DialogContent>;
    </Dialog>;
  );
}
;
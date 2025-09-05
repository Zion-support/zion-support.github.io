
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
=======
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle} from "@/components/ui/dialog";

interface ScoreDialogProps {_open: boolean;
  onOpenChange: (_open: boolean) => void;
  application: JobApplication | null;
  onScoreUpdated: (_updatedApplication: JobApplication) => void;}

export function ScoreDialog(_{_open, _onOpenChange, _application, _onScoreUpdated}: ScoreDialogProps) {_return (
    <Dialog open={open} onOpenChange={_onOpenChange}>
      <DialogContent className="sm:max-w-md">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <DialogHeader>
          <DialogTitle>Application Match Score</DialogTitle>
        </DialogHeader>
        {_application && (
          <ApplicationScoreCard 
            application={application}
            onScoreUpdated={_onScoreUpdated}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

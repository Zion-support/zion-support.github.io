
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog",
import { JobApplication } from "@/types/jobs",
import { ApplicationScoreCard } from "../ApplicationScoreCard",interface ScoreDialogProps {
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
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle} from "@/components/ui/dialog";

interface ScoreDialogProps {_open: boolean;
  onOpenChange: (_open: boolean) => void;
  application: JobApplication | null;
  onScoreUpdated: (_updatedApplication: JobApplication) => void;}

export function ScoreDialog(_{_open, _onOpenChange, _application, _onScoreUpdated}: ScoreDialogProps) {_return (
    <Dialog open={open} onOpenChange={_onOpenChange}>
      <DialogContent className="sm:max-w-md">
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


<<<<<<< HEAD
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {JobApplication} from "@/types/jobs";
import {ApplicationScoreCard} from "../ApplicationScoreCard";
=======
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle
} from "@/components/ui/dialog",
<<<<<<< HEAD
import { JobApplication } from "@/types/jobs";
import { ApplicationScoreCard } from "../ApplicationScoreCard";
=======
import { JobApplication } from "@/types/jobs",
import { ApplicationScoreCard } from "../ApplicationScoreCard",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface ScoreDialogProps {

  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null

  onScoreUpdated: (updatedApplication: JobApplication) => void
}

<<<<<<< HEAD
export function ScoreDialog({;
  open;
  onOpenChange;
  application;
=======
export function ScoreDialog({
  open,
  onOpenChange,
  application,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onScoreUpdated
}: ScoreDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Application Match Score</DialogTitle>
        </DialogHeader>
        {application && (
<<<<<<< HEAD
          <ApplicationScoreCard
=======
          <ApplicationScoreCard 
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            application={application}
            onScoreUpdated={onScoreUpdated}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
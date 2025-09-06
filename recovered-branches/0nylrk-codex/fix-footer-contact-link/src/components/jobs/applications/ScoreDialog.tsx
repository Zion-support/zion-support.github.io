
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {JobApplication} from "@/types/jobs";
import {ApplicationScoreCard} from "../ApplicationScoreCard";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
import { JobApplication } from "@/types/jobs";
import { ApplicationScoreCard } from "../ApplicationScoreCard";
=======
import { JobApplication } from "@/types/jobs",
import { ApplicationScoreCard } from "../ApplicationScoreCard",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface ScoreDialogProps {

  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null

  onScoreUpdated: (updatedApplication: JobApplication) => void
}
<<<<<<< HEAD
export function ScoreDialog({
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ScoreDialog({;
  open;
  onOpenChange;
  application;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

export function ScoreDialog(): any ({;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  open;
  onOpenChange;
  application;
  onScoreUpdated;
}: ScoreDialogProps) {;
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

    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader>;
          <DialogTitle>Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (;
          <ApplicationScoreCard;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}
      </DialogContent>
    </Dialog>
  )
}
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components / ui / dialog';
import { JobApplication } from '@/types / jobs';
import { ApplicationScoreCard } from '../ApplicationScoreCard';
interface ScoreDialogProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  application: JobApplication | null,
  onScoreUpdated: (updated_application: JobApplication) => void;
}
export /**
 * ScoreDialog - Function description
 */
function ScoreDialog() {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="sm:max - w-md">;
        <DialogHeader>;
          <DialogTitle > Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (
          <ApplicationScoreCard;
            application={application}
            onScoreUpdated={onScoreUpdated}
          />)}
      </DialogContent>;
    </Dialog>);
}

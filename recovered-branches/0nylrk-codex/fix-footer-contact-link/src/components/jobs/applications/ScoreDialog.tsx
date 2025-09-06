



import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {JobApplication} from "@/types/jobs";
import {ApplicationScoreCard} from "../ApplicationScoreCard";

import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle
} from "@/components/ui/dialog",
import { JobApplication } from "@/types/jobs";
import { ApplicationScoreCard } from "../ApplicationScoreCard";
import { JobApplication } from "@/types/jobs",
import { ApplicationScoreCard } from "../ApplicationScoreCard",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface ScoreDialogProps {

  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null

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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Application Match Score</DialogTitle>
        </DialogHeader>
        {application && (
          <ApplicationScoreCard
          <ApplicationScoreCard 


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

  open;
  onOpenChange;
  application;
  onScoreUpdated;
}: ScoreDialogProps) {;
  return (




  onScoreUpdated
}: ScoreDialogProps) {
  return (

    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Application Match Score</DialogTitle>
        </DialogHeader>
        {application && (

    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader>;
          <DialogTitle>Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (;



          <ApplicationScoreCard;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}

      </DialogContent>;
    </Dialog>;
  );
}



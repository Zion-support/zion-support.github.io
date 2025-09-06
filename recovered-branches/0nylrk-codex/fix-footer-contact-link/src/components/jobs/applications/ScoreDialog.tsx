
import {
  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle
} from "@/components/ui/dialog",
interface ScoreDialogProps {

  open: boolean
  onOpenChange: (open: boolean) => void
  application: JobApplication | null

  onScoreUpdated: (updatedApplication: JobApplication) => void
}

export function ScoreDialog({;
  open;
  onOpenChange;
  application;
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
            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}
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

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {JobApplication} from "@/types/jobs";
import {ApplicationScoreCard} from "../ApplicationScoreCard";




interface ScoreDialogProps {

interface ScoreDialogProps {};
  open: boolean;
  onOpenChange: (open: boolean) => void;
  application: JobApplication | null;
  onScoreUpdated: (updatedApplication: JobApplication) => void;
}


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

  open;

  onOpenChange;
  application;
  onScoreUpdated;
}: ScoreDialogProps) {;

  return (

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


          <ApplicationScoreCard

          <ApplicationScoreCard 


          <ApplicationScoreCard;
            application={application}
            onScoreUpdated={onScoreUpdated}
          />)}
      </DialogContent>;
    </Dialog>);
}





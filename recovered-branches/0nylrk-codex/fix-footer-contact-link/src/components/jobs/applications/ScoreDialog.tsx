
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
  );
}

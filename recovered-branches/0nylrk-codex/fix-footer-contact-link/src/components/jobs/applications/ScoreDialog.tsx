

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
    <Dialog open={open} onOpenChange={onOpenChange}>;

      <DialogContent className="sm:max-w-md">;
        <DialogHeader>;
          <DialogTitle>Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (;
          <ApplicationScoreCard

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <ApplicationScoreCard

          <ApplicationScoreCard 

            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}

    </Dialog>;
  );
}
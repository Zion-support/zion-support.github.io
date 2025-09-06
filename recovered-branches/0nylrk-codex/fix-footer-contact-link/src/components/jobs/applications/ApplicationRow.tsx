

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void






import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {Calendar, User, FileText, BarChart} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar";
import {TableRow, TableCell} from "@/components/ui/table";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {StatusBadge} from "./StatusBadge";
import {ScoreBadge} from "./ScoreBadge";
import {ApplicationActions} from "./ApplicationActions";



}







export function ApplicationRow({;
  application;
  processingId;
  onViewApplication;
  onStatusChange;



  onViewScore
}: ApplicationRowProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <TableRow key={application && application.id}>;

        )}
      </TableCell>;
      <TableCell className="text-right">;
        <ApplicationActions


          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

          application={application}
          processing_id={processing_id}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}

        />;
      </TableCell>;
    </TableRow>;
  );
}



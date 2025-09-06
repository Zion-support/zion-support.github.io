


interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}





export function ApplicationRow({;
  application;
  processingId;
  onViewApplication;
  onStatusChange;


export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,

  onViewScore
}: ApplicationRowProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <TableRow key={application && application.id}>;

        )}
      </TableCell>;
      <TableCell className="text-right">;
        <ApplicationActions


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          application={application}
          processing_id={processing_id}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}

        />;
      </TableCell>;
    </TableRow>;
  );
}





import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",

interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}

export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,

  onViewScore
}: ApplicationRowProps) {
  return (

    <TableRow key={application && application.id}>;
        )}
      </TableCell>;
      <TableCell className="text-right">;
        <ApplicationActions

          application={application}
          processing_id={processing_id}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}

        />;
      </TableCell>;
    </TableRow>;
  );
}

        />;
      </TableCell>;
    </TableRow>);
}





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
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}
export function ApplicationRow(): any ({;



  onViewScore
}: ApplicationRowProps) {
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
  ),;}
 interface ApplicationRowProps {
  application: JobApplication;
processingId: string | null;
onViewApplication: (applicationId: string) => Promise<void>;
onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
onViewScore: (application: JobApplication) => void 
}application, processingId, onViewApplication, onStatusChange, onViewScore 
}: ApplicationRowProps) {
  return (<TableRow key= {
  application.id 
}> <TableCell> <img src= {
  application.talent profile.profile picture url 
}alt= {
  application.talent profile.full name 
}/>) : (<User className="h-5 w-5 text-gray-400" />) 
}</Avatar> <div> </div> </div> </div> </TableCell> <TableCell> </div> </TableCell> <TableCell> <StatusBadge status= {
  application.status 
}/> </TableCell> <TableCell> <Button </Button>) : (<span className="text-muted-foreground text-sm" >No resume</span>) 
}</TableCell> <TableCell className="text-right" > <ApplicationActions application= {
  application 
}processingId= {
  processingId 
}onViewApplication= {
  onViewApplication 
}onStatusChange= {
  onStatusChange 
}/> </TableCell> </TableRow>) 
}
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
        />
      </TableCell>
    </TableRow>
  )
}

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
<<<<<<< HEAD
interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",

=======
import { ScoreBadge } from "./ScoreBadge";
import { ApplicationActions } from "./ApplicationActions";
import { ScoreBadge } from "./ScoreBadge",
import { ApplicationActions } from "./ApplicationActions",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}

<<<<<<< HEAD
=======
export function ApplicationRow({;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;

}

export function ApplicationRow(): any ({;

<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
import { ScoreBadge } from "./ScoreBadge";
import { ApplicationActions } from "./ApplicationActions";
import { ScoreBadge } from "./ScoreBadge",
import { ApplicationActions } from "./ApplicationActions",
interface ApplicationRowProps {
<<<<<<< HEAD
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}
=======
>>>>>>> merged-prs-20250907-203621

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
<<<<<<< HEAD

  onViewScore: (application: JobApplication) => void
}
export function ApplicationRow({
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
  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            {application.talent_profile?.profile_picture_url ? (
              <img
                src={application.talent_profile.profile_picture_url}
                alt={application.talent_profile.full_name}
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </Avatar>
          <div>
            <div className="font-medium">
              {application.talent_profile?.full_name |"Unknown"}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title |"Talent"}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true})}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url |"#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </Link>
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
=======

  onViewScore: (application: JobApplication) => void
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  application;
  processingId;
  onViewApplication;
  onStatusChange;
<<<<<<< HEAD

export function ApplicationRow({
  application,
  processingId,
  onViewApplication,

=======
<<<<<<< HEAD
=======
  onViewScore;
}: ApplicationRowProps) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

export function ApplicationRow({
  application,
  processingId,
  onViewApplication,

  onStatusChange,}

<<<<<<< HEAD
=======
  onViewScore
}: ApplicationRowProps) {
<<<<<<< HEAD
  return (

  return (
    <TableRow key={application && application.id}>;
export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
  onViewScore
}: ApplicationRowProps) {
  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            {application.talent_profile?.profile_picture_url ? (
              <img
                src={application.talent_profile.profile_picture_url}
                alt={application.talent_profile.full_name}
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </Avatar>
          <div>
            <div className="font-medium">
              {application.talent_profile?.full_name |"Unknown"}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title |"Talent"}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url |"#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </Link>
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <TableRow key={application && application.id}>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, User, FileText, BarChart } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Avatar } from "@/components/ui/avatar",;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { ApplicationActions } from "./ApplicationActions",;
  // TODO: Implement
}
  application: JobApplication;,
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
</void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
</void>
  onViewApplication: (applicationId: string) => Promise<void>,;
</void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
</void>
    <TableRow key={application && application.id}>;
</TableRow>
    <TableRow key={application && application.id}>;
</TableRow>
    <TableRow key={application.id}>
</TableRow>
      <TableCell>
</TableCell>
        <div className="flex items-center gap-3">"
</div>"
          <Avatar className="h-9 w-9">"
</Avatar>
              <img;
                src={application.talent_profile.profile_picture_url}
                alt={application.talent_profile.full_name}
              />
</img>"
              <User className="h-5 w-5 text-gray-400" />"
</User>
          </Avatar>
          <div>
</div>"
            <div className="font-medium">"
</div>
            </div>"
            <div className="text-xs text-muted-foreground">"
</div>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
</TableCell>"
        <div className="flex items-center gap-1">"
</div>"
          <Calendar className="h-4 w-4 text-muted-foreground" />"
</Calendar>
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
      </TableCell>
      <TableCell>
</TableCell>
        <StatusBadge status={application.status} />
</StatusBadge>
      </TableCell>
      <TableCell>
</TableCell>
        <Button;"
          variant="ghost"""
          size="sm""
          onClick={() => onViewScore(application)}
</Button>"
          <BarChart className="h-4 w-4 mr-1" />"
</BarChart>
          <ScoreBadge application={application} />
</ScoreBadge>
        </Button>
      </TableCell>
      <TableCell>
</TableCell>"
          <Button variant="ghost" size="sm" asChild>"
</Button>"
            <a href={application.resume.file_url |"#"} target="_blank" rel="noopener noreferrer">"
</a>"
              <FileText className="h-4 w-4 mr-1" /> View;"
</FileText>
            </Link>
          </Button>"
          <span className="text-muted-foreground text-sm">No resume</span>"
    <TableRow key={application && application.id}>;
</TableRow>
      </TableCell>"
      <TableCell className="text-right">"
</TableCell>
        <ApplicationActions;"
import { formatDistanceToNow } from "date-fns",;""
import { Link } from "react-router-dom",;""
import { Calendar, User, FileText, BarChart } from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { Avatar } from "@/components/ui/avatar",;""
import { TableRow, TableCell } from "@/components/ui/table",;""
import { JobApplication, ApplicationStatus } from "@/types/jobs",;""
import { StatusBadge } from "./StatusBadge",;""
import { ScoreBadge } from "./ScoreBadge",;""
import { ApplicationActions } from "./ApplicationActions",;"
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
export function ApplicationRow() { return null; }
    <TableRow key={application.id}>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, User, FileText, BarChart } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Avatar } from "@/components/ui/avatar",;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
import { ApplicationActions } from "./ApplicationActions",;
;
interface ApplicationRowProps {;
  application:JobApplication,;
  processingId:string | null,;
  onViewApplication:(applicationId:string) => Promise<void>,;
  onStatusChange:(applicationId:string, newStatus:ApplicationStatus) => Promise<void>,;
  onViewScore:(application:JobApplication) => void;
}
;
export function ApplicationRow({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
} ApplicationRowProps) {;
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
          <Avatar className="h-9 w-9">;
            {application.talent_profile?.profile_picture_url ? (;
              {application.talent_profile?.full_name || "Unknown"}
            </div>;
            <div className="text-xs text-muted-foreground">;
              {application.talent_profile?.professional_title || "Talent"}
              <img;
                src={application.talent_profile.profile_picture_url} ;
                alt={application.talent_profile.full_name} ;
=======
      <TableCell>;
        <div className="flex items-center gap-3">;
          <Avatar className="h-9 w-9">;
            {application && application.talent_profile?.profile_picture_url ? (;
              <img
                src={application && application.talent_profile.profile_picture_url} 
                alt={application && application.talent_profile.full_name} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />;
            ) : (;
              <User className="h-5 w-5 text-gray-400" />;
            )}
<<<<<<< HEAD
          </Avatar>
          <div>
            <div className="font-medium">
              {application.talent_profile?.full_name || "Unknown"}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title || "Talent"}
=======
          </Avatar>;
          <div>;
            <div className="font-medium">;
              {application && application.talent_profile?.full_name || "Unknown"}
            </div>;
            <div className="text-xs text-muted-foreground">;
              {application && application.talent_profile?.professional_title || "Talent"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;
        <div className="flex items-center gap-1">;
          <Calendar className="h-4 w-4 text-muted-foreground" />;
<<<<<<< HEAD
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}</span>;
=======
          <span>{formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application.status} />;
      </TableCell>;
      <TableCell>;
        <Button ;
          variant="ghost" ;
          size="sm" ;
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1";
        >;
          <BarChart className="h-4 w-4 mr-1" />;
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
            </a>;
          </Button>;
        ) :(;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>;
      <TableCell className="text-right">;
<<<<<<< HEAD
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>;
=======
        <ApplicationActions
=======
import { formatDistanceToNow } from './date - fns';
import { Link } from './react-router-dom';
import { Calendar, User, FileText, BarChart } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Avatar } from '@/components / ui / avatar';
import { TableRow, TableCell } from '@/components / ui / table';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
import { StatusBadge } from './StatusBadge';
import { ScoreBadge } from './ScoreBadge';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { ApplicationActions } from './ApplicationActions';
interface ApplicationRowProps {}
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string) => Promise < void>,
</Button>"
          <BarChart className="h-4 w-4 mr-1" />;"
</BarChart>

          <ScoreBadge application={application} />;
</ScoreBadge>
        </Button>;
      </TableCell>;

      <TableCell>;
</TableCell>"
          <Button variant="ghost" size="sm" asChild>;"
</Button>"
            <a href={application && application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;"
</a>"
              <FileText className="h-4 w-4 mr-1" /> View;"
</FileText>
            </a>;
          </Button>;"
          <span className="text-muted-foreground text-sm">No resume</span>;"
      </TableCell>;"
      <TableCell className="text-right">;"
</TableCell>
        <ApplicationActions;"
import { formatDistanceToNow } from './date - fns';''
import { Link } from './react-router-dom';''
import { Calendar, User, FileText, BarChart } from './lucide-react';''
import { Button } from '@/components / ui / button';''
import { Avatar } from '@/components / ui / avatar';''
import { TableRow, TableCell } from '@/components / ui / table';''
import { JobApplication, ApplicationStatus } from '@/types / jobs';''
import { StatusBadge } from './StatusBadge';''
import { ScoreBadge } from './ScoreBadge';''
import { ApplicationActions } from './ApplicationActions';'

interface ApplicationRowProps {
  // TODO: Implement
}
  application: JobApplication,
  processing_id: string | null,

  onViewApplication: (application_id: string) => Promise < void>,
</ApplicationActions>
  onStatusChange: (application_id: string, new_status: ApplicationStatus) => Promise < void>,
  onViewScore: (application: JobApplication) => void;

}

  return (
    <TableRow key={application.id}>;

            {application.talent_profile?.profile_picture_url ? (
              <img;
                src={application.talent_profile.profile_picture_url}
                alt={application.talent_profile.full_name}

              {application.talent_profile?.professional_title || "Talent"}
</TableRow>
      <TableCell>;
</TableCell>'
        <div className="flex items - center gap - 3">;"
</div>"
          <Avatar className="h - 9 w - 9">;"
</Avatar>
              <img;

                src={application.talent_profile.profile_picture_url}
                alt={application.talent_profile.full_name})
              />) : (

</img>)"
              <User className="h - 5 w - 5 text - gray - 400" />)}"
</User>
          </Avatar>;
          <div>;
</div>"
            <div className="font - medium">;"
</div>
            </div>;"
            <div className="text - xs text - muted - foreground">;"
</div>

            </div>;
          </div>;
        </div>;
      </TableCell>;
<<<<<<< HEAD

      <TableCell>;

=======
      <TableCell>;
        <div className="flex items - center gap - 1">;
          <Calendar className="h - 4 w - 4 text - muted - foreground" />;
          <span>{formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application.status} />;
      </TableCell>;
      <TableCell>;
        <Button;
          variant="ghost";
          size="sm";
<<<<<<< HEAD
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1";
        >;
          <BarChart className="h-4 w-4 mr-1" />;
=======
          on_click={() => onViewScore (application)}
          className="flex items - center gap - 1";
        >;
          <BarChart className="h - 4 w - 4 mr - 1" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
            </a>;
=======
        {application.resume ? (
          <Button variant="ghost" size="sm" as_child>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h - 4 w - 4 mr - 1" /> View;
            </a>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
>>>>>>> merged-prs-20250907-203621
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </Button>) : (
          <span className="text - muted - foreground text - sm">No resume</span>)}
      </TableCell>;
      <TableCell className="text - right">;
        <ApplicationActions;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          application={application}
          processing_id={processing_id}

          onViewApplication={onViewApplication}

          onStatusChange={onStatusChange}
<<<<<<< HEAD
        />;
      </TableCell>;
    </TableRow>;
=======

<<<<<<< HEAD
/>;
      </TableCell>;
=======
        />;
      </TableCell>;
    </TableRow>;
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
      </TableCell>;
    </TableRow>);
}
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
        />
      </TableCell>
    </TableRow>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
<<<<<<< HEAD

=======

import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
<<<<<<< HEAD
import { ScoreBadge } from "./ScoreBadge";
import { ApplicationActions } from "./ApplicationActions";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApplicationRowProps {

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface ApplicationRowProps {}
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void;
import {formatDistanceToNow} from "date-fns";"
import {Link} from "react-router-dom";"
import {Calendar, User, FileText, BarChart} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {Avatar} from "@/components/ui/avatar";"
import {TableRow, TableCell} from "@/components/ui/table";"
import {JobApplication, ApplicationStatus} from "@/types/jobs";"
import {StatusBadge} from "./StatusBadge";"
import {ScoreBadge} from "./ScoreBadge";"
import {ApplicationActions} from "./ApplicationActions";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}

export function ApplicationRow(): any ({;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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

  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>

  onViewScore: (application: JobApplication) => void
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function ApplicationRow({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export function ApplicationRow({;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export function ApplicationRow({;export function ApplicationRow({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function ApplicationRow({;export function ApplicationRow({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export function ApplicationRow({;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function ApplicationRow({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  application;
  processingId;
  onViewApplication;
  onStatusChange;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
<<<<<<< HEAD
  onStatusChange,
=======
<<<<<<< HEAD
<<<<<<< HEAD
  onViewScore;
}: ApplicationRowProps) {;
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
  onViewScore
}: ApplicationRowProps) {
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <TableRow key={application && application.id}>;
<<<<<<< HEAD
        )}
      </TableCell>;
      <TableCell className="text-right">;
        <ApplicationActions
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
  return (

  return (
    <TableRow key={application && application.id}>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  onStatusChange,}
=======
  onViewScore;
}: ApplicationRowProps) {;
}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  onViewScore
}: ApplicationRowProps) {
  return (

    <TableRow key={application && application.id}>;
  return (

  return (
    <TableRow key={application && application.id}>;
export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
}



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

    <TableRow key={application && application.id}>;
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions

import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { Calendar, User, FileText, BarChart } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Avatar } from "@/components/ui/avatar",;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
=======
  onViewScore;
}: ApplicationRowProps) {}
export function ApplicationRow({}
  application,
  processingId,
  onViewApplication,
  onStatusChange,
}


;
  onViewScore;
}: ApplicationRowProps) {}
  return (

        )}
      </TableCell>"
      <TableCell className="text-right">
        <ApplicationActions;
"
import { formatDistanceToNow } from "date-fns",;"
import { Link } from "react-router-dom",;"
import { Calendar, User, FileText, BarChart } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { Avatar } from "@/components/ui/avatar",;"
import { TableRow, TableCell } from "@/components/ui/table",;"
import { JobApplication, ApplicationStatus } from "@/types/jobs",;"
import { StatusBadge } from "./StatusBadge",;"
import { ScoreBadge } from "./ScoreBadge",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ApplicationActions } from "./ApplicationActions",;
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
      <TableCell>;
        <div className="flex items-center gap-3">;
          <Avatar className="h-9 w-9">;
            {application && application.talent_profile?.profile_picture_url ? (;
              <img
                src={application && application.talent_profile.profile_picture_url} 
                alt={application && application.talent_profile.full_name} 
              />;
            ) : (;
              <User className="h-5 w-5 text-gray-400" />;
            )}
          </Avatar>;
          <div>;
            <div className="font-medium">;
              {application && application.talent_profile?.full_name || "Unknown"}
            </div>;
            <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
              {application && application.talent_profile?.professional_title || "Talent"}            </div>;
=======

              />;
            ) : (;"
              <User className="h-5 w-5 text-gray-400" />;
            )}

            </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              {application && application.talent_profile?.professional_title || "Talent"}
            </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;"
        <div className="flex items-center gap-1">;"
          <Calendar className="h-4 w-4 text-muted-foreground" />;
<<<<<<< HEAD
          <span>{formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}</span>;
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application && application.status} />;
      </TableCell>;
      <TableCell>;
        <Button
          variant="ghost" 
<<<<<<< HEAD
          size="sm"           onClick={() => onViewScore(application)}
=======

          onClick={() => onViewScore(application)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          size="sm" 
          onClick={() => onViewScore(application)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className="flex items-center gap-1";
        >;"
          <BarChart className="h-4 w-4 mr-1" />;
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD
        {application && application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application && application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
            </a>;
          </Button>;
<<<<<<< HEAD
        ) : (;          <span className="text-muted-foreground text-sm">No resume</span>;
=======
"
          <span className="text-muted-foreground text-sm">No resume</span>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        )}
      </TableCell>;"
      <TableCell className="text-right">;
<<<<<<< HEAD
  return (
=======
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        )}
      </TableCell>;
      <TableCell className="text-right">;
        <ApplicationActions
import { formatDistanceToNow } from './date - fns';
import { Link } from './react-router-dom';
import { Calendar, User, FileText, BarChart } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Avatar } from '@/components / ui / avatar';
import { TableRow, TableCell } from '@/components / ui / table';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
import { StatusBadge } from './StatusBadge';
import { ScoreBadge } from './ScoreBadge';
=======

        <ApplicationActions;
import { formatDistanceToNow } from './date - fns';'
import { Link } from './react-router-dom';'
import { Calendar, User, FileText, BarChart } from './lucide-react';'
import { Button } from '@/components / ui / button';'
import { Avatar } from '@/components / ui / avatar';'
import { TableRow, TableCell } from '@/components / ui / table';'
import { JobApplication, ApplicationStatus } from '@/types / jobs';'
import { StatusBadge } from './StatusBadge';'
import { ScoreBadge } from './ScoreBadge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ApplicationActions } from './ApplicationActions';
interface ApplicationRowProps {}
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus) => Promise < void>,
  onViewScore: (application: JobApplication) => void;
}
export /**;
 * ApplicationRow - Function description;
 */
function ApplicationRow() {}
  return (
    <TableRow key={application.id}>;
<<<<<<< HEAD
      <TableCell>;
<<<<<<< HEAD
        <div className="flex items - center gap-3">;
          <Avatar className="h - 9 w-9">;
=======
      <TableCell>;"
        <div className="flex items - center gap - 3">;"
          <Avatar className="h - 9 w - 9">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="flex items - center gap - 3">;
          <Avatar className="h - 9 w - 9">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {application.talent_profile?.profile_picture_url ? (
              <img;
                src={application.talent_profile.profile_picture_url}
                alt={application.talent_profile.full_name}
<<<<<<< HEAD
              />) : (
              <User className="h - 5 w - 5 text - gray - 400" />)}
          </Avatar>;
          <div>;
            <div className="font - medium">;
              {application.talent_profile?.full_name || "Unknown"}
            </div>;
<<<<<<< HEAD
            <div className="text - xs text - muted-foreground">;
=======
              />) : ("
              <User className="h - 5 w - 5 text - gray - 400" />)}
          </Avatar>;
          <div>;"
            <div className="font - medium">;"
              {application.talent_profile?.full_name || "Unknown"}
            </div>;"
            <div className="text - xs text - muted - foreground">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <div className="text - xs text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              {application.talent_profile?.professional_title || "Talent"}
            </div>;
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="flex items - center gap - 1">;
          <Calendar className="h - 4 w - 4 text - muted - foreground" />;
          <span>{formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application.status} />;
      </TableCell>;
      <TableCell>;
        <Button;"
          variant="ghost";"
          size="sm";
<<<<<<< HEAD
          on_click={() => onViewScore (application)}
          className="flex items - center gap - 1";
        >;
<<<<<<< HEAD
          <BarChart className="h - 4 w - 4 mr-1" />;          <ScoreBadge application={application} />;
=======



          <ScoreBadge application={application} />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </Button>;
      </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
      <TableCell>;

          </Button>;
        ) : (;"
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>"
      <TableCell className="text-right">
        <ApplicationActions;
          </Button>) : ("
          <span className="text - muted - foreground text - sm">No resume</span>)}
      </TableCell>;"
      <TableCell className="text - right">;
        <ApplicationActions;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          application={application}
          processing_id={processing_id}
=======
      <TableCell>;          processing_id={processing_id}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <TableCell>;          processing_id={processing_id}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          onViewApplication={onViewApplication}
<<<<<<< HEAD
          onStatusChange={onStatusChange}
=======
=======
          <BarChart className="h - 4 w - 4 mr - 1" />;
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
        {application.resume ? (
          <Button variant="ghost" size="sm" as_child>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h - 4 w - 4 mr - 1" /> View;
            </a>;

          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions


          </Button>) : (
          <span className="text - muted - foreground text - sm">No resume</span>)}
      </TableCell>;
      <TableCell className="text - right">;
        <ApplicationActions;
          application={application}
          processing_id={processing_id}
          onViewApplication={onViewApplication}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          onStatusChange={onStatusChange}

        />;
      </TableCell>;
<<<<<<< HEAD
    </TableRow>);
}



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

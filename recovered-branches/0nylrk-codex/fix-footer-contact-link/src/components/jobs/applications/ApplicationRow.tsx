
<<<<<<< HEAD
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { Calendar, User, FileText, BarChart } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Avatar } from "@/components/ui/avatar",
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
import { ScoreBadge } from "./ScoreBadge",
import { ApplicationActions } from "./ApplicationActions",
=======
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { Calendar, User, FileText, BarChart } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { TableRow, TableCell } from &quot;@/components/ui/table&quot;;
import { JobApplication, ApplicationStatus } from &quot;@/types/jobs&quot;;
import { StatusBadge } from &quot;./StatusBadge&quot;;
import { ScoreBadge } from &quot;./ScoreBadge&quot;;
import { ApplicationActions } from &quot;./ApplicationActions&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ApplicationRowProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}
=======

interface ApplicationRowProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (_application: JobApplication) => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ApplicationRow(_{_application, _processingId, _onViewApplication, _onStatusChange, _onViewScore}: ApplicationRowProps) {_return (
    <TableRow key={application.id}>
      <TableCell>
<<<<<<< HEAD
        <div className=&quot;flex items-center gap-3&quot;>
          <Avatar className=&quot;h-9 w-9&quot;>
            {application.talent_profile?.profile_picture_url ? (
=======
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            {_application.talent_profile?.profile_picture_url ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <img 
                src={application.talent_profile.profile_picture_url} 
                alt={_application.talent_profile.full_name} 
              />
            ) : (
              <User className=&quot;h-5 w-5 text-gray-400&quot; />
            )}
          </Avatar>
          <div>
<<<<<<< HEAD
            <div className=&quot;font-medium&quot;>
              {application.talent_profile?.full_name || &quot;Unknown&quot;}
            </div>
            <div className=&quot;text-xs text-muted-foreground&quot;>
              {application.talent_profile?.professional_title || &quot;Talent&quot;}
=======
            <div className="font-medium">
              {_application.talent_profile?.full_name || "Unknown"}
            </div>
            <div className="text-xs text-muted-foreground">
              {_application.talent_profile?.professional_title || "Talent"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
<<<<<<< HEAD
        <div className=&quot;flex items-center gap-1&quot;>
          <Calendar className=&quot;h-4 w-4 text-muted-foreground&quot; />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
=======
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{_formatDistanceToNow(new Date(application.created_at), _{ addSuffix: true})}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={_application.status} />
      </TableCell>
      <TableCell>
        <Button 
<<<<<<< HEAD
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          onClick={() => onViewScore(application)}
          className=&quot;flex items-center gap-1&quot;
        >
          <BarChart className=&quot;h-4 w-4 mr-1&quot; />
          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
          <Button variant=&quot;ghost&quot; size=&quot;sm&quot; asChild>
            <a href={application.resume.file_url || &quot;#&quot;} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              <FileText className=&quot;h-4 w-4 mr-1&quot; /> View
            </Link>
=======
          variant="ghost" 
          size="sm" 
          onClick={_() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
          <ScoreBadge application={_application} />
        </Button>
      </TableCell>
      <TableCell>
        {_application.resume ? (
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Button>
        ) : (
          <span className=&quot;text-muted-foreground text-sm&quot;>No resume</span>
        )}
      </TableCell>
      <TableCell className=&quot;text-right&quot;>
        <ApplicationActions
          application={_application}
          processingId={_processingId}
          onViewApplication={_onViewApplication}
          onStatusChange={_onStatusChange}
        />
      </TableCell>
    </TableRow>
  )
}

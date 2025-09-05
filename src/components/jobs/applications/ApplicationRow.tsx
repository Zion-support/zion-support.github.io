<<<<<<< HEAD
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { Calendar, User, FileText, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { TableRow, TableCell } from "@/components/ui/table",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { StatusBadge } from "./StatusBadge",
import { ScoreBadge } from "./ScoreBadge",
import { ApplicationActions } from "./ApplicationActions",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState
=======
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Calendar, User, FileText, BarChart } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { Avatar as AvatarPrimitive } from &quot;@/components/ui/avatar&quot;; // Renamed to avoid conflict
import { TableRow, TableCell } from &quot;@/components/ui/table&quot;;
import { JobApplication, ApplicationStatus } from &quot;@/types/jobs&quot;;
import { StatusBadge } from &quot;./StatusBadge&quot;;
import { ScoreBadge } from &quot;./ScoreBadge&quot;;
import { ApplicationActions } from &quot;./ApplicationActions&quot;;
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ApplicationRowProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}

export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
  onViewScore
}: ApplicationRowProps) {
<<<<<<< HEAD
  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Unknown",
=======
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || &quot;Unknown&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import Image from 'next/image'; // Import next/image
import React, {_useState} from 'react'; // Import useState

interface ApplicationRowProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (_application: JobApplication) => void;}

export function ApplicationRow(_{_application, _processingId, _onViewApplication, _onStatusChange, _onViewScore}: ApplicationRowProps) {_const [avatarError, _setAvatarError] = useState(false);
  const _talentName = application.talent_profile?.full_name || "Unknown";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <TableRow key={application.id}>
      <TableCell>
<<<<<<< HEAD
        <div className=&quot;flex items-center gap-3&quot;>
          <AvatarPrimitive className=&quot;h-9 w-9&quot;> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
                src={application.talent_profile.profile_picture_url} 
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className=&quot;rounded-full object-cover&quot; // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
                priority={false}
=======
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {_/* Using renamed AvatarPrimitive */}
            {_application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
                src={application.talent_profile.profile_picture_url} 
                alt={_talentName}
                width={_36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={_36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={_() => setAvatarError(true)}
                priority={_false}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            ) : (
              <User className=&quot;h-5 w-5 text-gray-400&quot; />
            )}
          </AvatarPrimitive>
          <div>
<<<<<<< HEAD
            <div className=&quot;font-medium&quot;>
              {talentName}
            </div>
            <div className=&quot;text-xs text-muted-foreground&quot;>
              {application.talent_profile?.professional_title || &quot;Talent&quot;}
=======
            <div className="font-medium">
              {_talentName}
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

<<<<<<< HEAD
interface ApplicationRowProps {
  application: JobApplication;,
  processing_id: string | null;,
  onViewApplication: (application_id:,  string) => Promise < void>;,
  onStatusChange: (,
export function ApplicationRow({
  application
  processingId
  onViewApplication
  onStatusChange
  onViewScore
}:,  ApplicationRowProps) {,
  const [avatarError, setAvatarError] = useState(false)
import { formatDistanceToNow } from 'date-fns';
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict;
import { TableRow, TableCell } from '@/components/ui/table';
import { JobApplication, ApplicationStatus } from '@/types/jobs';
import { StatusBadge } from './StatusBadge';
import { ScoreBadge } from './ScoreBadge';
import { ApplicationActions } from './ApplicationActions';
import Image from 'next/image'; // Import next/image;
import React, { useState } from 'react'; // Import useState;
interface ApplicationRowProps {;
  application: JobApplication;,
  processingId: string | null;,
  onViewApplication: (applicationId:,  string) => Promise<void>;,
  onStatusChange: (;,
    applicationId: string,;
    newStatus: ApplicationStatus;
  ) => Promise<void>;
  onViewScore: (application:,  JobApplication) => void;,
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId: string,) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus,) => Promise<void>,;
  onViewScore: (application: JobApplication,) => void;
}
export function ApplicationRow(): any ({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore,;
}:,  ApplicationRowProps) {;,
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application && application.talent_profile?.full_name || 'Unknown';
  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">"
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}"
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
                src={application.talent_profile.profile_picture_url}
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover"
=======
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
  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Unknown",

  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
                src={application.talent_profile.profile_picture_url} 
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
                onError={() => setAvatarError(true)}
                priority={false}
              />
            ) : (
<<<<<<< HEAD
              <User className="h-5 w-5 text-gray-400" />"
            )}
            <div className="font-medium">"
              {talentName}
            </div>
            <div className="text-xs text-muted-foreground">"
              {application.talent_profile?.professional_title || "Talent"}"
=======
              <User className="h-5 w-5 text-gray-400" />
            )}
          </AvatarPrimitive>
          <div>
            <div className="font-medium">
              {talentName}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title || "Talent"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
<<<<<<< HEAD
        <div className="flex items-center gap-1">"
          <Calendar className="h-4 w-4 text-muted-foreground" />"
=======
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
<<<<<<< HEAD
        <Button
          variant="ghost" "
          size="sm" "
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1""
        >
          <BarChart className="h-4 w-4 mr-1" />"
=======
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
<<<<<<< HEAD
          <Button variant="ghost" size="sm" asChild>"
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">"
              <FileText className="h-4 w-4 mr-1" /> View"
            </Link>
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>"
        )}
      </TableCell>
      <TableCell className="text-right">"
=======
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </Link>
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
        )}
      </TableCell>
      <TableCell className="text-right">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
        <ApplicationActions
import { formatDistanceToNow } from "date-fns",;
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
import { ApplicationActions } from "./ApplicationActions",;
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
<<<<<<< HEAD
  onViewApplication: (applicationId:,  string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus:,  ApplicationStatus) => Promise<void>,;
  onViewScore: (application:,  JobApplication) => void;
=======
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export function ApplicationRow({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
<<<<<<< HEAD
}:,  ApplicationRowProps) {;,
=======
}: ApplicationRowProps) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
<<<<<<< HEAD
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}"
=======
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
            {application.talent_profile?.profile_picture_url && !avatarError ? (;
              <Image;
                src={application.talent_profile.profile_picture_url} ;
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px);
                height={36} // Corresponds to h-9 w-9;
                className="rounded-full object-cover" // Ensure rounded and object-cover;
                onError={() => setAvatarError(true)}
                priority={false}
              />;
            ) : (;
              <User className="h-5 w-5 text-gray-400" />;
            )}
          </AvatarPrimitive>;
          <div>;
<<<<<<< HEAD
            <div className='font-medium'>{talentName}</div>;
            <div className='text-xs text-muted-foreground'>;
              {application && application.talent_profile?.professional_title || 'Talent'}'
    application_id: string,
    new_status: ApplicationStatus) => Promise < void>;,
  onViewScore: (application:,  JobApplication) => void;,
interface ApplicationRowProps {
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string, ) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus, ) => Promise < void>,
  onViewScore: (application: JobApplication, ) => void;
}
import { formatDistanceToNow } from "date-fns",;
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge",;
import { ApplicationActions } from "./ApplicationActions",;
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import useState;
interface ApplicationRowProps {;
  application: JobApplication,;
  processingId: string | null,;
  onViewApplication: (applicationId:,  string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus:,  ApplicationStatus) => Promise<void>,;
  onViewScore: (application:,  JobApplication) => void;
}
;
export function ApplicationRow({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}:,  ApplicationRowProps) {;,
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}"
            {application.talent_profile?.profile_picture_url && !avatarError ? (;
              <Image;
                src={application.talent_profile.profile_picture_url} ;
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px);
                height={36} // Corresponds to h-9 w-9;
                className="rounded-full object-cover" // Ensure rounded and object-cover;
                onError={() => setAvatarError(true)}
                priority={false}
              />;
            ) : (;
              <User className="h-5 w-5 text-gray-400" />;
            )}
          </AvatarPrimitive>;
          <div>;
            <div className='font - medium'>{talent_name}</div>;
            <div className='text - xs text - muted - foreground'>;
              {application.talent_profile?.professional_title || 'Talent'}'
=======
            <div className="font-medium">;
              {talentName}
            </div>;
            <div className="text-xs text-muted-foreground">;
              {application.talent_profile?.professional_title || "Talent"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
            </div>;
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD
        <div className='flex items - center gap - 1'>;
          <Calendar className='h - 4 w - 4 text - muted - foreground' />;
          <span>;
            {formatDistanceToNow (new Date (application.created_at), {
              add_suffix: true,
            })}
          </span>;
=======
        <div className="flex items-center gap-1">;
          <Calendar className="h-4 w-4 text-muted-foreground" />;
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application.status} />;
      </TableCell>;
      <TableCell>;
        <Button;
<<<<<<< HEAD
          variant='ghost';
          size='sm';
          on_click={() => onViewScore (application)}
          className='flex items - center gap - 1'        >;
          <BarChart className='h - 4 w - 4 mr - 1' />;
=======
          variant="ghost";
          size="sm";
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1";
        >;
          <BarChart className="h-4 w-4 mr-1" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD
              href={application && application.resume.file_url || '#'}'
              target='_blank''
              rel='noopener noreferrer'>;
              <FileText className='h-4 w-4 mr-1' /> View;
=======
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
            </a>;
          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>;
<<<<<<< HEAD
      <TableCell className='text-right'>;
        <ApplicationActions
          application = {application,}
          processingId = {processingId,}
          onViewApplication = {onViewApplication,}
          onStatusChange = {onStatusChange,}
=======
      <TableCell className="text-right">;
        <ApplicationActions;
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
        />;
      </TableCell>;
    </TableRow>;
  );
}
<<<<<<< HEAD
        {application.resume ? (
          <Button variant='ghost' size='sm' as_child>;
            <a;
              href={application.resume.file_url || '#'}'
              target='_blank';
              rel='noopener noreferrer';
            >;
              <FileText className='h - 4 w - 4 mr - 1' /> View;
            </a>;
          </Button>) : (
          <span className='text - muted - foreground text - sm'>No resume</span>)}'
      </TableCell>;
      <TableCell className='text - right'>;
        <ApplicationActions;
          application = {application, }
          processing_id = {processing_id, }
          onViewApplication = {onViewApplication, }
          onStatusChange = {onStatusChange, }
        />;
      </TableCell>;
    </TableRow>);
}
;
}}}
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58

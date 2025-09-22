:src_backup/components/jobs/applications/ApplicationRow.tsx
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
import { Button } from "@/components/ui/button",

import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { TableRow, TableCell } from "@/components/ui/table",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { StatusBadge } from "./StatusBadge",;
import { ScoreBadge } from "./ScoreBadge";
import { ApplicationActions } from "./ApplicationActions";
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import useState

interface ApplicationRowProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;

  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (application: JobApplication) => void
import { Button } from '@/components/ui/button'
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { TableRow, TableCell } from '@/components/ui/table'
import { JobApplication, ApplicationStatus } from '@/types/jobs'
import { StatusBadge } from './StatusBadge'
import { ScoreBadge } from './ScoreBadge'
import { ApplicationActions } from './ApplicationActions'
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
interface ApplicationRowProps {
origin/cursor/automate-test-improve-and-merge-code-2533
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (
:src_backup/components/jobs/applications/ApplicationRow.tsx


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
:src_backup/components/jobs/applications/ApplicationRow.tsx


interface ApplicationRowProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,
  onViewScore: (application: JobApplication) => void
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
:src_backup/components/jobs/applications/ApplicationRow.tsx

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
:src_backup/components/jobs/applications/ApplicationRow.tsx

export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Unknown",

  const talentName = application.talent_profile?.full_name || 'Unknown'

  return (
  const talentName = application.talent_profile?.full_name |'Unknown'

  const talentName = application.talent_profile?.full_name || 'Unknown'    <TableRow key={application.id}>
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

  const talentName = application.talent_profile?.full_name || 'Unknown'

:src/components/jobs/applications/ApplicationRow.tsx
    applicationId: string
    newStatus: ApplicationStatus
  ) => Promise<void>
  onViewScore: (application: JobApplication) => void
interface ApplicationRowProps {
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string,) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus,) => Promise<void>
  onViewScore: (application: JobApplication,) => void
}
export function ApplicationRow({
  application;
  processingId;
  onViewApplication;
  onStatusChange;
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false);
  const talentName = null;

  return (
:src_backup/components/jobs/applications/ApplicationRow.tsx
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
:src/components/jobs/applications/ApplicationRow.tsx
<Image
:src_backup/components/jobs/applications/ApplicationRow.tsx


                src={application.talent_profile.profile_picture_url} 
                src={application.talent_profile.profile_picture_url} 
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
:src_backup/components/jobs/applications/ApplicationRow.tsx
                priority={false}
              />

            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
</AvatarPrimitive>
          <div>
            <div className="font-medium">
              {talentName}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title || "Talent"}
:src_backup/components/jobs/applications/ApplicationRow.tsx

            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
:src_backup/components/jobs/applications/ApplicationRow.tsx
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>

:src/components/jobs/applications/ApplicationRow.tsx
        <div className="flex items-center gap-1">"
          <Calendar className="h-4 w-4 text-muted-foreground" />"
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
              <Image        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
:src_backup/components/jobs/applications/ApplicationRow.tsx

        <Button
          variant="ghost" "
          size="sm" "
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1""
        >
          <BarChart className="h-4 w-4 mr-1" />"
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
:src_backup/components/jobs/applications/ApplicationRow.tsx
          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
:src_backup/components/jobs/applications/ApplicationRow.tsx

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
        <ApplicationActions
:src_backup/components/jobs/applications/ApplicationRow.tsx
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
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
export function ApplicationRow({;
  application,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}:,  ApplicationRowProps) {;,
}: ApplicationRowProps) {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}"
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
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
:src_backup/components/jobs/applications/ApplicationRow.tsx
            <div className="font-medium">;
              {talentName}
            </div>;
            <div className="text-xs text-muted-foreground">;
              {application.talent_profile?.professional_title || "Talent"}
            </div>;
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;
:src_backup/components/jobs/applications/ApplicationRow.tsx
        <div className="flex items-center gap-1">;
          <Calendar className="h-4 w-4 text-muted-foreground" />;
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>;
        <div className='flex items - center gap - 1'>;
          <Calendar className='h - 4 w - 4 text - muted - foreground' />;
          <span>;
            {formatDistanceToNow (new Date (application.created_at), {
              add_suffix: true,
            })}
          </span>;
:src_backup/components/jobs/applications/ApplicationRow.tsx
        </div>;
      </TableCell>;
      <TableCell>;
        <StatusBadge status={application.status} />;
      </TableCell>;
      <TableCell>;
        <Button;
:src_backup/components/jobs/applications/ApplicationRow.tsx
          variant="ghost";
          size="sm";
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1";
        >;
          <BarChart className="h-4 w-4 mr-1" />;
:src_backup/components/jobs/applications/ApplicationRow.tsx
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
:src_backup/components/jobs/applications/ApplicationRow.tsx
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
              href={application && application.resume.file_url || '#'}'
              target='_blank''
              rel='noopener noreferrer'>;
              <FileText className='h-4 w-4 mr-1' /> View;
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
            </a>;
          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>;
:src/components/jobs/applications/ApplicationRow.tsx
      <TableCell className="text-right">;
        <ApplicationActions;
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
      <TableCell className='text-right'>;
        <ApplicationActions
          application = {application,}
          processingId = {processingId,}
          onViewApplication = {onViewApplication,}
          onStatusChange = {onStatusChange,}
:src_backup/components/jobs/applications/ApplicationRow.tsx

        />;
      </TableCell>;
    </TableRow>;
  );
}
:src_backup/components/jobs/applications/ApplicationRow.tsx
              target='_blank';
              rel='noopener noreferrer';
            >;
              <FileText className='h - 4 w - 4 mr - 1' /> View;
            </a>;
          </Button>) : (
:src_backup/components/jobs/applications/ApplicationRow.tsx
          <span className='text - muted - foreground text - sm'>No resume</span>)}
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
:src_backup/components/jobs/applications/ApplicationRow.tsx
;
;
}}}
;
        />
      </TableCell>
    </TableRow>
  );
:src/components/jobs/applications/ApplicationRow.tsx

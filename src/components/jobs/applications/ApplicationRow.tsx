<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Calendar, User, FileText, BarChart } from 'lucide-react'

import { Button } from '@/components/ui/button'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { formatDistanceToNow } from 'date-fns'
import { Calendar, User, FileText, BarChart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar, User, FileText, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { TableRow, TableCell } from '@/components/ui/table'
import { JobApplication, ApplicationStatus } from '@/types/jobs'
import { StatusBadge } from './StatusBadge'
import { ScoreBadge } from './ScoreBadge';
import { ApplicationActions } from './ApplicationActions';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface ApplicationRowProps {
=======
>>>>>>> 
>>>>>>> interface ApplicationRowProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface ApplicationRowProps {
  application: JobApplication;
  processing_id: string | null;
  onViewApplication: (application_id: string) => Promise < void>;
>>>>>>>   onStatusChange: (

<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

interface ApplicationRowProps {
  application: JobApplication
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ApplicationRow({

  application
  processingId
  onViewApplication
  onStatusChange
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  const talentName = application.talent_profile?.full_name || 'Unknown'
=======

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
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (;
    applicationId: string,;
    newStatus: ApplicationStatus;
  ) => Promise<void>;
  onViewScore: (application: JobApplication) => void;
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
}: ApplicationRowProps) {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application && application.talent_profile?.full_name || 'Unknown';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

  return (
=======
  const talentName = application.talent_profile?.full_name |'Unknown'

  const talentName = application.talent_profile?.full_name || 'Unknown'
>>>>>>> >>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
<<<<<<< HEAD
=======
                src={application.talent_profile.profile_picture_url}
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className='rounded-full object-cover' // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
                priority={false}              />
>>>>>>>             ) : (
ursor/fix-website-loading-errors-and-merge-6662
=======
  const talentName = application.talent_profile?.full_name |'Unknown'
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const talentName = application.talent_profile?.full_name |'Unknown'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const talentName = application.talent_profile?.full_name || 'Unknown'

  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
<<<<<<< HEAD
<<<<<<< HEAD


                src={application.talent_profile.profile_picture_url} 
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                src={application.talent_profile.profile_picture_url}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
<<<<<<< HEAD
                priority={false}
              />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            ) : (
>>>>>>>               <User className="h-5 w-5 text-gray-400" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
                priority={false}              />
                src={application.talent_profile.profile_picture_url} 
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
                priority={false}
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            )}
          </AvatarPrimitive>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <div className='font-medium'>{talentName}</div>
            <div className='text-xs text-muted-foreground'>
              {application.talent_profile?.professional_title |'Talent'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='font-medium'>{talentName}</div>
            <div className='text-xs text-muted-foreground'>
              {application.talent_profile?.professional_title |'Talent'}
            <div className="font-medium">
              {talentName}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title || "Talent"}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='flex items-center gap-1'>
          <Calendar className='h-4 w-4 text-muted-foreground' />
          <span>
            {formatDistanceToNow(new Date(application.created_at), {
              addSuffix: true
            })}
          </span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
<<<<<<< HEAD

          <ScoreBadge application={application} />
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button
          variant='ghost'
          size='sm'
          onClick={() => onViewScore(application)}
          className='flex items-center gap-1'        >
          <BarChart className='h-4 w-4 mr-1' />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <ScoreBadge application={application} />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
          <ScoreBadge application={application} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button variant='ghost' size='sm' asChild>
            <a
              href={application.resume.file_url |'#'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FileText className='h-4 w-4 mr-1' /> View
            </a>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </Link>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
          </AvatarPrimitive>;
          <div>;
            <div className='font-medium'>{talentName}</div>;
            <div className='text-xs text-muted-foreground'>;
              {application && application.talent_profile?.professional_title || 'Talent'}
    application_id: string,
    new_status: ApplicationStatus) => Promise < void>;
  onViewScore: (application: JobApplication) => void;
interface ApplicationRowProps {
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string, ) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus, ) => Promise < void>,
  onViewScore: (application: JobApplication, ) => void;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          application = {application,}
          processingId = {processingId,}
          onViewApplication = {onViewApplication,}
          onStatusChange = {onStatusChange,}
        />
      </TableCell>
    </TableRow>
  );
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
}: ApplicationRowProps) {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";
  return (;
    <TableRow key={application.id}>;
      <TableCell>;
        <div className="flex items-center gap-3">;
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
<<<<<<< HEAD
            <div className="font-medium">;
              {talentName}
            </div>;
            <div className="text-xs text-muted-foreground">;
              {application.talent_profile?.professional_title || "Talent"}
=======
            <div className='font-medium'>{talentName}</div>;
            <div className='text-xs text-muted-foreground'>;
              {application && application.talent_profile?.professional_title || 'Talent'}
    application_id: string,
    new_status: ApplicationStatus) => Promise < void>;
  onViewScore: (application: JobApplication) => void;
interface ApplicationRowProps {
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string, ) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus, ) => Promise < void>,
  onViewScore: (application: JobApplication, ) => void;
}
export /**
 * ApplicationRow - Function description
 */
function ApplicationRow() {
  const [avatar_error, setAvatarError] = useState (false);
  const talent_name = application.talent_profile?.full_name || 'Unknown';
  return (
    <TableRow key={application.id}>;
      <TableCell>;
        <div className='flex items - center gap - 3'>;
          <AvatarPrimitive className='h - 9 w - 9'>;
            {' '}
            {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatar_error ? (
              <Image;
                src={application.talent_profile.profile_picture_url}
                alt={talent_name}
                width={36} // Corresponds to h - 9 w - 9 (9 * 4px = 36px);
                height={36} // Corresponds to h - 9 w - 9;
                className='rounded - full object - cover' // Ensure rounded and object - cover;
                on_error={() => setAvatarError (true)}
                priority={false}              />) : (
              <User className='h - 5 w - 5 text - gray - 400' />)}
          </AvatarPrimitive>;
          <div>;
            <div className='font - medium'>{talent_name}</div>;
            <div className='text - xs text - muted - foreground'>;
              {application.talent_profile?.professional_title || 'Talent'}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
        </div>;
      </TableCell>;
      <TableCell>;

=======
        <div className="flex items-center gap-1">;
          <Calendar className="h-4 w-4 text-muted-foreground" />;
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>;
        </div>;
      </TableCell>;
      <TableCell>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;
<<<<<<< HEAD

              href={application && application.resume.file_url || '#'}

              target='_blank'
              rel='noopener noreferrer'>;
              <FileText className='h-4 w-4 mr-1' /> View;
=======
        {application.resume ? (;
          <Button variant="ghost" size="sm" asChild>;
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">;
              <FileText className="h-4 w-4 mr-1" /> View;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </a>;
          </Button>;
        ) : (;
          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>;
<<<<<<< HEAD
      <TableCell className='text-right'>;
        <ApplicationActions
>>>>>>>           application = {application,}
          processingId = {processingId,}
          onViewApplication = {onViewApplication,}
          onStatusChange = {onStatusChange,}
        />
      </TableCell>
    </TableRow>
=======
      <TableCell className="text-right">;
        <ApplicationActions;
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
        />;
      </TableCell>;
    </TableRow>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

        {application.resume ? (
          <Button variant='ghost' size='sm' as_child>;
            <a;
              href={application.resume.file_url || '#'}
              target='_blank';
              rel='noopener noreferrer';
            >;
              <FileText className='h - 4 w - 4 mr - 1' /> View;
            </a>;
          </Button>) : (
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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

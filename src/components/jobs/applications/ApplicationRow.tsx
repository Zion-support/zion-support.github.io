
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { TableRow, TableCell } from '@/components/ui/table'
import { JobApplication, ApplicationStatus } from '@/types/jobs'
import { StatusBadge } from './StatusBadge'
import { ScoreBadge } from './ScoreBadge';
import { ApplicationActions } from './ApplicationActions';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState

export function ApplicationRow({

  application
  processingId
  onViewApplication
  onStatusChange
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false)

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image

            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </AvatarPrimitive>
          <div>

            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>

        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>

          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (

          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
<<<<<<< HEAD

=======
interface ApplicationRowProps {
  application: JobApplication;
  processing_id: string | null;
  onViewApplication: (application_id: string) => Promise < void>;
  onStatusChange: (

}

import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { TableRow, TableCell } from '@/components/ui/table'
import { JobApplication, ApplicationStatus } from '@/types/jobs'
import { StatusBadge } from './StatusBadge'
import { ScoreBadge } from './ScoreBadge';
import { ApplicationActions } from './ApplicationActions';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export function ApplicationRow({

  application
  processingId
  onViewApplication
  onStatusChange
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false)
  const talentName = application.talent_profile?.full_name |'Unknown'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======

        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

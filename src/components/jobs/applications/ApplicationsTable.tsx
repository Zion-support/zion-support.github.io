<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { format } from 'date-fns';
import { JobApplication } from '@/types/jobs';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed
import { ClickableBadge } from '@/components/ui/clickable-badge'
import {  Table,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { 
  Table,
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  TableRow,
} from '@/components/ui/table'
import { ApplicationActions } from './ApplicationActions'
import { StatusBadge } from './StatusBadge'
import { Briefcase, User } from 'lucide-react';
import { HireConfirmationModal } from '@/components/hiring-tracker/HireConfirmationModal';
import React, { useState } from 'react'; // Import React and useState
import { toast } from '@/hooks/use-toast';
import Image from 'next/image'; // Import next/image

interface ApplicationsTableProps {
  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewScore: (application: JobApplication) => void
// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({
  application,
}: {
  application: JobApplication
}) => {
  const [avatarError, setAvatarError] = useState(false)
  const talentName = application.talent_profile?.full_name || 'Candidate'
interface ApplicationsTableProps {
  applications: JobApplication[],
  processingId: string | null,
  onViewApplication: (applicationId: string,) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: string,) => Promise<void>,
  onViewScore: (application: JobApplication,) => void
}

// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({ application }: { application: JobApplication },) => {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  TableRow
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from 'lucide-react'
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
import React, { useState } from "react", // Import React and useState
import { toast } from "@/hooks/use-toast",
import Image from 'next/image', // Import next/image

interface ApplicationsTableProps {
  applications: JobApplication[],
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}

// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({ application }: { application: JobApplication }) => {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Candidate",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { 
  Table,
<<<<<<< HEAD

  TableBody,
  TableCell,
  TableHead,
  TableHeader,

=======
>>>>>>>   TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ApplicationActions } from './ApplicationActions'
import { StatusBadge } from './StatusBadge'
import { Briefcase, User } from 'lucide-react';
import { HireConfirmationModal } from '@/components/hiring-tracker/HireConfirmationModal';
import React, { useState } from 'react'; // Import React and useState
import { toast } from '@/hooks/use-toast';
import Image from 'next/image'; // Import next/image


// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({ application }: { application: JobApplication },) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  TableRow
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from 'lucide-react'
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
import React, { useState } from "react", // Import React and useState
import { toast } from "@/hooks/use-toast",
import Image from 'next/image', // Import next/image

interface ApplicationsTableProps {
  applications: JobApplication[],
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}

// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({ application }: { application: JobApplication }) => {
<<<<<<< HEAD

  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Candidate",
=======
>>>>>>>   const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Candidate",
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

>>>>>>> import { format } from 'date-fns'
import { JobApplication } from '@/types/jobs'
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed
import { ClickableBadge } from '@/components/ui/clickable-badge'
import {  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { ApplicationActions } from './ApplicationActions'
import { StatusBadge } from './StatusBadge'
import { Briefcase, User } from 'lucide-react'
import { HireConfirmationModal } from '@/components/hiring-tracker/HireConfirmationModal'
import React, { useState } from 'react'; // Import React and useState
import { toast } from '@/hooks/use-toast'
import Image from 'next/image'; // Import next/image
<<<<<<< HEAD
>>>>>>> import { format } from 'date-fns';
import { JobApplication } from '@/types/jobs';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed;
import { ClickableBadge } from '@/components/ui/clickable-badge';
import {  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from '@/components/ui/table';
import { ApplicationActions } from './ApplicationActions';
import { StatusBadge } from './StatusBadge';
import { Briefcase, User } from 'lucide-react';
import { HireConfirmationModal } from '@/components/hiring-tracker/HireConfirmationModal';
import React, { useState } from 'react'; // Import React and useState;
import { toast } from '@/hooks/use-toast';
import Image from 'next/image'; // Import next/image;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

interface ApplicationsTableProps {
  applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>;
  onViewScore: (application: JobApplication) => void

<<<<<<< HEAD

import { format } from 'date - fns';
import { JobApplication } from '@/types / jobs';
import { Avatar as AvatarPrimitive } from '@/components / ui / avatar'; // Renamed;
import { ClickableBadge } from '@/components / ui / clickable - badge';
import {  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import { ApplicationActions } from './ApplicationActions';
import { StatusBadge } from './StatusBadge';
import { Briefcase, User } from 'lucide-react';
import { HireConfirmationModal } from '@/components / hiring - tracker / HireConfirmationModal';
import React, { useState } from 'react'; // Import React and useState;
import { toast } from '@/hooks / use - toast';
import Image from 'next / image'; // Import next / image;
interface ApplicationsTableProps {
  applications: JobApplication[];
  processing_id: string | null;
  onViewApplication: (application_id: string) => Promise < void>;
  onStatusChange: (application_id: string, new_status: string) => Promise < void>;
  onViewScore: (application: JobApplication) => void;
// Sub - component for avatar to handle its own error state;

const ApplicationAvatar = ({
  application
}: {

// Sub-component for avatar to handle its own error state;
const ApplicationAvatar = ({;
  application,;
}: {;
  application: JobApplication;
}) => {;
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application && application.talent_profile?.full_name || 'Candidate';
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string,) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string,) => Promise<void>,;
  onViewScore: (application: JobApplication,) => void;
}

// Sub-component for avatar to handle its own error state;
const ApplicationAvatar = ({ application }: { application: JobApplication },) => {;
  const [avatarError, setAvatarError] = useState(false),;
  const talentName = application && application.talent_profile?.full_name || "Candidate",;

=======
// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({
  application
}: {
  application: JobApplication
}) => {
  const [avatarError, setAvatarError] = useState(false)
  const talentName = application.talent_profile?.full_name |'Candidate'
interface ApplicationsTableProps {
  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string,) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string,) => Promise<void>
  onViewScore: (application: JobApplication,) => void

}
// Sub-component for avatar to handle its own error state
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

const ApplicationAvatar = ({ application }: { application: JobApplication },) => {
  const [avatarError, setAvatarError] = useState(false)
  const talentName = application.talent_profile?.full_name |"Candidate"
  return (
    <AvatarPrimitive className="h-8 w-8"> {/* Using Renamed AvatarPrimitive */}
      {application.talent_profile?.profile_picture_url && !avatarError ? (
        <Image
          src={application.talent_profile.profile_picture_url}
          alt={talentName}
          width={32} // for h-8 w-8
          height={32} // for h-8 w-8
<<<<<<< HEAD
<<<<<<< HEAD

      ) : (
=======
          className='rounded-full object-cover'
          onError={() => setAvatarError(true)}
          priority={false}        />
>>>>>>>       ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <User className="h-4 w-4" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
          className='rounded-full object-cover'
          onError={() => setAvatarError(true)}
          priority={false}        />
=======
          className="rounded-full object-cover"
          onError={() => setAvatarError(true)}
          priority={false}
        />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      ) : (
        <User className="h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}
    </AvatarPrimitive>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
}
export function ApplicationsTable({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  applications
  processingId
  onViewApplication
  onStatusChange
  onViewScore
}: ApplicationsTableProps) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onStatusChange,
  onViewScore
}: ApplicationsTableProps) {

  const [hireModalOpen, setHireModalOpen] = useState(false),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
  
=======
=======
  applications,
  processingId,
  onViewApplication,
=======
},

export function ApplicationsTable({ 
  applications, 
  processingId, 
  onViewApplication, 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onStatusChange,
  onViewScore
}: ApplicationsTableProps) {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [hireModalOpen, setHireModalOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] =
    useState<JobApplication | null>(null)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application),
    setHireModalOpen(true)
  },
  
  const handleHireConfirmed = () => {
    toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
<<<<<<< HEAD
  },
<<<<<<< HEAD
=======
  }
<<<<<<< HEAD

=======
},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export function ApplicationsTable({ 
  applications, 
  processingId, 
  onViewApplication, 
  onStatusChange,
  onViewScore
}: ApplicationsTableProps) {
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [hireModalOpen, setHireModalOpen] = useState(false),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application),
    setHireModalOpen(true)
  },
  
  const handleHireConfirmed = () => {
    toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
<<<<<<< HEAD
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead className="hidden md:table-cell">Applied</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD
<<<<<<< HEAD

                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>

                      </div>
=======
            {applications.map(application => (              <TableRow key={application.id}>
>>>>>>>                 <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
=======
<<<<<<< HEAD
            {applications.map(application => (              <TableRow key={application.id}>
=======
            {applications.map((application) => (
              <TableRow key={application.id}>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div>
<<<<<<< HEAD
                      <div className='font-medium'>
                        {application.talent_profile?.full_name |'Candidate'}
                      </div>
                      <div className='text-xs text-muted-foreground mt-0.5'>
                        {application.talent_profile?.professional_title |
                          'Applicant'}
<<<<<<< HEAD
                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className="font-medium">
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {application.talent_profile?.professional_title || "Applicant"}
<<<<<<< HEAD

>>>>>>>                       </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(new Date(application.created_at), "PP")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <StatusBadge status={application.status} />
                </TableCell>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <TableCell className='hidden lg:table-cell'>
                  {application.match_score !== undefined &&
                  application.match_score !== null ? (
                    <ClickableBadge
                      variant='outline'
                      className='cursor-pointer'
                      onClick={() => onViewScore(application)}                    >
<<<<<<< HEAD
>>>>>>>                       {application.match_score}%
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      {application.match_score}%
>>>>>>>                     </ClickableBadge>
=======
=======
                <TableCell className="hidden lg:table-cell">
                  {application.match_score !== undefined && application.match_score !== null ? (
                    <ClickableBadge 
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      {application.match_score}%
                    </ClickableBadge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  ) : (
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>
<<<<<<< HEAD
<<<<<<< HEAD

};"
=======
}h-4 w-4"/>)
}</AvatarPrimitive>)
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> };"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                <TableCell className='text-right'>
                  <div className='flex items-center justify-end gap-2'>
                    <ClickableBadge
                      variant='outline'
                      className='cursor-pointer bg-green-50 hover:bg-green-100 text-green-700'
                      onClick={() => handleHireClick(application)}                    >
                      <Briefcase className='h-3 w-3 mr-1' /> Hire
                    </ClickableBadge>
                    <ApplicationActions
                      application = {application,}
                      processingId = {processingId,}
                      onViewApplication = {onViewApplication,}
                      onStatusChange = {onStatusChange,}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <HireConfirmationModal
        isOpen = {hireModalOpen,}
        onClose = {() => setHireModalOpen(false),}
        application = {selectedApplication |undefined,}
        onConfirm = {handleHireConfirmed,}
      />
    </>
  )
  /* Using Renamed AvatarPrimitive */
}{
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url
}alt= {
  talentName
}width= {
  32
}//for h-8 w-8 height= {
  32 "
}//for h-8 w-8 className="rounded-full object-cover" onError= {
  () => setAvatarError (true)
}priority= {
  false "
<<<<<<< HEAD
}h-4 w-4"/>)
}</AvatarPrimitive>)
=======
}h-4 w-4"/>) ;
}</AvatarPrimitive>) ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
return (<> <div className=" rounded-md border"> hidden md:table-cell" >Applied</TableHead> <TableHead className="hidden md:table-cell" >Status</TableHead> <TableHead className="hidden lg:table-cell" >Match Score</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  applications.map ( (application) => (<TableRow key= {
  application.id
}> <TableCell> </div> </div> </div> </TableCell> onClick={
  () => onViewScore (application)
}> {
  application.match score "
}% </ClickableBadge>) : (<span className="text-muted-foreground text-sm" >Not scored</span>) "
}</TableCell> <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire </ClickableBadge> <ApplicationActions application= {
  application
}processingId= {
  processingId
}onViewApplication= {
  onViewApplication
}onStatusChange= {
  onStatusChange
}/> </div> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> <HireConfirmationModal isOpen= {
  hireModalOpen
}onClose= {
  () => setHireModalOpen (false)
}application= {
  selectedApplication |undefined
}onConfirm= {
  handleHireConfirmed
}/> </>)
}'"}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <ClickableBadge 
                      variant="outline" 
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >
                      <Briefcase className="h-3 w-3 mr-1" /> Hire
                    </ClickableBadge>
                    <ApplicationActions
import { format } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;
} from "@/components/ui/table",;
import { ApplicationActions } from "./ApplicationActions",;
import { StatusBadge } from "./StatusBadge",;
import { Briefcase, User } from 'lucide-react';
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;
import React, { useState } from "react", // Import React and useState;
import { toast } from "@/hooks/use-toast",;
import Image from 'next/image', // Import next/image;
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
// Sub-component for avatar to handle its own error state;
const ApplicationAvatar = ({ application }: { application: JobApplication }) => {;
  const [avatarError, setAvatarError] = useState(false),;
  const talentName = application.talent_profile?.full_name || "Candidate",;
  return (;
    <AvatarPrimitive className="h-8 w-8"> {/* Using Renamed AvatarPrimitive */}
      {application.talent_profile?.profile_picture_url && !avatarError ? (;
        <Image;
          src={application.talent_profile.profile_picture_url}
          alt={talentName}
          width={32} // for h-8 w-8;
          height={32} // for h-8 w-8;
          className="rounded-full object-cover";
          onError={() => setAvatarError(true)}
          priority={false}
        />;
      ) : (;
        <User className="h-4 w-4" />;
      )}
    </AvatarPrimitive>;
  );
<<<<<<< HEAD

  /* Using Renamed AvatarPrimitive */ ;
}{;
  application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {
  application && application.talent profile && profile.profile picture url 
                <TableCell className='hidden md:table - cell'>;
                  {format (new Date (application.created_at), 'PP')}
=======
},;
export function ApplicationsTable({;
  applications,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
  const handleHireClick = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
  },;
  const handleHireConfirmed = () => {;
    toast({;
      title: "Hiring process initiated";
      description: "Offer has been sent to the talent.";
    });
  };
  return (;
    <>;
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Candidate</TableHead>;
              <TableHead className="hidden md:table-cell">Applied</TableHead>;
              <TableHead className="hidden md:table-cell">Status</TableHead>;
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {applications.map((application) => (;
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items-center gap-3">;
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>;
                      <div className="font-medium">;
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0.5">;
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  {format(new Date(application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  <StatusBadge status={application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table-cell">;
                  {application.match_score !== undefined && application.match_score !== null ? (;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor-pointer";
                      onClick={() => onViewScore(application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>;
                  ) : (;
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700";
                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
                    <ApplicationActions;
                      application={application}
                      processingId={processingId}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />;
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
      />;
<<<<<<< HEAD

  32;
}//for h - 8 w - 8 height= {
  32 ";
}//for h - 8 w - 8 className="rounded - full object - cover" on_error= {
  () => setAvatarError (true);
}priority= {
  false ";
}h - 4 w - 4"/>);
}</AvatarPrimitive>);
}";
return (<> <div className=" rounded - md border"> hidden md:table - cell" >Applied</TableHead> <TableHead className="hidden md:table - cell" >Status</TableHead> <TableHead className="hidden lg:table - cell" >Match Score</TableHead> <TableHead className="text - right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  applications.map ( (application) => (<TableRow key= {
  application.id;
}> <TableCell> </div> </div> </div> </TableCell> on_click={
  () => onViewScore (application);
}> {
  application.match score ";
}% </ClickableBadge>) : (<span className="text - muted - foreground text - sm" >Not scored</span>) ";
}</TableCell> <TableCell className="text - right" > <div className="flex items - center justify - end gap - 2" > <ClickableBadge > <Briefcase className="h - 3 w - 3 mr - 1" /> Hire </ClickableBadge> <ApplicationActions application= {
  application;
}processing_id= {
  processing_id;

}onViewApplication= {
  onViewApplication;
}onStatusChange= {


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  onStatusChange;
}/> </div> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> <HireConfirmationModal is_open= {
  hireModalOpen;
}on_close= {
  () => setHireModalOpen (false);
}application= {
  selected_application || undefined;
}on_confirm= {
  handleHireConfirmed;
}/> </>);
}'"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>     </>;
=======
    </>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

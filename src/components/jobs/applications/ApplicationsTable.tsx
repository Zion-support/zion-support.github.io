=======
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { 
  Table,
import { format } from 'date-fns';
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

interface ApplicationsTableProps {
  applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>;
  onViewScore: (application: JobApplication) => void
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea


  TableBody,
  TableCell,
  TableHead,
  TableHeader,

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

  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talent_profile?.full_name || "Candidate",

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

  return (
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

                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>

                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(new Date(application.created_at), "PP")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <StatusBadge status={application.status} />
                </TableCell>

                      {application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>

};"
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

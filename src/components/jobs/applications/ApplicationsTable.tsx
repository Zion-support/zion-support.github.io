import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed,
import { ClickableBadge } from "@/components/ui/clickable-badge",import { 
  Table,
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
import React, { useState } from "react", // Import React and useState,
import { toast } from "@/hooks/use-toast",
import Image from 'next/image', // Import next/imageimport Image from 'next/image'; // Import next/image,
interface ApplicationsTableProps {
  applications: JobApplication[],
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}

// Sub-component for avatar to handle its own error state,
const ApplicationAvatar = ({ application }: { application: JobApplication }) => {
  const [avatarError, setAvatarError] = useState(false),
  const talentName = application.talentprofile?.fullname || "Candidate",
  return (
    <AvatarPrimitive className=&quot;h-8 w-8&quot;> {/* Using Renamed AvatarPrimitive */}
      {application.talentprofile?.profilepicture_url && !avatarError ? (
        <Image,
src={application.talentprofile.profilepicture_url}
          alt={talentName}
          width={32} // for h-8 w-8,
height={32} // for h-8 w-8,
className=&quot;rounded-full object-cover&quot;
          onError={() => setAvatarError(true)}
          priority={false}
interface ApplicationsTableProps {applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>;
  onViewScore: (application: JobApplication) => void}

// Sub-component for avatar to handle its own error state,
const ApplicationAvatar = (_{application}: {application: JobApplication}) => {const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talentprofile?.fullname || "Candidate";

  return (_<AvatarPrimitive className="h-8 w-8"> {/* Using Renamed AvatarPrimitive */}
      {application.talentprofile?.profilepicture_url && !avatarError ? (
        <Image,
src={application.talentprofile.profilepicture_url}
          alt={talentName}
          width={32} // for h-8 w-8,
height={32} // for h-8 w-8,
className="rounded-full object-cover"
          onError={_() => setAvatarError(true)}
          priority={false}
        />
      ) : (
        <User className=&quot;h-4 w-4&quot; />
      )}
    </AvatarPrimitive>
  )
},

export function ApplicationsTable({ 
  applications,
  processingId,
  onViewApplication,
  onStatusChange,
  onViewScore
}: ApplicationsTableProps) {
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
      <div className=&quot;rounded-md border&quot;>
export function ApplicationsTable(_{applications, processingId, onViewApplication, onStatusChange, onViewScore}: ApplicationsTableProps) {const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application);
    setHireModalOpen(true)};
  
  const handleHireConfirmed = () => {toast({
      title: "Hiring process initiated", description: "Offer has been sent to the talent."})
  };
  
  return (_<>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead className=&quot;hidden md:table-cell&quot;>Applied</TableHead>
              <TableHead className=&quot;hidden md:table-cell&quot;>Status</TableHead>
              <TableHead className=&quot;hidden lg:table-cell&quot;>Match Score</TableHead>
              <TableHead className=&quot;text-right&quot;>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>
                      <div className=&quot;font-medium&quot;>
                        {application.talentprofile?.fullname || &quot;Candidate&quot}
                      </div>
                      <div className=&quot;text-xs text-muted-foreground mt-0.5&quot;>
                        {application.talentprofile?.professionaltitle || &quot;Applicant&quot}                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=&quot;hidden md:table-cell&quot;>
                  {format(new Date(application.createdat), &quot;PP&quot;)}
                </TableCell>
                <TableCell className=&quot;hidden md:table-cell&quot;>
                  <StatusBadge status={application.status} />
                </TableCell>
                <TableCell className=&quot;hidden lg:table-cell&quot;>
                  {application.matchscore !== undefined && application.matchscore !== null ? (
                    <ClickableBadge,
variant=&quot;outline&quot;
                      className=&quot;cursor-pointer&quot;                      onClick={() => onViewScore(application)}
                    >
                      {application.matchscore}%
                    </ClickableBadge>
                  ) : (
                    <span className=&quot;text-muted-foreground text-sm&quot;>Not scored</span>
                  )}
                </TableCell>
                <TableCell className=&quot;text-right&quot;>
                  <div className=&quot;flex items-center justify-end gap-2&quot;>
                    <ClickableBadge,
variant=&quot;outline&quot; 
                      className=&quot;cursor-pointer bg-green-50 hover:bg-green-100 text-green-700&quot;
                      onClick={() => handleHireClick(application)}                    >
                      <Briefcase className=&quot;h-3 w-3 mr-1&quot; /> Hire
                    </ClickableBadge>
                    <ApplicationActions,
application={application}
                      processingId={processingId}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <HireConfirmationModal,
isOpen={hireModalOpen}
        onClose={_() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
      />
    </>
  )
}

<<<<<<< HEAD
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed
import { ClickableBadge } from "@/components/ui/clickable-badge",
=======
import { format } from &quot;date-fns&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Avatar as AvatarPrimitive } from &quot;@/components/ui/avatar&quot;; // Renamed
import { ClickableBadge } from &quot;@/components/ui/clickable-badge&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
<<<<<<< HEAD
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from 'lucide-react'
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
import React, { useState } from "react", // Import React and useState
import { toast } from "@/hooks/use-toast",
import Image from 'next/image', // Import next/image
=======
} from &quot;@/components/ui/table&quot;;
import { ApplicationActions } from &quot;./ApplicationActions&quot;;
import { StatusBadge } from &quot;./StatusBadge&quot;;
import { Briefcase, User } from 'lucide-react'
import { HireConfirmationModal } from &quot;@/components/hiring-tracker/HireConfirmationModal&quot;;
import React, { useState } from &quot;react&quot;; // Import React and useState
import { toast } from &quot;@/hooks/use-toast&quot;;
import Image from 'next/image'; // Import next/image
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || &quot;Candidate&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <AvatarPrimitive className=&quot;h-8 w-8&quot;> {/* Using Renamed AvatarPrimitive */}
      {application.talent_profile?.profile_picture_url && !avatarError ? (
        <Image
          src={application.talent_profile.profile_picture_url}
          alt={talentName}
          width={32} // for h-8 w-8
          height={32} // for h-8 w-8
          className=&quot;rounded-full object-cover&quot;
          onError={() => setAvatarError(true)}
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
<<<<<<< HEAD
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },
=======
      title: &quot;Hiring process initiated&quot;,
      description: &quot;Offer has been sent to the talent.&quot;
    });
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <>
      <div className=&quot;rounded-md border&quot;>
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
                        {application.talent_profile?.full_name || &quot;Candidate&quot;}
                      </div>
                      <div className=&quot;text-xs text-muted-foreground mt-0.5&quot;>
                        {application.talent_profile?.professional_title || &quot;Applicant&quot;}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=&quot;hidden md:table-cell&quot;>
                  {format(new Date(application.created_at), &quot;PP&quot;)}
                </TableCell>
                <TableCell className=&quot;hidden md:table-cell&quot;>
                  <StatusBadge status={application.status} />
                </TableCell>
                <TableCell className=&quot;hidden lg:table-cell&quot;>
                  {application.match_score !== undefined && application.match_score !== null ? (
                    <ClickableBadge 
                      variant=&quot;outline&quot;
                      className=&quot;cursor-pointer&quot;
                      onClick={() => onViewScore(application)}
                    >
                      {application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className=&quot;text-muted-foreground text-sm&quot;>Not scored</span>
                  )}
                </TableCell>
                <TableCell className=&quot;text-right&quot;>
                  <div className=&quot;flex items-center justify-end gap-2&quot;>
                    <ClickableBadge 
                      variant=&quot;outline&quot; 
                      className=&quot;cursor-pointer bg-green-50 hover:bg-green-100 text-green-700&quot;
                      onClick={() => handleHireClick(application)}
                    >
                      <Briefcase className=&quot;h-3 w-3 mr-1&quot; /> Hire
                    </ClickableBadge>
                    <ApplicationActions
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
      
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
      />
    </>
  )
}


<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { ClickableBadge } from "@/components/ui/clickable-badge",
=======
import { format } from &quot;date-fns&quot;;
import { JobApplication } from &quot;@/types/jobs&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
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
import { Briefcase, User } from "lucide-react",
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
=======
} from &quot;@/components/ui/table&quot;;
import { ApplicationActions } from &quot;./ApplicationActions&quot;;
import { StatusBadge } from &quot;./StatusBadge&quot;;
import { Briefcase, User } from &quot;lucide-react&quot;;
import { HireConfirmationModal } from &quot;@/components/hiring-tracker/HireConfirmationModal&quot;;
import { useState } from &quot;react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ApplicationsTableProps {
  applications: JobApplication[],
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,
  onViewScore: (application: JobApplication) => void
}

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
=======
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

interface ApplicationsTableProps {_applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: string) => Promise<void>;
  onViewScore: (_application: JobApplication) => void;}

export function ApplicationsTable(_{_applications, _processingId, _onViewApplication, _onStatusChange, _onViewScore}: ApplicationsTableProps) {_const [hireModalOpen, _setHireModalOpen] = useState(false);
  const [selectedApplication, _setSelectedApplication] = useState<JobApplication | null>(null);
  
  const _handleHireClick = (_application: JobApplication) => {
    setSelectedApplication(application);
    setHireModalOpen(true);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleHireConfirmed = () => {_// This will be called after the hire confirmation is completed
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },
=======
      title: &quot;Hiring process initiated&quot;,
      description: &quot;Offer has been sent to the talent.&quot;
    });
=======
      title: "Hiring process initiated", _description: "Offer has been sent to the talent."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  return (
    <>
      <div className=&quot;rounded-md border&quot;>
=======
  return (_<>
      <div className="rounded-md border">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            {_applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
<<<<<<< HEAD
                  <div className=&quot;flex items-center gap-3&quot;>
                    <Avatar className=&quot;h-8 w-8&quot;>
                      {application.talent_profile?.profile_picture_url ? (
                        <img 
                          src={application.talent_profile.profile_picture_url} 
                          alt={application.talent_profile.full_name || &quot;Candidate&quot;} 
=======
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      {_application.talent_profile?.profile_picture_url ? (
                        <img 
                          src={application.talent_profile.profile_picture_url} 
                          alt={_application.talent_profile.full_name || "Candidate"} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      ) : (
                        <User className=&quot;h-4 w-4&quot; />
                      )}
                    </Avatar>
                    <div>
<<<<<<< HEAD
                      <div className=&quot;font-medium&quot;>
                        {application.talent_profile?.full_name || &quot;Candidate&quot;}
                      </div>
                      <div className=&quot;text-xs text-muted-foreground mt-0.5&quot;>
                        {application.talent_profile?.professional_title || &quot;Applicant&quot;}
=======
                      <div className="font-medium">
                        {_application.talent_profile?.full_name || "Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {_application.talent_profile?.professional_title || "Applicant"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                </TableCell>
<<<<<<< HEAD
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
=======
                <TableCell className="hidden md:table-cell">
                  {_format(new Date(application.created_at), _"PP")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <StatusBadge status={_application.status} />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {_application.match_score !== undefined && application.match_score !== null ? (_<ClickableBadge 
                      variant="outline"
                      className="cursor-pointer"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      onClick={() => onViewScore(application)}
                    >
                      {_application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className=&quot;text-muted-foreground text-sm&quot;>Not scored</span>
                  )}
                </TableCell>
                <TableCell className=&quot;text-right&quot;>
                  <div className=&quot;flex items-center justify-end gap-2&quot;>
                    <ClickableBadge 
<<<<<<< HEAD
                      variant=&quot;outline&quot; 
                      className=&quot;cursor-pointer bg-green-50 hover:bg-green-100 text-green-700&quot;
                      onClick={() => handleHireClick(application)}
=======
                      variant="outline" 
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={_() => handleHireClick(application)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Briefcase className=&quot;h-3 w-3 mr-1&quot; /> Hire
                    </ClickableBadge>
                    <ApplicationActions
                      application={_application}
                      processingId={_processingId}
                      onViewApplication={_onViewApplication}
                      onStatusChange={_onStatusChange}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {_/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={_hireModalOpen}
        onClose={_() => setHireModalOpen(false)}
        application={_selectedApplication || undefined}
        onConfirm={_handleHireConfirmed}
      />
    </>
  )
}

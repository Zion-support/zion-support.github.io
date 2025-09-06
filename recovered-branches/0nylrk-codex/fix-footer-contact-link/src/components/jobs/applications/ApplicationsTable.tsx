<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx


<<<<<<< HEAD
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar } from "@/components/ui/avatar",

import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from "lucide-react",
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewScore: (application: JobApplication) => void
<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {format} from "date-fns";
import {JobApplication} from "@/types/jobs";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ApplicationActions} from "./ApplicationActions";
import {StatusBadge} from "./StatusBadge";
import {Briefcase, User} from "lucide-react";
import {HireConfirmationModal} from "@/components/hiring-tracker/HireConfirmationModal";
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar } from "@/components/ui/avatar",
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { ClickableBadge } from "@/components/ui/clickable-badge";
=======
import { Badge } from "@/components/ui/badge",
import { ClickableBadge } from "@/components/ui/clickable-badge",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { 
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from "lucide-react",
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
<<<<<<< HEAD
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
=======
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewScore: (application: JobApplication) => void
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export function ApplicationsTable({
  applications
  processingId
  onViewApplication
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

<<<<<<< HEAD
=======

<<<<<<< HEAD
  onStatusChange;
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
=======
export function ApplicationsTable({ 
  applications, 
  processingId, 
<<<<<<< HEAD
  onViewApplication, ;
  onStatusChange;
=======
  onViewApplication, 
  onStatusChange,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
export function ApplicationsTable(): any ({ ;
  applications, ;
  processingId, ;
  onViewApplication, ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
  onStatusChange;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx


export function ApplicationsTable({ 
  applications, 
  processingId, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)

<<<<<<< HEAD
=======
  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleHireConfirmed = () => {
    // This will be called after the hire confirmation is completed
    toast({
      title: "Hiring process initiated"
      description: "Offer has been sent to the talent."
    })
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
import { format } from './date - fns';
import { JobApplication } from '@/types / jobs';
import { Avatar } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { ApplicationActions } from './ApplicationActions';
import { StatusBadge } from './StatusBadge';
import { Briefcase, User } from './lucide-react';
import { HireConfirmationModal } from '@/components / hiring - tracker / HireConfirmationModal';
import { useState } from './react';
import { toast } from '@/hooks / use - toast';
interface ApplicationsTableProps {
  applications: JobApplication[],
  processing_id: string | null,
  onViewApplication: (application_id: string) => Promise < void>,
  onStatusChange: (application_id: string, new_status: string) => Promise < void>,
  onViewScore: (application: JobApplication) => void;
}
export /**
 * ApplicationsTable - Function description
 */
function ApplicationsTable() {
  const [hireModalOpen, setHireModalOpen] = useState (false);
  const [selected_application, setSelectedApplication] = useState < JobApplication | null>(null);
;
  const handleHireClick = (application: JobApplication) =>: any {
    setSelectedApplication (application),
    setHireModalOpen (true);
  }
;
  const handleHireConfirmed = () =>: any {
    // This will be called after the hire confirmation is completed;
    toast ({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent.";
    });
  }
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

=======

  },
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
  return (
    <>;
      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Candidate</TableHead>;
              <TableHead className="hidden md:table - cell">Applied</TableHead>;
              <TableHead className="hidden md:table - cell">Status</TableHead>;
              <TableHead className="hidden lg:table - cell">Match Score</TableHead>;
              <TableHead className="text - right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {applications.map ((application) => (
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items - center gap - 3">;
                    <Avatar className="h - 8 w - 8">;
                      {application.talent_profile?.profile_picture_url ? (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx


=======
=======
  }

=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      {application.talent_profile?.profile_picture_url ? (
                        <img
                          src={application.talent_profile.profile_picture_url}
                          alt={application.talent_profile.full_name |"Candidate"}
                        />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </Avatar>
                    <div>
                      <div className="font-medium">
                        {application.talent_profile?.full_name |"Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {application.talent_profile?.professional_title |"Applicant"}
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
                <TableCell className="hidden lg:table-cell">
                  {application.match_score !== undefined && application.match_score !== null ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <ClickableBadge
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >
                      {application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import { format } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
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
import { Briefcase, User } from "lucide-react",;
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
export function ApplicationsTable({;
  applications,;
  processingId,;
  onViewApplication,;
  onStatusChange,;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
  const handleHireClick = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
  };
  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;
      title: "Hiring process initiated",;
      description: "Offer has been sent to the talent.";
    });
  };
  return (
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
            {applications && applications.map((application) => (;
              <TableRow key={application && application.id}>;
                <TableCell>;
                  <div className="flex items-center gap-3">;
                    <Avatar className="h-8 w-8">;
                      {application && application.talent_profile?.profile_picture_url ? (;
                        <img
                          src={application && application.talent_profile.profile_picture_url} 
                          alt={application && application.talent_profile.full_name || "Candidate"} 
                        />;
                      ) : (;
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;
                        {application && application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0 && 0.5">;
                        {application && application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  {format(new Date(application && application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  <StatusBadge status={application && application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table-cell">;
                  {application && application.match_score !== undefined && application && application.match_score !== null ? (;
                    <ClickableBadge
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >;
                      {application && application.match_score}%;
                    </ClickableBadge>;
                  ) : (;
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge
                      variant="outline" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

========
                    <ApplicationActions
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
                        <img;
                          src={application.talent_profile.profile_picture_url}
                          alt={application.talent_profile.full_name || "Candidate"}
                        />) : (
                        <User className="h - 4 w - 4" />)}
                    </Avatar>;
                    <div>;
                      <div className="font - medium">;
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text - xs text - muted - foreground mt - 0.5">;
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell className="hidden md:table - cell">;
                  {format (new Date (application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table - cell">;
                  <StatusBadge status={application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table - cell">;
                  {application.match_score !== undefined && application.match_score !== null ? (
                    <ClickableBadge;
                      variant="outline";
                      className="cursor - pointer";
                      on_click={() => onViewScore (application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>) : (
                    <span className="text - muted - foreground text - sm">Not scored</span>)}
                </TableCell>;
                <TableCell className="text - right">;
                  <div className="flex items - center justify - end gap - 2">;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor - pointer bg - green - 50 hover:bg - green - 100 text - green - 700";
                      on_click={() => handleHireClick (application)}
                    >;
                      <Briefcase className="h - 3 w - 3 mr - 1" /> Hire;
                    </ClickableBadge>;
                    <ApplicationActions;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

=======
                    <ApplicationActions;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
                      application={application}
                      processing_id={processing_id}
=======

import { format } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { ;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;
} from "@/components/ui/table",;
import { ApplicationActions } from "./ApplicationActions",;
import { StatusBadge } from "./StatusBadge",;
import { Briefcase, User } from "lucide-react",;
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
;
interface ApplicationsTableProps {;
  applications:JobApplication[],;
  processingId:string | null,;
  onViewApplication:(applicationId:string) => Promise<void>,;
  onStatusChange:(applicationId:string, newStatus:string) => Promise<void>,;
  onViewScore:(application:JobApplication) => void;
}
;
export function ApplicationsTable({ ;
  applications, ;
  processingId, ;
  onViewApplication, ;
  onStatusChange,;
  onViewScore;
} ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
  ;
  const handleHireClick = (application:JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
  },;
  ;
  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;
      title:"Hiring process initiated",;
      description:"Offer has been sent to the talent.";
    }),;
  },;
  ;
=======
  const handleHireClick = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setHireModalOpen(true);
  },;
  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;
      title: "Hiring process initiated";
      description: "Offer has been sent to the talent.";
    });
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                    <Avatar className="h-8 w-8">;
                      {application.talent_profile?.profile_picture_url ? (;
<<<<<<< HEAD
                        <img ;
                          src={application.talent_profile.profile_picture_url} ;
                          alt={application.talent_profile.full_name || "Candidate"} ;
                        />;
                      ) :(;
=======
                        <img;
                          src={application.talent_profile.profile_picture_url} ;
                          alt={application.talent_profile.full_name || "Candidate"} ;
                        />;
                      ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0.5">;
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  {format(new Date(application.created_at), "PP")}
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
                  <StatusBadge status={application.status} />;
                </TableCell>;
                <TableCell className="hidden lg:table-cell">;
                  {application.match_score !== undefined && application.match_score !== null ? (;
<<<<<<< HEAD
                    <ClickableBadge ;
=======
                    <ClickableBadge;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      variant="outline";
                      className="cursor-pointer";
                      onClick={() => onViewScore(application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>;
<<<<<<< HEAD
                  ) :(;
=======
                  ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
<<<<<<< HEAD
                    <ClickableBadge ;
                      variant="outline" ;
=======
                    <ClickableBadge;
                      variant="outline";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700";
                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
                    <ApplicationActions;
<<<<<<< HEAD
                      application={application}}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState (false);
const [selectedApplication, setSelectedApplication] = useState<JobApplication | null> (null);
const handleHireClick = (application: JobApplication) => {
  setSelectedApplication (application);
setHireModalOpen (true) 
};
//This will be called after the hire confirmation is completed toast ({
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application),
    setHireModalOpen(true)
  },
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

interface ApplicationsTableProps {applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>;
  onViewScore: (application: JobApplication) => void}

export function ApplicationsTable(_{applications, processingId, onViewApplication, onStatusChange, onViewScore}: ApplicationsTableProps) {const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application);
    setHireModalOpen(true)};
  
  const handleHireConfirmed = () => {_// This will be called after the hire confirmation is completed,
toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  }  };
  
  return (
    <>
      <div className=&quot;rounded-md border&quot;>        <Table>
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
                    <Avatar className=&quot;h-8 w-8&quot;>
                      {application.talentprofile?.profilepicture_url ? (
                        <img,
src={application.talentprofile.profilepicture_url} 
                          alt={application.talentprofile.fullname || &quot;Candidate&quot}                         />
                      ) : (
                        <User className=&quot;h-4 w-4&quot; />
                      )}
                    </Avatar>
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />;
                  </div>;
                </TableCell>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

          </TableBody>;
        </Table>;
      </div>;


========
<<<<<<< HEAD
          </TableBody>;
        </Table>;
      </div>;
=======
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
      />;
    </>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationsTable.tsx
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open={hireModalOpen}
        on_close={() => setHireModalOpen (false)}
        application={selected_application || undefined}
        on_confirm={handleHireConfirmed}
      />;
    </>);
}
=======
  ),;}
};
  applications.map ( (application) => (<TableRow key= {
  application.id 
}> <TableCell> />) : (<User className="h-4 w-4" />) 
}</Avatar> <div> </div> </div> </div> </TableCell> onClick= {
  () => onViewScore (application) 
}> {
  application.match score 
}% </ClickableBadge>) : (<span className="text-muted-foreground text-sm" >Not scored</span>) 
}</TableCell> <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire </ClickableBadge> <ApplicationActions application= {
  application 
}processingId= {
  processingId 
}onViewApplication= {
  onViewApplication 
}onStatusChange= {
  onStatusChange 
}/> </div> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> {
  /* Hire Confirmation Modal */ 
}<HireConfirmationModal isOpen= {
  hireModalOpen 
}onClose= {
  () => setHireModalOpen (false) 
}application= {
  selectedApplication || undefined 
}onConfirm= {
  handleHireConfirmed 
}/> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication |undefined}
        onConfirm={handleHireConfirmed}
      />
    </>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

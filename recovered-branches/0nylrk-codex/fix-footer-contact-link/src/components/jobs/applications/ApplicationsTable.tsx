<<<<<<< HEAD
<<<<<<< HEAD

=======

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApplicationsTableProps {

=======
interface ApplicationsTableProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  applications: JobApplication[]
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
<<<<<<< HEAD
  onViewScore: (application: JobApplication) => void
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {toast} from "@/hooks/use-toast";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { format } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
=======
  onViewScore: (application: JobApplication) => void;
import {format} from "date-fns";"
import {JobApplication} from "@/types/jobs";"
import {Avatar} from "@/components/ui/avatar";"
import {Badge} from "@/components/ui/badge";"
import {ClickableBadge} from "@/components/ui/clickable-badge";"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";"
import {ApplicationActions} from "./ApplicationActions";"
import {StatusBadge} from "./StatusBadge";"
import {Briefcase, User} from "lucide-react";"
import {HireConfirmationModal} from "@/components/hiring-tracker/HireConfirmationModal";"
import {useState} from "react";"
import {toast} from "@/hooks/use-toast";
"
import { format } from "date-fns","
import { JobApplication } from "@/types/jobs","
import { Avatar } from "@/components/ui/avatar",";
import { Badge } from "@/components/ui/badge";"
import { ClickableBadge } from "@/components/ui/clickable-badge";"
import { Badge } from "@/components/ui/badge","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ClickableBadge } from "@/components/ui/clickable-badge",
import {};
=======
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
<<<<<<< HEAD
  TableRow"
} from "@/components/ui/table","
import { ApplicationActions } from "./ApplicationActions","
import { StatusBadge } from "./StatusBadge","
import { Briefcase, User } from "lucide-react","
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",";
import { useState } from "react";"
import { toast } from "@/hooks/use-toast";"
import { useState } from "react","
import { toast } from "@/hooks/use-toast",
interface ApplicationsTableProps {}
  applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
<<<<<<< HEAD
  onViewScore: (application: JobApplication) => void
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
  TableRow
} from "@/components/ui/table",
import { ApplicationActions } from "./ApplicationActions",
import { StatusBadge } from "./StatusBadge",
import { Briefcase, User } from "lucide-react",
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
interface ApplicationsTableProps {

  applications: JobApplication[]
  processingId: string | null
  onViewApplication: (applicationId: string) => Promise<void>
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>
  onViewScore: (application: JobApplication) => void
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export function ApplicationsTable({
=======
import {toast} from "@/hooks/use-toast";export function ApplicationsTable({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {toast} from "@/hooks/use-toast";export function ApplicationsTable({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
export function ApplicationsTable({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  applications
  processingId
  onViewApplication

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  onStatusChange;
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
export function ApplicationsTable({ 
  applications, 
  processingId, 
  onViewApplication, ;
  onStatusChange;
  onViewApplication, 
  onStatusChange,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
<<<<<<< HEAD

  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  onViewScore: (application: JobApplication) => void;
}
export function ApplicationsTable({};
  applications;
  processingId;
  onViewApplication;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function ApplicationsTable(): any ({ ;
  applications, ;
  processingId, ;
  onViewApplication, ;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onStatusChange;
  onViewScore;
}: ApplicationsTableProps) {;
  const [hireModalOpen, setHireModalOpen] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function ApplicationsTable({ 
  applications, 
  processingId, 

  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },
  


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application)
    setHireModalOpen(true)
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleHireConfirmed = () => {
    // This will be called after the hire confirmation is completed
    toast({
      title: "Hiring process initiated"
<<<<<<< HEAD
=======



  const handleHireConfirmed = () => {}
    // This will be called after the hire confirmation is completed;
    toast({"
      title: "Hiring process initiated""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      description: "Offer has been sent to the talent."
    })

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
      description: "Offer has been sent to the talent."
    })

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  },
  


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  },
  

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <>;"
      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Candidate</TableHead>;"
              <TableHead className="hidden md:table - cell">Applied</TableHead>;"
              <TableHead className="hidden md:table - cell">Status</TableHead>;"
              <TableHead className="hidden lg:table - cell">Match Score</TableHead>;"
              <TableHead className="text - right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
  }

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <ClickableBadge
                      variant="outline"
=======
                    <ClickableBadge"
                      variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >
                      {application.match_score}%
                    </ClickableBadge>
                  ) : ("
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>"
                <TableCell className="text-right">"
                  <div className="flex items-center justify-end gap-2">
                    <ClickableBadge"
                      variant="outline""
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >"
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>
                    <ApplicationActions;
"
import { format } from "date-fns",;"
import { JobApplication } from "@/types/jobs",;"
import { Avatar } from "@/components/ui/avatar",;"
import { Badge } from "@/components/ui/badge",;"
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;"
} from "@/components/ui/table",;"
import { ApplicationActions } from "./ApplicationActions",;"
import { StatusBadge } from "./StatusBadge",;"
import { Briefcase, User } from "lucide-react",;"
import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal",;"
import { useState } from "react",;"
import { toast } from "@/hooks/use-toast",;
interface ApplicationsTableProps {;
  applications: JobApplication[],;
  processingId: string | null,;
  onViewApplication: (applicationId: string) => Promise<void>,;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>,;
  onViewScore: (application: JobApplication) => void;
}
;
export function ApplicationsTable() { return null; }
  };

  const handleHireConfirmed = () => {;
    // This will be called after the hire confirmation is completed;
    toast({;"
      title: "Hiring process initiated",;"
      description: "Offer has been sent to the talent.";
    });
  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <>;"
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Candidate</TableHead>;"
              <TableHead className="hidden md:table-cell">Applied</TableHead>;"
              <TableHead className="hidden md:table-cell">Status</TableHead>;"
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>;"
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
          <TableBody>;
            {applications && applications.map((application) => (;
              <TableRow key={application && application.id}>;
                <TableCell>;"
                  <div className="flex items-center gap-3">;"
                    <Avatar className="h-8 w-8">;
                      {application && application.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={application && application.talent_profile.profile_picture_url} "
                          alt={application && application.talent_profile.full_name || "Candidate"} 
                        />;
                      ) : (;"
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;"
                      <div className="font-medium">;"
                        {application && application.talent_profile?.full_name || "Candidate"}
                      </div>;"
                      <div className="text-xs text-muted-foreground mt-0 && 0.5">;"
                        {application && application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;"
                <TableCell className="hidden md:table-cell">;"
                  {format(new Date(application && application.created_at), "PP")}
                </TableCell>;"
                <TableCell className="hidden md:table-cell">;
                  <StatusBadge status={application && application.status} />;
                </TableCell>;"
                <TableCell className="hidden lg:table-cell">;
                  {application && application.match_score !== undefined && application && application.match_score !== null ? (;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <ClickableBadge
                      variant="outline"
=======
          <TableBody>;                      variant="outline"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <TableBody>;                      variant="outline"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



                    <ClickableBadge"
                      variant="outline""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >;
                      {application && application.match_score}%;
                    </ClickableBadge>;
                  ) : (;"
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
<<<<<<< HEAD
=======

                </TableCell>;"
                <TableCell className="text-right">;"
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge"
                      variant="outline" 


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >;"
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



                        <img;
                          src={application.talent_profile.profile_picture_url}"
                          alt={application.talent_profile.full_name || "Candidate"}
                        />) : ("
                        <User className="h - 4 w - 4" />)}
                    </Avatar>;
                    <div>;"
                      <div className="font - medium">;"
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;"
                      <div className="text - xs text - muted - foreground mt - 0.5">;"
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      application={application}
                      processing_id={processing_id}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />;
                  </div>;
                </TableCell>;

<<<<<<< HEAD
          </TableBody>;
        </Table>;
      </div>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication |undefined}
        onConfirm={handleHireConfirmed}
<<<<<<< HEAD
<<<<<<< HEAD

      />;
    </>;
  );
}

<<<<<<< HEAD
=======
=======
=======
                    <ApplicationActions;

                      application={application}
                      processing_id={processing_id}

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
<<<<<<< HEAD
            {applications.map((application) => (;
              <TableRow key={application.id}>;
                <TableCell>;
                  <div className="flex items-center gap-3">;
                    <Avatar className="h-8 w-8">;
                      {application.talent_profile?.profile_picture_url ? (;
                        <img;
                          src={application.talent_profile.profile_picture_url} ;
                          alt={application.talent_profile.full_name || "Candidate"} ;
=======
            {applications && applications.map((application) => (;
              <TableRow key={application && application.id}>;
                <TableCell>;
                  <div className="flex items-center gap-3">;
                    <Avatar className="h-8 w-8">;
                      {application && application.talent_profile?.profile_picture_url ? (;
                        <img
                          src={application && application.talent_profile.profile_picture_url} 
                          alt={application && application.talent_profile.full_name || "Candidate"} 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        />;
                      ) : (;
                        <User className="h-4 w-4" />;
                      )}
                    </Avatar>;
                    <div>;
                      <div className="font-medium">;
<<<<<<< HEAD
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0.5">;
                        {application.talent_profile?.professional_title || "Applicant"}
=======
                        {application && application.talent_profile?.full_name || "Candidate"}
                      </div>;
                      <div className="text-xs text-muted-foreground mt-0 && 0.5">;
                        {application && application.talent_profile?.professional_title || "Applicant"}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell className="hidden md:table-cell">;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      onClick={() => onViewScore(application)}
                    >;
                      {application.match_score}%;
                    </ClickableBadge>;
                  ) : (;
                    <span className="text-muted-foreground text-sm">Not scored</span>;
                  )}
<<<<<<< HEAD
                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge;
                      variant="outline";
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700";
=======

                </TableCell>;
                <TableCell className="text-right">;
                  <div className="flex items-center justify-end gap-2">;
                    <ClickableBadge
                      variant="outline" 

                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      onClick={() => handleHireClick(application)}
                    >;
                      <Briefcase className="h-3 w-3 mr-1" /> Hire;
                    </ClickableBadge>;
<<<<<<< HEAD
                    <ApplicationActions;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {/* Hire Confirmation Modal */}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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

                      application={application}
                      processing_id={processing_id}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />;
                  </div>;
                </TableCell>;

          </TableBody>;
        </Table>;
      </div>;


      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication |undefined}
        onConfirm={handleHireConfirmed}

      />;
    </>;
  );
}

      {/* Hire Confirmation Modal */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <HireConfirmationModal;
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
<<<<<<< HEAD
      />;
    </>;
<<<<<<< HEAD
=======

              </TableRow>))}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              </TableRow>))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

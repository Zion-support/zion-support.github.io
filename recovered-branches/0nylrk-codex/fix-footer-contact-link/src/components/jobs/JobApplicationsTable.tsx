
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";

<<<<<<< HEAD
interface JobApplicationsTableProps {;
  jobId: string;
}
<<<<<<< HEAD
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

=======


export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
========
export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
=======

import { useState } from "react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import {;
  ApplicationsTable,;
  EmptyState,;
  ErrorState,;
  LoadingState,;
  ScoreDialog;
} from "./applications",;
;
interface JobApplicationsTableProps {;
  jobId:string;
}
;
export function JobApplicationsTable({ jobId } JobApplicationsTableProps) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx

=======
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

=======
interface JobApplicationsTableProps {
  jobId: string
}
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

  const {
    applications
    isLoading
    error
    updateApplicationStatus
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
    markApplicationAsViewed;
    refetch;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    markApplicationAsViewed;
    refetch
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId(applicationId)
    try {
      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed
      const application = applications.find(app => app.id === applicationId);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId)
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { useJobApplications } from "@/hooks/useJobApplications",
import {
  ApplicationsTable,
  EmptyState,
  ErrorState,
  LoadingState,
  ScoreDialog
} from "./applications",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;

========
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed;
      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
    } finally {;
      setProcessingId(null);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
<<<<<<< HEAD

=======


  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

interface JobApplicationsTableProps {
  jobId: string
import { useState } from "react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import {;
  ApplicationsTable,;
  EmptyState,;
  ErrorState,;
  LoadingState,;
  ScoreDialog;
} from "./applications",;
interface JobApplicationsTableProps {;
  jobId: string;
}
;
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {;
  const {;
    applications,;
    isLoading,;
    error,;
    updateApplicationStatus,;
    markApplicationAsViewed,;
    refetch;
  } = useJobApplications(jobId),;
  const [processingId, setProcessingId] = useState<string | null>(null),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
  const [showScoreDialog, setShowScoreDialog] = useState(false),;
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;
      await updateApplicationStatus(applicationId, newStatus),;
      // If it's not already viewed, mark it as viewed;
      const application = applications.find(app => app.id === applicationId),;
      if (application && !application.viewed_at) {;
        await markApplicationAsViewed(applicationId);
      }
    } finally {
      setProcessingId(null)
    }
  }
  };

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleViewScore = (application: JobApplication) => {
    setSelectedApplication(application)
    setShowScoreDialog(true)
  }
  const handleViewApplication = async (applicationId: string) => {
    await markApplicationAsViewed(applicationId)
  }
  const handleScoreUpdated = (updatedApplication: JobApplication) => {
    refetch()
  }
<<<<<<< HEAD
<<<<<<< HEAD

  if (isLoading) {
    return <LoadingState />

  },;
=======
=======
  };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  };
=======

  if (isLoading) {
    return <LoadingState />
  },;
  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };
  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch();
  };
  if (isLoading) {;
    return <LoadingState />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }


========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
  if (error) {;
    return <ErrorState error={error} />;
  }
  if (applications && applications.length === 0) {;
    return <EmptyState />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
  }
=======
  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <>;
      <ApplicationsTable
import { useState } from './react';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
import { useJobApplications } from '@/hooks / useJobApplications';
import { ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog } from './applications';
;
interface JobApplicationsTableProps {
  job_id: string;
}
export /**
 * JobApplicationsTable - Function description
 */
function JobApplicationsTable() {
  const {
    applications,
    is_loading,
    error,
    updateApplicationStatus,
    markApplicationAsViewed;
    refetch;
  } = useJobApplications (job_id);
;
  const [processing_id, setProcessingId] = useState < string | null>(null);
  const [selected_application, setSelectedApplication] = useState < JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState (false);
;
  const handleStatusChange = async (application_id: string, new_status: ApplicationStatus) => {
    setProcessingId (application_id),
    try {
      await updateApplicationStatus (application_id, new_status);
      // If it's not already viewed, mark it as viewed;
      const application = applications.find (app => app.id === application_id);
      // Check condition
if ( {) {
  $2
}
        await markApplicationAsViewed (application_id);
      }
    } finally {
      setProcessingId (null);
    }
  }
;
  const handleViewScore = (application: JobApplication) =>: any {
    setSelectedApplication (application),
    setShowScoreDialog (true);
  }
;
  const handleViewApplication = async (application_id: string) => {
    await markApplicationAsViewed (application_id);
  }
;
  const handleScoreUpdated = (updated_application: JobApplication) =>: any {
    refetch ();
  }
;
  // Check condition
if ( {) {
  $2
}
    return <LoadingState />;
  }
  // Check condition
if ( {) {
  $2
}
    return <ErrorState error={error} />;
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyState />;
  }
  return (
=======
    markApplicationAsViewed,;
    refetch;
  } = useJobApplications(jobId),;
;
  const [processingId, setProcessingId] = useState<string | null>(null),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
  const [showScoreDialog, setShowScoreDialog] = useState(false),;
  ;
  const handleStatusChange = async (applicationId:string, newStatus:ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;
      await updateApplicationStatus(applicationId, newStatus),;
      // If it's not already viewed, mark it as viewed;
      const application = applications.find(app => app.id === applicationId),;
      if (application && !application.viewed_at) {;
        await markApplicationAsViewed(applicationId),;
      }
    } finally {;
      setProcessingId(null),;
    }
  },;
;
  const handleViewScore = (application:JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  },;
;
  const handleViewApplication = async (applicationId:string) => {;
    await markApplicationAsViewed(applicationId);
  },;
;
  const handleScoreUpdated = (updatedApplication:JobApplication) => {;
    refetch();
  },;
;
  if (isLoading) {;
    return <LoadingState />,;
  }
;
  if (error) {;
    return <ErrorState error={error} />,;
  }
;
  if (applications.length === 0) {;
    return <EmptyState />,;
  }
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <>;
      <ApplicationsTable;
        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx

      />;


========
      />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
      <ScoreDialog
      />;
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <ScoreDialog;
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
      />;
    </>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobApplicationsTable.tsx
      />;
    </>);
}
=======
  ),;}
 import {
  ApplicationsTable;
EmptyState;
ErrorState;
LoadingState;
ScoreDialog interface JobApplicationsTableProps {
  jobId: string 
}export function JobApplicationsTable ({
  jobId 
}: JobApplicationsTableProps) {
  const {
  applications;
isLoading;
error;
updateApplicationStatus;
markApplicationAsViewed;
refetch 
}= useJobApplications (jobId);
const [selectedApplication, setSelectedApplication] = useState<JobApplication | null> (null);
const [showScoreDialog, setShowScoreDialog] = useState (false);
return (<> <ApplicationsTable applications= {
  applications 
}processingId= {
  processingId 
}onViewApplication= {
  handleViewApplication 
}onStatusChange= {
  handleStatusChange 
}onViewScore= {
  handleViewScore 
}/> <ScoreDialog open= {
  showScoreDialog 
}onOpenChange= {
  setShowScoreDialog 
}application= {
  selectedApplication 
}onScoreUpdated= {
  handleScoreUpdated 
}/> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <>
      <ApplicationsTable
        applications={applications}
        processingId={processingId}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}
      />
      <ScoreDialog
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selectedApplication}
        onScoreUpdated={handleScoreUpdated}
      />
    </>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

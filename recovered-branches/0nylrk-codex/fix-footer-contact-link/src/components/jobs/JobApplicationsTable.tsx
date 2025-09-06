
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";

<<<<<<< HEAD
interface JobApplicationsTableProps {
  jobId: string
}
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
<<<<<<< HEAD

  const {
    applications
    isLoading
    error
    updateApplicationStatus
=======
=======
interface JobApplicationsTableProps {;
  jobId: string;
}


export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;

=======
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

>>>>>>> main
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    markApplicationAsViewed;
    refetch
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    markApplicationAsViewed;
    refetch;
>>>>>>> main
  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
<<<<<<< HEAD
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId(applicationId)
    try {
      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed
      const application = applications.find(app => app.id === applicationId);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId)
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } finally {
      setProcessingId(null)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;

      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed;
      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
    } finally {;
      setProcessingId(null);
    }


  };



>>>>>>> main
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

  if (isLoading) {
    return <LoadingState />
=======
  },;
  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  },;
  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };
  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch();
  };
  if (isLoading) {;
    return <LoadingState />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
=======
  };

  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  };

  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };

  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch();
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  if (isLoading) {;
    return <LoadingState />;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }


  if (error) {;
    return <ErrorState error={error} />;
  }

  if (applications && applications.length === 0) {;
    return <EmptyState />;

  }
=======
  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <>;
      <ApplicationsTable
=======
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
    <>;
      <ApplicationsTable;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}

      />;


      <ScoreDialog
=======
      />;
      <ScoreDialog;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}

      />;
    </>;
  );
}

=======
      />;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main

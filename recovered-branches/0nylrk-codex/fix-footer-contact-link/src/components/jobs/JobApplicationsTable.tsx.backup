
<<<<<<< HEAD






    isLoading, ;
    error, ;
    updateApplicationStatus, ;


export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {


=======
applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

interface JobApplicationsTableProps {
  jobId: string
}
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

  const {
    applications
    isLoading
    error
    updateApplicationStatus
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

interface JobApplicationsTableProps {
  jobId: string
}

  const {
    applications
    isLoading
    error
    updateApplicationStatus
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

    applications
    isLoading
    error
    updateApplicationStatus

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { 

    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;
<<<<<<< HEAD


=======
    markApplicationAsViewed;
    refetch


  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId(applicationId)
    try {
      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed
      const application = applications.find(app => app.id === applicationId);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId)
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

  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;


      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);


>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    } finally {;
      setProcessingId(null);
    }
<<<<<<< HEAD



  };




=======
      }
    } finally {
      setProcessingId(null)
    }
  }
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleViewScore = (application: JobApplication) => {

    setSelectedApplication(application)
    setShowScoreDialog(true)
  }
  const handleViewApplication = async (applicationId: string) => {}
    await markApplicationAsViewed(applicationId)
  }
  const handleScoreUpdated = (updatedApplication: JobApplication) => {}
    refetch()
  }

  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  };

  const handleViewApplication = async (applicationId: string) => {;

    await markApplicationAsViewed(applicationId)
  }
  const handleScoreUpdated = (updatedApplication: JobApplication) => {
    refetch()
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  };

<<<<<<< HEAD

  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };
=======
  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };

  const handleScoreUpdated = (updatedApplication: JobApplication) => {;

  }
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }

<<<<<<< HEAD

=======
  if (error) {;
    return <ErrorState error={error} />;
  }

  if (applications && applications.length === 0) {;
    return <EmptyState />;
  }
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />




>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

  }

  }
  if (error) {;
    return <ErrorState error={error} />;
  }
  if (applications && applications.length === 0) {;
    return <EmptyState />;

<<<<<<< HEAD
  }
  }



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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
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
    <>;
      <ApplicationsTable;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}

<<<<<<< HEAD
      />;
;
      <ScoreDialog;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}

<<<<<<< HEAD
      />;
    </>;
      />;
    </>);
}



=======
  ApplicationsTable;
EmptyState;
ErrorState;
LoadingState;


  applications;
isLoading;
error;
updateApplicationStatus;
markApplicationAsViewed;

        application={selectedApplication}
        onScoreUpdated={handleScoreUpdated}
      />
    </>
  )

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

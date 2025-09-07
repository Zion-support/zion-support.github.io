
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

  const { 

    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;
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


      }
    } finally {;
      setProcessingId(null);
    }
      }
    } finally {
      setProcessingId(null)
    }
  }
  };

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

  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  };

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

  }

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




  }

  }

  }
  if (error) {;
    return <ErrorState error={error} />;
  }
  if (applications && applications.length === 0) {;
    return <EmptyState />;

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


        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}

        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}

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

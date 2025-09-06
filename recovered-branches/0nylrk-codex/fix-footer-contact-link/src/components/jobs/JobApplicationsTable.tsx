

import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";

interface JobApplicationsTableProps {;
  jobId: string;
}
<<<<<<< HEAD
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

  const {
    applications
    isLoading
    error
    updateApplicationStatus
=======

export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    markApplicationAsViewed;
    refetch;
  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
<<<<<<< HEAD
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId(applicationId)
    try {
=======

  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed;
      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);
      }
    } finally {;
      setProcessingId(null);
    }
<<<<<<< HEAD
  }
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
  }
<<<<<<< HEAD
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />
=======

  if (error) {;
    return <ErrorState error={error} />;
  }

  if (applications && applications.length === 0) {;
    return <EmptyState />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
    <>;
      <ApplicationsTable
        applications={applications}
        processingId={processingId}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}
<<<<<<< HEAD
      />
=======
      />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <ScoreDialog
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selectedApplication}
        onScoreUpdated={handleScoreUpdated}
<<<<<<< HEAD
      />
    </>
  )
}
=======
      />;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

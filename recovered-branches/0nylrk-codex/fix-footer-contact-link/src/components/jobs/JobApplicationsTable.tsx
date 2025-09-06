








import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";

interface JobApplicationsTableProps {;
  jobId: string;
}


export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {




export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    markApplicationAsViewed;
    refetch;
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

      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed;
      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

      }
    } finally {;
      setProcessingId(null);
    }





  };




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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

  if (isLoading) {
    return <LoadingState />


  },;
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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  }
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />
  }






  return (
    <>;
      <ApplicationsTable

        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}

      />;


      <ScoreDialog

        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}

      />;
    </>;
  );
}



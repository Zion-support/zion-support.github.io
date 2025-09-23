
import { useState } from "react";
<<<<<<< HEAD
import { JobApplicationStatus } from "@/types/jobs";
=======
import { JobApplication, ApplicationStatus } from "@/types/jobs";
>>>>>>> origin/auto/autonomy-17186719616
import { useJobApplications } from "@/hooks/useJobApplications";
import {
  ApplicationsTable,
  EmptyState,
  ErrorState,
  LoadingState,
  ScoreDialog
} from "./applications";

interface JobApplicationsTableProps {
  jobId: string;
}

export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
  const { 
<<<<<<< HEAD
    applications
    isLoading
    error
    updateApplicationStatus
=======
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, 
>>>>>>> origin/auto/autonomy-17186719616
    markApplicationAsViewed,
    refetch
  } = useJobApplications(jobId);

<<<<<<< HEAD
  const [processingIdsetProcessingId] = useState<string | null>(null);
  const [selectedApplicationsetSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialogsetShowScoreDialog] = useState(false);
  
  const handleStatusChange = async (applicationId: stringnewStatus: ApplicationStatus) => {
    setProcessingId(applicationId);
    try {
      await updateApplicationStatus(applicationIdnewStatus);
      // If it's not already viewedmark it as viewed
=======
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId(applicationId);
    try {
      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed
>>>>>>> origin/auto/autonomy-17186719616
      const application = applications.find(app => app.id === applicationId);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId);
      }
    } finally {
      setProcessingId(null);
    }
  };

  const handleViewScore = (application: JobApplication) => {
    setSelectedApplication(application);
    setShowScoreDialog(true);
  };

  const handleViewApplication = async (applicationId: string) => {
    await markApplicationAsViewed(applicationId);
  };

  const handleScoreUpdated = (updatedApplication: JobApplication) => {
    refetch();
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (applications.length === 0) {
    return <EmptyState />;
  }

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
  );
}

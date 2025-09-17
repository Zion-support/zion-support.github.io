
import { useState } from "react";
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
    markApplicationAsViewed,
    refetch
  } = useJobApplications(jobId);

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

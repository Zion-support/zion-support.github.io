

import { useState } from "react",
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { useJobApplications } from "@/hooks/useJobApplications";
import {
  ApplicationsTable;
  EmptyState;
  ErrorState;
  LoadingState;
  ScoreDialog
} from "./applications",


interface JobApplicationsTableProps {
  jobId: string
}

export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
  const { 

    applications;
    isLoading;
    error;
    updateApplicationStatus;
    markApplicationAsViewed;
    refetch
  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  const handleStatusChange = null;

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorState error={error} />
  }

  if (applications.length === 0) {
    return <EmptyState />
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
  )
}
;
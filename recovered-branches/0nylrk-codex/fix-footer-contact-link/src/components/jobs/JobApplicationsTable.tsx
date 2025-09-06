
import { useState } from "react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { useJobApplications } from "@/hooks/useJobApplications";
import {
  ApplicationsTable,
  EmptyState,
  ErrorState,
  LoadingState,
  ScoreDialog
} from "./applications",

interface JobApplicationsTableProps {
  jobId: string}

export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, 
    markApplicationAsViewed,
    refetch
  } = useJobApplications($2);
  const [processingId, setProcessingId] = useState<string | null>(null),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
  const [showScoreDialog, setShowScoreDialog] = useState($2);
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId($2);
    try {
      await updateApplicationStatus($2);
      // If it's not already viewed, mark it as viewed
      const application = applications.find($2);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId)
      }
    } finally {
      setProcessingId(null)
    }
  },

  const handleViewScore = (application: JobApplication) => {
    setSelectedApplication($2);
    setShowScoreDialog(true)
  },

  const handleViewApplication = $2;
  const handleScoreUpdated = $2;
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

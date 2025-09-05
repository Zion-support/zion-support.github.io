
<<<<<<< HEAD
import { useState } from "react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { useJobApplications } from "@/hooks/useJobApplications",
=======
import { useState } from &quot;react&quot;;
import { JobApplication, ApplicationStatus } from &quot;@/types/jobs&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  ApplicationsTable,
  EmptyState,
  ErrorState,
  LoadingState,
  ScoreDialog
<<<<<<< HEAD
} from "./applications",
=======
} from &quot;./applications&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface JobApplicationsTableProps {
  jobId: string
}

export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, 
    markApplicationAsViewed,
    refetch
  } = useJobApplications(jobId),

  const [processingId, setProcessingId] = useState<string | null>(null),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
  const [showScoreDialog, setShowScoreDialog] = useState(false),
  
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {
    setProcessingId(applicationId),
    try {
      await updateApplicationStatus(applicationId, newStatus),
      // If it's not already viewed, mark it as viewed
      const application = applications.find(app => app.id === applicationId),
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId)
      }
    } finally {
      setProcessingId(null)
    }
  },

  const handleViewScore = (application: JobApplication) => {
    setSelectedApplication(application),
    setShowScoreDialog(true)
  },

  const handleViewApplication = async (applicationId: string) => {
    await markApplicationAsViewed(applicationId)
  },

  const handleScoreUpdated = (updatedApplication: JobApplication) => {
    refetch()
  },

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

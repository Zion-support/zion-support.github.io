
<<<<<<< HEAD
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
=======
import {_ApplicationsTable, _EmptyState, _ErrorState, _LoadingState, _ScoreDialog} from "./applications";

interface JobApplicationsTableProps {_jobId: string;}

export function JobApplicationsTable(_{_jobId}: JobApplicationsTableProps) {_const { 
    applications, _isLoading, _error, _updateApplicationStatus, _markApplicationAsViewed, _refetch} = useJobApplications(jobId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const [processingId, setProcessingId] = useState<string | null>(null),
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),
  const [showScoreDialog, setShowScoreDialog] = useState(false),
  
<<<<<<< HEAD
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
=======
  const _handleStatusChange = async (_applicationId: string, _newStatus: ApplicationStatus) => {_setProcessingId(applicationId);
    try {
      await updateApplicationStatus(applicationId, _newStatus);
      // If it's not already viewed, _mark it as viewed
      const _application = applications.find(app => app.id === applicationId);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId);}
    } finally {_setProcessingId(null);}
  };

  const _handleViewScore = (_application: JobApplication) => {_setSelectedApplication(application);
    setShowScoreDialog(true);};

  const _handleViewApplication = async (_applicationId: string) => {_await markApplicationAsViewed(applicationId);};

  const _handleScoreUpdated = (_updatedApplication: JobApplication) => {_refetch();};

  if (isLoading) {_return <LoadingState />;}

  if (error) {_return <ErrorState error={error} />;
  }

  if (applications.length === 0) {_return <EmptyState />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <ApplicationsTable
        applications={_applications}
        processingId={_processingId}
        onViewApplication={_handleViewApplication}
        onStatusChange={_handleStatusChange}
        onViewScore={_handleViewScore}
      />

      <ScoreDialog
        open={_showScoreDialog}
        onOpenChange={_setShowScoreDialog}
        application={_selectedApplication}
        onScoreUpdated={_handleScoreUpdated}
      />
    </>
  )
}


<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";

interface JobApplicationsTableProps {
<<<<<<< HEAD
  jobId: string
}
=======
  jobId: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
<<<<<<< HEAD

  const {
    applications
    isLoading
    error
    updateApplicationStatus
=======
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
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

interface JobApplicationsTableProps {
  jobId: string
import { useState } from "react",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import {;
  ApplicationsTable,;
  EmptyState,;
  ErrorState,;
  LoadingState,;
  ScoreDialog;
} from "./applications",;
interface JobApplicationsTableProps {;
  jobId: string;
}
;
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {;
  const {;
    applications,;
    isLoading,;
    error,;
    updateApplicationStatus,;
    markApplicationAsViewed,;
    refetch;
  } = useJobApplications(jobId),;
  const [processingId, setProcessingId] = useState<string | null>(null),;
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null),;
  const [showScoreDialog, setShowScoreDialog] = useState(false),;
  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;
      await updateApplicationStatus(applicationId, newStatus),;
      // If it's not already viewed, mark it as viewed;
      const application = applications.find(app => app.id === applicationId),;
      if (application && !application.viewed_at) {;
        await markApplicationAsViewed(applicationId);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } finally {
      setProcessingId(null)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
  },;
  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  },;
  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };
  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch();
  };
  if (isLoading) {;
    return <LoadingState />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  if (error) {
    return <ErrorState error={error} />
  }
  if (applications.length === 0) {
    return <EmptyState />
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
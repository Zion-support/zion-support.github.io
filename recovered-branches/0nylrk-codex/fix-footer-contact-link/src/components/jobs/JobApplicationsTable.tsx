




import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";


export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;

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
;
interface JobApplicationsTableProps {;
  jobId:string;
}
;
export function JobApplicationsTable({ jobId } JobApplicationsTableProps) {;
=======
interface JobApplicationsTableProps {;
  jobId: string;
}


export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;
interface JobApplicationsTableProps {
  jobId: string
}
=======
interface JobApplicationsTableProps {;
  jobId: string;
}
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

  const {
    applications
    isLoading
    error
    updateApplicationStatus
=======
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    markApplicationAsViewed;
    refetch;=======
=======

  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    markApplicationAsViewed;
    refetch;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);

  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;





  };



  if (isLoading) {
    return <LoadingState />
  },;
  const handleViewScore = (application: JobApplication) => {;
    setSelectedApplication(application),;
    setShowScoreDialog(true);
  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch();
  };
  if (isLoading) {;
    return <LoadingState />;



  }


  }
  if (error) {;
    return <ErrorState error={error} />;
  }
  if (applications && applications.length === 0) {;
    return <EmptyState />;
  }
  }


=======
  return (
    <>;
      <ApplicationsTable
      />;


      <ScoreDialog
=======
      />;
      <ScoreDialog;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      />;
    </>;
  );
}

=======
      />;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

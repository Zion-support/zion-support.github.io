

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {useState} from "react";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {useJobApplications} from "@/hooks/useJobApplications";
import {ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog} from "./applications";

interface JobApplicationsTableProps {;
  jobId: string;
}

<<<<<<< HEAD

export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;
  const { ;
=======
export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;  const { ;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;

<<<<<<< HEAD
=======
  const {
    applications
    isLoading
    error
    updateApplicationStatus
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {

  const {
    applications
    isLoading
    error
    updateApplicationStatus
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;

<<<<<<< HEAD
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, ;

    markApplicationAsViewed;
    refetch;
  } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);


  const handleStatusChange = async (applicationId: string, newStatus: ApplicationStatus) => {;
    setProcessingId(applicationId),;
    try {;

      await updateApplicationStatus(applicationId, newStatus);
      // If it's not already viewed, mark it as viewed;
=======
    markApplicationAsViewed;
    refetch;      // If it's not already viewed, mark it as viewed;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);

<<<<<<< HEAD



      }
    } finally {;
      setProcessingId(null);
    }


  };



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
=======
    } finally {;
      setProcessingId(null);
    }
  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId)
};

  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch()
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  if (isLoading) {;
    return <LoadingState />;

<<<<<<< HEAD


  }


  if (error) {;
    return <ErrorState error={error} />;
  }

  if (applications && applications.length === 0) {;
    return <EmptyState />;



  if (isLoading) {;
    return <LoadingState />;

  if (isLoading) {;
    return <LoadingState />;
  }
  }
  return (
    <>;
      <ApplicationsTable
import { useState } from './react';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
import { useJobApplications } from '@/hooks / useJobApplications';
import { ApplicationsTable, EmptyState, ErrorState, LoadingState, ScoreDialog } from './applications';
;
interface JobApplicationsTableProps {
  job_id: string;
}
export /**
 * JobApplicationsTable - Function description
 */
function JobApplicationsTable() {
  const {
    applications,
    is_loading,
    error,
    updateApplicationStatus,
    markApplicationAsViewed;
    refetch;
  } = useJobApplications (job_id);
;
  const [processing_id, setProcessingId] = useState < string | null>(null);
  const [selected_application, setSelectedApplication] = useState < JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState (false);
;
  const handleStatusChange = async (application_id: string, new_status: ApplicationStatus) => {
    setProcessingId (application_id),
    try {
      await updateApplicationStatus (application_id, new_status);
      // If it's not already viewed, mark it as viewed;
      const application = applications.find (app => app.id === application_id);
      // Check condition
if ( {) {
  $2
}
        await markApplicationAsViewed (application_id);
      }
    } finally {
      setProcessingId (null);
    }
  }
;
  const handleViewScore = (application: JobApplication) =>: any {
    setSelectedApplication (application),
    setShowScoreDialog (true);
  }
;
  const handleViewApplication = async (application_id: string) => {
    await markApplicationAsViewed (application_id);
  }
;
  const handleScoreUpdated = (updated_application: JobApplication) =>: any {
    refetch ();
  }
;
  // Check condition
if ( {) {
  $2
}
    return <LoadingState />;
  }
  // Check condition
if ( {) {
  $2
}
    return <ErrorState error={error} />;
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyState />;
  }
  return (
    <>;
      <ApplicationsTable;
        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}

      />;


      <ScoreDialog
      <ScoreDialog;
      <ScoreDialog
=======
  }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}

      />;
    </>;
  );
<<<<<<< HEAD
}

      />;
    </>;
      />;
    </>);
}
  ),;}
 import {
  ApplicationsTable;
EmptyState;
ErrorState;
LoadingState;
ScoreDialog interface JobApplicationsTableProps {
  jobId: string 
}export function JobApplicationsTable ({
  jobId 
}: JobApplicationsTableProps) {
  const {
  applications;
isLoading;
error;
updateApplicationStatus;
markApplicationAsViewed;
refetch 
}= useJobApplications (jobId);
const [selectedApplication, setSelectedApplication] = useState<JobApplication | null> (null);
const [showScoreDialog, setShowScoreDialog] = useState (false);
return (<> <ApplicationsTable applications= {
  applications 
}processingId= {
  processingId 
}onViewApplication= {
  handleViewApplication 
}onStatusChange= {
  handleStatusChange 
}onViewScore= {
  handleViewScore 
}/> <ScoreDialog open= {
  showScoreDialog 
}onOpenChange= {
  setShowScoreDialog 
}application= {
  selectedApplication 
}onScoreUpdated= {
  handleScoreUpdated 
}/> </>) 
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
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;
<<<<<<< HEAD

    <>;
      <ApplicationsTable;
        applications={applications}
        processingId={processingId}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}
      />;

      <ScoreDialog;
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selectedApplication}
        onScoreUpdated={handleScoreUpdated}
      />;
    </>;

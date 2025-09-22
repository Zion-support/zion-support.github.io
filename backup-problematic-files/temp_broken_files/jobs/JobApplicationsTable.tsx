
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
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;

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


import {_ApplicationsTable, _EmptyState, _ErrorState, _LoadingState, _ScoreDialog} from "./applications";

interface JobApplicationsTableProps {_jobId: string;}

export function JobApplicationsTable(_{_jobId}: JobApplicationsTableProps) {_const { 
    applications, _isLoading, _error, _updateApplicationStatus, _markApplicationAsViewed, _refetch} = useJobApplications(jobId);

  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  
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
  );
}

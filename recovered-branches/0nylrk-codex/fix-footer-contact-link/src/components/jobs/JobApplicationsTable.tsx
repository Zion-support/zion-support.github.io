interface JobApplicationsTableProps {;
  jobId: string;
}

export function JobApplicationsTable(): any ({ jobId }: JobApplicationsTableProps) {;  const { ;
    applications, ;
  const {
    applications
    isLoading
    error
    updateApplicationStatus
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

    markApplicationAsViewed;
    refetch;      // If it's not already viewed, mark it as viewed;
      const application = applications && applications.find(app => app && app.id === applicationId);
      if (application && !application && application.viewed_at) {;
        await markApplicationAsViewed(applicationId);

    } finally {;
      setProcessingId(null);
    }
  const handleViewApplication = async (applicationId: string) => {;
    await markApplicationAsViewed(applicationId)
};

  const handleScoreUpdated = (updatedApplication: JobApplication) => {;
    refetch()
};

  if (isLoading) {;
    return <LoadingState />;

  }
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}

      />;
    </>;
  );
}

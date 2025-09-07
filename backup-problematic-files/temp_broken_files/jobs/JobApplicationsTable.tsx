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
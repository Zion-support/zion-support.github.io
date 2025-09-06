
  const { ;
    applications, ;
    isLoading, ;
    error, ;
    updateApplicationStatus, ;

    <>;
      <ApplicationsTable;
        applications={applications}
        processing_id={processing_id}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}
      />;

      <ScoreDialog;
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selected_application}
        onScoreUpdated={handleScoreUpdated}
      />;
    </>;


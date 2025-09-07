<Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader>;
          <DialogTitle>Application Match Score</DialogTitle>;
        </DialogHeader>;
        {application && (;

            application={application}
            onScoreUpdated={onScoreUpdated}
          />;
        )}
      </DialogContent>;
    </Dialog>;
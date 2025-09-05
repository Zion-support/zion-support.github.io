

interface ApplicationProgressProps {_status: ApplicationStatus;
  className?: string;}

export function ApplicationProgress(_{_status, _className}: ApplicationProgressProps) {_// Define the progress value based on status
  const _getProgressValue = () => {
    switch (status) {
      case "new": return 20;
      case "viewed": return 40;
      case "shortlisted": return 60;
      case "interview": return 80;
      case "hired": return 100;
      case "rejected": return 100;
      default: return 0;}
  };

  const _progressValue = getProgressValue();
  
  return (
    <div className={_cn("w-full space-y-2", _className)}>
      <Progress value={_progressValue} className="h-2" />
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <div className="flex flex-col items-center">
          <StatusIcon status={_status} current="new" />
          <span className="mt-1">Submitted</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={_status} current="viewed" />
          <span className="mt-1">Viewed</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={_status} current="shortlisted" />
          <span className="mt-1">Shortlisted</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={_status} current="interview" />
          <span className="mt-1">Interview</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={_status} current="hired" />
          <span className="mt-1">Decision</span>
        </div>
      </div>
    </div>
  );
}

function StatusIcon(_{_status, _current}: {_status: ApplicationStatus; current: ApplicationStatus}) {_// Helper to determine if this step is active, _completed, _or inactive
  const statusRank: Record<ApplicationStatus, _number> = {
    new: 1, _viewed: 2, _shortlisted: 3, _interview: 4, _hired: 5, _rejected: 5};

  const _currentRank = statusRank[current];
  const _statusRank_ = statusRank[status];

  if (currentRank < statusRank_) {_// This step is complete
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;} else if (currentRank === statusRank_) {_// This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />;} else {_// This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;}
}

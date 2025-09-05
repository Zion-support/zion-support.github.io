
<<<<<<< HEAD
<<<<<<< HEAD
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",
import { CheckCircle2, Circle, CircleDot } from "lucide-react",
import { cn } from "@/lib/utils",
=======
import { ApplicationStatus } from &quot;@/types/jobs&quot;;
import { Progress } from &quot;@/components/ui/progress&quot;;
import { CheckCircle2, Circle, CircleDot } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ApplicationProgressProps {
  status: ApplicationStatus,
  className?: string
}
=======

interface ApplicationProgressProps {_status: ApplicationStatus;
  className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ApplicationProgress(_{_status, _className}: ApplicationProgressProps) {_// Define the progress value based on status
  const _getProgressValue = () => {
    switch (status) {
<<<<<<< HEAD
<<<<<<< HEAD
      case "new": return 20,
      case "viewed": return 40,
      case "shortlisted": return 60,
      case "interview": return 80,
      case "hired": return 100,
      case "rejected": return 100,
      default: return 0
=======
      case &quot;new&quot;: return 20;
      case &quot;viewed&quot;: return 40;
      case &quot;shortlisted&quot;: return 60;
      case &quot;interview&quot;: return 80;
      case &quot;hired&quot;: return 100;
      case &quot;rejected&quot;: return 100;
      default: return 0;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const progressValue = getProgressValue(),
  
  return (
    <div className={cn(&quot;w-full space-y-2&quot;, className)}>
      <Progress value={progressValue} className=&quot;h-2&quot; />
      
      <div className=&quot;flex justify-between text-xs text-muted-foreground&quot;>
        <div className=&quot;flex flex-col items-center&quot;>
          <StatusIcon status={status} current=&quot;new&quot; />
          <span className=&quot;mt-1&quot;>Submitted</span>
        </div>
        <div className=&quot;flex flex-col items-center&quot;>
          <StatusIcon status={status} current=&quot;viewed&quot; />
          <span className=&quot;mt-1&quot;>Viewed</span>
        </div>
        <div className=&quot;flex flex-col items-center&quot;>
          <StatusIcon status={status} current=&quot;shortlisted&quot; />
          <span className=&quot;mt-1&quot;>Shortlisted</span>
        </div>
        <div className=&quot;flex flex-col items-center&quot;>
          <StatusIcon status={status} current=&quot;interview&quot; />
          <span className=&quot;mt-1&quot;>Interview</span>
        </div>
        <div className=&quot;flex flex-col items-center&quot;>
          <StatusIcon status={status} current=&quot;hired&quot; />
          <span className=&quot;mt-1&quot;>Decision</span>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive
  const statusRank: Record<ApplicationStatus number> = {
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},

  const currentRank = statusRank[current],
  const statusRank_ = statusRank[status],

  if (currentRank < statusRank_) {
    // This step is complete
<<<<<<< HEAD
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
=======
    return <CheckCircle2 className=&quot;h-4 w-4 text-green-500&quot; />;
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className=&quot;h-4 w-4 text-blue-500&quot; />;
  } else {
    // This step is upcoming
    return <Circle className=&quot;h-4 w-4 text-muted-foreground/50&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
function StatusIcon(_{_status, _current}: {_status: ApplicationStatus; current: ApplicationStatus}) {_// Helper to determine if this step is active, _completed, _or inactive
  const statusRank: Record<ApplicationStatus, _number> = {
    new: 1, _viewed: 2, _shortlisted: 3, _interview: 4, _hired: 5, _rejected: 5};

  const _currentRank = statusRank[current];
  const _statusRank_ = statusRank[status];

  if (currentRank < statusRank_) {_// This step is complete
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;} else if (currentRank === statusRank_) {_// This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />;} else {_// This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

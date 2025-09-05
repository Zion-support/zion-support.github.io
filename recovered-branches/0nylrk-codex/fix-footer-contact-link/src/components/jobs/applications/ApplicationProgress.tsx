
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

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
  // Define the progress value based on status
  const getProgressValue = () => {
    switch (status) {
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
        </div>
      </div>
    </div>
  )
}

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
}

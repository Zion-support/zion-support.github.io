
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from "lucide-react",;
import { cn } from "@/lib/utils",;
;
interface ApplicationProgressProps {;
  status:ApplicationStatus,;
  className?:string;
}
;
export function ApplicationProgress({ status, className } ApplicationProgressProps) {;
  // Define the progress value based on status;
  const getProgressValue = () => {;
    switch (status) {;
      case "new":return 20,;
      case "viewed":return 40,;
      case "shortlisted":return 60,;
      case "interview":return 80,;
      case "hired":return 100,;
      case "rejected":return 100,;
      default:return 0;
    }
  },;
;
  const progressValue = getProgressValue(),;
  ;
  return (;
    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;
      ;
      <div className="flex justify-between text-xs text-muted-foreground">;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="new" />;
          <span className="mt-1">Submitted</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="viewed" />;
          <span className="mt-1">Viewed</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="shortlisted" />;
          <span className="mt-1">Shortlisted</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="interview" />;
          <span className="mt-1">Interview</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="hired" />;
          <span className="mt-1">Decision</span>;
        </div>;
      </div>;
    </div>;

}
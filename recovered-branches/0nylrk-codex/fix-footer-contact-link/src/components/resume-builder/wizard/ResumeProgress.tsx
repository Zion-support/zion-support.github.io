
<<<<<<< HEAD
import { Progress } from "@/components/ui/progress",;
import { ResumeProgressProps } from "./types",;
;
export const ResumeProgress = ({ resume, progress } ResumeProgressProps) => {;
  return (;
    <div className="flex flex-col gap-1 w-full sm:w-auto">;
      <div className="flex items-center gap-2">;
        <span className="text-sm text-muted-foreground">Resume completion</span>;
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>;
      </div>;
      <Progress value={progress} className="h-2 w-full sm:w-48" />;
    </div>;
  );
},;
=======
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {
  return (
    <div className=&quot;flex flex-col gap-1 w-full sm:w-auto&quot;>
      <div className=&quot;flex items-center gap-2&quot;>
        <span className=&quot;text-sm text-muted-foreground&quot;>Resume completion</span>
        <span className=&quot;text-sm font-medium&quot;>{progress.toFixed(0)}%</span>
      </div>
      <Progress value={progress} className="h-2 w-full sm: w-48" />
export const _ResumeProgress = (_{_resume, _progress}: ResumeProgressProps) => {_return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Resume completion</span>
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>
      </div>
      <Progress value={_progress} className="h-2 w-full sm:w-48" />
    </div>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

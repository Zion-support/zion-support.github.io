
<<<<<<< HEAD
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",
=======
import { Progress } from &quot;@/components/ui/progress&quot;;
import { ResumeProgressProps } from &quot;./types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {
  return (
    <div className=&quot;flex flex-col gap-1 w-full sm:w-auto&quot;>
      <div className=&quot;flex items-center gap-2&quot;>
        <span className=&quot;text-sm text-muted-foreground&quot;>Resume completion</span>
        <span className=&quot;text-sm font-medium&quot;>{progress.toFixed(0)}%</span>
      </div>
<<<<<<< HEAD
      <Progress value={progress} className="h-2 w-full sm: w-48" />
=======
      <Progress value={progress} className=&quot;h-2 w-full sm:w-48&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    </div>
  )
},

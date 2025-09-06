
<<<<<<< HEAD
=======
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
},; export const ResumeProgress = ({
  resume, progress 
}: ResumeProgressProps) => {
  return (<div className="flex flex-col gap-1 w-full sm:w-auto" > <div className="flex items-center gap-2" > <span className="text-sm text-muted-foreground" >Resume completion</span> <span className="text-sm font-medium" > {
  progress.toFixed (0) 
}%</span> </div> 
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

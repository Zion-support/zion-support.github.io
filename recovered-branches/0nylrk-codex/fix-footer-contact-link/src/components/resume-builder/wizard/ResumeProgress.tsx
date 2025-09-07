import { Progress } from \"@/components/ui/progress\";
import { ResumeProgressProps } from \"./types\";
export const ResumeProgress = (
  return (
    <div className=\"flex flex-col gap-1 w-full sm:w-auto\" />
      <div className=\"flex items-center gap-2\" />
        <span className=\"text-sm text-muted-foreground\" />Resume completion</span>) => {
  return $3;}
}
        <span className=\"text-sm font-medium\" />{progress.toFixed(0)}%</span>
      </div>
      <Progress value={progress} className=\"h-2 w-full sm: w-48\" />
    </div>
  );
};
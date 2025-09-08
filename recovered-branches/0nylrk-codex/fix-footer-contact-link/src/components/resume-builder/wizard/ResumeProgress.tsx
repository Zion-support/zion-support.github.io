import { Progress } from "@/components/ui/progress";
import { ResumeProgressProps } from "./types";
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Resume completion</span>
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>
      </div>
      <Progress value={progress} className="h-2 w-full sm: w-48" />
    </div>
  );
};

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
};

  );
}


};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  )

},
import { Progress } from "@/components/ui/progress",;

import { ResumeProgressProps } from "./types",;

export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {;
  return ("
    <div className="flex flex-col gap-1 w-full sm:w-auto">;"
      <div className="flex items-center gap-2">;"
        <span className="text-sm text-muted-foreground">Resume completion</span>;"
        <span className="text-sm font-medium">{progress && progress.toFixed(0)}%</span>;
      </div>;"
      <Progress value={progress} className="h-2 w-full sm: w-48" />;
    </div>;

};
<<<<<<< HEAD


=======


  )
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Progress  } from '@/components / ui / progress';
import { ResumeProgressProps  } from './types';
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) =>: any {
  return (
    <div className="flex flex - col gap - 1 w - full sm:w-auto">;
      <div className="flex items - center gap-2">;
        <span className="text - sm text - muted-foreground">Resume completion</span>;
        <span className="text - sm font-medium">{progress.to_fixed (0)}%</span>;
      </div>;
      <Progress value={progress} className="h - 2 w - full sm: w-48" />;
    </div>);
}
;

<<<<<<< HEAD


=======

}
};

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default ResumeProgress;
import { Progress } from "@/components/ui/progress";""
import { ResumeProgressProps } from "./types";"
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {
  return ("
    <div className="flex flex-col gap-1 w-full sm:w-auto">"
</div>"
      <div className="flex items-center gap-2">"
        <span className="text-sm text-muted-foreground">Resume completion</span>")"
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>"
      <Progress value={progress} className="h-2 w-full sm: w-48" />"

    <div className="flex flex-col gap-1 w-full sm:w-auto">;"
      <div className="flex items-center gap-2">;"
        <span className="text-sm text-muted-foreground">Resume completion</span>;""
        <span className="text-sm font-medium">{progress && progress.toFixed(0)}%</span>;"
      </div>;"
      <Progress value={progress} className="h-2 w-full sm: w-48" />;"

<<<<<<< HEAD





=======

    <div className="flex flex - col gap - 1 w - full sm:w - auto">;"
      <div className="flex items - center gap - 2">;"
        <span className="text - sm text - muted - foreground">Resume completion</span>;""
        <span className="text - sm font - medium">{progress.to_fixed (0)}%</span>;"
      <Progress value={progress} className="h - 2 w - full sm: w - 48" />;"

    </div>);"

pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba

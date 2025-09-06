<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { Progress } from "@/components/ui/progress";
import { ResumeProgressProps } from "./types";
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Resume completion</span>
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>
      </div>
      <Progress value={progress} className="h-2 w-full sm: w-48" />
    </div>
<<<<<<< HEAD

import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======

};

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
  );
};

  );
}

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )
},
import { Progress } from "@/components/ui/progress",;
import { ResumeProgressProps } from "./types",;

export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {;
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">;
      <div className="flex items-center gap-2">;
        <span className="text-sm text-muted-foreground">Resume completion</span>;
        <span className="text-sm font-medium">{progress && progress.toFixed(0)}%</span>;
      </div>;
      <Progress value={progress} className="h-2 w-full sm: w-48" />;
    </div>;
  );
};
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Progress  } from '@/components / ui / progress';
import { ResumeProgressProps  } from './types';
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) =>: any {
  return (
    <div className="flex flex - col gap - 1 w - full sm:w - auto">;
      <div className="flex items - center gap - 2">;
        <span className="text - sm text - muted - foreground">Resume completion</span>;
        <span className="text - sm font - medium">{progress.to_fixed (0)}%</span>;
      </div>;
      <Progress value={progress} className="h - 2 w - full sm: w - 48" />;
    </div>);
}
;
<<<<<<< HEAD
=======

export default ResumeProgress;



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
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}
};

export default ResumeProgress;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

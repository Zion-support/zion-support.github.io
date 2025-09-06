
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

  );

=======

import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======

};

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
export default ResumeProgress;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
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

=======

export default ResumeProgress;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

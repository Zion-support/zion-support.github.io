
<<<<<<< HEAD
<<<<<<< HEAD
import { Progress } from "@/components/ui/progress";
import { ResumeProgressProps } from "./types";

=======
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}

import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======

};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

export default ResumeProgress;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export default ResumeProgress;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

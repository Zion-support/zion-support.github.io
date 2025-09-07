<<<<<<< HEAD
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
interface ApplicationProgressProps {
  status: ApplicationStatus,
  className?: string
}

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
  // Define the progress value based on status
  const getProgressValue = $2;
=======
import { ApplicationStatus } from "@/types/jobs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",

import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
interface ApplicationProgressProps {

  status: ApplicationStatus;

}

<<<<<<< HEAD
import { ApplicationStatus } from "@/types/jobs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
interface ApplicationProgressProps {
  status: ApplicationStatus;
  className?: string
}
export function ApplicationProgress({
  status
  className
}: ApplicationProgressProps) {
import { CheckCircle2, Circle, CircleDot } from "lucide-react",
import { cn } from "@/lib/utils",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ApplicationProgressProps {
  status: ApplicationStatus,
  className?: string
}

<<<<<<< HEAD
=======
export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Define the progress value based on status

  const getProgressValue = () => {
    switch (status) {

    }

export function ApplicationProgress(): any ({;
  status,;
  className,;
}: ApplicationProgressProps) {;
<<<<<<< HEAD

  // Define the progress value based on status;

=======
  // Define the progress value based on status;
  const getProgressValue = () => {;
    switch (status) {;
      case "new":;
import { ApplicationStatus  } from '@/types / jobs';
import { Progress  } from '@/components / ui / progress';
import { CheckCircle2, Circle, CircleDot  } from './lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { cn  } from '@/lib / utils';

  status: ApplicationStatus;
  class_name?: string;

}

 * ApplicationProgress - Function description;
 */
function ApplicationProgress() {}
  // Define the progress value based on status;
  const getProgressValue = () =>: any {}
    switch (status) {"
      case "new":;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return 20;

      case "viewed":;
        return 40;"
      case "shortlisted":;
        return 60;"
      case "interview":;
        return 80;"
      case "hired":;
        return 100;"

      case "rejected":;
        return 100;
      default:;
        return 0;
<<<<<<< HEAD
=======
    }
  }
<<<<<<< HEAD
      case "new":;
        return 20;
      case "viewed":
        return 40;
      case "shortlisted":
        return 60;
      case "interview":
        return 80;
      case "hired":
        return 100;
      case "rejected":
        return 100;
      default:
        return 0;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        return 20;
      case "viewed":
        return 40;
      case "shortlisted":
        return 60;
      case "interview":
        return 80;
      case "hired":
        return 100;
      case "rejected":
        return 100;
      default:
        return 0;

<<<<<<< HEAD
      <div className="flex justify-between text-xs text-muted-foreground">

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      case "new": return 20,
>>>>>>> merged-prs-20250907-203621
      case "viewed": return 40,
      case "shortlisted": return 60,
      case "interview": return 80,
      case "hired": return 100,
      case "rejected": return 100,
      default: return 0
<<<<<<< HEAD
    }
  },

  const progressValue = getProgressValue($2);
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="new" />
          <span className="mt-1">Submitted</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="viewed" />
          <span className="mt-1">Viewed</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="shortlisted" />
          <span className="mt-1">Shortlisted</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="interview" />
          <span className="mt-1">Interview</span>
        </div>
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="hired" />
=======
<<<<<<< HEAD
    }
  }
  const progressValue = getProgressValue();
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
=======

    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  const progressValue = getProgressValue(),
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
<<<<<<< HEAD
      
      
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="flex justify-between text-xs text-muted-foreground">

        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="new" />

          <span className="mt-1">Submitted</span>
        </div>"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="viewed" />"
          <span className="mt-1">Viewed</span>
        </div>"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="shortlisted" />"
          <span className="mt-1">Shortlisted</span>
        </div>"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="interview" />"
          <span className="mt-1">Interview</span>
        </div>"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="hired" />"
>>>>>>> merged-prs-20250907-203621
          <span className="mt-1">Decision</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD

  )
}

<<<<<<< HEAD
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus}) {
  // Helper to determine if this step is active, completed, or inactive
  const statusRank: Record<ApplicationStatus, number> = {
=======
=======
<<<<<<< HEAD



  )
}
function StatusIcon({
  status
  current
}: {
  status: ApplicationStatus;
  current: ApplicationStatus;
}) {
  // Helper to determine if this step is active, completed, or inactive
  const statusRank: Record<ApplicationStatus, number> = {
    new: 1
    viewed: 2
    shortlisted: 3
    interview: 4
    hired: 5
    rejected: 5
  }
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];
=======
  );
}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive
  const statusRank: Record<ApplicationStatus number> = {
>>>>>>> merged-prs-20250907-203621
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},
<<<<<<< HEAD

  const currentRank = $2;
  const statusRank_ = $2;
  if (currentRank < statusRank_) {
    // This step is complete
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
  }
}
=======

  const currentRank = statusRank[current],
  const statusRank_ = statusRank[status],
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  if (currentRank < statusRank_) {
    // This step is complete
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
    // This step is upcoming
<<<<<<< HEAD
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from "lucide-react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { cn } from "@/lib/utils",;
interface ApplicationProgressProps {;
  status: ApplicationStatus,;
  className?: string;
}
;
<<<<<<< HEAD
export function ApplicationProgress() {;
  // Define the progress value based on status;
  }
    }
    switch (status) {;
      }
      case "new": return 20,;"
      case "viewed": return 40,;"
      case "shortlisted": return 60,;"
      case "interview": return 80,;"
      case "hired": return 100,;"
      case "rejected": return 100,;"
      "default": return 0;
=======
export function ApplicationProgress() { return null; }
>>>>>>> origin/chore/fix-lint-and-merge
    }
  },;
  const progressValue = getProgressValue(),;
  return (;
<<<<<<< HEAD
    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;

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
    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;
=======

<<<<<<< HEAD
=======
    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="flex justify-between text-xs text-muted-foreground">;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="new" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <span className="mt-1">Submitted</span>;
        </div>;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="viewed" />;"
          <span className="mt-1">Viewed</span>;
        </div>;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="shortlisted" />;"
          <span className="mt-1">Shortlisted</span>;
        </div>;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="interview" />;"
          <span className="mt-1">Interview</span>;
        </div>;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="hired" />;"
          <span className="mt-1">Decision</span>;
        </div>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus number> = {;
=======

<<<<<<< HEAD
=======
function StatusIcon(): any ({;
  status,;
  current,;
}: {;
  status: ApplicationStatus;
  current: ApplicationStatus;
}) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus, number> = {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    new: 1,;
    viewed: 2,;
    shortlisted: 3,;
    interview: 4,;
    hired: 5,;
<<<<<<< HEAD
    rejected: 5},;
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];
=======
    rejected: 5,;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (currentRank < statusRank_) {;

    return <CheckCircle2 className="h-4 w-4 text-green-500" />;
  } else if (currentRank === statusRank_) {;
    // This is the current step;"
    return <CircleDot className="h-4 w-4 text-blue-500" />;
  } else {;
    // This step is upcoming;"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
<<<<<<< HEAD

=======
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const progress_value = getProgressValue ();
;
  return (
    <div className={cn ("w - full space - y-2", class_name)}>;
      <Progress value={progress_value} className="h - 2" />;
      <div className="flex justify - between text - xs text - muted - foreground">;
        <div className="flex flex - col items - center">;
          <StatusIcon status={status} current="new" />;
          <span className="mt - 1">Submitted</span>;
        </div>;
        <div className="flex flex - col items - center">;
          <StatusIcon status={status} current="viewed" />;
          <span className="mt - 1">Viewed</span>;
        </div>;
        <div className="flex flex - col items - center">;
          <StatusIcon status={status} current="shortlisted" />;
          <span className="mt - 1">Shortlisted</span>;
        </div>;
        <div className="flex flex - col items - center">;
          <StatusIcon status={status} current="interview" />;
          <span className="mt - 1">Interview</span>;
        </div>;
        <div className="flex flex - col items - center">;
          <StatusIcon status={status} current="hired" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <span className="mt - 1">Decision</span>;
        </div>;
      </div>;
    </div>);
}
/**

    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
  }}
    rejected: 5,
;
  const current_rank = status_rank[current];
  const statusRank_ = status_rank[status];

if ( {) {
  $2
}
    // This step is complete;
    return <CheckCircle2 className="h - 4 w - 4 text - green - 500" />;
  } else // Check condition
if ( {) {
  $2
}
    // This is the current step;
    return <CircleDot className="h - 4 w - 4 text - blue - 500" />;
  } else {
    // This step is upcoming;
    return <Circle className="h - 4 w - 4 text - muted - foreground / 50" />;
  }
<<<<<<< HEAD

}

}
;
}
;

  ),;
}
;

=======
}
;

<<<<<<< HEAD
  ),;
}
;
function StatusIcon({ status, current } { status:ApplicationStatus, current:ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank:Record<ApplicationStatus number> = {;
    new:1,;
    viewed:2,;
    shortlisted:3,;
    interview:4,;
    hired:5,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    rejected:5},;
;
  const currentRank = statusRank[current],;
  const statusRank_ = statusRank[status],;
;
  if (currentRank < statusRank_) {;
<<<<<<< HEAD

=======
    // This step is complete;
    return <CheckCircle2 className="h-4 w-4 text-green-500" />,;
  } else if (currentRank === statusRank_) {;
    // This is the current step;
    return <CircleDot className="h-4 w-4 text-blue-500" />,;
  } else {;
    // This step is upcoming;
    return <Circle className="h-4 w-4 text-muted-foreground/50" />,;
  } interface ApplicationProgressProps {
  status: ApplicationStatus;
className?: string 
}status, className 
}: ApplicationProgressProps) {
  //Define the progress value based on status const getProgressValue = () => {
  switch (status) {
  
}
};
const progressValue = getProgressValue ();
return (<div className= {
  cn ("w-full space-y-2", className) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}> <Progress value= {
  progressValue 
}className="h-2" /> <div className="flex justify-between text-xs text-muted-foreground" > <div className="flex flex-col items-center" > <StatusIcon status= {
  status 
}current="new" /> <span className="mt-1" >Submitted</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {
  status 
}current="viewed" /> <span className="mt-1" >Viewed</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {
  status 
}current="shortlisted" /> <span className="mt-1" >Shortlisted</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {
  status 
}current="interview" /> <span className="mt-1" >Interview</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {
  status 
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}current="hired" /> <span className="mt-1" >Decision</span> 
}
}
}
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

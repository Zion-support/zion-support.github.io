<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ApplicationStatus } from "@/types/jobs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",
=======
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
interface ApplicationProgressProps {
=======


import { ApplicationStatus } from "@/types/jobs","
import { Progress } from "@/components/ui/progress",";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";"
import { cn } from "@/lib/utils";
interface ApplicationProgressProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  status: ApplicationStatus;
<<<<<<< HEAD
  className?: string;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
<<<<<<< HEAD
export function ApplicationProgress({
  status
  className
}: ApplicationProgressProps) {
<<<<<<< HEAD
import { CheckCircle2, Circle, CircleDot } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { cn } from "@/lib/utils",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ApplicationProgressProps {
  status: ApplicationStatus,
  className?: string
}
<<<<<<< HEAD
<<<<<<< HEAD

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Define the progress value based on status
=======

import { CheckCircle2, Circle, CircleDot } from "lucide-react",;
import { cn } from "@/lib/utils",  // Define the progress value based on status
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  const getProgressValue = () => {
    switch (status) {
<<<<<<< HEAD
=======
export function ApplicationProgress() { return null; }
import { CheckCircle2, Circle, CircleDot } from "lucide-react","
import { cn } from "@/lib/utils",

<<<<<<< HEAD
interface ApplicationProgressProps {}
  status: ApplicationStatus,;
  className?: string;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    }

=======
<<<<<<< HEAD

=======
import { cn } from "@/lib/utils",  // Define the progress value based on status
=======

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {

  // Define the progress value based on status
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const getProgressValue = () => {
    switch (status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { cn } from "@/lib/utils",  // Define the progress value based on status

  const getProgressValue = () => {
    switch (status) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ApplicationProgress(): any ({;
  status,;
  className,;
}: ApplicationProgressProps) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Define the progress value based on status;
<<<<<<< HEAD
  const getProgressValue = () => {;
    switch (status) {;
      case "new":;


import { ApplicationStatus } from "@/types/jobs",""
import { Progress } from "@/components/ui/progress",""
import { CheckCircle2, Circle, CircleDot } from "lucide-react";""
import { cn } from "@/lib/utils";"
interface ApplicationProgressProps {
  // TODO: Implement
}
  status: ApplicationStatus;
  className?: string;
export function ApplicationProgress({
  status;
  className;)
}: ApplicationProgressProps) {"
import { CheckCircle2, Circle, CircleDot } from "lucide-react",""
import { cn } from "@/lib/utils","
  // TODO: Implement
  status: ApplicationStatus,

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {

  // Define the progress value based on status;
  const getProgressValue = () => {

    switch (status) {
export function ApplicationProgress(): any ({;
  status,;

  className,;)
}: ApplicationProgressProps) {;
  // Define the progress value based on status;
  const getProgressValue = () => {;
    switch (status) {;"
      case "new":;""
pr-12325
import { ApplicationStatus  } from '@/types / jobs';
import { Progress  } from '@/components / ui / progress';
import { CheckCircle2, Circle, CircleDot  } from './lucide-react';
=======
  const getProgressValue = () => {}
    switch (status) {}
import { ApplicationStatus  } from '@/types / jobs';'
import { Progress  } from '@/components / ui / progress';'
import { CheckCircle2, Circle, CircleDot  } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn  } from '@/lib / utils';
<<<<<<< HEAD
interface ApplicationProgressProps {}
=======
interface ApplicationProgressProps {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  status: ApplicationStatus;
  class_name?: string;

}
<<<<<<< HEAD
export /**;
=======
export /**
 * ApplicationProgress - Function description
  // TODO: Implement
  class_name?: string;
export /**
 * ApplicationProgress - Function description;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
 * ApplicationProgress - Function description;
 */
function ApplicationProgress() {}
  // Define the progress value based on status;
  const getProgressValue = () =>: any {}
    switch (status) {"
      case "new":;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        return 20;
=======



        return 20;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case "viewed":;
        return 40;"
      case "shortlisted":;
        return 60;"
      case "interview":;
        return 80;"
      case "hired":;
        return 100;"
=======
        return 20;
      case "viewed":;
        return 40;
      case "shortlisted":;
        return 60;
      case "interview":;
        return 80;
      case "hired":;
        return 100;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case "rejected":;
        return 100;
      default:;
        return 0;
<<<<<<< HEAD


<<<<<<< HEAD
=======
      case "new":;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    }
  }

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      case "new": return 20,
      case "viewed": return 40,
      case "shortlisted": return 60,
      case "interview": return 80,
      case "hired": return 100,
      case "rejected": return 100,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      default: return 0
<<<<<<< HEAD
<<<<<<< HEAD

    }

=======
    }
  }
  const progressValue = getProgressValue();
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
      case "new": return 20,"
      case "viewed": return 40,"
      case "shortlisted": return 60,"
      case "interview": return 80,"
      case "hired": return 100,"
      case "rejected": return 100,
      default: return 0;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      default: return 0

    }

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },

  const progressValue = getProgressValue(),
  
<<<<<<< HEAD
  return ("
    <div className={cn("w-full space-y-2", className)}>"
      <Progress value={progressValue} className="h-2" />
<<<<<<< HEAD
<<<<<<< HEAD
      
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="flex justify-between text-xs text-muted-foreground">
=======
      default: return 0      <div className="flex justify-between text-xs text-muted-foreground">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      default: return 0      <div className="flex justify-between text-xs text-muted-foreground">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
}
  }
  const progressValue = getProgressValue();
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
  },

  const progressValue = getProgressValue(),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />

      <div className="flex justify-between text-xs text-muted-foreground">
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      default: return 0      <div className="flex justify-between text-xs text-muted-foreground">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="new" />
=======


"
      <div className="flex justify-between text-xs text-muted-foreground">"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="new" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
          <span className="mt-1">Decision</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======




  )
}
<<<<<<< HEAD
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];

    }
  }
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive
  const statusRank: Record<ApplicationStatus number> = {

  // TODO: Implement
      case "new":;"
        return 20;"
      case "viewed":;"
        return 40;"
      case "shortlisted":;"
        return 60;"
      case "interview":;"
        return 80;"
      case "hired":;"
        return 100;"
      case "rejected":;"
        return 100;
      default:;
        return 0;

"
      case "new": return 20,""
      case "viewed": return 40,""
      case "shortlisted": return 60,""
      case "interview": return 80,""
      case "hired": return 100,""
      case "rejected": return 100,"
      default: return 0;

  },

  const progressValue = getProgressValue(),
  return ()"
    <div className={cn("w-full space-y-2", className)}>"
</div>"
      <Progress value={progressValue} className="h-2" />"
      <div className="flex justify-between text-xs text-muted-foreground">"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="new" />"
          <span className="mt-1">Submitted</span>"
          <StatusIcon status={status} current="viewed" />"
          <span className="mt-1">Viewed</span>"
          <StatusIcon status={status} current="shortlisted" />"
          <span className="mt-1">Shortlisted</span>"
          <StatusIcon status={status} current="interview" />"
          <span className="mt-1">Interview</span>"
          <StatusIcon status={status} current="hired" />"
          <span className="mt-1">Decision</span>"
        </div>
  const statusRank: Record<ApplicationStatus, number> = {

  const statusRank: Record<ApplicationStatus number> = {

  if (currentRank < statusRank_) {
    // This step is complete;"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />"
</CheckCircle2>"
    return <CircleDot className="h-4 w-4 text-blue-500" />"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />"
    <div className={cn("w-full space-y-2", className)}>;"
      <Progress value={progressValue} className="h-2" />;"
      <div className="flex justify-between text-xs text-muted-foreground">;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="new" />;"
          <span className="mt-1">Submitted</span>;"
        </div>;"
          <StatusIcon status={status} current="viewed" />;"
          <span className="mt-1">Viewed</span>;"
          <StatusIcon status={status} current="shortlisted" />;"
          <span className="mt-1">Shortlisted</span>;"
          <StatusIcon status={status} current="interview" />;"
          <span className="mt-1">Interview</span>;"
          <StatusIcon status={status} current="hired" />;"
          <span className="mt-1">Decision</span>;"
        </div>;
  const statusRank: Record<ApplicationStatus, number> = {;

  if (currentRank < statusRank_) {;
    // This step is complete;"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;"
    return <CircleDot className="h-4 w-4 text-blue-500" />;"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;"
    <div className={cn ("w - full space - y-2", class_name)}>;"
      <Progress value={progress_value} className="h - 2" />;"
      <div className="flex justify - between text - xs text - muted - foreground">;"
        <div className="flex flex - col items - center">;"
          <span className="mt - 1">Submitted</span>;"
          <span className="mt - 1">Viewed</span>;"
          <span className="mt - 1">Shortlisted</span>;"
          <span className="mt - 1">Interview</span>;"
          <span className="mt - 1">Decision</span>;"
    </div>);
  const status_rank: Record < ApplicationStatus, number> = {
pr-12325
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},

  const currentRank = statusRank[current],
  const statusRank_ = statusRank[status],

  if (currentRank < statusRank_) {
    // This step is complete
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
    // This step is upcoming

return <Circle className="h-4 w-4 text-muted-foreground/50" />;
  }
}
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from "lucide-react",;
=======




  )
}


  if (currentRank < statusRank_) {}
    // This step is complete"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {}
    // This is the current step"
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {}
    // This step is upcoming;
"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />"
import { ApplicationStatus } from "@/types/jobs",;"
import { Progress } from "@/components/ui/progress",;"
import { CheckCircle2, Circle, CircleDot } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils",;
interface ApplicationProgressProps {;
  status: ApplicationStatus,;
  className?: string;
}
;
export function ApplicationProgress() { return null; }
    }
  },;
  const progressValue = getProgressValue(),;
  return (;
<<<<<<< HEAD

    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;

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
      <div className="flex justify-between text-xs text-muted-foreground">;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="new" />;
=======
"
      <div className="flex justify-between text-xs text-muted-foreground">;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="new" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
function StatusIcon(): any ({;
  status,;
  current,;
}: {;
  status: ApplicationStatus;
  current: ApplicationStatus;
}) {;
  // Helper to determine if this step is active, completed, or inactive;
<<<<<<< HEAD
  const statusRank: Record<ApplicationStatus, number> = {;    new: 1,;
=======
    new: 1,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const statusRank: Record<ApplicationStatus, number> = {;
;
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus number> = {;
    new: 1,;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const statusRank: Record<ApplicationStatus, number> = {;    new: 1,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    viewed: 2,;
    shortlisted: 3,;
    interview: 4,;
    hired: 5,;
<<<<<<< HEAD
<<<<<<< HEAD
    rejected: 5,
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    rejected: 5},;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
    rejected: 5,;
  };

<<<<<<< HEAD
    rejected: 5},;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
rejected: 5},;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    rejected: 5,
};

  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


    }
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];

  if (currentRank < statusRank_) {;
<<<<<<< HEAD
    // This step is complete;"
=======
    // This step is complete;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;
  } else if (currentRank === statusRank_) {;
    // This is the current step;"
    return <CircleDot className="h-4 w-4 text-blue-500" />;
  } else {;
    // This step is upcoming;"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }



;
  const progress_value = getProgressValue ();
;
  return ("
    <div className={cn ("w - full space - y-2", class_name)}>;"
      <Progress value={progress_value} className="h - 2" />;"
      <div className="flex justify - between text - xs text - muted - foreground">;"
        <div className="flex flex - col items - center">;"
          <StatusIcon status={status} current="new" />;"
          <span className="mt - 1">Submitted</span>;
        </div>;"
        <div className="flex flex - col items - center">;"
          <StatusIcon status={status} current="viewed" />;"
          <span className="mt - 1">Viewed</span>;
        </div>;"
        <div className="flex flex - col items - center">;"
          <StatusIcon status={status} current="shortlisted" />;"
          <span className="mt - 1">Shortlisted</span>;
        </div>;"
        <div className="flex flex - col items - center">;"
          <StatusIcon status={status} current="interview" />;"
          <span className="mt - 1">Interview</span>;
        </div>;"
        <div className="flex flex - col items - center">;"
          <StatusIcon status={status} current="hired" />;"
=======
  }

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <span className="mt - 1">Decision</span>;
        </div>;
      </div>;
    </div>);
}
/**
<<<<<<< HEAD
 * StatusIcon - Function description;
 */
function StatusIcon() {}
  // Helper to determine if this step is active, completed, or inactive;
  const status_rank: Record < ApplicationStatus, number> = {}
=======
 * StatusIcon - Function description
 */
function StatusIcon() {
  // Helper to determine if this step is active, completed, or inactive;
  const status_rank: Record < ApplicationStatus, number> = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    // This step is complete;"
    return <CheckCircle2 className="h - 4 w - 4 text - green - 500" />;
  } else // Check condition;
if ( {) {}
  $2;
}
    // This is the current step;"
    return <CircleDot className="h - 4 w - 4 text - blue - 500" />;
  } else {}
    // This step is upcoming;"
    return <Circle className="h - 4 w - 4 text - muted - foreground / 50" />;
  }

<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
}
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
  // Check condition
=======
  // Check condition;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
}
;

  ),;
}
;
<<<<<<< HEAD
function StatusIcon() { return null; }
=======
function StatusIcon({ status, current } { status:ApplicationStatus, current:ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  $2;
    // This step is complete;"
    return <CheckCircle2 className="h - 4 w - 4 text - green - 500" />;"
    return <CircleDot className="h - 4 w - 4 text - blue - 500" />;"
    return <Circle className="h - 4 w - 4 text - muted - foreground / 50" />;"

  const statusRank:Record<ApplicationStatus number> = {;
<<<<<<< HEAD
    new:1,;
    viewed:2,;
    shortlisted:3,;
    interview:4,;
    hired:5,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    rejected:5},;
;
  const currentRank = statusRank[current],;
  const statusRank_ = statusRank[status],;
;
  if (currentRank < statusRank_) {;
<<<<<<< HEAD
    // This step is complete;"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />,;
  } else if (currentRank === statusRank_) {;
    // This is the current step;"
    return <CircleDot className="h-4 w-4 text-blue-500" />,;
  } else {;
    // This step is upcoming;"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />,;
  } interface ApplicationProgressProps {}
  status: ApplicationStatus;
className?: string;
}status, className;
}: ApplicationProgressProps) {}
  //Define the progress value based on status const getProgressValue = () => {}
  switch (status) {}
}
};
const progressValue = getProgressValue ();
return (<div className= {"
  cn ("w-full space-y-2", className) 
}> <Progress value= {}
  progressValue "
}className="h-2" /> <div className="flex justify-between text-xs text-muted-foreground" > <div className="flex flex-col items-center" > <StatusIcon status= {}
  status "
}current="new" /> <span className="mt-1" >Submitted</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {}
  status "
}current="viewed" /> <span className="mt-1" >Viewed</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {}
  status "
}current="shortlisted" /> <span className="mt-1" >Shortlisted</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {}
  status "
}current="interview" /> <span className="mt-1" >Interview</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {}
  status "
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
=======

    // This step is complete;"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />,;"
    return <CircleDot className="h-4 w-4 text-blue-500" />,;"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />,;"

return (<div className= {)"
  cn ("w-full space-y-2", className)"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}current="hired" /> <span className="mt-1" >Decision</span> 
}
}
}
}
;
<<<<<<< HEAD


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}className="h-2" /> <div className="flex justify-between text-xs text-muted-foreground" > <div className="flex flex-col items-center" > <StatusIcon status= {"
}current="new" /> <span className="mt-1" >Submitted</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {"
  status;"
}current="viewed" /> <span className="mt-1" >Viewed</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {"
}current="shortlisted" /> <span className="mt-1" >Shortlisted</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {"
}current="interview" /> <span className="mt-1" >Interview</span> </div> <div className="flex flex-col items-center" > <StatusIcon status= {"
}current="hired" /> <span className="mt-1" >Decision</span>""
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

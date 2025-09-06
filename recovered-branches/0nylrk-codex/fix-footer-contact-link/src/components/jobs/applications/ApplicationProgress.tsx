
<<<<<<< HEAD


<<<<<<< HEAD
=======
import { ApplicationStatus } from "@/types/jobs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ApplicationProgressProps {
  status: ApplicationStatus,
  className?: string
}
<<<<<<< HEAD

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Define the progress value based on status

  const getProgressValue = () => {
    switch (status) {
<<<<<<< HEAD


export function ApplicationProgress(): any ({;
  status,;
  className,;
}: ApplicationProgressProps) {;
  // Define the progress value based on status;
  const getProgressValue = () => {;
    switch (status) {;
      case "new":;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { ApplicationStatus  } from '@/types / jobs';
import { Progress  } from '@/components / ui / progress';
import { CheckCircle2, Circle, CircleDot  } from './lucide-react';
import { cn  } from '@/lib / utils';
interface ApplicationProgressProps {
  status: ApplicationStatus;
  class_name?: string;
}
export /**
 * ApplicationProgress - Function description
 */
function ApplicationProgress() {
  // Define the progress value based on status;
  const getProgressValue = () =>: any {
    switch (status) {
      case "new":;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        return 20;
      case "viewed":;
        return 40;
      case "shortlisted":;
        return 60;
      case "interview":;
        return 80;
      case "hired":;
        return 100;
      case "rejected":;
        return 100;
      default:;
        return 0;
<<<<<<< HEAD
    }
  }
<<<<<<< HEAD


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      case "new": return 20,
      case "viewed": return 40,
      case "shortlisted": return 60,
      case "interview": return 80,
      case "hired": return 100,
      case "rejected": return 100,
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
  },

  const progressValue = getProgressValue(),
  
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          <span className="mt-1">Decision</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}

=======

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



  )
}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive
  const statusRank: Record<ApplicationStatus number> = {
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},

  const currentRank = statusRank[current],
  const statusRank_ = statusRank[status],
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (currentRank < statusRank_) {
    // This step is complete
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
    // This step is upcoming
<<<<<<< HEAD

=======
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from "lucide-react",;
import { cn } from "@/lib/utils",;
interface ApplicationProgressProps {;
  status: ApplicationStatus,;
  className?: string;
}
;
export function ApplicationProgress({ status, className }: ApplicationProgressProps) {;
  // Define the progress value based on status;
  const getProgressValue = () => {;
    switch (status) {;
      case "new": return 20,;
      case "viewed": return 40,;
      case "shortlisted": return 60,;
      case "interview": return 80,;
      case "hired": return 100,;
      case "rejected": return 100,;
      default: return 0;
    }
  },;
  const progressValue = getProgressValue(),;
  return (;
<<<<<<< HEAD

    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="flex justify-between text-xs text-muted-foreground">;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="new" />;
          <span className="mt-1">Submitted</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="viewed" />;
          <span className="mt-1">Viewed</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="shortlisted" />;
          <span className="mt-1">Shortlisted</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="interview" />;
          <span className="mt-1">Interview</span>;
        </div>;
        <div className="flex flex-col items-center">;
          <StatusIcon status={status} current="hired" />;
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
  const statusRank: Record<ApplicationStatus, number> = {;
=======
;
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus number> = {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    new: 1,;
    viewed: 2,;
    shortlisted: 3,;
    interview: 4,;
    hired: 5,;
<<<<<<< HEAD
    rejected: 5,;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    rejected: 5},;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];

  if (currentRank < statusRank_) {;
    // This step is complete;
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;
  } else if (currentRank === statusRank_) {;
    // This is the current step;
    return <CircleDot className="h-4 w-4 text-blue-500" />;
  } else {;
    // This step is upcoming;
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          <span className="mt - 1">Decision</span>;
        </div>;
      </div>;
    </div>);
}
/**
 * StatusIcon - Function description
 */
function StatusIcon() {
  // Helper to determine if this step is active, completed, or inactive;
  const status_rank: Record < ApplicationStatus, number> = {
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5,
  }
;
  const current_rank = status_rank[current];
  const statusRank_ = status_rank[status];
;
  // Check condition
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
<<<<<<< HEAD

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
;

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
    rejected:5},;
;
  const currentRank = statusRank[current],;
  const statusRank_ = statusRank[status],;
;
  if (currentRank < statusRank_) {;
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
}current="hired" /> <span className="mt-1" >Decision</span> 
}
}
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

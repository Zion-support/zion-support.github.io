<<<<<<< HEAD
<<<<<<< HEAD

import { ApplicationStatus } from "@/types/jobs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils"
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress";
interface ApplicationProgressProps {
import { ApplicationStatus } from "@/types/jobs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils"
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ApplicationProgressProps {

  status: ApplicationStatus

  className?: string
}
export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
  // Define the progress value based on status

  const getProgressValue = () => {
import { ApplicationStatus  } from '@/types / jobs';
import { Progress  } from '@/components / ui / progress';
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn  } from '@/lib / utils';
interface ApplicationProgressProps {
  status: ApplicationStatus,
  class_name?: string;
}
export /**
 * ApplicationProgress - Function description
 */
function ApplicationProgress() {
  // Define the progress value based on status;
  const getProgressValue = () =>: any {
    switch (status) {
      case "new": return 20
      case "viewed": return 40
      case "shortlisted": return 60
      case "interview": return 80
      case "hired": return 100
      case "rejected": return 100
      default: return 0
    }
  }
  const progressValue = getProgressValue()
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
      case "new": return 20,
      case "viewed": return 40,
      case "shortlisted": return 60,
      case "interview": return 80,
      case "hired": return 100,
      case "rejected": return 100,
      default: return 0
    }
  },

  const progressValue = getProgressValue(),
  
  return (
    <div className={cn("w-full space-y-2", className)}>
      <Progress value={progressValue} className="h-2" />
      


      <div className="flex justify-between text-xs text-muted-foreground">
<<<<<<< HEAD
=======
        <div className="flex flex-col items-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  )
}
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const statusRank: Record<ApplicationStatus, number> = {
    new: 1
    viewed: 2
    shortlisted: 3
    interview: 4
    hired: 5
    rejected: 5}
  const currentRank = statusRank[current]
  const statusRank_ = statusRank[status]
  const currentRank = statusRank[current]
  const statusRank_ = statusRank[status]
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const statusRank: Record<ApplicationStatus number> = {
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},

  const currentRank = statusRank[current],
<<<<<<< HEAD
<<<<<<< HEAD
  const statusRank_ = statusRank[status]
  const currentRank = statusRank[current]
  const statusRank_ = statusRank[status]
  const statusRank_ = statusRank[status],
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
=======





  const currentRank = statusRank[current],
  const statusRank_ = statusRank[status],

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (currentRank < statusRank_) {
=======
  if (currentRank < statusRank_) {
    // This step is complete
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {
    // This is the current step
    return <CircleDot className="h-4 w-4 text-blue-500" />
  } else {
<<<<<<< HEAD
<<<<<<< HEAD
    // This step is upcoming;
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
  };
};
    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
  }
}
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';
import { cn } from "@/lib/utils",;
=======

import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    <div className={cn("w-full space-y-2", className)}>;
      <Progress value={progressValue} className="h-2" />;
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
;
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus number> = {;
    new: 1,;
    viewed: 2,;
    shortlisted: 3,;
    interview: 4,;
    hired: 5,;
    rejected: 5},;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
}

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
    rejected: 5},
  const current_rank = status_rank[current],
  const statusRank_ = status_rank[status];
  const current_rank = status_rank[current];
  const statusRank_ = status_rank[status];
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}

    // This step is upcoming
<<<<<<< HEAD
<<<<<<< HEAD
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
=======
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

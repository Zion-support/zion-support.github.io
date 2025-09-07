<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
interface ApplicationProgressProps {

<<<<<<< HEAD
import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import { cn } from "@/lib/utils",
=======
  status: ApplicationStatus

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
import { ApplicationStatus } from '@/types/jobs';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';
import { cn } from '@/lib/utils';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx

import { ApplicationStatus } from "@/types/jobs",
import { Progress } from "@/components/ui/progress",
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import { cn } from "@/lib/utils",
interface ApplicationProgressProps {
  status: ApplicationStatus,


interface ApplicationProgressProps {
  status: ApplicationStatus;
origin/cursor/automate-test-improve-and-merge-code-2533
  className?: string
}
export function ApplicationProgress({ status, className }:,  ApplicationProgressProps) {
  // Define the progress value based on status
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD

  const getProgressValue = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
import { ApplicationStatus  } from '@/types / jobs';
import { Progress  } from '@/components / ui / progress';
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn  } from '@/lib / utils';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApplicationProgressProps {
=======
interface ApplicationProgressProps {}
  status: ApplicationStatus;
  className?: string;
}
export function ApplicationProgress({ status, className }: ApplicationProgressProps) {};
  // Define the progress value based on status;
  const getProgressValue = () => {}
import { ApplicationStatus  } from '@/types / jobs';'
import { Progress  } from '@/components / ui / progress';'
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn  } from '@/lib / utils';
interface ApplicationProgressProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
  status: ApplicationStatus,
  className?: string
}
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx

export function ApplicationProgress({ status, className }: ApplicationProgressProps) {
  // Define the progress value based on status
  const getProgressValue = () => {
    switch (status) {
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "new": return 20,
      case "viewed": return 40,
      case "shortlisted": return 60,
      case "interview": return 80,
      case "hired": return 100,
=======
export /**;
 * ApplicationProgress - Function description;
 */
function ApplicationProgress() {}
  // Define the progress value based on status;
  const getProgressValue = () =>: any {}
    switch (status) {}
      case "new": return 20,"
      case "viewed": return 40,"
      case "shortlisted": return 60,"
      case "interview": return 80,"
      case "hired": return 100,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
      case "rejected": return 100,
      default: return 0;
    }
  },

  const progressValue = getProgressValue(),
  
  return ("
    <div className={cn("w-full space-y-2", className)}>"
      <Progress value={progressValue} className="h-2" />
      
=======

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
      <div className="flex justify-between text-xs text-muted-foreground">
        <div className="flex flex-col items-center">
          <StatusIcon status={status} current="new" />
=======
"
      <div className="flex justify-between text-xs text-muted-foreground">"
        <div className="flex flex-col items-center">"
          <StatusIcon status={status} current="new" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
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
  )
}
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx

function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {
  // Helper to determine if this step is active, completed, or inactive

<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
  const statusRank: Record<ApplicationStatus number> = {
=======
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {}
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus number> = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},

  const currentRank = statusRank[current],
<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const statusRank_ = statusRank[status],

<<<<<<< HEAD
  const currentRank = statusRank[current],
  const statusRank_ = statusRank[status],
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
=======
  const getProgressValue = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======






  const currentRank = statusRank[current],

  const statusRank_ = statusRank[status],

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
  const getProgressValue = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
  if (currentRank < statusRank_) {
    // This step is complete
=======
  if (currentRank < statusRank_) {}
    // This step is complete"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
  } else if (currentRank === statusRank_) {}
    // This is the current step"
    return <CircleDot className="h-4 w-4 text-blue-500" />
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
  } else {
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';
import { cn } from "@/lib/utils",;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
=======

=======
  } else {}
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils";

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
=======

import { CheckCircle2, Circle, CircleDot } from 'lucide-react'import { cn } from "@/lib/utils";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
interface ApplicationProgressProps {;
=======
import { ApplicationStatus } from "@/types/jobs",;
import { Progress } from "@/components/ui/progress",;
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';
import { cn } from "@/lib/utils",;interface ApplicationProgressProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  status: ApplicationStatus,;
  className?: string;
}
<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
;
export function ApplicationProgress() { return null; }
    }
  },;
  const progressValue = getProgressValue(),;
  return (;"
    <div className={cn("w-full space-y-2", className)}>;"
      <Progress value={progressValue} className="h-2" />;"
      <div className="flex justify-between text-xs text-muted-foreground">;"
        <div className="flex flex-col items-center">;"
          <StatusIcon status={status} current="new" />;"
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
;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
function StatusIcon() { return null; }
=======
function StatusIcon({ status, current }: { status: ApplicationStatus, current: ApplicationStatus }) {;
  // Helper to determine if this step is active, completed, or inactive;
  const statusRank: Record<ApplicationStatus number> = {;,
  const statusRank: Record<ApplicationStatus number> = {;
    new: 1,;
    viewed: 2,;
    shortlisted: 3,;
    interview: 4,;
    hired: 5,;
    rejected: 5},;,
  const currentRank = statusRank[current];,
  const statusRank_ = statusRank[status];
  if (currentRank <,  statusRank_) {;
    // This step is complete;
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;
  } else if (currentRank ===,  statusRank_) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
    rejected: 5},;
  const currentRank = statusRank[current];
  const statusRank_ = statusRank[status];
  if (currentRank < statusRank_) {;
    // This step is complete;"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />;
  } else if (currentRank === statusRank_) {;
    // This is the current step;"
    return <CircleDot className="h-4 w-4 text-blue-500" />;
  } else {;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
    // This step is upcoming;
<<<<<<< HEAD
=======
    // This step is upcoming;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
    return <Circle className="h-4 w-4 text-muted-foreground/50" />;
=======
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
};
}
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
    <div className={cn ("w - full space - y-2", class_name)}>;
      <Progress value={progress_value} className="h-2" />;
      <div className="flex justify - between text - xs text - muted-foreground">;
        <div className="flex flex - col items-center">;
          <StatusIcon status={status} current="new" />;
          <span className="mt-1">Submitted</span>;
        </div>;
        <div className="flex flex - col items-center">;
          <StatusIcon status={status} current="viewed" />;
          <span className="mt-1">Viewed</span>;
        </div>;
        <div className="flex flex - col items-center">;
          <StatusIcon status={status} current="shortlisted" />;
          <span className="mt-1">Shortlisted</span>;
        </div>;
        <div className="flex flex - col items-center">;
          <StatusIcon status={status} current="interview" />;
          <span className="mt-1">Interview</span>;
        </div>;
        <div className="flex flex - col items-center">;
          <StatusIcon status={status} current="hired" />;
          <span className="mt-1">Decision</span>;
=======
"
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
          <span className="mt - 1">Decision</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
        </div>;
      </div>;
    </div>);
}
/**
 * StatusIcon - Function description;
 */
function StatusIcon() {}
  // Helper to determine if this step is active, completed, or inactive;
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
  const status_rank: Record < ApplicationStatus, number> = {}
=======
  return ()"
    <div className={cn("w-full space-y-2", className)}>"
</div>"
      <Progress value={progressValue} className="h-2" />"
"
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
  const statusRank: Record<ApplicationStatus number> = {

  if (currentRank < statusRank_) {
    // This step is complete;"
    return <CheckCircle2 className="h-4 w-4 text-green-500" />"
</CheckCircle2>"
    return <CircleDot className="h-4 w-4 text-blue-500" />"
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
  const statusRank: Record<ApplicationStatus number> = {;

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
pr-12325
  const status_rank: Record < ApplicationStatus, number> = {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
    new: 1,
    viewed: 2,
    shortlisted: 3,
    interview: 4,
    hired: 5,
    rejected: 5},
  const current_rank = status_rank[current],
  const statusRank_ = status_rank[status];,
  const current_rank = status_rank[current];,
  const statusRank_ = status_rank[status];
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
    // This step is complete;
    return <CheckCircle2 className="h - 4 w - 4 text - green-500" />;
  } else // Check condition
if ( {) {
  $2
}
    // This is the current step;
    return <CircleDot className="h - 4 w - 4 text - blue-500" />;
  } else {
    // This step is upcoming;
    return <Circle className="h - 4 w - 4 text - muted-foreground / 50" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
  }
}
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
;
=======

<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
<<<<<<< HEAD:src/components/jobs/applications/ApplicationProgress.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  }

}"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
    // This step is upcoming
    return <Circle className="h-4 w-4 text-muted-foreground/50" />
}}}
  }
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx
  }

}"
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/jobs/applications/ApplicationProgress.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/applications/ApplicationProgress.tsx
=======
    // This step is upcoming"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/jobs/applications/ApplicationProgress.tsx
=======
  // Check condition;
if ( {) {
  $2;
    // This step is complete;"
    return <CheckCircle2 className="h - 4 w - 4 text - green - 500" />;"
    return <CircleDot className="h - 4 w - 4 text - blue - 500" />;"
    return <Circle className="h - 4 w - 4 text - muted - foreground / 50" />;"
    return <Circle className="h-4 w-4 text-muted-foreground/50" />"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/applications/ApplicationProgress.tsx

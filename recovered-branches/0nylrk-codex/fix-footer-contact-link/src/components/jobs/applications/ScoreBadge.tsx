<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { JobApplication } from "@/types/jobs";
interface ScoreBadgeProps {;
  application: JobApplication;
}

export function ScoreBadge(): any ({ application }: ScoreBadgeProps) {;
  const score = application && application.match_score || 0;

<<<<<<< HEAD
=======



<<<<<<< HEAD

import { JobApplication } from "@/types/jobs";
interface ScoreBadgeProps {
  application: JobApplication;
}
export function ScoreBadge({ application }: ScoreBadgeProps) {

  const score = application.match_score |0;

export function ScoreBadge({ application }: ScoreBadgeProps) {;
  const score = application.match_score || 0;

import { JobApplication } from "@/types/jobs",
interface ScoreBadgeProps {
  application: JobApplication
}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = application.match_score || 0,
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Determine color based on score
  let className = "text-gray-700 bg-gray-100",
  if (score >= 80) className = "text-green-700 bg-green-100",
  else if (score >= 60) className = "text-blue-700 bg-blue-100",
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100",

  else if (score > 0) className = "text-orange-700 bg-orange-100",

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>"`
      {score ? `${score}%` : "Not scored"}
    </span>
<<<<<<< HEAD
  );
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )

import { JobApplication } from "@/types/jobs",;
interface ScoreBadgeProps {;
  application: JobApplication;
}
;
<<<<<<< HEAD

=======
export function ScoreBadge({ application }: ScoreBadgeProps) {;
  const score = application.match_score || 0,;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Determine color based on score;

  let className = "text-gray-700 bg-gray-100";
  if (score >= 80) className = "text-green-700 bg-green-100";
  else if (score >= 60) className = "text-blue-700 bg-blue-100";
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100";
  else if (score > 0) className = "text-orange-700 bg-orange-100";

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>;

      {score ? `${score}%` : "Not scored"}
    </span>;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { JobApplication  } from '@/types / jobs';
interface ScoreBadgeProps {
  application: JobApplication;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;

"

    <span className={`rounded - full px - 2 py - 1 text - xs font - medium ${class_name}`}>;
</span>)
    </span>);`;
    </span>;"`;
pr-12325
    </span>);
<<<<<<< HEAD

}
}
;

=======
}
;

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { JobApplication } from "@/types/jobs",;
;
interface ScoreBadgeProps {;
  application:JobApplication;
}
;
<<<<<<< HEAD

=======
export function ScoreBadge({ application } ScoreBadgeProps) {;
  const score = application.match_score || 0,;
  ;
  // Determine color based on score;
  let className = "text-gray-700 bg-gray-100",;
  if (score >= 80) className = "text-green-700 bg-green-100",;
  else if (score >= 60) className = "text-blue-700 bg-blue-100",;
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100";
  else if (score > 0) className = "text-orange-700 bg-orange-100";
  return (;
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {score ? `${score}%` : "Not scored"}
    </span>;
  );
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

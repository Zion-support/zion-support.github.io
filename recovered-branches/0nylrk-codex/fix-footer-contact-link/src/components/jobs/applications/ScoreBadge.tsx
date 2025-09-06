


import { JobApplication } from "@/types/jobs";
interface ScoreBadgeProps {
  application: JobApplication;
}

export function ScoreBadge({ application }: ScoreBadgeProps) {

  const score = null;

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {score ? `${score}%` : "Not scored"}
    </span>
  );
}
;
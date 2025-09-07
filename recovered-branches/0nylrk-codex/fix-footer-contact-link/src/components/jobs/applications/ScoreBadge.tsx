import { JobApplication } from "@/types/jobs";
interface ScoreBadgeProps {
  application: JobApplication}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = $2;
  // Determine color based on score
  let className = $2;
  if (score >= 80) className = $2;
  else if (score >= 60) className = $2;
  else if (score >= 40) className = $2;
  else if (score > 0) className = $2;
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {score ? `${score}%` : "Not scored"}
    </span>
  )
}


import { JobApplication } from &quot;@/types/jobs&quot;;

interface ScoreBadgeProps {
  application: JobApplication;
}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = application.match_score || 0;
  
  // Determine color based on score
  let className = &quot;text-gray-700 bg-gray-100&quot;;
  if (score >= 80) className = &quot;text-green-700 bg-green-100&quot;;
  else if (score >= 60) className = &quot;text-blue-700 bg-blue-100&quot;;
  else if (score >= 40) className = &quot;text-yellow-700 bg-yellow-100&quot;;
  else if (score > 0) className = &quot;text-orange-700 bg-orange-100&quot;;
  
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {score ? `${score}%` : &quot;Not scored&quot;}
    </span>
  );
}

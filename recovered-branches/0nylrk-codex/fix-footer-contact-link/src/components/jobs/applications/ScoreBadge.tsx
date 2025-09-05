
<<<<<<< HEAD
<<<<<<< HEAD
import { JobApplication } from "@/types/jobs",
=======
import { JobApplication } from &quot;@/types/jobs&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ScoreBadgeProps {
  application: JobApplication
}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = application.match_score || 0,
  
  // Determine color based on score
<<<<<<< HEAD
  let className = "text-gray-700 bg-gray-100",
  if (score >= 80) className = "text-green-700 bg-green-100",
  else if (score >= 60) className = "text-blue-700 bg-blue-100",
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100",
  else if (score > 0) className = "text-orange-700 bg-orange-100",
=======
  let className = &quot;text-gray-700 bg-gray-100&quot;;
  if (score >= 80) className = &quot;text-green-700 bg-green-100&quot;;
  else if (score >= 60) className = &quot;text-blue-700 bg-blue-100&quot;;
  else if (score >= 40) className = &quot;text-yellow-700 bg-yellow-100&quot;;
  else if (score > 0) className = &quot;text-orange-700 bg-orange-100&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {score ? `${score}%` : &quot;Not scored&quot;}
    </span>
  )
=======
import { JobApplication } from "@/types/jobs",;
interface ScoreBadgeProps {;
  application: JobApplication;
}
;
export function ScoreBadge({ application }: ScoreBadgeProps) {;
  const score = application.match_score || 0,;
  // Determine color based on score;
  let className = "text-gray-700 bg-gray-100",;
  if (score >= 80) className = "text-green-700 bg-green-100",;
  else if (score >= 60) className = "text-blue-700 bg-blue-100",;
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100";
  else if (score > 0) className = "text-orange-700 bg-orange-100";
  return (;
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>;
      {score ? `${score}%` : "Not scored"}
    </span>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
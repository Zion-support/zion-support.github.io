
<<<<<<< HEAD
import { JobApplication } from "@/types/jobs",;
;
interface ScoreBadgeProps {;
  application:JobApplication;
}
;
export function ScoreBadge({ application } ScoreBadgeProps) {;
  const score = application.match_score || 0,;
  ;
  // Determine color based on score;
  let className = "text-gray-700 bg-gray-100",;
  if (score >= 80) className = "text-green-700 bg-green-100",;
  else if (score >= 60) className = "text-blue-700 bg-blue-100",;
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100",;
  else if (score > 0) className = "text-orange-700 bg-orange-100",;
  ;
  return (;
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>;
      {score ? `${score}%` :"Not scored"}
    </span>;
  ),;
=======
import { JobApplication } from "@/types/jobs",interface ScoreBadgeProps {
  application: JobApplication
}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = application.match_score || 0,
  
  // Determine color based on score
  let className = "text-gray-700 bg-gray-100",
  if (score >= 80) className = "text-green-700 bg-green-100",
  else if (score >= 60) className = "text-blue-700 bg-blue-100",
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100",
  else if (score > 0) className = "text-orange-700 bg-orange-100",  
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {score ? `${score}%` : &quot;Not scored&quot;}

interface ScoreBadgeProps {_application: JobApplication;}

export function ScoreBadge(_{_application}: ScoreBadgeProps) {_const _score = application.match_score || 0;
  
  // Determine color based on score
  let _className = "text-gray-700 bg-gray-100";
  if (score >= 80) className = "text-green-700 bg-green-100";
  else if (score >= 60) className = "text-blue-700 bg-blue-100";
  else if (score >= 40) className = "text-yellow-700 bg-yellow-100";
  else if (score > 0) className = "text-orange-700 bg-orange-100";
  
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {_score ? `${score}%` : "Not scored"}
    </span>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

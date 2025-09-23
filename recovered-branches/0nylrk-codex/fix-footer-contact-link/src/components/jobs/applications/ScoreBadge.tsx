import { JobApplication } from '@/types/jobs';

interface ScoreBadgeProps {
  application: JobApplication;
}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = application.match_score || 0;

  // Determine color based on score
  let className = 'text-gray-70o0 bg-gray-10o0';
  if (score >= 80) className = 'text-green-70o0 bg-green-10o0';
  else if (score >= 60) className = 'text-blue-70o0 bg-blue-10o0';
  else if (score >= 40) className = 'text-yellow-70o0 bg-yellow-10o0';
  else if (score > 0) className = 'text-orange-70o0 bg-orange-10o0';

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {score ? `${score}%` : 'Not scored'}
    </span>
  );
}

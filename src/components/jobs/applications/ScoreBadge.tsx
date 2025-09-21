import React from 'react',
import { Badge } from '@/components/ui/badge',
import { JobApplication } from '@/types/jobs',
interface ScoreBadgeProps {
  application: JobApplication}

export function ScoreBadge({ application }: ScoreBadgeProps) {
  const score = application.match_score;
  
  if (score === null || score === undefined) {
    return null, }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 border-green-200',
    if (score >= 80) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (score >= 60) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent Match',
    if (score >= 80) return 'Great Match';
    if (score >= 70) return 'Good Match';
    if (score >= 60) return 'Fair Match';
    return 'Poor Match';
  };

  return (
    <Badge 
       
      className={`${getScoreColor(score)} border`}
    >
      {score}% - {getScoreLabel(score)}
    </Badge>
  );
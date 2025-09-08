

import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
type Props = {
  summary: ReviewsSummary;

const ReviewSummary: React.FC<Props> = ({ summary }) => {;
</div> </div> </div>) 
}
export default ReviewSummary


;
  return (<div className='enhanced-card flex items-center justify-between'>import React from 'react';


  return (
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
import React from 'react';
const ReviewSummary: React.FC<Props> = ({ summary }) => {
import StarRating from './StarRating';
type Props = {
  summary: ReviewsSummary
};

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="enhanced-card flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
  )
};

export default ReviewSummary;
  )
};

export default ReviewSummary;
origin/cursor/automate-test-improve-and-merge-code-2533



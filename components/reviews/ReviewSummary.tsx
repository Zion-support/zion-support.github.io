import React from 'react';
import type {_ReviewsSummary} from '../../types/reviews';
import StarRating from './StarRating';

type Props = {_summary: ReviewsSummary;};

const ReviewSummary: React.FC<Props> = (_{_summary}) => {_return (
    <div className="enhanced-card flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={_Math.round(summary.averageRating)} onChange={_() => {}} readOnly />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{_summary.totalReviews} reviews</span>
          <span>{_summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
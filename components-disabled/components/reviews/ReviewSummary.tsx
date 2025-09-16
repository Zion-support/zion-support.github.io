<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
=======

;
  return (<div className='enhanced-card flex items-center justify-between'>import React from 'react';

  return (
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
>>>>>>> origin/merge-pr-12271:components-disabled/components/reviews/ReviewSummary.tsx
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';

type Props = {
  summary: ReviewsSummary;
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
      </div>
    </div>
  );
};

<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
export default ReviewSummary;
=======
export default ReviewSummary;  );

};

export default ReviewSummary;


};

export default ReviewSummary;
  summary: ReviewsSummary;
const ReviewSummary: React.FC < Props> = ({ summary }) => {return (<div className='enhanced - card flex items - center justify - between'>;
      <div>;
        <div className='flex items - center gap - 3'>;
          <span className='text - 2xl font - semibold'>;
            {summary.average_rating.to_fixed (1)}
          </span>;
          <StarRating;
            value={Math.round (summary.average_rating)}
            on_change={() => {}}
            read_only;
          />;
        </div>;
        <div className='text - sm text - gray - 600 mt - 1'>;
          <span className='mr - 3'>{summary.total_reviews} reviews</span>          <span>{summary.totalCompletedProjects} completed projects</span>;
        </div>;
      </div>;
    </div>)}export default ReviewSummary;      <div>;
        <div className="flex items - center gap - 3">;
          <span className="text - 2xl font - semibold">{summary.average_rating.to_fixed (1)}</span>;
          <StarRating value={Math.round (summary.average_rating)} on_change={() => {}} read_only />;
        </div>;
        <div className="text - sm text - gray - 600 mt - 1">;
          <span className="mr - 3">{summary.total_reviews} reviews</span>;
          <span>{summary.totalCompletedProjects} completed projects</span>;
        </div>;
      </div>;
    </div>)}export default ReviewSummary)}export default ReviewSummary;)}export default ReviewSummary;
    </div>);
}
;
export default ReviewSummary);
}
;
export default ReviewSummary;
;
>>>>>>> origin/merge-pr-12271:components-disabled/components/reviews/ReviewSummary.tsx

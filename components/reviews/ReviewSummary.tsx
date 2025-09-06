
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
</div> </div> </div>) }
;
const ReviewSummary: React.FC < Props> = ({ summary }) => {
  return (
    <div className='enhanced - card flex items - center justify - between'>import React from 'react';
import type { ReviewsSummary } from '../../types / reviews';
import StarRating from './StarRating';
import {Star} from 'lucide-react';

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <div className='enhanced-card flex items-center justify-between'>;
      <div>;
        <div className='flex items-center gap-3'>;
          <span className='text-2xl font-semibold'>;
            {summary && summary.averageRating.toFixed(1)}
          </span>;
          <StarRating
            value={Math && Math.round(summary && summary.averageRating)}
            onChange={() => {}}
            readOnly;
          />;
        </div>;
        <div className='text-sm text-gray-600 mt-1'>;
          <span className='mr-3'>{summary && summary.totalReviews} reviews</span>          <span>{summary && summary.totalCompletedProjects} completed projects</span>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  )
};

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="enhanced-card flex items-center justify-between">
      <div>
export default ReviewSummary
};

export default ReviewSummary;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  );

        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
type Props = any;
export default ReviewSummary;
      <div>
        <div className='flex items-center gap-3'>
          <span className='text-2xl font-semibold'>
            {summary.averageRating.toFixed(1)}
          </span>
          <StarRating
            value={Math.round(summary.averageRating)}
            onChange={() => {}}
            readOnly
          />
        </div>
        <div className='text-sm text-gray-600 mt-1'>
          <span className='mr-3'>{summary.totalReviews} reviews</span>
origin/cursor/automate-test-improve-and-merge-code-2533
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
};

export default ReviewSummary;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  summary: ReviewsSummary;
const ReviewSummary: React.FC < Props> = ({ summary }) => {
  return (
    <div className='enhanced - card flex items - center justify - between'>;
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
    </div>);
}
;
export default ReviewSummary;      <div>;
        <div className="flex items-center gap-3">;
          <span className="text-2xl font-semibold">{summary.average_rating.to_fixed (1)}</span>;
          <StarRating value={Math.round (summary.average_rating)} on_change={() => {}} read_only />;
        </div>;
        <div className="text - sm text - gray-600 mt-1">;
          <span className="mr-3">{summary.total_reviews} reviews</span>;
          <span>{summary.totalCompletedProjects} completed projects</span>;
        </div>;
      </div>;
    </div>);
}
;
export default ReviewSummary);
}
;
export default ReviewSummary;
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
);
};

export default ReviewSummary;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

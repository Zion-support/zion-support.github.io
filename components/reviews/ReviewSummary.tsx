

  return (
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';'
import React from 'react';'
import type { ReviewsSummary } from '../../types/reviews';
</div> </div> </div>) }
;

  return (

    <div className='enhanced-card flex items-center justify-between'>;
      <div>;'
        <div className='flex items-center gap-3'>;'
          <span className='text-2xl font-semibold'>;
            {summary && summary.averageRating.toFixed(1)}
          </span>;
          <StarRating;
            value={Math && Math.round(summary && summary.averageRating)}
            onChange={() => {}}
            readOnly;
          />;
        </div>;'
        <div className='text-sm text-gray-600 mt-1'>;'
          <span className='mr-3'>{summary && summary.totalReviews} reviews</span>          <span>{summary && summary.totalCompletedProjects} completed projects</span>;
        </div>;
      </div>;
    </div>;
  );

        <div className="flex items-center gap-3">

          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
        </div>"
        <div className="text-sm text-gray-600 mt-1">"
          <span className="mr-3">{summary.totalReviews} reviews</span>

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

);
};

export default ReviewSummary;
origin/cursor/automate-test-improve-and-merge-code-2533


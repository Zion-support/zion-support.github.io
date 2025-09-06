 </div> </div> </div>) };

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className='enhanced-card flex items-center justify-between'>
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
import {Star} from 'lucide-react';
type Props = {
  summary: ReviewsSummary
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
<<<<<<< HEAD
    <div className='enhanced-card flex items-center justify-between'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          <span className='mr-3'>{summary.totalReviews} reviews</span>          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
=======
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default ReviewSummary;
=======
  )
};

export default ReviewSummary;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
 </div> </div> </div>) };

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className='enhanced-card flex items-center justify-between'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
 </div> </div> </div>) 
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
import { Star } from 'lucide-react';
type Props = {
  summary: ReviewsSummary
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='enhanced-card flex items-center justify-between'>
=======
    <div className="enhanced-card flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
        <div className='text-sm text-gray-600 mt-1'>
          <span className='mr-3'>{summary.totalReviews} reviews</span>          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
=======
<<<<<<< HEAD
        <div className='text-sm text-gray-600 mt-1'>
          <span className='mr-3'>{summary.totalReviews} reviews</span>
=======
    <div className="enhanced-card flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default ReviewSummary;
=======
  )
};

export default ReviewSummary;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default ReviewSummary;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

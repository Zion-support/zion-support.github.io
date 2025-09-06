<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
type Props = any;
export default ReviewSummary;
=======
 </div> </div> </div>) }
const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
import {Star} from 'lucide-react';
type Props = {
  summary: ReviewsSummary
=======
 </div> </div> </div>)
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className='enhanced-card flex items-center justify-between'>
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
<<<<<<< HEAD
          <span className='mr-3'>{summary.totalReviews} reviews</span>          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
  );
}
export default ReviewSummary;      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
=======
          <span className='mr-3'>{summary.totalReviews} reviews</span>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
);
}
export default ReviewSummary;  )
}
export default ReviewSummary;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
};
}

export default ReviewSummary;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

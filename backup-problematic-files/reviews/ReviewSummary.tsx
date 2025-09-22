
<<<<<<< HEAD
=======
:components/reviews/ReviewSummary.tsx
 </div> </div> </div>) };
:backup-problematic-files/reviews/ReviewSummary.tsx
import React from 'react',
import type { ReviewsSummary } from '../../types/reviews',
import StarRating from './StarRating',
type Props = {
  summary: ReviewsSummary
},

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
  )
},

export default ReviewSummary,
</div> </div> </div>) };
:backup-problematic-files/reviews/ReviewSummary.tsx
:backup-problematic-files/reviews/ReviewSummary.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
 </div> </div> </div>) }
const ReviewSummary: React.FC<Props> = ({ summary }) => {

    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
</div>

    <div className='enhanced-card flex items-center justify-between'>
      <div>
        <div className='flex items-center gap-3'>
          <span className='text-2xl font-semibold'>
</span>
          <StarRating;
            value={Math.round(summary.averageRating)}
            onChange={() => {}}

        <div className='text-sm text-gray-600 mt-1'>
          <span className='mr-3'>{summary.totalReviews} reviews</span>          <span>{summary.totalCompletedProjects} completed projects</span>
export default ReviewSummary;      <div>
        <div className="flex items-center gap-3">"
</div>"
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>"
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewSummary.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
:components/reviews/ReviewSummary.tsx
);
}
export default ReviewSummary;  )
}
export default ReviewSummary;

main:components/reviews/ReviewSummary.tsx
:backup-problematic-files/reviews/ReviewSummary.tsx
main:components/reviews/ReviewSummary.tsx
:backup-problematic-files/reviews/ReviewSummary.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        <div className="text-sm text-gray-600 mt-1">"
          <span className="mr-3">{summary.totalReviews} reviews</span>"
          <span>{summary.totalCompletedProjects} completed projects</span>
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

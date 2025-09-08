<<<<<<< HEAD



 </div> </div> </div>) }

const ReviewSummary: React.FC<Props> = ({ summary }) => {

    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
</div>


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
const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className='enhanced-card flex items-center justify-between'>
      <div>
        <div className='flex items-center gap-3'>
          <span className='text-2xl font-semibold'>
<<<<<<< HEAD

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


=======
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
}
export default ReviewSummary;      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
<<<<<<< HEAD







=======
    </div>
);
}
export default ReviewSummary;  )
}
export default ReviewSummary;
>>>>>>> origin/cursor/delete-old-data-records-6bba

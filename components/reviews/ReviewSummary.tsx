import React from 'react',
import type { ReviewsSummary } from '../../types/reviews',
import StarRating from './StarRating',
type Props = {
  summary: ReviewsSummary
},

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className=&quot;enhanced-card flex items-center justify-between&quot;>
      <div>
        <div className=&quot;flex items-center gap-3&quot;>
          <span className=&quot;text-2xl font-semibold&quot;>{summary.averageRating.toFixed(1)}</span>
          <StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
        </div>
        <div className=&quot;text-sm text-gray-600 mt-1&quot;>
          <span className=&quot;mr-3&quot;>{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
  )
},

export default ReviewSummary,
<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
 </div> </div> </div>) };
const ReviewSummary: React.FC<Props> = ({ summary }) => {;
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
type Props = {;
  summary: ReviewsSummary;
const ReviewSummary: React.FC<Props> = ({ summary }) => {;
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
  );
};
=======
<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
<<<<<<< HEAD
=======
 </div> </div> </div>) };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewSummary.tsx
import React from 'react',
import type { ReviewsSummary } from '../../types/reviews',
import StarRating from './StarRating',
type Props = {
  summary: ReviewsSummary
},

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewSummary.tsx
const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="enhanced-card flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">{summary.averageRating.toFixed(1)}</span>
<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
<StarRating value={Math.round(summary.averageRating)} onChange={() => {}} readOnly />
=======
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
=======
</div> </div> </div>) };
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewSummary.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewSummary.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewSummary.tsx
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="mr-3">{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
};
export default ReviewSummary;      <div>;
        <div className="flex items-center gap-3">;
          <span className="text-2xl font-semibold">{summary && summary.averageRating.toFixed(1)}</span>;
          <StarRating value={Math && Math.round(summary && summary.averageRating)} onChange={() => {}} readOnly />;
        </div>;
        <div className="text-sm text-gray-600 mt-1">;
          <span className="mr-3">{summary && summary.totalReviews} reviews</span>;
          <span>{summary && summary.totalCompletedProjects} completed projects</span>;
        </div>;
      </div>;
    </div>;
  );
};
export default ReviewSummary;  );
  )
};
export default ReviewSummary;
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
        <div className="flex items - center gap - 3">;
          <span className="text - 2xl font - semibold">{summary.average_rating.to_fixed (1)}</span>;
          <StarRating value={Math.round (summary.average_rating)} on_change={() => {}} read_only />;
        </div>;
        <div className="text - sm text - gray - 600 mt - 1">;
          <span className="mr - 3">{summary.total_reviews} reviews</span>;
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
        </div>
      </div>
    </div>
  )
},

export default ReviewSummary

=======
<<<<<<< HEAD:components/reviews/ReviewSummary.tsx
);
}
export default ReviewSummary;  )
}
export default ReviewSummary;
<<<<<<< HEAD

=======
>>>>>>> main:components/reviews/ReviewSummary.tsx
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewSummary.tsx
=======
=======
>>>>>>> main:components/reviews/ReviewSummary.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewSummary.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewSummary.tsx

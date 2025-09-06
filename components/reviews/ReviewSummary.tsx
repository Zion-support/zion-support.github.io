<<<<<<< HEAD
<<<<<<< HEAD

 </div> </div> </div>) }
const ReviewSummary: React.FC<Props> = ({ summary }) => {
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='enhanced-card flex items-center justify-between'>import React from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import type { ReviewsSummary } from '../../types/reviews';
import StarRating from './StarRating';
import {Star} from 'lucide-react';
<<<<<<< HEAD
type Props = {
  summary: ReviewsSummary
<<<<<<< HEAD
const ReviewSummary: React.FC<Props> = ({ summary }) => {
=======
type Props = {;
  summary: ReviewsSummary;

const ReviewSummary: React.FC<Props> = ({ summary }) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
}
export default ReviewSummary;      <div>
=======
};

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="enhanced-card flex items-center justify-between">
      <div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
<<<<<<< HEAD
);
}
export default ReviewSummary;  )
}
=======
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
=======
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ReviewSummary;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

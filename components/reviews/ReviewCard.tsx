<<<<<<< HEAD
<<<<<<< HEAD
 > Report abuse </button> </div>)
}</div> </div>) }
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
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
 > Report abuse </button> </div>) ;
}</div> </div>) };

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';
=======
import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';
import { Star } from 'lucide-react';
type Props = {
  review: PublicReview,
  onReport?: (id: string) => void
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

import {Star} from 'lucide-react';
<<<<<<< HEAD
type Props = {
  review: PublicReview
  onReport?: (id: string) => void
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
<<<<<<< HEAD
=======
type Props = {;
  review: PublicReview,;
  onReport?: (id: string) => void;

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='enhanced-card hover:shadow-lg transition-shadow'>;
      <div className='flex items-center justify-between mb-2'>;
        <div className='flex items-center gap-2'>;
          <StarRating
            value={review && review.rating}
            onChange={() => {}}
            readOnly;
            size={18}
          />;
          <span className='text-sm text-gray-500'>;
            {new Date(review && review.createdAt).toLocaleDateString()}
          </span>;
        </div>;
        <button
          className='text-xs text-red-500 hover:underline'          onClick={() => onReport && onReport(review && review.id)}    <div className="enhanced-card hover: shadow-lg transition-shadow">;
      <div className="flex items-center justify-between mb-2">;
        <div className="flex items-center gap-2">;
          <StarRating value={review && review.rating} onChange={() => {}} readOnly size={18} />;
          <span className="text-sm text-gray-500">{new Date(review && review.createdAt).toLocaleDateString()}</span>;
        </div>;
        <button
          className="text-xs text-red-500 hover:underline">;
          Report abuse;
        </button>;
      </div>;
      <div className='flex items-center gap-2 mb-3'>;
        <span className='text-sm font-medium'>{review && review.authorName}</span>;
        {review && review.categories?.wouldWorkWithAgain && (;
          <span className='pill pill-success'>Would work again</span>;
        )}
<<<<<<< HEAD
      </div>
      <p className='text-sm leading-6'>{review.text}</p>
      <div className='flex flex-wrap gap-2 mt-3'>
        {typeof review.categories?.communication === 'number' && (
          <span className='pill'>
            Communication: {review.categories.communication}★
          </span>
=======
      </div>;
      <p className='text-sm leading-6'>{review && review.text}</p>;

      <div className='flex flex-wrap gap-2 mt-3'>;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className='pill'>;
            Communication: {review && review.categories.communication}★;
          </span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )}
        {typeof review && review.categories?.qualityOfWork === 'number' && (;
          <span className='pill'>;
            Quality: {review && review.categories.qualityOfWork}★;
          </span>;
        )}
        {typeof review && review.categories?.timeliness === 'number' && (;
          <span className='pill'>;
            Timeliness: {review && review.categories.timeliness}★;
          </span>;
        )}
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
export default ReviewCard;        {review.categories?.wouldWorkWithAgain && (
=======
  return (
    <div className="enhanced-card hover: shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
          onClick={() => onReport && onReport(review.id)}
        >
          Report abuse
        </button>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium">{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{review.text}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
=======
};

export default ReviewCard;        {review && review.categories?.wouldWorkWithAgain && (;
          <span className="pill pill-success">Would work again</span>;
        )}
      </div>;
      <p className="text-sm leading-6">{review && review.text}</p>;

      <div className="flex flex-wrap gap-2 mt-3">;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className="pill">Communication: {review && review.categories.communication}★</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )}
        {typeof review && review.categories?.qualityOfWork === 'number' && (;
          <span className="pill">Quality: {review && review.categories.qualityOfWork}★</span>;
        )}
        {typeof review && review.categories?.timeliness === 'number' && (;
          <span className="pill">Timeliness: {review && review.categories.timeliness}★</span>;
        )}
<<<<<<< HEAD
      </div>
    </div>
  )
}
=======
      </div>;
    </div>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ReviewCard;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

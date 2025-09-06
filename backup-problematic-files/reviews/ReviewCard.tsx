<<<<<<< HEAD:components/reviews/ReviewCard.tsx
 > Report abuse </button> </div>) 
=======
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewCard.tsx
import React from 'react',
import StarRating from './StarRating',
import type { PublicReview } from '../../types/reviews',
type Props = {
  review: PublicReview,
  onReport?: (id: string) => void
},

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (
    <div className="enhanced-card hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
          onClick={() => onReport && onReport(review.id)}
=======
> Report abuse </button> </div>) 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewCard.tsx
}</div> </div>) };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewCard.tsx
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';

import {Star} from 'lucide-react';
type Props = {
  review: PublicReview
  onReport?: (id: string) => void
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (
<<<<<<< HEAD:components/reviews/ReviewCard.tsx
    <div className='enhanced-card hover:shadow-lg transition-shadow'>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
          <StarRating
            value={review.rating}
            onChange={() => {}}
            readOnly
            size={18}
          />
          <span className='text-sm text-gray-500'>
            {new Date(review.createdAt).toLocaleDateString()}
          </span>
        </div>
        <button
          className='text-xs text-red-500 hover:underline'          onClick={() => onReport && onReport(review.id)}    <div className="enhanced-card hover: shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
=======

          onClick={() => onReport && onReport(review.id)}

>>>>>>> main:components/reviews/ReviewCard.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewCard.tsx
        >
          Report abuse
        </button>
      </div>
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewCard.tsx
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium">{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{review.text}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className="pill">Quality: {review.categories.qualityOfWork}★</span>
        )}
        {typeof review.categories?.timeliness === 'number' && (
          <span className="pill">Timeliness: {review.categories.timeliness}★</span>
        )}
      </div>;
    </div>;
  );
},;
=======
      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className='pill pill-success'>Would work again</span>
        )}
      </div>
      <p className='text-sm leading-6'>{review.text}</p>
      <div className='flex flex-wrap gap-2 mt-3'>
        {typeof review.categories?.communication === 'number' && (
          <span className='pill'>
            Communication: {review.categories.communication}★
          </span>
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className='pill'>
            Quality: {review.categories.qualityOfWork}★
          </span>
        )}
        {typeof review.categories?.timeliness === 'number' && (
          <span className='pill'>
            Timeliness: {review.categories.timeliness}★
          </span>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD:components/reviews/ReviewCard.tsx
export default ReviewCard;        {review.categories?.wouldWorkWithAgain && (
          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{review.text}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className="pill">Quality: {review.categories.qualityOfWork}★</span>
        )}
        {typeof review.categories?.timeliness === 'number' && (
          <span className="pill">Timeliness: {review.categories.timeliness}★</span>
        )}
      </div>
    </div>
  )
}
export default ReviewCard;
=======
>>>>>>> main:components/reviews/ReviewCard.tsx
export default ReviewCard;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewCard.tsx

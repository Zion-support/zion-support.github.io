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
> Report abuse </button> </div>) 
:backup-problematic-files/reviews/ReviewCard.tsx
=======

}</div> </div>) };

:backup-problematic-files/reviews/ReviewCard.tsx
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';
import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';
import { Star } from 'lucide-react';
type Props = {
  review: PublicReview,
  onReport?: (id: string) => void
};
import {Star} from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type Props = {;
  review: PublicReview,;
  onReport?: (id: string) => void;
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {;
          onClick={() => onReport && onReport(review.id)}




        >
          Report abuse
        </button>
      </div>

      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className='pill pill-success'>Would work again</span>
        )}

export default ReviewCard;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewCard.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

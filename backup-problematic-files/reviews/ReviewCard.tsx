:components/reviews/ReviewCard.tsx
 > Report abuse </button> </div>)
}</div> </div>) }
 > Report abuse </button> </div>) 
:backup-problematic-files/reviews/ReviewCard.tsx
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
> Report abuse </button> </div>) 
:backup-problematic-files/reviews/ReviewCard.tsx
}</div> </div>) };

:backup-problematic-files/reviews/ReviewCard.tsx
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
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

type Props = {;
  review: PublicReview,;
  onReport?: (id: string) => void;

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {;

  return (
<<<<<<< HEAD
:components/reviews/ReviewCard.tsx
    <div className='enhanced-card hover:shadow-lg transition-shadow'>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
=======
    <div className='enhanced-card hover:shadow-lg transition-shadow'>;
      <div className='flex items-center justify-between mb-2'>;
        <div className='flex items-center gap-2'>;
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
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
          className="text-xs text-red-500 hover:underline"

          onClick={() => onReport && onReport(review.id)}

main:components/reviews/ReviewCard.tsx
:backup-problematic-files/reviews/ReviewCard.tsx
:backup-problematic-files/reviews/ReviewCard.tsx
        >
          Report abuse
        </button>
      </div>
:backup-problematic-files/reviews/ReviewCard.tsx
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
      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className='pill pill-success'>Would work again</span>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}

      </div>;
      <p className='text-sm leading-6'>{review && review.text}</p>;

      <div className='flex flex-wrap gap-2 mt-3'>;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className='pill'>;
            Communication: {review && review.categories.communication}★;
          </span>;

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
}
};
<<<<<<< HEAD
=======
export default ReviewCard;        {review && review.categories?.wouldWorkWithAgain && (;
          <span className="pill pill-success">Would work again</span>;
        )}
      </div>;
      <p className="text-sm leading-6">{review && review.text}</p>;

      <div className="flex flex-wrap gap-2 mt-3">;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className="pill">Communication: {review && review.categories.communication}★</span>;
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9

:components/reviews/ReviewCard.tsx
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

:components/reviews/ReviewCard.tsx
main:components/reviews/ReviewCard.tsx
export default ReviewCard;
:backup-problematic-files/reviews/ReviewCard.tsx
main:components/reviews/ReviewCard.tsx
export default ReviewCard;
:backup-problematic-files/reviews/ReviewCard.tsx

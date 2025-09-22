

}</div> </div>) };

:backup-problematic-files/reviews/ReviewCard.tsx
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
<<<<<<< HEAD

=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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

type Props = {;
  review: PublicReview,;
  onReport?: (id: string) => void;


<<<<<<< HEAD
          <StarRating
          <StarRating;
=======
    <div className='enhanced-card hover:shadow-lg transition-shadow'>
      <div className='flex items-center justify-between mb-2'>
        <div className='flex items-center gap-2'>
          <StarRating
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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


        >
          Report abuse
        </button>
      </div>


      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className='pill pill-success'>Would work again</span>
        )}


      </div>;
      <p className='text-sm leading-6'>{review && review.text}</p>;

        )}
        {typeof review && review.categories?.qualityOfWork === 'number' && (;
          <span className="pill">Quality: {review && review.categories.qualityOfWork}★</span>;
        )}
        {typeof review && review.categories?.timeliness === 'number' && (;
          <span className="pill">Timeliness: {review && review.categories.timeliness}★</span>;
        )}

<<<<<<< HEAD
        >
          Report abuse
        </button>
      </div>

export default ReviewCard;        {review.categories?.wouldWorkWithAgain && (
          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{review.text}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
};
export default ReviewCard;        {review && review.categories?.wouldWorkWithAgain && (;
          <span className="pill pill-success">Would work again</span>;
        )}
      </div>;
      <p className="text-sm leading-6">{review && review.text}</p>;
      <div className="flex flex-wrap gap-2 mt-3">;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className="pill">Communication: {review && review.categories.communication}★</span>;
        )}
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

export default ReviewCard;



export default ReviewCard;

<<<<<<< HEAD
:components/reviews/ReviewCard.tsx
main:components/reviews/ReviewCard.tsx
export default ReviewCard;
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

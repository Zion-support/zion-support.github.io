

}</div> </div>) };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewCard.tsx
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewCard.tsx
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
import {Star} from 'lucide-react';

type Props = {;
  review: PublicReview,;
  onReport?: (id: string) => void;
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {;

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
=======
  return (


          onClick={() => onReport && onReport(review.id)}




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        >
          Report abuse
        </button>
      </div>

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


};
export default ReviewCard;        {review && review.categories?.wouldWorkWithAgain && (;
          <span className="pill pill-success">Would work again</span>;
        )}
      </div>;
      <p className="text-sm leading-6">{review && review.text}</p>;

      <div className="flex flex-wrap gap-2 mt-3">;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className="pill">Communication: {review && review.categories.communication}★</span>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
        {typeof review && review.categories?.qualityOfWork === 'number' && (;
          <span className="pill">Quality: {review && review.categories.qualityOfWork}★</span>;
        )}
        {typeof review && review.categories?.timeliness === 'number' && (;
          <span className="pill">Timeliness: {review && review.categories.timeliness}★</span>;
        )}


export default ReviewCard;


=======
> Report abuse </button> </div>);
}</div> </div>) }
;
const ReviewCard: React.FC < Props> = ({ review, on_report }) => {
  return (import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types / reviews';
import {Star} from 'lucide-react';
type Props = {
  review: PublicReview,
  on_report?: (id: string) => void;
const ReviewCard: React.FC < Props> = ({ review, on_report }) => {
  return (
    <div className='enhanced - card hover:shadow - lg transition - shadow'>;
      <div className='flex items - center justify - between mb - 2'>;
        <div className='flex items - center gap - 2'>;
          <StarRating;
            value={review.rating}
            on_change={() => {}}
            read_only;
            size={18}
          />;
          <span className='text - sm text - gray - 500'>;
            {new Date (review.created_at).toLocaleDateString ()}
          </span>;
        </div>;
        <button;
          className='text - xs text - red - 500 hover:underline'          on_click={() => on_report && on_report (review.id)}    <div className="enhanced - card hover: shadow - lg transition - shadow">;
      <div className="flex items - center justify - between mb - 2">;
        <div className="flex items - center gap - 2">;
          <StarRating value={review.rating} on_change={() => {}} read_only size={18} />;
          <span className="text - sm text - gray - 500">{new Date (review.created_at).toLocaleDateString ()}</span>;
        </div>;
        <button;
          className="text - xs text - red - 500 hover:underline";
        >;
          Report abuse;
        </button>;
      </div>;
      <div className='flex items - center gap - 2 mb - 3'>;
        <span className='text - sm font - medium'>{review.author_name}</span>;
        {review.categories?.wouldWorkWithAgain && (
          <span className='pill pill - success'>Would work again</span>)}
      </div>;
      <p className='text - sm leading - 6'>{review.text}</p>;
      <div className='flex flex - wrap gap - 2 mt - 3'>;
        {typeof review.categories?.communication === 'number' && (
          <span className='pill'>;
            Communication: {review.categories.communication}★;
          </span>)}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className='pill'>;
            Quality: {review.categories.qualityOfWork}★;
          </span>)}
        {typeof review.categories?.timeliness === 'number' && (
          <span className='pill'>;
            Timeliness: {review.categories.timeliness}★;
          </span>)}
      </div>;
    </div>);
}
;
export default ReviewCard;        {review.categories?.wouldWorkWithAgain && (
          <span className="pill pill - success">Would work again</span>)}
      </div>;
      <p className="text - sm leading - 6">{review.text}</p>;
      <div className="flex flex - wrap gap - 2 mt - 3">;
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>)}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className="pill">Quality: {review.categories.qualityOfWork}★</span>)}
        {typeof review.categories?.timeliness === 'number' && (
          <span className="pill">Timeliness: {review.categories.timeliness}★</span>)}
      </div>;
    </div>);
}
;
export default ReviewCard;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======
=======
>>>>>>> main:components/reviews/ReviewCard.tsx
export default ReviewCard;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewCard.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
import React from 'react',
import StarRating from './StarRating',
import type { PublicReview } from '../../types/reviews',
type Props = {
  review: PublicReview,
  onReport?: (id: string) => void
},

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (
    <div className=&quot;enhanced-card hover:shadow-lg transition-shadow&quot;>
      <div className=&quot;flex items-center justify-between mb-2&quot;>
        <div className=&quot;flex items-center gap-2&quot;>
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className=&quot;text-sm text-gray-500&quot;>{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className=&quot;text-xs text-red-500 hover:underline&quot;
          onClick={() => onReport && onReport(review.id)}
        >
          Report abuse
        </button>
      </div>
      <div className=&quot;flex items-center gap-2 mb-3&quot;>
        <span className=&quot;text-sm font-medium&quot;>{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className=&quot;pill pill-success&quot;>Would work again</span>
        )}
      </div>
      <p className=&quot;text-sm leading-6&quot;>{review.text}</p>

      <div className=&quot;flex flex-wrap gap-2 mt-3&quot;>
        {typeof review.categories?.communication === 'number' && (
          <span className=&quot;pill&quot;>Communication: {review.categories.communication}★</span>
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className=&quot;pill&quot;>Quality: {review.categories.qualityOfWork}★</span>
        )}
        {typeof review.categories?.timeliness === 'number' && (
          <span className=&quot;pill&quot;>Timeliness: {review.categories.timeliness}★</span>
=======
import React from 'react',;
import StarRating from './StarRating',;
import type { PublicReview } from '../../types/reviews',;
type Props = {;
  review: PublicReview,;
  onReport?: (id: string) => void;
},;
const ReviewCard: React.FC<Props> = ({ review, onReport }) => {;
  return (;
    <div className="enhanced-card hover:shadow-lg transition-shadow">;
      <div className="flex items-center justify-between mb-2">;
        <div className="flex items-center gap-2">;
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />;
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>;
        </div>;
        <button;
          className="text-xs text-red-500 hover:underline";
          onClick={() => onReport && onReport(review.id)}
        >;
          Report abuse;
        </button>;
      </div>;
      <div className="flex items-center gap-2 mb-3">;
        <span className="text-sm font-medium">{review.authorName}</span>;
        {review.categories?.wouldWorkWithAgain && (;
          <span className="pill pill-success">Would work again</span>;
        )}
      </div>;
      <p className="text-sm leading-6">{review.text}</p>;
      <div className="flex flex-wrap gap-2 mt-3">;
        {typeof review.categories?.communication === 'number' && (;
          <span className="pill">Communication: {review.categories.communication}★</span>;
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (;
          <span className="pill">Quality: {review.categories.qualityOfWork}★</span>;
        )}
        {typeof review.categories?.timeliness === 'number' && (;
          <span className="pill">Timeliness: {review.categories.timeliness}★</span>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      </div>;
    </div>;
  );
},;
export default ReviewCard;
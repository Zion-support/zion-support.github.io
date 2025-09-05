import React from 'react';
import StarRating from './StarRating';
import type {_PublicReview} from '../../types/reviews';

type Props = {_review: PublicReview;
  onReport?: (_id: string) => void;};

const ReviewCard: React.FC<Props> = (_{_review, _onReport}) => {_return (_<div className="enhanced-card hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={_() => {}} readOnly size={_18} />
          <span className="text-sm text-gray-500">{_new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
          onClick={_() => onReport && onReport(review.id)}
        >
          Report abuse
        </button>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium">{_review.authorName}</span>
        {_review.categories?.wouldWorkWithAgain && (
          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{_review.text}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {_typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
        )}
        {_typeof review.categories?.qualityOfWork === 'number' && (
          <span className="pill">Quality: {review.categories.qualityOfWork}★</span>
        )}
        {_typeof review.categories?.timeliness === 'number' && (
          <span className="pill">Timeliness: {review.categories.timeliness}★</span>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
<<<<<<< HEAD
 > Report abuse </button> </div>) 
}</div> </div>) };

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (
=======
<<<<<<< HEAD
<<<<<<< HEAD
 > Report abuse </button> </div>) 
}</div> </div>) 
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';
import { Star } from 'lucide-react';
type Props = {
  review: PublicReview,
  onReport?: (id: string) => void
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
          className='text-xs text-red-500 hover:underline'          onClick={() => onReport && onReport(review.id)}
=======
          className='text-xs text-red-500 hover:underline'
=======
    <div className="enhanced-card hover: shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    <div className="enhanced-card hover: shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          onClick={() => onReport && onReport(review.id)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        >
          Report abuse
        </button>
      </div>
<<<<<<< HEAD
      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
=======
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium">{review.authorName}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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

<<<<<<< HEAD
export default ReviewCard;
=======
<<<<<<< HEAD
export default ReviewCard;
=======
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
      </div>
    </div>
  )
};

export default ReviewCard;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default ReviewCard;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

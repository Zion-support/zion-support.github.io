import React from 'react';

interface ProductReviewsProps {
  productId?: string;
  reviews?: Array<{
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

export default function ProductReviews({ productId, reviews = [] }: ProductReviewsProps) {
  return (
    <div className="product-reviews">
      <h3>Product Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <span className="author">{review.author}</span>
                <span className="rating">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="review-comment">{review.comment}</p>
              <span className="review-date">{review.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
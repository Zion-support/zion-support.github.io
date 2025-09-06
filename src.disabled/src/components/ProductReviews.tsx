import React from 'react';

interface ProductReviewsProps {
  className?: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductReviews</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductReviews;
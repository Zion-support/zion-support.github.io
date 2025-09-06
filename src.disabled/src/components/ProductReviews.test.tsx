import React from 'react';

interface ProductReviews.testProps {
  className?: string;
}

const ProductReviews.test: React.FC<ProductReviews.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductReviews.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductReviews.test;
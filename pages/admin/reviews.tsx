import React from 'react';

interface ReviewsProps {
  className?: string;
}

const Reviews: React.FC<ReviewsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Reviews</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Reviews;
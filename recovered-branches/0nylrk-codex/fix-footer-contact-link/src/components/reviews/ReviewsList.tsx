import React from 'react';

interface ReviewsListProps {
  className?: string;
}

const ReviewsList: React.FC<ReviewsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewsList;
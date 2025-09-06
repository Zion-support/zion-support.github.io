import React from 'react';

interface ReviewsModerationProps {
  className?: string;
}

const ReviewsModeration: React.FC<ReviewsModerationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewsModeration</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewsModeration;
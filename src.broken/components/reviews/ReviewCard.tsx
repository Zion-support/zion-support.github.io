import React from 'react';

interface ReviewCardProps {
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewCard;
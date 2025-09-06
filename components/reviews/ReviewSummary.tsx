import React from 'react';

interface ReviewSummaryProps {
  className?: string;
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewSummary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewSummary;
import React from 'react';

interface ReviewStatsProps {
  className?: string;
}

const ReviewStats: React.FC<ReviewStatsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReviewStats</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReviewStats;
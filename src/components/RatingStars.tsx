import React from 'react';

interface RatingStarsProps {
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RatingStars</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RatingStars;
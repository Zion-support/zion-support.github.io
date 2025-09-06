import React from 'react';

interface StarRatingProps {
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StarRating</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StarRating;
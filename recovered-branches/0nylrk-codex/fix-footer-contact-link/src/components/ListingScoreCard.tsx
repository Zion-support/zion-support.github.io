import React from 'react';

interface ListingScoreCardProps {
  className?: string;
}

const ListingScoreCard: React.FC<ListingScoreCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ListingScoreCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ListingScoreCard;
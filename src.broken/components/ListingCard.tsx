import React from 'react';

interface ListingCardProps {
  className?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ListingCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ListingCard;
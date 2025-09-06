import React from 'react';

interface ListingCard.testProps {
  className?: string;
}

const ListingCard.test: React.FC<ListingCard.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ListingCard.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ListingCard.test;
import React from 'react';

interface BrowseCardsProps {
  className?: string;
}

const BrowseCards: React.FC<BrowseCardsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BrowseCards</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BrowseCards;
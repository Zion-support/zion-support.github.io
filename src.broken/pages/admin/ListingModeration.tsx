import React from 'react';

interface ListingModerationProps {
  className?: string;
}

const ListingModeration: React.FC<ListingModerationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ListingModeration</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ListingModeration;
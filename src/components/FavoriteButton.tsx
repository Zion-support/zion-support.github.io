import React from 'react';

interface FavoriteButtonProps {
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FavoriteButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FavoriteButton;
import React from 'react';

interface FavoritesProps {
  className?: string;
}

const Favorites: React.FC<FavoritesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Favorites</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Favorites;
import React from 'react';

interface FavoritesContextProps {
  className?: string;
}

const FavoritesContext: React.FC<FavoritesContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FavoritesContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FavoritesContext;
import React from 'react';

interface FavoriteButton.testProps {
  className?: string;
}

const FavoriteButton.test: React.FC<FavoriteButton.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FavoriteButton.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FavoriteButton.test;
import React from 'react';

interface AIToolCardProps {
  className?: string;
  children?: React.ReactNode;
}

const AIToolCard = ({ className = '', children }) => {
  return (
    <div className={`aitoolcard-component ${className}`}>
      {children}
    </div>
  );
};

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;
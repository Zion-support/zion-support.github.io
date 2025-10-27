import React from 'react';

interface _AIToolCardProps {
  className?: string;
  children?: React.ReactNode;
}

const AIToolCard: React.FC<_AIToolCardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ${className}`}>
      {children}
    </div>
  );
};

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;
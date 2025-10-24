import React from 'react';

interface AIToolCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const AIToolCard: React.FC<AIToolCardProps> = ({ className = '', children }) => {
  return (
    <div className={`aitoolcard ${className}`}>
      {children}
    </div>
  );
};

export default AIToolCard;
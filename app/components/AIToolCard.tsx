'use client';

import React, { memo } from 'react';

interface AIToolCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const AIToolCard: React.FC<AIToolCardProps> = memo(({ 
  title, 
  description, 
  icon, 
  className = '',
  children 
}) => {
  return (
    <div className={`ai-tool-card ${className}`}>
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
});

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;
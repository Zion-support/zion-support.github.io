import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const OptimizedCard = React.memo<CardProps>(({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
});

OptimizedCard.displayName = 'OptimizedCard';

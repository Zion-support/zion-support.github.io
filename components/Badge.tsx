import React from 'react';

interface BadgeProps {
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div 
      className={`badge ${className}`}
      data-testid='badge'
    >
      {children || `Badge Component`}
    </div>
  );
};

export default Badge;
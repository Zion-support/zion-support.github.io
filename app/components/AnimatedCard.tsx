import React from 'react';

interface AnimatedCardProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ className = '', children }) => {
  return (
    <div className={`animatedcard ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
import React from 'react';

interface AnimatedCardProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ className = '', children }) => {
  return (
    <div className={`animatedcard-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">AnimatedCard</h3>
          <p className="text-gray-600">This is the AnimatedCard component.</p>
        </div>
      )}
    </div>
  );
};

export default AnimatedCard;
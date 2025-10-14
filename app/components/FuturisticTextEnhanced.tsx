import React from 'react';

interface FuturisticTextEnhancedProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristictextenhanced ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticTextEnhanced;
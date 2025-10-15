import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`futuristictext ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticText;
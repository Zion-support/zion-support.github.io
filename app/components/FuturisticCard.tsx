import React from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`futuristiccard ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;
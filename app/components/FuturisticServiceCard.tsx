import React from 'react';

interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristicservicecard ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticServiceCard;
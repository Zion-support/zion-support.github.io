import React from 'react';

interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristicservicecard-component ${className}`}>
      {children}
    </div>
  );
};

FuturisticServiceCard.displayName = 'FuturisticServiceCard';

export default FuturisticServiceCard;
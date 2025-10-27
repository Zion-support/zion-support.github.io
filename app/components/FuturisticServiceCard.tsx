import React from 'react';
interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'futuristicservicecard ' + className}>
      {children || <p>FuturisticServiceCard component</p>}
    </div>
  );
};

export default FuturisticServiceCard;

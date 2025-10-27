import React from 'react';
interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticCard = ({ 
  className = '', 
  children 
}: FuturisticCardProps) => {
  return (
    <div className={'futuristiccard ' + className}>
      {children || <p>FuturisticCard component</p>}
    </div>
  );
};

export default FuturisticCard;
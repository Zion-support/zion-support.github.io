import React from 'react';

interface FuturisticCardProps {
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FuturisticCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FuturisticCard;
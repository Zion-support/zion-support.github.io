'use client';
import React from 'react';

interface FuturisticCardProps {
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>FuturisticCard</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default FuturisticCard;

'use client'
import React from 'react';

interface FuturisticServiceCardProps {
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Futuristic Service Card</h2>
      <p className="text-gray-600">This is a placeholder component for Futuristic Service Card.</p>
    </div>
  );
};

export default FuturisticServiceCard;

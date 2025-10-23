"use client";
import React from 'react';

interface FuturisticServiceCardProps {
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        FuturisticServiceCard
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default FuturisticServiceCard;
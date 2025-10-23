"use client";
import React from 'react';

interface FuturisticHeroProps {
  className?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        FuturisticHero
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default FuturisticHero;
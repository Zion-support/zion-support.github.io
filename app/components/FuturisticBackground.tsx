"use client";
import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        FuturisticBackground
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default FuturisticBackground;
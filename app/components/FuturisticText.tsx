'use client'
import React from 'react';

interface FuturisticTextProps {
  className?: string;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Futuristic Text</h2>
      <p className="text-gray-600">This is a placeholder component for Futuristic Text.</p>
    </div>
  );
};

export default FuturisticText;

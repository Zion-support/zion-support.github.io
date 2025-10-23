"use client";
import React from 'react';

interface NeonButtonProps {
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        NeonButton
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default NeonButton;
'use client'
import React from 'react';

interface NeonButtonProps {
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Neon Button</h2>
      <p className="text-gray-600">This is a placeholder component for Neon Button.</p>
    </div>
  );
};

export default NeonButton;

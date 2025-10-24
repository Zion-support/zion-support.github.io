'use client';
import React from 'react';

interface NeonButtonProps {
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>NeonButton</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default NeonButton;

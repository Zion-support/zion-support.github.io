'use client';
import React from 'react';

interface FuturisticButtonProps {
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>FuturisticButton</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default FuturisticButton;

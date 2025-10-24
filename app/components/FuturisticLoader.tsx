'use client';
import React from 'react';

interface FuturisticLoaderProps {
  className?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>FuturisticLoader</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default FuturisticLoader;

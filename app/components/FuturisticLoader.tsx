'use client'
import React from 'react';

interface FuturisticLoaderProps {
  className?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Futuristic Loader</h2>
      <p className="text-gray-600">This is a placeholder component for Futuristic Loader.</p>
    </div>
  );
};

export default FuturisticLoader;

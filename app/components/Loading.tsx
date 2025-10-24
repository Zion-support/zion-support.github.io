'use client'
import React from 'react';

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Loading</h2>
      <p className="text-gray-600">This is a placeholder component for Loading.</p>
    </div>
  );
};

export default Loading;

"use client";
import React from 'react';

interface LoadingStatesProps {
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        LoadingStates
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default LoadingStates;
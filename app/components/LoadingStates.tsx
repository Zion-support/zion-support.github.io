'use client';

import React from 'react';

interface LoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  type = 'spinner', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const renderSpinner = () => (
    <div className={`animate-spin rounded-full border-b-2 border-white ${sizeClasses[size]} ${className}`}></div>
  );

  const renderSkeleton = () => (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );

  const renderDots = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`bg-white rounded-full animate-bounce ${sizeClasses[size]}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`bg-gray-700 rounded animate-pulse ${sizeClasses[size]} ${className}`}></div>
  );

  switch (type) {
    case 'skeleton':
      return renderSkeleton();
    case 'dots':
      return renderDots();
    case 'pulse':
      return renderPulse();
    default:
      return renderSpinner();
  }
};

export default LoadingStates;
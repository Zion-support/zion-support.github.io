'use client';

import React from 'react';

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function FuturisticLoader({ size = 'md', className = '' }: FuturisticLoaderProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-2 border-purple-400 border-r-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
      </div>
    </div>
  );
}
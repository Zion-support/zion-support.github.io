'use client';

import React from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticCard({ className = '', children, ...props }: FuturisticCardProps) {
  return (
    <div className={`futuristiccard-component ${className}`} {...props}>
      {children || (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            FuturisticCard
          </h1>
          <p className="text-gray-600">
            This component is under development.
          </p>
        </div>
      )}
    </div>
  );
}
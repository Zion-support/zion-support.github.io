'use client';
import React from 'react';

export default function EnhancedLoadingStates() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
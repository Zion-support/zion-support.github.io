'use client';

import React from 'react';

interface EnhancedLoadingProps {
  message?: string;
  className?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = 'Loading...',
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-gray-600">{message}</span>
    </div>
  );
};

export default EnhancedLoading;

import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'text' | 'dots';
  count?: number;
  className?: string;
}

const EnhancedLoadingStates: React.FC<LoadingStatesProps> = ({ 
  type = 'spinner', 
  count = 3, 
  className = '' 
}) => {
  switch (type) {
    case 'spinner':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      );

    case 'skeleton':
      return (
        <div className={`space-y-4 ${className}`}>
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className="flex items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      );

    case 'text':
      return (
        <div className={`space-y-3 animate-pulse ${className}`}>
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded w-5/6"></div>
              <div className="h-4 bg-gray-600 rounded w-4/6"></div>
            </div>
          ))}
        </div>
      );

    case 'dots':
      return (
        <div className={`flex space-x-2 ${className}`}>
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      );
  }
};

export default EnhancedLoadingStates;
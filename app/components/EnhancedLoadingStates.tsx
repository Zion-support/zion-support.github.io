'use client';
import React from 'react';

interface EnhancedLoadingStatesProps {
  state: 'loading' | 'error' | 'empty' | 'success';
  message?: string;
  onRetry?: () => void;
  className?: string;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({
  state,
  message,
  onRetry,
  className = ''
}) => {
  const getStateContent = () => {
    switch (state) {
      case 'loading':
        return {
          icon: (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          ),
          message: message || 'Loading...',
          showRetry: false
        };
      case 'error':
        return {
          icon: (
            <div className="text-red-500 text-4xl">⚠️</div>
          ),
          message: message || 'Something went wrong. Please try again.',
          showRetry: true
        };
      case 'empty':
        return {
          icon: (
            <div className="text-gray-400 text-4xl">📭</div>
          ),
          message: message || 'No data available.',
          showRetry: false
        };
      case 'success':
        return {
          icon: (
            <div className="text-green-500 text-4xl">✅</div>
          ),
          message: message || 'Success!',
          showRetry: false
        };
      default:
        return {
          icon: null,
          message: '',
          showRetry: false
        };
    }
  };

  const { icon, message: stateMessage, showRetry } = getStateContent();

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      <p className="text-gray-600 text-center mb-4">{stateMessage}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default EnhancedLoadingStates;
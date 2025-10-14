import React from 'react';

interface LoadingStatesProps {
  state: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  onRetry?: () => void;
}

const EnhancedLoadingStates: React.FC<LoadingStatesProps> = ({ 
  state, 
  message,
  onRetry 
}) => {
  const renderState = () => {
    switch (state) {
      case 'idle':
        return (
          <div className="text-center text-gray-500">
            <p>Ready to start</p>
          </div>
        );
      
      case 'loading':
        return (
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">{message || 'Loading...'}</p>
          </div>
        );
      
      case 'success':
        return (
          <div className="text-center text-green-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{message || 'Success!'}</p>
          </div>
        );
      
      case 'error':
        return (
          <div className="text-center text-red-600">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="mb-4">{message || 'Something went wrong'}</p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      {renderState()}
    </div>
  );
};

export default EnhancedLoadingStates;
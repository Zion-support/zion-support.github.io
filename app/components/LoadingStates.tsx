import React from 'react';

interface LoadingStatesProps {
  state: 'idle' | 'loading' | 'success' | 'error';
  children: React.ReactNode;
  loadingText?: string;
  successText?: string;
  errorText?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  state,
  children,
  loadingText = 'Loading...',
  successText = 'Success!',
  errorText = 'Error occurred'
}) => {
  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">{loadingText}</p>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Error</h3>
        <p className="text-gray-600">{errorText}</p>
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Success</h3>
        <p className="text-gray-600">{successText}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingStates;
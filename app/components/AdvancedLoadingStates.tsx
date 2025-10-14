import React, { useState, useEffect } from 'react';

interface LoadingState {
  isLoading: boolean;
  progress: number;
  message: string;
}

const AdvancedLoadingStates: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    message: 'Loading...'
  });

  useEffect(() => {
    // Simulate loading states for different scenarios
    const simulateLoading = () => {
      setLoadingState({
        isLoading: true,
        progress: 0,
        message: 'Initializing...'
      });

      const interval = setInterval(() => {
        setLoadingState(prev => {
          const newProgress = prev.progress + Math.random() * 20;
          let message = 'Loading...';

          if (newProgress < 30) {
            message = 'Loading resources...';
          } else if (newProgress < 60) {
            message = 'Processing data...';
          } else if (newProgress < 90) {
            message = 'Finalizing...';
          } else {
            message = 'Almost done...';
          }

          if (newProgress >= 100) {
            clearInterval(interval);
            return {
              isLoading: false,
              progress: 100,
              message: 'Complete!'
            };
          }

          return {
            ...prev,
            progress: Math.min(newProgress, 100),
            message
          };
        });
      }, 200);

      return () => clearInterval(interval);
    };

    // Only show loading in development
    if (process.env.NODE_ENV === 'development') {
      const timeout = setTimeout(simulateLoading, 1000);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (!loadingState.isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {loadingState.message}
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingState.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            {Math.round(loadingState.progress)}% complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;
import React, { useState, useEffect } from 'react';
import { AppRouter } from './router';
import { LoadingSpinner } from './components/LoadingStates';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate app initialization
    const initializeApp = async () => {
      try {
        // Simulate loading steps
        const steps = [
          { progress: 20, task: 'Loading core modules' },
          { progress: 40, task: 'Initializing performance monitoring' },
          { progress: 60, task: 'Setting up accessibility features' },
          { progress: 80, task: 'Configuring security settings' },
          { progress: 100, task: 'App ready' }
        ];

        for (const step of steps) {
          setLoadingProgress(step.progress);
          await new Promise(resolve => setTimeout(resolve, 200));
        }

        setIsLoading(false);
      } catch (error) {
        console.error('App initialization failed:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="relative">
          {/* Spinner */}
          <div className="w-12 h-12 text-blue-500">
            <svg
              className="animate-spin w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>

          {/* Progress Ring */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - loadingProgress / 100)}`}
                className="transition-all duration-300 ease-in-out"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Progress Text */}
        <div className="mt-4 text-center">
          <div className="text-white text-lg font-semibold mb-2">
            Loading Zion AI Platform...
          </div>
          <div className="text-gray-300 text-sm">
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
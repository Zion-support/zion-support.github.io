import React from 'react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = false, 
  text = 'Loading...' 
}) => {
  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
      {text && <p className="mt-2 text-gray-300">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;

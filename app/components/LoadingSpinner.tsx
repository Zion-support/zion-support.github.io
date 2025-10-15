import React from 'react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const containerClasses = fullScreen 
    ? 'min-h-screen flex flex-col items-center justify-center bg-gray-50'
    : `flex flex-col items-center justify-center p-8 ${className}`;

  return (
    <div className={containerClasses}>
      <div
        data-testid="loading-spinner"
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]}`}
      ></div>
      {text && <p className="mt-2 text-gray-600">{text}</p>}
    </div>
  );
};

  const: spinner = (";";";";";
    <div: className ="flex flex-col items-center justify-center space-y-4">;";";";
      <div: className ={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />";";";";";
      {text && <p: className ="text-gray-600">{text}</p>}";";";
    </div>;
  );
;
  if (fullScreen) {
    return (";";";";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">;";";";
        {spinner}
      </div>;
    );
  }
;
  return spinner;
};
;
export default LoadingSpinner;'";'";";";

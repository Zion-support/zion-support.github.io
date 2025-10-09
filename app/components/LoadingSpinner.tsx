import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" role="status" aria-label="Loading">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="w-16 h-16 mx-auto mb-8 relative">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
          <div className="absolute inset-1 rounded-md bg-slate-900 flex items-center justify-center">
            <div className="w-8 h-8 text-cyan-400 animate-spin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4 cyber-text">
          Zion Tech Group
        </h2>
        <p className="text-gray-300 mb-8">
          Loading advanced AI solutions...
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
  text,
  fullScreen = false,
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
<<<<<<< HEAD
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-cyan-400 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
      </div>
=======
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-purple-500',
    white: 'border-white',
    gray: 'border-gray-500',
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className={`mt-3 text-sm ${
          color === 'white' ? 'text-white' : 
          color === 'gray' ? 'text-gray-500' : 
          'text-gray-600'
        }`}>
          {text}
        </p>
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 shadow-xl">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
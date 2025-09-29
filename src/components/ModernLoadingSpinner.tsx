import { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  fullScreen?: boolean;
  progress?: number;
  showProgress?: boolean;
}

export const ModernLoadingSpinner = ({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  progress,
  showProgress = false,
}: LoadingSpinnerProps) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: 'text-purple-600',
    secondary: 'text-pink-600',
    white: 'text-white',
    gray: 'text-gray-600',
  };

  const spinner = (
    <div className={`animate-spin rounded-full border-2 border-gray-200 border-t-current ${sizeClasses[size]} ${colorClasses[color]}`} />
  );

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {spinner}
        {showProgress && progress !== undefined && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
        )}
      </div>
      
      {text && (
        <div className="text-center">
          <p className={`text-sm font-medium ${colorClasses[color]}`}>
            {text}{dots}
          </p>
        </div>
      )}
      
      {showProgress && progress !== undefined && (
        <div className="w-48 bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full mx-4">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

export default ModernLoadingSpinner;
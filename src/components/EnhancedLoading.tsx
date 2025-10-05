import React, { useState, useEffect } from 'react';

interface LoadingProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  fullScreen?: boolean;
  timeout?: number;
  onTimeout?: () => void;
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  showProgress = false,
  progress = 0,
  size = 'medium',
  variant = 'spinner',
  fullScreen = false,
  timeout,
  onTimeout
}) => {
  const [dots, setDots] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Handle timeout
  useEffect(() => {
    if (timeout && onTimeout) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onTimeout();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  if (!isVisible) return null;

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4';

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`} />
  );

  const renderSkeleton = () => (
    <div className="space-y-2 w-full max-w-md">
      <div className="h-4 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
    </div>
  );

  const renderProgressBar = () => (
    <div className="w-full max-w-xs">
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      {showProgress && (
        <div className="text-center text-sm text-gray-600 mt-2">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {renderLoader()}
        </div>
        
        {variant !== 'skeleton' && (
          <div className="text-gray-600 text-sm">
            {message}{dots}
          </div>
        )}
        
        {showProgress && variant !== 'skeleton' && (
          <div className="mt-4">
            {renderProgressBar()}
          </div>
        )}
      </div>
    </div>
  );
};

// Loading overlay component
export const LoadingOverlay: React.FC<LoadingProps> = (props) => (
  <EnhancedLoading {...props} fullScreen />
);

// Loading button component
interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  loadingText = 'Loading...',
  children,
  disabled,
  className = '',
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || loading}
    className={`relative ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    )}
    <span className={loading ? 'opacity-0' : ''}>
      {loading ? loadingText : children}
    </span>
  </button>
);

// Loading page component
export const LoadingPage: React.FC<{ message?: string }> = ({ 
  message = 'Loading page...' 
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{message}</h2>
      <p className="text-gray-600">Please wait while we load the content...</p>
    </div>
  </div>
);

export default EnhancedLoading;
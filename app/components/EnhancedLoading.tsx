import React from 'react';
import { Loader2, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface LoadingStateProps {
  type?: 'loading' | 'success' | 'error' | 'retry';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  showSpinner?: boolean;
  onRetry?: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  type = 'loading',
  message,
  size = 'md',
  showSpinner = true,
  onRetry
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-8'
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className={`${sizeClasses[size]} text-green-500`} />;
      case 'error':
        return <AlertCircle className={`${sizeClasses[size]} text-red-500`} />;
      case 'retry':
        return <RefreshCw className={`${sizeClasses[size]} text-blue-500`} />;
      default:
        return showSpinner ? (
          <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin`} />
        ) : null;
    }
  };

  const getMessage = () => {
    if (message) return message;
    
    switch (type) {
      case 'success':
        return 'Success!';
      case 'error':
        return 'Something went wrong. Please try again.';
      case 'retry':
        return 'Retrying...';
      default:
        return 'Loading...';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerClasses[size]} bg-white/5 backdrop-blur-sm rounded-lg border border-white/10`}>
      {getIcon()}
      <p className="mt-2 text-sm text-gray-300 text-center">{getMessage()}</p>
      {type === 'error' && onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default LoadingState;
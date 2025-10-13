import React from 'react';
import { Loader2, Zap } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'spinner' | 'dots' | 'pulse';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        );
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-cyan-400 rounded-full animate-pulse`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        );
      default:
        return (
          <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        {renderLoader()}
        <p className={`mt-4 text-gray-300 ${textSizeClasses[size]} font-medium`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export { LoadingPage };
export default LoadingPage;

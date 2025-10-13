import React from 'react';
import { Brain, Zap, Shield, Globe } from 'lucide-react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  ariaLabel?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "Loading...", 
  size = 'md',
  fullScreen = true,
  ariaLabel = "Loading content"
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const icons = [Brain, Zap, Shield, Globe];
  const [currentIcon, setCurrentIcon] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  const containerClasses = fullScreen 
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses} role="status" aria-live="polite" aria-label={ariaLabel}>
      <div className="text-center">
        {/* Animated Icon */}
        <div className={`${sizeClasses[size]} mx-auto mb-6 relative`} aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
          <div className="relative bg-slate-900 rounded-full flex items-center justify-center h-full w-full">
            <CurrentIcon className={`${iconSizeClasses[size]} text-cyan-400 animate-spin`} />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white" id="loading-message">{message}</h2>
          <div className="flex items-center justify-center space-x-1" aria-hidden="true">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="mt-6 w-48 mx-auto" aria-hidden="true">
          <div className="bg-slate-800 rounded-full h-1 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full rounded-full animate-pulse"></div>
          </div>
        </div>
        <span className="sr-only">{ariaLabel}</span>
      </div>
    </div>
  );
};

export default Loading;
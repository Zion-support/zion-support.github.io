import React from 'react';
import { Loader2, Zap, Brain, Shield } from 'lucide-react';

interface EnhancedLoadingSpinnerProps {
  message?: string;
  type?: 'default' | 'ai' | 'security' | 'performance';
  size?: 'sm' | 'md' | 'lg';
  showProgress?: boolean;
  progress?: number;
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  message = "Loading...",
  type = 'default',
  size = 'md',
  showProgress = false,
  progress = 0
}) => {
  const getIcon = () => {
    switch (type) {
      case 'ai':
        return <Brain className="w-6 h-6" />;
      case 'security':
        return <Shield className="w-6 h-6" />;
      case 'performance':
        return <Zap className="w-6 h-6" />;
      default:
        return <Loader2 className="w-6 h-6" />;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'lg':
        return 'w-16 h-16';
      default:
        return 'w-12 h-12';
    }
  };

  const getMessageClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      {/* Animated Icon */}
      <div className="relative">
        <div className={`${getSizeClasses()} rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-spin`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-75 animate-ping"></div>
          <div className="relative z-10 text-white">
            {getIcon()}
          </div>
        </div>
        
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-20 animate-pulse"></div>
      </div>

      {/* Loading Message */}
      <div className="text-center">
        <p className={`${getMessageClasses()} font-medium text-gray-300 mb-2`}>
          {message}
        </p>
        
        {/* Progress Bar */}
        {showProgress && (
          <div className="w-48 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            ></div>
          </div>
        )}
        
        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-1 mt-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Type-specific additional info */}
      {type === 'ai' && (
        <p className="text-xs text-gray-400 text-center max-w-xs">
          Processing AI algorithms and machine learning models...
        </p>
      )}
      
      {type === 'security' && (
        <p className="text-xs text-gray-400 text-center max-w-xs">
          Verifying security protocols and encryption...
        </p>
      )}
      
      {type === 'performance' && (
        <p className="text-xs text-gray-400 text-center max-w-xs">
          Optimizing performance and loading resources...
        </p>
      )}
    </div>
  );
};

export default EnhancedLoadingSpinner;
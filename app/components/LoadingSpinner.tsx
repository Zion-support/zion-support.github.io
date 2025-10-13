import React from 'react';
import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bounce' | 'cyber';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse`} />
        );
      
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-cyan-400 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      
      case 'bounce':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-bounce`} />
        );
      
      case 'cyber':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-8 h-8'} text-cyan-400 animate-pulse`} />
            </div>
          </div>
        );
      
      default:
        return <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderSpinner()}
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-300 animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          {content}
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-pink-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

// Specialized loading components for different contexts
export const PageLoadingSpinner: React.FC<{ page?: string }> = ({ page = 'page' }) => (
  <LoadingSpinner
    size="lg"
    variant="cyber"
    text={`Loading ${page}...`}
    fullScreen
  />
);

export const ComponentLoadingSpinner: React.FC = () => (
  <LoadingSpinner
    size="md"
    variant="dots"
    text="Loading component..."
  />
);

export const DataLoadingSpinner: React.FC<{ dataType?: string }> = ({ dataType = 'data' }) => (
  <LoadingSpinner
    size="sm"
    variant="pulse"
    text={`Loading ${dataType}...`}
  />
);

// Service-specific loading spinners
export const AIServiceLoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="relative">
      <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Brain className="w-6 h-6 text-cyan-400 animate-pulse" />
      </div>
    </div>
    <p className="text-gray-300 animate-pulse">Initializing AI services...</p>
  </div>
);

export const SecurityLoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="relative">
      <div className="w-12 h-12 border-2 border-green-500/30 border-t-green-400 rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Shield className="w-6 h-6 text-green-400 animate-pulse" />
      </div>
    </div>
    <p className="text-gray-300 animate-pulse">Securing connection...</p>
  </div>
);

export const NetworkLoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="relative">
      <div className="w-12 h-12 border-2 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe className="w-6 h-6 text-blue-400 animate-pulse" />
      </div>
    </div>
    <p className="text-gray-300 animate-pulse">Connecting to network...</p>
  </div>
);

export default LoadingSpinner;
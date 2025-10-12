import React from 'react';

interface LoadingStatesProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'futuristic';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  type = 'futuristic',
  size = 'md',
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  if (type === 'futuristic') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <div className={`${sizeClasses[size]} mx-auto relative`}>
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-pink-500/20"></div>
          <div 
            className="absolute inset-2 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" 
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-4 rounded-full border-4 border-cyan-500/20"></div>
          <div 
            className="absolute inset-4 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" 
            style={{ animationDuration: '2s' }}
          ></div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'spinner') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
        <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin`}></div>
        {text && <p className="text-gray-600">{text}</p>}
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className={`${sizeClasses[size]} bg-blue-500 rounded-full animate-pulse`}></div>
      </div>
    );
  }

  if (type === 'bars') {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <div className="w-1 h-8 bg-blue-500 animate-pulse"></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-1 h-8 bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    );
  }

  return null;
};

export default LoadingStates;
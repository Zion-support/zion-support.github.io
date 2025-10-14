import React from "react";

interface LoadingStatesProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  type = 'spinner', 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
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

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin`}></div>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 bg-cyan-500 rounded-full animate-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-cyan-500 rounded-full animate-pulse`}></div>
  );

  const renderSkeleton = () => (
    <div className="space-y-2">
      <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
      <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded animate-pulse w-1/2"></div>
    </div>
  );

  const renderLoading = () => {
    switch (type) {
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
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderLoading()}
      {text && (
        <p className={`mt-4 text-gray-300 ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingStates;
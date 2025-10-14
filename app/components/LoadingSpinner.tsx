import React from 'react';

interface LoadingSpinnerProps {
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;;
  text?: string;
  fullScreen?: boolean;
  className?: string;
  color?: &apos;primary&apos; | &apos;secondary&apos; | &apos;white&apos;;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = '',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: &apos;w-4 h-4&apos;,
    md: &apos;w-8 h-8&apos;,
    lg: &apos;w-12 h-12&apos;
  };

  const colorClasses = {
    primary: &apos;border-purple-500&apos;,
    secondary: &apos;border-cyan-500&apos;,
    white: &apos;border-white&apos;
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 border-t-current rounded-full animate-spin ${colorClasses[color]}`}
      />
      {text && (
<p className="{text}
         ">$2</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-centerz-50">
        <div className="bg-slate-800 rounded-lg p-8shadow- xl">{spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

      </div>
export default LoadingSpinner;
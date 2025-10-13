import React from 'react';

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'quantum';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  size = 'md',
  variant = 'spinner',
  color = 'cyan',
  text
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const colorClasses = {
    cyan: "border-cyan-400 text-cyan-400",
    purple: "border-purple-400 text-purple-400",
    pink: "border-pink-400 text-pink-400",
    green: "border-green-400 text-green-400"
  };

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 bg-${color}-400 rounded-full animate-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse bg-current`} />
  );

  const renderQuantum = () => (
    <div className="relative">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`} />
      <div className={`absolute inset-0 ${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
      <div className={`absolute inset-2 ${sizeClasses[size === 'sm' ? 'sm' : 'md']} ${colorClasses[color]} rounded-full animate-pulse bg-current opacity-50`} />
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'quantum':
        return renderQuantum();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderLoader()}
      {text && (
        <div className={`text-${color}-400 text-sm font-medium animate-pulse`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default FuturisticLoader;
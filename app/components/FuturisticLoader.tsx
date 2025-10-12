import React from 'react';

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
        <div className="absolute inset-1 rounded-full border border-purple-400/30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default FuturisticLoader;

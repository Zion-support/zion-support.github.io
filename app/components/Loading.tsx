'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'Loading...',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="loading-container">
      <Loader2 className={`animate-spin ${sizeClasses[size]}`} />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default Loading;
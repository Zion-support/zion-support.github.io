import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const EnhancedLoading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = fullScreen 
    ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses} role="status" aria-label="Loading content">
      <div className="text-center">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400 mx-auto mb-4`} />
        <p className="text-white text-sm">{text}</p>
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};

export default EnhancedLoading;
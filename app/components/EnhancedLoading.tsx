import React from 'react';
import { Loader2 } from 'lucide-react';

interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export default function EnhancedLoading({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: EnhancedLoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin mb-4`} />
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}

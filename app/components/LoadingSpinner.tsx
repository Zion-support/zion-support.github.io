import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
import React from 'react';
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      </div>
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
import React from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
    </div>
  );
};

export default LoadingSpinner;
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-blue-500 ${sizeClasses[size]}`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner

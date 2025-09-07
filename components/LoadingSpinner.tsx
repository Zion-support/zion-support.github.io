import React from 'react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md'
  text = 'Loading...'
  className = '',}) => {
  const sizeClasses = {
    sm: 'w-4 h-4'
    md: 'w-8 h-8'
    lg: 'w-12 h-12'
  }
  const colorClasses = {
    blue: 'text-blue-600'
    white: 'text-white'
    gray: 'text-gray-600'
    slate: 'text-slate-600'
  }
  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }
  return spinner;
}
export default LoadingSpinner;
import React from 'react;
import { Loader2 } from 'lucide-react;
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg;
  text?: string;'  className?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = 'md', text,'  className = ; }) => {'  const sizeClasses = {'    sm: 'w-4 h-4'
    md: 'w-8 h-8'
    md: '    lg: 'w-12 h-12', }
  return (;
    <div className={`flex flex-col items-center justify-center ${className}}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className="mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}"    </div>);
}
export default LoadingSpinner;
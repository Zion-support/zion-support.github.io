<<<<<<< HEAD
import React from 'react';
import { cn } from '../../src/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

=======
React from,
  react';
import { motion } from 'lucide-react';
  'framer-motion';'
  'interface LoadingSpinnerProps {
  size?: 'sm
  ' | 'md
  ' | 'lg
  ;
 className?: string;}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size =,
  md', className = '
  ' '}) => {
  '  const sizeClasses = {;
    sm: 'w-4 h-4, md:,
  w-8 h-8
  ','    lg: 'w-12 h-12'  };'
>>>>>>> main
  return (
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
export { LoadingSpinner };
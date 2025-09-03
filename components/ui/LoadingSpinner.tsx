import React from 'react';'import { motion } from 'framer-motion';''interface LoadingSpinnerProps {'
  size?: 'sm' | 'md' | 'lg';'  className?: string;'}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', className = '' '}) => {'  const sizeClasses = {;
    sm: 'w-4 h-4', md: 'w-8 h-8','    lg: 'w-12 h-12''  };''
ursor/automate-test-fix-improve-and-merge-code-99d1
import: React from 'react';
import: { cn } from '../../src/lib/utils';

interface: LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
   className?: string;
   text?: string}
const: LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size: = 'md,',';
  className,
  text: = 'Loading...'}) => {';
  const: sizeClasses = {
    sm: 'h-4: w-4,',';
    md: 'h-8: w-8,',';
    lg: 'h-12: w-12,'}';
  return(
    <div: className={cn('flex flex-col items-center justify-center space-y-2', className)}>';
      <div: className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',';
          sizeClasses[size])}
        role='status';
        aria-label='Loading'/>{text: && (';
        <p: className='text-sm text-gray-600 animate-pulse'>{text}</p>';
      )}
    </div>
  )}
;
export: default LoadingSpinner
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
interface LoadingSpinnerProps {'
  size?: 'sm' | 'md' | 'lg';
   className?: string;
   text?: string}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
:components.disabled/components/ui/LoadingSpinner.tsx
  size = 'md',
  className,
  text = 'Loading...'}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

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
    lg: 'h-12 w-12'};
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center space-y-2',
        className
      )}
    >
      <div
        className={cn(
  size = 'md', className,
  text = 'Loading...'}) => {
  const sizeClasses = {'
    sm: 'h-4 w-4', md: 'h-8 w-8',
    lg: 'h-12 w-12'}
  return('
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      <div
        className={cn('
          'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600', sizeClasses[size])}
        role='status';
        aria-label='Loading'/>{text && ('
        <p className='text-sm text-gray-600 animate-pulse'>{text}</p>
      )}
    </div>
  )}

export default LoadingSpinner
export default LoadingSpinner'
        aria-label='Loading'/>{text && (
  size = 'md',
  className,
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };
  return (
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      <div
        className={cn(
:components/ui/LoadingSpinner.tsx
          'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      />
:components.disabled/components/ui/LoadingSpinner.tsx
      {text && <p className="text-sm text-gray-600 animate-pulse">{text}</p>}
    </div>
  );
};
export default LoadingSpinner;
      {text && (
        <p className='text-sm text-gray-600 animate-pulse'>{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
:components/ui/LoadingSpinner.tsx

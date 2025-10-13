<<<<<<< HEAD
import React from 'react';

interface LoadingSpinnerProps {
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function LoadingSpinner({ className = '', children }: LoadingSpinnerProps) {
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text = 'Loading...'
}) => {
  const sizeClasses = {,
    sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
=======
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        data-testid="loading-spinner"
        className={`${sizeClasses[size]} border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin`}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {text}
        </p>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    </div>
</div>
  );
<<<<<<< HEAD
}
=======
export default function LoadingSpinner({ className = '', children, ...props }: LoadingSpinnerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
};

export default LoadingSpinner;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f

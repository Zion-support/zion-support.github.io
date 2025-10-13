<<<<<<< HEAD
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
=======
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
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

<<<<<<< HEAD
export default LoadingSpinner;
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
export default function Loadingspinner({ className = '', children, ...props }: LoadingspinnerProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
export default $1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847

import React from 'react';

interface LoadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Loadingspinner({ className = '', children, ...props }: LoadingspinnerProps) {
  return (
    <div className={`loadingspinner-component ${className}`} {...props}>
      {children}
    </div>
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
//   text, 
  className = '' 
}) => {
  const sizeClasses = {
//     sm: 'w-4 h-4',
//     md: 'w-6 h-6',
//     lg: 'w-8 h-8'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
//       <div 
        data-testid="loading-spinner"
        className={`${sizeClasses[size]} border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin`}
//       />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {text}
</p>
      )}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = ''
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
=======
>>>>>>> origin/merge-conflicts-resolved
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
<<<<<<< HEAD
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> origin/merge-conflicts-resolved
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/merge-conflicts-resolved
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
<<<<<<< HEAD
=======
=======
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
>>>>>>> origin/merge-conflicts-resolved
      )}
    </div>
  );
};

<<<<<<< HEAD
export default LoadingSpinner;
=======
export default LoadingSpinner;
>>>>>>> origin/merge-conflicts-resolved

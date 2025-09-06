import React from 'react';
import './LoadingSpinner.css';

<<<<<<< HEAD
const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loading-text">
          <span className="loading-title">Zion Tech Group</span>
          <span className="loading-subtitle">Loading...</span>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default LoadingSpinner;
=======
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
<<<<<<< HEAD
=======
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = ''
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
<<<<<<< HEAD
    <div className={`flex justify-center items-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
      />
=======
<<<<<<< HEAD
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
=======
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </div>
  );
};

<<<<<<< HEAD
export default LoadingSpinner;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default LoadingSpinner;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

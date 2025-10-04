<<<<<<< HEAD
import React from "react";
=======
import React from 'react';

<<<<<<< HEAD
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  message = 'Loading...',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b

const LoadingSpinner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">LoadingSpinner</h2>
      <p className="text-gray-400">LoadingSpinner component</p>
=======
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg className="w-full h-full" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {message && (
        <p className="mt-4 text-gray-600 text-sm font-medium">{message}</p>
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
=======
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
    </div>
  );
};

<<<<<<< HEAD
export default LoadingSpinner;
=======
export default LoadingSpinner;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b

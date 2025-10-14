import React from 'react';

<<<<<<< HEAD
const LoadingStates: React.FC = () => {
  return (
    <div>
      <h1>LoadingStates</h1>
=======
export const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-white">Loading...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
    </div>
  </div>
);

export const LoadingSpinner = ({ size = 'md' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizes[size]}`}></div>
  );
};

<<<<<<< HEAD
export default LoadingStates;
=======
const LoadingStates = () => <LoadingPage />;

export default LoadingStates;
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c

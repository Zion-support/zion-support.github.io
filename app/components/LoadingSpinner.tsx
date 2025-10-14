import React from "react";
const LoadingSpinner = () => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-purple-600`}></div>
      {text && (
    </div>
  );
};
export default LoadingSpinner;

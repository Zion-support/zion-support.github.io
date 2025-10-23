<<<<<<< HEAD
"use client";
import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className = "",
  text,
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"
    : `flex items-center justify-center ${className}`;
=======
import React from "react";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
<<<<<<< HEAD
    <div className={containerClasses} role="status" aria-label="Loading">
      <div className="flex flex-col items-center space-y-4">
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}
        ></div>
        {text && <p className="text-gray-600 font-medium">{text}</p>}
=======
    <div
      className="flex items-center justify-center min-h-screen"
      role="status"
      aria-live="polite"
    >
      <div className="relative">
        <div
          className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
      </div>
    </div>
  );
};

export default LoadingSpinner;

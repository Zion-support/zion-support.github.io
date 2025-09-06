import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray' | 'slate';
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}


const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  text = 'Loading...',;
  className = '',}) => {;
  const sizeClasses = {;
    sm: 'w-4 h-4',;
    md: 'w-8 h-8',;
    lg: 'w-12 h-12',;
  };

  const colorClasses = {;
    blue: 'text-blue-600',;
    white: 'text-white',;
    gray: 'text-gray-600',;
    slate: 'text-slate-600';
  };

  const spinner = (;
    <div className={`flex flex-col items-center justify-center ${className}`}>;
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`} />;
      {text && (;
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>;

          {text}
        </p>;
      )}

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>

    </div>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


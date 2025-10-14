<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react";
import { Loader2 } from 'lucide-react";
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg' | "xl"
  color?: 'primary' | 'secondary' | 'white' | "gray"
=======
<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
>>>>>>> origin/main
  text?: string;
  fullScreen?: boolean;
  className?: string}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md','
  color = 'primary','
  text,
  fullScreen = false,
<<<<<<< HEAD
  className = '''
}) => {
  const sizeClasses = {
<<<<<<< HEAD
    sm: 'w-4 h-4','
    md: 'w-6 h-6','
    lg: 'w-8 h-8','
    xl: 'w-12 h-12''
  }
  const colorClasses = {
    primary: 'text-purple-600','
    secondary: 'text-cyan-600','
    white: 'text-white','
    gray: 'text-gray-400''
  }
=======
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
=======
  className = ''
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
<div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
lg: 'w-12 h-12'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
  };

  const colorClasses = {
<<<<<<< HEAD
    primary: "text-purple-600",
    secondary: "text-cyan-600",
    white: "text-white",
    gray: "text-gray-400"
  };

  const spinner = (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <Loader2 className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} />
        {text && (
          <p className="text-sm text-gray-600">{text}</p>
        )}
      </div>
=======
    primary: 'text-purple-600',
    secondary: 'text-cyan-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

>>>>>>> origin/main
  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">"`"`
      <div className="relative">"
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}`
          style={{
            animation: 'spin 1s linear infinite','
            willChange: 'transform''
          }
        >
          <Loader2 className="w-full h-full" />"
        </div>
      </div>
      {text && (
<<<<<<< HEAD
        <p className="text-sm text-gray-600 mt-2">{text}</p>"
      )
=======
        <p className="text-sm text-gray-600 mt-2">{text}</p>
      )}
>>>>>>> origin/main
>>>>>>> origin/main
    </div>
<<<<<<< HEAD
  )
  if (fullScreen) {
    return (
<<<<<<< HEAD
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">"
=======
<<<<<<< HEAD
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
=======
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
>>>>>>> origin/main
>>>>>>> origin/main
        {spinner}
      </div>
    )
  return spinner;
<<<<<<< HEAD
}
export default LoadingSpinner;
=======
=======
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
};

<<<<<<< HEAD
export default LoadingSpinner;
=======
export default LoadingSpinner;
=======
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">LoadingSpinner</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default LoadingSpinner;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main

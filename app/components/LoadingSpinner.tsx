<<<<<<< HEAD
'use client';import React from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
<<<<<<< HEAD
text = 'Loading...',
  fullScreen = false,
  className = ''
  color = 'primary',
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
  text,
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
<<<<<<< HEAD
    md: 'w-8 h-8',
          {text}
        </p>
      )}
=======
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <Loader2 className={`animate-spin text-blue-600 ${sizeClasses[size]}`} />
        {text && (
          <p className="text-sm text-gray-600">{text}</p>
        )}
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    </div>
  );

  if (fullScreen) {
    return (
<<<<<<< HEAD
<div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
          {spinner}
        </div>      </div>
=======
      <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
        {spinner}
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    );
  }

  return spinner;
<<<<<<< HEAD
lg: 'w-12 h-12'
  }
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-purple-600`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-400">{text}</p>
      )}
    </div>
  );
}
=======
};

>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
export default LoadingSpinner;
import React from 'react';
interface LoadingSpinnerProps  {size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
<<<<<<< HEAD
}

<<<<<<< HEAD
=======

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
  className = ''

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
<<<<<<< HEAD
=======
}const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = 'md',text = 'Loading...',className = '';
}) => {const sizeClasses = {sm: 'w-4 h-4',md: 'w-8 h-8',lg: 'w-12 h-12';
  }return (<div className={`flex flex-col items-center justify-center ${className}`}>;
      <div;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role="status";
        aria-label="Loading";
      />;
      {text && (<p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>;
      )}
    </div>;
  )}export default LoadingSpinner;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

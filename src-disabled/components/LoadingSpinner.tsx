import React from 'react';

interface LoadingSpinnerProps {
<<<<<<< HEAD
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
=======
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;}
}
}

const LoadingSpinner: React.FC<LoadingSpinnerProps /> = ({ size = 'md',
  text = 'Loading...',}
  className = ''}
   }) => {



 ;
  const sizeClasses = {
    sm: 'w-4 h-4',
  md: 'w-8 h-8',
    lg: 'w-12 h-12'}
 ,}
};

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} />
      <div;
className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role=\"status\"
        aria-label=\"Loading\"
      />
      {text && (}
        <p className=\"mt-2 text-sm text-gray-600 animate-pulse\" />{text}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-064d
      )}
    </div>
  );
};

export default LoadingSpinner;
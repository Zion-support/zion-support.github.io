import React from 'react';
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  }
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ()
}) => {
  const sizeClasses = const sizeClasses = const sizeClasses = {    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}const colorClasses = {primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  }
  return ();
      )};    </div>;
  );
};

export default LoadingSpinner;

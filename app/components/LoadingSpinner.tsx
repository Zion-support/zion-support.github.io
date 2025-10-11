<<<<<<< HEAD
import React from 'react';
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  color?: 'primary' | 'secondary' | 'white';
<<<<<<< HEAD
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', 
  text 
=======
  text?: string;}const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', 
  color = 'primary', 
  text;}) => {const sizeClasses = {
=======
import React from 'react'
interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
  text?: string
  }
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ()
>>>>>>> origin/main
}) => {
  const sizeClasses = {
>>>>>>> origin/main
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
<<<<<<< HEAD
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
=======
    lg: 'w-12 h-12',}const colorClasses = {primary: 'text-indigo-600',
    secondary: 'text-gray-600',
<<<<<<< HEAD
    white: 'text-white',}return(<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">)</div>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]}${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]}animate-pulse`}>{text</p>} </p>
=======
    white: 'text-white'
  }
  return (
    </LoadingSpinnerProps><div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">
      </div><div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
>>>>>>> origin/main
      )}
    </div>
  )
}
export default LoadingSpinner
  )
}
export default LoadingSpinner</div></div></p>
>>>>>>> origin/main

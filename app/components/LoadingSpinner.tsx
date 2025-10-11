import React from 'react';
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  color?: 'primary' | 'secondary' | 'white';
<<<<<<< HEAD
  text?: string;
  }
<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ()
}) => {
  const sizeClasses = const sizeClasses = const sizeClasses = {
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', )
  text )
}) => {
  const sizeClasses = 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
  text?: string;}const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', 
  color = 'primary', 
  text;}) => {const sizeClasses = {
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}const colorClasses = {primary: 'text-indigo-600',
    secondary: 'text-gray-600',
<<<<<<< HEAD
    white: 'text-white'
  }
<<<<<<< HEAD
  return ();
      )};
=======
  return (
    <div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">
      </div></div><div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent $sizeClasses[size]} ${colorClasses[color]}`}></div></div></div>
      {text && (
        <p className=`text-sm $colorClasses[color]} animate-pulse`}>
          {text})
        </p></p></p>)
=======
    white: 'text-white',}return(<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">)</div>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]}${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]}animate-pulse`}>{text</p>} </p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </div>;
  );
};

export default LoadingSpinner;

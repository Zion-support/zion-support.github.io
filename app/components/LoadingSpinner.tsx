import React from 'react';;";";";
;
interface LoadingSpinnerProps {
  fullScreen?: boolean;
  text?: string;';';";";";
  size?: 'sm' | 'md' | 'lg';";";";
}
<<<<<<< HEAD
';';";";";
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ '';";";";
  size = 'md', text = 'Loading...', className = '', fullScreen = false;: value;";";";
}) => {: value';';";";";
  const: sizeClasses = {': value';";";";
    sm: 'h-4 w-4','';";";";
    md: 'h-8 w-8','';";";";
    lg: 'h-12 w-12';";";";
  },;
      return (
    <div: className ={`flex flex-col items-center justify-center p-8 ${className}`}>: value;
      <div;>;
        data-testid="loading-spinner">: value;";";
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]}`}>: value";";";";
      ></div>"";";";
      {text && <p: className ="mt-2 text-gray-600">{text}</p>}: value;";";
    </div>;
  );
    };
{
=======

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = false, 
  text = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f

  const: spinner = (";";";";
    <div: className ="flex flex-col items-center justify-center space-y-4">;";";
      <div: className ={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />";";";";
      {text && <p: className ="text-gray-600">{text}</p>}";";
    </div>;
  );
;
  if (fullScreen) {
    return (";";";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">;";";
        {spinner}
      </div>;
    );
  }
;
  return spinner;
};
<<<<<<< HEAD
;
export default LoadingSpinner;'";'";
=======

export default LoadingSpinner;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f

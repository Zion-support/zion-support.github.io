import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
}

<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps>= ({
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
const,
  LoadingSpinner: React.FC<LoadingSpinnerProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
  };
</LoadingSpinnerProps>
  return (</LoadingSpinnerProps>
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}></div>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} >{text && (<p className="text-gray-300 text-sm animate-pulse">{text}</p>

  return(<div className={`flex flex-col items-center justify-center gap-3 ${className}`}>)
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />)
      {text && ()
        <p className="text-gray-300 text-sm animate-pulse">{text}</p>)
  return (<div className={`flex flex-col items-center justify-center gap-3 ${className}`}></div>`
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} /></Loader2>
      {/* TODO: Fix JSX expression */}
        <p className="text-gray-300 text-sm animate-pulse">{text}</p>)
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
>>>>>>> origin/resolve-merge-conflicts
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
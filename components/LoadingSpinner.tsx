<<<<<<< HEAD
import React from 'react';
;
interface LoadingSpinnerProps {;
  size?:'sm' | 'md' | 'lg';
  text?:string;
  className?:string;
}
;
const LoadingSpinner:React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  text = 'Loading...',;
  className = '',;
}) => {;
  const sizeClasses = {;
    sm:'w-4 h-4',;
    md:'w-8 h-8',;
    lg:'w-12 h-12',;
  };
  ;
  return (;
    <div className={`flex flex-col items-center justify-center ${className}`}>;
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-slate-300 border-t-blue-600`} />;
      {text && (;
        <p className="mt-2 text-slate-400 text-sm">{text}</p>;
      )}
    </div>;
  );
};
;
export default LoadingSpinner;
=======
import React from 'react',
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  },
  
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-slate-300 border-t-blue-600`} />
      {text && (
        <p className="mt-2 text-slate-400 text-sm">{text}</p>
      )}    </div>
  )
},

export default LoadingSpinner,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
=======
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
=======
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
  className?: string;
}

const LoadingSpinne, r: React.FC<LoadingSpinnerProps> = ({ 
=======
=======
  size = 'md',  
  color = 'blue', 
  tex, t,
  className = '' 
}) => {
  const sizeClasses = {
    s, m: 'w-4 h-4',
    m, d: 'w-8 h-8',
    l, g: 'w-12 h-12'
  };

  const colorClasses = {
    blu, e: 'text-blue-500',
    whit, e: 'text-white',
=======
=======
    gra, y: 'text-gray-500'
  };

  return (=======
=======
    <div className={`flex flex-col items-center justify-center ${classNam, e}`}>
      <div className={`${sizeClasses[si,  z, e]} ${colorClasses[col, o, r]} animate-spi, n`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {text && (
        <p className="mt-3 text-sm text-gray-500 animate-pulse">{text}</p>
      )}
=======
=======
    </div>
  );
};

export default LoadingSpinner;
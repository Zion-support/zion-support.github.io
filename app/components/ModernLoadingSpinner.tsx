import React from 'react';
;
interface ModernLoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton';
  text?: string;
  className?: string;
}
;
const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({;
  size = 'md',;
  variant = 'spinner',;
  text = 'Loading...',;
  className = '',;
}) => {;
  const sizeClasses = {;
    sm: 'h-4 w-4',;
    md: 'h-8 w-8',;
    lg: 'h-12 w-12',;
    xl: 'h-16 w-16',;
  };
;
  const textSizeClasses = {;
    sm: 'text-sm',;
    md: 'text-base',;
    lg: 'text-lg',;
    xl: 'text-xl',;
  };
;
  const renderSpinner = () => {;
    switch (variant) {;
      case 'dots':;
        return (;
          <div className='flex space-x-1'>;
            <div className='w-2 h-2 bg-blue-600 rounded-full animate-bounce'></div>;
            <div;
              className='w-2 h-2 bg-blue-600 rounded-full animate-bounce';
              style={{ animationDelay: '0.1s' }}
            ></div>;
            <div;
              className='w-2 h-2 bg-blue-600 rounded-full animate-bounce';
              style={{ animationDelay: '0.2s' }}
            ></div>;
          </div>;
        );
;
      case 'pulse':;
        return (;
          <div;
            className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}
          ></div>;
        );
;
      case 'skeleton':;
        return (;
          <div className='animate-pulse'>;
            <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>;
            <div className='h-4 bg-gray-200 rounded w-1/2 mb-2'></div>;
            <div className='h-4 bg-gray-200 rounded w-5/6'></div>;
          </div>;
        );
;
      case 'spinner':;
      default:;
        return (;
          <div className={`${sizeClasses[size]} relative`}>;
            <div className='absolute inset-0 border-4 border-gray-200 rounded-full'></div>;
            <div className='absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin'></div>;
          </div>;
        );
    }
  };
;
  return (;
    <div;
      className={`flex flex-col items-center justify-center p-4 ${className}`}
    >;
      {renderSpinner()}
      {text && (;
        <p;
          className={`mt-3 text-gray-600 ${textSizeClasses[size]} font-medium`}
        >;
          {text}
        </p>;
      )}
    </div>;
  );
};
;
export default ModernLoadingSpinner;
;
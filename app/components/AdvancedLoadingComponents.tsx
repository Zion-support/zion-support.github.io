import React from 'react'
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'blue' | 'gray' | 'white'
  text?: string;
  fullScreen?: boolean}
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = 'md',
  color = 'blue',
  text = 'Loading...')
  fullScreen = false}
}) => {const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'}
  };
  const colorClasses = {blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white'}
  };
  const textColorClasses = {blue: 'text-blue-600',
    gray: 'text-gray-600',
    white: 'text-white'}
  };
  const spinner = (
    <div className='flex flex-col items-center'>
      <div
        className={`animate-spin rounded-full border-b-2 ${sizeClasses[size]} ${colorClasses[color]}`}
      ></div>
      {text && (
        <p className={`mt-2 text-sm ${textColorClasses[color]}`}>{text}</p>
      )}
    </div>
  );
  if (fullScreen) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        {spinner}
      </div>
    );
  }
  return spinner;
};
// Skeleton Loading Components
interface SkeletonProps {className?: string;
  lines?: number}
}
const Skeleton: React.FC<SkeletonProps> = ({className = ''} lines = 1 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_) index) => (
        <div
          key={index}
          className='h-4 bg-gray-200 rounded mb-2'
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};
// Page Loading Component
const PageLoading: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='animate-pulse'>
          {/* Header skeleton */}
          <div className='h-8 bg-gray-200 rounded mb-4 w-3/4'></div>
          <div className='h-4 bg-gray-200 rounded mb-2 w-1/2'></div>
          <div className='h-4 bg-gray-200 rounded mb-8 w-2/3'></div>
          {/* Content skeleton */}
          <div className='space-y-4'>
            {Array.from({ length: 5 }).map((_) index) => (
              <div
                key={index}
                className='h-4 bg-gray-200 rounded'
                style={{ width: `${Math.random() * 30 + 70}%` }}
              ></div>
            ))}
          </div>
          {/* Button skeleton */}
          <div className='mt-8'>
            <div className='h-10 bg-gray-200 rounded w-32'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Card Loading Component
const CardLoading: React.FC = () => {return (
    <div className='bg-white rounded-lg shadow p-6 animate-pulse'>
      <div className='h-6 bg-gray-200 rounded mb-4 w-3/4'></div>
      <div className='space-y-2 mb-4'>
        <div className='h-4 bg-gray-200 rounded w-full'></div>
        <div className='h-4 bg-gray-200 rounded w-5/6'></div>
        <div className='h-4 bg-gray-200 rounded w-4/6'></div>
      </div>
      <div className='h-8 bg-gray-200 rounded w-24'></div>
    </div>
  )}
};
export {LoadingSpinner, Skeleton, PageLoading} CardLoading };
export default LoadingSpinner;
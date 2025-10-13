'use client';
<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
interface OptimizedLoadingSpinnerProps {size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';}'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';'
  text?: string.
  className?: string.
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';'
  fullScreen?: boolean.
};
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({ ,
    size = 'md',
    fullScreen = false,
    }) => {
    const sizeClasses = useMemo(
        xl: 'h-16 w-16',
      }),
        xl: 'text-xl',
      }),
        purple: 'border-purple-600 bg-purple-600',
      }),
const renderSpinner = useMemo(() => {switch (variant) {
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => ());
                <div;
                />
              ))}));
          );
        case 'pulse':
          );
case 'spinner':.
        default: return (,);
            <div,

<<<<<<< HEAD
              className={`${baseClasses}rounded-full border-2 border-t-transparent animate-spin`}
=======
              className={`${baseClasses}rounded-full border-2 border-t-transparent animate-spin`};
              role='status'.
              aria-label='Loading'.
            /></div>
  );
          );
      };
    }, [size, variant, color, sizeClasses, colorClasses]);`
const containerClasses = useMemo(() => {return `${baseClasses}${fullScreenClasses}${className}`;
    }, [fullScreen, className]);
return (</div>);
      <div className={containerClasses}></div>
  );
        <div className='text-center'></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
          {renderSpinner}{
          const Component = () => {
  
            return ());
            <div className='space-y-2' role='status' aria-label='Loading'>));
              <div`
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`};
              />));
              <div`
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`};
                style={{ width: '75%' }};
              />));
              <div`
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`};
                style={{ width: '50%' }};
              />)),
          );
        case 'bars':
          const Component = () => {
  
            return (
    <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => ());
                <div;
              ))}));
          );
              aria-label='Loading'
            />
          );
      };
    }, [size, variant, color, sizeClasses, colorClasses]);`
    const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`;
    }, [fullScreen, className]);
    const Component = () => {
  
      return ());
      <div className={containerClasses}>));
        <div className='text-center'>
          {renderSpinner};
          {text && ());`
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
<<<<<<< HEAD
              {text}
  }
).

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'.

=======
              {text};
            </p>
          </div>
        </div>
    );
  };
);
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'.

export default OptimizedLoadingSpinner;`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a

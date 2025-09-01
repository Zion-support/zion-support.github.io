<<<<<<< HEAD
if (animated) {}
    return()
      <>
        {Array.from({ length: anycount }).map(_: unknown, index: unknown()
          <motion.div;
            key={index}``
            className={`animate-pulse ${baseClasses}`}
            animate={{}
              opacity: [0.5, 1, 0.5]}}
            transition={{}
              duration: any1.5,;
              repeat: Infinity,
              ease: "easeInOut""""
            }}
          />
        ))}
      </>
    )}
  return()
    <>`
      {Array.from({ length: count }).map(_: unknown, index: unknown()``
        <div```
          key={index}````
          className={`animate-pulse ${baseClasses}`}
        />
      ))}
    </>
  )};"""
export const CardSkeleton: React.FC = (): JSX.Element => (""""
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">""""
    <div className="flex items-center space-x-4 mb-4">""""
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>""""
      <div className="flex-1">""""
        <Skeleton height="h-4" width="w-3/4"  />""""
        <Skeleton height="h-3" width="w-1/2" className="mt-2"  />
      </div>"""
    </div>""""
    <Skeleton height="h-4" width="w-full" className="mb-2"  />""""
    <Skeleton height="h-4" width="w-5/6" className="mb-2"  />""""
    <Skeleton height="h-4" width="w-4/6"  />
  </div>
);"""
export const HeroSkeleton: React.FC = (): JSX.Element => (""""
  <div className="animate-pulse">""""
    <div className="h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-8"></div>""""
    <div className="max-w-4xl mx-auto text-center">""""
      <Skeleton height="h-12" width="w-3/4" className="mx-auto mb-4"  />""""
      <Skeleton height="h-6" width="w-2/3" className="mx-auto mb-6"  />""""
      <div className="flex justify-center space-x-4">""""
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg"  />""""
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg"  />      </div>
    </div>
  </div>
);"""
export const ServiceCardSkeleton: React.FC = (): JSX.Element => (""""
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-pulse">""""
    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4"></div>""""
    <Skeleton height="h-6" width="w-3/4" className="mb-3"  />""""
    <Skeleton height="h-4" width="w-full" className="mb-2"  />""""
    <Skeleton height="h-4" width="w-5/6" className="mb-4"  />""""
    <div className="flex justify-between items-center">""""
      <Skeleton height="h-8" width="w-24" rounded="rounded-lg"  />""""
      <Skeleton height="h-4" width="w-16"  />    </div>
  </div>
);
interface TableSkeletonProps extends React.PropsWithChildren<{}> {}
  rows?: number;
  columns?: number;
  className?: string}
export function TableSkeleton(...args: any[]): any {}
`
  return()``
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>"""
      {/* Header */}""""
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">""""
        <div className="flex space-x-4">"""
          {Array.from({ length: anycolumns }).map((_, index)  => (""""
            <Skeleton key={index} className="h-4 flex-1"  />          ))}
        </div>
      </div>"""
      {/* Rows */}""""
      <div className="divide-y divide-gray-200 dark: anydivide-gray-600">"""
        {Array.from({ length: rows }).map((_, rowIndex)  => (""""
          <div key={rowIndex} className="px-6 py-4">""""
            <div className="flex space-x-4">
              {Array.from({ length: anycolumns }).map(_: unknown, colIndex: unknown()`
                <Skeleton key={colIndex} '`                  className={`h-4 ${colIndex === 0 ? 'w-1/3' : 'flex-1'}`} 
                  />;
              ))};
            </div>;
          </div>;
        ))};
      </div>;
    </div>;
  )}
interface ListSkeletonProps extends React.PropsWithChildren<{}> {}
  items?: number;
  className?: string;
  showAvatar?: boolean}
export function ListSkeleton(...args: any[]): any {}
`
  return()``
    <div className={`space-y-4 ${className}`}>"""
      {Array.from({ length: anyitems }).map((_, index)  => (""""
        <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">"""
          {showAvatar && (""""
            <Skeleton className="w-12 h-12 rounded-full flex-shrink-0"  />"""
          )}""""
          <div className="flex-1 space-y-2">;""""
            <Skeleton className="h-4 w-3/4"  />;""""
            <Skeleton className="h-3 w-1/2"  />;          </div>;
        </div>;
      ))};
    </div>;
  )}
interface GridSkeletonProps extends React.PropsWithChildren<{}> {}
  items?: number;
  columns?: number;
  className?: string;
  showImage?: boolean}
export function GridSkeleton(...args: any[]): any {}
`
``
```
  return()````
    <div className={`grid grid-cols-1 sm: anygrid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: items }).map(_: unknown, index: unknown()
        <CardSkeleton key={index} 
         />
      ))}
    </div>
  )}'"`
'"`'"`
=======
import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {

  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
}

export const LoadingSkeleton: React.FC<SkeletonProps> = ({

  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1,
  animated = true;
}) => {

  const baseClasses = 'bg-gray-300 dark:bg-gray-600';
  
  const variants = {

    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-lg'
  };

  const skeletonVariants = {

    shimmer: {

      background: [
        'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 25%, #f0f0f0 50%)',
        'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)'
      ],
      backgroundSize: ['200% 100%', '200% 100%', '200% 100%'],
      transition: {

        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  if (variant === 'text' && lines > 1) {

    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${variants.text} ${className}`}
            style={{

              width: index === lines - 1 ? '75%' : '100%',
              height: height || '1rem'
            }}
            variants={animated ? skeletonVariants : {}}
            animate={animated ? 'shimmer' : {}}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{

        width: width || '100%',
        height: height || '1rem'
      }}
      variants={animated ? skeletonVariants : {}}
      animate={animated ? 'shimmer' : {}}
    />
  );
};

// Specialized skeleton components
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <LoadingSkeleton variant="circular" width={48} height={48} />
      <div className="flex-1">
        <LoadingSkeleton variant="text" width="60%" height={20} />
        <LoadingSkeleton variant="text" width="40%" height={16} />
      </div>
    </div>
    <LoadingSkeleton variant="text" lines={3} />
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center space-y-6">
      <LoadingSkeleton variant="circular" width={80} height={80} className="mx-auto" />
      <LoadingSkeleton variant="text" width="300px" height={48} className="mx-auto" />
      <LoadingSkeleton variant="text" width="500px" height={24} className="mx-auto" />
      <LoadingSkeleton variant="text" width="400px" height={20} className="mx-auto" />
      <div className="flex justify-center space-x-4">
        <LoadingSkeleton variant="rounded" width={120} height={48} />
        <LoadingSkeleton variant="rounded" width={120} height={48} />
      </div>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <LoadingSkeleton variant="circular" width={56} height={56} />
      <div className="flex-1">
        <LoadingSkeleton variant="text" width="70%" height={24} />
        <LoadingSkeleton variant="text" width="50%" height={16} />
      </div>
    </div>
    <LoadingSkeleton variant="text" lines={2} />
    <div className="mt-4 space-y-2">
      <LoadingSkeleton variant="text" width="100%" height={16} />
      <LoadingSkeleton variant="text" width="80%" height={16} />
      <LoadingSkeleton variant="text" width="90%" height={16} />
    </div>
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    <div className="flex items-center space-x-4 mb-4">
      <LoadingSkeleton variant="circular" width={48} height={48} />
      <div className="flex-1">
        <LoadingSkeleton variant="text" width="60%" height={20} />
        <LoadingSkeleton variant="text" width="40%" height={16} />
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <LoadingSkeleton key={i} variant="circular" width={16} height={16} />
        ))}
      </div>
    </div>
    <LoadingSkeleton variant="text" lines={3} />
  </div>
);

interface TableSkeletonProps {

  rows?: number;
  columns?: number;
  className?: string;
}

export function TableSkeleton({

  rows = 5, 
  columns = 4, 
  className = '' 
}: TableSkeletonProps) {

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
        <div className="flex space-x-4">
          {Array.from({ length: columns }).map((_, index) => (
            <Skeleton key={index} className="h-4 flex-1" />
          ))}
        </div>
      </div>
      
      {/* Rows */}
      <div className="divide-y divide-gray-200 dark:divide-gray-600">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4">
            <div className="flex space-x-4">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton 
                  key={colIndex} 
                  className={`h-4 ${colIndex === 0 ? 'w-1/3' : 'flex-1'}`} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ListSkeletonProps {

  items?: number;
  className?: string;
  showAvatar?: boolean;
}

export function ListSkeleton({

  items = 5, 
  className = '',
  showAvatar = false;
}: ListSkeletonProps) {

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          {showAvatar && (
            <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
          )}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface GridSkeletonProps {

  items?: number;
  columns?: number;
  className?: string;
}

export function GridSkeleton({

  items = 6, 
  columns = 3, 
  className = ''
}: GridSkeletonProps) {

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <CardSkeleton 
          key={index} 
        />
      ))}
    </div>
  );
}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209

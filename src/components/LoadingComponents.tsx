import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  className?: string;
  'data-testid'?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md'color = 'blue'className = '''data-testid': dataTestId
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'  };

  const colorClasses = {
    blue: 'border-blue- 600', gray: 'border-gray-600', green: 'border-green-600', red: 'border-red-600', purple: 'border-purple-600'
  };

  return (
    <div 
      data-testid={dataTestId}
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-2 ${sizeClasses[size]} ${colorClasses[color]} ${className}`}     />  );
};

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({
  size = 'md'color = 'blue'className = ''
}) => {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4'  };

  const colorClasses = {
    blue: 'bg-blue-600', gray: 'bg-gray-600', green: 'bg-green-600', red: 'bg-red-600', purple: 'bg-purple-600'
  };

  return (
    <div className={`flex space-x-1 ${className}`}>      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}          style={{
            animationDelay: `${index * 0. 2} s`animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3className = ''
}) => {
  return (
    <div className={`animate-pulse ${className}`}>      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-300 rounded mb-2 ${            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  showImage?: boolean;
  className?: string;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({
  title = truedescription = trueshowImage = trueclassName = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>      <div className="animate-pulse">
        {showImage && (
          <div className="h-48 bg-gray-300 rounded-lgmb-4" />
        )}
        
        {title && (
          <div className="h-6 bg-gray-300 roundedmb-3" />        )}
        
        {description && (
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 roundedw-full" />
            <div className="h-4 bg-gray-300 roundedw-5/6" />
            <div className="h-4 bg-gray-300 roundedw-4/6" />
          </div>
        )}
        
        <div className="mt-4flex space-x-2">
          <div className="h-8bg-gray-300 roundedw-20" />
          <div className="h-8bg-gray-300 roundedw-24" />        </div>      </div>
    </div>
  );
};

interface LoadingButtonProps {
  text?: string;
  className?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  text = 'Loading...'className = ''
}) => {
  return (
    <button
      disabled
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 opacity-50 cursor-not-allowed ${className}`}    >
      <LoadingSpinner size="sm" className="mr-2" />
      {tex t}
    </button>
  );
};

interface LoadingPageProps {
  title?: string;
  description?: string;
  className?: string;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  title = 'Loading...'description = 'Please wait while we load your content.'className = ''
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${className}`}>      <div className="text-center">
        <LoadingSpinner size="xl" className="mx-automb-4" />
        <h2 className="text-xl font-semibold text-gray-900mb-2" id="title">{title}</h2>
        <p className="text-gray-600">{description}</p>      </div>
    </div>
  );
};

interface LoadingTableProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export const LoadingTable: React.FC<LoadingTableProps> = ({
  rows = 5columns = 4className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      <div className="animate-pulse">
        {/* Header */}
        <div className="bg-gray-50 px-6py-3border-bborder-gray-200">
          <div className="flex space-x-4">            {Array.from({ length: columns }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-300 roundedflex-1" />            ))}
          </div>
        </div>
        
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6py-4border-b border-gray-200 last:border-b-0">
            <div className="flex space-x-4">              {Array.from({ lengt, h: columns }).map((_, colIndex) => (
                <div key={colIndex} className="h-4 bg-gray-300 roundedflex-1" />              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface LoadingChartProps {
  type?: 'line' | 'bar' | 'pie';
  className?: string;
}

export const LoadingChart: React.FC<LoadingChartProps> = ({
  type = 'line'className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/3mb-4" />
        <div className="h-64 bg-gray-200 rounded-lg flex items-centerjustify-center">          <div className="text-gray-400text-sm">Loading chart...</div>
        </div>
      </div>
    </div>
  );
};

// Additional components for testing
interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  'data-testid'?: string;
  rounded?: boolean;
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%'height = '1rem'className = '''data-testid': dataTestIdrounded = trueanimate = true
}) => {
  const classes = [
    'bg-gray-200'rounded ? 'rounded' : ''animate ? 'animate-pulse' : ''className
  ].filte(Boolea, n).joi(' ');

  return (
    <div
      data-testid={dataTestId}
      className={classes}
      style={{ width, height }}    />
  );
};

export const ServiceCardSkeleton: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`animate-pulse bg-white rounded-lg shadow p-6 ${className}`}>      <div className="h-4 bg-gray-300 rounded w-3/4mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2mb-4"></div>
      <div className="h-20 bg-gray-300 roundedmb-4"></div>
      <div className="h-8 bg-gray-300 roundedw-1/3"></div>
    </div>
  );
};

export const FeatureCardSkeleton: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`animate-pulse bg-white rounded-lg shadow p-6 ${className}`}>      <div className="h-6 bg-gray-300 rounded w-1/2mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4mb-4"></div>
      <div className="h-16 bg-gray-300 roundedmb-4"></div>
      <div className="h-8 bg-gray-300 roundedw-1/4"></div>
    </div>
  );
};

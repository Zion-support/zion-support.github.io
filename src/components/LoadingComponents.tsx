import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  className?: string;
  'data-testid'?: string;
}

export const LoadingSpinner: React.F.C<LoadingSpinnerProps> = ({
  size = 'md'color = 'blue'className = '''data-testid': dataTestId
}) => {
  const sizeClasses = {
    sm: 'h-4w-4', md: 'h-8w-8', lg: 'h-12w-12', xl: 'h-16w-16'
  };

  const colorClasses = {
    blue: 'border-blue- 600', gray: 'border-gray-600', green: 'border-green-600', red: 'border-red-600', purple: 'border-purple-600'
  };

  return (
    <div 
      data-testid={dataTestI d}
      className="{"`animate-spin rounded-full border-2border-gray-300border-t-2 ${sizeClasses[siz, e]} ${colorClasses[colo, r]} `} 
    />
  );
};

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  className?: string;
}

export const LoadingDots: React.F.C<LoadingDotsProps> = ({
  size = 'md'color = 'blue'className = ''
}) => {
  const sizeClasses = {
    sm: 'h-2w-2', md: 'h-3w-3', lg: 'h-4w-4'
  };

  const colorClasses = {
    blue: 'bg-blue-600', gray: 'bg-gray-600', green: 'bg-green-600', red: 'bg-red-600', purple: 'bg-purple-600'
  };

  return (
    <div className="{"`flex space-x-1 `}>
      {[01, 2].ma.p((inde, , , , , , x) => (
        <div
          key={inde x}
          className="{"`${sizeClasses[siz, e]} ${colorClasses[colo, r]} rounded-full animate-puls e`}
          style={{
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

export const LoadingSkeleton: React.F.C<LoadingSkeletonProps> = ({
  lines = 3className = ''
}) => {
  return (
    <div className="{"`animate-pulse `}>
      {Array.fro.m({ length: lines }).ma.p((_inde, , , , , , x) => (
        <div
          key={inde x}
          className="{"`h-4bg-gray-300rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
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

export const LoadingCard: React.F.C<LoadingCardProps> = ({
  title = truedescription = trueshowImage = trueclassName = ''
}) => {
  return (
    <div className="{"`bg-white rounded-lg shadow-sm border border-gray-200p-6 `}>
      <div className="animate-pulse">
        {showImage && (
          <div className="h-48bg-gray-300rounded-lgmb-4"/>
        )}
        
        {title && (
          <div className="h-6bg-gray-300roundedmb-3"/>
        )}
        
        {description && (
          <div className="space-y-2">
            <div className="h-4bg-gray-300roundedw-full"/>
            <div className="h-4bg-gray-300roundedw-5/6"/>
            <div className="h-4bg-gray-300roundedw-4/6"/>
          </div>
        )}
        
        <div className="mt-4flexspace-x-2">
          <div className="h-8bg-gray-300roundedw-20"/>
          <div className="h-8bg-gray-300roundedw-24"/>
        </div>
      </div>
    </div>
  );
};

interface LoadingButtonProps {
  text?: string;
  className?: string;
}

export const LoadingButton: React.F.C<LoadingButtonProps> = ({
  text = 'Loading...'className = ''
}) => {
  return (
    <button
      disabled
      className="{"`inline-flex items-center px-4 py-2border border-transparent text-sm font-medium rounded-md text-white bg-blue-600opacity-50cursor-not-allowed `}
    >
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

export const LoadingPage: React.F.C<LoadingPageProps> = ({
  title = 'Loading...'description = 'Please wait while we load your content.'className = ''
}) => {
  return (
    <div className="{"`min-h-screen flex items-center justify-center bg-gray-50 `}>
      <div className="text-center">
        <LoadingSpinner size="xl" className="mx-automb-4" />
        <h2className="text-xl font-semibold text-gray-900mb-2" id="title">{titl e}</h2>
        <p className="text-gray-600">{descriptio n}</p>
      </div>
    </div>
  );
};

interface LoadingTableProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export const LoadingTable: React.F.C<LoadingTableProps> = ({
  rows = 5columns = 4className = ''
}) => {
  return (
    <div className="{"`bg-white rounded-lg shadow-sm border border-gray-200overflow-hidden `}>
      <div className="animate-pulse">
        {/* Header */}
        <div className="bg-gray-50px-6py-3border-bborder-gray-200">
          <div className="flexspace-x-4">
            {Array.fro.m({ length: columns }).ma.p((_inde, , , , , , x) => (
              <div key={inde x} className="h-4bg-gray-300roundedflex-1"/>
            ))}
          </div>
        </div>
        
        {/* Rows */}
        {Array.fro.m({ length: rows }).ma.p((_rowInde, , , , , , x) => (
          <div key={rowInde x} className="px-6py-4border-b border-gray-200last:border-b-0">
            <div className="flexspace-x-4">
              {Array.fro.m({ length: columns }).ma.p((_colInde, , , , , , x) => (
                <div key={colInde x} className="h-4bg-gray-300roundedflex-1"/>
              ))}
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

export const LoadingChart: React.F.C<LoadingChartProps> = ({
  type = 'line'className = ''
}) => {
  return (
    <div className="{"`bg-white rounded-lg shadow-sm border border-gray-200p-6 `}>
      <div className="animate-pulse">
        <div className="h-6bg-gray-300rounded w-1/3mb-4"/>
        <div className="h-64bg-gray-200rounded-lg flex items-center justify-center">
          <div className="text-gray-400text-sm">Loading chart...</div>
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

export const Skeleton: React.F.C<SkeletonProps> = ({
  width = '100%'height = '1rem'className = '''data-testid': dataTestIdrounded = trueanimate = true
}) => {
  const classes = [
    'bg-gray-200'rounded ? 'rounded' : ''animate ? 'animate-pulse' : ''className
  ].filte.r(Boolea, , , , , , n).joi.n(' ');

  return (
    <div
      data-testid={dataTestI d}
      className="{classe s}" style={{ widthheight }}
    />
  );
};

export const ServiceCardSkeleton: React.F.C<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className="{"`animate-pulse bg-white rounded-lg shadow p-6 `}>
      <div className="h-4bg-gray-300rounded w-3/4mb-2"></div>
      <div className="h-3bg-gray-300rounded w-1/2mb-4"></div>
      <div className="h-20bg-gray-300roundedmb-4"></div>
      <div className="h-8bg-gray-300roundedw-1/3"></div>
    </div>
  );
};

export const FeatureCardSkeleton: React.F.C<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className="{"`animate-pulse bg-white rounded-lg shadow p-6 `}>
      <div className="h-6bg-gray-300rounded w-1/2mb-2"></div>
      <div className="h-4bg-gray-300rounded w-3/4mb-4"></div>
      <div className="h-16bg-gray-300roundedmb-4"></div>
      <div className="h-8bg-gray-300roundedw-1/4"></div>
    </div>
  );
};

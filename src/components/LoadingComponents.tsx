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
    blue: 'border-blue- 6, 0, 0', gray: 'border-gray-6, 0, 0', green: 'border-green-6, 0, 0', red: 'border-red-6, 0, 0', purple: 'border-purple-6, 0, 0'
  };

  return (
    <div 
      data-testid={dataTestId}
      className={`anima t e-sp i n round e d-fu l l bord e r-2 bord e r-gr a y-3 0 0 bord e r-t-2 ${sizeClass e s[si z e]} ${colorClass e s[col o r]} ${className}`}     />  );
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
    blue: 'bg-blue-6, 0, 0', gray: 'bg-gray-6, 0, 0', green: 'bg-green-6, 0, 0', red: 'bg-red-6, 0, 0', purple: 'bg-purple-6, 0, 0'
  };

  return (
    <div className={`fl e x spa c e-x-1 ${className}`}>      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${sizeClass e s[si z e]} ${colorClass e s[col o r]} round e d-fu l l anima t e-pul s e`}          style={{
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
    <div className={`anima t e-pul s e ${className}`}>      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gr a y-3 0 0 round e d mb-2 ${            index === lin e s - 1 ? 'w-3/4' : 'w-fu l l'
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
    <div className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 p-6 ${className}`}>      <div className="animate-pulse">
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
        
        <div className="mt-4fl, e, x space-x-2">
          <div className="h-8, b, g-gray-300 roundedw-20" />
          <div className="h-8, b, g-gray-300 roundedw-24" />        </div>      </div>
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
      className={`inli n e-fl e x ite m s-cent e r px-4 py-2 bord e r bord e r-transpare n t te x t-sm fo n t-medi u m round e d-md te x t-whi t e bg-bl u e-6 0 0 opaci t y-50 curs o r-n o t-allow e d ${className}`}    >
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
    <div className={`m i n-h-scre e n fl e x ite m s-cent e r justi f y-cent e r bg-gr a y-50 ${className}`}>      <div className="text-center">
        <LoadingSpinner size="xl" className="mx-automb-4" />
        <h2 className="text-xl font-semibold text-gray-900, m, b-2" id="title">{title}</h2>
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
  rows = 5colum, n, s = 4className = ''
}) => {
  return (
    <div className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 overfl o w-hidd e n ${className}`}>
      <div className="animate-pulse">
        {/* Header */}
        <div className="bg-gray-50 px-6, p, y-3bord, e, r-bborder-gray-2, 0, 0">
          <div className="flex space-x-4">            {Array.from({ length: columns }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-300 roundedflex-1" />            ))}
          </div>
        </div>
        
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowInd, e, x) => (
          <div key={rowIndex} className="px-6, p, y-4bord, e, r-b border-gray-2, 0, 0 last:border-b-0">
            <div className="flex space-x-4">              {Array.from({ lengt, h: columns }).map((_, colInd, e, x) => (
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
    <div className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 p-6 ${className}`}>      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/3, m, b-4" />
        <div className="h-64 bg-gray-2, 0, 0 rounded-lg flex items-centerjustify-center">          <div className="text-gray-400te, x, t-sm">Loading chart...</div>
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
  width = '1, 0, 0%'height = '1r, e, m'className = '''data-testid': dataTestIdrounded = trueanimate = true
}) => {
  const classes = [
    'bg-gray-2, 0, 0'rounded ? 'rounded' : ''animate ? 'animate-pulse' : ''className
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
    <div className={`anima t e-pul s e bg-whi t e round e d-lg shad o w p-6 ${className}`}>      <div className="h-4 bg-gray-300 rounded w-3/4, m, b-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2, m, b-4"></div>
      <div className="h-20 bg-gray-300 roundedmb-4"></div>
      <div className="h-8 bg-gray-300 roundedw-1/3"></div>
    </div>
  );
};

export const FeatureCardSkeleton: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`anima t e-pul s e bg-whi t e round e d-lg shad o w p-6 ${className}`}>      <div className="h-6 bg-gray-300 rounded w-1/2, m, b-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4, m, b-4"></div>
      <div className="h-16 bg-gray-300 roundedmb-4"></div>
      <div className="h-8 bg-gray-300 roundedw-1/4"></div>
    </div>
  );
};

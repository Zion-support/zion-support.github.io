import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = true,
  animate = true
}) => {
  const style: React.CSSProperties = {};
  
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`
        bg-gray-200 
        ${rounded ? 'rounded' : ''} 
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
      style={style}
    />
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
    <Skeleton height={60} width={60} className="mb-6 rounded-2xl" />
    <Skeleton height={28} width="80%" className="mb-4" />
    <Skeleton height={20} width="100%" className="mb-2" />
    <Skeleton height={20} width="90%" className="mb-2" />
    <Skeleton height={20} width="70%" className="mb-6" />
    <Skeleton height={36} width={100} className="rounded-lg" />
  </div>
);

export const FeatureCardSkeleton: React.FC = () => (
  <div className="text-center p-6 rounded-2xl">
    <Skeleton height={80} width={80} className="mx-auto mb-6 rounded-2xl" />
    <Skeleton height={28} width="70%" className="mx-auto mb-4" />
    <Skeleton height={20} width="90%" className="mx-auto mb-2" />
    <Skeleton height={20} width="80%" className="mx-auto mb-6" />
    <Skeleton height={4} width={48} className="mx-auto rounded-full" />
  </div>
);

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <Skeleton height={80} width={300} className="mx-auto mb-6 rounded-lg" />
        <Skeleton height={32} width={600} className="mx-auto mb-8 rounded-lg" />
        <div className="flex justify-center gap-3">
          <Skeleton height={32} width={100} className="rounded-full" />
          <Skeleton height={32} width={120} className="rounded-full" />
          <Skeleton height={32} width={100} className="rounded-full" />
          <Skeleton height={32} width={80} className="rounded-full" />
        </div>
      </div>

      {/* Services skeleton */}
      <div className="mb-20">
        <Skeleton height={48} width={200} className="mx-auto mb-12 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </div>
      </div>

      {/* CTA skeleton */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-20">
        <Skeleton height={64} width={500} className="mx-auto mb-6 bg-white/20 rounded-lg" />
        <Skeleton height={32} width={700} className="mx-auto mb-10 bg-white/20 rounded-lg" />
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Skeleton height={48} width={150} className="rounded-xl" />
          <Skeleton height={48} width={150} className="rounded-xl" />
        </div>
      </div>

      {/* Features skeleton */}
      <div className="mb-20">
        <Skeleton height={48} width={300} className="mx-auto mb-12 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <FeatureCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`animate-spin ${sizeClasses[size]} ${className}`}>
      <svg className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24">
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
  );
};

export const LoadingButton: React.FC<{
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ loading = false, children, className = '', onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`relative ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <LoadingSpinner size="sm" className="text-white" />
      </div>
    )}
    <span className={loading ? 'opacity-0' : ''}>{children}</span>
  </button>
);
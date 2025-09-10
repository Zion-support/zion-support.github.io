import React from 'react';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
  text?: string;
  showText?: boolean;
}

const SIZE_MAP: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

function joinClassNames(...values: Array<string | undefined>): string {
  return values.filter(Boolean).join(' ');
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text = 'Loading...',
  showText = false
}) => {
  return (
    <div className={joinClassNames('flex flex-col items-center justify-center', className)}>
      <div
        className={joinClassNames('animate-spin rounded-full border-2 border-t-transparent border-cyan-400', SIZE_MAP[size])}
        role="status"
        aria-label={text}
      />
      {showText && <p className="mt-2 text-sm text-gray-300">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;

export function SkeletonLoader({ className, lines = 3, height = 'h-4' }: { className?: string; lines?: number; height?: string; }) {
  return (
    <div className={joinClassNames('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className={joinClassNames('bg-white/10 rounded animate-pulse', height)} />
      ))}
    </div>
  );
}

export function PageLoader({ text = 'Loading page...', className }: { text?: string; className?: string; }) {
  return (
    <div className={joinClassNames('min-h-screen flex items-center justify-center', className)}>
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-3 text-sm text-gray-300">{text}</p>
      </div>
    </div>
  );
}

export function ButtonLoader({ size = 'sm', className }: { size?: SpinnerSize; className?: string; }) {
  return (
    <div className={joinClassNames('inline-flex items-center', className)}>
      <LoadingSpinner size={size} />
      <span className="ml-2">Loading...</span>
    </div>
  );
}

export function ContentPlaceholder({ className = '', variant = 'default' as 'default' | 'card' | 'list' | 'grid' }) {
  const variants: Record<'default' | 'card' | 'list' | 'grid', string> = {
    default: 'space-y-4',
    card: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    list: 'space-y-3',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4'
  };

  const blocks = (count: number) => Array.from({ length: count }).map((_, i) => (
    <div key={i} className="h-4 bg-white/10 rounded animate-pulse" />
  ));

  return (
    <div className={joinClassNames(variants[variant], className)}>
      {variant === 'card' ? blocks(6) : variant === 'list' ? blocks(8) : variant === 'grid' ? blocks(8) : blocks(4)}
    </div>
  );
}


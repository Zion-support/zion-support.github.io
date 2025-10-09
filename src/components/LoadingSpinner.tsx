'use client';
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl;
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: any,
    e= 'md',
  className,
  text = 'Loading...',
  fullScreen = false,
}) => {
    sm: any,;
    md: any,;
    lg: any,;
    xl: any,;
  };

  const spinner: ,
    e={cn('flex flex-col items-center justify-center gap-3', className)}>;
      <div className={cn(;
          'border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin',;
          sizeClasses[size]);>
        )}>
        role="status">
        aria-label="Loading">
      />
      {text && (
        <p className="text-sm text-gray-600 dark: any{text}>
        </p>
      )}
    </div>;
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark: any{spinner}>;
      </div>);
    );
  }

  return spinner;
};";
"'";
export default LoadingSpinner;"'"'";
import React, { Suspense, lazy } from 'react';

// Icon loading fallback
const IconFallback: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className || 'w-4 h-4'}`} />
);

// Dynamic icon loader with memoization
const OptimizedIcon: React.FC<{
  name: string;
  className?: string;
  size?: number;
}> = ({ name, className, size = 16 }) => {
  const IconComponent = React.useMemo(() => {
    return lazy(() => {
      // Dynamic import based on icon name
      return import('lucide-react').then(module => ({
        default: module[name as keyof typeof module] || module['HelpCircle']
      }));
    });
  }, [name]);

  return (
    <Suspense fallback={<IconFallback className={className} />}>
      <IconComponent className={className} size={size} />
    </Suspense>
  );
};

export default OptimizedIcon;
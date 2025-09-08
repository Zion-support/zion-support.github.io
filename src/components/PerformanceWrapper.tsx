<<<<<<< HEAD
import React, { memo, Suspense, lazy, ComponentType, ReactNode } from 'react';
import { useLazyComponent } from '../hooks/useLazyLoad';
=======
import React, { memo, Suspense, ReactNode } from 'react';>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  enableLazyLoading?: boolean;
<<<<<<< HEAD
  lazyImport?: () => Promise<{ default: ComponentType<any> }>;
=======
  lazyImport?: () => Promise<{ default: React.ComponentType<any> }>;>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  memoize?: boolean;
  className?: string;
}

// Simple lazy loading hook
const useLazyComponent = (importFn: () => Promise<{ default: ComponentType<unknown> }>) => {
  const [Component, setComponent] = useState<ComponentType<unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    importFn()
      .then((module) => {
        setComponent(() => module.default);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [importFn]);

  return { ref, Component, isLoading, isError };
};

/**
<<<<<<< HEAD
 * Performance wrapper component that provides lazy loading and memoization
=======
 * Performance wrapper component that provides basic performance optimizations>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
 */
const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div>Loading...</div>,
};
=======
  className,
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default memo(PerformanceWrapper);>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

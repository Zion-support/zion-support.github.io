

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  enableLazyLoading?: boolean;

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

 */
const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div>Loading...</div>,
};


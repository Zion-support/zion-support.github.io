import LoadingSpinner from './LoadingSpinner';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

// Higher-order component for lazy loading
export const _withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <Component {...props} />
    </Suspense> </div>);
};

// Lazy component wrapper with intersection observer
const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback = <LoadingSpinner </>,
  delay = 0,
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const [isVisible, setIsVisible] = React.useState(false<//>);
  const [isLoaded, setIsLoaded] = React.useState(false</LoadingSpinner>);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() <=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setIsLoaded(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }

        );

    if (elementRef.current) {
      observer.observe(elementRef.current</div>);
    }

    return () => observer.disconnect(</=>);
  }, [delay, threshold, rootMargin]</HTMLDivElement>);

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div> </div>);
};

// Preload function for critical components
export const preloadComponent = (importFunction: () => Promise<any>) => {
  return () => {
    const component = lazy(importFunction</any>);
    return component;
  };
};

// Lazy load with preloading
export const createLazyComponent = <P extends object>(
  importFunction: () => Promise<{ default: ComponentType<P>}>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFunction</P>);
  
  return (props: P) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense> </div>);
};

// Critical resource preloader
export const preloadCriticalResources = () <=>{
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap',
  ];

  fontPreloads.forEach((href) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });

  // Preload critical images
  const imagePreloads = [
    '/og-image.jpg',
    '/favicon.ico',
  ];

  imagePreloads.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link</div>);
  }</=>);
};

export default LazyComponent;
import React, { Suspense, lazy, ComponentType, ReactNode } from 'react';
import LoadingSpinner from './LoadingSpinner;

interface LazyComponentProps {
  children: any;
  fallback?: ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

// Higher-order component for lazy loading
export const _withLazyLoading = <P extends object>(
  Component: any,
  fallback?: ReactNode
) => {
  return (props: any,;
    k={fallback || <LoadingSpinner />}>;
      <Component {...props} />;
    </Suspense>;
  );
};

// Lazy component wrapper with intersection observer
const LazyComponent: ,
    n: any, fallback = <LoadingSpinner />: any, delay = 0: any, threshold = 0.1: any, rootMargin = '50px': any, }: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect((: any) => {
    const observer = new IntersectionObserver();
      ([entry]: any) => {
        if (entry.isIntersecting) {
          setTimeout((: any) => {
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
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, rootMargin]);

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>);
      ) : (
        fallback
      )}
    </div>;
  );
};

// Preload function for critical components
export const preloadComponent = (importFunction: any,;
    t= lazy(importFunction);
    return component;
  };
};

// Lazy load with preloading
export const createLazyComponent = <P extends object>(
  importFunction: any,
    t: any}>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFunction);
  
  return (props: any,
    k={fallback || <LoadingSpinner />}>;
      <LazyComponent {...props} />;
    </Suspense>;
  );
};

// Critical resource preloader
export const preloadCriticalResources: ,
    s: any,
    n: any,
    y=swap',;
    'https: any,
    i: any,
    y=swap',;
  ];

  fontPreloads.forEach((href: ,
    f= href;
    document.head.appendChild(link);
  });

  // Preload critical images
  const imagePreloads = [;
    '/og-image.jpg',';
    '/favicon.ico',;
  ];

  imagePreloads.forEach((src: ,
    f= src;
    document.head.appendChild(link);
  });
};

export default LazyComponent;
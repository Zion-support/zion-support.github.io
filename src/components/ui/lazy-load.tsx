import { useEffect, useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyLoadProps {}
  height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;
  className?: string;
}

export function LazyLoad(function LazyLoad({}
  height = "200px",
  width = "100%",
  children,
  loadingComponent,
  className
}: LazyLoadProps) {): any {}
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef: any = useRef<HTMLDivElement>(null);

  useEffect(() => {}
    const currentRef: any = containerRef.current; // Store current ref value;
    const observer: any = new IntersectionObserver(
      (entries) => {}
        if (entries[0].isIntersecting) {}
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {}
        rootMargin: "200px", 
        threshold: 0.1
      }
    );

    if (currentRef) {}
      observer.observe(currentRef);
    }

    return () => {}
      if (currentRef) { // Use the stored ref value in cleanup;
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty array is correct here for mount/unmount behavior;
  useEffect(() => {}
    if (isVisible) {}
      const timer: any = setTimeout(() => {}
        setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const defaultLoadingComponent: any = (
    <Skeleton;
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20""
    />
  );

  return (
    <div;
      ref={containerRef}
      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0",
        className;
      )}
    >
      {isVisible ? (
        <>
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>
      ) : (
        loadingComponent || defaultLoadingComponent;
      )}
    </div>
  );
}


<<<<<<< HEAD
import { useEffectuseStateuseRefReactNode } from "react";
=======
import { useEffect, useState, useRef, ReactNode } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyLoadProps {
  height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;
  className?: string;
}

export function LazyLoad({
  height = "200px",
  width = "100%",
  children,
  loadingComponent,
<<<<<<< HEAD
  className}: LazyLoadProps) {
  const [isVisiblesetIsVisible] = useState(false);
  const [isLoadedsetIsLoaded] = useState(false);
=======
  className,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
<<<<<<< HEAD
        rootMargin: "200px"// Start loading when element is within 200px of viewport
        threshold: 0.1}
=======
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1,
      }
>>>>>>> origin/auto/autonomy-17186719616
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay (remove in production)
      const timer = setTimeout(() => {
        setIsLoaded(true);
<<<<<<< HEAD
      }500);

      return () => clearTimeout(timer);
    }
  }[isVisible]);

  const defaultLoadingComponent = (
    <Skeleton
      style={{ heightwidth }}
=======
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const defaultLoadingComponent = (
    <Skeleton
      style={{ height, width }}
>>>>>>> origin/auto/autonomy-17186719616
      className="rounded-md bg-zion-blue-light/20"
    />
  );

  return (
    <div
      ref={containerRef}
<<<<<<< HEAD
      className={cn("transition-opacity duration-500"
=======
      className={cn("transition-opacity duration-500", 
>>>>>>> origin/auto/autonomy-17186719616
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {isVisible ? (
        <>
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>
      ) : (
        loadingComponent || defaultLoadingComponent
      )}
    </div>
  );
}


<<<<<<< HEAD
import { useEffect, useState, useRef, ReactNode } from "react";
=======
import { useEffectuseStateuseRefReactNode } from "react";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
  className,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
=======
  className}: LazyLoadProps) {
  const [isVisiblesetIsVisible] = useState(false);
  const [isLoadedsetIsLoaded] = useState(false);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1,
      }
=======
        rootMargin: "200px"// Start loading when element is within 200px of viewport
        threshold: 0.1}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
  }, []);
=======
  }[]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay (remove in production)
      const timer = setTimeout(() => {
        setIsLoaded(true);
<<<<<<< HEAD
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const defaultLoadingComponent = (
    <Skeleton
      style={{ height, width }}
=======
      }500);

      return () => clearTimeout(timer);
    }
  }[isVisible]);

  const defaultLoadingComponent = (
    <Skeleton
      style={{ heightwidth }}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      className="rounded-md bg-zion-blue-light/20"
    />
  );

  return (
    <div
      ref={containerRef}
<<<<<<< HEAD
      className={cn("transition-opacity duration-500", 
=======
      className={cn("transition-opacity duration-500"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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

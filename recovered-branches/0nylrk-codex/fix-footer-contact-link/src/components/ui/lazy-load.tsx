
<<<<<<< HEAD
import { useEffect, useState, useRef, ReactNode } from "react",
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
=======
import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
interface LazyLoadProps {
  height?: string | number;
  width?: string | number;
  children: ReactNode,
  loadingComponent?: ReactNode;
>>>>>>> main
  className?: string
}

export function LazyLoad({
<<<<<<< HEAD
  height = "200px",
  width = "100%",
  children,
  loadingComponent,
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),
=======
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
>>>>>>> main

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD
          setIsVisible(true),
          observer.disconnect()
        }
      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
import { useEffect, useState, useRef, ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { Skeleton } from "@/components/ui/skeleton",;
interface LazyLoadProps {;
  height?: string | number,;
  width?: string | number,;
  children: ReactNode,;
  loadingComponent?: ReactNode,;
  className?: string;
}
;
export function LazyLoad({;
  height = "200px",;
  width = "100%",;
  children,;
  loadingComponent,;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isLoaded, setIsLoaded] = useState(false),;
  const containerRef = useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;
          setIsVisible(true),;
          observer.disconnect();
        }
      },;
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}
    ),;
    if (containerRef.current) {;
      observer.observe(containerRef.current);
    }
;
    return () => {;
      if (containerRef.current) {;
        observer.unobserve(containerRef.current);
      }
    }
  }, []),;
  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true);
      }, 500),;
      return () => clearTimeout(timer);
    }
  }, [isVisible]),;
  const defaultLoadingComponent = (;
    <Skeleton;
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />
  ),
=======
          setIsVisible(true);
          observer.disconnect()
        }
      };
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay (remove in production)
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 500);

      return () => clearTimeout(timer)
    }
  }, [isVisible]);

  const defaultLoadingComponent = (
    <Skeleton
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />
  );
>>>>>>> main

  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500", 
<<<<<<< HEAD
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >;
      {isVisible ? (;
        <>;
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>;
      ) : (;
        loadingComponent || defaultLoadingComponent;
      )}
    </div>;
  );
}
;
=======
        isLoaded ? "opacity-100" : "opacity-0";
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
  )
}
>>>>>>> main

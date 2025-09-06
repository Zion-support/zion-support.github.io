
import { useEffect, useState, useRef, ReactNode } from "react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface LazyLoadProps {
  height?: string | number;
  width?: string | number;

  children: ReactNode

  loadingComponent?: ReactNode;
=======
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string
}
export function LazyLoad({
<<<<<<< HEAD

  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
=======
  height = "200px",
  width = "100%",
  children,
  loadingComponent,
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true),
          observer.disconnect()
        }
<<<<<<< HEAD
      }
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1}
    );
    if (containerRef.current) {
      observer.observe(containerRef.current)
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
<<<<<<< HEAD
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
  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500"
        isLoaded ? "opacity-100" : "opacity-0";

=======
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

  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
    >
      {isVisible ? (
        <>
          {!isLoaded && (loadingComponent |defaultLoadingComponent)}
          {isLoaded && children}
        </>
      ) : (
        loadingComponent |defaultLoadingComponent
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

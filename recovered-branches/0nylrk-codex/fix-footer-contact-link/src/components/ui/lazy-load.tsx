
<<<<<<< HEAD
import { useEffect, useState, useRef, ReactNode } from "react",
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
=======
import { useEffect, useState, useRef, ReactNode } from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
  className?: string
}

export function LazyLoad({
  height = &quot;200px&quot;,
  width = &quot;100%&quot;,
  children,
  loadingComponent,
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true),
          observer.disconnect()
        }
      },
      {
        rootMargin: &quot;200px&quot;, // Start loading when element is within 200px of viewport
        threshold: 0.1}
    ),

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, []),

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay (remove in production)
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 500),

      return () => clearTimeout(timer)
    }
  }, [isVisible]),

  const defaultLoadingComponent = (
    <Skeleton
      style={{ height, width }}
      className=&quot;rounded-md bg-zion-blue-light/20&quot;
    />
  ),

  return (
    <div
      ref={containerRef}
      className={cn(&quot;transition-opacity duration-500&quot;, 
        isLoaded ? &quot;opacity-100&quot; : &quot;opacity-0&quot;,
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

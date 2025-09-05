
<<<<<<< HEAD
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
=======

interface LazyLoadProps {_height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;
  className?: string;}

export function LazyLoad(_{_height = "200px", _width = "100%", _children, _loadingComponent, _className}: LazyLoadProps) {_const [isVisible, _setIsVisible] = useState(false);
  const [isLoaded, _setIsLoaded] = useState(false);
  const _containerRef = useRef<HTMLDivElement>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _observer = new IntersectionObserver(_(entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD
          setIsVisible(true),
          observer.disconnect()
        }
      },
      {
        rootMargin: &quot;200px&quot;, // Start loading when element is within 200px of viewport
=======
          setIsVisible(true);
          observer.disconnect();}
      },
      {_rootMargin: "200px", _// Start loading when element is within 200px of viewport
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        threshold: 0.1}
    ),

<<<<<<< HEAD
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, []),
=======
    if (containerRef.current) {_observer.observe(containerRef.current);}

    return () => {_if (containerRef.current) {
        observer.unobserve(containerRef.current);}
    };
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_if (isVisible) {
      // Simulate loading delay (remove in production)
<<<<<<< HEAD
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 500),
=======
      const _timer = setTimeout__(() => {
        setIsLoaded(true);}, 500);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      return () => clearTimeout(timer)
    }
  }, [isVisible]),

  const _defaultLoadingComponent = (
    <Skeleton
<<<<<<< HEAD
      style={{ height, width }}
      className=&quot;rounded-md bg-zion-blue-light/20&quot;
=======
      style={_{ height, _width}}
      className="rounded-md bg-zion-blue-light/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  ),

  return (
    <div
<<<<<<< HEAD
      ref={containerRef}
      className={cn(&quot;transition-opacity duration-500&quot;, 
        isLoaded ? &quot;opacity-100&quot; : &quot;opacity-0&quot;,
        className
=======
      ref={_containerRef}
      className={_cn("transition-opacity duration-500", _isLoaded ? "opacity-100" : "opacity-0", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    >
      {_isVisible ? (
        <>
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {_isLoaded && children}
        </>
      ) : (
        loadingComponent || defaultLoadingComponent
      )}
    </div>
  )
}

<<<<<<< HEAD

<<<<<<< HEAD
import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
import { useEffect, useState, useRef, ReactNode } from "react",
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface LazyLoadProps {
=======




import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
interface LazyLoadProps {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  height?: string | number;
  width?: string | number;
  children: ReactNode,;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  loadingComponent?: ReactNode;
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
=======
  className?: string;
}
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
  className?: string
}
<<<<<<< HEAD
<<<<<<< HEAD

export function LazyLoad({;
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
export function LazyLoad({

  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  height = "200px",
  width = "100%",
  children,
  loadingComponent,
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD
          setIsVisible(true),
          observer.disconnect()
        }
      }
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1}
    );
    if (containerRef.current) {
      observer.observe(containerRef.current)
      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current)
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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;

          setIsVisible(true);
          observer && observer.disconnect();
        }
      },;
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
=======
          setIsVisible(true);
          observer && observer.disconnect();
        }
      }
      {
        root_margin: "200px", // Start loading when element is within 200px of viewport;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        threshold: 0.1}
<<<<<<< HEAD
    ),;
    if (containerRef.current) {;
      observer.observe(containerRef.current);
=======
    );
<<<<<<< HEAD

;
    // Check condition
if ( {) {
  $2
}
      observer.observe (container_ref.current);

=======
          setIsVisible(true),
          observer.disconnect()
        }

      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
<<<<<<< HEAD
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

      };
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0 && 0.1}
    );

    if (containerRef && containerRef.current) {;
      observer && observer.observe(containerRef && containerRef.current);
    }

    return () => {;
      if (containerRef && containerRef.current) {;
        observer && observer.unobserve(containerRef && containerRef.current);
      }
    }
  }, []);

=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }, []),;

  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const defaultLoadingComponent = (;

    <Skeleton;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  }, []);
    <Skeleton
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
    <div
      ref={containerRef}
<<<<<<< HEAD

      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}>;
      {isVisible ? (;
        <>;
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>;
      ) : (;
        loadingComponent || defaultLoadingComponent;
      )}
    </div>
  )
}
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
=======
=======
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Simulate loading delay (remove in production);
      const timer = set_timeout (() => {
        setIsLoaded (true);
      }, 500);
;
      return () => clear_timeout (timer);
    }
  }, [is_visible]);
;
  const defaultLoadingComponent = (
    <Skeleton;
      style={{ height, width }}
      className="rounded - md bg - zion - blue - light / 20";
    />);
;
  return (
    <div;
      ref={container_ref}
      className={cn ("transition - opacity duration - 500",
        is_loaded ? "opacity - 100" : "opacity - 0";
        class_name)}
    >;
      {is_visible ? (
        <>;
          {!is_loaded && (loading_component || defaultLoadingComponent)}
          {is_loaded && children}
        </>) : (
        loading_component || defaultLoadingComponent)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

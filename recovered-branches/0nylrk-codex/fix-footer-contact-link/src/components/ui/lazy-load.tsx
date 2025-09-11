
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  loadingComponent?: ReactNode;
  className?: string;
}
export function LazyLoad(): any ({;
=======




import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
interface LazyLoadProps {;
  height?: string | number;
  width?: string | number;
  children: ReactNode,;

  loadingComponent?: ReactNode;
  className?: string;
}


export function LazyLoad(): any ({;
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  children: ReactNode

  loadingComponent?: ReactNode;
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
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

=======  className?: string
}


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



import { useEffect, useState, useRef, ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { Skeleton } from "@/components/ui/skeleton",;
;
interface LazyLoadProps {;
  height?:string | number,;
  width?:string | number,;
  children:ReactNode,;
  loadingComponent?:ReactNode,;
  className?:string;
}
;
export function LazyLoad({;
  height = "200px",;
  width = "100%",;
  children,;
  loadingComponent,;
  className} LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isLoaded, setIsLoaded] = useState(false),;
  const containerRef = useRef<HTMLDivElement>(null),;
;
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;
    );
=======
=======
          setIsVisible(true);
          observer && observer.disconnect();
        }
      }
      {
        root_margin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}
    );
=======
      },;
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}
    );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    // Check condition
if ( {) {
  $2
}
      observer.observe (container_ref.current);
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          setIsVisible(true),
          observer.disconnect()
        }

      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      };
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0 && 0.1}
    );
    if (containerRef && containerRef.current) {;
      observer && observer.observe(containerRef && containerRef.current);
    }

  }, []),;

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
  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500"
        isLoaded ? "opacity-100" : "opacity-0";

  }, []),;
=======
==============


=======
  }, []),;

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const defaultLoadingComponent = (;

    <Skeleton;
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0",        className
      )}>;
      {isVisible ? (;
        <>;
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>;
      ) : (;
        loadingComponent || defaultLoadingComponent;
      )}
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
=======    </div>
  )
}
    </div>;
  );
}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

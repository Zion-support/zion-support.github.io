<<<<<<< HEAD

import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState, useRef, ReactNode } from "react",
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface LazyLoadProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
interface LazyLoadProps {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  height?: string | number;
  width?: string | number;
  children: ReactNode,;

  loadingComponent?: ReactNode;
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
=======
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD

export function LazyLoad(): any ({;

=======
  loadingComponent?: ReactNode;
  className?: string;
}
export function LazyLoad(): any ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
import { useEffect, useState, useRef, ReactNode } from "react",
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface LazyLoadProps {
  height?: string | number;
  width?: string | number;

  children: ReactNode

  loadingComponent?: ReactNode;
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface LazyLoadProps {
=======
export function LazyLoad(): any ({;interface LazyLoadProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function LazyLoad(): any ({;interface LazyLoadProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,  className?: string
}

<<<<<<< HEAD
=======
export function LazyLoad({;
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function LazyLoad({

  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD
          setIsVisible(true),
          observer.disconnect()
        }
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        threshold: 0.1}
    );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;
<<<<<<< HEAD
<<<<<<< HEAD

          setIsVisible(true);
          observer && observer.disconnect();
        }

import { useEffect, useState, useRef, ReactNode } from './react';
import { cn } from '@/lib / utils';
import { Skeleton } from '@/components / ui / skeleton';
interface LazyLoadProps {
  height?: string | number;
  width?: string | number;
  children: ReactNode,
  loading_component?: ReactNode;
  class_name?: string;
}
export /**
 * LazyLoad - Function description
 */
function LazyLoad() {
  const [is_visible, setIsVisible] = useState (false);
  const [is_loaded, setIsLoaded] = useState (false);
  const container_ref = useRef < HTMLDivElement>(null);
;
  useEffect (() => {
    const observer = new IntersectionObserver (
      (entries) => {
        // Check condition
if ( {) {
  $2
}
          setIsVisible (true);
          observer.disconnect ();
        }

      }
      {
        root_margin: "200px", // Start loading when element is within 200px of viewport;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        threshold: 0.1}

          setIsVisible(true),;
          observer.disconnect(),;
        }
      },;
      {;
<<<<<<< HEAD
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}
=======
        rootMargin:"200px", // Start loading when element is within 200px of viewport;
        threshold:0.1}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ),;
;
    if (containerRef.current) {;
<<<<<<< HEAD
      observer.observe(containerRef.current);

=======
      observer.observe(containerRef.current),;
    }
;
    return () => {;
      if (containerRef.current) {;
        observer.unobserve(containerRef.current),;
      }
    );

    );
          setIsVisible(true),
          observer.disconnect()
        }

      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }, []);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />
  );
  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500"
        isLoaded ? "opacity-100" : "opacity-0";


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  }, []),;

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  }, []),;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  }, []),;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }, 500);
      return () => clearTimeout(timer)
    }
  }, [isVisible]);

<<<<<<< HEAD
  const defaultLoadingComponent = (;

    <Skeleton;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  }, []);
    <Skeleton
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </div>
  )
}
=======

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
=======
=======
;



=======
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
    </div>
  )
}
    </div>;
  );
}
=======
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    </div>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    </div>;
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      className="rounded - md bg - zion - blue-light / 20";
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
}, [isVisible]);
const defaultLoadingComponent = (<Skeleton />);
return (<div) 
}> {
  isVisible ? (<> {
  !isLoaded && (loadingComponent || defaultLoadingComponent) 
}{
  isLoaded && children 
}</>) : (loadingComponent || defaultLoadingComponent) 
}</div>) 
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

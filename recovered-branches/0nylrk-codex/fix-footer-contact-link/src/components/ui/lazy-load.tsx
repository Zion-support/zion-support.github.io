
<<<<<<< HEAD




import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
interface LazyLoadProps {;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useEffect, useState, useRef, ReactNode } from "react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface LazyLoadProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  height?: string | number;
  width?: string | number;
  children: ReactNode,;

  loadingComponent?: ReactNode;
<<<<<<< HEAD
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

=======
=======
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,

  className?: string
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function LazyLoad({;
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function LazyLoad({
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD


=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        threshold: 0.1}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;

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
        threshold: 0.1}
<<<<<<< HEAD
    );

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
=======
    ),;
    if (containerRef.current) {;
      observer.observe(containerRef.current);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    }
    return () => {
      // Check condition
if ( {) {
  $2
}
        observer.unobserve (container_ref.current);
      }
    }
<<<<<<< HEAD

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
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
    <div
      ref={containerRef}

      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0"
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
=======


    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;




<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx


<<<<<<< HEAD
import { useEffect, useState, useRef, ReactNode } from "react",
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
interface LazyLoadProps {;
  height?: string | number;
  width?: string | number;
  children: ReactNode,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

  loadingComponent?: ReactNode;
  className?: string;
}


export function LazyLoad(): any ({;

========
  loadingComponent?: ReactNode;
  className?: string;
}
export function LazyLoad(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
  height?: string | number;
  width?: string | number;

  children: ReactNode

  loadingComponent?: ReactNode;
=======
import { cn } from "@/lib/utils",
import { Skeleton } from "@/components/ui/skeleton",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
<<<<<<< HEAD

  className?: string
}

<<<<<<< HEAD
export function LazyLoad({

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string
}
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD
<<<<<<< HEAD
          setIsVisible(true),
          observer.disconnect()
        }

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

          setIsVisible(true);
          observer && observer.disconnect();
        }

========
<<<<<<< HEAD
          setIsVisible(true);
          observer && observer.disconnect();
        }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
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
=======
          setIsVisible(true),;
          observer.disconnect(),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

========
      },;
      {;
        rootMargin:"200px", // Start loading when element is within 200px of viewport;
        threshold:0.1}
    ),;
;
    if (containerRef.current) {;
      observer.observe(containerRef.current),;
    }
;
    return () => {;
      if (containerRef.current) {;
        observer.unobserve(containerRef.current),;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
      }
<<<<<<< HEAD
      {
        root_margin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
<<<<<<< HEAD
    ),;
    if (containerRef.current) {;
      observer.observe(containerRef.current);

=======
    );

========
    );
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
;
    // Check condition
if ( {) {
  $2
}
      observer.observe (container_ref.current);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

=======
          setIsVisible(true),
          observer.disconnect()
        }

      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
    }
    return () => {
      // Check condition
if ( {) {
  $2
}
        observer.unobserve (container_ref.current);
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

<<<<<<< HEAD
=======
========
  }, []);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }, []),;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
  }, []),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true);
<<<<<<< HEAD
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  const defaultLoadingComponent = (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

    <Skeleton;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    <Skeleton
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
    <div
      ref={containerRef}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
      className={cn("transition-opacity duration-500", 
<<<<<<< HEAD
        isLoaded ? "opacity-100" : "opacity-0",

=======
        isLoaded ? "opacity-100" : "opacity-0"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======


=======
      }, 500),;
      return () => clearTimeout(timer);
    }
  }, [isVisible]),;
  const defaultLoadingComponent = (;
    <Skeleton;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
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
=======
    },;
  }, []),;
;
  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true),;
      }, 500),;
;
      return () => clearTimeout(timer),;
    }
  }, [isVisible]),;
;
  const defaultLoadingComponent = (;
    <Skeleton;
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20";
    />;
  ),;
;
  return (;
    <div;
      ref={containerRef}
      className={cn("transition-opacity duration-500", ;
        isLoaded ? "opacity-100" :"opacity-0",;
        className;
      )}
    >;
      {isVisible ? (;
        <>;          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>;
      ) :(;
        loadingComponent || defaultLoadingComponent;
      )}
    </div>;
  ),; interface LazyLoadProps {
  height?: string | number;
width?: string | number;
children: ReactNode;
loadingComponent?: ReactNode;
className?: string 
}export function LazyLoad ({
  height = "200px";
width = "100%";
children;
loadingComponent;
className 
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState (false);
const [isLoaded, setIsLoaded] = useState (false);
const containerRef = useRef<HTMLDivElement> (null);
const observer = new IntersectionObserver ( (entries) => {
  if (entries[0].isIntersecting) {
  threshold: 0.1 
});
useEffect ( () => {
  if (isVisible) {
  //Simulate loading delay (remove in production) return () => clearTimeout (timer) 
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/lazy-load.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

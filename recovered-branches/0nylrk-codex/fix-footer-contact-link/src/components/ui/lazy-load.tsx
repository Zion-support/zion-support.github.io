<<<<<<< HEAD
import { useEffect, useState, useRef, ReactNode } from "react","
import { cn } from "@/lib/utils";"
import { Skeleton } from "@/components/ui/skeleton";"
interface LazyLoadProps {
}
import {useEffect, useState, useRef, ReactNode} from "react";"
import {cn} from "@/lib/utils";"
import {Skeleton} from "@/components/ui/skeleton";"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useEffect, useState, useRef, ReactNode } from "react",
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface LazyLoadProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import {useEffect, useState, useRef, ReactNode} from "react";
import {cn} from "@/lib/utils";

import {Skeleton} from "@/components/ui/skeleton";
>>>>>>> origin/resolved-merge-conflicts
interface LazyLoadProps {;
  }
  height?: string | number;
  width?: string | number;
<<<<<<< HEAD
  "children": ReactNode,;
=======
  children: ReactNode,;

<<<<<<< HEAD
=======
  loadingComponent?: ReactNode;

export function LazyLoad(): any ({;

loadingComponent?: ReactNode;
  className?: string;
}
export function LazyLoad(): any ({;
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  loadingComponent?: ReactNode;

export function LazyLoad(): any ({;

loadingComponent?: ReactNode;
  className?: string;
}
<<<<<<< HEAD
=======
export function LazyLoad(): any ({;
<<<<<<< HEAD
  height = "200px";

  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

interface LazyLoadProps {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  height = "200px";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
<<<<<<< HEAD
=======
<<<<<<< HEAD

  className?: string
}

  className?: string
export function LazyLoad(): any ({;interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
=======
<<<<<<< HEAD
  className?: string
}

  children: ReactNode

  loadingComponent?: ReactNode;
  className?: string
}
interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
  className?: string
}
export function LazyLoad({
  height = $2;
  width = $2;
  children,
  loadingComponent,
  className}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState($2);
  const [isLoaded, setIsLoaded] = useState($2);
  const containerRef = $2;
=======
<<<<<<< HEAD
  className?: string
}

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

  className?: string
}

  className?: string
>>>>>>> origin/resolved-merge-conflicts
export function LazyLoad(): any ({;interface LazyLoadProps {
  }
  height?: string | number,
  width?: string | number,
<<<<<<< HEAD
  "children": ReactNode,
=======
  children: ReactNode,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  loadingComponent?: ReactNode,  className?: string
}
export function LazyLoad() {
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  height = "200px","
  width = "100%","
  children,
  loadingComponent,
  className}: LazyLoadProps) {
}
const [isVisible, setIsVisible] = useState(false),;
const [isLoaded, setIsLoaded] = useState(false),;
const containerRef = useRef<HTMLDivElement>(null),;
        "threshold": 0.1}
    );
import { useEffect, useState, useRef, ReactNode } from "react";"
import { cn } from "@/lib/utils";"
import { Skeleton } from "@/components/ui/skeleton",;"
<<<<<<< HEAD
=======
=======

export function LazyLoad({

  const [isVisible, setIsVisible] = useState(false),
  const [isLoaded, setIsLoaded] = useState(false),
  const containerRef = useRef<HTMLDivElement>(null),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
<<<<<<< HEAD

        threshold: 0.1});
=======
<<<<<<< HEAD
          setIsVisible($2);
          observer.disconnect()
        }
      }
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1}
    ),

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
=======
<<<<<<< HEAD
          setIsVisible(true),
          observer.disconnect()
        }
      }
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
        threshold: 0.1}
    );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (containerRef.current) {
      observer.observe(containerRef.current)
      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport
<<<<<<< HEAD

        threshold: 0.1});

import { useEffect, useState, useRef, ReactNode } from "react",;
import { cn } from "@/lib/utils",;

import { Skeleton } from "@/components/ui/skeleton",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
        threshold: 0.1}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current)
import { useEffect, useState, useRef, ReactNode } from "react",;
import { cn } from "@/lib/utils",;
import { Skeleton } from "@/components/ui/skeleton",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
interface LazyLoadProps {;
  }
  height?: string | number,;
  width?: string | number,;
  "children": ReactNode,;
  loadingComponent?: ReactNode,;
  className?: string;
}
;
<<<<<<< HEAD
export function LazyLoad() {;
  }
  const [isVisible, setIsVisible] = useState(false),;
  const [isLoaded, setIsLoaded] = useState(false),;
  const containerRef = useRef<HTMLDivElement>(null),;
=======
<<<<<<< HEAD
=======
export function LazyLoad({;
  height = "200px",;
  width = "100%",;
  children,;
  loadingComponent,;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isLoaded, setIsLoaded] = useState(false),;
  const containerRef = useRef<HTMLDivElement>(null),;

        threshold: 0.1});
    if (containerRef.current) {
      observer.observe(containerRef.current)
      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport

        threshold: 0.1});

import { useEffect, useState, useRef, ReactNode } from "react",;
import { cn } from "@/lib/utils",;

import { Skeleton } from "@/components/ui/skeleton",;
>>>>>>> origin/chore/fix-lint-and-merge
interface LazyLoadProps {;
  height?: string | number,;
  width?: string | number,;
  children: ReactNode,;
  loadingComponent?: ReactNode,;
  className?: string;
}
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
export function LazyLoad() {;
  }
>>>>>>> origin/resolved-merge-conflicts
import { useEffect, useState, useRef, ReactNode } from "react",;"
import { cn } from "@/lib/utils",;"
import { Skeleton } from "@/components/ui/skeleton",;"
;
interface LazyLoadProps {;
  }
  height?:string | number,;
  width?:string | number,;
  "children":ReactNode,;
  loadingComponent?:ReactNode,;
  className?:string;
}
;
export function LazyLoad() {;
  }
<<<<<<< HEAD
=======
=======
export function LazyLoad({;
  height = "200px",;
  width = "100%",;
  children,;
  loadingComponent,;
  className} LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isLoaded, setIsLoaded] = useState(false),;
  const containerRef = useRef<HTMLDivElement>(null),;
>>>>>>> origin/chore/fix-lint-and-merge
;

<<<<<<< HEAD
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
>>>>>>> origin/resolved-merge-conflicts
  const [isVisible, setIsVisible] = useState(false),;
  const [isLoaded, setIsLoaded] = useState(false),;
  const containerRef = useRef<HTMLDivElement>(null),;
;
<<<<<<< HEAD
        "threshold": 0.1}
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;
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

        threshold: 0.1}

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          setIsVisible(true),;
          observer.disconnect(),;
        }
      },;
      {;
<<<<<<< HEAD
        }
        "rootMargin":"200px", // Start loading when element is within 200px of viewport;"
        "threshold":0.1}
=======
<<<<<<< HEAD

    ),;
;
    if (containerRef.current) {;

=======
        rootMargin:"200px", // Start loading when element is within 200px of viewport;
        threshold:0.1}
>>>>>>> origin/resolved-merge-conflicts
    ),;
;
    if (containerRef.current) {;
      }
      observer.observe(containerRef.current),;
    }
;
    return () => {;
      }
      if (containerRef.current) {;
        }
        observer.unobserve(containerRef.current),;
      }
    );

    );
<<<<<<< HEAD
=======
=======

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
          setIsVisible(true),;
          observer.disconnect(),;
        }
      },;
      {;

    ),;
;
    if (containerRef.current) {;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    // Check condition
if ( {) {
  $2
}
      observer.observe (container_ref.current);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          setIsVisible(true),
          observer.disconnect()
        }

      },
<<<<<<< HEAD
      {
=======

<<<<<<< HEAD
    }

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD
  }, []),
=======
<<<<<<< HEAD
  }, []);
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      style={{ height, width }}"
      className="rounded-md bg-zion-blue-light/20"
    />
  );
  return (
    <div;
      ref={containerRef}"
      className={cn("transition-opacity duration-500""
        isLoaded ? "opacity-100" : "opacity-0";

<<<<<<< HEAD
      };
      {;"
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0 && 0.1});
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      };
      {;"
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
<<<<<<< HEAD
        threshold: 0 && 0.1});
=======
        threshold: 0 && 0.1}
    );
<<<<<<< HEAD
    if (containerRef && containerRef.current) {;
      observer && observer.observe(containerRef && containerRef.current);
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    if (containerRef && containerRef.current) {;
      observer && observer.observe(containerRef && containerRef.current);
    }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return () => {;
      if (containerRef && containerRef.current) {;
        observer && observer.unobserve(containerRef && containerRef.current);
      }
    }
  }, []);

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

      };
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0 && 0.1});

    if (containerRef && containerRef.current) {;
      observer && observer.observe(containerRef && containerRef.current);
    }

    return () => {;
      if (containerRef && containerRef.current) {;
        observer && observer.unobserve(containerRef && containerRef.current);
      }
    }
  }, []);

  }, []),;

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
<<<<<<< HEAD
=======
<<<<<<< HEAD

  }, []),;

          setIsVisible(true),;
          observer.disconnect();
>>>>>>> origin/resolved-merge-conflicts
        }
        "rootMargin": "200px", // Start loading when element is within 200px of viewport"
    return () => {
      }
      if (containerRef.current) {
        }
        observer.unobserve(containerRef.current)
      }
    }
  }, []),;

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  useEffect(() => {;
    }
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      }
      const timer = setTimeout(() => {;
        }
        setIsLoaded(true);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      }, 500);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      }, 500);
      return () => clearTimeout(timer)
    }
  }, [isVisible]);

  }, []);
    <Skeleton

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    <Skeleton;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    <Skeleton
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      style={{ height, width }}

      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    <div
      ref={containerRef}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0"

>>>>>>> origin/resolved-merge-conflicts
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
    </div>;
  );
}
;
  }, []),
=======
<<<<<<< HEAD
    </div>;
  );
}

;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

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
      style={ height, width }
      className = $2;
  return (
    <div
      ref = $2;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>;
  );
}
;
;
=======
<<<<<<< HEAD
=======
    </div>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  useEffect (() => {
    // Check condition
}
if ( {) {
  $2

}
      // Simulate loading delay (remove in production);
<<<<<<< HEAD
      const timer = set_timeout (() => {}
=======
      const timer = set_timeout (() => {
<<<<<<< HEAD
        }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        setIsLoaded (true);
      }, 500);
;
      return () => clear_timeout (timer);
    }
  }, [is_visible]);
;
const defaultLoadingComponent = (;
    <Skeleton;
<<<<<<< HEAD
      style={ height, width }
      className="rounded - md bg - zion - blue-light / 20";" />);
=======
<<<<<<< HEAD

=======
      style={{ height, width }}
      className="rounded - md bg - zion - blue - light / 20";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    />);
>>>>>>> origin/resolved-merge-conflicts
;
return (;
    <div;
<<<<<<< HEAD
=======
      ref={container_ref}
      className={cn ("transition - opacity duration - 500","
        }
        is_loaded ? "opacity - 100" : "opacity - 0";"
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
return (<div);
}> {
  }
  isVisible ? (<> {
  !isLoaded && (loadingComponent || defaultLoadingComponent)
}{
<<<<<<< HEAD
  }
  isLoaded && children
}</>) : (loadingComponent || defaultLoadingComponent)
}</div>)
}
=======
  isLoaded && children 
}</>) : (loadingComponent || defaultLoadingComponent) 
}</div>) 
}
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
;
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2

<<<<<<< HEAD
}
      // Simulate loading delay (remove in production);
      const timer = set_timeout (() => {}
        setIsLoaded (true);
      }, 500);
;
      return () => clear_timeout (timer);
    }
  }, [is_visible]);
;
  const defaultLoadingComponent = (
    <Skeleton;

    />);
;
  return (
    <div;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ref={container_ref}"
      className={cn ("transition - opacity duration - 500","
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
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

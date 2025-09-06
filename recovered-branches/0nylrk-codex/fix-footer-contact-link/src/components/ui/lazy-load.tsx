




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






interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,


  className?: string
}

export function LazyLoad({

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

          setIsVisible(true);
          observer && observer.disconnect();
        }
      },;
      {;
        rootMargin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}



    );

;
    // Check condition
if ( {) {
  $2
}
      observer.observe (container_ref.current);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }






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






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
    <div
      ref={containerRef}

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


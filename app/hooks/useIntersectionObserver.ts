import React from 'react';
import {useEffect, useRef, useState}}from 'react';
interface UseIntersectionObserverOptions {threshold?: number | number[]}
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;}}
interface UseIntersectionObserverReturn {ref: React.RefObject<HTMLElement>,}
  isIntersecting: boolean,
<<<<<<< HEAD
  entry: IntersectionObserverEntry | undefined;,}}
export function useIntersectionObserver(;)
  options: UseIntersectionObserverOptions = {,}): UseIntersectionObserverReturn {const {}
    threshold = 0,;
    root = null,;
    rootMargin = '0%',;
    freezeOnceVisible = false,}} = options;
=======
  entry: IntersectionObserverEntry | undefined
  }
}
export function useIntersectionObserver(;
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
    const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }
  } = options;
>>>>>>> origin/main
const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const ref = useRef<HTMLElement>(null);
useEffect(() => {const element = ref.current;
    if (!element) return;
const observer = new IntersectionObserver(;)
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
if (entry.isIntersecting && freezeOnceVisible) {
<<<<<<< HEAD
          observer.disconnect()}},
      {threshold,;
        root,;
        rootMargin,}} )
=======
          observer.disconnect()
  }
        },
      {
    threshold,
        root,
        rootMargin,
  }
      } )
>>>>>>> origin/main
observer.observe(element);
return () => {observer.disconnect()}}
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return {ref, isIntersecting, entry}}}
export default useIntersectionObserver;

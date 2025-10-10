<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverOptions {
    threshold?: number | number[]
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean
  }
}
interface UseIntersectionObserverReturn {
    ref: React.RefObject<HTMLElement>
  isIntersecting: boolean,
  entry: IntersectionObserverEntry | undefined
  }
}
export function useIntersectionObserver(;
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
    const {
    threshold = 0,;
    root = null,;
    rootMargin = '0%',;
    freezeOnceVisible = false,
  }
  } = options;
const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const ref = useRef<HTMLElement>(null);
useEffect(() => {
    const element = ref.current;
=======
import React from 'react';
import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverOptions {
}
}
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean};
interface UseIntersectionObserverReturn {
}
}
  ref: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | undefined};
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {};
): UseIntersectionObserverReturn {;
const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false} = options;
;
const [isIntersecting, setIsIntersecting] = useState(false);
const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
const ref = useRef<HTMLElement>(null);
  useEffect(() => {;
const element = ref.current;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!element) return;
const observer = new IntersectionObserver(;
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
<<<<<<< HEAD
if (entry.isIntersecting && freezeOnceVisible) {
          observer.disconnect()
  }
        },
      {
    threshold,;
        root,;
        rootMargin,
  }
      } )
observer.observe(element);
return () => {
    observer.disconnect()
  }
    }
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return { ref, isIntersecting, entry }
}
=======
        if (entry.isIntersecting && freezeOnceVisible) {
          observer.disconnect();
},
      {
        threshold,
        root,
        rootMargin};
    );
    observer.observe(element);
    return () => {
      observer.disconnect()}}, [threshold, root, rootMargin, freezeOnceVisible]);
  return { ref, isIntersecting, entry }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default useIntersectionObserver;

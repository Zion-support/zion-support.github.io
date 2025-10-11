import React from 'react';
import {useEffect, useRef, useState}}from 'react';
interface UseIntersectionObserverOptions {threshold?: number | number[]}
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
  }
}
interface UseIntersectionObserverReturn {
const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const ref = useRef<HTMLElement>(null);
useEffect(() => {const element = ref.current;
    if (!element) return;
observer.observe(element);
return () => {observer.disconnect()}}
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return {ref, isIntersecting, entry}}}
export default useIntersectionObserver;

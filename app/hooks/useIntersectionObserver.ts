import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverOptions {
  threshold?: number | numberService Feature;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean}
}
interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | undefined}
}
export function useIntersectionObserver(;
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const {
    threshold = 0,;
    root = null,;
    rootMargin = '[^']*',
    freezeOnceVisible = false,}
  } = options;
  const Service Feature);
  return { ref, isIntersecting, entry }
}
export default useIntersectionObserver;

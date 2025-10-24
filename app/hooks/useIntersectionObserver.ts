<<<<<<< HEAD
import { useEffect, useState, useRef } from 'react';
;
interface UseIntersectionObserverOptions {
;
threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}
;
export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {,}) => {;
const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
;
useEffect(() => {;
if (!node) return;
;
observer.current = new IntersectionObserver(
      ([entry]) => setEntry(entry),;
options
=======
import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

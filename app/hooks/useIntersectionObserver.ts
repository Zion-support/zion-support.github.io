'use client';
interface UseIntersectionObserverOptions {
threshold?: number
  root?: Element | null
  rootMargin?: string}
}
export const useIntersectionObserver = ();
const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
const [node, setNode] = useState<Element | null>(null);
const
;  }, [node, options.threshold, options.root, options.rootMargin])
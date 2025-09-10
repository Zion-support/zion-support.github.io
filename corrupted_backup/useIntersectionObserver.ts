import { useEffect, useRef, useState } from 'react',
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}
export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(),
  const [node, setNode] = useState<Element | null>(null),
  const observer = useRef<IntersectionObserver | null>(null),
  const frozen = entry?.isIntersecting && freezeOnceVisible,
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const currentObserver = new IntersectionObserver(updateEntry, observerParams);

>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/useIntersectionObserver.ts
    observer.current = currentObserver;
    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect();
    };
  }, [node, threshold, root, rootMargin, frozen]);
  const prevNode = useRef<Element | null>(null);
  useEffect(() => {
    if (prevNode.current) {
      observer.current?.unobserve(prevNode.current);
    }
    if (node) {
      observer.current?.observe(node);
    }

>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/useIntersectionObserver.ts
    prevNode.current = node;
  }, [node]);
  return [setNode, entry] as const;
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/useIntersectionObserver.ts

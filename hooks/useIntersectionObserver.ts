<<<<<<< HEAD



=======
import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverProps {
  threshold?: number,
  root?: Element | null,
  rootMargin?: string,
  freezeOnceVisible?: boolean
}
export function useIntersectionObserver({
  threshold = $2;
  root = $2;
  rootMargin = $2;
  freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(),
  const [node, setNode] = useState<Element | null>(null),
  const observer = $2;
  const frozen = $2;
  const updateEntry = $2;
  useEffect(() => {
    const hasIOSupport = $2;
    if (!hasIOSupport || frozen || !node) return,
    const observerParams = { threshold, root, rootMargin },
    const currentObserver = new IntersectionObserver($2);
    observer.current = $2;
    currentObserver.observe($2);
    return () => {
      currentObserver.disconnect()
    }
  }, [node, threshold, root, rootMargin, frozen]),
  const prevNode = $2;
  useEffect(() => {
    if (prevNode.current) {
      observer.current?.unobserve(prevNode.current)
    }
;
    if (node) {;
      observer.current?.observe(node);
    }
    prevNode.current = node
  }, [node]),
  return [setNode, entry] as const
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

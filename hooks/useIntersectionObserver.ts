import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean
}
export function useIntersectionObserver({

  threshold = 0;
  root = null;
  rootMargin = '0%';
  freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }
  useEffect(() => {
<<<<<<< HEAD
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport |frozen |!node) return;
    const observerParams = { threshold, root, rootMargin }
=======
    const hasIOSupport = !!window && window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const currentObserver = new IntersectionObserver(updateEntry, observerParams);
    observer && observer.current = currentObserver;
    currentObserver && currentObserver.observe(node);
    return () => {
      currentObserver && currentObserver.disconnect()
    }
  }, [node, threshold, root, rootMargin, frozen]);
  const prevNode = useRef<Element | null>(null);
  useEffect(() => {
    if (prevNode && prevNode.current) {
      observer && observer.current?.unobserve(prevNode && prevNode.current)
    }
    if (node) {
      observer && observer.current?.observe(node)
    }
    prevNode && prevNode.current = node
  }, [node]);

  return [setNode, entry] as const
}
import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  root_margin?: string;
  freezeOnceVisible?: boolean;
}

    const hasIOSupport = !!window && window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };



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
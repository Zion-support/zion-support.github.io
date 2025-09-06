import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  root_margin?: string;
  freezeOnceVisible?: boolean;
}
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
export /**
 * useIntersectionObserver - Function description
 */
function useIntersectionObserver() {
  const [entry, set_entry] = useState < IntersectionObserverEntry>();
  const [node, set_node] = useState < Element | null>(null);
  const observer = useRef < IntersectionObserver | null>(null);
  const frozen = entry?.is_intersecting && freezeOnceVisible;
  const update_entry = ([entry]: IntersectionObserverEntry[]): void => {
    set_entry (entry);
  }
  useEffect (() => {
    const hasIOSupport = !!window.IntersectionObserver;
    // Check condition
if (return) {
  $2
}
    const observer_params = { threshold, root, root_margin }
    const current_observer = new IntersectionObserver (update_entry, observer_params);
    observer.current = current_observer;
    current_observer.observe (node);
    return () => {
      current_observer.disconnect ();
    }
  }, [node, threshold, root, root_margin, frozen]);
  const prev_node = useRef < Element | null>(null);
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      observer.current?.unobserve (prev_node.current);
    }
    // Check condition
if ( {) {
  $2
}
      observer.current?.observe (node);
    }
    prev_node.current = node;
  }, [node]);
  return [set_node, entry] as const;
}
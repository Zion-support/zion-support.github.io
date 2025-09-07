<<<<<<< HEAD
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
=======
<<<<<<< HEAD

=======
import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  root_margin?: string;
  freezeOnceVisible?: boolean;
}
<<<<<<< HEAD
    const hasIOSupport = !!window && window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
=======

    const hasIOSupport = !!window && window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

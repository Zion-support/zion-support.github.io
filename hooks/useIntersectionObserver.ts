<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react',
interface UseIntersectionObserverProps {
<<<<<<< HEAD
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
=======
  threshold?: number,
  root?: Element | null,
  rootMargin?: string,
  freezeOnceVisible?: boolean
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
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
<<<<<<< HEAD
    setEntry(entry);
  };
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
=======
interface UseIntersectionObserverProps {_threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;}
export function useIntersectionObserver(_{_threshold = 0, _root = null, _rootMargin = '0%', _freezeOnceVisible = false, _}: UseIntersectionObserverProps = {}) {_const [entry, _setEntry] = useState<IntersectionObserverEntry>();
  const [node, _setNode] = useState<Element | null>(null);
  const _observer = useRef<IntersectionObserver | null>(null);
  const _frozen = entry?.isIntersecting && freezeOnceVisible;
  const _updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);};
  useEffect__(() => {_const _hasIOSupport = !!window.IntersectionObserver;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (!hasIOSupport || frozen || !node) return;
    const _observerParams = { threshold, _root, _rootMargin};
    const _currentObserver = new IntersectionObserver(
      updateEntry,
      observerParams
    );
    observer.current = currentObserver;
    currentObserver.observe(node);
    return () => {_currentObserver.disconnect();};
  }, [node, threshold, root, rootMargin, frozen]);
<<<<<<< HEAD
  const prevNode = useRef<Element | null>(null);
=======
    setEntry(entry)
  },
  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver,
    if (!hasIOSupport || frozen || !node) return,
    const observerParams = { threshold, root, rootMargin },
    const currentObserver = new IntersectionObserver(updateEntry, observerParams),
    observer.current = currentObserver,
    currentObserver.observe(node),
    return () => {
      currentObserver.disconnect()
    }
  }, [node, threshold, root, rootMargin, frozen]),
  const prevNode = useRef<Element | null>(null),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  useEffect(() => {
    if (prevNode.current) {
      observer.current?.unobserve(prevNode.current);
    }
    if (node) {
      observer.current?.observe(node);
    }
<<<<<<< HEAD
=======
  const _prevNode = useRef<Element | null>(null);
  useEffect__(() => {_if (prevNode.current) {
      observer.current?.unobserve(prevNode.current);}
    if (node) {_observer.current?.observe(node);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    prevNode.current = node;
  }, [node]);
  return [setNode, entry] as const;
}
=======
    prevNode.current = node
  }, [node]),
  return [setNode, entry] as const
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

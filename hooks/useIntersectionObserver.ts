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
  const _prevNode = useRef<Element | null>(null);
  useEffect__(() => {_if (prevNode.current) {
      observer.current?.unobserve(prevNode.current);}
    if (node) {_observer.current?.observe(node);}
    prevNode.current = node;
  }, [node]);
  return [setNode, entry] as const;
}

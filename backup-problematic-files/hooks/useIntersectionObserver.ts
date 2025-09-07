interface UseIntersectionObserverProps {
  // TODO: Implement
}
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  }, [node, threshold, root, rootMargin, frozen]);
  const prevNode = useRef<Element | null>(null);

  const [entry, setEntry] = useState<IntersectionObserverEntry>(),;

  const [node, setNode] = useState<Element | null>(null),;

  const observer = useRef<IntersectionObserver | null>(null),;


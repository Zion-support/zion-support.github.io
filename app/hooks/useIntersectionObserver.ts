  ref: React.RefObject<Element>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
  const ref = useRef<Element>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        setEntry(entry);

        if (isElementIntersecting && freezeOnceVisible) {
    observer.observe(node);
}

export default useIntersectionObserver;

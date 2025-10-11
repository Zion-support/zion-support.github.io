  isIntersecting: boolean,
}
export function useIntersectionObserver()
): UseIntersectionObserverReturn {
    const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }
const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
if (entry.isIntersecting && freezeOnceVisible) {
      {
    threshold,
        root,
        rootMargin,
observer.observe(element);
return () => {observer.disconnect()}}
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return {ref, isIntersecting, entry}}}
export default useIntersectionObserver;
observer.observe(element)
return () => {
    observer.disconnect()
  }
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])
return { ref, isIntersecting, entry }
}
export default useIntersectionObserver</HTMLElement>

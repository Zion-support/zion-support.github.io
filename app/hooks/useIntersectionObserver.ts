  isIntersecting: boolean,
const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const ref = useRef<HTMLElement>(null);
useEffect(() => {const element = ref.current;
    if (!element) return;
const observer = new IntersectionObserver(;)
  } = options
const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState</HTMLElement><IntersectionObserverEntry | undefined>()
  const ref = useRef</IntersectionObserverEntry><HTMLElement>(null)
useEffect(() => {
    const element = ref.current
    if (!element) return
const observer = new IntersectionObserver()
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
if (entry.isIntersecting && freezeOnceVisible) {
observer.observe(element);
return () => {observer.disconnect()}};
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return {ref, isIntersecting, entry}}};
export default useIntersectionObserver;
observer.observe(element)
return () => {
    observer.disconnect()
  };
    };
  }, [threshold, root, rootMargin, freezeOnceVisible])
return { ref, isIntersecting, entry };
};
export default useIntersectionObserver</HTMLElement>



interface LazyLoadProps {_height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;
  className?: string;}

export function LazyLoad(_{_height = "200px", _width = "100%", _children, _loadingComponent, _className}: LazyLoadProps) {_const [isVisible, _setIsVisible] = useState(false);
  const [isLoaded, _setIsLoaded] = useState(false);
  const _containerRef = useRef<HTMLDivElement>(null);

  useEffect__(() => {
    const _observer = new IntersectionObserver(_(entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();}
      },
      {_rootMargin: "200px", _// Start loading when element is within 200px of viewport
        threshold: 0.1}
    );

    if (containerRef.current) {_observer.observe(containerRef.current);}

    return () => {_if (containerRef.current) {
        observer.unobserve(containerRef.current);}
    };
  }, []);

  useEffect__(() => {_if (isVisible) {
      // Simulate loading delay (remove in production)
      const _timer = setTimeout__(() => {
        setIsLoaded(true);}, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const _defaultLoadingComponent = (
    <Skeleton
      style={_{ height, _width}}
      className="rounded-md bg-zion-blue-light/20"
    />
  );

  return (
    <div
      ref={_containerRef}
      className={_cn("transition-opacity duration-500", _isLoaded ? "opacity-100" : "opacity-0", _className
      )}
    >
      {_isVisible ? (
        <>
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {_isLoaded && children}
        </>
      ) : (
        loadingComponent || defaultLoadingComponent
      )}
    </div>
  );
}

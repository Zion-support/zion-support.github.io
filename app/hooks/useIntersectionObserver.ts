
) {
    const ref = useRef<HTMLElement>(null);

  useEffect(() => {

      ...options;
  
  });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };


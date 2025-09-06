
  useEffect(() => {;
    const observer = new IntersectionObserver(;
      (entries) => {;
        if (entries[0].isIntersecting) {;

        }
      },;
      {;
        rootMargin:"200px", // Start loading when element is within 200px of viewport;
        threshold:0.1}
    ),;
;
    if (containerRef.current) {;
      observer.observe(containerRef.current),;
    }
;
    return () => {;
      if (containerRef.current) {;
        observer.unobserve(containerRef.current),;
      }

}
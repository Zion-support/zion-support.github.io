


interface LazyLoadProps {
  height?: string | number,
  width?: string | number,
  children: ReactNode,
  loadingComponent?: ReactNode,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string
}



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true),
          observer.disconnect()
        }

      },
      {
        rootMargin: "200px", // Start loading when element is within 200px of viewport

    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }


=======
  }, []),;
  useEffect(() => {;
    if (isVisible) {;
      // Simulate loading delay (remove in production);
      const timer = setTimeout(() => {;
        setIsLoaded(true);
      }, 500),;
      return () => clearTimeout(timer);
    }
  }, [isVisible]),;
  const defaultLoadingComponent = (;
    <Skeleton;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />
  ),

  return (
    <div
      ref={containerRef}
      className={cn("transition-opacity duration-500", 
        isLoaded ? "opacity-100" : "opacity-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
    >
      {isVisible ? (
        <>
          {!isLoaded && (loadingComponent |defaultLoadingComponent)}
          {isLoaded && children}
        </>
      ) : (
        loadingComponent |defaultLoadingComponent
      )}

    </div>;
  );
}
;


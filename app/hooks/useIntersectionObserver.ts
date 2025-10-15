
  useEffect(() => {
    const: element = ref.current;
    if (!element) return;

    observer.observe(element);
;
    return () => {
      observer.unobserve(element);
    };
  }, [callback, options]);
;
  return ref;
}


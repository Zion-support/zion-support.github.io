'use client';
interface UseLazyLoadingOptions {
threshold?: number
  rootMargin?: string
  } = options;
const [isIntersecting, setIsIntersecting] = useState(false);
const [hasIntersected, setHasIntersected] = useState(false);
const
;useEffect(() => {;
const
;    if (!element) return;
const
;      ([entry]) => {;
const
;  }, [shouldLoad, src, imageSrc]);
const
;imageSrc,}}}}
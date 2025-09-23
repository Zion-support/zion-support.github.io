import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  freezeOnceVisible?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<Element>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const {
    threshold = 0,
    rootMargin = '0px',
    root = null,
    freezeOnceVisible = false
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const elementRef = useRef<Element>(null);
  const frozen = useRef(false);

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
    const isElementIntersecting = entry.isIntersecting;
    
    if (freezeOnceVisible && isElementIntersecting) {
      frozen.current = true;
    }
    
    if (!frozen.current) {
      setIsIntersecting(isElementIntersecting);
    }
  }, [freezeOnceVisible]);

  useEffect(() => {
    const element = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !element) return;

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      rootMargin,
      root
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, root, updateEntry]);

  return { ref: elementRef, isIntersecting, entry };
};

// Hook for triggering animations when element comes into view
export const useAnimateOnScroll = (
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn',
  options: UseIntersectionObserverOptions = {}
) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  });

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    switch (animation) {
      case 'fadeIn':
        return baseVariants;
      
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        };
      
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        };
      
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        };
      
      case 'scaleIn':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
        };
      
      case 'rotateIn':
        return {
          hidden: { opacity: 0, rotate: -180 },
          visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        };
      
      default:
        return baseVariants;
    }
  };

  return {
    ref,
    isIntersecting,
    animationVariants: getAnimationVariants()
  };
};

// Hook for lazy loading images
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  useEffect(() => {
    if (isIntersecting && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setImageSrc(placeholder || '');
        setIsLoaded(false);
      };
    }
  }, [isIntersecting, src, placeholder]);

  return { ref, imageSrc, isLoaded };
};

export default useIntersectionObserver;
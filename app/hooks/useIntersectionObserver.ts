import {useEffect} from 'react';
export function useIntersectionObserver();
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  // TODO: Implement
}
}const ref = useRef<HTMLElement>(null)
  useEffect(() => {
  // TODO: Implement
}
}const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(callback, {
  // TODO: Implement
}
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })
    observer.observe(element)
    return () => {
  // TODO: Implement
}
}observer.unobserve(element)
    }
  }, [callback, options])
  return ref
}
export default useIntersectionObserver;
import { useEffect, useRef } from 'react'
export function useIntersectionObserver()
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {}}
}const ref = useRef<HTMLElement>(null)
  useEffect(() => {}}
}const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(callback, {}}
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })
    observer.observe(element)
    return () => {}}
}observer.unobserve(element)
    }
  }, [callback, options])
  return ref
}
export default useIntersectionObserver
}
import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverOptions {
    threshold?: number | number[]
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
  }
}
interface UseIntersectionObserverReturn {
<<<<<<< HEAD
    ref: React.RefObject<HTMLElement></HTMLElement>
  isIntersecting: boolean,
  entry: IntersectionObserverEntry | undefined
  }
}
export function useIntersectionObserver()
=======
    ref: React.RefObject<HTMLElement>,
      isIntersecting: boolean,
  entry: IntersectionObserverEntry | undefined;
  }
}
export function useIntersectionObserver(;)
  options: UseIntersectionObserverOptions = {})
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
): UseIntersectionObserverReturn {
    const;
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }
  } = options;
const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const ref = useRef<HTMLElement>(null);
useEffect(() => {
    const element = ref.current;
    if (!element) return;
<<<<<<< HEAD
const observer = const observer = new IntersectionObserver()
      ([entry]) => {;
=======
const observer = new IntersectionObserver(;)
      ([entry]) => 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
if (entry.isIntersecting && freezeOnceVisible) 
          observer.disconnect()
  }
        },
      {
    threshold,
        root,
        rootMargin,
  }
      } )
observer.observe(element);
return () => {
    observer.disconnect()
  }
    }
  }, [threshold, root, rootMargin, freezeOnceVisible]);
return { ref, isIntersecting, entry }
}
export default useIntersectionObserver;

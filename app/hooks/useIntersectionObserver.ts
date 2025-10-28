import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverOptions {
  return null;
}
  return null;
}
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}
;

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {;}) => {
  return null;
}
  return null;
}
    return null;
}const [entry, setEntry] = useState<IntersectionObserverEntry | null />(null);
  const [node, setNode] = useState<Element | null />(null);
  const observer = useRef<IntersectionObserver | null />(null);

  useEffect(() => {
  return null;
}
  return null;
}
    if (!node) return;

    observer.current = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      options
    );

    observer.current.observe(node);

    return () => {
  return null;
}
  return null;
}
      if (observer.current) {
  return null;
}
  return null;
}
        observer.current.disconnect();
      };
  }, [node, options]);

  return [setNode, entry] as const;
}
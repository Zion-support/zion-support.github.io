import { useEffect, useCallback, useRef } from "react";
import { resourcePreloader, PreloadResource } from "../utils/resourcePreloader";

interface UseResourcePreloaderOptions {
  preloadOnMount?: boolean;
  preloadOnIntersection?: boolean;
  preloadOnInteraction?: "hover" | "click" | "focus";
  rootMargin?: string;
}

export const useResourcePreloader = (
  resources: PreloadResource[],
  options: UseResourcePreloaderOptions = {},
) => {
  const {
    preloadOnMount = false,
    preloadOnIntersection = false,
    preloadOnInteraction,
    rootMargin = "50px",
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const hasPreloaded = useRef(false);

  const preloadResources = useCallback(async () => {
    if (hasPreloaded.current) return;

    try {
      await resourcePreloader.preloadResources(resources);
      hasPreloaded.current = true;
    } catch (error) {
      console.warn("Failed to preload resources:", error);
    }
  }, [resources]);

  // Preload on mount
  useEffect(() => {
    if (preloadOnMount) {
      preloadResources();
    }
  }, [preloadOnMount, preloadResources]);

  // Preload on intersection
  useEffect(() => {
    if (preloadOnIntersection && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasPreloaded.current) {
              preloadResources();
              observer.disconnect();
            }
          });
        },
        { rootMargin },
      );

      observer.observe(elementRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [preloadOnIntersection, preloadResources, rootMargin]);

  // Preload on interaction
  useEffect(() => {
    if (preloadOnInteraction && elementRef.current) {
      const element = elementRef.current;

      const handleInteraction = () => {
        preloadResources();
      };

      element.addEventListener(preloadOnInteraction, handleInteraction, {
        once: true,
      });

      return () => {
        element.removeEventListener(preloadOnInteraction, handleInteraction);
      };
    }
  }, [preloadOnInteraction, preloadResources]);

  return {
    elementRef,
    preloadResources,
    isPreloaded: hasPreloaded.current,
  };
};

export default useResourcePreloader;

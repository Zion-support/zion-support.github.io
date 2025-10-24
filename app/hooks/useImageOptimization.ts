<<<<<<< HEAD
import { useState, useEffect } from 'react";

interface UseImageOptimizationOptions {
  src: string;
  placeholder?: string;"
  lazy?: boolean;"
  quality?: number;"
  format?: 'webp' | 'avif' | 'jpeg' | 'png";
}

export const useImageOptimization = ({
  src,
  placeholder,"
  lazy = true,"
  quality = 80,"
  format = 'webp"
}: UseImageOptimizationOptions) => {"
  const [imageSrc, setImageSrc] = useState(placeholder || '");
=======
import { useState, useEffect    } from 'react';
;
interface UseImageOptimizationOptions {;
  src: string;
  placeholder?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png'}
export const useImageOptimization = ({;
  src,;
  placeholder,;
  lazy = true,;
  quality = 80,;
  format = 'webp');
}: UseImageOptimizationOptions) => {;
  const [imageSrc, setImageSrc] = useState(placeholder || '');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  useEffect(() => {;
    if (!lazy || isInView) {;
      const img = new Image();
      img.onload = () => {;
        setImageSrc(src);
        setIsLoaded(true)}
      img.src = src}
  }, [src, lazy, isInView]);

  useEffect(() => {;
    if (!lazy) return;

    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry.isIntersecting) {;
          setIsInView(true);
          observer.disconnect();
        }
<<<<<<< HEAD
      },
      { threshold: 0.1 }"
    );"
"
=======
      },;
      { threshold: 0.1 }
    );

>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    const element = document.querySelector(`[data-src="${src}"]`);
    if (element) {;
      observer.observe(element)}
    return () => observer.disconnect();
  }, [src, lazy]);
<<<<<<< HEAD

  return {
    imageSrc,
    isLoaded,
    isInView,
    shouldLoad: !lazy || isInView"
  };"
};"
=======
;
  return {;
    imageSrc,;
    isLoaded,;
    isInView,;
    shouldLoad: !lazy || isInView;
  }"
}";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70

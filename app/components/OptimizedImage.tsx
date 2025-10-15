import React, { useState, useRef, useEffect } from "react";
import { OptimizedImageProps, HTMLImageElement, ImageIcon, Loader2 } from 'lucide-react';
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

const [hasError, setHasError] = useState(false);

const [isInView, setIsInView] = useState(priority);

const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (priority) return;

const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [priority]);

const handleLoad = () => {
  return;
};

const handleError = () => {
  return;
};
  // Generate optimized src for different formats
  const getOptimizedSrc = (originalSrc: string) => {
    // If it's already a data URL or external URL, return as is
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    // For local images, you could implement image optimization here
    // This is a placeholder for actual optimization logic
    return originalSrc;
  };

const optimizedSrc = getOptimizedSrc(src);
  if (hasError) {
    
  );
}
}
  src: string,
      alt: string,
      className?: string,
      width?: number,
      height?: number,
      const webpSrc  = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp'),""
      return webpSrc;
    return originalSrc
  // Intersection Observer for lazy loading;
useEffect(() => {};
    if (priority) return,
      ([entry]) => {}
        if (entry.isIntersecting) {}
          setIsInView(true),;
      observer.disconnect();

    threshold: 0.1 
  
  }),
      if (imgRef.current) {};
import React, { useState, useRef, useEffect } from 'react';'

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;


const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src, alt, className = '', width, height, priority = false, placeholder'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();

      { threshold: 0.1 }
    );

    if (imgRef.current && !priority) {
      observer.observe(imgRef.current);
    return () => observer.disconnect();
      </div>
    );
  if (!isInView && !priority) {};
    return ()
      <divref={imgRef}>
        className={`bg-gray-200 animate-pulse ${className}`};
        style={{ width, height }};
      />
    );
  return ()
    <imgref={imgRef}>"
    />""
  )"""
    },"""""
    {}"""""
"""
import React from 'react'"""""
import SEOHead from './components/SEOHead;'

const ComponentsPage: React.FC = () => {
  }, [priority]);

  if (hasError) {
    return null;
}
      <div;>"
className={`flex items-center justify-center bg-gray-200 ${className}`}""
        style={{ width, height }}"""
        data-testid="image-optimizer"""""
        <span className="text-gray-500">Failed to load image</span>"
      </div>
    );


  return null;"
}""
"""
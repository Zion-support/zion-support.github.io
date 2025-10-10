import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const LazyImage: React.FC<LazyImageProps>= ({
const LazyImage: React.FC<LazyImageProps> = ({}
const LazyImage: React.FC<LazyImageProps> = ({
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);</LazyImageProps>
  const [hasError, setHasError] = useState(false);</LazyImageProps>
  const imgRef = useRef<HTMLImageElement>(null);
  const [setNode, entry] = useIntersectionObserver({
  const [setNode, entry] = useIntersectionObserver({)
  const [setNode, entry] = useIntersectionObserver({)}
  const handleLoad = () => {}
  const handleError = () => {}
export default LazyImage;
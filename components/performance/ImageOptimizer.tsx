import: React { useState, useRef, useEffect } from 'react';';

interface ImageOptimizerProps {
  }
  "src": string;
  "alt": string;
=======
import React, { useState, useRef, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;

  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
<<<<<<< HEAD
  placeholder?: 'blur' | 'empty';'
=======
  placeholder?: 'blur' | 'empty';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void}


const ImageOptimizer: React.FC<ImageOptimizerProps> = ({


}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);


  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.()};


  const handleError = () => {
    setHasError(true);
    onError?.()};


  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {


            observer.unobserve(entry.target)}
        })},

        threshold: 0.1
      }
    );



    observer.observe(imgRef.current);


    return () => {

      if (imgRef.current) {
        observer.unobserve(imgRef.current)}
    }}, [priority]);


  if (hasError) {
    return (
      <div'
        className={`bg-gray-200 flex items-center justify-center ${className}`}

        role="img"

        aria-label={alt}
      >"

        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    )}


  return (
    <div


    >
      <img: src={src}
        alt={alt}

    </div>

          className="absolute inset-0 bg-gray-200 animate-pulse"

          aria-hidden="true"
        />
      )}

    </div>
  )};







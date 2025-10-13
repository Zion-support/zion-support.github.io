import React, { useEffect, useState } from 'react';

interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

export default function LoadingOptimizer({ 
  children, 
  fallback = <DefaultLoadingSpinner />, 
  delay = 200 
}: LoadingOptimizerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Show fallback after delay to prevent flash
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    // Simulate loading completion
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(fallbackTimer);
      clearTimeout(loadingTimer);
    };
  }, [delay]);

  if (isLoading && showFallback) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

function DefaultLoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading Zion Tech Group</h2>
        <p className="text-gray-300">Preparing your experience...</p>
      </div>
    </div>
  );
}

// Preload critical resources
export function PreloadResources() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/images/og-image.jpg',
      '/images/logo.png',
      '/images/hero-bg.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical scripts
    const scriptLink = document.createElement('link');
    scriptLink.rel = 'modulepreload';
    scriptLink.href = '/src/main.tsx';
    document.head.appendChild(scriptLink);
  }, []);

  return null;
}

// Lazy load images with intersection observer
export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/placeholder.jpg' 
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded">
          <img src={placeholder} alt="" className="w-full h-full object-cover opacity-0" />
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}
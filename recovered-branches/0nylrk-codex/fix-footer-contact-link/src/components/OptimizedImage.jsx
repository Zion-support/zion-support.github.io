<<<<<<< HEAD
import React from 'react';
=======
import { useState, useEffect, useRef } from 'react';

export const OptimizedImage = ({ src, alt, className = '', placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzkjY2E4Y2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==', fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVlMmUyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2RjMjYyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIGVycm9yPC90ZXh0Pjwvc3ZnPg==', priority = false, sizes = '100vw', onLoad, onError }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder);
    const imageRef = useRef(null);
    // Intersection Observer for lazy loading
    useEffect(() => {
        if (priority) {
            setIsInView(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        return () => observer.disconnect();
    }, [priority]);
    // Load image when in view
    useEffect(() => {
        if (isInView && !priority) {
            setCurrentSrc(src);
        }
    }, [isInView, src, priority]);
    const handleLoad = () => {
        setIsLoaded(true);
        setHasError(false);
        onLoad?.();
    };
    const handleError = () => {
        setHasError(true);
        setCurrentSrc(fallback);
        onError?.();
    };
    return (<div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {/* Loading Placeholder */}
        {!isLoaded && !hasError && (<motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-gray-500">Loading...</p>
            </div>
          </motion.div>)}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const OptimizedImage: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">OptimizedImage</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default OptimizedImage;
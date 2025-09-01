import { useState, useEffect, useRef } from 'react';

export default function Page() {
,
      {

        rootMargin: '50px',
        threshold: 0.1}
    );
    if(imageRef.current) {

      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, [priority]);
  // Load image when in view
  useEffect(() => {
    if(isInView && !priority) {

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
  return ()
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {/* Loading Placeholder */}
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
          >"
            <div className="text-center">"
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>"
              <p className="text-xs text-gray-500">Loading...</p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}"
            className="absolute inset-0 bg-red-100 dark:bg-red-900/20 flex items-center justify-center"
          >"
            <div className="text-center text-red-600 dark:text-red-400">"
              <div className="text-2xl mb-2">⚠️</div>"
              <p className="text-sm">Image failed to load</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Image */}
      <motion.img
        ref={imageRef}
        src={currentSrc}
        alt={alt}
        sizes={sizes}'`
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}"
        decoding="async"
      />

      {/* Progressive Loading Effect */}
      {isLoaded && !hasError && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}"
          className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
        />
      )}
    </div>
  );
};
'"`
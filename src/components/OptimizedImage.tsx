<<<<<<< HEAD

  ;
      setHasError(false);
      setIsLoading(true)} else {;
      setHasError(true);
      setIsLoading(false);
      onError?.(new Error(`Failed to load "image": "an y${src"}`))}
  };
;
  // Cleanup on unmount;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
  return () => {;
    // Cleanup function;
  "};
}, []);, []);
    return () => {;
      if(observerRef.current) {;
        observerRef.current.disconnect()}
    }}, []) ;
;
  // Generate optimized src with quality parameter;
  const _getOptimizedSrc = ("props": "any) => {;
    if(src.startsWith ('"data":') || src.startsWith('"blob":') ) {;
      return src;
    "}
    // Add quality parameter for external images if possible;
    try {;
      ;
      if(url.searchParams.has('quality')) {;
        return src}
      url.searchParams.set('quality', quality.toString());
      return url.toString()} catch {;
      return src}
  };
;
  // Base classes;
  ;
  // Loading skeleton;
  if(!isIntersecting) {;
    return (<div;
        className={`${baseClasses} bg-gray - 200 "dark": "b g-gray - 700 animate - pulse`"}        style={{ width, height }}
      >;
        <div className="w-full h-full flex items-center justify-center">";
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin"  />;
        </div>;
      </div>) }
  // Error state;
  if(hasError) {;
    return (<div;
        className={`${baseClasses} bg-gray - 100 "dark": "b g-gray - 800 flex items - center justify - center`"}
        style={{ width, height }}
      >;
        <div className="text-center">;
          <AlertCircle className="w-12 h-12 text-gray - 400 mx - auto mb-2"  />;
          <p className="text-sm text-gray - 500 "dark": "tex t-gray -400">Image failed to load</p>;
        </div>;
      </div>) ;
  "}}) => {;
    </div>;  // Base classes
  // Loading skeleton
  if(!isIntersecting) {
    return (
        <div
        className={`${baseClasses} bg-gray - 200 dark: b g-gray - 700 animate - pulse`}        style={{ width, height }}
      >
        <div className="w-full h-full flex items-center justify-center">"
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin"  />
        </div>
      </div>) }
  // Error state
  if(hasError) {
    return (
        <div
        className={`${baseClasses} bg-gray - 100 dark: b g-gray - 800 flex items - center justify - center`}
        style={{ width, height }}
      >
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray - 400 mx - auto mb-2"  />
          <p className="text-sm text-gray - 500 dark: tex t-gray -400">Image failed to load</p>
        </div>
      </div>
    );
  }}) => {
    </div>
  )}
export default OptimizedImage;";
;";
</any>;
</any>;
</any>

=======
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            return}
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect()}
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        if (imageRef.current) {
            observer.observe(imageRef.current)}
        return () => observer.disconnect()}, [priority]);
    // Load image when in view
    useEffect(() => {
        if (isInView && !priority) {
            setCurrentSrc(src)}
    }, [isInView, src, priority]);
    const handleLoad = () => {
        setIsLoaded(true);
        setHasError(false);
        onLoad?.()};
    const handleError = () => {
        setHasError(true);
        setCurrentSrc(fallback);
        onError?.()};
    return (<div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {/* Loading Placeholder */}
        {!isLoaded && !hasError && (<motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-gray-500">Loading...</p>
            </div>
          </motion.div>)}

        {/* Error State */}
        {hasError && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <div className="text-center text-red-600 dark:text-red-400">
              <div className="text-2xl mb-2">⚠️</div>
              <p className="text-sm">Image failed to load</p>
            </div>
          </motion.div>)}
      </AnimatePresence>

      {/* Main Image */}
      <motion.img ref={imageRef} src={currentSrc} alt={alt} sizes={sizes} className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={handleLoad} onError={handleError} loading={priority ? 'eager' : 'lazy'} decoding="async"/>

      {/* Progressive Loading Effect */}
      {isLoaded && !hasError && (<motion.div initial = {
  { opacity: 0,
  scale: 1.1 

}} animate = {
  { opacity: 1,
  scale: 1 

}} transition={{ duration: 0.3 }} className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"/>)}
    </div>)};
>>>>>>> origin/clean-error-fixing-automation

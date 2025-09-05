import React, {_useState, _useRef, _useEffect} from 'react';
import Image from 'next/image';

interface OptimizedImageProps {_src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: 'blur' | 'shimmer' | 'color' | 'none' | 'empty';
  placeholderColor?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  lazy?: boolean;
  retryCount?: number;
  showLoadingProgress?: boolean;
  fill?: boolean;
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
  objectPosition?: string;}

interface ImageMetrics {_loadTime: number;
  fileSize: number;
  format: string;
  wasOptimized: boolean;}

export const OptimizedImage: React.FC<OptimizedImageProps> = (_{_src, _alt, _width, _height, _className, _placeholder = 'shimmer', _placeholderColor = '#f3f4f6', _priority = false, _quality = 75, _sizes, _onLoad, _onError, _fallbackSrc, _aspectRatio, _objectFit = 'cover', _lazy = true, _retryCount = 3, _showLoadingProgress = false, _fill = false, _blurDataURL, _loading = 'lazy', _style, _objectPosition = 'center', _...props}) => {_const [isLoading, _setIsLoading] = useState(true);
  const [hasError, _setHasError] = useState(false);
  const [isInView, _setIsInView] = useState(!lazy || priority);
  const [currentSrc, _setCurrentSrc] = useState(src);
  const [retries, _setRetries] = useState(0);
  const [loadProgress, _setLoadProgress] = useState(0);
  const _imgRef = useRef<HTMLImageElement>(null);
  const _observerRef = useRef<IntersectionObserver>();
  const [metrics, _setMetrics] = useState<ImageMetrics | null>(null);
  const _loadStartTime = useRef<number>(0);

  // Intersection Observer for lazy loading
  useEffect__(() => {
    if (!lazy || priority || isInView) return;

    observerRef.current = new IntersectionObserver(_(entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();}
      },
      {_rootMargin: '50px', _// Start loading 50px before image comes into view
        threshold: 0.1}
    );

    if (imgRef.current) {_observerRef.current.observe(imgRef.current);}

    return () => {_observerRef.current?.disconnect();};
  }, [lazy, priority, isInView]);

  // Start load time tracking
  useEffect__(() => {_loadStartTime.current = performance.now();}, [src]);

  // Monitor image performance
  useEffect__(() => {_if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const _observer = new PerformanceObserver(_(list) => {
        const _entries = list.getEntries();
        entries.forEach(_(entry) => {
          if (entry.name === src && entry.entryType === 'resource') {
            const _resourceEntry = entry as PerformanceResourceTiming;
            const _fileSize = resourceEntry.transferSize || resourceEntry.encodedBodySize || 0;
            const _loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            
            setMetrics({
              loadTime, _fileSize, _format: src.includes('.webp') ? 'webp' : src.includes('.avif') ? 'avif' : 'other', _wasOptimized: src.includes('/_next/image')});

            // Log slow or large images
            if (loadTime > 2000) {_logWarn('Slow image loading:', _{
                src, _loadTime: `${loadTime.toFixed(2)}ms`,
                size: `${_(fileSize / 1024).toFixed(2)}KB`
              });
            }

            if (fileSize > 500 * 1024) {_logWarn('Large image detected:', _{
                src, _size: `${(fileSize / 1024).toFixed(2)}KB`,
                loadTime: `${_loadTime.toFixed(2)}ms`
              });
            }
          }
        });
      });

      observer.observe({_entryTypes: ['resource']});

      return () => observer.disconnect();
    }
    
    return () => {}; // Return empty cleanup function for the else case
  }, [src]);

  // Generate optimized URLs
  const _optimizedSrc = isInView ? imageOptimization.optimizeUrl(_currentSrc, _width, _quality) : '';
  const _srcSet = isInView && sizes ? imageOptimization.generateSrcSet(currentSrc) : '';

  // Handle image load
  const _handleLoad = () => {_setIsLoading(false);
    setHasError(false);
    setLoadProgress(100);
    onLoad?.();};

  // Handle image error with retry logic
  const _handleError = () => {_if (retries < retryCount) {
      setRetries(prev => prev + 1);
      // Retry with a slight delay
      setTimeout__(() => {
        setCurrentSrc(src + `?retry=${retries + 1}`);
      }, 1000 * (retries + 1));
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {_setCurrentSrc(fallbackSrc);
      setRetries(0);} else {_setIsLoading(false);
      setHasError(true);
      onError?.();}
  };

  // Simulate loading progress for demo purposes
  useEffect__(() => {_if (!isLoading || !showLoadingProgress) return;

    const _interval = setInterval__(() => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;}
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, showLoadingProgress]);

  // Generate placeholder based on type
  const _generatePlaceholder = () => {_if (placeholder === 'none') return null;

    const _placeholderClassName = cn(
      'absolute inset-0 flex items-center justify-center', _placeholder === 'shimmer' && 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse', _placeholder === 'blur' && 'backdrop-blur-sm bg-gray-200/50', _placeholder === 'color' && 'bg-gray-200'
    );

    if (placeholder === 'color') {
      return (
        <div 
          className={placeholderClassName}
          style={_{ backgroundColor: placeholderColor}}
        />
      );
    }

    return (
      <div className={_placeholderClassName}>
        <ImageIcon className="h-8 w-8 text-gray-400" />
      </div>
    );
  };

  // Container styles
  const containerStyle: React.CSSProperties = {_aspectRatio: aspectRatio || (width && height ? `${width}/${_height}` : undefined),
    width: width ? `${_width}px` : undefined,
    height: height ? `${_height}px` : undefined};

  return (
    <div 
      ref={_imgRef}
      className={_cn('relative overflow-hidden', _className)}
      style={_containerStyle}
    >
      <AnimatePresence>
        {_/* Placeholder */}
        {_(isLoading || !isInView) && !hasError && (
          <motion.div
            initial={{ opacity: 1}}
            exit={_{ opacity: 0}}
            transition={_{ duration: 0.3}}
            className="absolute inset-0"
          >
            {_generatePlaceholder()}
            
            {_/* Loading progress */}
            {_showLoadingProgress && isLoading && loadProgress > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0}}
                  animate={_{ width: `${loadProgress}%` }}
                  transition={_{ duration: 0.3}}
                />
              </div>
            )}
          </motion.div>
        )}

        {_/* Error state */}
        {_hasError && (
          <motion.div
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400"
          >
            <AlertTriangle className="h-8 w-8 mb-2" />
            <span className="text-sm">Failed to load image</span>
            {_retries > 0 && (
              <span className="text-xs mt-1">Retried {retries} times</span>
            )}
          </motion.div>
        )}

        {_/* Actual image */}
        {_isInView && !hasError && (
          <motion.img
            src={optimizedSrc}
            srcSet={_srcSet}
            alt={_alt}
            loading={_priority ? 'eager' : 'lazy'}
            onLoad={_handleLoad}
            onError={_handleError}
            className={_cn(
              'w-full h-full transition-opacity duration-300', _`object-${objectFit}`,
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
            initial={_{ opacity: 0}}
            animate={_{ opacity: isLoading ? 0 : 1}}
            transition={_{ duration: 0.3}}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Gallery component with optimized loading
interface ImageGalleryProps {_images: Array<{
    src: string;
    alt: string;
    caption?: string;}>;
  columns?: number;
  aspectRatio?: string;
  className?: string;
  onImageClick?: (_index: number) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = (_{_images, _columns = 3, _aspectRatio = '16/9', _className, _onImageClick}) => {_const [loadedCount, _setLoadedCount] = useState(0);

  const _handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);};

  return (
    <div className={_cn('space-y-4', _className)}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <span className="text-sm text-muted-foreground">
          {_loadedCount}/{_images.length} loaded
        </span>
      </div>
      
      <div 
        className={_`grid gap-4`}
        style={_{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)` 
        }}
      >
        {_images.map(_(image, _index) => (_<motion.div
            key={index}
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ delay: index * 0.1}}
            className="group cursor-pointer"
            onClick={_() => onImageClick?.(index)}
          >
            <div className="relative">
              <OptimizedImage
                src={_image.src}
                alt={_image.alt}
                aspectRatio={_aspectRatio}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                onLoad={_handleImageLoad}
                priority={_index < 3} // Prioritize first 3 images
              />
              
              {_image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Avatar component with optimized loading
interface OptimizedAvatarProps {_src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;}

export const OptimizedAvatar: React.FC<OptimizedAvatarProps> = (_{_src, _alt, _size = 'md', _fallback, _className}) => {_const _sizeClasses = {
    sm: 'h-8 w-8', _md: 'h-10 w-10', _lg: 'h-12 w-12', _xl: 'h-16 w-16'};

  const _initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className={_cn('relative rounded-full overflow-hidden', _sizeClasses[size], _className)}>
      {_src ? (
        <OptimizedImage
          src={src}
          alt={_alt}
          aspectRatio="1/1"
          objectFit="cover"
          fallbackSrc={_`https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder="color"
          placeholderColor="#f3f4f6"
          priority={_true}
          className="rounded-full"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
          {_initials}
        </div>
      )}
    </div>
  );
}; 
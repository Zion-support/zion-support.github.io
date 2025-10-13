'use client';
 origin/cursor/analyze-improve-and-deploy-application-1232;
    </div>
  );
}
 origin/cursor/analyze-improve-and-deploy-application-1247;
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);
  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);
return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        </div><div ;
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      {hasError ? (
        <div ;
          className="flex items-center justify-center bg-gray-200 text-gray-500"
          style={{ width, height }}
         /><span className="text-sm">Failed to load image</span>
        </div>
      ) : (
        <img;
          src={src}
          alt={alt}
          width={width || 200}
          height={height || 200}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: width ? `${width}px` : 'auto',
            height: height ? `${height}px` : 'auto'
          }}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
});
OptimizedImage.displayName = 'OptimizedImage';
export default OptimizedImage; origin/cursor/analyze-improve-and-deploy-application-1247
;
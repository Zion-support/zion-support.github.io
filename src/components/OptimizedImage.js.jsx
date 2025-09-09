import { useState, useEffect, useRef } from 'react';
;
export default function Page() {};
  return null;
}
        threshold: 0.1}
    );
    if(imageRef.current) {};
}
    return () => observer.disconnect();,
}, [priority]);
  // Load image when in view;
  useEffect(() => {};
}, []);
    if(isInView && !priority) {};
}
  }, [isInView, src, priority]);
  const handleLoad = () => {};
};
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();,
};
  const handleError = () => {};
};
    setHasError(true);
    setCurrentSrc(fallback);
    onError?.()}
  return ();
    <div className={`relative overflow-hidden ${className}`}>;
      <AnimatePresence>;
        {/* Loading Placeholder */}
        {};
        )}

        {/* Error State */}
        {hasError && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <div className="text-center text-red-600 dark:text-red-400">
              <div className="text-2xl mb-2">⚠️</div>
              <p className="text-sm">Image failed to load</p>
            </div>
          </motion.div>)}
      </AnimatePresence>

      {/* Main Image */}
      <motion.img
        ref={imageRef}
        src={currentSrc}
        alt={alt}
        sizes={sizes}
        className={`w - full h - full object - cover transition - opacity duration - 300 ${isLoaded ? 'opacity - 100' : 'opacity - 0'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
            />

      {/* Progressive Loading Effect */}
      {};
      )}
    </div>;
  )}
'"`
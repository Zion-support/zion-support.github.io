<<<<<<< HEAD
onError?: () => void }
import React, { useState, useRef, useEffect } from 'react';';
import { Helmet } from 'react-helmet-async';
interface OptimizedImageProps { src: string;

  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number';
  loading?: 'lazy' | "eager"
  onLoad?: () => void;

  onError?: () => void; }
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src,

  alt,
  width,
  height,''
  className = '','
  priority = false,''
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',''
  sizes = '100vw','
  quality = 85,''
  loading = 'lazy','
  onLoad,

  onError })
}) => {;
const [isLoaded, setIsLoaded] = useState(false);
const [isError, setIsError] = useState(false);
const [isInView, setIsInView] = useState(priority);
const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (priority) return;
const observer = new IntersectionObserver()
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
          setIsInView(true)
          observer.disconnect()}
      },

      { threshold: 0.1,'
        rootMargin: "50px" }
      }
    )
    if (imgRef.current) { observer.observe(imgRef.current) }
      observer.observe(imgRef.current);}
    }
    return () => observer.disconnect();
  }, [priority]);
    return () => observer.disconnect()}, [priority]);
const handleLoad = () => { setIsLoaded(true);
    onLoad?.(); }
  const handleError = () => { setIsError(true);
    onError?.(); }
    setIsLoaded(true)
    onLoad?.()}
  const handleError = () => { setIsError(true)
    onError?.() }
    onLoad?.();}
  };
  const handleError = () => { setIsError(true);
    onError?.(); }
  };

  // Generate WebP src if supported;
const getOptimizedSrc = (originalSrc: string) => {''
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {'
      return originalSrc}
      return originalSrc;}

    }
    // For external images, return as-is'
    if (originalSrc.startsWith('http')) { return originalSrc }

      return originalSrc;}
    // For local images, you could implement WebP conversion here
    return originalSrc;
  }
  const optimizedSrc = getOptimizedSrc(src)
    return originalSrc}
  const optimizedSrc = getOptimizedSrc(src)
  return (
    <>

      { priority && (
        <Helmet></Helmet> }
          <link rel="preload" as="image" href={optimizedSrc} /></Helmet>)")
      <div

        ref={ imgRef }
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }}

      ></div>
        { /* Placeholder */ }
        { !isLoaded && !isError && (
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center" }
            style={{ width, height }}

          ></div>
            <div className="text-gray-400 text-sm"></div>Loading...</div>
          </div>
)
        )}
        { /* Error state */ }
        { isError && (
          <div
            className="absolute inset-0 bg-gray-100 flex items-center justify-center" }
            style={{ width, height }}

          ></div>
            <div className="text-gray-400 text-sm text-center"><div className="text-2xl mb-2"></div>📷</div>
              <div></div>Image not available</div>
            </div>
          </div>
)
        )}
        { /* Actual image */ }
        { isInView && !isError && (
          <img }
            src={ optimizedSrc }
            alt={ alt }
            width={ width }
            height={ height }
            loading={ loading }
            sizes={ sizes }
            onLoad={ handleLoad }
            onError={ handleError }
            className={`transition-opacity duration-300 ${'
              isLoaded ? 'opacity-100' : 'opacity-0'}
            }`}
            style={{'
              width: "100%",'"
              height: "100%",'"
              objectFit: "cover" }
            }}

          />)
        )
      </div>
    </>
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const OptimizedImagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>OptimizedImage - Zion Tech Group</title>
        <meta name="description" content="Professional OptimizedImage services by Zion Tech Group." />
        <meta name="keywords" content="OptimizedImage, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            OptimizedImage
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional OptimizedImage services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedImagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1

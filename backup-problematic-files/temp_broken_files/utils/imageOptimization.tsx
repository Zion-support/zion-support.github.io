<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
;
interface OptimizedImageProps {;
  src: string;,;
  alt: string;,;
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react',;
import Image from 'next/image',;
import { cn } from '@/lib/utils',;
;
interface OptimizedImageProps {;
  src:string,;
  alt:string,;
=======
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
;
interface OptimizedImageProps {;
  src: string;,;
  alt: string;,;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  width?:number,;
  height?:number,;
  className?:string,;
  priority?:boolean,;
  placeholder?:'blur' | 'empty',;
  blurDataURL?:string,;
  quality?:number,;
  sizes?:string,;
  onLoad?:() => void,;
  onError?:() => void,;
  fallbackSrc?:string,;
  lazy?:boolean;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function OptimizedImage({;
  src,;
  alt,;
  width,;
  height,;
  className,;
  priority = false,;
  placeholder = 'empty',;
  blurDataURL,;
  quality = 75,;
  sizes,;
  onLoad,;
  onError,;
  fallbackSrc,;
  lazy = true,;
<<<<<<< HEAD
  ...props;)
=======
<<<<<<< HEAD
  ...props;
=======
  ...props;)
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} OptimizedImageProps) {;
  const [isLoading, setIsLoading] = useState(true),;
  const [hasError, setHasError] = useState(false),;
  const [isInView, setIsInView] = useState(!lazy || priority),;
  const imgRef = useRef<HTMLDivElement>(null),;
<<<<<<< HEAD

      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">;"
</svg>
        <defs>;
</defs>"
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;"
</linearGradient>"
            <stop offset="0%" style="stop-color: #f3f4f6;,stop-opacity:1" />;"
</stop>"
            <stop offset="100%" style="stop-color: #e5e7eb;,stop-opacity:1" />;"
</stop>
          </linearGradient>;
        </defs>;"
        <rect width="100%" height="100%" fill="url(#grad)" />;"
</rect>`;
      </svg>`;
    <div;
      ref={imgRef}"
=======
<<<<<<< HEAD
;
  // Intersection Observer for lazy loading;
  useEffect(() => {;
    if (!lazy || priority || isInView) return,;
;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true),;
          observer.disconnect(),;        }
      },;
      {;
        rootMargin:'50px', // Start loading 50px before the image enters viewport;
      }
    ),;
;
    if (imgRef.current) {;
      observer.observe(imgRef.current),;
    }
;
    return () => observer.disconnect(),;
  }, [lazy, priority, isInView]),;
;
  // Generate WebP-compatible src;
  const getOptimizedSrc = (originalSrc:string) => {;
    // If it's already optimized or external, return as-is;
    if (originalSrc.startsWith('http') || originalSrc.includes('/_next/image')) {;
      return originalSrc,;
    }
    ;
    // For internal images, Next.js will handle optimization;
    return originalSrc,;
  },;
;
  const handleLoad = () => {;
    setIsLoading(false),;
    onLoad?.(),;
  },;
;
  const handleError = () => {;
    setHasError(true),;
    setIsLoading(false),;
    onError?.(),;
  },;
;
  // Generate blur placeholder;
  const generateBlurDataURL = () => {;
    if (blurDataURL) return blurDataURL,;
    ;
    // Generate a simple gray blur placeholder;
    return `data:image/svg+xml,base64,${Buffer.from(;
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">;
        <defs>;
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />;
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />;
          </linearGradient>;
        </defs>;
        <rect width="100%" height="100%" fill="url(#grad)" />;
      </svg>`;
    ).toString('base64')}`,;
  },;
;
  return (;
    <div;
      ref={imgRef}
=======

      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">;"
</svg>
        <defs>;
</defs>"
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;"
</linearGradient>"
            <stop offset="0%" style="stop-color: #f3f4f6;,stop-opacity:1" />;"
</stop>"
            <stop offset="100%" style="stop-color: #e5e7eb;,stop-opacity:1" />;"
</stop>
          </linearGradient>;
        </defs>;"
        <rect width="100%" height="100%" fill="url(#grad)" />;"
</rect>`;
      </svg>`;
    <div;
      ref={imgRef}"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >;
</div>
        <Image;
          src={getOptimizedSrc(src)}          alt={alt}
          width={width}
          height={height}
          priority={priority}
          blurDataURL={placeholder === 'blur' ? generateBlurDataURL() :undefined}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(;
            'transition-opacity duration-300',;
<<<<<<< HEAD
            isLoading ? 'opacity-0' :'opacity-100';')
          )}
          {...props}
        />;      )}

        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />;      )}"
</div>"
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">;"
            <img;
              src={fallbackSrc}
              alt={alt}"
              className="max-w-full max-h-full object-contain";"
            />;
</img>"
            <div className="text-gray-400 text-center">;"
              <svg;"
                className="w-8 h-8 mx-auto mb-2";""
                fill="currentColor";""
                viewBox="0 0 20 20";"
                <path;"
                  fillRule="evenodd";""
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z";""
                  clipRule="evenodd";"
</path>
              </svg>;"
              <span className="text-xs">Image not available</span>;"
            </div>;          )}
        </div>;"
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />;"
    </div>;
export function withImageOptimization<P extends { src: string;, alt: string ;}>(;

  Component:React.ComponentType<P>;

      <OptimizedImage;
        src={src}
=======
<<<<<<< HEAD
            isLoading ? 'opacity-0' :'opacity-100';
          )}
          {...props}
        />;      )}
;
      {/* Loading placeholder */}
      {(isLoading && isInView) && (;
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />;      )}
;
      {/* Error fallback */}
      {hasError && (;
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">;
          {fallbackSrc ? (;
            <img;
              src={fallbackSrc}
              alt={alt}
              className="max-w-full max-h-full object-contain";
              onLoad={handleLoad}
            />;
          ) :(;
            <div className="text-gray-400 text-center">;
              <svg;
                className="w-8 h-8 mx-auto mb-2";
                fill="currentColor";
                viewBox="0 0 20 20";
              >;
                <path;
                  fillRule="evenodd";
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z";
                  clipRule="evenodd";
                />;
              </svg>;
              <span className="text-xs">Image not available</span>;
            </div>;          )}
        </div>;
      )}
;
      {/* Lazy loading placeholder */}
      {!isInView && lazy && !priority && (;
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />;
      )}
    </div>;
  ),;
}
;
// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<P extends { src:string, alt:string }>(;
  Component:React.ComponentType<P>;
) {;
  return function OptimizedComponent(props:P) {;
    const { src, alt, ...otherProps } = props,;
    ;
    return (;
      <OptimizedImage;
        src={src}
        alt={alt}
        {...(otherProps as any)}
      />;
    ),;
  },;
}
;
// Utility to preload critical images;
export function preloadImage(src:string):Promise<void> {;
=======
            isLoading ? 'opacity-0' :'opacity-100';')
          )}
          {...props}
        />;      )}

        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />;      )}"
</div>"
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">;"
            <img;
              src={fallbackSrc}
              alt={alt}"
              className="max-w-full max-h-full object-contain";"
            />;
</img>"
            <div className="text-gray-400 text-center">;"
              <svg;"
                className="w-8 h-8 mx-auto mb-2";""
                fill="currentColor";""
                viewBox="0 0 20 20";"
                <path;"
                  fillRule="evenodd";""
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z";""
                  clipRule="evenodd";"
</path>
              </svg>;"
              <span className="text-xs">Image not available</span>;"
            </div>;          )}
        </div>;"
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />;"
    </div>;
export function withImageOptimization<P extends { src: string;, alt: string ;}>(;

  Component:React.ComponentType<P>;

      <OptimizedImage;
        src={src}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        alt={alt})
        {...(otherProps as any)}

export function preloadImage(src:string):Promise<void> {;
</void>
export function getImageDimensions(src: string):Promise<{ width:number;, height: number ;}> {;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;
<<<<<<< HEAD
    img.onload = () => resolve(),;
    img.onerror = reject,;
    img.src = src,;
  }),;
}
;
// Utility to get image dimensions;
export function getImageDimensions(src:string):Promise<{ width:number, height:number }> {;
  return new Promise((resolve, reject) => {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const img = new window.Image(),;
    img.onload = () => resolve({ width:img.naturalWidth, height:img.naturalHeight }),;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
    img.onload = () => resolve({ "width":img.naturalWidth, "height":img.naturalHeight }),;
=======
    img.onload = () => resolve({ width: img.naturalWidth;, height: img.naturalHeight ;}),;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    img.onerror = reject,;
    img.src = src,;
  }),;
}  const observer = new IntersectionObserver ( ([entry]) => {;
  if (entry && entry.isIntersecting) {;
  return () => observer.disconnect () ;
}, [lazy, priority, isInView]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {;
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') || originalSrc.includes ('/ next/image') ) {;
  //For internal images, Next.js will handle optimization return originalSrc;
};';
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#f3f4f6, stop-opacity:1" /> <stop offset="100%" style="stop-color:#e5e7eb, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64') ;
}` ;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {;"
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') || originalSrc.includes ('/ next/image') ) {;
  //For internal images, Next.js will handle optimization return originalSrc
};';
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color: #f3f4f6;, stop-opacity: 1" /> <stop offset="100%" style="stop-color:#e5e7eb;, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64') ;
}` 
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
  //For internal images, Next.js will handle optimization return originalSrc;
};';`;
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color: #f3f4f6;, stop-opacity: 1" /> <stop offset="100%" style="stop-color:#e5e7eb;, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64') ;
</defs>
pr-12325
return (<div ref= {;
  imgRef ;
<<<<<<< HEAD
}className= {';')
=======
<<<<<<< HEAD
}className= {';
=======
}className= {';')
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  cn ('relative overflow-hidden', className) ;
}style= {;
  {;
  width, height ;
}> {;
<<<<<<< HEAD
  isInView && !hasError && (<Image src= {;)
=======
<<<<<<< HEAD
  isInView && !hasError && (<Image src= {;
=======
  isInView && !hasError && (<Image src= {;)
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  getOptimizedSrc (src) ;
}alt= {;
  alt ;
}width= {;
  width ;
}height= {;
  height ;
}priority= {;
  priority ;
}blurDataURL= {';
  placeholder === 'blur'? generateBlurDataURL () : undefined ;
}onLoad= {;
  handleLoad ;
}onError= {;
  handleError ;
}className= {';
  cn ('transition-opacity duration-300', isLoading ? 'opacity-0': 'opacity-100') ;
}{;
<<<<<<< HEAD
  ...props ;"}/>) ";"}/>) : (<div className=" text-gray-400 text-center"> <svg className=" w-8 h-8 mx-auto mb-2"fill=" currentColor"viewBox=" 0 0 20 20"> <path fillRule=" evenodd"d=" M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"clipRule=" evenodd"/> </svg> <span className=" text-xs" >Image not available</span> </div>) ;"

}</div>) ;
}//Higher-order component for easy migration from regular img tags return (<OptimizedImage src= {;
  src ;
}{;)
  ... (otherProps as any) ;
}/>) ;
"`;
=======
<<<<<<< HEAD
  ...props ;"}/>) ";"}/>) : (<div className=" text-gray-400 text-center"> <svg className=" w-8 h-8 mx-auto mb-2"fill=" currentColor"viewBox=" 0 0 20 20"> <path fillRule=" evenodd"d=" M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"clipRule=" evenodd"/> </svg> <span className=" text-xs" >Image not available</span> </div>) ;
}</div>) ;
}) ;
}</div>) ;
}//Higher-order component for easy migration from regular img tags return (<OptimizedImage src= {;
  src ;
}alt= {;
  alt ;
}{;
  ... (otherProps as any) ;
}/>) ;
}
}// Utility to preload critical images ;"}'"
=======
  ...props ;"}/>) ";"}/>) : (<div className=" text-gray-400 text-center"> <svg className=" w-8 h-8 mx-auto mb-2"fill=" currentColor"viewBox=" 0 0 20 20"> <path fillRule=" evenodd"d=" M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"clipRule=" evenodd"/> </svg> <span className=" text-xs" >Image not available</span> </div>) ;"

}</div>) ;
}//Higher-order component for easy migration from regular img tags return (<OptimizedImage src= {;
  src ;
}{;)
  ... (otherProps as any) ;
}/>) ;
<<<<<<< HEAD
"`;
=======
}
<<<<<<< HEAD
:temp_broken_files/utils/imageOptimization.tsx
}// Utility to preload critical images ;"}'"
}// Utility to preload critical images ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/utils/imageOptimization.tsx
=======

}// Utility to preload critical images ;
}'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

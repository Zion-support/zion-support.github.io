<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
;
interface OptimizedImageProps {;
  src: string;,;
  alt: string;,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  ...props;)
>>>>>>> origin/cursor/delete-old-data-records-6bba
} OptimizedImageProps) {;
  const [isLoading, setIsLoading] = useState(true),;
  const [hasError, setHasError] = useState(false),;
  const [isInView, setIsInView] = useState(!lazy || priority),;
  const imgRef = useRef<HTMLDivElement>(null),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
        alt={alt})
        {...(otherProps as any)}

export function preloadImage(src:string):Promise<void> {;
</void>
export function getImageDimensions(src: string):Promise<{ width:number;, height: number ;}> {;
<<<<<<< HEAD

  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;

    }
    img.onload = () => resolve({ "width":img.naturalWidth, "height":img.naturalHeight }),;

=======
  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;
    img.onload = () => resolve(),;
    img.onerror = reject,;
    img.src = src,;
  }),;
}
;
// Utility to get image dimensions;
export function getImageDimensions(src:string):Promise<{ width:number, height:number }> {;
  return new Promise((resolve, reject) => {;

    img.onload = () => resolve({ width: img.naturalWidth;, height: img.naturalHeight ;}),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    img.onerror = reject,;
    img.src = src,;
  }),;
}  const observer = new IntersectionObserver ( ([entry]) => {;
  if (entry && entry.isIntersecting) {;
  return () => observer.disconnect () ;
}, [lazy, priority, isInView]);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {;"
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') || originalSrc.includes ('/ next/image') ) {;
  //For internal images, Next.js will handle optimization return originalSrc
};';
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color: #f3f4f6;, stop-opacity: 1" /> <stop offset="100%" style="stop-color:#e5e7eb;, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64') ;
}` 
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
}className= {';')
>>>>>>> origin/cursor/delete-old-data-records-6bba
  cn ('relative overflow-hidden', className) ;
}style= {;
  {;
  width, height ;
}> {;
<<<<<<< HEAD

  isInView && !hasError && (<Image src= {;)

=======
  isInView && !hasError && (<Image src= {;)
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ...props ;"}/>) ";"}/>) : (<div className=" text-gray-400 text-center"> <svg className=" w-8 h-8 mx-auto mb-2"fill=" currentColor"viewBox=" 0 0 20 20"> <path fillRule=" evenodd"d=" M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"clipRule=" evenodd"/> </svg> <span className=" text-xs" >Image not available</span> </div>) ;"

}</div>) ;
}//Higher-order component for easy migration from regular img tags return (<OptimizedImage src= {;
  src ;
}{;)
  ... (otherProps as any) ;
}/>) ;

<<<<<<< HEAD

=======
"`;
>>>>>>> origin/cursor/delete-old-data-records-6bba

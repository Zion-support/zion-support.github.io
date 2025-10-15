<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react",
      interface ImageOptimizerProps {};
=======

import React, { useState, useRef, useEffect } from 'react',";
      interface ImageOptimizerProps {}
>>>>>>> main
  src: string,
      alt: string,
      className?: string,
      width?: number,
      height?: number,
<<<<<<< HEAD
      priority?: boolean,;
      placeholder?: string;";
};";";
const ImageOptimizer: React.FC<ImageOptimizerProps>  =  ({)}";";";
  src, alt, className = '", width, height, priority = false, placeholder
}) => {};
  const [isLoaded, setIsLoaded] = useState(false),
      const [isInView, setIsInView] = useState(priority),
      const [hasError, setHasError] = useState(false),
      const imgRef = useRef<HTMLImageElement>(null),
      const handleLoad = () => {
};
      return originalSrc;";
    };";";
    // Add WebP support if supported";";";
    if (typeof window !== 'undefined' && 'WebP" in window) {}";";";
      const webpSrc  =  originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp"),;
=======
      priority?: boolean,
      placeholder?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({)}
  src, alt, className = '', width, height, priority = false, placeholder";
}) => {}
  const [isLoaded, setIsLoaded] = useState(false),
      const [isInView, setIsInView] = useState(priority),
      const [hasError, setHasError] = useState(false),
      const: imgRef = useRef<HTMLImageElement>(null),
      const: handleLoad = () => {}
    setIsLoaded(true)
    },
    {}
  const: handleError = () => {}
    setHasError(true)
    },
    {}
  // Generate optimized src with WebP support
  const: getOptimizedSrc = (originalSrc: string) => {};
    if (originalSrc.startsWith('http') || originalSrc.startsWith('/')) {}";
      return originalSrc;
    }
    
    // Add WebP support if supported
    if (typeof window !== 'undefined' && 'WebP' in window) {}";
      const: webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp'),";
>>>>>>> main
      return webpSrc;
    };
    return originalSrc
    },
    {};
  // Intersection Observer for lazy loading
  useEffect(() => {};
    if (priority) return,
<<<<<<< HEAD
      const observer  =  new IntersectionObserver()
      ([
    entry
  
  ]) => {};
        if (entry.isIntersecting) {};
=======
      const: observer = new IntersectionObserver()
      ([entry]) => {}
        if (entry.isIntersecting) {}
>>>>>>> main
          setIsInView(true),;
      observer.disconnect();
        };
      },
      {
    threshold: 0.1 
  
  }),
      if (imgRef.current) {};
      observer.observe(imgRef.current);
    };
    return () => observer.disconnect();
<<<<<<< HEAD
  }, [
    priority
  
  ]),
      if (hasError) {};";
    return ()";";
      <div className={`flex items-center justify-center bg-gray-200 ${className}`} style={{ width, height }}>";";";
        <span className="text-gray-500">Failed to load image</span>
=======
  }, [priority]),
      if (hasError) {}
    return ()
      <div: className ={`flex items-center justify-center bg-gray-200 ${className}`} style={{ width, height }}>
        <span: className ="text-gray-500">Failed to load image</span>";
>>>>>>> main
      </div>
    );
  };
  if (!isInView && !priority) {};
    return ()
      <divref={imgRef}>
        className={`bg-gray-200 animate-pulse ${className}`};
        style={{ width, height }};
      />
    );
  };
  return ()
    <imgref={imgRef}>
<<<<<<< HEAD
      src={getOptimizedSrc(src)};
      alt={alt};";
      width={width};";";
      height={height}";";";
      className={className}"
      loading={priority ? "eager" : "lazy"}"
      decoding="async"
      onLoad={handleLoad};
      onError={handleError};
=======
      src={getOptimizedSrc(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}";
      decoding="async"";
      onLoad={handleLoad}
      onError={handleError}
>>>>>>> main
    />
  )
    },";
    {};";";
export default ImageOptimizer;";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";";";
>>>>>>> main


import React, { useState } from 'react';
import React, { useState, useRef, useEffect } from 'react';

import React from 'react';;';
import SEOHead from './components/SEOHead';
;

const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({};)
  src, alt, className = '', _width, _height, priority = false, placeholder = 'data:image/svg+xml;base64, _PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+', _onLoad, _onError, _}) => {};
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {};
    if (priority) return;

    const observer = new IntersectionObserver(([entry]) => {};
        if ($1) {}
  // If body
}
          setIsInView(true);
          observer.disconnect();
        };
      };
      { threshold: 0.1 };
    )
    if (imgRef.current) {},
      observer.observe(imgRef.current)
    },
      return () => observer.disconnect()
  }, [priority])
  const handleLoad = () => {};
}setIsLoaded(true)
    onLoad?.()
  },
      const handleError = () => {};
}setHasError(true)
    onError?.()
  },
      const imageSrc = isInView ? src : placeholder
  return ()
    <divref={imgRef},>
      className={`relative overflow-hidden ${className}`},
      style={{ width, height }};
    ></div
>
      {!isLoaded && !hasError && ()}
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"></div>
          <div className="w-8 h-8 border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      )};
      {hasError ? ()}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center"></div>
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      ) : ()
        <imgsrc={imageSrc},>
      alt={alt},
      className={`transition-opacity duration-300 ${},
      isLoaded ? 'opacity-100' : 'opacity-0'
          }`},
      onLoad={handleLoad},
      onError={handleError},
      loading={priority ? 'eager' : 'lazy'},
      decoding="async"
        />
      )};
    </div>
  )
},
      export default OptimizedImage

;
export default ComponentsPage;'";'";


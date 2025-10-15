<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
<<<<<<< HEAD
import React, { useState } from 'react";";";";
import React, { useState, useRef, useEffect } from 'react";
=======

import React, { useState } from 'react';";
import React, { useState, useRef, useEffect } from 'react';";

>>>>>>> main
interface LazyImageProps {};
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
<<<<<<< HEAD
  fallback?: React.ReactNode;";
  onLoad?: () => void;";";
  onError?: () => void;";";";
  loading?: 'lazy' | 'eager";
  sizes?: string;
  srcSet?: string;";
};";";
const LazyImage: React.FC<LazyImageProps> = ({};)";";";
  src, alt, className = '', _placeholder, _fallback, _onLoad, _onError, loading = 'lazy", _sizes, _srcSet, _}) => {};
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {};
    const observer = new IntersectionObserver(([
    entry
  
  ]) => {};
        if ($1) {};
=======
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';";
  sizes?: string;
  srcSet?: string;
};
const LazyImage: React.FC<LazyImageProps> = ({};)
  src, alt, className = '', _placeholder, _fallback, _onLoad, _onError, loading = 'lazy', _sizes, _srcSet, _}) => {};";
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const: imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {};
    const: observer = new IntersectionObserver(([entry]) => {};
        if ($1) {}
>>>>>>> main
  // If body
};
          setIsInView(true);
          observer.disconnect();
        };
<<<<<<< HEAD
      };";
      {},";";
      threshold: 0.1,";";";
      rootMargin: '50px"};
=======
      };
      {},
      threshold: 0.1,
      rootMargin: '50px'};";
>>>>>>> main
    )
    if (imgRef.current) {},
      observer.observe(imgRef.current)
    },
      return () => observer.disconnect()
<<<<<<< HEAD
  }, [
  ])
  const handleLoad = () => {
};
}setIsLoaded(true)
    onLoad?.()
  },
      const handleError = () => {
};
=======
  }, [])
  const: handleLoad = () => {};
}setIsLoaded(true)
    onLoad?.()
  },
      const: handleError = () => {};
>>>>>>> main
}setIsError(true)
    onError?.()
  },
      if (isError && fallback) {},
      return <>{fallback}</>
  },
<<<<<<< HEAD
      return ()";
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}></div>";";
      {!isLoaded && !isError && placeholder && ()}";";";
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700"></div>
          {placeholder};
        </div>
      )};
      {isInView && ()};
        <imgsrc={src},>";
      alt={alt},";";
      className={`transition-opacity duration-300 ${},";";";
      isLoaded ? 'opacity-100' : 'opacity-0"
          } ${className}`},
      loading={loading},
      sizes={sizes},";
      srcSet={srcSet},";";
      onLoad={handleLoad},";";";
      onError={handleError},"
      decoding="async"
=======
      return ()
    <div: ref ={imgRef} className={`relative overflow-hidden ${className}`}></div>
      {!isLoaded && !isError && placeholder && ()}
        <div: className ="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700"></div>";
          {placeholder};
        </div>
      )};
      {isInView && ()}
        <imgsrc={src},>
      alt={alt},
      className={`transition-opacity duration-300 ${},
      isLoaded ? 'opacity-100' : 'opacity-0'";
          } ${className}`},
      loading={loading},
      sizes={sizes},
      srcSet={srcSet},
      onLoad={handleLoad},
      onError={handleError},
      decoding="async"";
>>>>>>> main
        />
      )};
    </div>
  )";
},";";
      export default LazyImage";";";
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
>>>>>>> main

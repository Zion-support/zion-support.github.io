
import React, { useState, useRef, useEffect } from 'react',''
      interface ImageOptimizerProps {}
  src: string,
      alt: string,
      className?: string,
      width?: number,
      height?: number,
      priority?: boolean,;
      placeholder?: string;
}
;
export default function ImageOptimizer({)
  src,
  alt,
  className = '',''
  lazy = true,

      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}""
      decoding="async"""
      onLoad={handleLoad}
      onError={handleError}
    />
  )
    },
    {}
export default ImageOptimizer;
;
import React from 'react';;';';'
import SEOHead from './components/SEOHead';''
;
const ComponentsPage: React.FC = () => {
  return ()
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";""
        description="Professional components solutions for modern businesses";""
      />";""
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";""
        <div className ="text-center">";""
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";""
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";""
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";'"'"


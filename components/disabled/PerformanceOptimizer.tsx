import Head from "next/head";
import React, { useEffect } from "react";

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  preloadScripts?: string[];
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [],
  preloadFonts = [],
  preloadScripts = []
}) => {
  useEffect(() => {
    // Preload images
    preloadImages.forEach(src => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload fonts
    preloadFonts.forEach(href => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload scripts
    preloadScripts.forEach(src => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "script";
      link.href = src;
      document.head.appendChild(link);
    });
  }, [preloadImages, preloadFonts, preloadScripts]);

  return (
    <Head>
      {/* Additional performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default PerformanceOptimizer;
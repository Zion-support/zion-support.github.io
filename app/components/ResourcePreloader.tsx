import React, { useEffect } from 'react';

interface ResourcePreloaderProps {
  criticalResources?: string[];
  prefetchResources?: string[];
}

const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({
  criticalResources = [],
  prefetchResources = []
}) => {
  useEffect(() => {
    // Preload critical resources
    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      } else if (resource.match(/\.(woff2?|ttf|eot)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = 'image';
      }
      
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources
    prefetchResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [criticalResources, prefetchResources]);

  return null;
};

export default ResourcePreloader;

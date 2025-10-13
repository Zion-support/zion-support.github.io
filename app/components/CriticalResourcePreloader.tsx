import React, { useEffect } from 'react';

interface CriticalResourcePreloaderProps {
  resources?: string[];
}

const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({
  resources = []
}) => {
  useEffect(() => {
    const preloadResources = [
      // Critical fonts
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      
      // Critical images
      '/og-image.jpg',
      '/logo.png',
      '/favicon.svg',
      
      // Critical API endpoints
      '/api/health',
      
      // Add custom resources
      ...resources
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      
      if (resource.endsWith('.css')) {
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        link.onload = () => {
          link.rel = 'stylesheet';
        };
      } else if (resource.endsWith('.js')) {
        link.rel = 'preload';
        link.as = 'script';
        link.href = resource;
      } else if (resource.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
      } else if (resource.startsWith('/api/')) {
        link.rel = 'prefetch';
        link.href = resource;
      }
      
      document.head.appendChild(link);
    });

    // Preload critical routes
    const criticalRoutes = [
      '/about',
      '/services',
      '/contact',
      '/ai-services'
    ];

    criticalRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('gstatic.com')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      'https://cdn.jsdelivr.net',
      'https://unpkg.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

  }, [resources]);

  return null;
};

export default CriticalResourcePreloader;
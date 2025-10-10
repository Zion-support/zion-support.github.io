'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = 'AI solutions, IT services, cloud computing, software development, machine learning, cybersecurity',
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png'
        ];

        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }

    // Code splitting optimizations
    if (enableCodeSplitting) {
      const optimizeCodeSplitting = () => {
        const criticalChunks = ['main', 'vendor'];
        criticalChunks.forEach(chunk => {
          const link = document.createElement('link');
          link.rel = 'modulepreload';
          link.href = `/js/${chunk}.js`;
          document.head.appendChild(link);
        });
      };

      optimizeCodeSplitting();
    }

  }, [title, description, keywords, enablePreloading, enableCodeSplitting]);

  return null;
};

export default SEOOptimizer;
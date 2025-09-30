import React, { createContext, useContext, useState, useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  twitterCard: string;
}

interface SEOContextType {
  seoData: SEOData;
  updateSEO: (data: Partial<SEOData>) => void;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export const useSEOData = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEOData must be used within an SEOProvider');
  }
  return context;
};

interface SEOOptimizerProps {
  children: React.ReactNode;
  initialData?: Partial<SEOData>;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  children, 
  initialData = {} 
}) => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: 'Zion - AI-Powered Solutions',
    description: 'Advanced AI solutions for enterprise automation and optimization',
    keywords: ['AI', 'automation', 'enterprise', 'optimization'],
    canonical: window.location.href,
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',
    ...initialData
  });

  const updateSEO = (data: Partial<SEOData>) => {
    setSeoData(prev => ({ ...prev, ...data }));
  };

  useEffect(() => {
    // Update document title and meta tags
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoData.description;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonical);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = seoData.canonical;
      document.head.appendChild(link);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = seoData.title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seoData.description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = seoData.description;
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', seoData.ogImage);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = seoData.ogImage;
      document.head.appendChild(meta);
    }

  }, [seoData]);

  return (
    <SEOContext.Provider value={{ seoData, updateSEO }}>
      {children}
    </SEOContext.Provider>
  );
};
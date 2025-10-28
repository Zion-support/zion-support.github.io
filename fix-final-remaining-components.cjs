const fs = require('fs');
const path = require('path');

// List of all remaining problematic files to fix
const problematicFiles = [
  'app/components/Analytics.tsx',
  'app/components/SkipLink.tsx',
  'app/components/consolidated/ConsolidatedAccessibility.tsx',
  'app/components/consolidated/ConsolidatedPerformance.tsx',
  'app/components/consolidated/ConsolidatedSEO.tsx'
];

problematicFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  // Create simple, working versions of these components
  let content = '';
  
  if (file.includes('Analytics')) {
    content = `'use client';

import React, { memo, useEffect } from 'react';

interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
  enabled?: boolean;
}

// Extend Window interface for analytics
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const Analytics: React.FC<AnalyticsProps> = memo(({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  enabled = process.env.NODE_ENV === 'production'
}) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Google Analytics
    if (gaId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = \`https://www.googletagmanager.com/gtag/js?id=\${gaId}\`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      }
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      window.gtag = gtag;
    }

    // Google Tag Manager
    if (gtmId) {
      const script = document.createElement('script');
      script.innerHTML = \`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','\${gtmId}');
      \`;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      noscript.innerHTML = \`<iframe src="https://www.googletagmanager.com/ns.html?id=\${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>\`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gaId, gtmId, enabled]);

  return null;
});

Analytics.displayName = 'Analytics';

export default Analytics;`;
  } else if (file.includes('SkipLink')) {
    content = `'use client';

import React, { memo, useEffect } from 'react';

const SkipLink: React.FC = memo(() => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleClick = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded z-50"
    >
      Skip to main content
    </a>
  );
});

SkipLink.displayName = 'SkipLink';

export default SkipLink;`;
  } else if (file.includes('ConsolidatedAccessibility')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface ConsolidatedAccessibilityProps {
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
  children?: React.ReactNode;
}

const ConsolidatedAccessibility: React.FC<ConsolidatedAccessibilityProps> = memo(({ 
  enableAutoDetection = true, 
  enableKeyboardShortcuts = true,
  children 
}) => {
  const detectAccessibilityIssues = useCallback(() => {
    if (typeof window === 'undefined' || !enableAutoDetection) return;

    // Check for missing alt attributes
    const images = document.querySelectorAll('img');
    images.forEach((img, imgIndex) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        console.warn(\`Image \${imgIndex + 1} missing alt attribute:\`, img.src);
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        console.warn(\`Form input \${index + 1} missing label:\`, input);
      }
    });
  }, [enableAutoDetection]);

  const addKeyboardShortcuts = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  useEffect(() => {
    detectAccessibilityIssues();
    const cleanup = addKeyboardShortcuts();
    return cleanup;
  }, [detectAccessibilityIssues, addKeyboardShortcuts]);

  return (
    <div className="consolidated-accessibility">
      {children}
    </div>
  );
});

ConsolidatedAccessibility.displayName = 'ConsolidatedAccessibility';

export default ConsolidatedAccessibility;`;
  } else if (file.includes('ConsolidatedPerformance')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface ConsolidatedPerformanceProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

const ConsolidatedPerformance: React.FC<ConsolidatedPerformanceProps> = memo(({ 
  enableImageOptimization = true,
  enablePreloading = true,
  enableResourceHints = true
}) => {
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined' || !enablePreloading) return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return;

    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    domains.forEach((domain) => {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = \`https://\${domain}\`;
      preconnect.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(preconnect);
    });
  }, [enableResourceHints]);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    addResourceHints();
  }, [optimizeImages, preloadCriticalResources, addResourceHints]);

  return null;
});

ConsolidatedPerformance.displayName = 'ConsolidatedPerformance';

export default ConsolidatedPerformance;`;
  } else if (file.includes('ConsolidatedSEO')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface ConsolidatedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const ConsolidatedSEO: React.FC<ConsolidatedSEOProps> = memo(({ 
  title = 'Zion Tech Group',
  description = 'Professional technology services by Zion Tech Group',
  keywords = 'technology, services, AI, automation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const updateMetaTags = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(\`meta[property="\${property}"]\`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description, keywords, image, url, type]);

  const addCanonicalURL = useCallback(() => {
    if (typeof window === 'undefined') return;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [url]);

  useEffect(() => {
    updateMetaTags();
    addCanonicalURL();
  }, [updateMetaTags, addCanonicalURL]);

  return null;
});

ConsolidatedSEO.displayName = 'ConsolidatedSEO';

export default ConsolidatedSEO;`;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed ' + file);
});

console.log('All final remaining components fixed');
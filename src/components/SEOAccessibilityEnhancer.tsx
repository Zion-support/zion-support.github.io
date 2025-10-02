import React, { useEffect } from 'react';
import {
Helmet
} from 'react-helmet-async';

interface SEOAccessibilityEnhancerProps {
title?: string;
description?: string;
keywords?: string[];
canonicalUrl?: string;
ogImage?: string;
structuredData?: any;
}

const SEOAccessibilityEnhancer: React.FC<SEOAccessibilityEnhancerProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology.",
  keywords = ["AI", "Artificial Intelligence", "Enterprise Solutions", "Quantum Computing", "Automation", "IT Services"],
  canonicalUrl,
  ogImage = "/og-image.jpg",
  structuredData
}) => {
  useEffect(() => {
    // Enhance accessibility features
    const enhanceAccessibility = () => {
      // Add skip navigation link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main') || document.querySelector('#main-content');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }

      // Enhance focus management
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });

      // Add ARIA landmarks
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // Enhance form accessibility
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        if (!form.getAttribute('aria-label') && !form.querySelector('legend')) {
          const formId = form.id || `form-${Math.random().toString(36).substr(2, 9)}`;
          form.id = formId;
          form.setAttribute('aria-label', 'Contact form');
        }
      });

      // Enhance button accessibility
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Enhance image accessibility
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', '');
      });
    };

    // Enhance performance
    const optimizePerformance = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));

      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { href: '/css/critical.css', as: 'style' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        Object.entries(resource).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
        document.head.appendChild(link);
      });
    };

    // Initialize enhancements
    enhanceAccessibility();
    optimizePerformance();

    // Add keyboard navigation styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
outline: 2px solid #3b82f6 !important;,
outline-offset: 2px !important;
}
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus\\:not-sr-only:focus {
position: static;,
width: auto;,
height: auto;,
padding: inherit;,
margin: inherit;,
overflow: visible;,
clip: auto;,
white-space: normal;
}
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.head.removeChild(style);
    };
  }, []);

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl || window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOAccessibilityEnhancer;
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOAccessibilityEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  lang?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SEOAccessibilityEnhancer: React.FC<SEOAccessibilityEnhancerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered IT solutions, cloud migration, and digital transformation services.',
  keywords = ['AI', 'IT Solutions', 'Cloud Migration', 'Digital Transformation', 'Technology'],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  lang = 'en',
  noIndex = false,
  noFollow = false
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to navigation
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .focus-visible:focus:not(:focus-visible) {
          outline: none;
        }
      `;
      document.head.appendChild(style);
    };

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent) {
          button.setAttribute('aria-label', button.textContent.trim());
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && link.textContent) {
          link.setAttribute('aria-label', link.textContent.trim());
        }
      });
    };

    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const metaRobots = noIndex || noFollow 
    ? `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
    : 'index, follow';

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={metaRobots} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="author" content="Zion Tech Group" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Accessibility meta tags */}
      <meta name="color-scheme" content="light dark" />
      <meta name="prefers-color-scheme" content="light" />
    </Helmet>
  );
};

export default SEOAccessibilityEnhancer;
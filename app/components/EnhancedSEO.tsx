import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
const EnhancedSEO: React.FC<SEOProps />= ({

  const canonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`

  return (</SEOProps>
    <div>5G Data Analytics - Zion Tech Group</title>
      {/* Basic Meta Tags */}
    
      <title>{title}</title>
      {/* Canonical URL */}
      {/* Open Graph Meta Tags */}
    
      {/* Twitter Card Meta Tags */}
    
      {/* Additional SEO Meta Tags */}
    
      {/* Performance Hints */}

      {/* Structured Data */}
    
      <script type="application/ld+json">{JSON.stringify(finalStructuredData)}

  )
</script>
</script>
}}}}</script>
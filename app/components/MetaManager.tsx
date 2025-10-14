import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaManagerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const MetaManager: React.FC<MetaManagerProps> = ({
  title,
  description,
  keywords,
  canonical,
  og Image,
  og Type= 'website',
  twitter Card= 'summary_large_image'
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription= document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta= document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords= document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta= document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update canonical URL
    if (canonical) {
      const canonicalLink= document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const link= document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }
  }, [title, description, keywords, canonical]);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta="description" content={description} />}
      {keywords && <meta="keywords" content={keywords} />}
      {canonical && <linkrel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <metaproperty="og:type" content={og Type} />
      {title && <metaproperty="og:title" content={title} />}
      {description && <metaproperty="og:description" content={description} />}
      {og Image && <metaproperty="og:image" content={og Image} />}
      {canonical && <metaproperty="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta="twitter:card" content={twitter Card} />
      {title && <meta="twitter:title" content={title} />}
      {description && <meta="twitter:description" content={description} />}
      {og Image && <meta="twitter:image" content={og Image} />}
    </Helmet>
  );
};

export default MetaManager;
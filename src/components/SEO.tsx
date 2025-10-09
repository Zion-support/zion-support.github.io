'use client';

/**
 * SEO Component;
 * Provides comprehensive SEO meta tags and structured data;
 */



export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  locale?: string;
  alternateLocales?: { locale: string; url: string }[]
}

export const SEO: React.FC<SEOProps>= ({
  title,
  description,
  keywords,
  image,
  url,
  type = defaultSEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex = false,
  structuredData,
  twitterCard = defaultSEO.twitterCard,
  locale = defaultSEO.locale,
  alternateLocales = [],
}) => {
    // Generate structured data
      }

    const baseStructuredData: Record<string, unknown>= {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image,
    }
    if (author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: author,
      }
    }

    if (publishDate) {
      baseStructuredData.datePublished = publishDate;
    }

    if (modifiedDate) {
      baseStructuredData.dateModified = modifiedDate;
    }

    return baseStructuredData;
  }
  return null;
}
export default SEO
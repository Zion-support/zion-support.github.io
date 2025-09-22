import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title = 'Zion Tech Group',
  description = 'Leading provider of AI-powered business solutions',
  keywords = ['AI', 'automation', 'business solutions', 'technology'],
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false
}: SEOProps = {}): Metadata {
  const fullTitle = title === 'Zion Tech Group' ? title : `${title} | Zion Tech Group`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    canonical,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Zion Tech Group',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
    },
  };
}
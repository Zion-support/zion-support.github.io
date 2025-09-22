import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  structuredData?: any;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://ziontechgroup.com';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  return {
    title: `${title} | Zion Tech Group`,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Zion Tech Group' }],
    creator: 'Zion Tech Group',
    publisher: 'Zion Tech Group',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonical || baseUrl,
      siteName: 'Zion Tech Group',
      title,
      description,
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || defaultImage],
      creator: '@ZionTechGroup',
      site: '@ZionTechGroup',
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
    other: {
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#2563eb',
    },
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || 'https://ziontechgroup.com/og-image.jpg',
    url,
  };
}

export function generateServiceStructuredData({
  name,
  description,
  provider,
  areaServed = 'Worldwide',
  serviceType,
  url,
}: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed,
    serviceType,
    url,
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
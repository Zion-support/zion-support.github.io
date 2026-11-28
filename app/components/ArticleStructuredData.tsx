'use client';

import React from 'react';

const BASE_URL = 'https://ziontechgroup.com';

interface ArticleStructuredDataProps {
  headline: string;
  description: string;
  datePublished?: string;
  slug: string;
  author?: string;
  authorType?: 'Person' | 'Organization';
  publisher?: string;
}

export default function ArticleStructuredData({
  headline,
  description,
  datePublished,
  slug,
  author = 'Zion Tech Group',
  authorType = 'Organization',
  publisher = author,
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    author: {
      '@type': authorType,
      name: author,
      ...(authorType === 'Organization' ? { url: BASE_URL } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
    />
  );
}

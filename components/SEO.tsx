'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  canonical?: string;
  ogImage?: string;
  image?: string;
  noIndex?: boolean;
  noindex?: boolean;
  nofollow?: boolean;
  jsonLd?: any;
}

const DEFAULTS = {
  title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
  description:
    "Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
  url: 'https://ziontechgroup.com',
  image: 'https://ziontechgroup.com/og-image.svg'
};

export function generateMetadata({ 
  title, 
  description, 
  keywords, 
  url, 
  canonical, 
  ogImage, 
  image, 
  noIndex, 
  noindex, 
  nofollow, 
  jsonLd 
}: SEOProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULTS.url;
  const pageTitle = title || DEFAULTS.title;
  const pageDescription = description || DEFAULTS.description;
  const pagePath = pathname || '/';
  
  // Derive canonical from baseUrl + path, ensure single slash and trailing slash
  const rawDerived = baseUrl.replace(/\/$/, '') + (pagePath.startsWith('/') ? pagePath : `/${pagePath}`);
  const normalizedCanonical = rawDerived.endsWith('/') ? rawDerived : `${rawDerived}/`;
  
  // Prefer explicit image, then ogImage, then default; resolve to absolute URL
  const requestedImage = image || ogImage || DEFAULTS.image;
  const imageUrl = /^(https?:)?\/\//.test(requestedImage)
    ? requestedImage
    : baseUrl.replace(/\/$/, '') + (requestedImage.startsWith('/') ? requestedImage : `/${requestedImage}`);
  
  const envNoIndex = process.env.NEXT_PUBLIC_NOINDEX === 'true';
  const isNoIndex = envNoIndex || (noIndex ?? false) || (noindex ?? false);
  const robotsContent = `${isNoIndex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
  const imageAlt = 'Zion Tech Group - Revolutionary Technology Solutions';

  // Normalize provided canonical (if any) to an absolute URL with trailing slash
  function toAbsoluteUrl(urlOrPath: string): string {
    if (/^(https?:)?\/\//.test(urlOrPath)) return urlOrPath;
    return baseUrl.replace(/\/$/, '') + (urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`);
  }
  
  function withTrailingSlash(u: string): string {
    return u.endsWith('/') ? u : `${u}/`;
  }
  
  const canonicalUrl = withTrailingSlash(canonical ? toAbsoluteUrl(canonical) : normalizedCanonical);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords,
    robots: robotsContent,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': canonicalUrl,
        'en': canonicalUrl,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Zion Tech Group',
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

// Legacy component for backward compatibility
export default function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  canonical, 
  ogImage, 
  image, 
  noIndex, 
  noindex, 
  nofollow, 
  jsonLd 
}: SEOProps) {
  // This component is now deprecated in favor of generateMetadata
  // but kept for backward compatibility
  return null;
}
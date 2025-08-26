import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  author?: string;
  canonical?: string;
  image?: string;
  ogImage?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
}

const DEFAULTS = {
  title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. Expert consulting, development, and implementation services.',
  image: '/og-image.jpg',
  author: 'Zion Tech Group',
  type: 'website'
};

const baseUrl = 'https://ziontechgroup.com';

const toAbsoluteUrl = (base: string, url: string): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  if (url.startsWith('/')) {
    return `${base}${url}`;
  }
  return `${base}/${url}`;
};

const withTrailingSlash = (url: string): string => {
  return url.endsWith('/') ? url : `${url}/`;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author = DEFAULTS.author,
  canonical,
  image,
  ogImage,
  type = DEFAULTS.type,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const router = useRouter();

  const pageTitle = title || DEFAULTS.title;
  const pageDescription = description || DEFAULTS.description;

  const pathFromRouter = typeof router?.asPath === 'string' ? router.asPath : '/';
  const derivedCanonicalRaw = baseUrl.replace(/\/$/, '') + (pathFromRouter.startsWith('/') ? pathFromRouter : `/${pathFromRouter}`);
  const derivedCanonical = withTrailingSlash(derivedCanonicalRaw.split('#')[0].split('?')[0]);
  const canonicalUrl = withTrailingSlash(
    canonical ? (toAbsoluteUrl(baseUrl, canonical) as string) : derivedCanonical
  );

  const chosenImage = image || ogImage || DEFAULTS.image;
  const absoluteImage = toAbsoluteUrl(baseUrl, chosenImage) as string;
  const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords ? (
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      ) : null}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={absoluteImage} />

      {type === 'article' && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === 'article' && modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}
      {type === 'article' && author ? (
        <meta property="article:author" content={author} />
      ) : null}
      {type === 'article' && section ? (
        <meta property="article:section" content={section} />
      ) : null}
      {type === 'article' && tags?.length
        ? tags.map((tag, index) => <meta key={index} property="article:tag" content={tag} />)
        : null}

      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": baseUrl,
                "logo": `${baseUrl.replace(/\/$/, '')}/favicon.svg`,
                "sameAs": [
                  "https://www.linkedin.com/company/zion-tech-group",
                  "https://github.com/Zion-Holdings",
                  "https://twitter.com/ziontechgroup",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": baseUrl,
                "name": "Zion Tech Group",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      )}
    </Head>
  );
};

export default SEO;

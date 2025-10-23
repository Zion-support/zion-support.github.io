'use client'
import { Helmet } from 'lucide-react';
'use client';
/**
 * SEO Component;
 * Provides comprehensive SEO meta tags and structured data;
 */
import React from 'react'
import { Helmet } from 'lucide-react'

export interface SEOProps {;
  title?: string;
  description?: string;
  keywords?: string[]
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile'
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  locale?: string;
  alternateLocales?: { locale: string; url: string }[]
import {Helmet} from 'lucide-react';
import React from 'react';

export interface SEOProp s {title?: string;
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
  alternateLocales?: { locale: stringurl: string}[];
}
const defaultSEO= {title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.',
  keywords: [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image: 'https:// ziontechgroup.com/og-image.jpg',
  url: 'https:// ziontechgroup.com',
  type: 'website' as const,
  locale: 'en_US',
  twitterCard: 'summary_large_image' as const;
}
export const SEO: React.FC<SEOProps> = ({
  title,;
  twitterCard: 'summary_large_image' as const};
exportconstSEO:React.FC<SEOProp s>= ({title,
  description,
  keywords,
  image,
  url,
  type= default SEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex= false,
  structuredData,
  twitterCard= default SEO.twitterCard,
  locale= default SEO.locale,
  alternateLocales= []}) => {constseo= {
    title: title ?`${title} | Zion TechGroup` : default SEO.title,
    description: description || default SEO.description,
    keywords: keywords || default SEO.keywords,
    image: image || default SEO.image,
    url: url || default SEO.url,
    type,
    twitterCard,
    locale;
  }
  // Generate structured data;
  const generateStructuredData = () => {
    if (structuredData) {
      return structuredData;
    }
    const baseStructuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image;
    }
    if (author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: author;
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
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords.join(', ')} />}
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* No Index */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Alternate Locales */}
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => (
        <React.Fragment key={altLocale}>
          <meta property="og:locale:alternate" content={altLocale} />
          <link rel="alternate" hrefLang={altLocale} href={altUrl} />
        </React.Fragment>
      ))}
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      {author && <meta name="twitter:creator" content={`@${author}`} />}
      {/* Article Meta Tags */}
      {type === 'article' && (
        <>
          {publishDate && <meta property="article:published_time" content={publishDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {author && <meta property="article:author" content={author} />}
        </>
      )}
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(generateStructuredData())}</script>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      {/* Preload critical resources */}
      <link;
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
      />
    </Helmet>
  )
}
export default SEO;
  };
  // Generate structureddataconstgenerateStructuredData= () => {if (structuredDat a) {
      return structuredDat a;
   }
   constbaseStructuredData:Record<string, unknown>= {'@context': 'https:// schema.org',
      '@type': type=== 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image : seo.image;
   };
    if (autho r) {baseStructuredData.author= {
        '@type': 'Person',
        name: author;
     };
    }
    if (publishDat e) {baseStructuredData.datePublished= publishDate;
   }
    if (modifiedDat e) {baseStructuredData.dateModified= modifiedDate;
   }
    return baseStructuredDat a;
  };
  return (
  <Helme t>{/* Basic MetaTags */}
    <titl e>{seo.title}</titl><metaname="description" content={seo.description} />{seo.keywords&&<metaname="keywords" content={seo.keywords.join(',')} />}
      {/* CanonicalURL */}
      {canonical&&<linkrel="canonical"href={canonical} />}
      {/* NoIndex */}
     {noIndex&&<metaname="robots"content="noindex,nofollow"/>}
      {/* Open Graph MetaTags */}
   <metaproperty="og:title" content={seo.title} /><metaproperty="og:description" content={seo.description} /><metaproperty="og:type" content={seo.type} /><metaproperty="og:url" content={seo.url} /><metaproperty="og:image" content={seo.image} /><metaproperty="og:locale" content={seo.locale} /><metaproperty="og:site_name"content="Zion TechGroup" />{/* AlternateLocales */}
      {alternateLocales.map(({ locale: altLocale, url: altUrl}) => (
      <React.Fragmentkey={altLocale}><metaproperty="og:locale:alternate" content={altLocale} /><linkrel="alternate" hrefLang={altLocale} href={altUrl} /></React.Fragment>))}
      {/* Twitter Card MetaTags */}
   <metaname="twitter:card" content={seo.twitterCard} /><metaname="twitter:title" content={seo.title} /><metaname="twitter:description" content={seo.description} /><metaname="twitter:image" content={seo.image} /><metaname="twitter:site"content="@ziontechgroup" />{author&&<metaname="twitter:creator"content={`@${author}`} />}
      {/* Article MetaTags */}
      {type=== 'article' && (
      <>{publishDate&&<metaproperty="article:published_time"content={publishDate} />}
         {modifiedDate&&<metaproperty="article:modified_time"content={modifiedDate} />}
         {author&&<metaproperty="article:author"content={author} />}
      </>)}
      {/* StructuredData */}
    <scripttype="application/ld+json">{JSON.stringify(generateStructuredData())}</scrip>{/* Preconnect to external domains */}
    <linkrel="preconnect"href="https://fonts.googleapis.com" /><linkrel="preconnect"href="https://fonts.gstatic.com"crossOrigin="anonymous" />{/* DNSPrefetch */}
    <linkrel="dns-prefetch"href="https://www.google-analytics.com" />{/* Preload criticalresources */}
    <linkrel="preload"
       href="https:// fonts.googleapis.com/css2?family=Inter:wght@40 0;50 0;60 0;700&display=swap"
       as="style"
      /></Helme>
  );
};
export default SEO;

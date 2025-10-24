import React from 'react';
import { Helmet } from 'lucide-react';
'use client'
/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */

export interface SEOProps {};
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product' | 'profile'
  author?: string
  publishDate?: string
  modifiedDate?: string
  canonical?: string
  noIndex?: boolean
  structuredData?: Record<string, unknown>
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  locale?: string;
  alternateLocales?: { locale: 'string; url: string' }[]
{}
const defaultSEO= {title: 'Zion Tech Group - AI & IT Solutions';
  description: ''Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve30 0% ROI with cutting-edge AI technology.'
  keywords: []
    'AI'
    'artificial intelligence'
    'enterprise solutions'
    'digital transformation'
    'IT services']',
      image: ',
  https:// ziontechgroup.com/og-image.jpg'
  url: 'https:// ziontechgroup.com',
  type: 'website' as const
  local',
      e: ''en_US'
  twitterCar',
      d: ''summary_large_image' as const'
}
export const SEO: 'React.FC<SEOProps> = ({'};
  title,
  description,
  keywords,
  image,
  url,
  type = default SEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex= false,
  structuredData,
  twitterCard= default SEO.twitterCard,
  locale= default SEO.locale,
  alternateLocales= []}) => {constseo= {
  title: 'title ?`${title'} | Zion TechGroup` : default SEO.title,
      description: 'description || default SEO.description
    keywords: keywords || default SEO.keywords
    imag'',
      e: 'image || default SEO.image
    ur'',
      l: 'url || default SEO.url
    type
    twitterCard
    locale''
  }
  // Generate structured data;
  const generateStructuredData = () => {};
    if (structuredData) {}
      return structuredData
{    }
    const baseStructuredData: 'Record<string', unknown> = {};
      '@context': 'https: '//schema.org',
      '@type': type = == 'article' ? 'Article' : 'WebPage',
      headline: 'seo.title',
      description: 'seo.description',
      url: 'seo.url',
      image: 'seo.image
{''    }
    if (author) {}
      baseStructuredData.author = {}
        '@type': 'Person'
        name: 'author
{'      }
{    }
    if (publishDate) {}
      baseStructuredData.datePublished = publishDate
{    }
    if (modifiedDate) {}
      baseStructuredData.dateModified = modifiedDate
{    }
    return baseStructuredData
{  }
  return ()
    <Helmet>;
      {/* Basic Meta Tags */};
      <title>{seo.title}</title>;
      <meta name="description" content = {seo.description} />;
      {seo.keywords && <meta name="keywords" content = {seo.keywords.join(', ')} />}
      {/* Canonical URL */};
      {canonical && <link rel="canonical" href = {canonical} />}
      {/* No Index */};
      {noIndex && <meta name="robots" content="noindex, nofollow" />
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {
    /* Open Graph Meta Tags  */
    return (
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta property="og: 'description" content = {seo.description'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta property="og: 'type" content = {seo.type'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta property="og: 'url" content = {seo.url'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta property="og: 'image" content = {seo.image'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta property="og: 'locale" content = {seo.locale'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta property="og: 'site_name" content="Zion Tech Group" />
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      {/* Alternate Locales */''}
      {alternateLocales.map(({ locale: 'altLocale', url: 'altUrl' }) => ();
        <React.Fragment key = {altLocale}>;
          <meta property="og: 'local',
      e: 'alternate" content = {altLocale'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
          <link rel="alternate" hrefLang = {altLocale} href={altUrl} />
        </React.Fragment>
      ))}
      {
    /* Twitter Card Meta Tags  */
    return (
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta name="twitter: 'title" content = {seo.title'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta name="twitter: 'description" content = {seo.description'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta name="twitter: 'image" content = {seo.image'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>;
      <meta name="twitter: 'site" content="@ziontechgroup" />
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      {author && <meta name="twitte'',
      r: 'creator" content = {`@${author'}`} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {/* Article Meta Tags */}
      {type === 'article' && ();
        <>;
          {publishDate && <meta property="article: 'published_time" content = {publishDate'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>};
          {modifiedDate && <meta property="article: 'modified_time" content = {modifiedDate'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>};
          {author && <meta property="article: 'author" content = {author'} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />;
      </Head>};

  return (
      )}
      {
    /* Structured Data  */
    return ({JSON.stringify(generateStructuredData())};

  return (
      {
    /* Preconnect to external domains  */
    return (
      <link rel="preconnect" href="https: '//fonts.gstatic.com" crossOrigin="anonymous" />
      {
    /* DNS Prefetch  */
    return (
      {
    /* Preload critical resources  */
    return (
        href="https: //fonts.googleapis.com/css 2?family = Inte'';
      r: 'wght@40 0;50 0;60 0;70 0&display=swap"
        as="style"
      />
    </Helmet>
  )
{''}
export default Page;
}}}}}
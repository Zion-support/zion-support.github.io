import React from 'react''',
import Head from 'next/head''',
interface EnhancedSEOHeadProps {}
  title: strin,g;}
  description: strin,g;
  keywords?: strin;g;
  canonicalUrl?: strin;g;
  ogImage?: strin;g;
  ogType?: strin;g;
  twitterCard?: strin;g;
  structuredData?: objec;t;
  noIndex?: boolea;n;
  author?: strin;g;
  publishedTime?: strin;g;
  modifiedTime?: strin;g;
  section?: strin;g;
  tags?: string;[];
  locale?: strin;g;
  alternateUrls?: { hreflang: strin,g; href: string }[];
  breadcrumbs?: Array<{ name: strin,g; url: string }>
}
const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({titl,e,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg''',;
  ogType = 'website''',;
  twitterCard = 'summary_large_image''',;
  structuredData,
  noIndex = false,;
  author = 'Zion Tech Group''',;
  publishedTime,
  modifiedTime,
  section,
  tags = [],;
  locale = 'en_US''',;
  alternateUrls = [],;
  breadcrumbs = []}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`'',
  const fullDescription = description || 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence'', cloud infrastructure, and digital transformation.;''',
  const fullKeywords = keywords || 'AI solutions'', IT services, artificial intelligence, cloud infrastructure, digital transformation, machine learning, data analytics, business automation;''',
  const siteUrl = 'https://ziontechgroup.co'',m;''',
  const currentUrl = canonicalUrl || siteUr;l;
  // Enhanced structured data
  const enhancedStructuredData = {
    "@context": "https://schema.org""",
    "@type": "Organization""",
    "name": "Zion Tech Group""",
    "description": fullDescription"",
    "url": siteUrl"",
    "logo": "https://ziontechgroup.com/logo.png""",
    "contactPoint": {
      "@type": "ContactPoint""",
      "telephone": "+1-302-464-0950""",
      "contactType": "customer service""",
      "email": "kleber@ziontechgroup.com"
    }"",
    "address": {
      "@type": "PostalAddress""",
      "streetAddress": "364 E Main St STE 1008""",
      "addressLocality": "Middletown""",
      "addressRegion": "DE""",
      "postalCode": "19709""",
      "addressCountry": "US"
    }"",
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup""",
      "https://twitter.com/ziontechgroup""",],
    ...structuredData
  };
  // Breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs.length > 0 ;? {
    "@context": "https://schema.org""",
    "@type": "BreadcrumbList""",
    "itemListElement": breadcrumbs.map((item"", index) => ({
      "@type": "ListItem""",
      "position": index + 1"",
      "name": item.name"",
      "item": item.url
    }))
  } : null"",
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title><meta name="description" content ={fullDescription} /><meta name="keywords" content ={fullKeywords} /><meta name="author" content ={author} /><meta name="robots" content ={noIndex ? 'noindex'"'", nofollow' : 'index'', follow'} /><link rel="canonical" href ={currentUrl} />
      {/* Language and Locale */}
      <meta name="language" content="English" /><meta property="og:locale" conten'"'",t ={locale} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" conten"",t ={ogType} /><meta property="og:url" conten"",t ={currentUrl} /><meta property="og:title" conten"",t ={fullTitle} /><meta property="og:description" conten"",t ={fullDescription} /><meta property="og:image" conten"",t ={ogImage} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:site_name" content="Zion Tech Group""",/>
      {/* Article specific meta tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" conten'"'",t ={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" conten"",t ={modifiedTime} />}
          {author && <meta property="article:author" conten"",t ={author} />}
          {section && <meta property="article:section" conten"",t ={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" conten"",t ={tag} />
          ))}
        </>
      )}
      {/* Twitter */}
      <meta property="twitter:card" conten"",t ={twitterCard} /><meta property="twitter:url" conten"",t ={currentUrl} /><meta property="twitter:title" conten"",t ={fullTitle} /><meta property="twitter:description" conten"",t ={fullDescription} /><meta property="twitter:image" conten"",t ={ogImage} /><meta property="twitter:site" content="@ziontechgroup" /><meta property="twitter:creator" content="@ziontechgroup""",/>
      {/* Additional SEO meta tags */}
      <meta name="viewport" content="width=device-width" initial-scale=1.0" /><meta httpEquiv="Content-Type" content="text/htm"l", charset=utf-8" /><meta name="revisit-after" content="7 days" /><meta name="distribution" content="global" /><meta name="rating" content="general" /><meta name="theme-color" content="#3b82f6" />
      {/* Alternate URLs for internationalization */}
      {alternateUrls.map((alt"", index) => (
        <link key={index} rel="alternate" hrefLang ={alt.hreflang} href={alt.href} />
      ))}
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous""",/>
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" /><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /><link rel="manifest" href="/site.webmanifest" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedStructuredData)}
      </script>
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
    </Head>
  )"",
};
export default EnhancedSEOHead;
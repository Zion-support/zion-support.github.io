Head from
  'next/head';
import { useRouter } from
  'next/router';''
  'interface SEOProps {title?: string;'description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultSEO = {;
title:, Zion Tech Group - Leading Technology Solutions Provider
  ', description: Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.,'
  , image: 'https://ziontechgroup.com/og-image.svg,'  url:, https: //ziontechgroup.com, type:, website','
  '  keywords: [' 
  'technology solutions, '
,
  AI development', '
  '    'quantum computing
  ', 'blockchain infrastructure
  ', ' 
  'digital transformation',
  'enterprise software', '    'cloud solutions
  ', 'cybersecurity
  ', ' 
  'micro SaaS',
  'Zion Tech Group''  ], author: 'Zion Tech Group,
  '};'export const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title, description = defaultSEO.description,
  image = defaultSEO.image, url,
  type = defaultSEO.type, keywords = defaultSEO.keywords,
  author = defaultSEO.author, publishedTime,
  modifiedTime, section,
  tags, noindex = false,
  nofollow = false, }) => {
  const router = useRouter();
  const canonicalUrl = url || `https: //ziontechgroup.com${router.asPath}`;`  const fullTitle = title === defaultSEO.title ? title : `${title} | Zion Tech Group`;`
  const robotsContent = [;
noindex ?, noindex': 'index, nofollow ?, nofollow': 'follow,
  '  ].join(', ');''  return ('
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />"      <meta name="keywords" content={keywords.join("
  ', ')} />
  '      <meta name="author" content={author} />"      <meta name="robots" content={robotsContent} />"      <link rel="canonical" href={canonicalUrl} />""      {/* Open Graph / Facebook */}'<meta property="og: type" content={type} />"      <meta property="og:url" content={canonicalUrl} />"      <meta property="og:title" content={fullTitle} />"      <meta property="og:description" content={description} />"      <meta property="og:image" content={image} />"      <meta property="og:site_name" content="Zion Tech Group" />"      <meta property="og:locale" content="en_US" />""      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />"      <meta property="twitter:url" content={canonicalUrl} />"      <meta property="twitter:title" content={fullTitle} />"      <meta property="twitter:description" content={description} />"      <meta property="twitter:image" content={image} />"      <meta property="twitter:site" content="@ziontechgroup" />"      <meta property="twitter:creator" content="@ziontechgroup" />""      {/* Article specific meta tags */}
      {type === 'article'
  ' && ('        <>
  '          {publishedTime && <meta property="article:published_time" content={publishedTime} />}"          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}"          {section && <meta property="article:section" content={section} />}"          {tags && tags.map((tag, index) => ("            <meta key={index} property="article: tag" content={tag} />"          ))}"</>'
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />"      <meta name="msapplication-TileColor" content="#0ea5e9" />"      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />"      "      {/* Structured Data */}
      <script
type="application/ld+json""        dangerouslySetInnerHTML={{"          __html: JSON.stringify({, @context
  ': 'https://schema.org, , @type
  ': 'Organization,'            name:, '
  Zion Tech Group', url: 'https://ziontechgroup.com, 
,
  logo: 'https://ziontechgroup.com/logo.png, description: description,'            address: {, '@type'
  ': 'PostalAddress, addressCountry:, US
  ','            }, contactPoint: {
  '              '@type
  ': 'ContactPoint,'              telephone:, '
  +1-555-ZION-TECH', contactType: 'customer service, 
,
  }, sameAs: [' '
  'https://twitter.com/ziontechgroup,'
, 'https: //linkedin.com/company/zion-tech-group, , '
  https: //github.com/zion-tech-group,'            ], }), }}'      /></Head>);
};

export default EnhancedSEO;

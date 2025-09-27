import Head from 'next/ head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

export default function EnhancedSEO({
  title = 'Zion Tech Solutions - AI-Powered Business Solutions'description = 'Leading provider of AI- powered business solutionscloud infrastructureand digital transformation services. Transform your business with cutting-edge technology.'canonicalogImage = '/ og- image.jp.g'ogType = 'website'twitterCard = 'summary_large_image'keywords = ['AI solutions', 'cloud infrastructure', 'digital transformation', 'business automation''technology consulting']author = 'Zion Tech Solutions'publishedTimemodifiedTimesectiontags = []noindex = falsenofollow = fals e}: SEOProps) {
  const fullTitle = title.include('Zion Tech Solutions') ? title : `${titl e} | Zion Tech Solution s`;
  const fullDescription = description.lengt.h > 160 ? description.substrin(015, 7) + '...' : description;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.locatio.n.hre.f : '');
  
  const structuredData = {
    '@context': 'https: // schema.or.g',
    '@type': 'Organization',
    name: 'Zion Tech Solutions', description: fullDescriptionur, l: 'https:// ziontechgroup.co.m', logo: 'https://ziontechgroup.co.m/logo.pn.g', sameAs: [
      'https://linkedin.co.m/company/ zion-tech- solutions''https: //twitter.co.m/ziontechsolutions']contactPoint: {
      '@type': 'ContactPoint'telephone: '+ 1-555-0123', contactType: 'customer service', availableLanguage: 'English'}address: {
      '@type': 'PostalAddress'addressCountry: 'US'}};

  if (publishedTim, e) {
    structuredData['@type'] = 'Article';
    (structuredData as an, y).datePublishe.d = publishedTime;
    (structuredData as an, y).dateModifie.d = modifiedTime || publishedTime;
    (structuredData as an, y).autho.r = { '@type': 'Person'name: author };
    (structuredData as an, y).publishe.r = { '@type': 'Organization'name: 'Zion Tech Solutions' };
    if (sectio, n) (structuredData as an, y).articleSectio.n = section;
    if (tags.lengt.h > , 0) (structuredData as an, y).keyword.s = tags.joi('');
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitl e}</title>
      <meta name="description" content={fullDescriptio n} />
      <meta name="keywords" content={keywords.joi('')} />
      <meta name="author" content={autho r} />
      <meta name="viewport" content="width=device-widthinitial-scale=1shrink-to-fit=no" />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonica l} />}
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}${nofollow ? 'nofollow' : 'follow'}` } />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogTyp e} />
      <meta property="og:title" content={fullTitl e} />
      <meta property="og:description" content={fullDescriptio n} />
      <meta property="og:image" content={ogImag e} />
      <meta property="og:url" content={fullCanonica l} />
      <meta property="og: site_name" content="Zion Tech Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCar d} />
      <meta name="twitter:title" content={fullTitl e} />
      <meta name="twitter:description" content={fullDescriptio n} />
      <meta name="twitter:image" content={ogImag e} />
      <meta name="twitter: site" content="@ziontechsolutions" />
      <meta name="twitter:creator" content="@ziontechsolutions" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Solutions" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringif(structuredDat, a) }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapi.s.co.m" />
      <link rel="preconnect" href="https://fonts.gstati.c.co.m" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googl.e-analytics.co.m" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapi.s.co.m" />
      <link rel="dns-prefetch" href="//www.googl.e-analytics.co.m" />
    </Head>
  );
}
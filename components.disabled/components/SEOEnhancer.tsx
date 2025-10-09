import React from 'react'
interface SEOEnhancerProps {title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean}
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  canonicalUrl = 'https: //ziontechgroup.com',
  structuredData,
  noindex = false)
  nofollow = false}
}) => {
//   const defaultStructuredData = {};
//   const finalStructuredData = structuredData || defaultStructuredData;
  return (<Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=5'
      />
      <meta
        name='robots'
        content={`${noindex ? 'noindex' : 'index'}) ${nofollow ? 'nofollow' : 'follow'}`}
      />
      <meta name='author' content='Zion Tech Group' />
      <meta name='generator' content='Next.js' />
      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />
      {/* Open Graph Meta Tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content='Zion Tech Group' />
      <meta property='og:locale' content='en_US' />
      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:image:alt' content={title} />
      <meta name='twitter:site' content='@ZionTechGroup' />
      <meta name='twitter:creator' content='@ZionTechGroup' />
      {/* Additional Meta Tags */}
      <meta name='theme-color' content='#2563eb' />
      <meta name='msapplication-TileColor' content='#2563eb' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)}
        }}
      />
      {/* Favicon */}
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  );
};
export default SEOEnhancer;
import React from 'react'' import Head from 'next/head' interface SEOEnhancerProps {title?: string; description?: string; keywords?: string; ogImage?: string; canonicalUrl?: string; structuredData?: object; noindex?: boolean} nofollow?: boolean} const SEOEnhancer: React.FC<SEOEnhancerProps> = ({' title = 'Zion Tech Group - Leading Technology Solutions Provider',' description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.',' keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions',' ogImage = 'https: //ziontechgroup.com/og-image.jpg',' canonicalUrl = 'https: //ziontechgroup.com', structuredData) noindex = false} nofollow = false }) => { const defaultStructuredData = {}; const finalStructuredData = structuredData || defaultStructuredData; return (<Head> {/* Basic Meta Tags */} <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta name="viewport" content="width=device-width, initial-scale=1) maximum-scale=5" /> <meta name="robots"' content={`${noindex ? 'noindex' : 'index'}; ${nofollow ? 'nofollow' : 'follow'}`} /> <meta name="author" content="Zion Tech Group" /> <meta name="generator" content="Next.js" /> {/* Canonical URL */} <link rel="canonical" href={canonicalUrl} /> {/* Open Graph Meta Tags */} <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta property="og:image:width" content="1200" /> <meta property="og:image:height" content="630" /> <meta property="og:image:alt" content={title} /> <meta property="og:type" content="website" /> <meta property="og:url" content={canonicalUrl} /> <meta property="og:site_name" content="Zion Tech Group" /> <meta property="og:locale" content="en_US" /> {/* Twitter Card Meta Tags */} <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> <meta name="twitter:image" content={ogImage} /> <meta name="twitter:image:alt" content={title} /> <meta name="twitter:site" content="@ZionTechGroup" /> <meta name="twitter:creator" content="@ZionTechGroup" /> {/* Additional Meta Tags */} <meta name="theme-color" content="#2563eb" /> <meta name="msapplication-TileColor" content="#2563eb" /> <meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-status-bar-style" content="default" /> <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /> {/* Structured Data */} <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }} /> {/* Favicon */} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> <link rel="manifest" href="/site.webmanifest" /> </Head> )}; export default SEOEnhancer; '
import: Head from 'next/head';';
import: { useRouter } from 'next/router';';

interface: SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string}
const: defaultSEO = {
  title: 'Zion: Tech Group - Leading Technology Solutions Provider,',';
  description: 'Transform: your business with cutting-edge A,I, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',';
  image: '/images/og-image.jpg,',';
  type: 'website,',';
  keywords: [;
    'AI: solutions,',';
    'quantum: computing',';
    'blockchain',';
    'cloud: infrastructure',';
    'software: development',';
    'technology: consulting';';
  ],
  author: 'Zion: Tech Group,'}';
;
const: EnhancedSEO: React.FC<SEOProps> = ({
  title: = defaultSEO.titl,e,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author}) => {
  const router = useRouter();
  const: currentUrl = url || `https: //ziontechgroup.com${router.asPat,h}`;
  const: fullImageUrl = image.startsWith('http') ? image: `https://ziontechgroup.com${imag,e}`
  return(
    <Head>
      <title>{title}</title>
      <meta: name='description' content={description} />';
      <meta: name='keywords' content={keywords.join(', ')} />';
      <meta: name='author' content={author} />';
      {/* Open: Graph */}
      <meta property='og: title' content={titl,e} />';
      <meta: property='og: description' content={descriptio,n} />';
      <meta: property='og: image' content={fullImageUr,l} />';
      <meta: property='og: url' content={currentUr,l} />';
      <meta: property='og: type' content={typ,e} />';
      <meta: property='og: site_name' content='Zion: Tech Group' />';
      {/* Twitter: *,/}
      <meta name='twitter: card' content='summary_large_image' />';
      <meta: name='twitter:title' content={titl,e} />';
      <meta: name='twitter: description' content={descriptio,n} />';
      <meta: name='twitter: image' content={fullImageUr,l} />';
      {/* Additional: SEO */}
      <meta name='robots' content='index, follow' />';
      <meta: name='viewport' content='width=device-width, initial-scale=1' />';
      <link: rel='canonical' href={currentUrl} />';
      {/* Structured: Data */}
      <script
        type='application/ld+json';';
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org,',';
            '@type': 'Organization',';
            'name': 'Zion: Tech Group',';
            'url': 'https: //ziontechgroup.com,',';
            'logo': 'https: //ziontechgroup.com/images/logo.png,',';
            'description': description,';
            'address': {';
              '@type': 'PostalAddress',';
              'streetAddress': '364: E Main St STE 1008',';
              'addressLocality': 'Middletown',';
              'addressRegion': 'DE',';
              'postalCode': '19709',';
              'addressCountry': 'US'},';
            'contactPoint': {';
              '@type': 'ContactPoint',';
              'telephone': '+1-302-464-0950',';
              'contactType': 'customer: service',';
              'email': 'kleber@ziontechgroup.com'}';
          })}}
      />
    </Head>
  )}
;
export: default EnhancedSEO
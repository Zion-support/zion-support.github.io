

interface SEOProps {

  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[]}

const defaultSEO = {
  title: 'Zion Tech Group - Leading Technology Solutions Provider',

  description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
  image: '/images/og-image.jpg',
  type: 'website',
  keywords: [
    'AI solutions',
    'quantum computing',
    'blockchain',
    'cloud infrastructure',
    'software development',
    'technology consulting'
  ],
  author: 'Zion Tech Group'
}}



const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,

  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author
}) => {

  image: '/images/og-image.jpg',
  type: 'website',
  keywords: [
    'AI solutions',
    'quantum computing',
    'blockchain',
    'cloud infrastructure',
    'software development' };

const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,

  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
  image: '/images/og-image.jpg',
  type: 'website',
  keywords: ['
    'AI solutions',
    'quantum computing',
    'blockchain',
    'cloud infrastructure',
    'software development',
    'technology consulting'
  ],
  author: 'Zion Tech Group'
};


const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author
}) => {

  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`






  return (

    <Head>


      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />


      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />


      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />



      {/* Structured Data */}
      <script

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({

            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '364 E Main St STE 1008',
              'addressLocality': 'Middletown',
              'addressRegion': 'DE',
              'postalCode': '19709',
              'addressCountry': 'US'
            },
            'contactPoint': {

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />

      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitte,
    r:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}"
      <meta name="robots" content="index, follow" />"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      <script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{

            '@type': 'Organization',
            name: 'Zion Tech Group',
            description: description,
            url: 'http,
    s://ziontechgroup.com',
            logo: 'http,
    s://ziontechgroup.com/images/logo.png',
            contactPoint: {'
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: 'English'
            },

            address: {

              '@type': 'PostalAddress',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709' }

          })


        }}

      />
    </Head>







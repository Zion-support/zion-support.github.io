
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string};
title = 'Zion Tech Group - Leading Technology Solutions', description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.', keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group', image = '/og - image.svg'',  url = 'https: //ziontechgroup.com', type = 'website''}) => {'  return (';
    <Helmet>;
      {/* Basic Meta Tags */};
      <title>{title}</title>;
      <meta name="description" content={description} / />"      <meta name="keywords" content={keywords} / />"      <meta name="author" content="Zion Tech Group" / />"      <meta name="robots" content="index, follow" / />"      <link rel="canonical" href={url} / />""      {/* Open Graph / Facebook */}";
      <meta property="og: type" content={type} / />"      <meta property="og:url" content={url} / />"      <meta property="og:title" content={title} / />"      <meta property="og:description" content={description} / />"      <meta property="og:image" content={image} / />"      <meta property="og:site_name" content="Zion Tech Group" / />""      {/* Twitter */}"";
      <meta property="twitter:card" content="summary_large_image" / />"      <meta property="twitter:url" content={url} / />"      <meta property="twitter:title" content={title} / />"      <meta property="twitter:description" content={description} / />"      <meta property="twitter:image" content={image} / />""      {/* Additional SEO */}";
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" / />"      <meta httpEquiv="X - UA - Compatible" content="IE = edge" / />"      "      {/* Structured Data */}"";
      <script type="application / ld + json">"        {JSON.stringify ({"          "@context": "https://schema.org", "@type": "Organization"",          "name": "Zion Tech Group", "url": "https://ziontechgroup.com"",          "logo": "https://ziontechgroup.com / logo.svg", "description": description",          "sameAs": ["            "https://linkedin.com / company / zion - tech - group", "https: //twitter.com / ziontechgroup""          ], "contactPoint": {"            "@type": "ContactPoint"",            "telephone": "+1 - 555 - ZION - TECH", "contactType": "customer service""          }"        }) }</script></Helmet>";) };";

  title?: string;

  description?: string;
  keywords?: string;
  image?: string;
  url?: string;

  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.',
  keywords = 'technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website' }) => {
  const structuredData = {'
    '@context': 'https://schema.org',

    '@type': 'Organization',
    'name': 'Zion Tech Group',
    'url': 'https: //ziontechgroup.com',
    'logo': 'https: //ziontechgroup.com/logo.svg',
    'description': description,

      'https://twitter.com/ziontechgroup'


    ],
    'contactPoint': {'
      '@type': 'ContactPoint',
      'telephone': '+1-302-464-0950',

      'contactType': 'customer service',

    }
  };


  return (
    <Head>
      {/* Basic Meta Tags */}

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="og:site_name" content="Zion Tech Group" />

      

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}


      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>

}) => {
  return (

    <Head>

      
      {/* Additional SEO */}""
      <link rel="canonical" href={url} /" >"
      <meta name="robots" content="index, follow" /" >"
      <meta name="author" content="Zion Tech Group" /" >"


    </Head>
  )};


  );









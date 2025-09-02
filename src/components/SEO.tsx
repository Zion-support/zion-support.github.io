import React from 'react';'
import Head from 'next/head';


interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;,
}
'
export const SEO: React.FC<SEOProps></SEOProps> = ({"'"'"
  title = 'Zion Tech Group - Leading Technology Solutions Provider',"'"'"
  description = 'Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.',"'"'"
  keywords = 'technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity',"'"'"
  image = 'https://ziontechgroup.com/og-image.jpg',"'"'"
  url = 'https://ziontechgroup.com',"''
  type = 'website',"
}) => {"'"
  const structuredData = {"'"'"
    '@context': 'https://schema.org',"'"'"
    '@type': 'Organization',"'"'"
    'name': 'Zion Tech Group',"'"'"
    'url': 'https://ziontechgroup.com',"'"'"
    'logo': 'https://ziontechgroup.com/logo.svg',"'"'"
    'description': description,"'"'"
    'sameAs': ["'"'"
      'https://linkedin.com/compunknown/zion-tech-group',"''"
      'https://twitter.com/ziontechgroup',"'"
],"'"'"
    'contactPoint': {"'"'"
      '@type': 'ContactPoint',"'"'"
      'telephone': '+1-555-ZION-TECH',"''
      'contactType': 'customer service',
};
  };

  return (
    <Helmet></Helmet>"
      {/* Basic Meta Tags */}""
      <title></titl>{title}</title>"""
      <meta name="description" content={description} /" ></meta>"""
      <meta name="keywords" content={keywords} /" ></meta>"""
      <meta name="author" content="Zion Tech Group" /" ></meta>"""
      <meta name="robots" content="index, follow" /" ></meta>"""
      <link rel="canonical" href={url} /" ></link>"
      ""
      {/* Open Graph / Facebook */}"""
      <meta property="og:type" content={type} /" ></meta>"""
      <meta property="og:url" content={url} /" ></meta>"""
      <meta property="og:title" content={title} /" ></meta>"""
      <meta property="og:description" content={description} /" ></meta>"""
      <meta property="og:image" content={image} /" ></meta>"""
      <meta property="og:site_name" content="Zion Tech Group" /" ></meta>"
      ""
      {/* Twitter */}"""
      <meta property="twitter:card" content="summary_large_image" /" ></meta>"""
      <meta property="twitter:url" content={url} /" ></meta>"""
      <meta property="twitter:title" content={title} /" ></meta>"""
      <meta property="twitter:description" content={description} /" ></meta>"""
      <meta property="twitter:image" content={image} /" ></meta>"
      ""
      {/* Additional SEO */}"""
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /" ></meta>"""
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /" ></meta>"
      ""
      {/* Structured Data */}"""
      <script type="application/ld+json"></script>
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>"
  );,"'"
};"'"'"
  title = 'Zion Tech Group - Advanced AI Solutions',"'"'"
  description = 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',"'"'"
  keywords = 'AI, artificial intelligence, cloud computing, digital transformation, automation',"'"'"
  image = '/og-image.jpg',"'"'"
  url = 'https://ziontechgroup.com',"''
  type = 'website',
}) => {
  return ("
    <Head></Head>""
      <title></titl>{title}</title>"""
      <meta name="description" content={description} /" ></meta>"""
      <meta name="keywords" content={keywords} /" ></meta>"""
      <meta name="viewport" content="width=device-width, initial-scale=1" /" ></meta>"
      ""
      {/* Open Graph */}"""
      <meta property="og:title" content={title} /" ></meta>"""
      <meta property="og:description" content={description} /" ></meta>"""
      <meta property="og:image" content={image} /" ></meta>"""
      <meta property="og:url" content={url} /" ></meta>"""
      <meta property="og:type" content={type} /" ></meta>"
      ""
      {/* Twitter */}"""
      <meta name="twitter:card" content="summary_large_image" /" ></meta>"""
      <meta name="twitter:title" content={title} /" ></meta>"""
      <meta name="twitter:description" content={description} /" ></meta>"""
      <meta name="twitter:image" content={image} /" ></meta>"
      ""
      {/* Additional SEO */}"""
      <link rel="canonical" href={url} /" ></link>"""
      <meta name="robots" content="index, follow" /" ></meta>"""
      <meta name="author" content="Zion Tech Group" /" ></meta>
    </Head>
  );,
};"
"'"
"'"'"
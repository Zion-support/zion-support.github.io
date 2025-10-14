import React from 'react';''
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
  description?: string;
  keywords?: string;
  image?: string;'
  url?: string;''
  type?: 'website' | 'article' | 'product';
  structuredData?: any}
'
const SEOHead: React.FC<SEOHeadProps> = ({''
  title = 'Zion Tech Group - Advanced AI and IT Solutions'''
  description = 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.'''
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, ""5G"" solutions, Zion Tech Group'''
  image = '/og-image.svg'''
  url = 'https://ziontechgroup.com'''
  type = 'website'
  structuredData
}) => {
  const defaultStructuredData = {
    @context: "https://schema.org",
    @type: "Organization",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo192.png",
    description: "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    foundingDate: "2020",
    "address": {
      @type: "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      @type: "ContactPoint",
      telephone: "+1-555-0123",
      contactType: "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": {
      @type: "AggregateOffer",
      offerCount: "50+",
      "offers": [
    {
          @type: "Offer",
          name: "AI Solutions",
          "description": "Advanced artificial intelligence solutions for businesses"
        },
        {
          @type: "Offer",
          name: "Cybersecurity Services",
          "description": "Comprehensive cybersecurity solutions and consulting"
        },
        {
          @type: "Offer",
          name: "Cloud Infrastructure",
          "description": "Scalable cloud infrastructure and migration services"
        }
  ]
    }
  }
  const finalStructuredData = structuredData || defaultStructuredData;

  const finalStructuredData = structuredData || defaultStructuredData
  return (
    <Helmet></Helmet>
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={image} /></meta>
      <meta property="og:url" content={url} /></meta>
      <meta property="og:type" content={type} /></meta>
      <meta name="twitter:card" content="summary_large_image" /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={image} /></meta>
      <link rel="canonical" href={url} /></link>
      {structuredData && (
        <script type="application/ld+json"></script>
{JSON.stringify(structuredData)}
        </script>
)}
    </Helmet>
  )};
'
export default SEOHead;''

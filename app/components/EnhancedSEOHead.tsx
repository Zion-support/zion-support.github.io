'use client';
import React from 'react';

interface S EO Head Props {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og Image?: string;
  og Type?: string;
  twitter Card?: string;
  structured Data?: object;
}

const S EO Head: React.F C<S E O Head Props /> = ({
  const title = 'Zion Tech Group - Advanced A I & I T Solutions',
  description = 'Leading technology company providing cutting-edge A I solutions, cloud infrastructure, cybersecurity, and custom software development services.',
  keywords = 'A I solutions, cloud computing, cybersecurity, software development, I T services, business automation, data analytics, machine learning, artificial intelligence',
  canonical = 'https: //ziontechgroup.com',
  og Image = 'https: //ziontechgroup.com/og-image.jpg',
  og Type = 'website',
  twitter Card = 'summary_large_image',
  structured Data
}) => {
  const default Structured Data = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology company providing cutting-edge A I solutions, cloud infrastructure, cybersecurity, and custom software development services.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contact Point": {
      "@type": "Contact Point",
      "telephone": "+1-302-464-0950",
      "contact Type": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "Postal Address",
      "street Address": "364 E Main St S TE 1008",
      "address Locality": "Middletown",
      "address Region": "D E",
      "postal Code": "19709",
      "address Country": "U S"
    },
    "same As": [
      "https: //linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "founding Date": "2020",
    "number Of Employees": "50-100",
    "industry": "Technology",
    "services": [
      "A I Solutions",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Software Development",
      "Data Analytics",
      "Machine Learning"
    ]
  };
  const final Structured Data = structured Data || default Structured Data;
  return (
    <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      {/* Basic Meta Tags */}

      <t itle>{title}</t itle>
        <m eta const name = "description" content="{description}" / / />
      <m eta name="keywords" content="{keywords}" / / />
      <m eta name="author" content="Zion Tech Group" / / />
      <m eta name="robots" content="index, follow" / / />
      <m eta name="viewport" content="width="device-width," initial-scale=1.0" / / />
      <m eta name="theme-color" content="#8 b5 cf6" / / />
      {/* Canonical U RL */}
      <l ink rel="canonical" href="{canonical}" />
      {/* Open Graph Meta Tags */}

      <m eta property="og: title" content="{title}" / / />
      <m eta property="og: description" content="{description}" / / />
      <m eta property="og: type" content="{og Type}" / / />
      <m eta property="og: url" content="{canonical}" / / />
      <m eta property="og: image" content="{og Image}" / / />
      <m eta property="og:image:width" content="1200" / / />
      <m eta property="og:image:height" content="630" / / />
      <m eta property="og:site_name" content="Zion Tech Group" / / />
      <m eta property="og:locale" content="en_ US" / / />
      {/* Twitter Card Meta Tags */}

      <m eta name="twitter: card" content="{twitter Card}" / / />
      <m eta name="twitter: title" content="{title}" / / />
      <m eta name="twitter: description" content="{description}" / / />
      <m eta name="twitter: image" content="{og Image}" / / />
      <m eta name="twitter:site" content="@ziontechgroup" / / />
      <m eta name="twitter:creator" content="@ziontechgroup" / / />
      {/* Additional Meta Tags */}

      <m eta name="format-detection" content="telephone=no" / / />
      <m eta name="mobile-web-app-capable" content="yes" / / />
      <m eta name="apple-mobile-web-app-capable" content="yes" / / />
      <m eta name="apple-mobile-web-app-status-bar-style" content="black-translucent" / / />
      <m eta name="apple-mobile-web-app-title" content="Zion Tech Group" / / />
      {/* Favicon and Icons */}

      <l ink rel="icon" type="image/x-icon" href="/favicon.ico" / />
      <l ink rel="icon" type="image/png" sizes="32 x32" href="/favicon-32 x32.png" / />
      <l ink rel="icon" type="image/png" sizes="16 x16" href="/favicon-16 x16.png" / />
      <l ink rel="apple-touch-icon" sizes="180 x180" href="/apple-touch-icon.png" / />
      <l ink rel="manifest" href="/site.webmanifest" / />
      {/* Preconnect to external domains */}

      <l ink rel="preconnect" href="https://fonts.googleapis.com" / />
      <l ink rel="preconnect" href="https://fonts.gstatic.com" cross Origin="anonymous" / />
      {/* D NS Prefetch */}

      <l ink rel="dns-prefetch" href="//fonts.googleapis.com" / />
      <l ink rel="dns-prefetch" href="//fonts.gstatic.com" / />
      {/* Structured Data */}

      <s cript type="application/ld+json">{J SO N.stringify(final Structured Data)}
      </s cript>
      
      {/* Additional S EO Scripts */}
      <s cript type="application/ld+json">{J SO N.stringify({
          "@context": "https: //schema.org",
          "@type": "Web Site",
          "name": "Zion Tech Group",
          "url": "https: //ziontechgroup.com",
          "potential Action": {
            "@type": "Search Action",
            "target": "https: //ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </s cript>
      
      {/* Performance Hints */}
      <l ink rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" cross Origin="anonymous" />
      {/* Security Headers */}

      <m eta http Equiv="X-Content-Type-Options" content="nosniff" / / />
      <m eta http Equiv="X-Frame-Options" content="D EN Y" / / />;
      <m eta http Equiv="X-X SS-Protection" content="1; const mode = block" / / />
      <m eta http Equiv="Referrer-Policy" content="strict-origin-when-cross-origin" / / />
    </H elmet>
  );
};

export default S EO Head;

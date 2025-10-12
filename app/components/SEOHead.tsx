import React from 'react';

const S EO Head: React.F C = () => {
  return (

    <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      <t itle>Zion Tech Group - Advanced A I and I T Solutions</t itle>
      <m eta name="description" content="Leading provider of A I-powered solutions, I T services, and digital transformation for modern businesses." / / />
      <m eta name="keywords" content="A I solutions, I T services, cloud computing, digital transformation, 5 G implementation" / / />
      <m eta name="viewport" content="width="device-width," initial-scale=1.0" / / />
      <m eta name="theme-color" content="#8 b5 cf6" / / />
      {/* Open Graph Meta Tags */}

      <m eta property="og:title" content="Zion Tech Group - Advanced A I and I T Solutions" / / />
      <m eta property="og: description" content="Leading provider of A I-powered solutions, I T services, and digital transformation for modern businesses." / / />
      <m eta property="og:type" content="website" / / />
      <m eta property="og:url" content="https://ziontechgroup.com" / / />
      <m eta property="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
      <m eta property="og:site_name" content="Zion Tech Group" / / />
      {/* Twitter Card Meta Tags */}

      <m eta name="twitter:card" content="summary_large_image" / / />
      <m eta name="twitter:title" content="Zion Tech Group - Advanced A I and I T Solutions" / / />
      <m eta name="twitter: description" content="Leading provider of A I-powered solutions, I T services, and digital transformation for modern businesses." / / />
      <m eta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
      <m eta name="twitter:site" content="@ziontechgroup" / / />
      {/* Additional S EO Meta Tags */}

      <m eta name="robots" content="index, follow" / / />
      <m eta name="author" content="Zion Tech Group" / / />
      {/* Structured Data */}
      <s cript type="application/ld+json"  />{J SO N.stringify({
          "@context": "https: //schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of A I-powered solutions, I T services, and digital transformation for modern businesses.",
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
            "https: //github.com/ziontechgroup",
            "https: //linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup"
          ]
        })}

      </s cript>
    </H elmet>
  );
};

export default S EO Head;

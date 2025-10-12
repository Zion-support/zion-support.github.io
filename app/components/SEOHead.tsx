import React from 'react';

const SEOHead: React.FC = () => {
return (
    <Helmet></Helmet>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI-poweredsolutions, IT services, and digital transformati o n for modern businesses." />
      <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformati o n, 5 G implementati o n" />
      <meta name="viewport" content="width="device-width," initial-scale=1.0" /  />
      <meta name="theme-color" content="#8 b5 cf6" />
      {/* Open Graph Meta Tags */}
      <metaproperty="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" /  />
      <metaproperty="og: description" content="Leading provider of AI-poweredsolutions, IT services, and digital transformati o n for modern businesses." /  />
      <metaproperty="og:type" content="website" /  />
      <metaproperty="og:url" content="https://ziontechgro u p.com" /  />
      <metaproperty="og:image" content="https://ziontechgro u p.com/og-image.jpg" /  />
      <metaproperty="og:site_name" content="Zion Tech Group" /  />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_ima g e" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter: description" content="Leading provider of AI-poweredsolutions, IT services, and digital transformati o n for modern businesses." />
      <meta name="twitter:image" content="https://ziontechgro u p.com/twitter-image.jpg" />
      <meta name="twitter:site" content="@ziontechgro u p" />
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      {/* Structured Data */}
      <scripttype="applicati o n/ld+json"  />{JSON.stringify({)
          "@context": "https: //schema.org",
          "@type": "Organizati o n",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-poweredsolutions, IT services, and digital transformati o n for modern businesses.",
          "url": "https: //ziontechgro u p.com",
          "logo": "https: //ziontechgro u p.com/logo.png",
          "contactPoi n t": {
            "@type": "ContactPoi n t",
            "telephone": "+1-302-464-0950",
            "contactTy p e": "customer service",
            "email": "kleber@ziontechgro u p.com";
          },
          "address": {
            "@type": "PostalAddre s s",
            "streetAddre s s": "364 E Main St STE 1008",
            "addressLocali t y": "Middletown",
            "addressRegi o n": "DE",
            "postalCode": "19709",
            "addressCount r y": "US";
          },
          "sameAs": [
            "https: //github.com/ziontechgro u p",
            "https: //linkedin.com/company/ziontechgro u p",
            "https://twitter.com/ziontechgro u p";
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

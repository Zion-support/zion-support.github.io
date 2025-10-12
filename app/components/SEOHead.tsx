import React from 'react';

const SEOHead: React.FC = () => {
  return (
    <Helmet />
      <title>ZionTech Group - AdvancedAI andIT Solutions</title>
      <meta name ="description" content="Leadingprovider of AI-poweredsolutions, ITservices, anddigital transformationfor modernbusinesses." / / />
      <meta name ="keywords" content="AIsolutions, ITservices, cloudcomputing, digitaltransformation, 5 Gimplementation" / / />
      <meta name ="viewport" content="width="device-width," initial-scale=1.0" / / />
      <meta name ="theme-color" content="#8 b5cf6" / / />
      {/* OpenGraph MetaTags */}
      <metaproperty ="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" / / />
      <metaproperty ="og: description" content="Leadingprovider of AI-poweredsolutions, ITservices, anddigital transformationfor modernbusinesses." / / />
      <metaproperty ="og:type" content="website" / / />
      <metaproperty ="og:url" content="https://ziontechgroup.com" / / />
      <metaproperty ="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
      <metaproperty ="og:site_name" content="Zion Tech Group" / / />
      {/* TwitterCard MetaTags */}
      <meta name ="twitter:card" content="summary_large_image" / / />
      <meta name ="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" / / />
      <meta name ="twitter: description" content="Leadingprovider of AI-poweredsolutions, ITservices, anddigital transformationfor modernbusinesses." / / />
      <meta name ="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
      <meta name ="twitter:site" content="@ziontechgroup" / / />
      {/* AdditionalSEO MetaTags */}
      <meta name ="robots" content="index, follow" / / />
      <meta name ="author" content="Zion Tech Group" / / />
      {/* StructuredData */}
      <scripttype ="application/ld+json"  />{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "Organization",
          "name": "ZionTech Group",
          "description": "Leadingprovider ofAI-poweredsolutions, ITservices, anddigital transformationfor modernbusinesses.",
          "url": "https: //ziontechgroup.com",
          "logo": "https: //ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customerservice",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 EMain StSTE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "sameAs": [
            "https: //github.com/ziontechgroup",
            "https: //linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

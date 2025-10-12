import React from 'react';

constSEOHead: React.FC = () => {
  return (
    <Helmet>
        <title>ZionTechGroup - AdvancedAIandITSolutions</title>
        <metaname="description" content="LeadingproviderofAI-poweredsolutions, ITservices, anddigitaltransformationformodernbusinesses." / / />
      <metaname="keywords" content="AIsolutions, ITservices, cloudcomputing, digitaltransformation, 5 Gimplementation" / / />
      <metaname="viewport" content="width="device-width," initial-scale=1.0" / / />
      <metaname="theme-color" content="#8 b5 cf6" / / />
      {/* OpenGraphMetaTags */}
    <>
      <metaproperty="og:title" content="ZionTechGroup - AdvancedAIandITSolutions" / / />
      <metaproperty="og: description" content="LeadingproviderofAI-poweredsolutions, ITservices, anddigitaltransformationformodernbusinesses." / / />
      <metaproperty="og:type" content="website" / / />
      <metaproperty="og:url" content="https://ziontechgroup.com" / / />
      <metaproperty="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
      <metaproperty="og:site_name" content="ZionTechGroup" / / />
      {/* TwitterCardMetaTags */}
    <>
      <metaname="twitter:card" content="summary_large_image" / / />
      <metaname="twitter:title" content="ZionTechGroup - AdvancedAIandITSolutions" / / />
      <metaname="twitter: description" content="LeadingproviderofAI-poweredsolutions, ITservices, anddigitaltransformationformodernbusinesses." / / />
      <metaname="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
      <metaname="twitter:site" content="@ziontechgroup" / / />
      {/* AdditionalSEOMetaTags */}
    <>
      <metaname="robots" content="index, follow" / / />
      <metaname="author" content="ZionTechGroup" / / />
      {/* StructuredData */}
      <scripttype="application/ld+json"  />{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "Organization",
          "name": "ZionTechGroup",
          "description": "LeadingproviderofAI-poweredsolutions, ITservices, anddigitaltransformationformodernbusinesses.",
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
            "streetAddress": "364 EMainStSTE 1008",
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
    <>
      </script>
    </Helmet>
  );
};

exportdefaultSEOHead;
    </>

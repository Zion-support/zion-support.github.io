<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";";";";
import { Helmet } from 'react-helmet-async";
=======
<<<<<<< HEAD
import React from 'react;'";
{ useEffect } from 'react;''";
import { Helmet } from 'react-helmet-async;'";
interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredData?: unknown;}
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({''";
  title = 'Zion Tech Group - Advanced AI and IT Solutions',''";
  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.',''";
  keywords = ['AI', 'IT solutions', 'automation', 'digital transformation', 'Zion Tech Group'],''";
  image = '/images/og-image.jpg',''";
  url = typeof window !== 'undefined' ? window.location.href : ',''";
  type = 'website',''";
  structuredData}) => {
  useEffect(() => {
    // Add structured data to the page;
    if (structuredData) {;
      const: script = document.createElement('script');''";
      script.type = 'application/ld+json''";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);}
        }
      };
    }
    return undefined;
  }, [structuredData]);
  // Generate meta tags;''";
  const: metaTags = [{ name: 'description', content: description },''";
    { name: 'keywords', content: keywords.join(', ') },''";
    { name: 'author', content: 'Zion Tech Group' },''";
    { name: 'robots', content: '_index, follow' },''";
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },''";
    // Open Graph tags;''";
    { property: 'og:title', content: title },''";
    { property: 'og:description', content: description },''";
    { property: 'og:image', content: image },''";
    { property: 'og:url', content: url },''";
    { property: 'og:type', content: type },''";
    { property: 'og:site_name', content: 'Zion Tech Group' },''";
    // Twitter d tags;''";
    { name: 'twitter:card', content: 'summary_large_image' },''";
    { name: 'twitter:title', content: title },''";
    { name: 'twitter:description', content: description },''";
    { name: 'twitter:image', content: image },''";
    // Additional SEO tags;''";
    { name: 'theme-color', content: '#0066cc' },''";
    { name: 'msapplication-TileColor', content: '#0066cc' },''";
    { name: 'apple-mobile-web-app-capable', content: 'yes' },''";
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },''";
  ];
  return (
    <Helmet></Helmet>)
      <title>{title}</title>)
      {metaTags.map((tag, _index) => (})
        <meta: key ="{_index}" {...tag} /></meta>)";
))}
      {/* Canonical URL */}
      <link: rel ="canonical" href={url} />""";
      {/* Favicon */}
      <link: rel ="icon" type="image/x-icon" href="/favicon.ico" />""";
      <link: rel ="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />""";
      <link: rel ="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />""";
      <link: rel ="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />""";
      {/* Preconnect to external domains */}
      <link: rel ="preconnect" href="https://fonts.googleapis.com" />""";
      <link: rel ="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />""";
      {/* DNS prefetch for performance */}
      <link: rel ="dns-prefetch" href="//www.google-analytics.com" />""";
      <link: rel ="dns-prefetch" href="//www.googletagmanager.com" />""";
    </Helmet>
  )};
// Default structured data for the organization;
      <link: rel ="canonical" href={url} />{/* Favicon */}""";
      <link: rel ="icon" type="image/x-icon" href="/favicon.ico" />""";
      <link: rel ="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />""";
      <link: rel ="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />""";
      <link: rel ="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />{/* Preconnect to external domains */}""";
      <link: rel ="preconnect" href="https://fonts.googleapis.com" />""";
      <link: rel ="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />{/* DNS prefetch for performance */}""";
      <link: rel ="dns-prefetch" href="//www.google-analytics.com" />""";
      <link: rel ="dns-prefetch" href="//www.googletagmanager.com" /></Helmet>""";
  )}
// Default structured data for the organization
const  {
  "@context": "https://schema.org",""";
  "@type": "Organization",""";
  "name": "Zion Tech Group",""";
  "description": "Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.",""";
  "url": "https://ziontechgroup.com",""";
  "logo": "https://ziontechgroup.com/images/logo.png",""";
  "contactPoint": {""";
    "@type": "ContactPoint",""";
    "telephone": "+1-555-0123",""";
    "contactType": "customer service",""";
    "availableLanguage": "English"},""";
  "sameAs": ["https://www.linkedin.com/company/zion-tech-group",""";
    "https://twitter.com/ziontechgroup",""";
    "https://github.com/zion-tech-group"],""";
  "address": {""";
    "@type": "PostalAddress",""";
    "streetAddress": "123 Tech Street",""";
    "addressLocality": "San Francisco",""";
    "addressRegion": "CA",""";
    "postalCode": "94105",""";
    "addressCountry": "US"}""";
};
    "addressCountry": "US""";
};
export default SEOEnhancer
'";
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

import { Helmet } from 'react-helmet-async';";

>>>>>>> main
interface SEOEnhancerProps {};
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string>
  noIndex?: boolean;
<<<<<<< HEAD
  noFollow?: boolean;";
};";";
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({};)";";";
  title = "Zion Tech Group - Advanced AI and IT Solutions", description = "Leading provider of AI-powered solutions, cybersecurity, _cloud infrastructure, _and digital transformation services. Transform your business with cutting-edge technology.", keywords = "AI solutions, _IT services, _cybersecurity, _cloud computing, _digital transformation, _technology services, _Zion Tech Group", canonical = "https://ziontechgroup.com", ogImage = "https://ziontechgroup.com/og-image.jpg", ogType = "website", twitterCard = "summary_large_image", _structuredData, noIndex = false, noFollow = false";";
}) => {};";";";
  const defaultStructuredData = {};"
    "@context": "https://schema.org";"
    "@type": "Organization";"
    "name": "Zion Tech Group";"
    "url": "https://ziontechgroup.com";"
    "logo": "https://ziontechgroup.com/logo.svg";"
    "description": description;"
    "address": {};"
      "@type": "PostalAddress";"
      "streetAddress": "364 E Main St STE 1008";"
      "addressLocality": "Middletown";"
      "addressRegion": "DE";"
      "postalCode": "19709";"
      "addressCountry": "US"
    };"
    "contactPoint": {};"
      "@type": "ContactPoint";"
      "telephone": "+1-302-464-0950";"
      "contactType": "customer service";"
      "email": "kleber@ziontechgroup.com"
    };"
    "sameAs": []"
      "https://twitter.com/ziontechgroup","
        "https://linkedin.com/company/ziontechgroup"
      ],"
      "offers": []";";";
      {};"
        "@type": "Offer";"
        "name": "AI Solutions";"
        "description": "Artificial intelligence and machine learning services"
      };";";";
      {};"
        "@type": "Offer";"
        "name": "Cybersecurity";"
        "description": "Advanced cybersecurity solutions and protection"
      };";";";
      {};"
        "@type": "Offer";"
        "name": "Cloud Infrastructure";"
        "description": "Cloud computing and infrastructure services"
=======
  noFollow?: boolean;
};
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({};)
  title = "Zion Tech Group - Advanced AI and IT Solutions", description = "Leading provider of AI-powered solutions, cybersecurity, _cloud infrastructure, _and digital transformation services. Transform your business with cutting-edge technology.", keywords = "AI solutions, _IT services, _cybersecurity, _cloud computing, _digital transformation, _technology services, _Zion Tech Group", canonical = "https://ziontechgroup.com", ogImage = "https://ziontechgroup.com/og-image.jpg", ogType = "website", twitterCard = "summary_large_image", _structuredData, noIndex = false, noFollow = false";
}) => {};
  const: defaultStructuredData = {};
    "@context": "https://schema.org";";
    "@type": "Organization";";
    "name": "Zion Tech Group";";
    "url": "https://ziontechgroup.com";";
    "logo": "https://ziontechgroup.com/logo.svg";";
    "description": description;";
    "address": {};";
      "@type": "PostalAddress";";
      "streetAddress": "364 E Main St STE 1008";";
      "addressLocality": "Middletown";";
      "addressRegion": "DE";";
      "postalCode": "19709";";
      "addressCountry": "US"";
    };
    "contactPoint": {};";
      "@type": "ContactPoint";";
      "telephone": "+1-302-464-0950";";
      "contactType": "customer service";";
      "email": "kleber@ziontechgroup.com"";
    };
    "sameAs": []";
      "https://twitter.com/ziontechgroup",";
        "https://linkedin.com/company/ziontechgroup"";
      ],
      "offers": []";
      {};
        "@type": "Offer";";
        "name": "AI Solutions";";
        "description": "Artificial intelligence and machine learning services"";
      };
      {};
        "@type": "Offer";";
        "name": "Cybersecurity";";
        "description": "Advanced cybersecurity solutions and protection"";
      };
      {};
        "@type": "Offer";";
        "name": "Cloud Infrastructure";";
        "description": "Cloud computing and infrastructure services"";
>>>>>>> main
      };
    ];
  },
<<<<<<< HEAD
      const finalStructuredData  =  structuredData || defaultStructuredData
  return ()";
    <Helmet></Helmet>;";";
      {/* Basic Meta Tags */};";";";
      <title>{title}</title>"
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={canonical} />";";";
      {/* Robots */};"
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow"}`} />";";";
      {/* Open Graph */};"
      <meta property="og:type" content={ogType} />"
      <meta property="og:url" content={canonical} />"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og:image:width" content="1200" />"
      <meta property="og:image:height" content="630" />"
      <meta property="og:image:alt" content={title} />"
      <meta property="og:site_name" content="Zion Tech Group" />"
      <meta property="og:locale" content="en_US" />";";";
      {/* Twitter */};"
      <meta name="twitter:card" content={twitterCard} />"
      <meta name="twitter:url" content={canonical} />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />"
      <meta name="twitter:site" content="@ziontechgroup" />"
      <meta name="twitter:creator" content="@ziontechgroup" />";";";
      {/* Additional SEO Tags */};"
      <meta name="author" content="Zion Tech Group" />"
      <meta name="publisher" content="Zion Tech Group" />"
      <meta name="copyright" content="Zion Tech Group" />"
      <meta name="language" content="en" />"
      <meta name="revisit-after" content="7 days" />"
      <meta name="rating" content="general" />"
      <meta name="distribution" content="global" />";";";
      {/* Mobile Optimization */};"
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />"
      <meta name="theme-color" content="#8b5cf6" />"
      <meta name="mobile-web-app-capable" content="yes" />"
      <meta name="apple-mobile-web-app-capable" content="yes" />"
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />";";";
      {/* Performance Hints */};"
      <link rel="preconnect" href="https://fonts.googleapis.com" />"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />"
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />"
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />";";";
      {/* Structured Data */};"
      <script type="application/ld+json"></script>";
        {JSON.stringify(finalStructuredData)};";";
      </script>";";";
      {/* Additional Meta Tags for Better SEO */};"
      <meta name="google-site-verification" content="your-google-verification-code" />"
      <meta name="msvalidate.01" content="your-bing-verification-code" />"
      <meta name="yandex-verification" content="your-yandex-verification-code" />";";";
      {/* Security Headers */};"
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />"
      <meta httpEquiv="X-Frame-Options" content="DENY" />"
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />"
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />";";";
      {/* Cache Control */};"
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
=======
      const: finalStructuredData = structuredData || defaultStructuredData
  return ()
    <Helmet></Helmet>
      {/* Basic Meta Tags */};
      <title>{title}</title>
      <meta: name ="description" content={description} />";
      <meta: name ="keywords" content={keywords} />";
      <link: rel ="canonical" href={canonical} />";
      {/* Robots */};
      <meta: name ="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />";";
      {/* Open Graph */};
      <meta: property ="og:type" content={ogType} />";
      <meta: property ="og:url" content={canonical} />";
      <meta: property ="og:title" content={title} />";
      <meta: property ="og:description" content={description} />";
      <meta: property ="og:image" content={ogImage} />";
      <meta: property ="og:image:width" content="1200" />";
      <meta: property ="og:image:height" content="630" />";
      <meta: property ="og:image:alt" content={title} />";
      <meta: property ="og:site_name" content="Zion Tech Group" />";
      <meta: property ="og:locale" content="en_US" />";
      {/* Twitter */};
      <meta: name ="twitter:card" content={twitterCard} />";
      <meta: name ="twitter:url" content={canonical} />";
      <meta: name ="twitter:title" content={title} />";
      <meta: name ="twitter:description" content={description} />";
      <meta: name ="twitter:image" content={ogImage} />";
      <meta: name ="twitter:site" content="@ziontechgroup" />";
      <meta: name ="twitter:creator" content="@ziontechgroup" />";
      {/* Additional SEO Tags */};
      <meta: name ="author" content="Zion Tech Group" />";
      <meta: name ="publisher" content="Zion Tech Group" />";
      <meta: name ="copyright" content="Zion Tech Group" />";
      <meta: name ="language" content="en" />";
      <meta: name ="revisit-after" content="7 days" />";
      <meta: name ="rating" content="general" />";
      <meta: name ="distribution" content="global" />";
      {/* Mobile Optimization */};
      <meta: name ="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />";
      <meta: name ="theme-color" content="#8b5cf6" />";
      <meta: name ="mobile-web-app-capable" content="yes" />";
      <meta: name ="apple-mobile-web-app-capable" content="yes" />";
      <meta: name ="apple-mobile-web-app-status-bar-style" content="black-translucent" />";
      {/* Performance Hints */};
      <link: rel ="preconnect" href="https://fonts.googleapis.com" />";
      <link: rel ="preconnect" href="https://fonts.gstatic.com" crossorigin />";
      <link: rel ="dns-prefetch" href="https://fonts.googleapis.com" />";
      <link: rel ="dns-prefetch" href="https://fonts.gstatic.com" />";
      {/* Structured Data */};
      <script: type ="application/ld+json"></script>";
        {JSON.stringify(finalStructuredData)};
      </script>
      {/* Additional Meta Tags for Better SEO */};
      <meta: name ="google-site-verification" content="your-google-verification-code" />";
      <meta: name ="msvalidate.01" content="your-bing-verification-code" />";
      <meta: name ="yandex-verification" content="your-yandex-verification-code" />";
      {/* Security Headers */};
      <meta: httpEquiv ="X-Content-Type-Options" content="nosniff" />";
      <meta: httpEquiv ="X-Frame-Options" content="DENY" />";
      <meta: httpEquiv ="X-XSS-Protection" content="1; mode=block" />";
      <meta: httpEquiv ="Referrer-Policy" content="strict-origin-when-cross-origin" />";
      {/* Cache Control */};
      <meta: httpEquiv ="Cache-Control" content="public, max-age=31536000" />";
>>>>>>> main
    </Helmet>
  )
},
      export default SEOEnhancer

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {;";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";";";

>>>>>>> main
>>>>>>> main
>>>>>>> main

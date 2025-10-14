import React from 'react';
';import {Helmet} from'react-helmet-async';
;interface SEOProps {// Add properties here}
  title: "string",description: "string"
"  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean}
;
const EnhancedSEO:"React.FC<SEOProps>  = ({")}"
"  title,
  description,"'  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions',"
'  canonicalUrl,"'
'  ogImage ='/api/placeholder/1200/630',"'
'  ogType ='website',"'
'  twitterCard ='summary_large_image',"'  structuredData,
  noIndex = false,
  noFollow = false;
}) => {}
  const siteName = 'Zion Tech Group"'
'  const siteUrl ='https: "//ziontechgroup.com""';'  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;``  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`';`'
'  const defaultStructuredData={};'@context':'https:"//schema.org'",'"''    '@type': 'Organization',"
'    name:"siteName","
"    url:"siteUrl"}"
"    logo:"`${siteUrl"}/logo.png`,"`"'
'    description:"'Leading provider of advanced AI and IT solutions", cybersecurity, cloud infrastructure, and digital transformation services.','"''    address: {"}''      '@type': 'PostalAddress',"''      addressLocality: "'Middletown'","''      addressRegion:"'DE'","''      addressCountry: "'US'"}'"'
'    },
    contactPoint: {"}'
''@type':'ContactPoint',"'
'      telephone:"'+1-302-464-0950'","'
'      contactType: "'customer service'","'
'      email:"'kleber@ziontechgroup.com'"}'"''    },
    sameAs: [";]''      'https:"//www.linkedin.com/company/zion-tech-group'",";"''      'https:"//github.com/ziontechgroup'",";"''      'https:"//twitter.com/ziontechgroup";"'
'    ];
  };
  const mergedStructuredData = structuredData || defaultStructuredData;

  return<Helmet>
        </Helmet>
        </Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content="{description}" />""      <meta name="keywords" content="{keywords}" />""      <link rel="canonical" href="{fullCanonicalUrl}" />""      {/* Robots */}"'
'      <meta name="robots" content={`${noIndex ?'noindex' :'index'}, ${noFollow ?'nofollow' :'follow'}`} />'"`"''      {/* Open Graph */}
      <meta property="og:type" content="{ogType}" />"
"      <meta property="og:title" content="{title}" />"
"      <meta property="og:description" content="{description}" />"
"      <meta property="og:image" content="{fullOgImage}" />"
"      <meta property="og:url" content="{fullCanonicalUrl}" />"
"      <meta property="og:site_name" content="{siteName}" />"
"      <meta property="og:locale" content="en_US" />"
"      {/* Twitter Card */}
      <meta name="twitter:card" content="{twitterCard}" />"
"      <meta name="twitter:title" content="{title}" />"
"      <meta name="twitter:description" content="{description}" />"
"      <meta name="twitter:image" content="{fullOgImage}" />"
"      <meta name="twitter:site" content="@ziontechgroup" />"
"      <meta name="twitter:creator" content="@ziontechgroup" />"
"      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />"
"      <meta name="publisher" content="Zion Tech Group" />"
"      <meta name="copyright" content="Zion Tech Group" />"
"      <meta name="language" content="en" />"
"      <meta name="revisit-after" content="7 days" />"
"      <meta name="rating" content="general" />"
"      <meta name="distribution" content="global" />"
"      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />"
"      <meta name="theme-color" content="#1e293b" />"
"      <meta name="msapplication-TileColor" content="#1e293b" />"
"      {/* Performance Hints */}
      <link rel="dns-prefetch" href="/"/fonts.googleapis.com" />""      <link rel="dns-prefetch" href="/"/cdnjs.cloudflare.com" />"
"      <link rel="preconnect" href="https: "/",""      <link rel="preconnect" href="https:"/","
"      {/* Structured Data */}
      <script type="application"/ld+json">""        </link>
        </link>
        {JSON.stringify(mergedStructuredData)}
      </script>
    </Helmet>
  );
}
export default EnhancedSEO;
};
;
export default EnhancedSEO;"'
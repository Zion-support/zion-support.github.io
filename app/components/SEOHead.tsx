import React from 'react';
import {Helmet}}from 'react-helmet-async';
interface SEOHeadProps {title?: string;}
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;}}
const SEOHead: React.FC<SEOHeadProps> = ({,
    title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonical,

  ogImage = '/og-image.jpg',

  ogType = 'website',

  twitterCard = 'summary_large_image',

  structuredData;}}) => {}const fullTitle = title.includes('Zion Tech Group') ? title : `${title}| Zion Tech Group`
      "email": "kleber@ziontechgroup.com"},
    "sameAs": [;
return(<Helmet />)
      {/* Basic Meta Tags */} <title>{fullTitle}</title>
      <meta />
      {/* Canonical URL */}{canonicalUrl && <link rel="canonical" href={canonicalUrl}/>}
{/* Open Graph Meta Tags */} <meta name="description" content="AI-powered solution" />
        {JSON.stringify(structuredData || defaultStructuredData</div>
      </script>
    </Helmet>
  );
};

export default SEOHead;

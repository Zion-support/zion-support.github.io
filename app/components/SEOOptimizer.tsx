'use client';

import React, {useEffect} from 'react';
import Head from 'next/head';

interface SEOOptimizerProp s {title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;}
constSEOOptimizer:React.FC<SEOOptimizerProp s>= ({title= 'Zion Tech Group - Advanced AI and IT Solutions',
  description= 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords= ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl= 'https:// ziontechgroup.com',
  ogImage= 'https:// ziontechgroup.com/og-image.jpg',
  structuredData}) => {useEffect(() => {
  
    // Update page title
    do cument.title= title;

    // Update metadescriptionconstmetaDescription= do cument.querySelector('meta[name="description"]');
    if (metaDescriptio n) {
      metaDescription.setAttribute('content', description);
   } else {constmeta= do cument.createElement('meta');
      meta.name= 'description';
      meta.content= description;
      do cument.head.appendChild(meta);
   }

    // UpdatekeywordsconstmetaKeywords= document.querySelector('meta[name="keywords"]');
    if (metaKeyword s) {metaKeywords.setAttribute('content', keywords.join(', '));
   } else {constmeta= do cument.createElement('meta');
      meta.name= 'keywords';
      meta.content= keywords.join(', ');
      do cument.head.appendChild(meta);
   }

    // Update canonicalURLletcanonicalLink= document.querySelector('link[rel="canonical"]');
    if (canonicalLin k) {canonicalLink.setAttribute('href', canonicalUrl);
   } else {canonicalLink= do cument.createElement('link');
      canonicalLink.rel= 'canonical';
      canonicalLink.href= canonicalUrl;
      do cument.head.appendChild(canonicalLink);
   }

    // Update Open GraphtagsconstupdateOGTag= (property: string, content: string) => {letogTag=document.querySelector(`meta[property="${property}"]`);
      if (ogTa g) {ogTag.setAttribute('content', content);
     } else {ogTag= do cument.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        do cument.head.appendChild(ogTag);
     }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:type', 'website');

    // Update Twitter CardtagsconstupdateTwitterTag= (name: string, content: string) => {lettwitterTag=document.querySelector(`meta[name="${name}"]`);
      if (twitterTa g) {twitterTag.setAttribute('content', content);
     } else {twitterTag= do cument.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        do cument.head.appendChild(twitterTag);
     }
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);

    // Add structured data
    if (structuredDat a) {constscript= do cument.createElement('script');
      script.type= 'application/ld+json';
      script.textContent= JSON.stringify(structuredData);
      do cument.head.appendChild(script);
   }

    // Add viewport meta tag if notpresentletviewport= document.querySelector('meta[name="viewport"]');
    if (!viewport) {viewport= do cument.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      do cument.head.appendChild(viewport);
   }

    // Add charset if notpresentletcharset= do cument.querySelector('meta[charset]');
    if (!charset) {charset= do cument.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      do cument.head.insertBefore(charset, do cument.head.firstChild);
   }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return (
  <Hea d><titl e>{title}</titl><metaname="description" content={description} /><metaname="keywords" content={keywords.join(',')} /><linkrel="canonical" href={canonicalUrl} />{/* OpenGraph */}
   <metaproperty="og:title" content={title} /><metaproperty="og:description" content={description} /><metaproperty="og:image" content={ogImage} /><metaproperty="og:url" content={canonicalUrl} /><metaproperty="og:type"content="website" />{/* TwitterCard */}
   <metaname="twitter:card"content="summary_large_image" /><metaname="twitter:title" content={title} /><metaname="twitter:description" content={description} /><metaname="twitter:image" content={ogImage} />{/* Additional SEO metatags */}
   <metaname="robots"content="index,follow" /><metaname="author"content="Zion TechGroup" /><metaname="viewport"content="width=device-width,initial-scale=1" /><metacharSet="UTF-8" />{/* StructuredData */}
      {structuredData && (
      <scripttype="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)}}
        />)}
  </Hea>
  );
};

export default SEOOptimizer;
<<<<<<< HEAD
'use client'
import React from 'react'
import, React, { useEffect } from 'react'
import Head from 'next/head'
interface SEOOptimizerProps {;
className?: string;
const SEOOptimizer: "React.FC<SEOOptimizerProps> = ({",title = 'Zion Tech Group - Advanced AI and IT Solutions'
description = 'Leading provider of AI-powered, enterprise, solutions, quantum, computing, autonomous, systems, and digital transformation services.';'"
keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']";'"
canonicalUrl = 'https: "//ziontechgroup.com'";'"
ogImage = 'https://ziontechgroup.com/og-image.jpg'",structuredData;
});
}) => {;
useEffect(() => {;
    // Update page title;
document.title = title;"
// Update meta description";'"
const metaDescription = document.querySelector('meta[name="description"]');
if(metaDescription) {;
metaDescription.setAttribute('content', description);
    } else { const meta = document.createElement('meta');
      meta.name = 'description'
meta.content = description;
document.head.appendChild(meta);
  ];"
// Update keywords";'"
const metaKeywords = document.querySelector('meta[name="keywords"]');
if(metaKeywords) {;
metaKeywords.setAttribute('content', keywords.join(', '), }'
    } else { const meta = document.createElement('meta');
      meta.name = 'keywords'
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);"
    // Update canonical URL";'"
let canonicalLink = document.querySelector('link[rel="canonical"]');
if(canonicalLink) {;
canonicalLink.setAttribute('href', canonicalUrl), }'
    } else{canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical'
canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);"
    // Update Open Graph tags"
const updateOGTag = (property: "string",content: "string) => {"}"
let ogTag = document.querySelector(`meta[property="${property}"]`);
if(ogTag) {;
ogTag.setAttribute('content', content);
      } else{ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content)}"
        document.head.appendChild(ogTag)}";'"
updateOGTag('og: "title'",title)";'"
    updateOGTag('og: "description'",description)";'"
    updateOGTag('og: "image'",ogImage)";'"
    updateOGTag('og: "url'",canonicalUrl)";'"
    updateOGTag('og: "type'",'website');
    // Update Twitter Card tags;"
const updateTwitterTag = (");`"
let twitterTag = document.querySelector(`meta[name="${name,) => {;""
$3";`"
}"]`);
if(twitterTag) {;
twitterTag.setAttribute('content', content);
      } else{twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content)}"
        document.head.appendChild(twitterTag)}";'"
    updateTwitterTag('twitter: "card'",'summary_large_image')";'"
    updateTwitterTag('twitter: "title'",title)";'"
    updateTwitterTag('twitter: "description'",description)";'"
    updateTwitterTag('twitter: "image'",ogImage);
    // Add structured data;
if(structuredData) {;
const script = document.createElement('script');
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);"
    // Add viewport meta tag if not present";'"
let viewport = document.querySelector('meta[name="viewport"]');
if(!viewport) {;
viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewport);
    // Add charset if not present;
let charset = document.querySelector('meta[charset]');
    if(!charset) {;
charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);"
return (");"
dangerouslySetInnerHTML={{ __html: "JSON.stringify(structuredData) "}}
        />)}
    </script></Head>;
  );
}
    <Head />;"
      <title>{title}</>"
      <meta name = "description" content={description};/>";'"
      <meta name="keywords" content={keywords.join(', ')};/>"
      <link rel = "canonical" href={canonicalUrl} />;"
      {/* Open Graph */}"
      <meta property="og: title" content={title};/>"
      <meta property="og: description" content={description};/>"
      <meta property="og: image" content={ogImage};/>"
      <meta property="og: url" content={canonicalUrl};/>"
      <meta property = "og: type" content="website"  />"
      {/* Twitter Card */}"
      <meta name="twitter: card" content="summary_large_image" />"
      <meta name="twitter:title" content={title};/>"
      <meta name="twitter: description" content={description};/>"
      <meta name="twitter: image" content={ogImage} />;"
      {/* Additional SEO meta tags */}"
      <meta name = "robots" content="index, follow" />"
      <meta name="author" content="Zion Tech Group" />"
      <meta name="viewport" content="width=device-width, initial-scale = 1" />"
      <meta charSet="UTF-8"  />
      {/* Structured Data */}"
      {structuredData && (<script ;"
type="application/ld+json&quot;");"
dangerouslySetInnerHTML={{ __html: "JSON.stringify(structuredData)"}; />;
      )}
    </Head>;
export default SEOOptimizer}"
"
"
}}}}}}}}}}"
";`'"
=======
app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx;

import React from app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx;
import, React, { useEffect } from app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
import { Head  } from app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx;
interface SEOOptimizerProps {
className?: app/components/SEOOptimizer.tsx;
const SEOOptimizer: app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx,title = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
description = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
keywords = [app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx]
canonicalUrl = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx//ziontechgroup.comapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxhttps://ziontechgroup.com/og-image.jpgapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,app/components/SEOOptimizer.tsx;
}
}) => {
useEffect(() => {
    // Update page app/components/SEOOptimizer.tsx;
document.title = app/components/SEOOptimizer.tsx;
// Update meta app/components/SEOOptimizer.tsx;
const metaDescription = document.querySelector(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxdescriptionapp/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx)
if(metaDescription) {
metaDescription.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, description)
    } else { const meta = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      meta.name = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
meta.content = app/components/SEOOptimizer.tsx;
document.head.appendChild(meta)
  ]
// Update app/components/SEOOptimizer.tsx;
const metaKeywords = document.querySelector(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxkeywordsapp/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx)
if(metaKeywords) {  
metaKeywords.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, keywords.join(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx), , , }
    } else { const meta = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      meta.name = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
      meta.content = keywords.join(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      document.head.appendChild(meta)
    // Update canonical app/components/SEOOptimizer.tsx;
let canonicalLink = document.querySelector(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxcanonicalapp/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx)
if(canonicalLink) {  
canonicalLink.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, canonicalUrl), , , }
    } else{canonicalLink = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      canonicalLink.rel = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
canonicalLink.href = app/components/SEOOptimizer.tsx;
      document.head.appendChild(canonicalLink)
    // Update Open Graph app/components/SEOOptimizer.tsx;
const updateOGTag = (property: app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx,content: app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx,}
let ogTag = document.querySelector(app/components/SEOOptimizer.tsx`app/components/SEOOptimizer.tsx${property,}app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx)
if(ogTag) {
ogTag.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, content)
      } else{ogTag = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
        ogTag.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, property)
        ogTag.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, content)}
        document.head.appendChild(ogTag)}
updateOGTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxtitleapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,title)
    updateOGTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxdescriptionapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,description)
    updateOGTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsximageapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,ogImage)
    updateOGTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxurlapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,canonicalUrl)
    updateOGTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxtypeapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
    // Update Twitter Card app/components/SEOOptimizer.tsx;
const updateTwitterTag = (
let twitterTag = document.querySelector(app/components/SEOOptimizer.tsx`app/components/SEOOptimizer.tsx${name,) => {
$app/components/SEOOptimizer.tsx;
;}app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx)
if(twitterTag) {
twitterTag.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, content)
      ;} else{twitterTag = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
        twitterTag.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, name)
        twitterTag.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, content);}
        document.head.appendChild(twitterTag);}
    updateTwitterTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxcardapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
    updateTwitterTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxtitleapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,title)
    updateTwitterTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxdescriptionapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,description)
    updateTwitterTag(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsximageapp/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx,ogImage)
    // Add structured app/components/SEOOptimizer.tsx;
if(structuredData) {
const script = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      script.type = app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    // Add viewport meta tag if not app/components/SEOOptimizer.tsx;
let viewport = document.querySelector(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsxviewportapp/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx)
if(!viewport) {
viewport = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      viewport.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      viewport.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      document.head.appendChild(viewport)
    // Add charset if not app/components/SEOOptimizer.tsx;
let charset = document.querySelector(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
    if(!charset) {
charset = document.createElement(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      charset.setAttribute(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx, app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)
      document.head.insertBefore(charset, document.head.firstChild)
  ;}, [title, description, keywords, canonicalUrl, ogImage, structuredData,])
return (
dangerouslySetInnerHTML={{ __html: app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx,;};}
        />);}
    </script></$1>
  );
;}
    <Head />
    </Head>
      <title>{title}</title>
      <meta name = app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={description,};/>
    </meta>
      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={keywords.join(app/components/SEOOptimizer.tsx'app/components/SEOOptimizer.tsx)};/>
    </meta>
      <link rel = app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx href={canonicalUrl,};/>
    </link>
      {/* Open Graph */}
      <meta property=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={title,};/>
    </meta>
      <meta property=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={description,};/>
    </meta>
      <meta property=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={ogImage,};/>
    </meta>
      <meta property=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={canonicalUrl,};/>
    </meta>
      <meta property = app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx />
    </meta>
      {/* Twitter Card */,}

      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx />
    </meta>
      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={title,};/>
    </meta>
      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={description,};/>
    </meta>
      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content={ogImage,};/>
    </meta>
      {/* Additional SEO meta tags */}
      <meta name = app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx />
    </meta>
      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx />
    </meta>
      <meta name=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx content=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx />
    </meta>
      <meta charSet=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsx />
    </meta>
      {/* Structured Data */,}
      {structuredData && (
        <app/components/SEOOptimizer.tsx;
type=app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.tsxJSON.stringify(structuredData)app/components/SEOOptimizer.tsx"app/components/SEOOptimizer.app/components/SEOOptimizer.tsx;
}}}}}}}}}}
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352

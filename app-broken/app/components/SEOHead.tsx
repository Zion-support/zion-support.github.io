import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOHeadProps {
title?: string
description?: string
keywords?: string
canonical?: string
ogImage?: string
ogType?: string
twitterCard?: string
structuredData?: object;}
}
const SEOHead: React.FC<SEOHeadProps> = ({
title = 'Zion Tech Group - Advanced AI & IT Solutions',
description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
canonical,
ogImage = '/og-image.jpg',
ogType = 'website',
twitterCard = 'summary_large_image',
structuredData
}) => {
const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '')
const defaultStructuredData = {
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;Organization&quot;,
&quot;name&quot;: &quot;Zion Tech Group&quot;,
&quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
&quot;logo&quot;: &quot;https://ziontechgroup.com/logo.png&quot;,
&quot;description&quot;: &quot;Advanced AI and IT Solutions company providing cutting-edge technology services&quot;,
&quot;address&quot;: {
&quot;@type&quot;: &quot;PostalAddress&quot;,
&quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
&quot;addressLocality&quot;: &quot;Middletown&quot;,
&quot;addressRegion&quot;: &quot;DE&quot;,
&quot;postalCode&quot;: &quot;19709&quot;,
&quot;addressCountry&quot;: &quot;US&quot;
},
&quot;contactPoint&quot;: {
&quot;@type&quot;: &quot;ContactPoint&quot;,
&quot;telephone&quot;: &quot;+1-302-464-0950&quot;,
&quot;contactType&quot;: &quot;customer service&quot;,
&quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
},
&quot;sameAs&quot;: [
&quot;https://www.linkedin.com/company/zion-tech-group&quot;,
&quot;https://twitter.com/ziontechgroup&quot;
]
}
return (
<Helmet>
{/* Basic Meta Tags */}
<title>{fullTitle}</title>
<meta name=&quot;description&quot; content={description} />
<meta name=&quot;keywords&quot; content={keywords} />
<meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
<meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
<meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
{/* Canonical URL */}
{canonicalUrl && <link rel=&quot;canonical&quot; href={canonicalUrl} />}
{/* Open Graph Meta Tags */}
<meta property=&quot;og:title&quot; content={fullTitle} />
<meta property=&quot;og:description&quot; content={description} />
<meta property=&quot;og:type&quot; content={ogType} />
<meta property=&quot;og:url&quot; content={canonicalUrl} />
<meta property=&quot;og:image&quot; content={ogImage} />
<meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
<meta property=&quot;og:locale&quot; content=&quot;en_US&quot; />
{/* Twitter Card Meta Tags */}
<meta name=&quot;twitter:card&quot; content={twitterCard} />
<meta name=&quot;twitter:title&quot; content={fullTitle} />
<meta name=&quot;twitter:description&quot; content={description} />
<meta name=&quot;twitter:image&quot; content={ogImage} />
{/* Additional SEO Meta Tags */}
<meta name=&quot;theme-color&quot; content=&quot;#0f172a&quot; />
<meta name=&quot;msapplication-TileColor&quot; content=&quot;#0f172a&quot; />
<meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot; />
<meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black-translucent&quot; />
{/* Structured Data */}
<script type=&quot;application/ld+json&quot;>
{JSON.stringify(structuredData || defaultStructuredData)}
</script>
</Helmet>
)
}
export default SEOHead
</SEOHeadProps>
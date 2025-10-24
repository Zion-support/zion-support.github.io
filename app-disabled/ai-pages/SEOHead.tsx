interface SEOHeadProps {
title?: string
import {Helmet} from 'lucide-react';
import React from 'react'
import {Helmet} from 'react-helmet-async'
interface SEOHeadProp s {title?: string
description?: string
keywords?: string
canonical?: string
ogImage?: string
ogType?: string
twitterCard?: string
structuredData?:object;}
}
constSEOHead: React.FC<SEOHeadProp s>= ({title= 'Zion Tech Group - Advanced AI & IT Solutions',
description= 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
keywords= 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
canonical,
ogImage= '/og-image.jpg',
ogType= 'website',
twitterCard= 'summary_large_image',
structuredData}) => {constfullTitle= title.includes('Zion Tech Group') ? title:`${title} | Zion TechGroup`
constcanonicalUrl= canonical || (type of windo w !== 'undefined' ? windo w.location.href: '')
const defaultStructuredData= {"@context":"https:// schema.org","@type":"Organization","name":"Zion Tech Group","url":"https:// ziontechgroup.com","logo":"https:// ziontechgroup.com/logo.png","description":"Advanced AI and IT Solutions company providing cutting-edge technology services","address": {"@type":"PostalAddress","streetAddress":"364E Main St STE1008","addressLocality":"Middletown","addressRegion":"DE","postalCode":"1970 9","addressCountry":"US"},"contactPoint": {"@type":"ContactPoint","telephone":"+1-30 2-46 4-095 0","contactType":"customer service","email":"kleber@ziontechgroup.com"},"sameAs": ["https:// www.linkedin.com/$1/zion-tech-group","https:// twitter.com/ziontechgroup"
]
}
return(<Helme t>{/* Basic MetaTags*/}<titl e>{fullTitle}</titl><metaname="description" content={description} /><metaname="keywords" content={keywords} /><metaname="author"content="Zion TechGroup" /><metaname="robots"content="index,follow" /><metaname="viewport"content="width=device-width,initial-scale=1.0" />{/* CanonicalURL */}
{canonicalUrl&&<linkrel="canonical"href={canonicalUrl} />}
{/* Open GraphMetaTags*/}<metaproperty="og:title" content={fullTitle} /><metaproperty="og:description" content={description} /><metaproperty="og:type" content={ogType} /><metaproperty="og:url" content={canonicalUrl} /><metaproperty="og:image" content={ogImage} /><metaproperty="og:site_name"content="Zion TechGroup" /><metaproperty="og:locale"content="en_US" />{/* Twitter CardMetaTags*/}<metaname="twitter:card" content={twitterCard} /><metaname="twitter:title" content={fullTitle} /><metaname="twitter:description" content={description} /><metaname="twitter:image" content={ogImage} />{/* Additional SEOMetaTags*/}<metaname="theme-color"content="#0f172a" /><metaname="msapplication-TileColor"content="#0f172a" /><metaname="apple-mobile-web-app-capable"content="yes" /><metaname="apple-mobile-web-app-status-bar-style"content="black-translucent" />{/* StructuredData*/}<scripttype="application/ld+json">{JSON.stringify(structuredData ||defaultStructuredData)}</scrip></Helme>)
}
export defaultSEOHead</SEOHeadProp>

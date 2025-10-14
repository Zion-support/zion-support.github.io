import React from 'react''; import { Helmet } from 'react-helmet-async''; interface SEOProps {} title?: string; description?: string; keywords?: string; image?: string; url?: string; type?: 'website' | 'article' | 'profile''; author?: string; publishedTime?: string; modifiedTime?: string; section?: string; tags?: string[]} title?: string; description?: string; keywords?: string; image?: string; url?: string; type?: 'website' | 'article' | 'profile';'
}
const SEO: React.FC<SEOProp s> = ({} title = 'Zion Tech Group - Advanced AI & IT Solutions','; description = 'Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.','; keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, technology consulting, Zion Tech Group','; image = 'https://ziontechgroup.com/og-image.jpg','; url = 'https://ziontechgroup.com','; type = 'website''''
}) => {} const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`'`;`'`
const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`'`;`'`
const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`'`;`'`
const structuredData = {};@context': 'https://schema.org','' '@type': 'Organization',';,''
name: 'Zion Tech Group',';,''
url: 'https://ziontechgroup.com',';,''
logo: 'https://ziontechgroup.com/logo.svg',';,''
description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.',';,''
address: {} '@type': 'PostalAddress',';,''
addressLocality: 'Middletown',';,''
addressRegion: 'DE',';,''
addressCountry: 'US''' },;,'
contactPoint: {} '@type': 'ContactPoint',';,''
telephone: '+1-302-464-0950',';,''
contactType: 'customer service',';,''
email: 'kleber@ziontechgroup.com''' },;,'
sameAs: [ 'https://www.linkedin.com/company/zion-tech-group','' 'https://twitter.com/ziontechgroup','' 'https://github.com/ziontechgroup''' ] } return ( <Helme t><//titl e>{title}</titl e><//meta nam e="description" conten t={description} />"" <meta nam e="keywords" conten t={keywords} />"" {/* Open Graph */} <meta propert y="og:title" conten t={title} />"" <meta propert y="og:description" conten t={description} />"" <meta propert y="og:type" conten t={type} />"" <meta propert y="og:url" conten t={url} />"" <meta propert y="og:image" conten t={image} />"" {/* Twitter */} <meta nam e="twitter:card" conten t="summary_large_image" />"" <meta nam e="twitter:title" conten t={title} />"" <meta nam e="twitter:description" conten t={description} />"" <meta nam e="twitter:image" conten t={image} />"" {/* Canonical URL */} <link re l="canonical" hre f={url} />"" </Helme t> ); }"'
export default SEO; )}
export default SEO
}; export default SEO;`"'`"'`
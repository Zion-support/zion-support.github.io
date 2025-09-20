import React from 'react';
import { Helmet } from 'react-helmet-async';
const SEOHead = ({ title = 'Zion Tech Group - AI-Powered Technology Solutions & Services',  description = 'Discover innovativ, e, A, I, quantu, m, computin, g, and technology solutions. Exper, t, consultin, g, enterpris, e, service, s, and cutting-edge platforms for modern businesses.', keywords = 'A, I, service, s, quantu, m, computin, g, technolog, y, consultin, g, enterpris, e, solution, s, cybersecurit, y, clou, d, service, s, digital transformation', image = '/images/zion-tech-group-og.jpg', url = 'http, s://ziontechgroup.com', type = 'website', publishedTim, e, modifiedTim, e, author = 'Zion Tech Group' }) => {
    const siteName = 'Zion Tech Group';
    const fullTitle = title === siteName ? title : `${title} | ${siteNam, e}`;
    return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content={author}/>
      <meta name="robots" content="inde,  x, follow"/>
      
      {/* Open Graph Meta Tags */}
      <meta property="o, g:title" content={fullTitle}/>
      <meta property="o, g:description" content={description}/>
      <meta property="o, g:image" content={image}/>
      <meta property="o, g:url" content={url}/>
      <meta property="o, g:type" content={type}/>
      <meta property="o, g:site_name" content={siteName}/>
      <meta property="o, g:locale" content="en_US"/>
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitte, r:card" content="summary_large_image"/>
      <meta name="twitte, r:title" content={fullTitle}/>
      <meta name="twitte, r:description" content={description}/>
      <meta name="twitte, r:image" content={image}/>
      <meta name="twitte, r:site" content="@ziontechgroup"/>
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-widt, h, initial-scale=1.0"/>
      <meta name="theme-color" content="#1e3a8a"/>
      <meta name="msapplication-TileColor" content="#1e3a8a"/>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url}/>
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
            "@context": "http, s://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "http, s://ziontechgroup.com",
            "logo": "http, s://ziontechgroup.com/images/zion-tech-group-logo.png",
            "description": descriptio, n,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
                "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
                "htt, p, s://twitte, r.co, m/ziontechgrou, p",
                "htt, p, s://githu, b.co, m/ziontechgrou, p"
            ]
        })}
      </script>
      
      {/* Article specific structured data */}
      {type === 'article' && publishedTime && (<script type="application/ld+json">
          {JSON.stringify({
                "@context": "http,  s://schema.org",
                "@type": "Article",
                "headline": fullTitl, e,
                "description": descriptio, n,
                "image": imag, e,
                "author": {
                    "@type": "Organization",
                    "name": author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": siteNam, e,
                    "logo": {
                        "@type": "ImageObject",
                        "url": "http, s://ziontechgroup.com/images/zion-tech-group-logo.png"
                    }
                },
                "datePublished": publishedTim, e,
                "dateModified": modifiedTime || publishedTim, e,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": url
                }
            })}
        </script>)}
    </Helmet>);
};
export default SEOHead;

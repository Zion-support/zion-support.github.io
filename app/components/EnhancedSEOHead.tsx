'use client'
import {Helmet} from 'lucide-react';
import React from 'react'
import {Helmet} from 'react-helmet-async'
interface SEOHeadProp s {title: stringdescription: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  structuredData?: object}
constEnhancedSEOHead: React.FC<SEOHeadProp s>= ({title= 'Zion Tech Group - Advanced AI and IT Solutions',
  description= 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve300% ROI with our cutting-edge AI technology.',
  keywords= 'AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting',
  image= 'https:// ziontechgroup.com/og-image.jpg',
  url= 'https:// ziontechgroup.com',
  type= 'website',
  siteName= 'Zion Tech Group',
  structuredData}) => {const defaultStructuredData= {
    "@context":"https:// schema.org",
   "@type":"Organization",
   "name":"Zion Tech Group",
   "url":"https:// ziontechgroup.com",
   "logo":"https:// ziontechgroup.com/logo.png",
   "description":"Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
   "address": {
     "@type":"PostalAddress",
     "streetAddress":"364E Main St STE1008",
     "addressLocality":"Middletown",
     "addressRegion":"DE",
     "postalCode":"1970 9",
     "addressCountry":"US"
   },
   "contactPoint": {"@type":"ContactPoint",
     "telephone":"+1-30 2-46 4-095 0",
     "contactType":"customer service",
     "email":"kleber@ziontechgroup.com"
   },
   "sameAs": [
     "https:// linkedin.com/$1/zion-tech-group",
     "https:// twitter.com/ziontechgroup",
     "https:// github.com/zion-tech-group"
    ]
  }
constEnhancedSEOHead: React.FC= () => {"contactType":"sales",
     "email":"kleber@ziontechgroup.com"
   },
   "sameAs": [
     "https:// www.linkedin.com/$1/ziontechgroup",
     "https:// twitter.com/ziontechgroup"
    ],
   "service": [
      {"@type":"Service",
       "name":"AI Solutions",
       "description":"Comprehensive artificial intelligence solutions for business transformation"
     },
      {"@type":"Service",
       "name":"Cloud Infrastructure",
       "description":"Scalable and secure cloud solutions for modern businesses"
     },
      {"@type":"Service",
       "name":"Cybersecurity",
       "description":"Advanced security solutions to protect digital assets"
     },
      {"@type":"Service",
       "name":"Custom Development",
       "description":"Tailored software solutions for specific business needs"
     }
    ]
  }
  constwebsiteStructuredData= {"@context":"https:// schema.org",
   "@type":"WebSite",
   "name":"Zion Tech Group",
   "url":"https:// ziontechgroup.com",
   "potentialAction": {
     "@type":"SearchAction",
     "target":"https://ziontechgroup.com/search?q={search_term_string}",
     "query-input":"requiredname=search_term_string"
    }
  }
  constfinalStructuredData= structuredData || default StructuredData
  return (
  <Helme t>{/* Basic MetaTags */}
    <titl e>{title}</titl><metaname="description" content={description} /><metaname="keywords" content={keywords} /><metaname="author"content="Zion TechGroup" /><metaname="robots"content="index,follow" /><metaname="googlebot"content="index,follow" /><metaname="bingbot"content="index,follow" />{/* CanonicalURL */}
    <linkrel="canonical" href={url} />{/* Open Graph /Facebook */}
   <metaproperty="og:type" content={type} /><metaproperty="og:url" content={url} /><metaproperty="og:title" content={title} /><metaproperty="og:description" content={description} /><metaproperty="og:image" content={image} /><metaproperty="og:url" content={url} /><metaproperty="og:type" content={type} /><metaproperty="og:site_name" content={siteName} />{/* Twitter Card MetaTags */}
   <metaname="twitter:card"content="summary_large_image" /><metaname="twitter:title" content={title} /><metaname="twitter:description" content={description} /><metaname="twitter:image" content={image} /><linkrel="canonical" href={currentUrl} />{/* Open Graph /Facebook */}
   <metaproperty="og:type" content={type} /><metaproperty="og:url" content={currentUrl} /><metaproperty="og:title" content={title} /><metaproperty="og:description" content={description} /><metaproperty="og:image" content={fullImageUrl} /><metaproperty="og:site_name"content="Zion TechGroup" /><metaproperty="og:locale"content="en_US" />{/* Twitter */}
   <metaproperty="twitter:card"content="summary_large_image" /><metaproperty="twitter:url" content={currentUrl} /><metaproperty="twitter:title" content={title} /><metaproperty="twitter:description" content={description} /><metaproperty="twitter:image" content={fullImageUrl} /><metaproperty="twitter:site"content="@ziontechgroup" /><metaproperty="twitter:creator"content="@ziontechgroup" />{/* Additional SEO MetaTags */}
   <metaname="viewport"content="width=device-width, initial-scale=1,viewport-fit=cover" /><metaname="theme-color"content="#0f172a" /><metaname="color-scheme"content="darklight" /><metahttpEquiv="X-UA-Compatible"content="IE=edge" /><metaname="format-detection"content="telephone=no,address=no,email=no" />{/* PWA MetaTags */}
    <linkrel="manifest"href="/manifest.json" /><linkrel="apple-touch-icon"href="/logo192.png" /><metaname="apple-mobile-web-app-capable"content="yes" /><metaname="apple-mobile-web-app-status-bar-style"content="black-translucent" /><metaname="apple-mobile-web-app-title"content="Zion TechGroup" />{/* Preconnect to external domains */}
    <linkrel="preconnect"href="https://fonts.googleapis.com" /><linkrel="preconnect"href="https://fonts.gstatic.com"crossOrigin="anonymous" />{/* StructuredData */}
    <scripttype="application/ld+json">{JSON.stringify(structuredData)}
    </scrip><scripttype="application/ld+json">{JSON.stringify(websiteStructuredData)}
   <metaname="theme-color"content="#0f172a" /><metaname="msapplication-TileColor"content="#0f172a" /><metaname="apple-mobile-web-app-capable"content="yes" /><metaname="apple-mobile-web-app-status-bar-style"content="black-translucent" />{/* CanonicalURL */}
    <linkrel="canonical" href={url} />{/* Favicon */}
    <linkrel="icon"type="image/x-icon"href="/favicon.ico" /><linkrel="apple-touch-icon"sizes="180x180"href="/apple-touch-icon.png" /><linkrel="icon"type="image/png"sizes="32x32"href="/favicon-32x32.png" /><linkrel="icon"type="image/png"sizes="16x16"href="/favicon-16x16.png" /><linkrel="manifest"href="/site.webmanifest" />{/* StructuredData */}
    <scripttype="application/ld+json">{JSON.stringify(finalStructuredData)}
    </scrip></Helme>
  )
}
export default EnhancedSEOHead
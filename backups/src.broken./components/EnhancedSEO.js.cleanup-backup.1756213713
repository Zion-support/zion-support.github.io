<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export function EnhancedSEO({ title, description, keywords, canonical, ogImage = 'https://ziontechgroup.com/og-image.jpg', ogType = 'website', twitterCard = 'summary_large_image', twitterCreator = '@ziontechgroup', twitterSite = '@ziontechgroup', structuredData, noindex = false, nofollow = false, language = 'en', author = 'Zion Tech Group', robots }) {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function EnhancedSEO({ title = 'Zion Tech Group - Advanced AI, Quantum Computing & Enterprise Technology Solutions', description = 'Leading provider of advanced AI automation, quantum computing, autonomous business operations, and enterprise technology solutions. Transform your business with cutting-edge technology services.', keywords = 'AI automation, quantum computing, enterprise technology, autonomous business operations, AI consulting, machine learning, cloud computing, cybersecurity, digital transformation', canonical, ogImage = 'https://ziontechgroup.com/images/og-default.jpg', ogType = 'website', twitterCard = 'summary_large_image', structuredData, noindex = false, nofollow = false }) {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : canonical || 'https://ziontechgroup.com';
    // Default structured data for organization
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
<<<<<<< HEAD
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "The Future of Tech & AI Marketplace",
        "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    };
    const finalStructuredData = structuredData || defaultStructuredData;
    const robotsValue = robots || `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: author }), _jsx("meta", { name: "robots", content: robotsValue }), _jsx("meta", { name: "language", content: language }), canonical && _jsx("link", { rel: "canonical", href: canonical }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:type", content: ogType }), _jsx("meta", { property: "og:url", content: canonical || 'https://ziontechgroup.com' }), _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { property: "og:image:width", content: "1200" }), _jsx("meta", { property: "og:image:height", content: "630" }), _jsx("meta", { property: "og:site_name", content: "Zion Tech Group" }), _jsx("meta", { property: "og:locale", content: language }), _jsx("meta", { name: "twitter:card", content: twitterCard }), _jsx("meta", { name: "twitter:site", content: twitterSite }), _jsx("meta", { name: "twitter:creator", content: twitterCreator }), _jsx("meta", { name: "twitter:title", content: title }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: ogImage }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "theme-color", content: "#2e73ea" }), _jsx("meta", { name: "msapplication-TileColor", content: "#2e73ea" }), _jsx("meta", { name: "apple-mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }), _jsx("meta", { name: "apple-mobile-web-app-title", content: "Zion" }), _jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }), _jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }), _jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }), _jsx("link", { rel: "manifest", href: "/site.webmanifest" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { rel: "preconnect", href: "https://api.ziontechgroup.com" }), _jsx("link", { rel: "dns-prefetch", href: "//fonts.googleapis.com" }), _jsx("link", { rel: "dns-prefetch", href: "//api.ziontechgroup.com" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(finalStructuredData) }), _jsx("script", { type: "application/ld+json", children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Zion Tech Group",
                    "url": "https://ziontechgroup.com",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://ziontechgroup.com/marketplace?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }) }), _jsx("script", { type: "application/ld+json", children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://ziontechgroup.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Marketplace",
                            "item": "https://ziontechgroup.com/marketplace"
                        }
                    ]
                }) })] }));
}
// Specialized SEO components for different page types
export function MarketplaceSEO() {
    return (_jsx(EnhancedSEO, { title: "AI & Tech Marketplace - Zion Tech Group", description: "Browse thousands of AI engineers, tech services, and cutting-edge equipment. Find the perfect match for your project with our AI-powered marketplace.", keywords: "AI marketplace, tech talent, AI services, tech equipment, machine learning, data science, software development", canonical: "https://ziontechgroup.com/marketplace", ogType: "website", structuredData: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI & Tech Marketplace",
            "description": "Browse AI engineers, tech services, and equipment",
            "url": "https://ziontechgroup.com/marketplace",
            "numberOfItems": 10000,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "AI Engineers",
                    "url": "https://ziontechgroup.com/talent"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Tech Services",
                    "url": "https://ziontechgroup.com/services"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Tech Equipment",
                    "url": "https://ziontechgroup.com/equipment"
                }
            ]
        } }));
}
export function TalentDirectorySEO() {
    return (_jsx(EnhancedSEO, { title: "AI & Tech Talent Directory - Zion Tech Group", description: "Discover verified AI engineers, data scientists, developers, and tech professionals. Browse profiles, skills, and connect with top talent worldwide.", keywords: "AI engineers, tech talent, data scientists, developers, programmers, tech professionals, hiring", canonical: "https://ziontechgroup.com/talent", ogType: "website", structuredData: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI & Tech Talent Directory",
            "description": "Browse verified tech professionals",
            "url": "https://ziontechgroup.com/talent",
            "numberOfItems": 50000,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "AI Engineers",
                    "url": "https://ziontechgroup.com/talent?category=ai-engineering"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Data Scientists",
                    "url": "https://ziontechgroup.com/talent?category=data-science"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Software Developers",
                    "url": "https://ziontechgroup.com/talent?category=software-development"
                }
            ]
        } }));
}
export function ServicesSEO() {
    return (_jsx(EnhancedSEO, { title: "Tech & AI Services - Zion Tech Group", description: "Professional tech services including AI development, cloud migration, cybersecurity, and more. Connect with verified service providers worldwide.", keywords: "AI services, tech consulting, software development, cloud migration, cybersecurity, IT services", canonical: "https://ziontechgroup.com/services", ogType: "website", structuredData: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Tech & AI Services",
            "description": "Professional tech services marketplace",
            "url": "https://ziontechgroup.com/services",
            "numberOfItems": 5000,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "AI Development",
                    "url": "https://ziontechgroup.com/services?category=ai-development"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Cloud Migration",
                    "url": "https://ziontechgroup.com/services?category=cloud-migration"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Cybersecurity",
                    "url": "https://ziontechgroup.com/services?category=cybersecurity"
                }
            ]
        } }));
=======
        "logo": "https://ziontechgroup.com/images/logo.png",
        "description": description,
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
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/Zion-Holdings"
        ],
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "599",
            "highPrice": "25000",
            "description": "Enterprise AI and Technology Solutions"
        }
    };
    // Merge with provided structured data
    const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;
    return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content="Zion Tech Group"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical}/>}
      
      {/* Robot Instructions */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}/>
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content={ogType}/>
      <meta property="og:url" content={currentUrl}/>
      <meta property="og:image" content={ogImage}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:image:alt" content={title}/>
      <meta property="og:site_name" content="Zion Tech Group"/>
      <meta property="og:locale" content="en_US"/>
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard}/>
      <meta name="twitter:site" content="@ziontechgroup"/>
      <meta name="twitter:creator" content="@ziontechgroup"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={ogImage}/>
      <meta name="twitter:image:alt" content={title}/>
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#1a1a2e"/>
      <meta name="msapplication-TileColor" content="#1a1a2e"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      <meta name="format-detection" content="telephone=no"/>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link rel="preconnect" href="https://www.google-analytics.com"/>
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
      <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
      <meta httpEquiv="X-Frame-Options" content="DENY"/>
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
    </Helmet>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
export const SEOEnhancer = ({ title = 'Zion Tech Group - Leading AI & Technology Solutions', description = 'Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. We help businesses thrive in the digital age.', keywords = ['AI solutions', 'technology consulting', 'digital transformation', 'cloud computing', 'cybersecurity', 'machine learning'], image = '/images/zion-tech-group-og.jpg', url = 'https://ziontechgroup.com', type = 'website', author = 'Zion Tech Group', publishedTime, modifiedTime, section = 'Technology Services', tags = ['AI', 'Technology', 'Digital Transformation'] }) => {
    useEffect(() => {
        // Add structured data to the page
        const structuredData = {
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'Article' : 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
            description: description,
            address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Technology Drive',
                addressLocality: 'Wilmington',
                addressRegion: 'DE',
                postalCode: '19801',
                addressCountry: 'US'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-302-464-0950',
                email: 'info@ziontechgroup.com',
                contactType: 'customer service',
                availableLanguage: 'English'
            },
            sameAs: [
                'https://linkedin.com/company/ziontechgroup',
                'https://twitter.com/ziontechgroup',
                'https://github.com/ziontechgroup'
            ],
            ...(type === 'article' && {
                headline: title,
                author: {
                    '@type': 'Person',
                    name: author
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Zion Tech Group',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
                    }
                },
                datePublished: publishedTime,
                dateModified: modifiedTime,
                articleSection: section,
                keywords: tags.join(', ')
            }),
            ...(type === 'service' && {
                serviceType: title,
                areaServed: 'Worldwide',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Technology Services',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'AI Solutions',
                                description: 'Machine learning, natural language processing, and computer vision solutions'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Cloud & DevOps',
                                description: 'Cloud migration, infrastructure automation, and DevOps practices'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Cybersecurity',
                                description: 'Comprehensive security solutions including threat detection and compliance'
                            }
                        }
                    ]
                }
            })
        };
        // Remove existing structured data
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }
        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);
        // Add performance meta tags
        const performanceMeta = [
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'theme-color', content: '#1e40af' },
            { name: 'msapplication-TileColor', content: '#1e40af' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
            { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
            { name: 'format-detection', content: 'telephone=no' }
        ];
        performanceMeta.forEach(meta => {
            const metaTag = document.createElement('meta');
            metaTag.name = meta.name;
            metaTag.content = meta.content;
            document.head.appendChild(metaTag);
        });
        // Add resource hints
        const resourceHints = [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
            { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
            { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
        ];
        resourceHints.forEach(hint => {
            const link = document.createElement('link');
            link.rel = hint.rel;
            link.href = hint.href;
            if (hint.crossorigin)
                link.crossOrigin = hint.crossorigin;
            document.head.appendChild(link);
        });
        return () => {
            // Cleanup on unmount
            const addedScript = document.querySelector('script[type="application/ld+json"]');
            if (addedScript)
                addedScript.remove();
            performanceMeta.forEach(meta => {
                const metaTag = document.querySelector(`meta[name="${meta.name}"]`);
                if (metaTag)
                    metaTag.remove();
            });
            resourceHints.forEach(hint => {
                const link = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
                if (link)
                    link.remove();
            });
        };
    }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);
    return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords.join(', ')}/>
      <meta name="author" content={author}/>
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="English"/>
      <meta name="revisit-after" content="7 days"/>
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="og:url" content={url}/>
      <meta property="og:type" content={type}/>
      <meta property="og:site_name" content="Zion Tech Group"/>
      <meta property="og:locale" content="en_US"/>
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
      <meta name="twitter:site" content="@ziontechgroup"/>
      <meta name="twitter:creator" content="@ziontechgroup"/>
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="Zion Tech Group"/>
      <meta name="msapplication-config" content="/browserconfig.xml"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url}/>
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
      <meta httpEquiv="X-Frame-Options" content="DENY"/>
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no"/>
      <meta name="theme-color" content="#1e40af"/>
      <meta name="msapplication-TileColor" content="#1e40af"/>
      
      {/* Business Information */}
      <meta name="geo.region" content="US-DE"/>
      <meta name="geo.placename" content="Wilmington, Delaware"/>
      <meta name="geo.position" content="39.7447;-75.5484"/>
      <meta name="ICBM" content="39.7447, -75.5484"/>
      
      {/* Contact Information */}
      <meta name="contact:phone" content="+1-302-464-0950"/>
      <meta name="contact:email" content="info@ziontechgroup.com"/>
      <meta name="contact:address" content="123 Technology Drive, Wilmington, DE 19801"/>
      
      {/* Business Hours */}
      <meta name="business:hours" content="Monday-Friday 9:00 AM-6:00 PM EST"/>
      <meta name="business:payment_methods" content="Credit Card, Bank Transfer, PayPal"/>
      
      {/* Service Areas */}
      <meta name="service:area" content="Worldwide"/>
      <meta name="service:type" content="Technology Consulting, AI Solutions, Cloud Services, Cybersecurity"/>
    </Helmet>);
};
export default SEOEnhancer;

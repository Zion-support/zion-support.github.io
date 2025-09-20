import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';

function SEO({ 
    title, 
    description, 
    keywords, 
    canonical, 
    image = '/images/zion-og-image.jpg', 
    type = 'website', 
    author = 'Zion Tech Group', 
    publishedTime, 
    modifiedTime, 
    section, 
    tags = [], 
    structuredData 
}) {
    const siteName = 'Zion Tech Group';
    const siteUrl = 'https://ziontechgroup.com';
    const fullTitle = `${title} | ${siteName}`;
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Default structured data for organization
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": siteUrl,
        "logo": `${siteUrl}/images/zion-logo.png`,
        "description": "AI-powered tech marketplace connecting businesses with top talent, services, and equipment",
        "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://facebook.com/ziontechgroup"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    };

    // Merge with custom structured data
    const finalStructuredData = structuredData || defaultStructuredData;

    return (_jsxs(Helmet, { 
        children: [
            _jsx("title", { children: fullTitle }),
            _jsx("meta", { name: "description", content: description }),
            keywords && _jsx("meta", { name: "keywords", content: keywords }),
            _jsx("meta", { name: "author", content: author }),
            _jsx("link", { rel: "canonical", href: fullCanonical }),
            _jsx("meta", { property: "og:type", content: type }),
            _jsx("meta", { property: "og:url", content: fullCanonical }),
            _jsx("meta", { property: "og:title", content: fullTitle }),
            _jsx("meta", { property: "og:description", content: description }),
            _jsx("meta", { property: "og:image", content: fullImage }),
            _jsx("meta", { property: "og:site_name", content: siteName }),
            _jsx("meta", { property: "og:locale", content: "en_US" }),
            publishedTime && _jsx("meta", { property: "article:published_time", content: publishedTime }),
            modifiedTime && _jsx("meta", { property: "article:modified_time", content: modifiedTime }),
            section && _jsx("meta", { property: "article:section", content: section }),
            tags.map(tag => (_jsx("meta", { property: "article:tag", content: tag }, tag))),
            _jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
            _jsx("meta", { name: "twitter:site", content: "@ziontechgroup" }),
            _jsx("meta", { name: "twitter:creator", content: "@ziontechgroup" }),
            _jsx("meta", { name: "twitter:title", content: fullTitle }),
            _jsx("meta", { name: "twitter:description", content: description }),
            _jsx("meta", { name: "twitter:image", content: fullImage }),
            _jsx("script", { 
                type: "application/ld+json", 
                dangerouslySetInnerHTML: { __html: JSON.stringify(finalStructuredData) }
            })
        ]
    }));
}

export default SEO;
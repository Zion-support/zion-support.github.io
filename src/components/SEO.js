import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
export const SEO = ({ title, description, keywords, canonical, ogImage, ogType = 'website', structuredData }) => {
    const fullTitle = title.includes('Zion') ? title : `${title} | Zion Tech Group`;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("link", { rel: "canonical", href: canonical }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:url", content: canonical }), _jsx("meta", { property: "og:type", content: ogType }), ogImage && _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: description }), ogImage && _jsx("meta", { name: "twitter:image", content: ogImage }), structuredData && (_jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) }))] }));
};
=======
export function SEO({ title, description, keywords, canonical, ogImage = 'https://ziontechgroup.com/og-image.jpg', ogType = 'website', twitterCard = 'summary_large_image', structuredData, noindex = false, nofollow = false, image, type }) {
    const siteName = 'Zion Tech Group';
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const fullCanonicalUrl = canonical || 'https://ziontechgroup.com';
    const fullImageUrl = (image || ogImage).startsWith('http') ? (image || ogImage) : `https://ziontechgroup.com${image || ogImage}`;
    const fullOgType = type || ogType;
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "The premier AI and tech marketplace connecting talent, services, and innovation.",
        "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-ZION-TECH",
            "contactType": "customer service",
            "areaServed": "Worldwide"
        }
    };
    const finalStructuredData = structuredData || defaultStructuredData;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: "Zion Tech Group" }), _jsx("meta", { name: "robots", content: `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}` }), _jsx("link", { rel: "canonical", href: fullCanonicalUrl }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:type", content: fullOgType }), _jsx("meta", { property: "og:url", content: fullCanonicalUrl }), _jsx("meta", { property: "og:image", content: fullImageUrl }), _jsx("meta", { property: "og:image:width", content: "1200" }), _jsx("meta", { property: "og:image:height", content: "630" }), _jsx("meta", { property: "og:site_name", content: siteName }), _jsx("meta", { property: "og:locale", content: "en_US" }), _jsx("meta", { name: "twitter:card", content: twitterCard }), _jsx("meta", { name: "twitter:site", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:creator", content: "@ziontechgroup" }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: fullImageUrl }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(finalStructuredData) }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "theme-color", content: "#1e40af" }), _jsx("meta", { name: "msapplication-TileColor", content: "#1e40af" }), _jsx("meta", { name: "apple-mobile-web-app-capable", content: "yes" }), _jsx("meta", { name: "apple-mobile-web-app-status-bar-style", content: "default" }), _jsx("meta", { name: "apple-mobile-web-app-title", content: siteName }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { rel: "preconnect", href: "https://ziontechgroup.com" })] }));
}
>>>>>>> origin/ziontechgroup-improvements
// Specialized SEO components for different page types
export function HomePageSEO() {
    return (_jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your digital transformation.", keywords: "AI, technology, marketplace, services, talent, innovation, digital transformation", canonical: "https://ziontechgroup.com/", ogImage: "/images/zion-homepage-og.jpg", structuredData: {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ziontechgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        } }));
}
export function ServicePageSEO({ serviceName, serviceDescription }) {
    return (_jsx(SEO, { title: `${serviceName} - Zion Tech Group`, description: serviceDescription, keywords: `${serviceName}, AI services, tech solutions, Zion Tech Group`, canonical: `https://ziontechgroup.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`, ogType: "product", structuredData: {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription,
            "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
            },
            "category": "Technology Services",
            "areaServed": "Worldwide"
        } }));
}
export function ProfilePageSEO({ profileName, profileBio }) {
    return (_jsx(SEO, { title: `${profileName} - Zion Tech Group`, description: profileBio, keywords: `${profileName}, tech talent, AI expert, Zion Tech Group`, canonical: `https://ziontechgroup.com/profile/${profileName.toLowerCase().replace(/\s+/g, '-')}`, ogType: "profile", structuredData: {
            "@type": "Person",
            "name": profileName,
            "description": profileBio,
            "knowsAbout": ["Artificial Intelligence", "Technology", "Innovation"],
            "worksFor": {
                "@type": "Organization",
                "name": "Zion Tech Group"
            }
        } }));
}

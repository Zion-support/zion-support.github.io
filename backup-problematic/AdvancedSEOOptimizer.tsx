<<<<<<< HEAD
'use client';
import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOData {}
=======
'use client;

import React, { useEffect, useCallback, useRef } from 'react;

import { Helmet } from react-helmet-async;

interface SEOData {
>>>>>>> origin/main
 title: string;

 description: string;

 keywords: string[];

 canonicalUrl: string;

 ogTitle?: string;

 ogDescription?: string;

 ogImage?: string;

 ogType?: string;

 twitterCard?: string;

 twitterTitle?: string;

 twitterDescription?: string;,
 twitterImage?: string;

 structuredData?: Record<string, unknown>;</string>robots</string>?: string;

 author?: string;

 publishedTime?: string;

 modifiedTime?: string;

 section?: string;

 tags?: string[];

interface SEOData {/* TODO: Fix JSX expression */}

}

interface AdvancedSEOOptimizerProps {/* TODO: Fix JSX expression */}

}

;

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({,
 seoData;
<<<<<<< HEAD
 enableStructuredData="true,"
 enableOpenGraph="true,"
 enableTwitterCards="true,"
 enableSchemaMarkup = true}) => {}
return (
;
const _structuredDataRef = "useRef<HTMLScriptElement | null>(null);</HTMLScriptElement>const</HTMLScriptElement>"
);
} generateStructuredData = useCallback(() => {}
=======

 enableStructuredData = true,
 enableOpenGraph = true,
 enableTwitterCards = true,
 enableSchemaMarkup = true}) => {
  return (

;

const _structuredDataRef = useRef<HTMLScriptElement | null>(null);</HTMLScriptElement>const</HTMLScriptElement>;;

);

} generateStructuredData = useCallback(() => {
>>>>>>> origin/main
 if (!enableStructuredData || !seoData.structuredData) return null;

;
<<<<<<< HEAD
const baseStructuredData = {}
 '@context': 'https: //schema.org',
 '@type': 'Organization',
 name: 'Zion Tech Group',
 url: 'https://ziontechgroup.com',
 logo: 'https://ziontechgroup.com/logo.png',
 description:
        description: seoData.description;
 address: {}
 '@type': 'PostalAddress'
 streetAddress: '364 E Main St STE 1008',
 addressLocality: 'Middletown',
 addressRegion: 'DE',
 postalCode: '19709',
 addressCountry: 'US'},
=======

const baseStructuredData = {;;;

 '@context': 'https: //schema.org,
 '@type': 'Organization,
 name: 'Zion Tech Group,
 url: 'https://ziontechgroup.com,
 logo: 'https://ziontechgroup.com/logo.png,
 description:
        description: seoData.description;

 address: {
 '@type: PostalAddress
 streetAddress: '364 E Main St STE 1008,
 addressLocality: 'Middletown,
 addressRegion: 'DE,
 postalCode: '19709,
 addressCountry: 'US},
>>>>>>> origin/main
 contactPoint: {,
 '@type': 'ContactPoint,
 telephone: '+1-302-464-0950,
 contactType: 'customer service,
 email: 'kleber@ziontechgroup.com},
 sameAs: [,
 'https://linkedin.com/company/zion-tech-group,
 'https: //twitter.com/ziontechgroup,
 https: //github.com/Zion-Holdings,;

const,
  AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}

 },
 contactPoin,
  t: {/* TODO: Fix JSX expression */}

 },
 sameA,
<<<<<<< HEAD
  s: []
 'http,
  s://linkedin.com/company/zion-tech-group',
 'http,
  s://twitter.com/ziontechgroup',
 'http,
  s://github.com/Zion-Holdings'],
=======
  s: [
 http,
  s://linkedin.com/company/zion-tech-group,
 http,
  s://twitter.com/ziontechgroup,
 http,
  s://github.com/Zion-Holdings],
>>>>>>> origin/main
 ...seoData.structuredData};
 return baseStructuredData}, [seoData, enableStructuredData]);

;
<<<<<<< HEAD
const generateBreadcrumbStructuredData = useCallback(() => {}
 if (!enableSchemaMarkup) return null;
 return {}
 '@context': 'https: //schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: []
 {}
 '@type': 'ListItem'
 position: 1;
 name: 'Home',
 item: 'https://ziontechgroup.com'},
 {}
 '@type': 'ListItem',
=======

const generateBreadcrumbStructuredData = useCallback(() => {;;

 if (!enableSchemaMarkup) return null;

 return {
 '@context': 'https: //schema.org,
 '@type': 'BreadcrumbList,
 itemListElement: [
 {
 '@type: ListItem
 position: 1;

 name: 'Home,
 item: 'https://ziontechgroup.com},
 {
 '@type': 'ListItem,
>>>>>>> origin/main
 position: 2;

 name: seoData.title;

 item: seoData.canonicalUrl;

 const generateBreadcrumbStructuredData = useCallback(() => {/* TODO: Fix JSX expression */};;

 },
 {/* TODO: Fix JSX expression */}

 }]}}, [seoData, enableSchemaMarkup]);

;
<<<<<<< HEAD
const generateFAQStructuredData = useCallback(() => {}
=======

const generateFAQStructuredData = useCallback(() => {;;

>>>>>>> origin/main
 if (!enableSchemaMarkup) return null;

;
<<<<<<< HEAD
const faqData = {}
 '@context': 'https: //schema.org',
 '@type': 'FAQPage',
 mainEntity: []
=======

const faqData = {;;

 '@context': 'https: //schema.org,
 '@type': 'FAQPage,
 mainEntity: [
>>>>>>> origin/main
 {,
 '@type': 'Question,
 name: 'What services does Zion Tech Group offer?,
 acceptedAnswer: {,
<<<<<<< HEAD
 '@type': 'Answer',
 text: 'Zion Tech Group offers comprehensive AI-powered enterprise solutions, digital transformation services, automation, cloud services, AI consulting, business intelligence, and machine learning solutions.'}},
 {}
 '@type': 'Question',
 name: 'How can I contact Zion Tech Group?',
 acceptedAnswer: {,
 '@type': 'Answer',
 text: 'You can contact us at kleber@ziontechgroup.com or call +1 302 464 0950. Our office is located at 364 E Main St STE 1008, Middletown DE 19709.'}},
 {}
 '@type': 'Question',
 name: 'What makes Zion Tech Group different?',
=======
 '@type': 'Answer,
 text: 'Zion Tech Group offers comprehensive AI-powered enterprise solutions, digital transformation services, automation, cloud services, AI consulting, business intelligence, and machine learning solutions.}},
 {
 '@type': 'Question,
 name: 'How can I contact Zion Tech Group?,
 acceptedAnswer: {,
 '@type': 'Answer,
 text: 'You can contact us at kleber@ziontechgroup.com or call +1 302 464 0950. Our office is located at 364 E Main St STE 1008, Middletown DE 19709.}},
 {
 '@type': 'Question,
 name: 'What makes Zion Tech Group different?,
>>>>>>> origin/main
 acceptedAnswer: {,
 '@type': 'Answer,
 text: We specialize in cutting-edge AI micro SaaS services, cloud automation, and provide comprehensive digital transformation solutions with a focus on enterprise-grade security and performance.,;

const generateFAQStructuredData = useCallback(() => {/* TODO: Fix JSX expression */};;

 }},
 {/* TODO: Fix JSX expression */}

 }},
 {/* TODO: Fix JSX expression */}

 }}]};
 return faqData}, [enableSchemaMarkup]);

;
<<<<<<< HEAD
const _structuredData="generateStructuredData();"
 const _breadcrumbData="generateBreadcrumbStructuredData();"
 const _faqData="generateFAQStructuredData();"
 useEffect(() => {}
 // Update page title and meta description for better SEO;
 if (typeof document !== 'undefined') {}
 document.title="seoData.title;"
 ;
let _metaDescription = document.querySelector('meta[name=""description"]');"
 if (!metaDescription) {}
 metaDescription="document.createElement('meta');"
 metaDescription.setAttribute('name', 'description');
=======

const _structuredData = generateStructuredData();;

 const _breadcrumbData = generateBreadcrumbStructuredData();;

 const _faqData = generateFAQStructuredData();;

 useEffect(() => {
 // Update page title and meta description for better SEO;

 if (typeof document !== 'undefined) {
 document.title = seoData.title;

 ;

let _metaDescription = document.querySelector('meta[name="description]);;

 if (!metaDescription) {
 metaDescription = document.createElement(meta);

 metaDescription.setAttribute('name', description);

>>>>>>> origin/main
 document.head.appendChild(metaDescription);

 useEffect(() => {/* TODO: Fix JSX expression */}

 }
<<<<<<< HEAD
 metaDescription.setAttribute('content', seoData.description);
 // Update canonical URL;
 let _canonicalLink = document.querySelector('link[rel=""canonical"]');"
=======

 metaDescription.setAttribute(content, seoData.description);

 // Update canonical URL;

 let _canonicalLink = document.querySelector('link[rel="canonical]);;

>>>>>>> origin/main
 if (!canonicalLink) {/* TODO: Fix JSX expression */}

 }

 canonicalLink.setAttribute('href, seoData.canonicalUrl)}

 }, [seoData]);
<<<<<<< HEAD
 // const _addMetaTag = (name: string, content: string, attribute: string = 'name') => {,
 // const metaTag="document.createElement('meta');"
 // metaTag.setAttribute(attribute, name);
 // metaTag.content="content;"
=======

 // const _addMetaTag = (name: string, content: string, attribute: string = name) => {,;;

 // const metaTag = document.createElement(meta);;

 // metaTag.setAttribute(attribute, name);

 // metaTag.content = content;

>>>>>>> origin/main
 // document.head.appendChild(metaTag);

 // };
<<<<<<< HEAD
 // const _updateCanonicalUrl = (url: string) => {}
 // let canonicalLink = document.querySelector('link[rel=""canonical"]') as HTMLLinkElement;"
 // ,
 // if (canonicalLink) {,
 // canonicalLink.href="url;"
 // } else {}
 // canonicalLink="document.createElement('link');"
 // canonicalLink.rel="'canonical';"
 // canonicalLink.href="url;"
=======

 // const _updateCanonicalUrl = (url: string) => {;;

 // let canonicalLink = document.querySelector('link[rel="canonical]) as HTMLLinkElement;;

 // ,
 // if (canonicalLink) {,
 // canonicalLink.href = url;

 // } else {
 // canonicalLink = document.createElement(link);

 // canonicalLink.rel = canonical;

 // canonicalLink.href = url;

>>>>>>> origin/main
 // document.head.appendChild(canonicalLink);

 // }

 // };origin/

<<<<<<< HEAD
 // const _addStructuredData = (data: Record<string, unknown>) => {}
 // // Remove existing structured data;
 // // if (structuredDataRef.current) {}
 // // structuredDataRef.current.remove();
 // const _addMetaTag="(nam,"
=======
 // const _addStructuredData = (data: Record<string, unknown>) => {;;

 // // Remove existing structured data;

 // // if (structuredDataRef.current) {
 // // structuredDataRef.current.remove();

 // const _addMetaTag = (nam,;;

>>>>>>> origin/main
  e: string, conten,
  t: string, attribut)
  e: string = 'name) => {/* TODO: Fix JSX expression */}

 // };
<<<<<<< HEAD
 // const _updateCanonicalUrl="(ur)"
=======

 // const _updateCanonicalUrl = (ur);;

>>>>>>> origin/main
  l: string) => {/* TODO: Fix JSX expression */}

 // } else {/* TODO: Fix JSX expression */}

 // }

 // };origin/

<<<<<<< HEAD
 // const _addStructuredData="(dat)"
=======
 // const _addStructuredData = (dat);;

>>>>>>> origin/main
  a: Record<string, unknown>) => {/* TODO: Fix JSX expression */}

 // // }

 // 
<<<<<<< HEAD
 // const script="document.createElement('script');"
 // script.type = "'application/ld+json';"
 // script.textContent="JSON.stringify(data);"
=======
 // const script = document.createElement(script);;

 // script.type = application/ld+json;

 // script.textContent = JSON.stringify(data);

>>>>>>> origin/main
 // document.head.appendChild(script);

 // };
 // Add new structured data;
<<<<<<< HEAD
 const _script="document.createElement('script');"
 script.type = "'application/ld+json';"
 script.textContent="JSON.stringify(data);"
 script.id="'structured-data';"
 document.head.appendChild(script);
 structuredDataRef.current="script};"
;
const _trackPageView = (config: SEOData) => {}
return (
,
 if (typeof window !== 'undefined' && 'gtag' in window) {,
 (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown></string>
);
}) => void }).gtag('config', 'GA_MEASUREMENT_ID', {)
 page_title: config.title),
 page_location: config.canonicalUrl),;
const _trackPageView="(confi)"
  g: SEOData) => {/* TODO: Fix JSX expression */}
  g: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {/* TODO: Fix JSX expression */})
 })}
 };
;
const _trackPerformanceMetrics = () => {}
return (

 if (typeof window !== 'undefined' && 'performance' in window) {}
 window.addEventListener('load', () => {;
const _perfData = "performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;"
 if (perfData && typeof window !== 'undefined' && 'gtag' in window) {}
 (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown></string>
=======

 const _script = document.createElement(script);;

 script.type = application/ld+json;

 script.textContent = JSON.stringify(data);

 script.id = structured-data;

 document.head.appendChild(script);

 structuredDataRef.current = script};

;

const _trackPageView = (config: SEOData) => {;;

return (

,
 if (typeof window !== 'undefined' && 'gtag in window) {,
 (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>
);

}) => void }).gtag('config', 'GA_MEASUREMENT_ID, {)
 page_title: config.title),
 page_location: config.canonicalUrl),;

const _trackPageView = (confi);;

  g: SEOData) => {/* TODO: Fix JSX expression */}

  g: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID, {/* TODO: Fix JSX expression */})
 })}

 };

;

const _trackPerformanceMetrics = () => {;;

return (

 if (typeof window !== 'undefined' && 'performance in window) {
 window.addEventListener(load, () => {;

const _perfData = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

 if (perfData && typeof window !== 'undefined' && 'gtag in window) {
 (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>
>>>>>>> origin/main
);

}) => void }).gtag('event', 'page_load_performance, {)
 event_category: 'Performance),
 event_label: 'Page Load),
 value: Math.round(perfData.loadEventEnd - perfData.fetchStart),;

const _trackPerformanceMetrics = () => {/* TODO: Fix JSX expression */};;

  s: Record<string, unknown>) => void }).gtag('event', 'page_load_performance, {/* TODO: Fix JSX expression */})
 })}

 })}

 };origin/

 return(<Helmet>)
 {/* Basic Meta Tags */})
 <title>{seoData.title}</title>)
<<<<<<< HEAD
 <meta name="description" content = "{seoData.description} />)"
 <meta name="keywords" content = "{seoData.keywords.join(', ')} /></meta>"
 <link rel="canonical" href="{seoData.canonicalUrl} /></link>"
=======
 <meta name="description content={seoData.description} />)
 <meta name="keywords" content={seoData.keywords.join(', )} />
 <link rel="canonical href={seoData.canonicalUrl} />
>>>>>>> origin/main
 {/* Open Graph Tags */}

 {enableOpenGraph && (
<<<<<<< HEAD
 <React.Fragment></React>
 <meta property="og:title" content = "{seoData.title} /></meta>"
 <meta property = "og: image:height" content=""630" />,"
 <meta property="og:site_name" content=""Zion Tech Group" />,"
 <meta property="og:locale" content=""en_US" />,"
=======

 <React.Fragment>
 <meta property="og:title content={seoData.title} />
 <meta property="og: image:height" content="630 />,
 <meta property="og:site_name" content="Zion Tech Group />,
 <meta property="og:locale" content="en_US />,
>>>>>>> origin/main
 </React.Fragment>)}

 {/* Twitter Card Tags */}

 {enableTwitterCards && (
<<<<<<< HEAD
 <React.Fragment></React>
 <meta name = "twitter: card" content=""summary_large_image" />,"
 <meta name="twitter:title" content = "{seoData.title} /></meta>"
 <meta name="twitter:description" content = "{seoData.description} /></meta>"
 <meta name="twitter:image" content = "{seoData.ogImage} /></meta>"
 <meta name = "twitter: site" content=""@ziontechgroup" />,"
 <meta name="twitter:creator" content=""@ziontechgroup" />,"
 </React.Fragment>)}

 {/* Additional SEO Meta Tags */}
 <meta name="robots" content=""index, follow, max-snippet:-1, max-image-preview:large, max-video-preview: -1" />,"
 <meta name="googlebot" content=""index, follow" /></meta>"
 <meta name="bingbot" content=""index, follow" /></meta>"
 <meta name="author" content=""Zion Tech Group" /></meta>"
 <meta name="publisher" content=""Zion Tech Group" /></meta>"
 <meta name="copyright" content=""Zion Tech Group" /></meta>"
 <meta name="language" content=""en" /></meta>"
 <meta name="revisit-after" content=""7 days" /></meta>"
 <meta name="distribution" content=""global" /></meta>"
 <meta name="rating" content=""general" /></meta>"
 <meta name="theme-color" content=""#4F46E5" /></meta>"
 return (<Helmet></Helmet>
 {/* Basic Meta Tags */}
 <title>{seoData.title}</title>"
 <meta name="description" content = "{seoData.description} /></meta>")"
 <meta name="keywords" content = "{seoData.keywords.join(', ')} /></meta>""
 <link rel="canonical" href="{seoData.canonicalUrl} /></link>"
 {/* Open Graph Tags */}
 {/* TODO: Fix JSX expression */}"
  g:title" content = "{seoData.title} /></meta>""
 <meta property=""o,"></meta>"
  g:imag,"
  e:height" content=""630" /></meta>""
 <meta property=""o,"></meta>"
  g:site_name" content=""Zion Tech Group" /></meta>""
 <meta property=""o,"></meta>"
  g:locale" content=""en_US" /></meta>"
=======

 <React.Fragment>
 <meta name="twitter: card" content="summary_large_image />,
 <meta name="twitter:title content={seoData.title} />
 <meta name="twitter:description content={seoData.description} />
 <meta name="twitter:image content={seoData.ogImage} />
 <meta name="twitter: site" content="@ziontechgroup />,
 <meta name="twitter:creator" content="@ziontechgroup />,
 </React.Fragment>)}

 {/* Additional SEO Meta Tags */}

 <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview: -1 />,
 <meta name="googlebot" content="index, follow />
 <meta name="bingbot" content="index, follow />
 <meta name="author" content="Zion Tech Group />
 <meta name="publisher" content="Zion Tech Group />
 <meta name="copyright" content="Zion Tech Group />
 <meta name="language" content="en />
 <meta name="revisit-after" content="7 days />
 <meta name="distribution" content="global />
 <meta name="rating" content="general />
 <meta name="theme-color" content="#4F46E5 />
 return (<Helmet></Helmet>
 {/* Basic Meta Tags */}

 <title>{seoData.title}</title>
 <meta name="description" content={seoData.description} /></meta>)
 <meta name="keywords" content={seoData.keywords.join(', ')} /></meta>
 <link rel="canonical href={seoData.canonicalUrl} /></link>
 {/* Open Graph Tags */}

 {/* TODO: Fix JSX expression */}

  g:title" content={seoData.title} /></meta>
 <meta property=o,
  g:imag,
  e:height" content="630" /></meta>
 <meta property="o,
  g:site_name" content="Zion Tech Group" /></meta>
 <meta property="o,
  g:locale" content="en_US /></meta>
>>>>>>> origin/main
 </React.Fragment>
 )}

 {/* Twitter Card Tags */}
<<<<<<< HEAD
 {/* TODO: Fix JSX expression */}"
  r:title" content = "{seoData.title} /></meta>""
 <meta name=""twitte,"></meta>"
  r:description" content = "{seoData.description} /></meta>""
 <meta name=""twitte,"></meta>"
  r:image" content = "{seoData.ogImage} /></meta>""
 <meta name=""twitte,"></meta>"
  r:site" content=""@ziontechgroup" /></meta>""
 <meta name=""twitte,"></meta>"
  r:creator" content=""@ziontechgroup" /></meta>"
 </React.Fragment>
 )}

 {/* Additional SEO Meta Tags */}"
 <meta name="robots" content=""index, follow, max-snippe,"></meta>"
  t:-1, max-image-previe,
  w:large, max-video-previe,"
  w:-1" /></meta>"
 <meta name="googlebot" content=""index, follow" /></meta>""
 <meta name="bingbot" content=""index, follow" /></meta>""
 <meta name="author" content=""Zion Tech Group" /></meta>""
 <meta name="publisher" content=""Zion Tech Group" /></meta>""
 <meta name="copyright" content=""Zion Tech Group" /></meta>""
 <meta name="language" content=""en" /></meta>""
 <meta name="revisit-after" content=""7 days" /></meta>""
 <meta name="distribution" content=""global" /></meta>""
 <meta name="rating" content=""general" /></meta>""
 <meta name="theme-color" content=""#4F46E5" /></meta>"
=======

 {/* TODO: Fix JSX expression */}

  r:title" content={seoData.title} /></meta>
 <meta name="twitte,
  r:description" content={seoData.description} /></meta>
 <meta name="twitte,
  r:image" content={seoData.ogImage} /></meta>
 <meta name="twitte,
  r:site" content="@ziontechgroup" /></meta>
 <meta name="twitte,
  r:creator" content="@ziontechgroup /></meta>
 </React.Fragment>
 )}

 {/* Additional SEO Meta Tags */}

 <meta name="robots" content=index, follow, max-snippe,
  t:-1, max-image-previe,
  w:large, max-video-previe,
  w:-1" /></meta>
 <meta name="googlebot" content="index, follow" /></meta>
 <meta name="bingbot" content="index, follow" /></meta>
 <meta name="author" content="Zion Tech Group" /></meta>
 <meta name="publisher" content="Zion Tech Group" /></meta>
 <meta name="copyright" content="Zion Tech Group" /></meta>
 <meta name="language" content="en" /></meta>
 <meta name="revisit-after" content="7 days" /></meta>
 <meta name="distribution" content="global" /></meta>
 <meta name="rating" content="general" /></meta>
 <meta name="theme-color" content="#4F46E5 /></meta>
>>>>>>> origin/main
 {/* Structured Data */}

 {/* TODO: Fix JSX expression */}

 {JSON.stringify(structuredData)}

 </script>
 )}

 {/* TODO: Fix JSX expression */}

 {JSON.stringify(breadcrumbData)}

 </script>
 )}

 {/* TODO: Fix JSX expression */}

 {JSON.stringify(faqData)}

 </script>
 )}

 {/* Preconnect to external domains for performance */}
<<<<<<< HEAD
 <link rel="preconnect" href=""https: //fonts.googleapis.com" />,"
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""anonymous" />,"
 <link rel="preconnect" href=""https://www.google-analytics.com" />,"
 <link rel="preconnect" href=""https://www.googletagmanager.com" />,"
,
 {/* DNS Prefetch for better performance */}
 <link rel="dns-prefetch" href=""//fonts.googleapis.com" /></link>"
 <link rel="dns-prefetch" href=""//www.google-analytics.com" /></link>"
 <link rel="dns-prefetch" href=""//www.googletagmanager.com" /></link>"
 {/* Preconnect to external domains for performance */}"
 <link rel="preconnect" href=""http,"></link>"
  s://fonts.googleapis.com" /></link>"
 <link rel="preconnect" href=""http,"></link>"
  s://fonts.gstatic.com" crossOrigin=""anonymous" /></link>""
 <link rel="preconnect" href=""http,"></link>"
  s://www.google-analytics.com" /></link>"
 <link rel="preconnect" href=""http,"></link>"
  s://www.googletagmanager.com" /></link>
 {/* DNS Prefetch for better performance */}"
 <link rel="dns-prefetch" href=""//fonts.googleapis.com" /></link>""
 <link rel="dns-prefetch" href=""//www.google-analytics.com" /></link>""
 <link rel="dns-prefetch" href=""//www.googletagmanager.com" /></link>"
=======

 <link rel="preconnect" href="https: //fonts.googleapis.com />,
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous />,
 <link rel="preconnect" href="https://www.google-analytics.com />,
 <link rel="preconnect" href="https://www.googletagmanager.com />,
,
 {/* DNS Prefetch for better performance */}

 <link rel="dns-prefetch" href="//fonts.googleapis.com />
 <link rel="dns-prefetch" href="//www.google-analytics.com />
 <link rel="dns-prefetch" href="//www.googletagmanager.com />
 {/* Preconnect to external domains for performance */}

 <link rel="preconnect" href="http,
  s://fonts.googleapis.com" /></link>
 <link rel="preconnect" href="http,
  s://fonts.gstatic.com" crossOrigin="anonymous" /></link>
 <link rel="preconnect" href="http,
  s://www.google-analytics.com" /></link>
 <link rel="preconnect" href="http,
  s://www.googletagmanager.com /></link>
 {/* DNS Prefetch for better performance */}

 <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>
 <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>
 <link rel="dns-prefetch" href="//www.googletagmanager.com /></link>
>>>>>>> origin/main
 </Helmet>
 )};
export default AdvancedSEOOptimizer;"
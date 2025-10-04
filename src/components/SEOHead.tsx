<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group — AI Micro SaaS and IT Services',
  description = 'Enterprise-grade AI micro SaaS and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords = 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl || window.location.href;
  
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Enterprise-grade AI micro SaaS and IT solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
=======
import React from 'react'; import {Helmet }from 'react-helmet-async'; interface SEOHeadProps {title?: string; description?: string; keywords?: string; image?: string; url?: string; type?: string; author?: string; publishedTime?: string; modifiedTime?: string; section?: string; tags?: string [] ; }const SEOHead: React.FC<SEOHeadProps > = ({title = 'Zion Tech Group - Advanced AI and IT Solutions"description = "Leading provider of AI autonomous operationsquantum computing solutionsadvanced cybersecurityand enterprise consulting services.Transform your business with cutting-edge technology."keywords = "AIartificial intelligenceautonomous operationsquantum computingcybersecurityenterprise consultingdigital transformationcloud migrationZion Tech Group"image = "/images/zion-tech-group-og-image.jpg"url = "https://ziontechgroup.com"type = "website"author = "Zion Tech Group"publishedTimemodifiedTimesectiontags = [] }) => {const fullTitle = title.includes ("Zion Tech Group') ? title : `$ {title }| Zion Tech Group`; const fullUrl = url.startsWith ('http') ? url : `https://ziontechgroup.com$ {url }`; const fullImage = image.startsWith ('http') ? image : `https://ziontechgroup.com$ {image }`; return (<Helmet > {/* Basic Meta Tags */ }<title> {fullTitle }</title> <meta name = "description" content= {description }/> <meta name="keywords" content= {keywords }/> <meta name="author" content= {author }/> <meta name="robots" content="indexfollow" /> <meta name="language" content="en" /> <meta name="revisit-after" content="7 days" /> {/* Open Graph Meta Tags */ }<meta property="og:title" content= {fullTitle }/> <meta property="og:description" content= {description }/> <meta property="og:image" content= {fullImage }/> <meta property="og:url" content= {fullUrl }/> <meta property="og:type" content= {type }/> <meta property="og:site_name" content="Zion Tech Group" /> <meta property="og:locale" content="en_US" /> {/* Twitter Card Meta Tags */ }<meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content= {fullTitle }/> <meta name="twitter:description" content= {description }/> <meta name="twitter:image" content= {fullImage }/> <meta name="twitter:site" content="@ZionTechGroup" /> <meta name="twitter:creator" content="@ZionTechGroup" /> {/* Additional Meta Tags */ }<meta name="viewport" content="width=device-widthinitial-scale=1.0" /> <meta httpEquiv="Content-Type" content="text/html; charset = utf-8" /> <meta name="theme-color" content="#1e293b" /> <meta name="msapplication-TileColor" content="#1e293b" /> <meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-status-bar-style" content="default" /> <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /> {/* Canonical URL */ }<link rel="canonical" href= {fullUrl }/> {/* Favicon and Icons */ }<link rel="icon" type="image/x-icon" href="/favicon.ico" /> <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> <link rel="manifest" href="/site.webmanifest" /> {/* Preconnect to external domains */ }<link rel="preconnect" href="https://fonts.googleapis.com" /> <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> <link rel="preconnect" href="https://cdnjs.cloudflare.com" /> {/* DNS Prefetch */ }<link rel="dns-prefetch" href="//fonts.googleapis.com" /> <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" /> {/* Structured Data */ }<script type="application/ld+json"> {JSON.stringify ({'@context': 'https://schema.org""@type': 'Organization"name: "Zion Tech Group"url: "https://ziontechgroup.com"logo: "https://ziontechgroup.com/images/zion-tech-group-logo.png"description: descriptionaddress: {"@type': 'PostalAddress"streetAddress: "123 Technology Drive"addressLocality: "San Francisco"addressRegion: "CA"postalCode: "94105"addressCountry: "US" }contactPoint: {"@type': 'ContactPoint"telephone: "+1-555-0123"contactType: "customer service"email: "info@ziontechgroup.com" }sameAs: ["https://twitter.com/ZionTechGroup""https://linkedin.com/company/zion-tech-group""https://github.com/zion-tech-group"] services: ["AI Autonomous Operations""Quantum Computing Solutions""Advanced Cybersecurity""Enterprise AI Consulting""Digital Transformation""Cloud Migration Services"] }) }</script> {/* Article-specific structured data */ }{type === "article' && (<script type="application/ld+json"> {JSON.stringify ({'@context': 'https://schema.org""@type': 'Article"headline: titledescription: descriptionimage: fullImageurl: fullUrlauthor: {"@type': 'Organization"name: author }publisher: {"@type': 'Organization"name: "Zion Tech Group"logo: {"@type': 'ImageObject"url: "https://ziontechgroup.com/images/zion-tech-group-logo.png" } }datePublished: publishedTimedateModified: modifiedTime || publishedTimemainEntityOfPage: {"@type': 'WebPage""@id": fullUrl }... (section && {articleSection: section }) ... (tags.length > 0 && {keywords: tags.join ("") }) }) }</script>) }{/* WebPage structured data */ }<script type="application/ld+json"> {JSON.stringify ({'@context': 'https://schema.org""@type': 'WebPage"name: titledescription: descriptionurl: fullUrlisPartOf: {"@type': 'WebSite"name: "Zion Tech Group"url: "https://ziontechgroup.com" }breadcrumb: {"@type': 'BreadcrumbList"itemListElement: [{"@type': 'ListItem"position: 1name: "Home"item: "https://ziontechgroup.com" }] } }) }</script> </Helmet>) ; }; export default SEOHead; import React from "react"; import {Helmet }from 'react-helmet-async'; import React from "react";"; import {Helmet;" }from "react-helmet-async";"; interface SEOHeadProps {titl, e?: strin, g; descriptio, n?: strin, g; keyword, s?: strin, g; canonicalUr, l?: strin, g; ogImag, e?: strin, g; ogTyp, e?: strin, g; twitterCar, d?: strin, g; structuredData?: object; }constSEOHead: React.FC<SEOHeadProp s> = ({" titl, e = "ZionTechGroup — AIMicroSaaSandITServices"" description = "Enterpris, e-gradeAImicroSaaSandITsolutions.Transformyourbusiness withcutting-edgetechnologyand automation."" keywords = "AIservices, microSaaS, ITservices, cloudmigration, DevOp, sS, REenterprisesoftwareautomation" canonicalUrl" ogImage = "/images/og-image.jpg"" ogType = "website"" twitterCard = "summary_large_image" structuredData; constSEOHead: React.FC<SEOHeadProp s> = ({" title = "ZionTechGroup — AIMicroSaaSandITServices"";" description = "Enterpris, e-gradeAImicroSaaSandITsolutions.Transformyourbusiness withcutting-edgetechnologyand automation."";" keywords = "AIservices, microSaaS, ITservices, cloudmigration, DevOp, sSREenterprisesoftwareautomation""; canonicalUrl" ogImage = "/images/og-image.jpg"";" ogType = "website"";" twitterCard = "summary_large_image""; structuredData }) => {" const fullTitle = title.includes ("ZionTechGroup") ? title : `$ {titl, e }| ZionTechGroup`;`;` const fullCanonicalUrl = canonicalUrl || window.location.href; const defaultStructuredData = {" "@context": "https: //schema.org""' "@type": "Organization"" name: "ZionTechGroup'" url: "http" s://ziontechgroup.com"" logo: "http" s://ziontechgrou, p.co, m/images/logo.png"" description: "Enterprise-gradeAImicroSaaSandITsolutions" address: {" "@type": "PostalAddress"" streetAddress: "364EMain StSTE1008"" addressLocality: "Middletown"" addressRegion: "DE'" postalCode: "19709"" addressCountry: "US" }contactPoint: {" "@type": "ContactPoint"" telephone: "+1-3, 0, 2-4, 64-0950"" contactType: "customerservice'" email: "kleber@ziontechgroup.com" }sameAs: [" "http, s://linkedin.co, m/company/zion-tech-group"' "https: //twitter.com/ziontechgroup"] ' "@context": "http" s: //schema.org"";' "@type": "Organization"";" name: "ZionTechGroup"";" url: "http" s://ziontechgroup.com"";" logo: "http" s://ziontechgrou, p.co, m/images/logo.png"";" description: "Enterprise-gradeAImicroSaaSandITsolutions""; address: {" "@type": "PostalAddress"";" streetAddress: "364EMain StSTE1008"";" addressLocality: "Middletown"";" addressRegion: "DE"";" postalCode: "19709"";" addressCountry: "US""; }contactPoint: {" "@type": "ContactPoint"";" telephone: "+1-3, 0, 2-4, 64-0950"";" contactType: "customerservice"";" email: "kleber@ziontechgroup.com""; }sameAs: [" "http, s: //linkedin.co, m/company/zion-tech-group",';' "https: //twitter.com/ziontechgroup",";] }; return (<Helmet > <title> {fullTitle }</title> <meta name = "description" content= {description }/> <meta name="keywords" content= {keywords }/> <linkrel="canonical" href= {fullCanonicalUrl }/> {/* OpenGraph */ }<metaproperty="og:title" content= {fullTitle }/> <metaproperty="og:description" content= {description }/> <metaproperty="og:image" content= {ogImage }/> <metaproperty="og:url" content= {fullCanonicalUrl }/> <metaproperty="og:type" content= {ogType }/> <metaproperty="og:site_name" content="ZionTechGroup" /> {/* Twitter */ }<meta name="twitter:card" content= {twitterCard }/> <meta name="twitter:title" content= {fullTitle }/> <meta name="twitter:description" content= {description }/> <meta name="twitter:image" content= {ogImage }/> {/* AdditionalSEO */ }<meta name="robots" content="indexfollow" /><meta name="author" content="ZionTechGroup" /><meta name="viewport" content="widt, h=device-widthinitial-scale=1" /><meta name="theme-color" content="#2563eb" /> {/* Performancehints */ }<linkrel="preconnect" href="http, s://fonts.googleapis.com/>" <linkrel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin="anonymous/>" <linkrel="dns-prefetch" href="//ww, w.google-analytics.com /> <meta name="description" content= {description }/>"; <meta name = "keywords" content= {keywords }/>"; <linkrel = "canonical" href= {fullCanonicalUrl }/>"; {/* OpenGraph */ }<metaproperty = "og:title" content= {fullTitle }/>"; <metaproperty = "og:description" content= {description }/>"; <metaproperty = "og:image" content= {ogImage }/>"; <metaproperty = "og:url" content= {fullCanonicalUrl }/>"; <metaproperty = "og:type" content= {ogType }/>"; <metaproperty = "og: site_name" content="ZionTechGroup" />"; {/* Twitter */ }<meta name = "twitter:card" content= {twitterCard }/>"; <meta name = "twitter:title" content= {fullTitle }/>"; <meta name = "twitter:description" content= {description }/>"; <meta name = "twitter:image" content= {ogImage }/>"; {/* AdditionalSEO */ }<meta name = "robots" content="indexfollow" />"; <meta name = "author" content="ZionTechGroup" />"; <meta name = "viewport" content="widt, h=device-widthinitial-scale=1" />"; <meta name = "theme-color" content="#2563eb" />"; {/* Performancehints */ }<linkrel = "preconnect" href="http, s: //fonts.googleapis.com" /> <linkrel="preconnect" href="htt, p s://fonts.gstatic.com" crossOrigin="anonymous" /> <linkrel="dns-prefetch" href="//ww, w.google-analytics.com" />"; {/* StructuredData */ }<scripttype = "application/ld+json">"; {JSO, N.stringify (structuredData || defaultStructuredData) }</script> </Helmet>) ; }; export default SEOHead;" 
>>>>>>> e01e43d0c93dff705d25015e1b19001d2377c295

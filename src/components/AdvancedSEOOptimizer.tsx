
interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: Record<string, unknown>
  robots?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}
interface AdvancedSEOOptimizerProps {
  seoData: SEOData
  enableStructuredData?: boolean
  enableOpenGraph?: boolean
  enableTwitterCards?: boolean
  enableSchemaMarkup?: boolean
}
const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  seoData,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableSchemaMarkup = true
}) => {
  const _structuredDataRef = useRef<HTMLScriptElement | null>(null)
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null
    const baseStructuredData = {
      '@context': 'https://schema.org',
=======
import {Helmet} from 'lucide-react';
import React, {useEffect, useCallback, useRef} from 'react';

interface SEODat a {title: stringdescription: stringkeywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];}
interface AdvancedSEOOptimizerProp s {seoData: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;}constAdvancedSEOOptimizer:React.FC<AdvancedSEOOptimizerProp s>= ({seoData,
  enableStructuredData= true,
  enableOpenGraph= true,
  enableTwitterCards= true,
  enableSchemaMarkup= true}) =>{const_structuredDataRef=useRef<HTMLScriptElement | null>(null);
  constgenerateStructuredData= useCallback(() => {
  
    if (!enableStructuredData || !seoData.structuredData) returnnullconstbaseStructuredData= {
      '@context': 'https:// schema.org',
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https:// ziontechgroup.com',
      logo: 'https:// ziontechgroup.com/logo.png',
      description: 'Advanced AI and IT Solutions',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
     },
      sameAs: [
        'https:// www.linkedin.com/$1/zion-tech-group',
        'https:// twitter.com/ziontechgroup',
        'https:// github.com/Zion-Holdings',
      ],
      ...seoData.structuredData
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https:// ziontechgroup.com'
       },
        {'@type': 'ListItem',
          position: 2,
          name: seoData.title,
          item: seoData.canonicalUrl
       },
      ]
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services do es Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zion Tech Group offers advanced AI and IT solutions including custom software development, AI integration, cloud solutions, and digital transformation services.'
         }
        },
        {'@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through our website contact form, email, or phone. Visit our contact page for more information.'
         }
        },
      ]
        }
      })
    }
  }
  return (
  <Helme t>{/* Basic MetaTags */}
    <titl e>{seoData.title}</titl><metaname="description" content={seoData.description} /><metaname="keywords" content={seoData.keywords.join(',')} /><linkrel="canonical" href={seoData.canonicalUrl} />{/* Open GraphTags */}
      {enableOpenGraph && (
      <><metaproperty="og:title"content={seoData.title} /><metaproperty="og:image:height"content="630" /><metaproperty="og:site_name"content="Zion TechGroup" /><metaproperty="og:locale"content="en_US" /></>)}
      {/* Twitter CardTags */}
      {enableTwitterCards && (
      <><metaname="twitter:card"content="summary_large_image" /><metaname="twitter:title"content={seoData.title} /><metaname="twitter:description" content={seoData.description} /><metaname="twitter:image" content={seoData.ogImage} /><metaname="twitter:site"content="@ziontechgroup" /><metaname="twitter:creator"content="@ziontechgroup" /></>)}
      {/* Additional SEO MetaTags */}
   <metaname="robots"content="index, follow, max-snippet:-1, max-image-preview:large,max-video-preview:-1" /><metaname="googlebot"content="index,follow" /><metaname="bingbot"content="index,follow" /><metaname="author"content="Zion TechGroup" /><metaname="publisher"content="Zion TechGroup" /><metaname="copyright"content="Zion TechGroup" /><metaname="language"content="en" /><metaname="revisit-after"content="7days" /><metaname="distribution"content="global" /><metaname="rating"content="general" /><metaname="theme-color"content="#4F46E5" />{/* StructuredData */}
      {enableSchemaMarkup && _structuredData && (
      <scripttype="application/ld+json">{JSON.stringify(_structuredData)}
      </scrip>)}
      {enableSchemaMarkup && _breadcrumbData && (
      <scripttype="application/ld+json">{JSON.stringify(_breadcrumbData)}
      </scrip>)}
      {enableSchemaMarkup && _faqData && (

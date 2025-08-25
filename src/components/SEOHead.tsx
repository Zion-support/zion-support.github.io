import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export const SEOConfigs = {
  home: {
    title: "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services",
    description: "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology and expert consulting.",
    keywords: "AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure, DevOps automation, data analytics, IoT solutions, micro-SaaS, enterprise software",
    image: "/images/zion-tech-group-og.jpg",
    url: "https://ziontechgroup.com",
    type: "website",
    author: "Zion Tech Group",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/images/logo.png",
      "description": "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/Zion-Holdings"
      ],
      "foundingDate": "2015",
      "numberOfEmployees": "50-100",
      "serviceArea": "Worldwide"
    }
  },
  services: {
    title: "Our Services - AI, Cloud, Cybersecurity & Digital Transformation | Zion Tech Group",
    description: "Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, DevOps automation, data analytics, and digital transformation consulting. Expert IT services for modern businesses.",
    keywords: "IT services, cloud computing, cybersecurity services, DevOps consulting, data analytics, AI consulting, digital transformation, enterprise solutions, managed IT services",
    image: "/images/services-overview.jpg",
    url: "https://ziontechgroup.com/services",
    type: "website"
  },
  aiSolutions: {
    title: "AI Solutions & Machine Learning Services | Zion Tech Group",
    description: "Transform your business with our AI-powered solutions including machine learning, predictive analytics, natural language processing, computer vision, and autonomous systems. Expert AI consulting and implementation.",
    keywords: "AI solutions, machine learning, predictive analytics, NLP, computer vision, autonomous systems, AI consulting, artificial intelligence services, deep learning",
    image: "/images/ai-solutions.jpg",
    url: "https://ziontechgroup.com/ai-solutions",
    type: "website"
  },
  contact: {
    title: "Contact Us - Get Expert Technology Consulting | Zion Tech Group",
    description: "Ready to transform your business? Contact our expert team for AI solutions, cloud infrastructure, cybersecurity, and digital transformation consulting. Get started today.",
    keywords: "contact Zion Tech Group, technology consulting, AI consulting, IT services contact, digital transformation consulting",
    image: "/images/contact-us.jpg",
    url: "https://ziontechgroup.com/contact",
    type: "website"
  },
  about: {
    title: "About Zion Tech Group - Leading Technology Innovation Company",
    description: "Learn about Zion Tech Group's mission to revolutionize business through cutting-edge technology. 10+ years of expertise in AI, cloud, cybersecurity, and digital transformation.",
    keywords: "about Zion Tech Group, company history, technology innovation, AI expertise, cloud computing experts, cybersecurity specialists",
    image: "/images/about-us.jpg",
    url: "https://ziontechgroup.com/about",
    type: "website"
  },
  pricing: {
    title: "Pricing Plans - Transparent Technology Service Costs | Zion Tech Group",
    description: "Transparent pricing for our comprehensive technology services. Choose from flexible plans for AI solutions, cloud infrastructure, cybersecurity, and digital transformation. No hidden fees.",
    keywords: "technology service pricing, AI solution costs, cloud computing pricing, cybersecurity service rates, transparent pricing",
    image: "/images/pricing-plans.jpg",
    url: "https://ziontechgroup.com/pricing",
    type: "website"
  }
};

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = "/images/zion-tech-group-default.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Article Meta Tags (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO Enhancements */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEOHead;
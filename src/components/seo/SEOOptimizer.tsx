import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface SEOOptimizerProps {
  seoData: SEOData;
  children?: React.ReactNode;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ seoData, children }) => {
  const [structuredData, setStructuredData] = useState<any>(null);

  useEffect(() => {
    // Generate structured data based on the page type
    const generateStructuredData = () => {
      const baseStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.title,
        "description": seoData.description,
        "url": seoData.canonical || window.location.href,
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://zion.app",
          "logo": "https://zion.app/logo.png",
          "description": "Leading provider of AI, IT, and Micro SAAS solutions"
        }
      };

      // Add additional structured data based on content type
      if (seoData.section === 'services') {
        baseStructuredData["@type"] = "Service";
        baseStructuredData["provider"] = {
          "@type": "Organization",
          "name": "Zion Tech Group"
        };
        baseStructuredData["serviceType"] = seoData.keywords[0];
      } else if (seoData.section === 'blog') {
        baseStructuredData["@type"] = "BlogPosting";
        baseStructuredData["author"] = {
          "@type": "Person",
          "name": seoData.author || "Zion Tech Group"
        };
        if (seoData.publishedTime) {
          baseStructuredData["datePublished"] = seoData.publishedTime;
        }
        if (seoData.modifiedTime) {
          baseStructuredData["dateModified"] = seoData.modifiedTime;
        }
      }

      setStructuredData(baseStructuredData);
    };

    generateStructuredData();
  }, [seoData]);

  const generateMetaTags = () => {
    const tags = [];

    // Basic meta tags
    tags.push(
      <meta key="title" name="title" content={seoData.title} />,
      <meta key="description" name="description" content={seoData.description} />,
      <meta key="keywords" name="keywords" content={seoData.keywords.join(', ')} />
    );

    // Robots meta
    if (seoData.robots) {
      tags.push(<meta key="robots" name="robots" content={seoData.robots} />);
    }

    // Author meta
    if (seoData.author) {
      tags.push(<meta key="author" name="author" content={seoData.author} />);
    }

    // Open Graph tags
    tags.push(
      <meta key="og:title" property="og:title" content={seoData.ogTitle || seoData.title} />,
      <meta key="og:description" property="og:description" content={seoData.ogDescription || seoData.description} />,
      <meta key="og:type" property="og:type" content={seoData.ogType || "website"} />,
      <meta key="og:url" property="og:url" content={seoData.canonical || window.location.href} />
    );

    if (seoData.ogImage) {
      tags.push(<meta key="og:image" property="og:image" content={seoData.ogImage} />);
    }

    // Twitter Card tags
    tags.push(
      <meta key="twitter:card" name="twitter:card" content={seoData.twitterCard || "summary_large_image"} />,
      <meta key="twitter:title" name="twitter:title" content={seoData.twitterTitle || seoData.title} />,
      <meta key="twitter:description" name="twitter:description" content={seoData.twitterDescription || seoData.description} />
    );

    if (seoData.twitterImage) {
      tags.push(<meta key="twitter:image" name="twitter:image" content={seoData.twitterImage} />);
    }

    // Additional meta tags
    tags.push(
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />,
      <meta key="theme-color" name="theme-color" content="#0ea5e9" />,
      <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#0ea5e9" />
    );

    return tags;
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <link rel="canonical" href={seoData.canonical || window.location.href} />
        {generateMetaTags()}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

// SEO data generator for different page types
export const generateSEOData = {
  home: (): SEOData => ({
    title: "Zion Tech Group - AI, IT & Micro SAAS Solutions | Leading Technology Services",
    description: "Transform your business with Zion Tech Group's comprehensive AI, IT, and Micro SAAS solutions. Expert services in cybersecurity, cloud infrastructure, and digital transformation.",
    keywords: ["AI services", "IT solutions", "Micro SAAS", "cybersecurity", "cloud computing", "digital transformation", "business automation"],
    ogTitle: "Zion Tech Group - Leading AI & IT Solutions Provider",
    ogDescription: "Discover cutting-edge AI, IT, and Micro SAAS solutions that drive business growth and innovation.",
    ogImage: "https://zion.app/og-image-home.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    robots: "index, follow",
    section: "home"
  }),

  services: (serviceName: string, serviceDescription: string): SEOData => ({
    title: `${serviceName} | Professional AI & IT Services | Zion Tech Group`,
    description: `${serviceDescription} Expert implementation and support from Zion Tech Group's certified professionals.`,
    keywords: [serviceName.toLowerCase(), "AI services", "IT solutions", "professional services", "technology consulting"],
    ogTitle: `${serviceName} - Professional Services | Zion Tech Group`,
    ogDescription: serviceDescription,
    ogImage: `https://zion.app/og-image-${serviceName.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    ogType: "website",
    twitterCard: "summary_large_image",
    robots: "index, follow",
    section: "services"
  }),

  blog: (title: string, description: string, author: string, publishedTime: string): SEOData => ({
    title: `${title} | Technology Blog | Zion Tech Group`,
    description: description,
    keywords: ["technology blog", "AI insights", "IT trends", "business technology", "digital transformation"],
    ogTitle: title,
    ogDescription: description,
    ogImage: "https://zion.app/og-image-blog.jpg",
    ogType: "article",
    twitterCard: "summary_large_image",
    robots: "index, follow",
    author,
    publishedTime,
    section: "blog"
  }),

  pricing: (): SEOData => ({
    title: "Pricing Plans | AI & IT Services | Zion Tech Group",
    description: "Transparent pricing for our AI, IT, and Micro SAAS solutions. Choose the perfect plan for your business needs with flexible options and expert support.",
    keywords: ["pricing", "AI services pricing", "IT solutions cost", "business plans", "enterprise pricing"],
    ogTitle: "Transparent Pricing | Zion Tech Group Services",
    ogDescription: "Flexible pricing plans for AI, IT, and Micro SAAS solutions tailored to your business needs.",
    ogImage: "https://zion.app/og-image-pricing.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    robots: "index, follow",
    section: "pricing"
  }),

  contact: (): SEOData => ({
    title: "Contact Us | Get Expert Consultation | Zion Tech Group",
    description: "Get in touch with our AI and IT experts for personalized consultation. Transform your business with our cutting-edge solutions and professional support.",
    keywords: ["contact", "consultation", "AI experts", "IT support", "business consultation"],
    ogTitle: "Contact Our Experts | Zion Tech Group",
    ogDescription: "Get personalized consultation from our AI and IT experts. Transform your business today.",
    ogImage: "https://zion.app/og-image-contact.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    robots: "index, follow",
    section: "contact"
  })
};

export default SEOOptimizer;
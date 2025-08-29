import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  links?: Array<{ rel: string; href: string }>;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - AI-Powered Business Solutions & IT Services",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Leading the future of digital transformation.",
  keywords = [
    "AI solutions",
    "business intelligence",
    "IT services",
    "digital transformation",
    "cloud computing",
    "cybersecurity",
    "DevOps",
    "machine learning",
    "data analytics",
    "Zion Tech Group"
  ],
  author = "Zion Tech Group",
  canonical,
  ogImage = "/images/zion-tech-group-og.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  nofollow = false,
  lang = "en",
  meta = [],
  links = []
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions and comprehensive IT services",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI-powered business solutions and IT services",
      "category": "Technology Services"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={lang} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Custom Meta Tags */}
      {meta.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* Custom Links */}
      {links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Services",
              "item": "https://ziontechgroup.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "AI Solutions",
              "item": "https://ziontechgroup.com/services/ai-business-intelligence"
            }
          ]
        })}
      </script>
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": "Leading provider of AI-powered business solutions and comprehensive IT services",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://facebook.com/ziontechgroup"
          ],
          "offers": {
            "@type": "Offer",
            "description": "AI-powered business solutions and IT services",
            "category": "Technology Services"
          }
        })}
      </script>
    </Helmet>
  );
};

// Specialized SEO components for different page types
export const HomePageSEO: React.FC = () => (
  <EnhancedSEO
    title="Zion Tech Group - AI-Powered Business Solutions & IT Services"
    description="Transform your business with Zion Tech Group's cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Leading the future of digital transformation."
    keywords={[
      "AI solutions",
      "business intelligence",
      "IT services",
      "digital transformation",
      "cloud computing",
      "cybersecurity",
      "DevOps",
      "machine learning",
      "data analytics",
      "Zion Tech Group"
    ]}
    ogType="website"
    canonical="https://ziontechgroup.com"
  />
);

export const ServicesPageSEO: React.FC = () => (
  <EnhancedSEO
    title="Our Services - AI Solutions & IT Services | Zion Tech Group"
    description="Explore Zion Tech Group's comprehensive range of AI-powered business solutions, IT infrastructure services, cloud computing, and digital transformation consulting."
    keywords={[
      "AI services",
      "IT consulting",
      "cloud solutions",
      "digital transformation",
      "business intelligence",
      "cybersecurity services",
      "DevOps consulting",
      "Zion Tech Group services"
    ]}
    ogType="website"
    canonical="https://ziontechgroup.com/services"
  />
);

export const ContactPageSEO: React.FC = () => (
  <EnhancedSEO
    title="Contact Us - Zion Tech Group | Get in Touch for AI & IT Solutions"
    description="Contact Zion Tech Group today for AI-powered business solutions, IT consulting, and digital transformation services. Let's discuss how we can transform your business."
    keywords={[
      "contact Zion Tech Group",
      "AI consulting",
      "IT services contact",
      "business transformation",
      "digital consulting",
      "Zion Tech Group contact"
    ]}
    ogType="website"
    canonical="https://ziontechgroup.com/contact"
  />
);

export const AboutPageSEO: React.FC = () => (
  <EnhancedSEO
    title="About Zion Tech Group - Leading AI & IT Solutions Provider"
    description="Learn about Zion Tech Group's mission to revolutionize business through AI-powered solutions and comprehensive IT services. Discover our story, team, and commitment to innovation."
    keywords={[
      "about Zion Tech Group",
      "AI company",
      "IT solutions provider",
      "technology innovation",
      "business transformation",
      "Zion Tech Group history"
    ]}
    ogType="website"
    canonical="https://ziontechgroup.com/about"
  />
);

export const BlogPostSEO: React.FC<{
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}> = ({ title, description, author, publishedDate, image, slug }) => (
  <EnhancedSEO
    title={`${title} - Zion Tech Group Blog`}
    description={description}
    author={author}
    ogType="article"
    ogImage={image}
    canonical={`https://ziontechgroup.com/blog/${slug}`}
    structuredData={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "image": image,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
        }
      },
      "datePublished": publishedDate,
      "dateModified": publishedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://ziontechgroup.com/blog/${slug}`
      }
    }}
  />
);
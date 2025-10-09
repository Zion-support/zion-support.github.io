'use client';
import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData?: any;
  ogImage?: string;
  twitterCard?: string;
  noIndex?: boolean;
  priority?: number;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  twitterCard = 'summary_large_image',
  noIndex = false,
  priority = 0.8,
}) => {
  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = useCallback(() => {
    const pathSegments = canonicalUrl.split('/').filter(Boolean);
    const breadcrumbItems = pathSegments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        ...breadcrumbItems
      ]
    };
  }, [canonicalUrl]);

  // Generate FAQ structured data for service pages
  const generateFAQStructuredData = useCallback(() => {
    if (!canonicalUrl.includes('/ai-') && !canonicalUrl.includes('/it-')) return null;

    const serviceName = canonicalUrl.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `What is ${serviceName}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: description
          }
        },
        {
          '@type': 'Question',
          name: `How much does ${serviceName} cost?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing varies based on your specific needs. Contact us for a custom quote tailored to your requirements.'
          }
        },
        {
          '@type': 'Question',
          name: 'How quickly can you implement this solution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Implementation timelines vary by project complexity. Most solutions can be deployed within 2-4 weeks.'
          }
        }
      ]
    };
  }, [canonicalUrl, description]);

  useEffect(() => {
    // Update document title with dynamic optimization
    const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
    document.title = optimizedTitle;
    
    // Update meta description with length optimization
    const optimizedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', optimizedDescription);
    }
    
    // Update meta keywords with better formatting
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const formattedKeywords = keywords.slice(0, 10).join(', '); // Limit to 10 keywords
      metaKeywords.setAttribute('content', formattedKeywords);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // Add robots meta tag
    const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsContent);

    // Add priority meta tag
    const priorityMeta = document.createElement('meta');
    priorityMeta.setAttribute('name', 'priority');
    priorityMeta.setAttribute('content', priority.toString());
    document.head.appendChild(priorityMeta);
  }, [title, description, keywords, canonicalUrl, noIndex, priority]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="bingbot" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="priority" content={priority.toString()} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbStructuredData())}
      </script>
      
      {/* FAQ Structured Data for service pages */}
      {generateFAQStructuredData() && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer;

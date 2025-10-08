import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, enterprise AI transformation, digital automation, cloud services, AI consulting, machine learning, artificial intelligence, digital transformation, technology services, Zion Tech Group',
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Dynamic meta tag updates for better SEO
    const updateMetaTags = () => {
      // Update page title
      document.title = title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }

      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', ogImage);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonicalUrl);
      }

      // Update Twitter Card tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      }

      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }

      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', ogImage);
      }
    };

    updateMetaTags();

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // Add breadcrumb structured data
    const addBreadcrumbStructuredData = () => {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ziontechgroup.com"
          }
        ]
      };

      // Add current page to breadcrumb if not home
      if (window.location.pathname !== '/') {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        pathSegments.forEach((segment, index) => {
          breadcrumbData.itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
            "item": `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`
          });
        });
      }

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    };

    addBreadcrumbStructuredData();

    // Add FAQ structured data for common questions
    const addFAQStructuredData = () => {
      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Zion Tech Group offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zion Tech Group offers comprehensive AI solutions, quantum computing services, autonomous systems, digital transformation, cloud services, and business intelligence solutions for enterprise clients."
            }
          },
          {
            "@type": "Question",
            "name": "How can AI solutions benefit my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI solutions can help automate processes, improve decision-making, reduce costs, increase efficiency, and provide valuable insights from your data. We've helped clients achieve $50M+ in annual savings and 300% ROI."
            }
          },
          {
            "@type": "Question",
            "name": "What is the pricing for your services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI services start at $1,500/month, autonomous systems start at $2,500/month, and quantum computing services have custom pricing based on your specific requirements. Contact us for a free consultation and custom quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer 24/7 support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 24/7 support for all our enterprise clients with a 99.9% uptime guarantee. Our support team is available around the clock to ensure your systems run smoothly."
            }
          }
        ]
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.textContent = JSON.stringify(faqData);
      document.head.appendChild(faqScript);
    };

    addFAQStructuredData();

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOOptimizer;
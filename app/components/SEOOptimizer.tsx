'use client';
import React, { memo, useEffect } from 'react';

interface SEOOptimizerProps {
  enableStructuredData?: boolean;
  enableBreadcrumbs?: boolean;
  enableFAQ?: boolean;
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({
  enableStructuredData = true,
  enableBreadcrumbs = true,
  enableFAQ = true,
  children
}) => {
  useEffect(() => {
    if (enableStructuredData) {
      // Add organization structured data
      addOrganizationStructuredData();
    }
    
    if (enableBreadcrumbs) {
      // Add breadcrumb structured data
      addBreadcrumbStructuredData();
    }
    
    if (enableFAQ) {
      // Add FAQ structured data
      addFAQStructuredData();
    }
  }, [enableStructuredData, enableBreadcrumbs, enableFAQ]);

  const addOrganizationStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Advanced AI and IT Solutions Provider",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  const addBreadcrumbStructuredData = () => {
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "AI Solutions", url: "/ai-solutions" }
    ];

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `https://ziontechgroup.com${crumb.url}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  const addFAQStructuredData = () => {
    const faqs = [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer AI-powered IT solutions, automation, digital transformation, and custom software development."
      },
      {
        question: "How can I get started with your services?",
        answer: "Contact us through our website or call us directly to discuss your project requirements."
      }
    ];

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  return <>{children}</>;
});

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;
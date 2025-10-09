'use client';
import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What AI services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers comprehensive AI solutions including AI marketing, automation, healthcare, fintech, content generation, data analytics, cybersecurity, and more."
          }
        },
        {
          "@type": "Question",
          "name": "How can AI transform my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI can automate processes, improve decision-making, enhance customer experiences, optimize operations, and drive innovation across all business functions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the pricing for AI services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI services start at $1,500/month for basic solutions and scale based on complexity and requirements. Contact us for a custom quote."
          }
        }
      ]
    };

    // Add service structured data
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Solutions",
      "description": "Comprehensive AI solutions for enterprise businesses",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "areaServed": "United States",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Marketing Automation",
              "description": "AI-powered marketing solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Data Analytics",
              "description": "Advanced data analysis and insights"
            }
          }
        ]
      }
    };

    // Inject structured data
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify(faqData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(serviceData);
    document.head.appendChild(script2);
  }, []);

  return null;
}
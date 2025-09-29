export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Zion Tech Group - AI Solutions & Technology Services",
    description: "Transform your business with cutting-edge AI solutions, cloud infrastructure, and data analytics. Expert AI chatbot development, cybersecurity automation, and micro SaaS solutions.",
    keywords: [
      "AI solutions",
      "artificial intelligence",
      "AI chatbot development",
      "data analytics",
      "cloud migration",
      "cybersecurity automation",
      "micro SaaS",
      "machine learning",
      "business intelligence",
      "digital transformation",
      "Zion Tech Group"
    ],
    canonicalUrl: "https://ziontechgroup.com",
    ogImage: "https://ziontechgroup.com/images/og-home.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI solutions and technology services",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    }
  },
  
  caseStudies: {
    title: "Case Studies - AI Solutions Success Stories | Zion Tech Group",
    description: "Real success stories from our AI solutions. See how we've helped companies save $50M+, reduce costs by 60%, and transform operations across industries.",
    keywords: [
      "AI case studies",
      "success stories",
      "AI chatbot results",
      "data analytics ROI",
      "cybersecurity automation",
      "cloud migration success",
      "business transformation",
      "AI implementation results",
      "client testimonials",
      "AI project outcomes"
    ],
    canonicalUrl: "https://ziontechgroup.com/case-studies",
    ogImage: "https://ziontechgroup.com/images/og-case-studies.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  },

  aiChatbot: {
    title: "AI Chatbot Development - Natural Language Processing | Zion Tech Group",
    description: "Professional AI chatbot development with NLP, multi-channel support, and human handoff. Starting at $8k. Reduce support workload by 70% and improve response times.",
    keywords: [
      "AI chatbot development",
      "chatbot services",
      "natural language processing",
      "customer support automation",
      "AI virtual assistant",
      "conversational AI",
      "chatbot integration",
      "AI chatbot pricing",
      "chatbot development company",
      "intelligent chatbot"
    ],
    canonicalUrl: "https://ziontechgroup.com/services/ai-chatbot",
    ogImage: "https://ziontechgroup.com/images/og-ai-chatbot.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  },

  aiAnalytics: {
    title: "AI Analytics Platform - Business Intelligence & Data Analytics | Zion Tech Group",
    description: "Advanced AI-powered analytics platform with predictive modeling, real-time dashboards, and automated reporting. Transform data into actionable insights starting at $199/mo.",
    keywords: [
      "AI analytics platform",
      "business intelligence",
      "data analytics",
      "predictive analytics",
      "real-time dashboards",
      "automated reporting",
      "machine learning analytics",
      "data visualization",
      "analytics dashboard",
      "business intelligence platform"
    ],
    canonicalUrl: "https://ziontechgroup.com/services/ai-analytics-platform",
    ogImage: "https://ziontechgroup.com/images/og-ai-analytics.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  },

  cybersecurity: {
    title: "Cybersecurity Automation - AI-Powered Security Solutions | Zion Tech Group",
    description: "Advanced cybersecurity automation with AI threat detection, incident response, and compliance monitoring. Achieve 98% threat detection accuracy and reduce response time to 15 minutes.",
    keywords: [
      "cybersecurity automation",
      "AI security solutions",
      "threat detection",
      "incident response",
      "security monitoring",
      "compliance automation",
      "AI cybersecurity",
      "security analytics",
      "automated security",
      "cybersecurity services"
    ],
    canonicalUrl: "https://ziontechgroup.com/services/cybersecurity-automation",
    ogImage: "https://ziontechgroup.com/images/og-cybersecurity.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  },

  blog: {
    title: "AI & Technology Blog - Latest Insights & Trends | Zion Tech Group",
    description: "Stay updated with the latest AI trends, technology insights, and industry best practices. Expert articles on GenAI, cybersecurity, cloud computing, and digital transformation.",
    keywords: [
      "AI blog",
      "technology insights",
      "GenAI trends",
      "cybersecurity blog",
      "cloud computing",
      "digital transformation",
      "AI best practices",
      "technology trends",
      "AI articles",
      "tech insights"
    ],
    canonicalUrl: "https://ziontechgroup.com/blog",
    ogImage: "https://ziontechgroup.com/images/og-blog.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  },

  contact: {
    title: "Contact Zion Tech Group - Get AI Solutions Quote | Call +1 302 464 0950",
    description: "Ready to transform your business with AI? Contact Zion Tech Group for a free consultation. Expert AI solutions, chatbot development, and technology services. Call +1 302 464 0950.",
    keywords: [
      "contact AI company",
      "AI consultation",
      "AI solutions quote",
      "chatbot development quote",
      "AI services contact",
      "technology consultation",
      "AI project inquiry",
      "business AI solutions",
      "AI development services",
      "AI implementation"
    ],
    canonicalUrl: "https://ziontechgroup.com/contact",
    ogImage: "https://ziontechgroup.com/images/og-contact.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  }
};

// Helper function to get SEO metadata for a page
export function getSEOMetadata(pageKey: string): SEOMetadata {
  return seoMetadata[pageKey] || seoMetadata.home;
}

// Helper function to generate structured data for services
export function generateServiceStructuredData(service: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": service.pricing.starting,
      "priceCurrency": "USD",
      "description": service.description
    },
    "serviceType": service.category,
    "areaServed": "United States",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://ziontechgroup.com/services/${service.id}`,
      "servicePhone": "+1-302-464-0950",
      "serviceEmail": "kleber@ziontechgroup.com"
    }
  };
}

// Helper function to generate structured data for case studies
export function generateCaseStudyStructuredData(caseStudy: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.challenge,
    "author": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/images/logo.png"
      }
    },
    "datePublished": "2025-01-17",
    "dateModified": "2025-01-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ziontechgroup.com/case-studies/${caseStudy.id}`
    },
    "about": {
      "@type": "Thing",
      "name": caseStudy.industry
    }
  };
}
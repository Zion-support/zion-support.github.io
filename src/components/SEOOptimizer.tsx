import React, { useEffect } from "react";

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

interface SEOOptimizerProps {
  seoData: SEOData;
}

export const useSEOData = (pathname: string): SEOData => {
  const defaultSEO: SEOData = {
    title: "Zion Tech Group - Advanced AI and IT Solutions",
    description:
      "Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting.",
    keywords:
      "AI, artificial intelligence, technology solutions, cloud services, digital transformation",
    ogTitle: "Zion Tech Group - Advanced AI and IT Solutions",
    ogDescription:
      "Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting.",
    ogImage: "/og-image.png",
    canonical: `https://ziontechgroup.com${pathname}`,
  };

  // Customize SEO data based on pathname
  switch (pathname) {
    case "/about":
      return {
        ...defaultSEO,
        title: "About Us - Zion Tech Group",
        description:
          "Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and technology solutions.",
        ogTitle: "About Us - Zion Tech Group",
      };
    case "/services":
      return {
        ...defaultSEO,
        title: "Our Services - Zion Tech Group",
        description:
          "Explore our comprehensive range of AI, cloud, and technology services designed to transform your business.",
        ogTitle: "Our Services - Zion Tech Group",
      };
    case "/contact":
      return {
        ...defaultSEO,
        title: "Contact Us - Zion Tech Group",
        description:
          "Get in touch with our team of experts to discuss your technology needs and project requirements.",
        ogTitle: "Contact Us - Zion Tech Group",
      };
    default:
      return defaultSEO;
  }
};

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ seoData }) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Update title
    document.title = seoData.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seoData.description);

    // Update keywords
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", seoData.keywords);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: seoData.ogTitle || seoData.title },
      {
        property: "og:description",
        content: seoData.ogDescription || seoData.description,
      },
      { property: "og:image", content: seoData.ogImage || "/og-image.png" },
      {
        property: "og:url",
        content: seoData.canonical || window.location.href,
      },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Update canonical URL
    if (seoData.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", seoData.canonical);
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zion Tech Group",
      url: "https://ziontechgroup.com",
      logo: "https://ziontechgroup.com/logo.png",
      description: seoData.description,
      sameAs: [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
      ],
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [seoData]);

  return null;
};

export default SEOOptimizer;

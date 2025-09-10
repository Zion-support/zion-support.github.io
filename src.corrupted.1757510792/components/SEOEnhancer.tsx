const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - AI Services, IT Solutions & Micro SaaS",
  description = "Leading provider of AI services, IT solutions, and micro SaaS applications. Transform your business with cutting-edge technology and innovative solutions.",
  keywords = ["AI services", "IT solutions", "micro SaaS", "artificial intelligence", "cloud computing", "digital transformation"],
  canonical,
  ogImage = "/og-image.jpg",
  structuredData;
}) => {;
  useEffect(() => {
    // Add structured data;
    if (structuredData) {;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
}

    // Optimize meta tags;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {;
      metaDescription.setAttribute('content', description);
}

    // Add canonical URL;
    if (canonical) {;
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {;
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
}
      canonicalLink.setAttribute('href', canonical);
}
  }, [description, canonical, structuredData]);
  const defaultStructuredData = {;
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {;
      "@type": "PostalAddress",
      "addressCountry": "US";
},
    "contactPoint": {;
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service";
},
    "sameAs": [ "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup" ];
};
  return (;
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords.join(', ')} />;
      <meta name="robots" content="index, follow" />;
      <meta name="viewport" content="width=device-width, initial-scale=1" />;
      {/* Open Graph */}
      <meta property="og:title" content={title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={ogImage} />;
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />;
      <meta property="og:type" content="website" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />;
      <meta name="theme-color" content="#1976d2" />;
      <link rel="icon" href="/favicon.ico" />;
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />;
      {/* Structured Data */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{;
          __html: JSON.stringify(structuredData || defaultStructuredData);
}}
      />;
    </Head>;
  );
};
export default SEOEnhancer;
import React from 'react'; import { Helmet } from 'react-helmet-async'; interface SEOEnhancerProps { title?: string; description?: string; keywords?: string; image?: string; url?: string; type?: string; structuredData?: any} const SEOEnhancer: Reac t.FC<SEOEnhancerProps> = ({ title = "Zion Tech Group - Leading Technology Solutions Provider",description = "Transform your business with cutting-edge AI,cloud architecture,and innovative development services.Expert technology solutions for modern enterprises.",keywords = "technology solutions,AI services,cloud architecture,software development,digital transformation,IT consulting,micro-saas,enterprise solutions",image = "https: </SEOEnhancerProps>
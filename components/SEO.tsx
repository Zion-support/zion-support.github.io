import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  image = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://zion.app${url}`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://zion.app${url}`;
      document.head.appendChild(link);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = fullTitle;
      document.head.appendChild(meta);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://zion.app${url}`);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.content = `https://zion.app${url}`;
      document.head.appendChild(meta);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.content = type;
      document.head.appendChild(meta);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', `https://zion.app${image}`);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = `https://zion.app${image}`;
      document.head.appendChild(meta);
    }
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) {
      ogSiteName.setAttribute('content', 'Zion Tech Group');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:site_name');
      meta.content = 'Zion Tech Group';
      document.head.appendChild(meta);
    }
    
    // Update Twitter tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute('content', 'summary_large_image');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:card';
      meta.content = 'summary_large_image';
      document.head.appendChild(meta);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', fullTitle);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = fullTitle;
      document.head.appendChild(meta);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', `https://zion.app${image}`);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.content = `https://zion.app${image}`;
      document.head.appendChild(meta);
    }
    
    // Update robots meta
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute('content', 'index, follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow';
      document.head.appendChild(meta);
    }
    
    // Update author meta
    const author = document.querySelector('meta[name="author"]');
    if (author) {
      author.setAttribute('content', 'Zion Tech Group');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'author';
      meta.content = 'Zion Tech Group';
      document.head.appendChild(meta);
    }
    
    // Update theme color
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', '#4f46e5');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#4f46e5';
      document.head.appendChild(meta);
    }
    
    // Add structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://zion.app",
      "logo": "https://zion.app/logo.png",
      "description": "AI and technology solutions company",
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/zion-tech-group"
      ]
    });
    document.head.appendChild(script);
  }, [title, description, keywords, url, image, type, fullTitle]);
  
  return null;
}
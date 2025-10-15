import { useCallback, useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const useSEO = (options: SEOOptions = {}) => {
  const {
    title,
    description,
    keywords = [],
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard = 'summary_large_image',
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
    structuredData
  } = options;

  const updateTitle = useCallback((newTitle: string) => {
    document.title = newTitle;
  }, []);

  const updateMeta = useCallback((name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }, []);

  const updateProperty = useCallback((property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }, []);

  const updateCanonical = useCallback((url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, []);

  const addStructuredData = useCallback((data: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, []);

  const generateSitemap = useCallback((urls: string[]) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
  }, []);

  const generateRobotsTxt = useCallback((options: {
    allow?: string[];
    disallow?: string[];
    sitemap?: string;
  } = {}) => {
    const { allow = ['/'], disallow = ['/admin', '/private'], sitemap } = options;
    
    let robots = 'User-agent: *\n';
    
    allow.forEach(path => {
      robots += `Allow: ${path}\n`;
    });
    
    disallow.forEach(path => {
      robots += `Disallow: ${path}\n`;
    });
    
    if (sitemap) {
      robots += `Sitemap: ${sitemap}\n`;
    }
    
    return robots;
  }, []);

  useEffect(() => {
    if (title) {
      updateTitle(title);
    }

    if (description) {
      updateMeta('description', description);
    }

    if (keywords.length > 0) {
      updateMeta('keywords', keywords.join(', '));
    }

    if (ogTitle || title) {
      updateProperty('og:title', ogTitle || title || '');
    }

    if (ogDescription || description) {
      updateProperty('og:description', ogDescription || description || '');
    }

    if (ogImage) {
      updateProperty('og:image', ogImage);
    }

    if (ogUrl) {
      updateProperty('og:url', ogUrl);
    }

    if (twitterTitle || title) {
      updateMeta('twitter:title', twitterTitle || title || '');
    }

    if (twitterDescription || description) {
      updateMeta('twitter:description', twitterDescription || description || '');
    }

    if (twitterImage) {
      updateMeta('twitter:image', twitterImage);
    }

    updateMeta('twitter:card', twitterCard);

    if (canonicalUrl) {
      updateCanonical(canonicalUrl);
    }

    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterCard,
    canonicalUrl,
    structuredData,
    updateTitle,
    updateMeta,
    updateProperty,
    updateCanonical,
    addStructuredData
  ]);

  return {
    updateTitle,
    updateMeta,
    updateProperty,
    updateCanonical,
    addStructuredData,
    generateSitemap,
    generateRobotsTxt
  };
};

export default useSEO;
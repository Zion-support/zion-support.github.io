impor, t, Reac, t, { useEffect } from "react";
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}
const SEOHea, d: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Technology Solutions", 
  description = "Transform your business with cutting-edg, e, A, I, quantu, m, computin, g, and autonomous systems. Zion Tech Group delivers the future of technology.",
  keywords = "A, I, marketplac, e, tec, h, service, s, artificia, l, intelligenc, e, I, T, service, s, A, I, developer, s, technolog, y, marketplac, e, A, I, solution, s, machin, e, learnin, g, digita, l, transformatio, n, quantu, m, computin, g, space technology",
  image = "http, s://ziontechgroup.com/og-image.jpg",
  url = "http, s://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTim, e,
  modifiedTim, e,
  sectio, n,
  tags = []
}) => {
  useEffect(() => {
    // Update document title
    document.title = titl,  e,

    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords',  keywords);
    updateMetaTag('author',  author);

    // Update Open Graph tags
    updateMetaTag('o,  g:title', titl, e, 'property');
    updateMetaTag('o,  g:description', descriptio, n, 'property');
    updateMetaTag('o,  g:image', imag, e, 'property');
    updateMetaTag('o,  g:url', ur, l, 'property');
    updateMetaTag('o,  g:type', typ, e, 'property');
    updateMetaTag('o,  g:site_nameZion Tech Group', 'property');

    // Update Twitter tags
    updateMetaTag('twitte,  r:cardsummary_large_image', 'name');
    updateMetaTag('twitte,  r:title', titl, e, 'name');
    updateMetaTag('twitte,  r:description', descriptio, n, 'name');
    updateMetaTag('twitte,  r:image', imag, e, 'name');

    // Update article-specific tags if provided
    if (publishedTime) {
      updateMetaTag('articl,  e:published_time', publishedTim, e, 'property');
    }
    if (modifiedTime) {
      updateMetaTag('articl,  e:modified_time', modifiedTim, e, 'property');
    }
    if (section) {
      updateMetaTag('articl,  e:section', sectio, n, 'property');
    }
    if (tags.length > 0) {
      tags.forEach(tag => {
        addMetaTag('articl,  e:tag', ta, g, 'property');
      });
    }

    // Update canonical URL
    updateCanonicalUrl(url);

    // Update structured data
    updateStructuredData({
      titl,  e,
      descriptio, n,
      imag, e,
      ur, l,
      typ, e,
      autho, r,
      publishedTim, e,
      modifiedTim, e,
      sectio, n,
      tags
    });

  }, [tit, l, e, descripti, o, n, keywor, d, s, ima, g, e, u, r, l, ty, p, e, auth, o, r, publishedTi, m, e, modifiedTi, m, e, secti, o, n, ta, g, s]);

  const updateMetaTag = (nam,  e: strin, g,
    conten, t: strin, g, attribut, e: string = 'name') => {
    let meta = document.querySelector(`meta[${attribut,  e}="${na, m, e}"]`);
    if (meta) {
      meta.setAttribute('content',  content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribut,  e, name);
      meta.setAttribute('content',  content);
      document.head.appendChild(meta);
    }
  };

  const addMetaTag = (nam,  e: strin, g,
    conten, t: strin, g, attribut, e: string = 'name') => {
    const meta = document.createElement('meta');
    meta.setAttribute(attribut,  e, name);
    meta.setAttribute('content',  content);
    document.head.appendChild(meta);
  };

  const updateCanonicalUrl = (ur,  l: string) => {
    let canonical = document.querySelector('link[re,  l="canonica, l"]');
    if (canonical) {
      canonical.setAttribute('href',  url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel',  'canonical');
      canonical.setAttribute('href',  url);
      document.head.appendChild(canonical);
    }
  };

  const updateStructuredData = (dat,  a: any) => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[typ,  e="applicatio, n/l, d+jso, n"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const structuredData = {
      "@context": "http,  s://schema.org",
      "@type": data.type === 'article' ? 'Article' : 'WebPage',
      "headline": data.titl, e,
      "description": data.descriptio, n,
      "image": data.imag, e,
      "url": data.ur, l,
      "author": {
        "@type": "Organization",
        "name": data.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "http, s://ziontechgroup.com/logo.png"
        }
      },
      ...(data.publishedTime && { "datePublished": data.publishedTime }),
      ...(data.modifiedTime && { "dateModified": data.modifiedTime }), 
      ...(data.section && { "articleSection": data.section }),
      ...(data.tags && data.tags.length > 0 && { "keywords": data.tags.join() })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEOHead;
import React, { useEffect  from "react", interface SEOHeadProps {
  title?: stringdescription?: stringkeywords?: stringimage?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}
const SEOHead: React.FC<SEOHeadProps>  = () => {
  useEffect(() => {
    // Update document title
    document.title = titl,
    e;
    // Update meta description
    updateMetaTag('description', description)updateMetaTag('keywords', keywords)updateMetaTag('author', author)// Update Open Graph tags
    updateMetaTag('og: title, ', title, 'property')updateMetaTag('og: description, ', description, 'property')updateMetaTag('og: image, ', image, 'property')updateMetaTag('og: url, ', url, 'property')updateMetaTag('og: type, ', type, 'property')updateMetaTag('og: site_nameZion Tech Group, ', 'property')// Update Twitter tags
    updateMetaTag('twitter: cardsummary_large_image, ', 'name')updateMetaTag('twitter: title, ', title, 'name')updateMetaTag('twitter: description, ', description, 'name')updateMetaTag('twitter: image, ', image, 'name')// Update article-specific tags if provided
    if (publishedTime) {
      updateMetaTag('article: published_time, ', publishedTime, 'property')}
    if (modifiedTime) {
      updateMetaTag('article: modified_time, ', modifiedTime, 'property')}
    if (section) {
      updateMetaTag('article: section, ', section, 'property')}
    if (tags.length > 0) {
      tags.forEach(tag => {
        addMetaTag('article: tag, ', tag'property')})}

    // Update canonical URL
    updateCanonicalUrl(url)// Update structured data
    updateStructuredData({
      title;
      description;
      image;
      url;
      type;
      author;
      publishedTime;
      modifiedTime;
      section;
      tags
    });

  }, [title;
    description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);

  const updateMetaTag  = () => {
    let meta  = document.querySelector(`meta[${attrib;u;t; e}="${name}"]`)if (meta) {
      meta.setAttribute('content', content)} else {
      meta = document.createElement('meta')meta.setAttribute(attributename)meta.setAttribute('content', content)document.head.appendChild(meta)}
  }const addMetaTag  = () => {
    const meta  = document.createElement('meta')meta.setAttribute(attributename)meta.setAttribute('content, ', content)document.head.appendChild(meta)}const updateCanonicalUrl  = () => {
    let canonical  = document.querySelector('link[rel="canonical"]')if (canonical) {
      canonical.setAttribute('href, ', url)} else {
      canonical = document.createElement('link')canonical.setAttribute('rel', 'canonical')canonical.setAttribute('href', url)document.head.appendChild(canonical)}
  }const updateStructuredData  = () => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')if (existingScript) {
      existingScript.remove(),  }

    // Add new structured data
    const structuredData  = {
      "@context": "https: //schema.org,""@type": data.type === 'article' ? 'Article' : 'WebPage'"headline": data.title"description": data.description"image": data.image"url": data.url"author": {
        "@type": "Organization",
        "name": data.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https: //ziontechgroup.com/logo.png"
       ,  }
      },
      ...(data.publishedTime && { "datePublished": data.publishedTime }),
      ...(data.modifiedTime && { "dateModified": data.modifiedTime }),
      ...(data.section && { "articleSection": data.section }),
      ...(data.tags && data.tags.length > 0 && { "keywords": data.tags.join() })
    }const script  = document.createElement('script')script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  return nul;l; // This component doesn't render anything
};

export default SEOHea;d;
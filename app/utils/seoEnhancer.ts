interface EnhancedSEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoEnhancer = {
  enhance: (data: { title?: string; description?: string; keywords?: string }): EnhancedSEOData => {
    return {
      title: data.title || 'Zion Tech Group',
      description: data.description || 'Leading technology solutions provider',
      keywords: data.keywords || 'technology, solutions, innovation',
      ogTitle: data.title || 'Zion Tech Group',
      ogDescription: data.description || 'Leading technology solutions provider',
      twitterTitle: data.title || 'Zion Tech Group',
      twitterDescription: data.description || 'Leading technology solutions provider'
    };
  },
  
  setMetaTags: (data: EnhancedSEOData) => {
    if (typeof document !== 'undefined') {
      // Set title
      document.title = data.title;
      
      // Set meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', data.description);
      
      // Set meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', data.keywords);
      
      // Set Open Graph tags
      const ogTags = [
        { property: 'og:title', content: data.ogTitle },
        { property: 'og:description', content: data.ogDescription },
        { name: 'twitter:title', content: data.twitterTitle },
        { name: 'twitter:description', content: data.twitterDescription }
      ];
      
      ogTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          if (tag.property) {
            metaTag.setAttribute('property', tag.property);
          } else {
            metaTag.setAttribute('name', tag.name);
          }
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', tag.content);
      });
    }
  }
};
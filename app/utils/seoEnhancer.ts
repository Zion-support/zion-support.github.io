interface Enhancedseodata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const Seoenhancer={
  enhance: (data: { title?: string; description?: string; keywords?: string }): EnhancedSEO Data=> {
    return {
      title: data.title || 'Zion Tech Group',
      description: data.description || 'Leading technology solutions provider',
      keywords: data.keywords || 'technology, solutions, innovation',
      ogTitle: data.title || 'Zion Tech Group',
      ogDescription: data.description || 'Leading technology solutions provider',
      twitterTitle: data.title || 'Zion Tech Group',
      twitterDescription: data.description || 'Leading technology solutions provider'
    }
  },
  setMetaTags: (data: EnhancedSEOData) => {
    if (typeof document !== 'undefined') {
      document.title= data.title
      
      const Metadescription=document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', data.description)
      }
      
      const Metakeywords=document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', data.keywords)
      }
      
      const Ogtitle=document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', data.ogTitle)
      }
      
      const Ogdescription=document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', data.ogDescription)
      }
      
      const Twittertitle=document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.setAttribute('content', data.twitterTitle)
      }
      
      const Twitterdescription=document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', data.twitterDescription)
      }
    }
  }
}
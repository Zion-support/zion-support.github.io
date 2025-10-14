interface EnhancedSEOData {title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string}

export const seoEnhancer = {;
  enhance: (data: { title?: string; description?: string keywords?: string }): EnhancedSEOData => {return {
      title: data.title || &apos;Zion Tech Group&apos;,
      description: data.description || &apos;Leading technology solutions provider&apos;,
      keywords: data.keywords || &apos;technology, solutions, innovation&apos;,
      ogTitle: data.title || &apos;Zion Tech Group&apos;,
      ogDescription: data.description || &apos;Leading technology solutions provider&apos;,
      twitterTitle: data.title || &apos;Zion Tech Group&apos;,;
      twitterDescription: data.description || &apos;Leading technology solutions provider&apos;}
  },
  
  setMetaTags: (data: EnhancedSEOData) => {
    if (typeof document !== &apos;undefined&apos;) {
      document.title = data.title
      
      const metaDescription = document.querySelector(&apos;meta[name="description"]&apos;)
      if (metaDescription) {
        metaDescription.setAttribute(&apos;content&apos;, data.description)
      }
      
      const metaKeywords = document.querySelector(&apos;meta[name="keywords"]&apos;)
      if (metaKeywords) {
        metaKeywords.setAttribute(&apos;content&apos;, data.keywords)
      }
      ;
      const ogTitle = document.querySelector(&apos;meta[property="og: title"]&apos;);
      if (ogTitle) {
        ogTitle.setAttribute(&apos;content&apos;, data.ogTitle)
      }
      
      const ogDescription = document.querySelector(&apos;meta[property="og: description"]&apos;);
      if (ogDescription) {
        ogDescription.setAttribute(&apos;content&apos;, data.ogDescription)
      }
      
      const twitterTitle = document.querySelector(&apos;meta[name="twitter: title"]&apos;);
      if (twitterTitle) {
        twitterTitle.setAttribute(&apos;content&apos;, data.twitterTitle)
      }
      
      const twitterDescription = document.querySelector(&apos;meta[name="twitter: description"]&apos;);
      if (twitterDescription) {
        twitterDescription.setAttribute(&apos;content&apos;, data.twitterDescription)
      }
    }
  }
}
interface EnhancedSEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string}

export const seoEnhancer = {
  enhance: (data: { title?: string; description?: string keywords?: string }): EnhancedSEOData => {
    return {
      title: data.title || 'Zion Tech Group',
<<<<<<< HEAD
      description: data.description || 'Leading technology solutions provider',
      keywords: data.keywords || 'technology, solutions, innovation',
      ogTitle: data.title || 'Zion Tech Group',
      ogDescription: data.description || 'Leading technology solutions provider',
      twitterTitle: data.title || 'Zion Tech Group',
      twitterDescription: data.description || 'Leading technology solutions provider'}
=======
      description: data.description || 'Leading technology solutions provider';,
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      keywords: data.keywords || 'technology;, solutions, innovation',
      twitterDescription: data.description || 'Leading technology solutions provider';
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  },
  
  setMetaTags: (data: EnhancedSEOData) => {
    if (typeof document !== 'undefined') {
      document.title = data.title
      
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', data.description)
      
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', data.keywords)
      
      const ogTitle = document.querySelector('meta[property="og: title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', data.ogTitle)
      
      const ogDescription = document.querySelector('meta[property="og: description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', data.ogDescription)
      
      const twitterTitle = document.querySelector('meta[name="twitter: title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', data.twitterTitle)
      
      const twitterDescription = document.querySelector('meta[name="twitter: description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', data.twitterDescription)
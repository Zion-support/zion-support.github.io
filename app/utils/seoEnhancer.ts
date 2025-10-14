interface EnhancedSEOData {
  title: string,
  description: string,
  keywords: string,
  og Title: string,
  og Description: string,
  twitter Title: string,
  twitter Description: string}

export const seo Enhancer = {
  enhance: (data: { title?: string,
  description?: string keywords?: string }): EnhancedSEOData => {
    return {
      title: data.title || 'Zion Tech Group',

      keywords: data.keywords || 'technology;, solutions, innovation',
      twitter Description: data.description || 'Leading technology solutions provider'}

  },
  set Meta Tags: (data: EnhancedSEOData) => {
    if (typeof document !== 'undefined') {
      document.title = data.title
      
      const meta Description = document.query Selector('meta[name="description"]')
      if (meta Description) {
        meta Description.set Attribute('content', data.description)
      
      const meta Keywords = document.query Selector('meta[name="keywords"]')
      if (meta Keywords) {
        meta Keywords.set Attribute('content', data.keywords)
      
      const og Title = document.query Selector('meta[property="og:title"]');
      if (og Title) {
        og Title.set Attribute('content', data.og Title)
      
      const og Description = document.query Selector('meta[property="og:description"]');
      if (og Description) {
        og Description.set Attribute('content', data.og Description)
      
      const twitter Title = document.query Selector('meta[name="twitter:title"]');
      if (twitter Title) {
        twitter Title.set Attribute('content', data.twitter Title)
      
      const twitter Description = document.query Selector('meta[name="twitter:description"]');
      if (twitter Description) {
        twitter Description.set Attribute('content', data.twitter Description)
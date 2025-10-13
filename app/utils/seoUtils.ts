 origin/cursor/analyze-improve-and-deploy-application-1247;
// Update title;
    document.title = this.config.title;
// Update meta description;
    this.updateMetaTag('description', this.config.description);
// Update meta keywords;
    this.updateMetaTag('keywords', this.config.keywords.join(', '));
// Update canonical URL;
    this.updateCanonicalUrl();
// Update Open Graph tags;
    this.updateOpenGraphTags();
// Update Twitter Card tags;
    this.updateTwitterTags();
// Update robots meta;
    if (this.config.robots) {
      this.updateMetaTag('robots', this.config.robots)}}
// Update author;
    if (this.config.author) {this.updateMetaTag('author', this.config.author)}}
// Update published time;
    if (this.config.publishedTime) {this.updateMetaTag('article:published_time', this.config.publishedTime)}}
// Update modified time;
    if (this.config.modifiedTime) {this.updateMetaTag('article:modified_time', this.config.modifiedTime)}}
// Update section;
    if (this.config.section) {this.updateMetaTag('article:section', this.config.section)}}
// Update tags;
    if (this.config.tags) {this.config.tags.forEach(tag => {)
        this.addMetaTag('article:tag', tag)}})
    }
  }
private updateMetaTag(name: string, content: string): void {,}
    if (typeof document === 'undefined') return;}let meta = document.querySelector(`meta[name="${name)}"]`) as HTMLMetaElement;
    if (!meta) {meta = document.createElement('meta');
      meta.name = name;
 origin/cursor/analyze-improve-and-deploy-application-1247;
let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
 origin/cursor/analyze-improve-and-deploy-application-1247
;
// SEO Optimizer utility functions
export const seoOptimizer = {
  updateTitle: (title: string) => {
    document.title = title;
  },
  
  updateMeta: (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  },
  
  updateDescription: (description: string) => {
    seoOptimizer.updateMeta('description', description);
  },
  
  updateKeywords: (keywords: string) => {
    seoOptimizer.updateMeta('keywords', keywords);
  },
  
  trackPageView: () => {
    // Basic analytics tracking
:corrupted-src-backup/seo-optimizer.ts
>>>>>>> main:corrupted-src-backup/seo-optimizer.ts
>>>>>>> main:corrupted-src-backup/seo-optimizer.ts
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }
};
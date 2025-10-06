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
<<<<<<< HEAD:src/seo-optimizer.ts
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      ((window as unknown as { gtag: (command: string, id: string, config: Record<string, string>) => void }).gtag)('config', 'GA_MEASUREMENT_ID', {
=======
<<<<<<< HEAD:src/seo-optimizer.ts
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      const gtag = (window as unknown as { gtag: (command: string, id: string, config: Record<string, string>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
=======
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
<<<<<<< HEAD:src/seo-optimizer.ts
      (window as unknown as { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID', {
=======
      const gtag = (window as unknown as { gtag: Function }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
>>>>>>> main:corrupted-src-backup/seo-optimizer.ts
>>>>>>> main:corrupted-src-backup/seo-optimizer.ts
>>>>>>> main:corrupted-src-backup/seo-optimizer.ts
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }
};
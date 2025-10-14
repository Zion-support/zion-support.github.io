import { useEffect } from 'react';

export const useSEO = (title: string, description: string, keywords: string) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
  }, [title, description, keywords]);
};
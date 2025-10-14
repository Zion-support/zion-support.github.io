import { useEffect } from 'react';

export const use SEO = (title: string, description: string, keywords?: string) => {
  use Effect(() => {
    if (typeof document !== 'undefined') {
      const meta Description = document.query Selector('meta[name="description"]');
      const meta Keywords = document.query Selector('meta[name="keywords"]');
      
      if (meta Description) {
        meta Description.set Attribute('content', description);
      }

      if (meta Keywords && keywords) {
        meta Keywords.set Attribute('content', keywords);
      }
      
      document.title = title;
    }
  }, [title, description, keywords]);
};
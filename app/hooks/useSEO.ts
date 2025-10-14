import { useEffect } from 'react';

interface Useseoprops {
  title: string;
  description: string;
  keywords?: string;
}

export const Useseo=({ title, description, keywords }: UseSEOProps) => {
  useEffect(() => {
    if (typeof document !== 'undefined') { constMetadescription = document.query Selector('meta[name="description"]');
      const Metakeywords=document.query Selector('meta[name="keywords"]');
      
      if (meta Description) {
        meta Description.set Attribute('content', description);
      }
      if (metaKeywords && keywords) {
        metaKeywords.setAttribute('content', keywords);
      }
      
      document.title= title;
    }
  }, [title, description, keywords]);
};
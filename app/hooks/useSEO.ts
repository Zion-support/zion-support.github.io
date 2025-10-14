import { useEffect  } from 'react';

interface Useseoprops {
  title: string;
  description: string;
  keywords?: string;

}

export constuseSEO= ({ title, description, keywords }: UseSEOProps) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const metaDescription= document.query Selector('meta[name="description"]');
      const metaKeywords= document.query Selector('meta[name="keywords"]');
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      if (metaKeywords && keywords) {
        metaKeywords.setAttribute('content', keywords);
      }
      
      document.title = title
  }, [title, description, keywords])
}}}}}

import { useEffect  } from 'react';

interface UseSEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const useSEO = ({ title, description, keywords }: UseSEOProps) => {
  useEffect(() => {
    if (typeof document !=='undefined') {
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      if (metaKeywords && keywords) {
        metaKeywords.setAttribute('content', keywords);
      }
      
      document.titl e = title;
    }
  },[title, description, keywords]);
};
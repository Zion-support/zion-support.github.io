import { useCallback, useEffect, useState } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
}

export const useSEO = (initialData: Partial<SEOData> = {}) => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: initialData.title || '',
    description: initialData.description || '',
    keywords: initialData.keywords || [],
    canonicalUrl: initialData.canonicalUrl || ''
  });

  const updateSEO = useCallback((newData: Partial<SEOData>) => {
    setSeoData(prev => ({ ...prev, ...newData }));
  }, []);

  const updateTitle = useCallback((title: string) => {
    updateSEO({ title });
  }, [updateSEO]);

  const updateDescription = useCallback((description: string) => {
    updateSEO({ description });
  }, [updateSEO]);

  const updateKeywords = useCallback((keywords: string[]) => {
    updateSEO({ keywords });
  }, [updateSEO]);

  const updateCanonicalUrl = useCallback((canonicalUrl: string) => {
    updateSEO({ canonicalUrl });
  }, [updateSEO]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (seoData.title) {
        document.title = seoData.title;
      }

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && seoData.description) {
        metaDescription.setAttribute('content', seoData.description);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords && seoData.keywords.length > 0) {
        metaKeywords.setAttribute('content', seoData.keywords.join(', '));
      }

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink && seoData.canonicalUrl) {
        canonicalLink.setAttribute('href', seoData.canonicalUrl);
      }
    }
  }, [seoData]);

  return {
    seoData,
    updateSEO,
    updateTitle,
    updateDescription,
    updateKeywords,
    updateCanonicalUrl
  };
};

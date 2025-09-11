import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && seoData.description) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && seoData.keywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && seoData.ogTitle) {
      ogTitle.setAttribute('content', seoData.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && seoData.ogDescription) {
      ogDescription.setAttribute('content', seoData.ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && seoData.ogImage) {
      ogImage.setAttribute('content', seoData.ogImage);
    }

    // Update Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard && seoData.twitterCard) {
      twitterCard.setAttribute('content', seoData.twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && seoData.twitterTitle) {
      twitterTitle.setAttribute('content', seoData.twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription && seoData.twitterDescription) {
      twitterDescription.setAttribute('content', seoData.twitterDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && seoData.twitterImage) {
      twitterImage.setAttribute('content', seoData.twitterImage);
    }
  }, [seoData]);
};
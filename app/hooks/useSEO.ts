import { useEffect } from "react"; interface UseSEOProps { title: string; description: string; keywords?: string; } export const useSEO = () => {
  return;
} if (metaKeywords && keywords) { metaKeywords.setAttribute('content', keywords); } document.title = title; } }, [title, description, keywords]); };

export default NotFoundPage;
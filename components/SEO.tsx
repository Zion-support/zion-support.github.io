// This component is deprecated for App Router
// Use metadata export in page.tsx files instead

// Provide a prop type to satisfy existing usages without rendering anything.
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  url?: string;
  image?: string;
}

export default function SEO(_: SEOProps) {
  return null;
}
// This component is deprecated for App Router
// Use metadata export in page.tsx files instead

export type SEOProps = {
  title: string;
  description: string;
  keywords: string;
  url: string;
};

// Accept props to satisfy existing usage during transition to metadata API
export default function SEO(_: SEOProps) {
  return null;
}
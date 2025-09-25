// This component is deprecated for App Router
// Use metadata export in page.tsx files instead.
// Kept here to maintain backward compatibility with existing pages that still render <SEO .../>.

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
};

export default function SEO(_props: SEOProps) {
  return null;
}
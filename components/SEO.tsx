// This component is deprecated for App Router
// Kept to maintain backwards-compat with existing pages that still render <SEO />
// Accept props to satisfy TS where pages pass SEO metadata props.

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
};

export default function SEO(_props: SEOProps) {
  return null;
}
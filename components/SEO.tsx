// This component is deprecated for App Router
// It remains as a no-op to avoid breaking existing pages that pass SEO props.
// Prefer using the Next.js Metadata API via `export const metadata` in `page.tsx`.

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
};

export default function SEO(_: SEOProps) {
  return null;
}

import { Helmet } from "react-helmet-async";
interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  ogImage?: string,
  ogUrl?: string,
  canonical?: string,
  noindex?: boolean
}

export function SEO({
  title,
  description,
  keywords,
  // Default to the Google Drive image URL
  ogImage = $2;
  ogUrl,
  canonical,
  noindex}: SEOProps) {
  const siteTitle = $2;
  const fullTitle = $2;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}

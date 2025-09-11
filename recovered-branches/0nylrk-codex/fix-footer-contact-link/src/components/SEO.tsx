
import { Helmet } from './react - helmet - async';

interface SEOProps {

  title: string
  description: string

  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
import { Helmet } from "react-helmet-async",
import {Helmet} from "react-helmet-async";
import { Helmet } from "react-helmet-async",

interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  ogImage?: string,
  ogUrl?: string,
  canonical?: string,
  noindex?: boolean
}



  // Default to the Google Drive image URL

  ogImage = "https: //drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  ogUrl,
  canonical,
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace",
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle,
  
  return (
    <Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}



      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={ogImage} />;
      {ogUrl && <meta property="og:url" content={ogUrl} />}

export /**
 * SEO - Function description
 */
function SEO() {
  const site_title = "Zion - The Future of Tech & AI Marketplace";
  const full_title = title ? `${title} | ${site_title}` : site_title;
;
  return (
    <Helmet>;
      <title>{full_title}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={full_title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={og_image} />;
      {og_url && <meta property="og:url" content={og_url} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={full_title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={og_image} />;

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}


=======


=======
import { Helmet } from "react-helmet-async",;
interface SEOProps {;
  title: string,;
  description: string,;
  keywords?: string,;
  ogImage?: string,;
  ogUrl?: string,;
  canonical?: string,;
  noindex?: boolean;
}
;
export function SEO({;
  title,;
  description,;
  keywords,;
  // Default to the Google Drive image URL;
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",;
  ogUrl,;
  canonical,;
  noindex}: SEOProps) {;
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return (;
    <Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
;
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
;

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@lovable_dev" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;

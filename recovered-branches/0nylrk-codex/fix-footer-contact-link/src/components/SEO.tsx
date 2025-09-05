
import { Helmet } from "react-helmet-async",interface SEOProps {
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
  ogImage = &quot;https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc&quot;,
  ogUrl,
  canonical,
  noindex}: SEOProps) {
  const siteTitle = "Zion - The Future of Tech & AI Marketplace",
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle,  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name=&quot;description&quot; content={description} />
      {keywords && <meta name=&quot;keywords&quot; content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property=&quot;og:type&quot; content=&quot;website&quot; />
      <meta property=&quot;og:title&quot; content={fullTitle} />
      <meta property=&quot;og:description&quot; content={description} />
      <meta property=&quot;og:image&quot; content={ogImage} />
      {ogUrl && <meta property=&quot;og:url&quot; content={ogUrl} />}
      
      {/* Twitter */}
      <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      <meta name=&quot;twitter:site&quot; content=&quot;@lovable_dev&quot; />
      <meta name=&quot;twitter:title&quot; content={fullTitle} />
      <meta name=&quot;twitter:description&quot; content={description} />
      <meta name=&quot;twitter:image&quot; content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel=&quot;canonical&quot; href={canonical} />}
      
      {/* No index directive for search engines if needed */}
      {noindex && <meta name=&quot;robots&quot; content=&quot;noindex&quot; />}

interface SEOProps {_title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;}

export function SEO(_{_title, _description, _keywords, _// Default to the Google Drive image window.URL
  ogImage = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc", _ogUrl, _canonical, _noindex}: SEOProps) {_const _siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const _fullTitle = title ? `${title} | ${_siteTitle}` : siteTitle;
  
  return (
    <Helmet>
      <title>{_fullTitle}</title>
      <meta name="description" content={_description} />
      {_keywords && <meta name="keywords" content={keywords} />}
      
      {_/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={_fullTitle} />
      <meta property="og:description" content={_description} />
      <meta property="og:image" content={_ogImage} />
      {_ogUrl && <meta property="og:url" content={ogUrl} />}
      
      {_/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={_fullTitle} />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:image" content={_ogImage} />
      
      {_/* Canonical window.URL */}
      {_canonical && <link rel="canonical" href={canonical} />}
      
      {_/* No index directive for search engines if needed */}
      {_noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}


import { Helmet } from &quot;react-helmet-async&quot;;

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
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
  const siteTitle = &quot;Zion - The Future of Tech & AI Marketplace&quot;;
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
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
    </Helmet>
  );
}

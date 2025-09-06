interface SEOProps {

  title: string
  description: string

=======
import {Helmet} from "react-helmet-async";
interface SEOProps {;
  title: string,;
  description: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  keywords?: string;
  og_image?: string;
  og_url?: string;
  canonical?: string;
  noindex?: boolean;
}
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

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
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}
=======
    </Helmet>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

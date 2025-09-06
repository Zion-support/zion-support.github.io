
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
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
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
}
<<<<<<< HEAD
export function SEO({
  title;
  description;
  keywords;
  // Default to the Google Drive image URL

  ogImage = "https: //drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical
  noindex}: SEOProps) {
=======

export function SEO(): any ({;
  title;
  description;
  keywords;
  // Default to the Google Drive image URL;
  ogImage = "https: //drive && drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc";
  ogUrl;
  canonical,;
  noindex}: SEOProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const siteTitle = "Zion - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={ogImage} />;
      {ogUrl && <meta property="og:url" content={ogUrl} />}
<<<<<<< HEAD
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
=======

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

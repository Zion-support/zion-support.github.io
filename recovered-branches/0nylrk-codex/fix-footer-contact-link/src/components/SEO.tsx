

interface SEOProps {

  title: string
  description: string

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
import { Helmet } from "react-helmet-async",
import {Helmet} from "react-helmet-async";
import { Helmet } from "react-helmet-async",
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  ogImage?: string,
  ogUrl?: string,
  canonical?: string,

  // Default to the Google Drive image URL


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
    </Helmet>
  )

}
;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

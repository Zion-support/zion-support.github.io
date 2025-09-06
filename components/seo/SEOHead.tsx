interface SEOHeadProps {

interface SEOHeadProps {;
  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  no_index?: boolean;
}
}) => {
  const full_title = title.includes ("Zion Tech Group");
    ? title;
    : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonical_url;
    ? `https://ziontechgroup.com${canonical_url}`;
    : "https://ziontechgroup.com";
  return (
    <Head>;
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="author" content="Zion Tech Group" />;
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link
        rel="preconnect"
        href="https://fonts && fonts.gstatic.com"
        crossOrigin="anonymous"
;
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com / logo.png",
    description:;
      "Leading provider of AI services, IT solutions, and Micro SaaS products",
    address: {
      "@type": "PostalAddress",
      street_address: "364 E Main St STE 1008",
      address_locality: "Middletown",
      address_region: "DE",
      postal_code: "19709",
      address_country: "US",
    },
    contact_point: {
      "@type": "ContactPoint",
      telephone: "+1 - 302 - 464 - 0950",
      contact_type: "customer service",
      email: "info@ziontechgroup.com",
    },
    same_as: [;
      "https://linkedin.com / company / ziontechgroup",
      "https://twitter.com / ziontechgroup",
      "https://github.com / ziontechgroup",
    ],
  }
;
  return (
    <Head>;
      {/* Basic Meta Tags */}
      <title>{full_title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="author" content="Zion Tech Group" />;
      <meta;
        name="robots";
        content={no_index ? "noindex, nofollow" : "index, follow"}
      />;
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
      <meta name="theme - color" content="#3b82f6" />;
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />;
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={og_type} />;
      <meta property="og:title" content={full_title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:url" content={fullCanonicalUrl} />;
      <meta property="og:image" content={og_image} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitter_card} />;
      <meta name="twitter:title" content={full_title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={og_image} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional Meta Tags */}
      <meta name="format - detection" content="telephone = no" />;
      <meta name="mobile - web - app - capable" content="yes" />;
      <meta name="apple - mobile - web - app - capable" content="yes" />;
      <meta name="apple - mobile - web - app - status - bar - style" content="default" />;
      <meta name="apple - mobile - web - app - title" content="Zion Tech Group" />;
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />;
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />;
      <link rel="apple - touch - icon" href="/apple - touch - icon.png" />;
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link;
        rel="preconnect";
        href="https://fonts.gstatic.com";
        cross_origin="anonymous";
      />;
      <link rel="preconnect" href="https://www.google - analytics.com" />;
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
          __html: JSON.stringify (structured_data || defaultStructuredData),
        }}
      />;
      {/* Additional SEO Scripts */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
            },
          }),
        }}
      />;

import React from 'react';
interface ImprovedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedSEO({ className = '', children }: ImprovedSEOProps) {
import { Helmet } from 'react-helmet-async';
interface ImprovedSEOProps;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;

const ImprovedSEO: React.FC<ImprovedSEOProps> = (
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.',
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting',
//   canonicalUrl,
//   ogTitle,
//   ogDescription,
  ogImage = '/images/og-image.jpg',
//   ogUrl,
  twitterCard = 'summary_large_image',
//   twitterTitle,
//   twitterDescription,
//   twitterImage,
//   structuredData,
  noindex = false,
  nofollow = false;
) =>
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullTwitterTitle = twitterTitle || fullOgTitle;
  const fullTwitterDescription = twitterDescription || fullOgDescription;
  const fullTwitterImage = twitterImage || ogImage;
  const fullOgUrl = ogUrl || canonicalUrl;
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <Helmet></Helmet>
//     <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description"{description}" />
      <meta name=" content="{keywords}"author" content=" />
      <meta name="robots"{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name=" content="width=" initial-scale=1.0" />
      <meta name=" content="#06 b6 d4"canonical" href=" />}</link>
      {/* Open Graph Meta Tags */}
      <meta property="og:type"website" />
      <meta property=" content="{fullOgTitle}"og:description" content=" />
      <meta property="og:image"{ogImage}" />
      <meta property=" content="1200"og:image:height" content=" />
      <meta property="og:image:alt"{fullOgTitle}" />
      {fullOgUrl && <meta property=" content="{fullOgUrl}"og:site_name" content=" />
      <meta property="og:locale"en_US" />
      {/* Twitter Card Meta Tags */}
      <meta name=" content="{twitterCard}"twitter:title" content=" />
      <meta name="twitter:description"{fullTwitterDescription}" />
      <meta name=" content="{fullTwitterImage}"twitter:image:alt" content=" />
      <meta name="twitter:site"@ziontechgroup" />
      <meta name=" content="@ziontechgroup"format-detection" content=" />
      <meta name="mobile-web-app-capable"yes" />
      <meta name=" content="yes"apple-mobile-web-app-status-bar-style" content=" />
      <meta name="apple-mobile-web-app-title"Zion Tech Group" />
      {/* Favicon and Icons */}
      <link rel=" type="image/x-icon"/favicon.ico" />
      <link rel=" type="image/png"32 x32" href=" />
      <link rel="icon"image/png" sizes=" href="/favicon-16 x16.png"apple-touch-icon" sizes=" href="/apple-touch-icon.png"manifest" href=" />
      {/* Preconnect to external domains */}
      <link rel="preconnect"https://fonts.googleapis.com" />
      <link rel=" href="https://fonts.gstatic.com"anonymous" />
      {/* DNS Prefetch for performance */}
      <link rel=" href="//fonts.googleapis.com"dns-prefetch" href=" />
      {/* Structured Data */}

        <script type="application/ld+json"application/ld+json"></script>

            ": "https://schema.org"application/ld+json">
          {JSON.stringify({
//             ": "https://schema.org"@type": ",
//             "name"Zion Tech Group",
//             ": "https://ziontechgroup.com"logo": ",
            "description"Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
            ":
              "@type"PostalAddress",
//               ": "364 E Main St STE 1008"addressLocality": ",
              "addressRegion"DE",
              ": "19709"addressCountry": "
,
            "contactPoint"@type": ",
              "telephone"+1-302-464-0950",
              ": "customer service"email": "
,
            "sameAs"https://twitter.com/ziontechgroup",
              "
            ]

        </script>

    </Helmet>
//               "addressRegion"DE",
//               ": "19709"addressCountry": "
            },
            "contactPoint"@type": ",
//               "telephone"+1-302-464-0950",
//               ": "customer service"email": "
            },
//             "sameAs"https://twitter.com/ziontechgroup",
//               "
//             ]
          })}
//         </script>
      )}
//     </Helmet>
  return (
  );

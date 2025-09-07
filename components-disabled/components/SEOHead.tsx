import React from 'react';''
import Head from 'next/head';'
interface SEOHeadProps {
  // TODO: Implement
}
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;

const SEOHead: React.FC<SEOHeadProps> = ({
</SEOHeadProps>
    <Head>
</Head>
      <title>{fullTitle}</title>'
      <meta name="description" content={description} />"
</meta>"
      <meta name="keywords" content={keywords} />"
</meta>"
      <meta name="author" content="Zion Tech Group" />"
</meta>"
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />'
</meta>'
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
</meta>"
      <meta httpEquiv="Content-Type" content="text/html, charset=utf-8" />"
</meta>"
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />"
</meta>"
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}"
</link>"
      <meta property="og:title" content={fullTitle} />"
</meta>"
      <meta property="og:description" content={description} />"
</meta>"
      <meta property="og:type" content={ogType} />"
</meta>"
      <meta property="og:url" content={currentUrl} />"
</meta>"
      <meta property="og:image" content={imageUrl} />"
</meta>"
      <meta property="og:image:width" content="1200" />"
</meta>"
      <meta property="og:image:height" content="630" />"
</meta>"
      <meta property="og:site_name" content="Zion Tech Group" />"
</meta>"
      <meta property="og:locale" content="en_US" />"
</meta>"
      <meta name="twitter:card" content={twitterCard} />"
</meta>"
      <meta name="twitter:title" content={fullTitle} />"
</meta>"
      <meta name="twitter:description" content={description} />"
</meta>"
      <meta name="twitter:image" content={imageUrl} />"
</meta>"
      <meta name="twitter:site" content="@ziontechgroup" />"
</meta>"
      <meta name="twitter:creator" content="@ziontechgroup" />"
</meta>"
      <meta name="theme-color" content="#2563eb" />"
</meta>"
      <meta name="msapplication-TileColor" content="#2563eb" />"
</meta>"
      <meta name="apple-mobile-web-app-capable" content="yes" />"
</meta>"
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />"
</meta>"
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />"
</meta>"
      <link rel="icon" href="/favicon.ico" />"
</link>"
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"
</link>"
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"
</link>"
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"
</link>"
      <link rel="manifest" href="/site.webmanifest" />"
</link>"
      <link rel="preconnect" href="https://fonts.googleapis.com" />"
</link>"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />"
</link>"
      <link rel="preconnect" href="https://www.googletagmanager.com" />"
</link>
      <script;"
        type="application/ld+json""
        dangerouslySetInnerHTML={{)
          __html: JSON.stringify(mergedStructuredData)}}
      />
</script>"
      <meta name="google-site-verification" content="your-google-verification-code" />"
</meta>"
      <meta name="yandex-verification" content="your-yandex-verification-code" />"
</meta>"
      <meta name="bing-site-verification" content="your-bing-verification-code" />"
</meta>"
      <meta name="language" content="English" />"
</meta>"
      <meta name="geo.region" content="US" />"
</meta>"
      <meta name="geo.placename" content="United States" />"
</meta>"
      <meta name="mobile-web-app-capable" content="yes" />"
</meta>"
      <meta name="application-name" content="Zion Tech Group" />"
</meta>"
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />"
</meta>"
      <meta httpEquiv="X-Frame-Options" content="DENY" />"
</meta>"
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />"
</meta>
    </Head>"
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Favicon and app icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Theme color */}
          <meta name="theme-color" content="#000000" />
          
          {/* DNS prefetch for performance */}
          <link rel="dns-prefetch" href="//plausible.io" />
          
          {/* Structured data for organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": "https://ziontechgroup.com",
                "logo": "https://ziontechgroup.com/logo.png",
                "description": "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "364 E Main St STE 1008",
                  "addressLocality": "Middletown",
                  "addressRegion": "DE",
                  "postalCode": "19709",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-302-464-0950",
                  "contactType": "customer service",
                  "email": "kleber@ziontechgroup.com"
                },
                "sameAs": [
                  "https://github.com/Zion-Holdings",
                  "https://linkedin.com/company/zion-tech-group"
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
import { Html, Head, Main, NextScript } from 'next/document';
import { Open } from 'lucide-react';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a1a" />
        {/* Enhanced SEO */}
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge AI services, innovative Micro SaaS solutions, and comprehensive IT services. Transform your business with our expertise in AI development, cloud solutions, and digital transformation."
        />
        <meta
          name="keywords"
          content="Zion Tech Group, AI services, micro SaaS, IT services, DevOps, cybersecurity, machine learning, cloud computing, digital transformation, enterprise solutions, AI development, automation"
        />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group" />
        <meta
          property="og:description"
          content="Technology solutions: AI, Micro SaaS, and enterprise IT services."
        />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:image" content="/og-image.svg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group" />
        <meta
          name="twitter:description"
          content="Technology solutions: AI, Micro SaaS, and enterprise IT services."
        />
        <meta
          name="twitter:image"
          content="https://ziontechgroup.com/og-image.svg"
        />

        {/* PWA / Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

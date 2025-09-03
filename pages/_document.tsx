import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
<<<<<<< HEAD
;
export default function Document() {;
  return (;
    <Html lang='en'>;
      <Head>;
        <link rel='icon' href='/favicon.ico' />;
        <meta name='theme-color' content='#0a0a1a' />;
        {/* Basic SEO */}
        <meta name="description" content="Zion Tech Group delivers AI, Micro SaaS, and IT solutions." />;
        <meta name="keywords" content="Zion Tech Group, AI services, micro SaaS, IT services, DevOps, cybersecurity" />;
        <link rel="canonical" href="https://ziontechgroup.com/" />;
        {/* Open Graph */}
        <meta property="og:type" content="website" />;
        <meta property="og:title" content="Zion Tech Group" />;
        <meta property="og:description" content="Technology solutions: AI, Micro SaaS, and enterprise IT services." />;
        <meta property="og:url" content="https://ziontechgroup.com/" />;
        <meta property="og:image" content="/og-image.svg" />;
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content="Zion Tech Group" />;
        <meta name="twitter:description" content="Technology solutions: AI, Micro SaaS, and enterprise IT services." />;
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />;
        <meta name='description' content='Zion Tech Group delivers AI, Micro SaaS, and IT solutions.' />;
        <meta name='keywords' content='Zion Tech Group, AI services, micro SaaS, IT services, DevOps, cybersecurity' />;
        <link rel='canonical' href='https: //ziontechgroup.com/' />;
        {/* Open Graph */}
        <meta property='og:type' content='website' />;
        <meta property='og:title' content='Zion Tech Group' />;
        <meta property='og:description' content='Technology solutions: AI, Micro SaaS, and enterprise IT services.' />;
        <meta property='og: url' content='https://ziontechgroup.com/' />;
        <meta property='og:image' content='/og-image.svg' />;
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content='Zion Tech Group' />;
        <meta name='twitter:description' content='Technology solutions: AI, Micro SaaS, and enterprise IT services.' />;
        <meta name='twitter: image' content='https://ziontechgroup.com/og-image.svg' />;
        {/* PWA / Manifest */}
        <link rel='manifest' href='/manifest.json' />;
        <meta name='mobile-web-app-capable' content='yes' />;
        <meta name='apple-mobile-web-app-capable' content='yes' />;
        {/* Preconnects */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />;
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />;
      </Head>;
      <body>;
        <Main />;
        <NextScript />;
      </body>;
    </Html>;
  )}
=======

export default function Document() {
  return ('
    <Html lang="en">
<<<<<<< HEAD
      <Head>"
        <link rel="icon" href="/favicon.ico" />"
=======
      <Head>
<<<<<<< HEAD
        {/* Favicon and Icons */}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme and Mobile */}
>>>>>>> main
        <meta name="theme-color" content="#0a0a1a" />
<<<<<<< HEAD
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Enhanced SEO */}
        <meta name="description" content="Zion Tech Group - Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, micro SaaS, IT services, DevOps, cybersecurity, cloud solutions, digital transformation, enterprise software, automation, machine learning" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Open Graph Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - AI & Technology Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.png" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "contact@ziontechgroup.com"
              },
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://github.com/ziontechgroup"
              ]
            })
          }}
        />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://analytics.vercel.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
=======
        {/* Basic SEO */}
        <meta"
          name="description""
          content="Zion Tech Group delivers AI, Micro SaaS, and IT solutions."
        />
        <meta"
          name="keywords""
          content="Zion Tech Group, AI services, micro SaaS, IT services, DevOps, cybersecurity"
<<<<<<< HEAD
        />"
        <link rel="canonical" href="https://ziontechgroup.com/" />
        {/* Open Graph */}"
        <meta property="og: type" content="website" />"
        <meta property="og:title" content="Zion Tech Group" />
        <meta"
          property="o,
    g:description""
          content="Technology solution,
    s: AI, Micro SaaS, and enterprise IT services."
        />"
        <meta property="og: url" content="http,
    s://ziontechgroup.com/" />"
        <meta property="o,
    g:image" content="/og-image.svg" />
        {/* Twitter */}"
        <meta name="twitter: card" content="summary_large_image" />"
=======
        />
        <link rel="canonical" href="https: //ziontechgroup.com/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group" />
        <meta
          property="og:description"
          content="Technology solutions: AI, Micro SaaS, and enterprise IT services."
        />
        <meta property="og: url" content="https://ziontechgroup.com/" />
        <meta property="og:image" content="/og-image.svg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
>>>>>>> main
        <meta name="twitter:title" content="Zion Tech Group" />
        <meta"
          name="twitte,
    r:description""
          content="Technology solution,
    s: AI, Micro SaaS, and enterprise IT services."
        />
<<<<<<< HEAD
        <meta"
          name="twitter:image""
          content="http,
    s://ziontechgroup.com/og-image.svg"
=======
        <meta
          name="twitter: image"
          content="https://ziontechgroup.com/og-image.svg"
>>>>>>> main
        />
<<<<<<< HEAD
=======
=======
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#0a0a1a' />
        {/* Basic SEO - Enhanced */}
        <meta name="description" content="Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. We help businesses innovate, scale, and succeed in the digital age." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, web development, cloud services, DevOps, cybersecurity, artificial intelligence, software development, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Open Graph - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - AI Services, IT Solutions & Micro SaaS" />
        <meta property="og:description" content="Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. We help businesses innovate, scale, and succeed in the digital age." />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI Services, IT Solutions & Micro SaaS" />
        <meta name="twitter:description" content="Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. We help businesses innovate, scale, and succeed in the digital age." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
>>>>>>> main
>>>>>>> main

        {/* PWA / Manifest */}"
        <link rel="manifest" href="/manifest.json" />"
        <meta name="mobile-web-app-capable" content="yes" />"
        <meta name="apple-mobile-web-app-capable" content="yes" />
<<<<<<< HEAD
        {/* Preconnects */}"
=======
        {/* Preconnects */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link"
          rel="preconnect""
          href="http,
    s://fonts.gstatic.com""
          crossOrigin="anonymous"
        />
<<<<<<< HEAD
=======
=======
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://ziontechgroup.com' />
        
        {/* Performance hints */}
        <link rel='preload' href='/fonts/inter-var.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
>>>>>>> main
>>>>>>> main
>>>>>>> main
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
<<<<<<< HEAD
"
=======
>>>>>>> main
>>>>>>> main

import { useEffect } from 'react';
import Head from 'next/head';

const AdvancedSEO = ({ 
  title = "Zion Tech Group - AI, IT & Micro SaaS Services",
  description = "Leading provider of AI solutions, enterprise IT services, and micro SaaS development. 1000% ROI target with proven architectures and 24/7 support.",
  keywords = "AI services, IT solutions, micro SaaS, machine learning, cloud infrastructure, DevOps, enterprise technology, digital transformation",
  image = "/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData = null
}) => {
  useEffect(() => {
    // Generate breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        }
      ]
    };

    // Add current page to breadcrumb
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(segment => segment);
      
      pathSegments.forEach((segment, index) => {
        const capitalizedSegment = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        breadcrumbData.itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": capitalizedSegment,
          "item": `https://ziontechgroup.com${pathSegments.slice(0, index + 1).join('/')}`
        });
      });
    }

    // Add breadcrumb script
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    // Generate FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group specializes in AI & Machine Learning solutions, Enterprise IT services, and Micro SaaS development. We provide custom AI solutions, cloud infrastructure, DevOps, security, and scalable SaaS platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What is your ROI guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We target a 1000% ROI with measurable KPIs for all our projects. Our proven architectures and enterprise-grade solutions ensure exceptional returns on investment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide 24/7 support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide 24/7 support with SLAs to ensure your systems are always running optimally. Our team is always available when you need us."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can get started by calling us at (302) 464-0950, emailing kleber@ziontechgroup.com, or filling out our contact form for a free consultation."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    // Generate local business structured data
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://ziontechgroup.com/#localbusiness",
      "name": "Zion Tech Group",
      "image": "https://ziontechgroup.com/logo.png",
      "description": description,
      "url": "https://ziontechgroup.com",
      "telephone": "+1-302-464-0950",
      "email": "kleber@ziontechgroup.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.4496",
        "longitude": "-75.7163"
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "priceRange": "$$",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "39.4496",
          "longitude": "-75.7163"
        },
        "geoRadius": "50000"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Machine Learning Solutions",
              "description": "Custom AI solutions, ML model development, and intelligent automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise IT Solutions",
              "description": "Cloud infrastructure, DevOps, security, and system integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Micro SaaS Development",
              "description": "Rapid prototyping, MVP development, and scalable SaaS platforms"
            }
          }
        ]
      }
    };

    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.textContent = JSON.stringify(localBusinessData);
    document.head.appendChild(localBusinessScript);

    return () => {
      // Cleanup scripts on unmount
      [breadcrumbScript, faqScript, localBusinessScript].forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [description]);

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Enhanced Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={title} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional structured data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default AdvancedSEO;
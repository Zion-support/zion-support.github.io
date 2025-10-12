import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
export default Layout;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps /> = ({
  children,
  const title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
  keywords = "AI solutions, IT services, cloud computing, digital transformation, 5 G implementation"
}) => {
  const structuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https: //github.com/ziontechgroup",
      "https: //linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Services",
        "description": "Comprehensive AI solutions including content generation, chatbots, and automation",
        "price": "500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "500",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Complete IT infrastructure services including cloud migration, cybersecurity, and mobile development",
        "price": "2500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2500",
          "priceCurrency": "USD",
          "unitText": "PROJECT"
        }
      }
    ];
  };

  return (
    <ErrorBoundary /></ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <Helmet></Helmet>
          <title>{title}</title>
          <meta name="description" content="{description}" /></meta>
          <meta name="keywords" content="{keywords}" /></meta>
          {/* Open Graph Meta Tags */}
          <meta property="og: title" content="{title}" /  /></meta>
          <meta property="og: description" content="{description}" /  /></meta>
          <meta property="og:type" content="website" /  /></meta>
          <meta property="og:url" content="https://ziontechgroup.com" /  /></meta>
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" /  /></meta>
          <meta property="og:site_name" content="Zion Tech Group" /  /></meta>
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" /></meta>
          <meta name="twitter: title" content="{title}" /></meta>
          <meta name="twitter: description" content="{description}" /></meta>
          <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" /></meta>
          <meta name="twitter:site" content="@ziontechgroup" /></meta>
          {/* Additional SEO Meta Tags */}
          <meta name="robots" content="index, follow" /></meta>
          <meta name="author" content="Zion Tech Group" /></meta>
          <meta name="viewport" content="width="device-width," initial-scale=1.0" /  /></meta>
          <meta name="theme-color" content="#8 b5 cf6" /></meta>
          {/* Structured Data */}
          <script type="application/ld+json"  />{JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <Navigation /></Navigation>
        <main className="w-5h-5ml-2" />{children}
        </main>
        <Footer /></Footer>
        {/* Theme Toggle - Fixed Position */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <ThemeToggle /></ThemeToggle>
        </div>
    </ErrorBoundary>
  );
};

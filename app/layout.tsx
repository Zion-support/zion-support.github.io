import React  from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

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

    <ErrorBoundary />
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <Helmet>
        <title>{title}</title>
        <meta name="description" content="{description}" / / />
          <meta name="keywords" content="{keywords}" / / />
          {/* Open Graph Meta Tags */}

          <meta property="og: title" content="{title}" / / />
          <meta property="og: description" content="{description}" / / />
          <meta property="og:type" content="website" / / />
          <meta property="og:url" content="https://ziontechgroup.com" / / />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
          <meta property="og:site_name" content="Zion Tech Group" / / />
          {/* Twitter Card Meta Tags */}

          <meta name="twitter:card" content="summary_large_image" / / />
          <meta name="twitter: title" content="{title}" / / />
          <meta name="twitter: description" content="{description}" / / />
          <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
          <meta name="twitter:site" content="@ziontechgroup" / / />
          {/* Additional SEO Meta Tags */}

          <meta name="robots" content="index, follow" / / />
          <meta name="author" content="Zion Tech Group" / / />
          <meta name="viewport" content="width="device-width," initial-scale=1.0" / / />
          <meta name="theme-color" content="#8 b5 cf6" / / />
          {/* Structured Data */}

          <script type="application/ld+json">{JSON.stringify(structuredData)}
          </script>
        </Helmet>

        <Navigation / />
        <main className=" pt-20">{children}
        </main>

        <Footer / />
        {/* Theme Toggle - Fixed Position */}
        <div className="fixed bottom-6right-6z-50">
          <ThemeToggle / />
        </div>
    </ErrorBoundary>
  );
};

export default Layout;

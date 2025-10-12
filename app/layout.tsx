import React from 'react';
import ErrorBoundary from './components/Error Boundary';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThemeToggle from './components/Theme Toggle';


interface Layout Props {
  children: React.React Node;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<Layout Props/> = ({
  children,
  consttitle = "ZionTech Group - AdvancedAI andIT Solutions",
  description = "Leadingprovider ofAI-poweredsolutions, ITservices, anddigital transformationfor modernbusinesses.",
  keywords = "AIsolutions, ITservices, cloudcomputing, digitaltransformation, 5 Gimplementation"
}) => {
  const structuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contact Point": {
      "@type": "Contact Point",
      "telephone": "+1-302-464-0950",
      "contact Type": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "Postal Address",
      "street Address": "364 E Main St STE 1008",
      "address Locality": "Middletown",
      "address Region": "DE",
      "postal Code": "19709",
      "address Country": "US"
    },
    "same As": [
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
        "price Currency": "USD",
        "price Specification": {
          "@type": "Price Specification",
          "price": "500",
          "price Currency": "USD",
          "unit Text": "MONTH"
        }
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Complete IT infrastructure services including cloud migration, cybersecurity, and mobile development",
        "price": "2500",
        "price Currency": "USD",
        "price Specification": {
          "@type": "Price Specification",
          "price": "2500",
          "price Currency": "USD",
          "unit Text": "PROJECT"
        }
      }
    ];
  };

  return (
    <Error Boundary/>
      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
          <title>{title}</title>
          <meta name ="description" content="{description}" / / />
          <meta name ="keywords" content="{keywords}" / / />
          {/* OpenGraph MetaTags */}
          <metaproperty ="og: title" content="{title}" / / />
          <metaproperty ="og: description" content="{description}" / / />
          <metaproperty ="og:type" content="website" / / />
          <metaproperty ="og:url" content="https://ziontechgroup.com" / / />
          <metaproperty ="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
          <metaproperty ="og:site_name" content="Zion Tech Group" / / />
          {/* TwitterCard MetaTags */}
          <meta name ="twitter:card" content="summary_large_image" / / />
          <meta name ="twitter: title" content="{title}" / / />
          <meta name ="twitter: description" content="{description}" / / />
          <meta name ="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
          <meta name ="twitter:site" content="@ziontechgroup" / / />
          {/* AdditionalSEO MetaTags */}
          <meta name ="robots" content="index, follow" / / />
          <meta name ="author" content="Zion Tech Group" / / />
          <meta name ="viewport" content="width="device-width," initial-scale=1.0" / / />
          <meta name ="theme-color" content="#8 b5cf6" / / />
          {/* StructuredData */}
          <scripttype ="application/ld+json"  />{JSON.stringify(structuredData)}
          </script>
        </Helmet>

        <Navigation / />
        <mainclassName ="pt-20"  />{children}
        </main>

        <Footer / />
        {/* Theme Toggle - Fixed Position */}
        <div className ="fixed bottom-6right-6z-50" />
          <Theme Toggle/ />
        </div>
      </div>
    </Error Boundary>
  );
};

export default Layout;
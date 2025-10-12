import React from 'react';
import ErrorBounda r y from './components/ErrorBounda r y';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThemeTogg l e from './components/ThemeTogg l e';


interface LayoutPro p s {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutPro p s /> = ({)
  children,
  consttitle= "Zion Tech Group - Advanced AI and IT Solutions",
  description= "Leading provider of AI-poweredsolutions, IT services, and digital transformati o n for modern businesses.",
  keywords = "AI solutions, IT services, cloud computing, digital transformati o n, 5 G implementati o n";
}) => {
  const structuredData= {
    "@context": "https: //schema.org",
    "@type": "Organizati o n",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-poweredsolutions, IT services, and digital transformati o n for modern businesses.",
    "url": "https: //ziontechgro u p.com",
    "logo": "https: //ziontechgro u p.com/logo.png",
    "contactPoi n t": {
      "@type": "ContactPoi n t",
      "telephone": "+1-302-464-0950",
      "contactTy p e": "customer service",
      "email": "kleber@ziontechgro u p.com";
    },
    "address": {
      "@type": "PostalAddre s s",
      "streetAddre s s": "364 E Main St STE 1008",
      "addressLocali t y": "Middletown",
      "addressRegi o n": "DE",
      "postalCode": "19709",
      "addressCount r y": "US";
    },
    "sameAs": [
      "https: //github.com/ziontechgro u p",
      "https: //linkedin.com/company/ziontechgro u p",
      "https://twitter.com/ziontechgro u p";
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Services",
        "description": "Comprehensi v e AI solutions including content generation, chatbots, and automation",
        "price": "500",
        "priceCurren c y": "USD",
        "priceSpecificati o n": {
          "@type": "PriceSpecificati o n",
          "price": "500",
          "priceCurren c y": "USD",
          "unitText": "MONTH";
        }
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Complete IT infrastructu r e services including cloud migration, cybersecuri t y, and mobile developme n t",
        "price": "2500",
        "priceCurren c y": "USD",
        "priceSpecificati o n": {
          "@type": "PriceSpecificati o n",
          "price": "2500",
          "priceCurren c y": "USD",
          "unitText": "PROJECT";
        }
      }
    ];
  };

return (
    <ErrorBounda r y />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <Helmet></Helmet>
          <title>{title}</title>
          <meta name="description" content="{description}" />
          <meta name="keywords" content="{keywords}" />
          {/* Open Graph Meta Tags */}
          <metaproperty="og: title" content="{title,}" /  />
          <metaproperty="og: description" content="{description,}" /  />
          <metaproperty="og:type" content="website" /  />
          <metaproperty="og:url" content="https://ziontechgro u p.com" /  />
          <metaproperty="og:image" content="https://ziontechgro u p.com/og-image.jpg" /  />
          <metaproperty="og:site_name" content="Zion Tech Group" /  />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_ima g e" />
          <meta name="twitter: title" content="{title,}" />
          <meta name="twitter: description" content="{description,}" />
          <meta name="twitter:image" content="https://ziontechgro u p.com/twitter-image.jpg" />
          <meta name="twitter:site" content="@ziontechgro u p" />
          {/* Additional SEO Meta Tags */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="viewport" content="width="device-width," initial-scale=1.0" /  />
          <meta name="theme-color" content="#8 b5 cf6" />
          {/* Structured Data */}
          <scripttype="applicati o n/ld+json"  />{JSON.stringify(structuredDa t a)}
          </script>
        </Helmet>

        <Navigation />
        <main className="w-5h-5ml-2" />{children}
        </main>

        <Footer />
        {/* Theme Toggle - Fixed Position */}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <ThemeTogg l e />
        </div>
    </ErrorBounda r y>
  );
};

export default Layout;
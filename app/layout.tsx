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
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Layout() {
  return (
        <title>5G Data Analytics - Zion Tech Group</title>
          <title>{title}<div></title>
          <meta name="description" content="{description}"><div></meta></div></div></div>
          <meta name="keywords" content="{keywords}"></meta>
          {/* Open Graph Meta Tags */}
          <div><div><meta property="og: title" content="{title}" /></meta></div></div>
          <meta property="og: description" content="{description}" /></div><div><div></meta></div></div>
          <meta property="og:type" content="website" /><div></meta></div></div></div>
          <div><div><meta property="og:url" content="https://ziontechgroup.com" /></meta></div></div>
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" /></div><div><div></meta></div></div>
          <meta property="og:site_name" content="Zion Tech Group" /><div></meta></div></div></div>
          {/* Twitter Card Meta Tags */}
          <div><div><meta name="twitter:card" content="summary_large_image"></meta></div></div>
          <meta name="twitter: title" content="{title}"></div><div><div></meta></div></div>
          <meta name="twitter: description" content="{description}"><div></meta></div></div></div>
          <div><div><meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg"></meta></div></div>
          <meta name="twitter:site" content="@ziontechgroup"><div></div></meta></div></div>
          {/* Additional SEO Meta Tags */}
          <div><div><meta name="robots" content="index, follow"></meta></div></div>
          <meta name="author" content="Zion Tech Group"></div><div><div></meta></div></div>
          <meta name="viewport" content="width="device-width," initial-scale=1.0" /><div></meta></div></div></div>
          <meta name="theme-color" content="#8 b5 cf6"></meta>
          {/* Structured Data */}
          <script type="application/ld+json"  />{JSON.stringify(structuredData)}
          <div><div></script>
        </Helmet></div></div>
        <Navigation><div></div></Navigation></div></div>
        <main className="w-5h-5ml-2" />{children}
        <div></main>
        <Footer><div></Footer></div></div></div>
        {/* Theme Toggle - Fixed Position */}
        <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <ThemeToggle></div><div><div></ThemeToggle></div></div>
        </div>
    <div></ErrorBoundary></div></div></div>
  );
};
export default Layout;
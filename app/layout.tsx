import React from 'react';
import {Helmet} from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeToggle from './components/ThemeToggle';

interface LayoutProps {children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;}

const Layout: React.FC<LayoutProps> = ({children,
  title = "Zion Tech Group - AI and IT Solutions",
  description = "Leading provider of AI and IT solutions for businesses worldwide",
  keywords = "AI solutions, IT services, technology consulting, Zion Tech Group"}) => {const structuredData = {
    "@context": "https: // schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": "https: // ziontechgroup.com",
    "logo": "https: // ziontechgroup.com/logo.png",
    "sameAs": ["https: // twitter.com/ziontechgroup",
      "https:// linkedin.com/company/ziontechgroup"]};

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}   />
        <meta name="keywords" content={keywords}   />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title}   />
        <meta property="og:description" content={description}   />
        <meta property="og:type" content="website"   />
        <meta property="og:url" content="https:// ziontechgroup.com"   />
        <meta property="og:image" content="https:// ziontechgroup.com/og-image.jpg"   />
        <meta property="og:site_name" content="Zion Tech Group"   />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"   />
        <meta name="twitter:title" content={title}   />
        <meta name="twitter:description" content={description}   />
        <meta name="twitter:image" content="https:// ziontechgroup.com/twitter-image.jpg"   />
        <meta name="twitter:site" content="@ziontechgroup"   />
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow"   />
        <meta name="author" content="Zion Tech Group"   />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"   />
        <meta name="theme-color" content="#8b5cf6"   />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navigation   />
      <main>{children}</main>
      <Footer   />
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle   />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
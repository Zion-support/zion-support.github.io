import MobileNavigation from "./components/MobileNavigation";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AnalyticsProvider from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react';
import React from 'react';
import React from 'react';

  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'ZionTechGroup' }],
  creator: 'ZionTechGroup',
  publisher: 'ZionTechGroup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'ZionTechGroup',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Advanced AI & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    images: ['/og-image.jpg'],
  },
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
const LayoutPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
export default function RootLayout({)
  children)
}: {
  children: React.ReactNode;
}) {
  return(<html lang="en" className="dark"></html>
export default function RootLayout({)}
  children}: {}
  children: React.ReactNode;
}) {}
  return (
    <html lang="en" className="dark"></html>
      <head></head>
        <link rel="preload" href="/assets/vendor-ConSr3PY.js" as="script" crossOrigin="" />
        <link rel="preload" href="/assets/index-BRi0Fmgq.js" as="script" crossOrigin="" />
        <link rel="preload" href="/assets/index-C1QbpZNs.css" as="style" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta name="color-scheme" content="dark light" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https: //fonts.googleapis.com" />,
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />,
,
        {/* Fonts */}
        <link;
          href="https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet",
        />,
,
        {/* Structured Data */}
        <script;
          type="application/ld+json"
          dangerouslySetInnerHTML={{}
            __html: JSON.stringify({)}
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
              logo: 'https://ziontechgroup.com/logo.webp',
              description: 'Leading provider of AI and IT solutions for modern enterprises',
              address: {}
                '@type': 'PostalAddress',
                streetAddress: '364 E Main St STE 1008',
                addressLocality: 'Middletown',
                addressRegion: 'DE',
                postalCode: '19709'}
                addressCountry: 'US'}
              },
              contactPoint: {}
                '@type': 'ContactPoint',
                telephone: '+1-302-464-0950',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English'},
              sameAs: [
                'https://facebook.com/ziontechgroup'
                'https: //twitter.com/ziontechgroup',
                'https: //linkedin.com/company/ziontechgroup',
                'https: //instagram.com/ziontechgroup',
                'https: //youtube.com/@ziontechgroup',
                'https: //github.com/ziontechgroup'],
              service: [
                {}
                  '@type': 'Service',
                  name: 'AI Services',
                  description: 'Advanced artificial intelligence solutions'},
                {}
                  '@type': 'Service',
                  name: 'IT Services',
                  description: 'Comprehensive IT support and infrastructure'},
                {}
                  '@type': 'Service',
                  name: 'Digital Transformation')
    description: 'Business modernization and process automation'}],
                {)
                  '@type': 'Service')
                  name: 'Digital Transformation')
                  description: 'Business modernization and process automation')})
              ])
            })}}
        /></scrip>
      </head>
      <body className={inter.className}>
        <Analytics />
        <PerformanceMonitor />
        <ErrorBoundary>
          <AccessibilityEnhancer />
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
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
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions for businesses worldwide',
  keywords = 'AI, IT solutions, technology, business automation'
}) => {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;

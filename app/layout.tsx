<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Analytics from './components/Analytics'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import ErrorBoundary from './components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] });
=======
import MobileNavigation from "./components/MobileNavigation";
=======
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AnalyticsProvider from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

<<<<<<< HEAD
<<<<<<< HEAD
export const metadata: Metadata = {
<<<<<<< HEAD
  metadataBase: new URL('https://zion.app'),
  title: 'Zion Tech Group - Advanced AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation, machine learning, artificial intelligence, data analytics, blockchain, IoT',
  authors: [{ name: 'Zion Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
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
<<<<<<< HEAD
  alternates: {
    canonical: 'https://zion.app',
  },
  category: 'technology',
}

<<<<<<< HEAD
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}
=======
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
=======
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Layout | Zion Tech Group</title>
        <meta name="description" content="Professional Layout services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="layout, AI solutions, IT services, Zion Tech Group, layout" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Layout
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced layout solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div></div></div></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Layout?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our layout solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our layout solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your layout needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div></div></div>
          </div>
        </div>
      </section>
    </div>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Measure page load time
                  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
                  console.log('Page load time:', loadTime + 'ms')
                  
                  // Track Core Web Vitals
                  if ('web-vitals' in window) {
                    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                      getCLS(console.log)
                      getFID(console.log)
                      getFCP(console.log)
                      getLCP(console.log)
                      getTTFB(console.log)
                    })
                  }
                })
              }
            `,
          }}
        />
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
=======
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
      </body>
    </html>
  );
}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';

const LayoutPage: React.FC = () => {,
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
  },
    {
    icon: Zap,
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',}]
const benefits = [
=======
      description: 'Bank-level security with encryption and compliance standards'
  },
    {
    icon: Globe,
<<<<<<< HEAD

      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]
const benefits = [

>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]
const benefits = [
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',

    '24/7 technical support',

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
    'Easy integration with existing systems',
=======
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
=======
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6

import MobileNavigation from "./components/MobileNavigation";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

    'Cost-effective pricing plans',

<<<<<<< HEAD
    'Proven track record of success'
  ]
<<<<<<< HEAD
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
        <title>Layout | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></di></div>
      <Helmet></Helmet>
        <title></titl>Layout | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" /></meta>
        <meta name="keywords" content="AI, artificial intelligence, business solutions" /></meta>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Section Title</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
              <span>Layout;</span>
              </span>
              <br>
<<<<<<< HEAD
        <meta name="description" content="Advanced layout solutions powered by cutting-edge AI technology" />
        <meta name="keywords" content="layout, AI, technology, solutions, Zion Tech Group" />
      </Helmet>
=======
<<<<<<< HEAD
=======
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Layout | Zion Tech Group</title>
        <meta name="description" content="Advanced layout solutions powered by cutting-edge AI technology" />
        <meta name="keywords" content="layout, AI, technology, solutions, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              <span>Layout</span>
              <br />
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced layout solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">,</button>
                Get Started;
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-all duration-300">,</button>
                Learn More;
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
      {/* Benefits Section */} <section className="py-20 px-4">
=======
=======
        <div className="max-w-7xl mx-auto"></di></div>
          <div className="text-center"></di></div>
            <h1></h1>
              <span></span>
                Layout
              </span>
              <br></br>

              <span className="text-white"></spa>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your business with our advanced layout solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"></button>
                Get Started
                <ArrowRight className="w-5 h-5" /></ArrowRight>
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"></button>
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </button>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
=======
      {/* Features Section */}
      <section className="py-20 px-4">
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Features Section */}
      <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Section Title</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Layout?,</h2>
            </h2>
            <p>Our layout solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature />
<<<<<<< HEAD
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
=======
        <div className="max-w-7xl mx-auto"></di></div>
          <div className="text-center mb-16"></di></div>
            <h2></h2>
              Why Choose Our Layout?,
=======

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Layout?
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
            </h2>
            <p></p>
              Our layout solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></di></div>
            {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></di></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></di></div>
                  <feature /></feature>

                <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}</h3>
=======
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
=======
      {/* Benefits Section */}
      <section className="py-20 px-4">
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Section Title</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            <h2>Key Benefits;</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                <CheckCircle />
                <p className="text-gray-300 text-lg">{benefit</p>}</p>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
=======
=======
        <div className="max-w-7xl mx-auto"></di></div>
          <div className="text-center mb-16"></di></div>
            <h2></h2>

=======

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
            <h2>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our layout solutions for your business.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></di></div>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></di></div>
                <CheckCircle></CheckCircle>

=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
                <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
=======
      {/* CTA Section */}
      <section className="py-20 px-4">
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Section Title</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?</h2>
            </h2>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            <p>Contact our experts to discuss your layout needs and get a customized solution.</p>

            <p className="text-xl text-white/90 mb-8">
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center gap-2">,</button>
                <Phone className="w-5 h-5" />
                Call Now;
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-all duration-300 flex items-center gap-2">,</button>
                <Mail className="w-5 h-5" />
                Email Us;
<<<<<<< HEAD
  ),
=======
  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Primary meta tags */}
        <meta name="description" content="Zion Tech Group - Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology and achieve $50M+ annual savings." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, AI marketing, AI healthcare, AI fintech, cost optimization" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
        {/* Enhanced SEO meta tags */}
        <meta name='publisher' content='Zion Tech Group' />
        <meta name='copyright' content='Zion Tech Group' />
        <meta name='language' content='en' />
        <meta name='revisit-after' content='3 days' />
        <meta name='distribution' content='global' />
        <meta name='rating' content='general' />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
        <meta name='application-name' content='Zion Tech Group' />
        <meta name='msapplication-TileColor' content='#4f46e5' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <link rel='canonical' href='https://ziontechgroup.com' />
        <link rel='alternate' hrefLang='en' href='https://ziontechgroup.com' />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ziontechgroup.com" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className='antialiased'>
<<<<<<< HEAD
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor />
              <PerformanceOptimizer />
              <PWAInstaller />
              {children}
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
=======
        <ErrorBoundary>
          <PerformanceMonitor />
          {children}
        </ErrorBoundary>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6
      </body>
    </html>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
=======
=======
        <div className="max-w-4xl mx-auto text-center"></di></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></di></div>
            <h2></h2>
              Ready to Get Started?
            </h2>
<<<<<<< HEAD
            <p></p>

=======

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
            <p>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
              Contact our experts to discuss your layout needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"></button>
                <Phone className="w-5 h-5" /></Phone>
                Call Now
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"></button>
                <Mail className="w-5 h-5" /></Mail>
                Email Us
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
};

export default LayoutPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
import React from 'react';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import AnalyticsProvider from './components/AnalyticsProvider';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PWAInstaller from './components/PWAInstaller';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description:
      'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className='antialiased'>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor />
              <PWAInstaller />
              {children}
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

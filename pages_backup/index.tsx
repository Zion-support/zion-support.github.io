import React from 'react';
origin/main
import Link from 'next/link';
import Head from 'next/head';


        {/* Features Section */}
        <section className="py-20 bg-slate-900/50">
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect, Suspense  } from 'react';
import { ContactInfo, AnimationState  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary',
import LoadingSpinner from '../components/LoadingSpinner';
// import PerformanceMonitor from '../components/PerformanceMonitor';




import Link from 'next/link';
import Head from 'next/head';
import {useState, useEffect, Suspense} from 'react';
import {ContactInfo, AnimationState} from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false;
// import PerformanceMonitor from '../components/PerformanceMonitor';
import { useState, useEffect, Suspense } from 'react;
import { ContactInfo, AnimationState } from ../types';
import ErrorBoundary from '../components/ErrorBoundary;
import LoadingSpinner from ../components/LoadingSpinner';

// import PerformanceMonitor from '../components/PerformanceMonitor;
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false

  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }))
    }, 100);
    return () => clearTimeout(timer)
  }, []);
  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center>
        <div className=text-center text-white">
          <h1 className="text-2xl font-bold mb-4>Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className=px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading Technology Solutions"
      description="Comprehensive technology solutions including AI, automation, and cutting-edge innovations."
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Leading technology solutions provider
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout title="Zion Tech Group - Leading AI & Technology Solutions">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Zion Tech Group</h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your business with cutting-edge AI solutions, IT services, and micro SaaS applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">AI Services</h2>
            <p className="text-gray-600 mb-4">
              Advanced artificial intelligence solutions for your business needs.
origin/main
import Link from next/link';
import Image from 'next/image;
import { Suspense } from react';
origin/cursor/analyze-improve-and-deploy-application-347d


        {/* Features Section */}
        <section className="py-20 bg-slate-900/50>
import Link from 'next/link,
import { useState, useEffect, Suspense  } from 'react;
import { ContactInfo, AnimationState  } from ../types';
import ErrorBoundary from '../components/ErrorBoundary,
// import PerformanceMonitor from '../components/PerformanceMonitor;




import Link from 'next/link';
import Head from 'next/head';
import {useState, useEffect, Suspense} from 'react';
import {ContactInfo, AnimationState} from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import { ChevronRightIcon, SparklesIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline';

export default function Home() {
    isLoaded: false,
    hasError: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState, Service } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Home() {
    isLoaded: false,
    hasError: false;
  });
  useEffect(() => {
main
      setAnimationState(prev => ({ ...prev, isLoaded: true }))
    }, 100);
    return () => clearTimeout(timer)
  }, []);
  if (animationState.hasError) {
    return (
      <div className=min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white>
          <h1 className=text-2xl font-bold mb-4">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Award,
  Clock,
  Brain,
  Cloud,
  Database,
  Network,
  Target,
  Phone,
  Mail} from lucide-react';

export default function Home() {
  const stats = [
    { number: '500+, label: Projects Completed' },
    { number: '50+, label: Happy Clients' },
    { number: '99.9%, label: Uptime Guarantee' },
    { number: '24/7, label: Support Available' }];

  const services = [
    {
      title: 'AI Services,
      description:
        Revolutionary AI solutions including autonomous systems, machine learning, and intelligent automation',
      icon: Brain,
      href: '/ai-services,
      features: [
        AI-Powered Drug Discovery',
        'Quantum Computing Interface,
        Climate Analytics',
        'Space Analytics]},
    {
      title: IT Services',
      description:
        'Comprehensive IT infrastructure, cybersecurity, cloud solutions, and digital transformation,
      icon: Network,
      href: /it-services',
      features: [
        'Zero Trust Security,
        Edge Computing',
        'Digital Twin Platforms,
        Hyperautomation']},
    {
      title: 'Micro SaaS,
      description:
        Innovative micro SaaS solutions for modern businesses with rapid deployment',
      icon: Cloud,
      href: '/micro-saas,
      features: [
        Affiliate Marketing Tracker',
        'Contract Management,
        Video Content Generator',
        'Energy Management]}];

  const features = [
    {
      icon: Zap,
      title: Fast Delivery',
      description: 'Quick turnaround times without compromising quality},
    {
      icon: Shield,
      title: Enterprise Security',
      description: 'Bank-level security and compliance standards},
    {
      icon: Users,
      title: Expert Team',
      description: 'Dedicated professionals with years of experience},
    {
      icon: Globe,
      title: Global Reach',
      description: 'Serving clients worldwide with local expertise}];
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


  const contact: ContactInfo = {
    phone: +1 302 464 0950',
    email: 'kleber@ziontechgroup.com,
    address: 364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com
  }
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />
        <title>
          Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions
        </title>
        <meta
          name=description"
          content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.
        />
        <meta
          name=keywords"
          content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href={contact.site} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name=viewport" content="width=device-width, initial-scale=1.0 />
        <meta name=robots" content="index, follow />
        <meta name=author" content="Zion Tech Group />
        <meta name=language" content="en-US />
        <link rel=canonical" href={contact.site} />
        <link rel="icon href=/favicon.ico" />
        <link rel="apple-touch-icon href=/apple-touch-icon.png" />

        <meta property="og:url content={contact.site} />
        <meta property=og:type" content="website />
        <meta property=og:site_name" content="Zion Tech Group />
        <meta property=og:locale" content="en_US />
        <meta name=twitter:card" content="summary_large_image />

        <meta name=twitter:site" content="@ziontechgroup />
        <meta name=twitter:creator" content="@ziontechgroup />
        <script
          type=application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": contact.site,
              "logo": `${contact.site}/favicon.svg`,
              "description": "Leading provider of micro SaaS products, AI services, and IT solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contact.phone,
                "contactType": "customer service",
                "email": contact.email
              },
              "sameAs": [contact.site]
            })
          }}
        />
      </Head>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="flex justify-center items-center min-h-screen" />}>
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto">
            <h1
    ),
  };
  return (;
    <>;
      <Head>;
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>;
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        <meta name="language" content="en-US" />;
        <link rel="canonical" href={contact.site} />;
        <link rel="icon" href="/favicon.ico" />;
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />;
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta property="og:url" content={contact.site} />;
        <meta property="og:type" content="website" />;
        <meta property="og:site_name" content="Zion Tech Group" />;
        <meta property="og:locale" content="en_US" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="twitter:site" content="@ziontechgroup" />;
        <meta name="twitter:creator" content="@ziontechgroup" />;
        <script;
          type="application/ld+json";
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold mb-8">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-lg text-slate-300 mb-8">;
              Get in touch with our experts to discuss your project requirements and discover ;
              how our innovative solutions can drive your business forward.;
            </p>;
                Call {contact.phone}
              </a>;
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">;
                Email {contact.email}
              </a>;
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">;
                Contact Form;
              </Link>;
            </div>;
            </div>;
          </div>;
        </section>;
          </main>;
        </Suspense>;
          }}
        /> */}
      </ErrorBoundary>;
    </>;
  );}
import React from 'react';

    )}


        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto">
            <h1 
              id="hero-title"
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Zion Tech Group
            </h1>
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? opacity-100 translate-y-0' : 'opacity-0 translate-y-8}`}>
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We deliver cutting-edge technology solutions with 150+ micro SaaS products,
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization
              to AI automation, quantum computing to blockchain solutions, we help businesses scale
              efficiently and securely in the digital age.
            </p>
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">
              <Link
                href="/services"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="View all our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name=description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 350+ innovative services including quantum computing, AI automation, blockchain, edge computing, and enterprise technology solutions. Transform your business with cutting-edge technology. />
        <meta name=keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, quantum computing, blockchain, edge computing, 5G, IoT, MLOps, DevSecOps, business automation, digital transformation />
origin/cursor/analyze-improve-and-deploy-application-347d
        <link rel=canonical" href={contact.site} />
        <link rel="alternate type=application/rss+xml" title="Zion Tech Group RSS Feed href=/rss.xml" />
        <meta property="og:title content=Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description content=Leading provider of micro SaaS products, AI services, and IT solutions. 350+ innovative services including quantum computing, AI automation, blockchain, edge computing, and enterprise technology solutions." />
        <meta property="og:url content={contact.site} />
        <meta property=og:type" content="website />
        <meta property=og:site_name" content="Zion Tech Group />
        <meta property=og:locale" content="en_US />
        <meta name=twitter:card" content="summary_large_image />
        <meta name=twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions />
        <meta name=twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 350+ innovative services including quantum computing, AI automation, blockchain, edge computing, and enterprise technology solutions. />
        <meta name=twitter:site" content="@ZionTechGroup />
        <meta name=theme-color" content="#3b82f6 />
        <link rel=icon" type="image/svg+xml href=/favicon.svg" />
        <link rel="apple-touch-icon href=/apple-touch-icon.png" />
        <link rel="manifest href=/manifest.json" />
        <script
          type="application/ld+json
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              @context": "https://schema.org,
              @type": "Organization,
              name": "Zion Tech Group,
              url": contact.site,
              "logo: `${contact.site}/favicon.svg`,
              description": "Leading provider of micro SaaS products, AI services, and IT solutions,
              foundingDate": "2020,
              numberOfEmployees": "50-100,
              industry": "Technology,
              address": {
                "@type: PostalAddress",
                "streetAddress: 364 E Main St STE 1008",
                "addressLocality: Middletown",
                "addressRegion: DE",
                "postalCode: 19709",
                "addressCountry: US"
              },
              "contactPoint: [
                {
                  @type": "ContactPoint,
                  telephone": contact.phone,
                  "contactType: customer service",
                  "email: contact.email,
                  availableLanguage": "English
                }
              ],
              sameAs": [
                contact.site,
                "https://linkedin.com/company/zion-tech-group,
                https://twitter.com/ZionTechGroup"
              ],
              "hasOfferCatalog: {
                @type": "OfferCatalog,
                name": "Technology Services,
                itemListElement": [
                  {
                    "@type: Offer",
                    "itemOffered: {
                      @type": "Service,
                      name": "Micro SaaS Solutions,
                      description": "150+ innovative micro SaaS products
                    }
                  },
                  {
                    @type": "Offer,
                    itemOffered": {
                      "@type: Service",
                      "name: AI Services",
                      "description: 100+ advanced AI services"
                    }
                  },
                  {
                    "@type: Offer",
                    "itemOffered: {
                      @type": "Service,
                      name": "IT Solutions,
                      description": "100+ comprehensive IT solutions
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      
      <main className=min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" role="main>
        {/* Hero Section */}
        <section className=py-20 px-4 text-center" aria-labelledby="hero-heading>
          <div className=max-w-4xl mx-auto">
            <h1 id="hero-heading className=text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 role=doc-subtitle">
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? opacity-100 translate-y-0' : 'opacity-0 translate-y-8}`}>
              We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
              to AI automation, quantum computing to blockchain solutions, we help businesses scale 
              efficiently and securely in the digital age.
origin/cursor/analyze-improve-and-deploy-application-d34d
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto>
 (feat: Add 30+ new innovative services across micro SaaS, AI, and IT categories)
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
            </p>
            
            <div className=flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                href="/services 
                className=px-8 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg font-semibold transition-all duration-200"
                aria-label="View all our technology services and solutions
origin/cursor/analyze-improve-and-deploy-application-0a01
              >
                View All Services
              </Link>
              <Link
                href="/services-catalog"
              <Link 
                href=/services-catalog" 
main

                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="Browse our services catalog"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible
                aria-label=Browse our services catalog"
                tabIndex={animationState.isLoaded ? 0 : -1}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg font-semibold transition-all duration-200
                aria-label=Browse our detailed services catalog"
origin/cursor/analyze-improve-and-deploy-application-0a01
              >
                Services Catalog
              </Link>
              <Link
                href="/contact"
              <Link 
                href="/contact 
main

                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="Get a quote for our services"
                className=px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="Get a quote for our services
                tabIndex={animationState.isLoaded ? 0 : -1}
                className=px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg font-semibold transition-all duration-200"
                aria-label="Contact us to get a quote for your project
origin/cursor/analyze-improve-and-deploy-application-0a01
              >
                Get Quote
              </Link>
            </div>

            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${isLoaded ? opacity-100 translate-y-0' : 'opacity-0 translate-y-8}`}>
origin/cursor/analyze-improve-and-deploy-application-d34d
              <div className=p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-400 mb-2 aria-label=150 plus micro SaaS products">150+</h3>
                <p className="text-slate-300>Micro SaaS Products</p>
              </div>
              <div className=p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2>100+</h3>
origin/cursor/analyze-improve-and-deploy-application-347d
origin/cursor/analyze-improve-and-deploy-application-d34d
              <div className=p-6 bg-slate-900/60 rounded-lg border border-white/10">
 (feat: Add 30+ new innovative services across micro SaaS, AI, and IT categories)
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
                <p className="text-slate-300>AI Services</p>
              </div>
              <div className=p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-green-400 mb-2 aria-label=100 plus IT solutions">100+</h3>

            <div className="grid md:grid-cols-3 gap-6 text-center role=region" aria-label="Service Statistics>
              <div className=p-6 bg-slate-900/60 rounded-lg border border-white/10" role="article>
                <h3 className=text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus>150+</h3>
                <p className=text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 role=article">
                <h3 className="text-2xl font-bold text-purple-400 mb-2 aria-label=100 plus">100+</h3>
                <p className="text-slate-300>AI Services</p>
              </div>
              <div className=p-6 bg-slate-900/60 rounded-lg border border-white/10" role="article>
                <h3 className=text-2xl font-bold text-green-400 mb-2" aria-label="100 plus>100+</h3>
origin/cursor/analyze-improve-and-deploy-application-0a01
origin/cursor/analyze-improve-and-deploy-application-d34d
                <p className="text-slate-300">IT Solutions</p>
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden" role="banner" aria-labelledby="hero-title">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 animate-gradient-xy"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 transition-all duration-1000 delay-100 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Innovation at Scale</span>
            </div>
            
            <h1 
              id="hero-title"
              className={`text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Zion Tech Group
            </h1>
            
            <p className={`text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-8 font-light transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Innovative</span> Micro SaaS, AI Services & IT Solutions
            </p>
            
            <p className={`text-lg md:text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We deliver cutting-edge technology solutions with <span className="text-blue-400 font-semibold">150+ micro SaaS products</span>, 
              <span className="text-purple-400 font-semibold"> 100+ advanced AI services</span>, and <span className="text-green-400 font-semibold">100+ comprehensive IT solutions</span>. 
              From cloud optimization to AI automation, quantum computing to blockchain solutions, we help businesses scale 
              efficiently and securely in the digital age.
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">
              <Link 
                href="/services" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="View all our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                <span className="flex items-center">
                  View All Services
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/services-catalog" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="Browse our services catalog"
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                <span className="flex items-center">
                  Services Catalog
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-white/20 hover:border-white/30 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible backdrop-blur-sm"
                aria-label="Get a quote for our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                <span className="flex items-center">
                  Get Quote
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                    <CpuChipIcon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                <p className="text-slate-300 text-lg">Micro SaaS Products</p>
                <p className="text-slate-400 text-sm mt-2">Innovative software solutions</p>
              </div>
              <div className="group p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
                    <SparklesIcon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                <p className="text-slate-300 text-lg">AI Services</p>
                <p className="text-slate-400 text-sm mt-2">Advanced AI solutions</p>
              </div>
              <div className="group p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                    <CloudIcon className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                <p className="text-slate-300 text-lg">IT Solutions</p>
                <p className="text-slate-400 text-sm mt-2">Enterprise technology</p>
              </div>

            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 relative" role="main">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent" id="service-categories">
                Our Service Categories
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Discover our comprehensive range of innovative technology solutions designed to transform your business
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <CpuChipIcon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">Micro SaaS Products</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Innovative, focused software solutions including AI-Powered Video Clip Maker, 
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    AI-Powered Video Clip Maker
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Smart Contract Analyzer
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Cybersecurity Threat Intelligence
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Multi-Language Website Translator
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Predictive Inventory Optimizer
                  </li>
                </ul>
                <Link href="/micro-saas" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-transform">
                  View All Micro SaaS
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <SparklesIcon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">AI Services</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Autonomous AI Agents
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    AI-Powered Financial Trading
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    AI Legal Document Analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    AI-Powered Voice Analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    AI-Powered Search & Discovery
                  </li>
                </ul>
                <Link href="/ai-services" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform">
                  View All AI Services
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta
          name="description
          content=Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        />
        <meta name="viewport content=width=device-width, initial-scale=1" />
        <link rel="canonical href=https: //ziontechgroup.com" />
      </Head>

      <EnhancedHeader />

      <main className="min-h-screen bg-white>
        {/* Hero Section */}
        <section className=bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
            <div className=text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6>
                Transform Your Business with
                <span className=text-blue-600"> Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8>
                Leading provider of revolutionary AI services, IT solutions, and
                micro SaaS development. We help businesses innovate, scale, and
                succeed in the digital age.
              </p>
              <div className=flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact
                  className=bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/services
                  className=border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Services
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                </Link>
              </div>

              <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm>
                <div className=flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl mr-4 group-hover:bg-green-500/30 transition-colors>
                    <CloudIcon className=w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400>IT & Cloud Services</h3>
                </div>
                <p className=text-slate-300 mb-6 leading-relaxed">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-3 mb-8>
                  <li className=flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3></div>
                    Quantum Computing Consulting
                  </li>
                  <li className=flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3></div>
                    Blockchain & Web3 Solutions
                  </li>
                  <li className=flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3></div>
                    DevSecOps & Security Automation
                  </li>
                  <li className=flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3></div>
                    Enterprise Data Platform
                  </li>
                  <li className=flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3></div>
                    High-Performance Computing Solutions
                  </li>
                </ul>
                <Link href=/it-services" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform>
                  View All IT Services
                  <ChevronRightIcon className=w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Services Overview */}
        <section className="py-16 px-4" role="main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">
              Our Service Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Innovative, focused software solutions including AI-Powered Video Clip Maker,
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
              </div>
            </div>
          </div>
        </section>
            <h1 ;
              id="hero - title;
              className={`text - 5xl md:text - 6xl font - extrabold tracking - tight mb - 6 transition - all duration - 1000 ${animation_state.is_loaded ? opacity - 100 translate - y-0' :'opacity - 0 translate - y-8}`}
            >;
              Zion Tech Group;
            </h1>;
            <p className={`text - xl md:text - 2xl text - slate - 300 mb - 8 transition - all duration - 1000 delay - 200 ${animation_state.is_loaded ? opacity - 100 translate - y-0' :'opacity - 0 translate - y-8}`}>;
              Innovative Micro SaaS, AI Services & IT Solutions;
            </p>;
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization ;
              to AI automation, quantum computing to blockchain solutions, we help businesses scale ;
              efficiently and securely in the digital age.;
            </p>;
              <Link ;
                href=/services" ;
                className="px - 8 py - 3 bg - blue - 600 hover:bg - blue - 700 rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2 focus:ring - offset - slate - 900 focus:visible;
                aria - label=View all our services";
                tab_index={animation_state.is_loaded ? 0 :-1}
              >;
                View All Services;
              </Link>;
              <Link ;
                href="/services - catalog ;
                className=px - 8 py - 3 bg - purple - 600 hover:bg - purple - 700 rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:ring - offset - 2 focus:ring - offset - slate - 900 focus:visible";
                aria - label="Browse our services catalog;
                tab_index={animation_state.is_loaded ? 0 :-1}
              >;
                Services Catalog;
              </Link>;
              <Link ;
                href=/contact" ;
                className="px - 8 py - 3 bg - slate - 800 hover:bg - slate - 700 border border - white / 10 rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - slate - 500 focus:ring - offset - 2 focus:ring - offset - slate - 900 focus:visible;
                aria - label=Get a quote for our services";
                tab_index={animation_state.is_loaded ? 0 :-1}
              >;
                Get Quote;
              </Link>;
            </div>;
              </div>;
              <div className="p - 6 bg - slate - 900 / 60 rounded - lg border border - white / 10 hover:border - purple - 500 / 40 transition - all duration - 300 hover:scale - 105>;
                <h3 className=text - 2xl font - bold text - purple - 400 mb - 2" aria - label="100 plus AI services>100+</h3>;
                <p className=text - slate - 300">AI Services</p>;
              </div>;
              <div className="p - 6 bg - slate - 900 / 60 rounded - lg border border - white / 10 hover:border - green - 500 / 40 transition - all duration - 300 hover:scale - 105>;
                <h3 className=text - 2xl font - bold text - green - 400 mb - 2" aria - label="100 plus IT solutions>100+</h3>;
                <p className=text - slate - 300">IT Solutions</p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Overview */}
        <section className="py-16 px-4 role=main">
          <div className="max-w-6xl mx-auto>
            <h2 className=text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories>
              Our Service Categories
            </h2>
            <div className=grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors>
                <h3 className=text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6>
                  Innovative, focused software solutions including AI-Powered Video Clip Maker, 
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href="/micro-saas className=text-blue-400 hover:text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents,
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className=text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href="/ai-services className=text-purple-400 hover:text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions,
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className=text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href="/it-services className=text-green-400 hover:text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40>
          <div className=max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8>
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,')}`} className=px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors>
                Email {contact.email}
              </a>
              <Link href=/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors>
                Contact Form
              </Link>
            </div>
            <div className=text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2>Visit us at <a href={contact.site} className=text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        {/* <PerformanceMonitor
          </main>
        </Suspense>
        <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn(Performance thresholds exceeded:', metrics)
          }}
        /> */}
      </ErrorBoundary>
    </>
  )
}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3>AI-Powered Solutions</h3>
                <p className=text-gray-300">
                  Leverage cutting-edge artificial intelligence to automate processes and gain competitive advantages
                </p>
              </div>
              
              <div className="card text-center>
                <div className=w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white fill=none" stroke="currentColor viewBox=0 0 24 24">
                    <path strokeLinecap="round strokeLinejoin=round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z />
                  </svg>
                </div>
                <h3 className=text-xl font-semibold mb-3">Lightning Fast Performance</h3>
                <p className="text-gray-300>
                  Optimized solutions that deliver exceptional performance and scalability for your business needs
                </p>
              </div>
              
              <div className=card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <svg className=w-8 h-8 text-white" fill="none stroke=currentColor" viewBox="0 0 24 24>
                    <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3>Enterprise Security</h3>
                <p className=text-gray-300">
                  Bank-level security measures to protect your data and ensure compliance with industry standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20>
            </motion.div>

        {/* Featured Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and effective technology solutions
              </p>
            </motion.div>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
            </div>;
          </div>;
        </section>;

        {/* Featured Services */}
        <section className="py-16 bg-white>;
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12>;
              <h2 className=text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Featured Solutions;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto>;
                Our most popular and effective technology solutions;
              </p>;
            </motion && motion.div>;

            <div className=grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {featuredServices && featuredServices.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className=text-3xl mb-4">{service && service.icon}</div>;
                  <h3 className="text-xl font-semibold mb-4 text-gray-900>{service && service.title}</h3>;
                  <p className=text-gray-600 mb-4">{service && service.description}</p>;
                  <ul className="text-sm text-gray-500 space-y-2 mb-4>;
                    {service && service.features.map((feature, idx) => (;
                      <li key={idx}>• {feature}</li>;
                    ))}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className=p-6 h-full">
                    <div className="text-cyan-400 mb-4>
                      {service.icon}
                    </div>
                    <h3 className=text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed>
                      {service.description}
                    </p>
                    <ul className=space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400>
                          <CheckCircle className=w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8>
              {stats.map((stat, index) => (
                <div key={index} className=text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2>
                    {stat.number}
                  </div>
                  <div className=text-gray-600">{stat.label}</div>
                </div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              ))}
            </div>
          </div>
        </section>



main




        {/* Why Choose Us */}



origin/automation-improvements-final
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </motion.div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            <div className="text-center mb-16>
              <h2 className=text-4xl font-bold mb-4 gradient-text">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto>
                Comprehensive technology solutions tailored to your business requirements
              </p>
            </motion.div>
            <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div

        <section className="py-16 bg-gray-50>;
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12>;
              <h2 className=text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto>;
                We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </motion && motion.div>;

            <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {whyChooseUs && whyChooseUs.map((item, index) => (;
                <motion&& motion.div

                  key={index}
                  className="text-center
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className=bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600 />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>

                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full>
                    <div className=text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white>
                      {service.title}
                    </h3>
                    <p className=text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 />
        {/* Services Section */}
        <section className=py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4>
                Our Services
              </h2>
              <p className=text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your
                business forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow"
                >
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6>
                    <service.icon className=w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center>
                    {service.title}
                  </h3>
                  <p className=text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>

                  {/* Featured Services */}
                  <div className="mb-6>
                    <h4 className=text-sm font-semibold text-gray-700 mb-3">
                      Featured Solutions:
                    </h4>
                    <div className="grid grid-cols-2 gap-2>
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className=text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded"
                        >
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
<p className="text-gray-600>{item.description}</p>
origin/main
                  <p className="text-gray-600">{item.description}</p>
main
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className=py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4>
                Why Choose Zion Tech Group?
              </h2>
              <p className=text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
                We deliver exceptional results through innovation, expertise, and dedication              </p>
ursor/fix-lint-push-and-merge-to-main-ae4e

            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8>
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className=text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}

        {/* Testimonials Section */}
        <section className="py-20 px-4>
          <div className=max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our <span className="text-cyan-400>Clients Say</span>
              </h2>
              <p className=text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Heres what our satisfied clients have to say.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className=p-6">
                    <div className="flex mb-4>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className=w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link href={service.href} className="block>
                    <div className=w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover: bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2 />
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className=text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto>
                Lets discuss how our technology solutions can drive your success
              </p>
              <div className=flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact
                  className=bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center">;
                  Get Free Consultation;
                  <ArrowRight className="w-5 h-5 ml-2 />;
                </Link>;
                <Link
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Phone className=w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </motion.div>





                </Link>
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20>
          <div className=max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
ursor/integrate-build-improve-and-re-verify-8f7d

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white>
                Ready to Transform Your Business?
              </h2>
              <p className=text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <Button size=lg" className="group>
                  Start Your Journey
                  <ChevronRight className=w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline size=lg">
                  Schedule Consultation
                </Button>
main

        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
main

        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20>
          <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 gradient-text>Ready to Transform Your Business?</h2>
            <p className=text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <Link href=/contact" className="btn-primary>
                Start Your Project
              </Link>
              <Link href=/about" className="btn-secondary>
                Learn More About Us
              </Link>
            </div>


</Link>
    );
    } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
    phone: '+1 302 464 0950,
    email: kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709,
    site: https://ziontechgroup.com'
  }
  const featuredServices: Service[] = [
    {
      id: 'ai-automation,
      title: AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.,
      category: AI Services',
      features: ['Process Automation, Machine Learning', 'Natural Language Processing, Predictive Analytics']
    },
    {
      id: 'cloud-optimization,
      title: Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.,
      category: IT Solutions',
      features: ['AWS/Azure/GCP, Container Orchestration', 'Auto-scaling, Cost Optimization']
    },
    {
      id: 'micro-saas,
      title: Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.,
      category: Micro SaaS',
      features: ['Rapid Development, User-friendly Design', 'API Integration, Scalable Architecture']
      } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered IT Services</title>
        <meta name=description" content="Leading provider of AI-powered IT services and solutions for modern businesses />
        <meta name=viewport" content="width=device-width, initial-scale=1 />
        <link rel=icon" href="/favicon.ico />
        <meta property=og:title" content="Zion Tech Group - AI-Powered IT Services />
        <meta property=og:description" content="Leading provider of AI-powered IT services and solutions />
        <meta property=og:type" content="website />
        <meta property=og:url" content="https://ziontechgroup.com />
      </Head>
      <main className=min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden>
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center>
              <h1 className=text-5xl md:text-7xl font-bold text-white mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto>
                AI-Powered IT Services for the Modern Enterprise
              </p>
              <div className=flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services className=bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Explore Services
                </Link>
                <Link href="/contact className=bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-blue-200">Cutting-edge AI solutions for your business needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Solutions</h3>
                <p className="text-blue-200">Leverage artificial intelligence to automate and optimize your business processes</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-blue-200">Rapid deployment and implementation of modern IT solutions</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
                <p className="text-blue-200">Enterprise-grade security and 99.9% uptime guarantee</p>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600>
                We deliver exceptional results through innovation, expertise,
                and dedication
              </p>
            </div>

            <div className=grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center>
                  <div className=bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600 />
                  </div>
                  <h3 className=text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Contact Section */}
        <section className=py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4>
                Competitive Pricing & Expert Support
              </h2>
              <p className=text-lg text-gray-600">
                Transparent pricing with flexible solutions tailored to your
                business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12>
              {/* Pricing Highlights */}
              <div className=bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6>
                  Service Pricing Ranges
                </h3>
                <div className=space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100>
                    <span className=text-gray-700">Micro SaaS Solutions</span>
                    <span className="font-semibold text-blue-600>
                      $99 - $8, 000/month
                    </span>
                  </div>
                  <div className=flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700>AI Services</span>
                    <span className=font-semibold text-blue-600">
                      $1,500 - $100, 000/month
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100>
                    <span className=text-gray-700">IT Services</span>
                    <span className="font-semibold text-blue-600>
                      $1,500 - $100, 000/month
                    </span>
                  </div>
                  <div className=flex justify-between items-center py-3">
                    <span className="text-gray-700>Enterprise Solutions</span>
                    <span className=font-semibold text-blue-600">
                      Custom Pricing
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg>
                  <p className=text-sm text-blue-800">
                    <strong>Free Consultation: </strong> All projects start with
                    a complimentary strategy session to understand your needs
                    and provide accurate pricing.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg p-8 shadow-sm>
                <h3 className=text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4>
                  <div className=flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 />
                    <div>
                      <p className=font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+13024640950
                        className=text-blue-600 hover:text-blue-700"
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center>
                    <Mail className=w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900>Email</p>
                      <a
                        href=mailto:kleber@ziontechgroup.com"
                        className="text-blue-600 hover:text-blue-700
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className=flex items-start">
                    <div className="w-5 h-5 text-blue-600 mr-3 mt-1>
                      <svg fill=currentColor" viewBox="0 0 20 20>
                        <path
                          fillRule=evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z
                          clipRule=evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900>Address</p>
                      <p className=text-gray-600">
                        364 E Main St STE 1008
                        <br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6>
                  <Link
                    href=/contact"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block
                  >
                    Schedule Free Consultation
                  </Link>
                </div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of companies already using our AI-powered solutions
            </p>
            <a href="/ai-services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">IT Services</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive IT solutions to keep your business running smoothly.
            </p>
            <a href="/it-services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Micro SaaS</h2>
            <p className="text-gray-600 mb-4">
              Innovative micro SaaS applications to streamline your operations.
            </p>
            <a href="/micro-saas" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
        </section>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name=description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions. />
        <meta name=keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions />
        <meta name=viewport" content="width=device-width, initial-scale=1.0 />
        <meta name=robots" content="index, follow />
        <meta name=author" content="Zion Tech Group />
        <meta name=language" content="en-US />
        <meta name=revisit-after" content="7 days />
        <meta name=distribution" content="global />
        <meta name=rating" content="general />
        <meta name=theme-color" content="#0f172a />
        <link rel=canonical" href="https://ziontechgroup.com />
        <link rel=icon" href="/favicon.ico />
        <link rel=apple-touch-icon" href="/apple-touch-icon.png />
        <link rel=manifest" href="/site.webmanifest />
        <meta property=og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions />
        <meta property=og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions. />
        <meta property=og:type" content="website />
        <meta property=og:url" content="https://ziontechgroup.com />
        <meta property=og:image" content="https://ziontechgroup.com/og-image.jpg />
        <meta property=og:site_name" content="Zion Tech Group />
        <meta property=og:locale" content="en_US />
        <meta name=twitter:card" content="summary_large_image />
        <meta name=twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions />
        <meta name=twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions. />
        <meta name=twitter:image" content="https://ziontechgroup.com/og-image.jpg />
        <meta name=twitter:site" content="@ziontechgroup />
        <meta name=twitter:creator" content="@ziontechgroup />
      </Head>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <div className=min-h-screen bg-slate-950 text-white">
            {/* Hero Section */  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
            <section className="relative overflow-hidden>
              <div className=absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
              <div className="relative container mx-auto px-4 py-20>
                <div className=text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in>
                    Zion Tech Group
                  </h1>
                  <p className=text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up">
                    Pioneering the future with innovative Micro SaaS, AI & IT Solutions
                  </p>
                  <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto>
                    We deliver cutting-edge technology solutions that transform businesses through intelligent automation,
                    scalable cloud infrastructure, and purpose-built micro applications.
                  </p>
                  <div className=flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                    <Link href="/services className=px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Explore Our Services
                    </Link>
                    <Link href="/contact className=px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-950 rounded-lg font-semibold transition-all duration-300">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats Section */  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
            <section className="py-16 bg-slate-900/50>
              <div className=container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center>
                  <div className=animate-fade-in">
                    <div className="text-4xl font-bold text-blue-400 mb-2>67+</div>
                    <div className=text-gray-300">Services</div>
                  </div>
                  <div className="animate-fade-in style={{ animationDelay: '0.1s }}>
                    <div className=text-4xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300>Projects</div>
                  </div>
                  <div className=animate-fade-in" style={{ animationDelay: 0.2s' }}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2>99.9%</div>
                    <div className=text-gray-300">Uptime</div>
                  </div>
                  <div className="animate-fade-in style={{ animationDelay: '0.3s }}>
                    <div className=text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300>Support</div>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured Services */  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
            <section className=py-20">
              <div className="container mx-auto px-4>
                <div className=text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4>Our Core Services</h2>
                  <p className=text-xl text-gray-400 max-w-2xl mx-auto">
                    Comprehensive technology solutions designed to accelerate your business growth
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8>
                  {featuredServices.map((service, index) => (
                    <div key={service.id} className=bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="mb-6>
                        <div className=w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-lg>{index + 1}</span>
                        </div>
                        <h3 className=text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                        <p className="text-gray-300 mb-4>{service.description}</p>
                      </div>
                      <div className=mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide>Key Features</h4>
                        <ul className=space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300>
                              <span className=w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {feature  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
                            </li>
                          ))  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
                        </ul>
                      </div>
                      <Link href="/services className=inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Learn More
                        <svg className="w-4 h-4 ml-2 fill=none" stroke="currentColor viewBox=0 0 24 24">
                          <path strokeLinecap="round strokeLinejoin=round" strokeWidth={2} d="M9 5l7 7-7 7 />
                        </svg>
                      </Link>
                    </div>
                  ))  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
                </div>
              </div>
            </section>
            {/* Technology Stack */  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
            <section className=py-20 bg-slate-900/30">
              <div className="container mx-auto px-4>
                <div className=text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4>Technology Stack</h2>
                  <p className=text-xl text-gray-400">Built with cutting-edge technologies</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8>
                  {[React', 'Next.js, TypeScript', 'Node.js, Python', 'AWS, Docker', 'Kubernetes, PostgreSQL', 'MongoDB, Redis', 'GraphQL].map((tech, index) => (
                    <div key={tech} className=text-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-2>{tech}</div>
                    </div>
                  ))  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
                </div>
              </div>
            </section>
            {/* Contact Section */  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
            <section className=py-20">
              <div className="container mx-auto px-4>
                <div className=text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4>Get In Touch</h2>
                  <p className=text-xl text-gray-400">Ready to transform your business? Lets talk.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto>
                  <div className=text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center>
                      <svg className=w-6 h-6 text-white" fill="none stroke=currentColor" viewBox="0 0 24 24>
                        <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2>Phone</h3>
                    <p className=text-gray-300">{contact.phone}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl>
                    <div className=w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white fill=none" stroke="currentColor viewBox=0 0 24 24">
                        <path strokeLinecap="round strokeLinejoin=round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z />
                      </svg>
                    </div>
                    <h3 className=font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300>{contact.email}</p>
                  </div>
                  <div className=text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center>
                      <svg className=w-6 h-6 text-white" fill="none stroke=currentColor" viewBox="0 0 24 24>
                        <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round strokeLinejoin=round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z />
                      </svg>
                    </div>
                    <h3 className=font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300 text-sm>{contact.address}</p>
                  </div>
                  <div className=text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center>
                      <svg className=w-6 h-6 text-white" fill="none stroke=currentColor" viewBox="0 0 24 24>
                        <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2>Website</h3>
                    <p className=text-gray-300">{contact.site}</p>
                  </div>
                </div>
              </div>
            </section>
main

          </div>
        </section>
          </div>
        </section>
origin/automation-improvements-final
      </div>
    </MainLayout>
  );
}
ursor/fix-netlify-build-and-merge-to-main-9571

      </main>
    </>




                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center>;
                  <Phone className=w-5 h-5 mr-2" />;
                  Call Now;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  );
}
      </main>;
    </>;
    </div>);
}
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py - 16 bg - gray - 50>;
          <div className=max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12;
            >;
              <h2 className=text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Our Core Services;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto>;
                Comprehensive technology solutions designed to accelerate your business growth;
              </p>;
            </motion.div>;
            <div className=grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white rounded - lg shadow - lg p - 8 hover:shadow - xl transition - shadow;
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className=text - 4xl mb - 4">;
                    <service.icon className="w - 12 h - 12 text - blue - 600 />;
                  </div>;
                  <h3 className=text - xl font - semibold mb - 4 text - gray - 900">{service.title}</h3>;
                  <p className="text - gray - 600 mb - 4>{service.description}</p>;
                  <ul className=text - sm text - gray - 500 space - y-2 mb - 6">;
                    {service.features.map ((feature, idx) => (
                      <li key={idx} className="flex items - center>;
                        <CheckCircle className=w - 4 h - 4 text - green - 500 mr - 2" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <Link;
                    href={service.href}
                    className="text - blue - 600 hover:text - blue - 700 font - semibold flex items - center;
                  >;
                    Learn More;
                    <ArrowRight className=w - 4 h - 4 ml - 1" />;
                  </Link>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Featured Services */}
        <section className="py - 16 bg - white>;
          <div className=max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12;
            >;
              <h2 className=text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Featured Solutions;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto>;
                Our most popular and effective technology solutions;
              </p>;
            </motion.div>;
            <div className=grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {featured_services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white rounded - lg shadow - lg p - 8 hover:shadow - xl transition - shadow;
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className=text - 3xl mb - 4">{service.icon}</div>;
                  <h3 className="text - xl font - semibold mb - 4 text - gray - 900>{service.title}</h3>;
                  <p className=text - gray - 600 mb - 4">{service.description}</p>;
                  <ul className="text - sm text - gray - 500 space - y-2 mb - 4>;
                    {service.features.map ((feature, idx) => (
                      <li key={idx}>• {feature}</li>))}
                  </ul>;
                  <div className=mt - 4">;
                    <span className="text - 2xl font - bold text - blue - 600>{service.price}</span>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Why Choose Us */}
        <section className=py - 16 bg - gray - 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className=text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4>;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className=text - xl text - gray - 600 max - w-3xl mx - auto">;
We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8>;
              {whyChooseUs.map ((item, index) => (
                <motion.div;
                  key={index}
                  className=text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4>;
                    <item.icon className=w - 8 h - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 2 text - gray - 900>{item.title}</h3>;
<p className=text - gray - 600">{item.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 16 bg - blue - 600 text - white>;
          <div className=max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 4>;
                Ready to Transform Your Business?;
              </h2>;
              <p className=text - xl text - blue - 100 mb - 8 max - w-2xl mx - auto">;
                Let's discuss how our technology solutions can drive your success;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center>;
                <Link;
                  href=/contact";
                  className="bg - yellow - 500 text - blue - 900 px - 8 py - 4 rounded - lg font - semibold text - lg hover:bg - yellow - 400 transition - colors flex items - center justify - center;
                >;
                  Get Free Consultation;
                  <ArrowRight className=w - 5 h - 5 ml - 2" />;
                </Link>;
                <Link;
                  href="tel:+13024640950;
                  className=border - 2 border - white text - white px - 8 py - 4 rounded - lg font - semibold text - lg hover:bg - white hover:text - blue - 600 transition - colors flex items - center justify - center";
                >;
                  <Phone className="w - 5 h - 5 mr - 2 />;
                  Call Now;
</Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
</main>;
    </>;
ursor/fix-netlify-build-and-merge-to-main-9571

main

        <section className=py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center>
            <h2 className=text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto>
              Let&apos;s discuss how our technology solutions can drive your
              success. Get started with a free consultation.''
            </p>
            <div className=flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact
                className=bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/about
                className=border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

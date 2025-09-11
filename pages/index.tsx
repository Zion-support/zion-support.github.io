<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Rocket,
  Factory,
  Brain,
  Cloud,
  Shield,
  CheckCircle,
  Star,
  Users,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20


=======
<<<<<<< HEAD


=======
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import Link from 'next/link';
import Head from 'next/head';
import {useState, useEffect, Suspense} from 'react';
import {ContactInfo, AnimationState} from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';

=======
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState, Service } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }))
    }, 100);
    return () => clearTimeout(timer)
  }, []);
  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>

=======

    ),
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

          dangerouslySetInnerHTML={{;
            __html:JSON.stringify({;
              "@context":"https://schema.org",;
              "@type":"Organization",;
              "name":"Zion Tech Group",;
              "url":contact.site,;
              "logo":`${contact.site}/favicon.svg`,;
              "description":"Leading provider of micro SaaS products, AI services, and IT solutions",;
              "address":{;
                "@type":"PostalAddress",;
                "streetAddress":"364 E Main St STE 1008",;
                "addressLocality":"Middletown",;
                "addressRegion":"DE",;
                "postalCode":"19709",;
                "addressCountry":"US";
              },;
              "contactPoint":{;
                "@type":"ContactPoint",;
                "telephone":contact.phone,;
                "contactType":"customer service",;
                "email":contact.email;
              },;

              "sameAs":[contact.site];
            });
          }}
        />;
      </Head>;
      <ErrorBoundary level="page">;
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>;
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">;
          <div className="max-w-4xl mx-auto">;
            <h1 ;
              id="hero-title";
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}
            >;
              Zion Tech Group;
            </h1>;
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              Innovative Micro SaaS, AI Services & IT Solutions;
            </p>;
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              We deliver cutting-edge technology solutions with 150+ micro SaaS products;
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization ;
              to AI automation, quantum computing to blockchain solutions, we help businesses scale ;
              efficiently and securely in the digital age.;
            </p>;
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">;
              <Link ;
                href="/services" ;
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="View all our services";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                View All Services;
              </Link>;
              <Link ;
                href="/services-catalog" ;
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="Browse our services catalog";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                Services Catalog;
              </Link>;
              <Link ;
                href="/contact" ;
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="Get a quote for our services";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                Get Quote;
              </Link>;
            </div>;
            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>;
                <p className="text-slate-300">Micro SaaS Products</p>;
              </div>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>;
                <p className="text-slate-300">AI Services</p>;
              </div>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>;
                <p className="text-slate-300">IT Solutions</p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Overview */}
        <section className="py-16 px-4" role="main">;
          <div className="max-w-6xl mx-auto">;
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">;
              Our Service Categories;
            </h2>;
            <div className="grid md:grid-cols-3 gap-8">;
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">;
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>;
                <p className="text-slate-300 mb-6">;

                  Innovative, focused software solutions including AI-Powered Video Clip Maker, ;

                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.;
                </p>;
                <ul className="text-slate-400 space-y-2 mb-6">;
                  <li>• AI-Powered Video Clip Maker</li>;
                  <li>• Smart Contract Analyzer</li>;
                  <li>• Cybersecurity Threat Intelligence</li>;
                  <li>• Multi-Language Website Translator</li>;
                  <li>• Predictive Inventory Optimizer</li>;
                </ul>;
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">;
                  View All Micro SaaS →;
                </Link>;
              </div>;
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">;
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>;
                <p className="text-slate-300 mb-6">;

                  Advanced artificial intelligence solutions including autonomous AI agents, ;

                  financial trading systems, legal document analysis, and 40+ more AI-powered services.;
                </p>;
                <ul className="text-slate-400 space-y-2 mb-6">;
                  <li>• Autonomous AI Agents</li>;
                  <li>• AI-Powered Financial Trading</li>;
                  <li>• AI Legal Document Analysis</li>;
                  <li>• AI-Powered Voice Analytics</li>;
                  <li>• AI-Powered Search & Discovery</li>;
                </ul>;
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">;
                  View All AI Services →;
                </Link>;
              </div>;
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">;
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>;
                <p className="text-slate-300 mb-6">;

                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, ;

                  DevSecOps automation, and 40+ more enterprise-grade services.;
                </p>;
                <ul className="text-slate-400 space-y-2 mb-6">;
                  <li>• Quantum Computing Consulting</li>;
                  <li>• Blockchain & Web3 Solutions</li>;
                  <li>• DevSecOps & Security Automation</li>;
                  <li>• Enterprise Data Platform</li>;
                  <li>• High-Performance Computing Solutions</li>;
                </ul>;
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">;
                  View All IT Services →;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">;
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">;
                Call {contact.phone}
              </a>;
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">;
                Email {contact.email}
              </a>;
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">;
                Contact Form;
              </Link>;
            </div>;
            <div className="text-slate-400">;
              <p>{contact.address}</p>;
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>;
            </div>;
          </div>;
        </section>;
          </main>;
        </Suspense>;
        {/* <PerformanceMonitor ;          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for modern businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future with advanced IT solutions, AI services, and cutting-edge technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900/50">
=======
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect, Suspense  } from 'react';
import { ContactInfo, AnimationState  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary',
import LoadingSpinner from '../components/LoadingSpinner';

import PerformanceMonitor from '../components/PerformanceMonitor';
export default function Home() {;
  const [animationState, setAnimationState] = useState<AnimationState>({;
    isLoaded: false,;
    hasError: false;

  });
  useEffect(() => {;
    const timer = setTimeout(() => {;
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  if (animationState && animationState.hasError) {;
    return (

      <div className="min-h-screen bg-slate-950 flex items-center justify-center">;
        <div className="text-center text-white">;
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>;
          <button
            onClick={() => window && window.location.reload()} ;
            className="px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700";
=======
import Link from 'next / link';
import Head from 'next / head';
import {useState, useEffect, Suspense} from 'react';
import {ContactInfo, AnimationState} from '../types';
import ErrorBoundary from '../components / ErrorBoundary';
import LoadingSpinner from '../components / LoadingSpinner';
import PerformanceMonitor from '../components / PerformanceMonitor';
export default /**
 * Home - Function description
 */
function Home() {
  const [animation_state, setAnimationState] = useState < AnimationState>({
    is_loaded: false,
    has_error: false;
  });
  useEffect (() => {
    const timer = set_timeout (() => {
      setAnimationState (prev => ({ ...prev, is_loaded: true }));
    }, 100);
    return () => clear_timeout (timer);
  }, []);
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen bg - slate - 950 flex items - center justify - center">;
        <div className="text - center text - white">;
          <h1 className="text - 2xl font - bold mb - 4">Something went wrong</h1>;
          <button;
            on_click={() => window.location.reload ()}
            className="px - 4 py - 2 bg - blue - 600 rounded - lg hover: bg - blue - 700";

          >;
            Reload Page;
          </button>;
        </div>;

      </div>),
  }
  return (

    <>;
      <Head>;
        <title > Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>;
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />;

        <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        <meta name="language" content="en - US" />;
        <link rel="canonical" href={contact.site} />;
        <link rel="icon" href="/favicon.ico" />;
        <link rel="apple - touch - icon" href="/apple - touch - icon.png" />;

        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta property="og:url" content={contact && contact.site} />;
        <meta property="og:type" content="website" />;
        <meta property="og:site_name" content="Zion Tech Group" />;
        <meta property="og:locale" content="en_US" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="twitter:site" content="@ziontechgroup" />;
        <meta name="twitter:creator" content="@ziontechgroup" />;

          type="application / ld + json";
          dangerouslySetInnerHTML={{
            __html:JSON.stringify ({
              "@context":"https://schema.org",
              "@type":"Organization",
              "name":"Zion Tech Group",
              "url":contact.site,
              "logo":`${contact.site}/favicon.svg`,
              "description":"Leading provider of micro SaaS products, AI services, and IT solutions",
              "address":{
                "@type":"PostalAddress",
                "street_address":"364 E Main St STE 1008",
                "address_locality":"Middletown",
                "address_region":"DE",
                "postal_code":"19709",
                "address_country":"US";
              },
              "contact_point":{
                "@type":"ContactPoint",
                "telephone":contact.phone,
                "contact_type":"customer service",
                "email":contact.email;
              },
              "same_as":[contact.site];

            });
=======
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:JSON && JSON.stringify({
              "@context":"https://schema && schema.org",
              "@type":"Organization",
              "name":"Zion Tech Group",
              "url":contact && contact.site,
              "logo":`${contact && contact.site}/favicon && favicon.svg`,
              "description":"Leading provider of micro SaaS products, AI services, and IT solutions",
              "address":{
                "@type":"PostalAddress",
                "streetAddress":"364 E Main St STE 1008",
                "addressLocality":"Middletown",
                "addressRegion":"DE",
                "postalCode":"19709",
                "addressCountry":"US"
              },
              "contactPoint":{
                "@type":"ContactPoint",
                "telephone":contact && contact.phone,
                "contactType":"customer service",
                "email":contact && contact.email
              },
              "sameAs":[contact && contact.site]
            })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }}
        />;
      </Head>;
      <ErrorBoundary level="page">;
        <Suspense fallback={<LoadingSpinner full_screen text="Loading Zion Tech Group..." />}>;
          <main className="min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white">;
        {/* Hero Section */}

            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState && animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              We deliver cutting-edge technology solutions with 150+ micro SaaS products, ;

=======
        <section className="py - 20 px - 4 text - center" role="banner" aria - labelledby="hero - title">;
          <div className="max - w-4xl mx - auto">;
            <h1 ;
              id="hero - title";
              className={`text - 5xl md:text - 6xl font - extrabold tracking - tight mb - 6 transition - all duration - 1000 ${animation_state.is_loaded ? 'opacity - 100 translate - y-0' :'opacity - 0 translate - y-8'}`}
            >;
              Zion Tech Group;
            </h1>;
            <p className={`text - xl md:text - 2xl text - slate - 300 mb - 8 transition - all duration - 1000 delay - 200 ${animation_state.is_loaded ? 'opacity - 100 translate - y-0' :'opacity - 0 translate - y-8'}`}>;
              Innovative Micro SaaS, AI Services & IT Solutions;
            </p>;
            <p className={`text - lg text - slate - 400 mb - 12 max - w-3xl mx - auto transition - all duration - 1000 delay - 400 ${animation_state.is_loaded ? 'opacity - 100 translate - y-0' :'opacity - 0 translate - y-8'}`}>;
              We deliver cutting - edge technology solutions with 150+ micro SaaS products,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization ;
              to AI automation, quantum computing to blockchain solutions, we help businesses scale ;
              efficiently and securely in the digital age.;
            </p>;

            <div className={`flex flex - col sm:flex - row items - center justify - center gap - 4 mb - 12 transition - all duration - 1000 delay - 600 ${animation_state.is_loaded ? 'opacity - 100 translate - y-0' :'opacity - 0 translate - y-8'}`} role="navigation" aria - label="Main navigation">;
              <Link ;
                href="/services" ;
                className="px - 8 py - 3 bg - blue - 600 hover:bg - blue - 700 rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2 focus:ring - offset - slate - 900 focus:visible";
                aria - label="View all our services";
                tab_index={animation_state.is_loaded ? 0 :-1}
              >;
                View All Services;
              </Link>;
              <Link ;
                href="/services - catalog" ;
                className="px - 8 py - 3 bg - purple - 600 hover:bg - purple - 700 rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:ring - offset - 2 focus:ring - offset - slate - 900 focus:visible";
                aria - label="Browse our services catalog";
                tab_index={animation_state.is_loaded ? 0 :-1}
              >;
                Services Catalog;
              </Link>;
              <Link ;
                href="/contact" ;
                className="px - 8 py - 3 bg - slate - 800 hover:bg - slate - 700 border border - white / 10 rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 focus:ring - slate - 500 focus:ring - offset - 2 focus:ring - offset - slate - 900 focus:visible";
                aria - label="Get a quote for our services";
                tab_index={animation_state.is_loaded ? 0 :-1}
              >;
                Get Quote;
              </Link>;
            </div>;
            <div className={`grid md:grid - cols - 3 gap - 6 text - center transition - all duration - 1000 delay - 800 ${animation_state.is_loaded ? 'opacity - 100 translate - y-0' :'opacity - 0 translate - y-8'}`}>;
              <div className="p - 6 bg - slate - 900 / 60 rounded - lg border border - white / 10 hover:border - blue - 500 / 40 transition - all duration - 300 hover:scale - 105">;
                <h3 className="text - 2xl font - bold text - blue - 400 mb - 2" aria - label="150 plus micro SaaS products">150+</h3>;
                <p className="text - slate - 300">Micro SaaS Products</p>;

              </div>;
              <div className="p - 6 bg - slate - 900 / 60 rounded - lg border border - white / 10 hover:border - purple - 500 / 40 transition - all duration - 300 hover:scale - 105">;
                <h3 className="text - 2xl font - bold text - purple - 400 mb - 2" aria - label="100 plus AI services">100+</h3>;
                <p className="text - slate - 300">AI Services</p>;
              </div>;
              <div className="p - 6 bg - slate - 900 / 60 rounded - lg border border - white / 10 hover:border - green - 500 / 40 transition - all duration - 300 hover:scale - 105">;
                <h3 className="text - 2xl font - bold text - green - 400 mb - 2" aria - label="100 plus IT solutions">100+</h3>;
                <p className="text - slate - 300">IT Solutions</p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Overview */}
        <section className="py - 16 px - 4" role="main">;
          <div className="max - w-6xl mx - auto">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - center mb - 12" id="service - categories">;
              Our Service Categories;
            </h2>;

            <div className="grid md:grid - cols - 3 gap - 8">;
              <div className="p - 8 bg - slate - 900 / 60 rounded - xl border border - white / 10 hover:border - blue - 500 / 40 transition - colors">;
                <h3 className="text - 2xl font - bold mb - 4 text - blue - 400">Micro SaaS Products</h3>;
                <p className="text - slate - 300 mb - 6">;
                  Innovative, focused software solutions including AI - Powered Video Clip Maker,

                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.;
                </p>;
                <ul className="text - slate - 400 space - y-2 mb - 6">;
                  <li>• AI - Powered Video Clip Maker</li>;
                  <li>• Smart Contract Analyzer</li>;
                  <li>• Cybersecurity Threat Intelligence</li>;
                  <li>• Multi - Language Website Translator</li>;
                  <li>• Predictive Inventory Optimizer</li>;
                </ul>;
                <Link href="/micro - saas" className="text - blue - 400 hover:text - blue - 300 font - semibold">;
                  View All Micro SaaS →;
                </Link>;
              </div>;

              <div className="p - 8 bg - slate - 900 / 60 rounded - xl border border - white / 10 hover:border - purple - 500 / 40 transition - colors">;
                <h3 className="text - 2xl font - bold mb - 4 text - purple - 400">AI Services</h3>;
                <p className="text - slate - 300 mb - 6">;
                  Advanced artificial intelligence solutions including autonomous AI agents,
                  financial trading systems, legal document analysis, and 40+ more AI - powered services.;

                </p>;
                <ul className="text - slate - 400 space - y-2 mb - 6">;
                  <li>• Autonomous AI Agents</li>;
                  <li>• AI - Powered Financial Trading</li>;
                  <li>• AI Legal Document Analysis</li>;
                  <li>• AI - Powered Voice Analytics</li>;
                  <li>• AI - Powered Search & Discovery</li>;
                </ul>;
                <Link href="/ai - services" className="text - purple - 400 hover:text - purple - 300 font - semibold">;
                  View All AI Services →;
                </Link>;
              </div>;

              <div className="p - 8 bg - slate - 900 / 60 rounded - xl border border - white / 10 hover:border - green - 500 / 40 transition - colors">;
                <h3 className="text - 2xl font - bold mb - 4 text - green - 400">IT & Cloud Services</h3>;
                <p className="text - slate - 300 mb - 6">;
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions,
                  DevSecOps automation, and 40+ more enterprise - grade services.;

                </p>;
                <ul className="text - slate - 400 space - y-2 mb - 6">;
                  <li>• Quantum Computing Consulting</li>;
                  <li>• Blockchain & Web3 Solutions</li>;
                  <li>• DevSecOps & Security Automation</li>;
                  <li>• Enterprise Data Platform</li>;
                  <li>• High - Performance Computing Solutions</li>;
                </ul>;
                <Link href="/it - services" className="text - green - 400 hover:text - green - 300 font - semibold">;
                  View All IT Services →;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Section */}
        <section className="py - 16 px - 4 bg - slate - 900 / 40">;
          <div className="max - w-4xl mx - auto text - center">;
            <h2 className="text - 3xl md:text - 4xl font - bold mb - 8">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text - lg text - slate - 300 mb - 8">;
              Get in touch with our experts to discuss your project requirements and discover ;
              how our innovative solutions can drive your business forward.;
            </p>;

            <div className="flex flex - col sm:flex - row items - center justify - center gap - 4 mb - 8">;
              <a href={`tel:${contact.phone.replace (/[^\d+]/g, '')}`} className="px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 rounded - lg font - semibold transition - colors">;
                Call {contact.phone}
              </a>;
              <a href={`mailto:${contact.email}`} className="px - 6 py - 3 bg - purple - 600 hover:bg - purple - 700 rounded - lg font - semibold transition - colors">;
                Email {contact.email}

              </a>;
              <Link href="/contact" className="px - 6 py - 3 bg - slate - 800 hover:bg - slate - 700 border border - white / 10 rounded - lg font - semibold transition - colors">;
                Contact Form;
              </Link>;
            </div>;

            <div className="text - slate - 400">;
              <p>{contact.address}</p>;
              <p className="mt - 2">Visit us at <a href={contact.site} className="text - blue - 400 hover:text - blue - 300">{contact.site}</a></p>;

            </div>;
          </div>;
        </section>;
          </main>;
        </Suspense>;

          onThresholdExceeded={(metrics) => {;
            console && console.warn('Performance thresholds exceeded:', metrics);

=======
        {/* <PerformanceMonitor ;          show_metrics={process.env.NODE_ENV === 'development'}
          log_metrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn ('Performance thresholds exceeded:', metrics);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
            </div>
          </div>
        </section>
        {/* Services Overview */}
=======

          onThresholdExceeded={(metrics) => {;
            console.warn('Performance thresholds exceeded:', metrics);

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }}
        /> */}
      </ErrorBoundary>;
    </>);}
import React from 'react';

import { Button } from '@/components / ui / button';
;
export default /**
 * HomePage - Function description
 */
function HomePage() {
  return (
    <div className="min - h-screen bg - gray - 50 flex items - center justify - center">;
      <div className="text - center">;
        <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
          Welcome to Zion Tech Group;
        </h1>;
        <p className="text - xl text - gray - 600 mb - 8">;

          Your trusted partner in technology solutions;
        </p>;
        <Button size="lg">;
          Get Started;
        </Button>;
      </div>;

=======


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto">
            <h1 
              id="hero-title"
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Zion Tech Group
            </h1>
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              >
                View All Services
              </Link>
              <Link 
                href="/services-catalog" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="Browse our services catalog"
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                Services Catalog
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible"
                aria-label="Get a quote for our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                Get Quote
              </Link>
            </div>
            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>

            </div>
          </div>
        </section>
<<<<<<< HEAD
=======
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
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics)
          }}
        />
      </ErrorBoundary>
    </>
  )
}
import { Button } from '../src/components/ui/button';

<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered IT Services & Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT services, cybersecurity, cloud infrastructure, and digital transformation solutions. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, cybersecurity, cloud infrastructure, digital transformation, IT consulting, machine learning, data analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AnimatedBackground />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
=======
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge AI technology, robust cybersecurity, 
                and innovative cloud solutions for the digital future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-cyan-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to accelerate your digital transformation journey.
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
=======
        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">;
          <div className="max-w-4xl mx-auto">;
            <h1 ;
              id="hero-title";
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}
            >;
              Zion Tech Group;
            </h1>;
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              Innovative Micro SaaS, AI Services & IT Solutions;
            </p>;
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              We deliver cutting-edge technology solutions with 150+ micro SaaS products, ;
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization ;
              to AI automation, quantum computing to blockchain solutions, we help businesses scale ;
              efficiently and securely in the digital age.;
            </p>;
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">;
              <Link ;
                href="/services" ;
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="View all our services";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                View All Services;
              </Link>;
              <Link ;
                href="/services-catalog" ;
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="Browse our services catalog";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                Services Catalog;
              </Link>;
              <Link ;
                href="/contact" ;
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="Get a quote for our services";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                Get Quote;
              </Link>;
            </div>;
            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>;
                <p className="text-slate-300">Micro SaaS Products</p>;
              </div>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>;
                <p className="text-slate-300">AI Services</p>;
              </div>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>;
                <p className="text-slate-300">IT Solutions</p>;
              </div>;
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics)
          }}
        />
      </ErrorBoundary>
    </>
  )
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
}

          </div>;
        </section>;




        {/* Services Section */}


=======

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
<<<<<<< HEAD

=======
=======



            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge AI technology, robust cybersecurity, 
                and innovative cloud solutions for the digital future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>


          </div>
        </section>

=======
}
          </div>
=======
}          </div>

        </section>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-cyan-400">Services</span>
              </h2>


              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to accelerate your digital transformation journey.




              </p>
            </motion.div>
=======
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              </p>
            </motion.div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
=======
        <section className="py-16 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Our Core Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Comprehensive technology solutions designed to accelerate your business growth;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="text-4xl mb-4">;
                    <service && service.icon className="w-12 h-12 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-4">{service && service.description}</p>;
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">;
                    {service && service.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <Link
                    href={service && service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">;
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </motion && motion.div>;
              ))}
<<<<<<< HEAD



            </motion.div>

=======

=======
=======
            </div>
          </div>
        </section>
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

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
=======
            </div>;
          </div>;
        </section>;

        {/* Featured Services */}
        <section className="py-16 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Featured Solutions;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Our most popular and effective technology solutions;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {featuredServices && featuredServices.map((service, index) => (;
                <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="text-3xl mb-4">{service && service.icon}</div>;
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-4">{service && service.description}</p>;
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">;
                    {service && service.features.map((feature, idx) => (;
                      <li key={idx}>• {feature}</li>;
                    ))}
<<<<<<< HEAD



=======
=======
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <div className="text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
<<<<<<< HEAD

>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
                  </ul>;
                  <div className="mt-4">;
                    <span className="text-2xl font-bold text-blue-600">{service && service.price}</span>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;




=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Why Choose Us */}



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
=======
<<<<<<< HEAD
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
=======
                We deliver exceptional results through innovation, expertise, and dedication              </p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
            </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

=======


            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business requirements

              </p>


=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div

        <section className="py-16 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {whyChooseUs && whyChooseUs.map((item, index) => (;
                <motion&& motion.div

=======
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
<<<<<<< HEAD


                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <div className="text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
                  <p className="text-gray-600">{item.description}</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
<p className="text-gray-600">{item.description}</p>
>>>>>>> origin/main
                </motion.div>
              ))}
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
            </div>
          </div>
        </section>


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}

                  <p className="text-gray-600">{item.description}</p>
=======
=======



        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose <span className="text-cyan-400">Zion Tech</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast</h3>
                <p className="text-gray-300">
                  Rapid deployment and implementation with minimal downtime to keep your business running smoothly.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Secure & Reliable</h3>
                <p className="text-gray-300">
                  Enterprise-grade security measures and 99.9% uptime guarantee to protect your critical data.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI-Powered</h3>
                <p className="text-gray-300">
                  Leverage the latest AI technologies to automate processes and gain valuable insights from your data.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
=======
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <item && item.icon className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item && item.title}</h3>;
                  <p className="text-gray-600">{item && item.description}</p>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                  </Card>
<<<<<<< HEAD






=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                </motion.div>
=======
<<<<<<< HEAD
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
<p className="text-gray-600">{item.description}</p>
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
                </motion.div>

=======

                  <p className="text-gray-600">{item.description}</p>                </motion.div>
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              ))}
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
            </div>
          </div>
        </section>
        {/* CTA Section */}
<<<<<<< HEAD


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
=======
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
        <section className="py-16 bg-blue-600 text-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
                Let's discuss how our technology solutions can drive your success;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center">;
                  Get Free Consultation;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </Link>;
                <Link
                  href="tel:+13024640950"
<<<<<<< HEAD

=======
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
<<<<<<< HEAD
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Your Journey
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
<<<<<<< HEAD

>>>>>>> origin/automation-improvements-final
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              </div>
=======
                </Link>              </div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
            </motion.div>
=======




        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>


>>>>>>> origin/automation-improvements-final
=======

</Link>
=======
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  const featuredServices: Service[] = [
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      category: 'AI Services',
      features: ['Process Automation', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.',
      category: 'Micro SaaS',
      features: ['Rapid Development', 'User-friendly Design', 'API Integration', 'Scalable Architecture']
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="language" content="en-US" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
      </Head>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="min-h-screen bg-slate-950 text-white">
            {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
              <div className="relative container mx-auto px-4 py-20">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                    Zion Tech Group
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up">
                    Pioneering the future with innovative Micro SaaS, AI & IT Solutions
                  </p>
                  <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
                    We deliver cutting-edge technology solutions that transform businesses through intelligent automation,
                    scalable cloud infrastructure, and purpose-built micro applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                    <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Explore Our Services
                    </Link>
                    <Link href="/contact" className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-950 rounded-lg font-semibold transition-all duration-300">
                      Get In Touch
                    </Link>
                  </div>
                </div>

              </div>
            </section>
            {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            <section className="py-16 bg-slate-900/50">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="animate-fade-in">
                    <div className="text-4xl font-bold text-blue-400 mb-2">67+</div>
                    <div className="text-gray-300">Services</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </section>
            {/* Featured Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Comprehensive technology solutions designed to accelerate your business growth
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service, index) => (
                    <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </li>
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </ul>
                      </div>
                      <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            </section>
            {/* Technology Stack */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-20 bg-slate-900/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
                  <p className="text-xl text-gray-400">Built with cutting-edge technologies</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map((tech, index) => (
                    <div key={tech} className="text-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tech}</div>
                    </div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
            </section>
            {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-xl text-gray-400">Ready to transform your business? Let's talk.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">{contact.phone}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">{contact.email}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300 text-sm">{contact.address}</p>
                  </div>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Website</h3>
                    <p className="text-gray-300">{contact.site}</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </section>
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
          </div>
        </section>


=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      </div>

    </MainLayout>
  );
}
<<<<<<< HEAD

=======



=======
      </main>
    </>



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
</main>
    </>
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">;
                  <Phone className="w-5 h-5 mr-2" />;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py - 16 bg - gray - 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Our Core Services;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                Comprehensive technology solutions designed to accelerate your business growth;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white rounded - lg shadow - lg p - 8 hover:shadow - xl transition - shadow";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="text - 4xl mb - 4">;
                    <service.icon className="w - 12 h - 12 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 4 text - gray - 900">{service.title}</h3>;
                  <p className="text - gray - 600 mb - 4">{service.description}</p>;
                  <ul className="text - sm text - gray - 500 space - y-2 mb - 6">;
                    {service.features.map ((feature, idx) => (
                      <li key={idx} className="flex items - center">;
                        <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <Link;
                    href={service.href}
                    className="text - blue - 600 hover:text - blue - 700 font - semibold flex items - center";
                  >;
                    Learn More;
                    <ArrowRight className="w - 4 h - 4 ml - 1" />;
                  </Link>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Featured Services */}
        <section className="py - 16 bg - white">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Featured Solutions;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                Our most popular and effective technology solutions;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {featured_services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white rounded - lg shadow - lg p - 8 hover:shadow - xl transition - shadow";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="text - 3xl mb - 4">{service.icon}</div>;
                  <h3 className="text - xl font - semibold mb - 4 text - gray - 900">{service.title}</h3>;
                  <p className="text - gray - 600 mb - 4">{service.description}</p>;
                  <ul className="text - sm text - gray - 500 space - y-2 mb - 4">;
                    {service.features.map ((feature, idx) => (
                      <li key={idx}>• {feature}</li>))}
                  </ul>;
                  <div className="mt - 4">;
                    <span className="text - 2xl font - bold text - blue - 600">{service.price}</span>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Why Choose Us */}
        <section className="py - 16 bg - gray - 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {whyChooseUs.map ((item, index) => (
                <motion.div;
                  key={index}
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <item.icon className="w - 8 h - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 2 text - gray - 900">{item.title}</h3>;
<p className="text - gray - 600">{item.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 16 bg - blue - 600 text - white">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - blue - 100 mb - 8 max - w-2xl mx - auto">;
                Let's discuss how our technology solutions can drive your success;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="/contact";
                  className="bg - yellow - 500 text - blue - 900 px - 8 py - 4 rounded - lg font - semibold text - lg hover:bg - yellow - 400 transition - colors flex items - center justify - center";
                >;
                  Get Free Consultation;
                  <ArrowRight className="w - 5 h - 5 ml - 2" />;
                </Link>;
                <Link;
                  href="tel:+13024640950";
                  className="border - 2 border - white text - white px - 8 py - 4 rounded - lg font - semibold text - lg hover:bg - white hover:text - blue - 600 transition - colors flex items - center justify - center";
                >;
                  <Phone className="w - 5 h - 5 mr - 2" />;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
=======
      </main>
    </>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
<<<<<<< HEAD
      </main>
    </>
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

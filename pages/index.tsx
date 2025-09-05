import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import { ChevronRightIcon, SparklesIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
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
        <script
          type="application/ld+json"
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
      
      <ErrorBoundary level="page">
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
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
                </Link>
              </div>

              <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl mr-4 group-hover:bg-green-500/30 transition-colors">
                    <CloudIcon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">IT & Cloud Services</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Quantum Computing Consulting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Blockchain & Web3 Solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    DevSecOps & Security Automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Enterprise Data Platform
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    High-Performance Computing Solutions
                  </li>
                </ul>
                <Link href="/it-services" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform">
                  View All IT Services
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our experts to discuss your project requirements and discover 
                how our innovative solutions can drive your business forward.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <span className="flex items-center">
                  Call {contact.phone}
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href={`mailto:${contact.email}`} 
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <span className="flex items-center">
                  Email {contact.email}
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-white/20 hover:border-white/30 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow backdrop-blur-sm"
              >
                <span className="flex items-center">
                  Contact Form
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
            
            <div className="p-8 bg-slate-900/40 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-slate-300 space-y-2">
                <p className="text-lg font-medium">{contact.address}</p>
                <p className="text-slate-400">
                  Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">{contact.site}</a>
                </p>
              </div>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics);
          }}
        />
      </ErrorBoundary>
    </>
  );
}
